/**
 * Documentación asociada: src/docs/08_GlobalAuthentication.md
 */
import { test, expect } from '@playwright/test';

test.describe('Suite de Pruebas: Inventario (Usando Storage State)', () => {
    
    test('Debería acceder a la vista protegida sin pasar por el formulario de login', async ({ page }) => {
        // Navegamos directamente a la ruta protegida. 
        // Playwright ya inyecta la cookie de sesión gracias al setup project.
        await page.goto('/inventory.html');
        
        // Verificamos que el sistema reconozca la sesión activa
        const headerTitle = page.locator('.title');
        await expect(headerTitle).toBeVisible();
        await expect(headerTitle).toHaveText(/Products/i);
    });
});