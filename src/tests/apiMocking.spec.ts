/**
 * Documentación de este enfoque: src/docs/06_NetworkInterception.md
 */
import { test, expect } from '@playwright/test';

test.describe('Suite de Pruebas: Interceptación de Red (Mocking)', () => {

    test('Debería simular un error 500 del servidor al intentar acceder al inventario', async ({ page }) => {
        // Interceptamos la petición de red hacia el documento HTML principal del inventario
        await page.route('**/inventory.html', async (route) => {
            // Detenemos la petición original y respondemos con un cuerpo HTML personalizado
            await route.fulfill({
                status: 500,
                contentType: 'text/html',
                body: `
                    <!DOCTYPE html>
                    <html>
                        <head><title>Error</title></head>
                        <body>
                            <h1 id="error-500" style="color: red;">Internal Server Error simulado por Playwright</h1>
                        </body>
                    </html>
                `
            });
        });

        // Disparamos la navegación hacia la ruta protegida (Asumiendo que global.setup.ts ya inyectó la sesión)
        await page.goto('/inventory.html');

        // Aserción: Validamos que la interfaz renderice el error inyectado en lugar de la aplicación real
        const errorHeading = page.locator('#error-500');
        await expect(errorHeading).toBeVisible();
        await expect(errorHeading).toHaveText('Internal Server Error simulado por Playwright');
    });
});