/**
 * Documentacion de estas pruebas: src/docs/03_LoginTests.md
 */
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Suite de Pruebas: Inicio de Sesión', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        // Navegacion a la raiz. La URL base ya esta en playwright.config.ts
        await loginPage.navigate('/'); 
    });

    test('Debería iniciar sesión correctamente con credenciales válidas', async ({ page }) => {
        // Variables de entorno para mayor seguridad de los datos
        const user = process.env.TEST_USER || 'standard_user';
        const password = process.env.TEST_PASSWORD || 'secret_sauce';

        await loginPage.login(user, password);

        // Aserción: Verificar que la URL cambió o que el login fue exitoso
        await expect(page).toHaveURL(/.*inventory.html/);
    });

    test('Debería mostrar un error con credenciales inválidas', async () => {
        await loginPage.login('usuario_incorrecto', 'clave_invalida');

        const errorText = await loginPage.getErrorMessage();
        
        // Aserción: Verificar el mensaje de error esperado
        expect(errorText).toContain('Epic sadface: Username and password do not match');
    });
});