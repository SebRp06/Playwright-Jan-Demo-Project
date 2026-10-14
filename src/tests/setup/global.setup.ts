/**
 * Documentación de este enfoque: src/docs/08_GlobalAuthentication.md
 */
import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

// Definimos dónde se guardará el archivo de sesión
const authFile = 'playwright/.auth/user.json';

setup('Autenticación global de la aplicación', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    // Navegamos e iniciamos sesión normalmente
    await loginPage.navigate('/');
    await loginPage.login(
        process.env.TEST_USER || 'standard_user', 
        process.env.TEST_PASSWORD || 'secret_sauce'
    );

    // Es crucial validar que el login fue exitoso ANTES de guardar el estado
    await expect(page).toHaveURL(/.*inventory/);

    // Capturamos el contexto del navegador (cookies, tokens) y lo guardamos
    await page.context().storageState({ path: authFile });
});