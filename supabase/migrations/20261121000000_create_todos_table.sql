-- Create todos table
CREATE TABLE IF NOT EXISTS public.todos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL CHECK (char_length(trim(title)) > 0 AND char_length(title) <= 200),
    done BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Ensure Row Level Security is disabled for simple shared list
ALTER TABLE public.todos DISABLE ROW LEVEL SECURITY;

-- Grant permissions to the anon role for public access via publishable key
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.todos TO anon;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon;
