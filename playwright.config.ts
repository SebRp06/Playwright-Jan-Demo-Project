import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Cargar variables de entorno desde el archivo .env
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  
  use: {
    // La URL base inyectada desde .env
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    // 1. Proyecto de Setup que ejecuta el login
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },
    // El proyecto principal ahora depende del 'setup' y usa el archivo de estado
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        // Inyección de la sesión guardada en todos los tests de este proyecto
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});