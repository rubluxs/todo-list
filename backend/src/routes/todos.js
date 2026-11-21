import { Router } from 'express';
import { supabase } from '../lib/supabase.js';

const router = Router();

function formatTodo(row) {
  return {
    id: row.id,
    title: row.title,
    done: row.done,
    createdAt: row.created_at
  };
}

// GET /todos - List all tasks, newest first
router.get('/', async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from('todos')
      .select('id, title, done, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      return next(error);
    }

    const todos = (data || []).map(formatTodo);
    res.status(200).json(todos);
  } catch (err) {
    next(err);
  }
});

// POST /todos - Add a new task
router.post('/', async (req, res, next) => {
  try {
    const { title } = req.body || {};

    if (typeof title !== 'string') {
      return res.status(400).json({ error: 'Title must be a string' });
    }

    const trimmedTitle = title.trim();

    if (trimmedTitle.length === 0) {
      return res.status(400).json({ error: 'Title cannot be empty' });
    }

    if (trimmedTitle.length > 200) {
      return res.status(400).json({ error: 'Title must be 200 characters or less' });
    }

    const { data, error } = await supabase
      .from('todos')
      .insert([{ title: trimmedTitle, done: false }])
      .select('id, title, done, created_at')
      .single();

    if (error) {
      return next(error);
    }

    res.status(201).json(formatTodo(data));
  } catch (err) {
    next(err);
  }
});

// PATCH /todos/:id - Update title and/or done status
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, done } = req.body || {};

    if (title === undefined && done === undefined) {
      return res.status(400).json({ error: 'At least one of title or done must be provided' });
    }

    const updates = {};

    if (title !== undefined) {
      if (typeof title !== 'string') {
        return res.status(400).json({ error: 'Title must be a string' });
      }
      const trimmedTitle = title.trim();
      if (trimmedTitle.length === 0) {
        return res.status(400).json({ error: 'Title cannot be empty' });
      }
      if (trimmedTitle.length > 200) {
        return res.status(400).json({ error: 'Title must be 200 characters or less' });
      }
      updates.title = trimmedTitle;
    }

    if (done !== undefined) {
      if (typeof done !== 'boolean') {
        return res.status(400).json({ error: 'Done must be a boolean' });
      }
      updates.done = done;
    }

    const { data, error } = await supabase
      .from('todos')
      .update(updates)
      .eq('id', id)
      .select('id, title, done, created_at')
      .maybeSingle();

    if (error) {
      return next(error);
    }

    if (!data) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(formatTodo(data));
  } catch (err) {
    next(err);
  }
});

// DELETE /todos/:id - Delete a task
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id)
      .select('id')
      .maybeSingle();

    if (error) {
      return next(error);
    }

    if (!data) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

export default router;
