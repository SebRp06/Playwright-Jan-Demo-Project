/**
 * Documentacion de este enfoque: src/docs/04_DataDrivenTesting.md
 */
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
// Importacion del archivo JSON con los datos configurados de prueba
import testData from '../data/users.json';

test.describe('Suite de Pruebas DDT: Validaciones negativas de Login', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate('/'); 
    });

    // Iteacion sobre el arreglo de datos JSON para generar tests dinamicos
    for (const data of testData) {
        test(`Debería fallar el login - Caso: ${data.testCase}`, async () => {
            // Pasamos los datos específicos de esta iteración al Page Object
            await loginPage.login(data.username, data.password);

            const errorText = await loginPage.getErrorMessage();
            
            // Aserción: Validacion que el error en pantalla coincida con el esperado en el JSON
            expect(errorText).toContain(data.expectedError);
        });
    }
});