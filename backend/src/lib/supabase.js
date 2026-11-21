import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Fatal: SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY are required.');
  process.exit(1);
}

export const supabase = createClient(supabaseUrl, supabaseKey);
