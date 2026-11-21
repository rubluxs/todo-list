import fs from 'node:fs';
import { createApp } from './app.js';

// Auto-load .env in environments without CLI flags
if (fs.existsSync('.env') && typeof process.loadEnvFile === 'function') {
  try {
    process.loadEnvFile();
  } catch (err) {
    // Already loaded via CLI or environment
  }
}

// Check required environment variables
const requiredEnvVars = ['SUPABASE_URL', 'SUPABASE_PUBLISHABLE_KEY'];
const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);

if (missingVars.length > 0) {
  console.error(`Fatal: Missing required environment variable(s): ${missingVars.join(', ')}`);
  process.exit(1);
}

const PORT = parseInt(process.env.PORT, 10) || 3000;
const app = createApp();

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
