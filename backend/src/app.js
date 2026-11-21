import express from 'express';
import todosRouter from './routes/todos.js';
import { errorHandler } from './middleware/errorHandler.js';

export function createApp() {
  const app = express();

  // Parse JSON bodies with a reasonable small limit
  app.use(express.json({ limit: '10kb' }));

  // CORS middleware: allow FRONTEND_URL and local dev origin
  app.use((req, res, next) => {
    const configuredOrigin = process.env.FRONTEND_URL;
    const origin = req.headers.origin;

    // Allowed origins: configured FRONTEND_URL, local dev, or when origin is absent (server-to-server)
    if (origin) {
      if (
        origin === configuredOrigin ||
        origin === 'http://localhost:5173' ||
        origin === 'http://127.0.0.1:5173' ||
        origin === 'http://localhost:3000' ||
        !configuredOrigin
      ) {
        res.setHeader('Access-Control-Allow-Origin', origin);
      }
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
      return res.sendStatus(204);
    }
    next();
  });

  // Health route
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'server is running' });
  });

  // Todos routes
  app.use('/todos', todosRouter);

  // 404 for undefined routes
  app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
  });

  // Central error handler
  app.use(errorHandler);

  return app;
}
