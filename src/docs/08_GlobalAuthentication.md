# Documentación: Autenticación Global (Storage State)

**Referencia al código:** `src/tests/setup/global.setup.ts` y configuración en `playwright.config.ts`

## Descripción General
Para optimizar el tiempo de ejecución y evitar la fragilidad de probar la interfaz de inicio de sesión antes de cada caso de prueba independiente, el framework implementa el manejo de estados de Playwright (`Storage State`). 

## Funcionamiento de la Arquitectura
1. **Proyecto de Setup:** Se ha definido un proyecto especial en `playwright.config.ts` llamado `setup`. Este proyecto contiene un único script (`global.setup.ts`) que se ejecuta estrictamente antes que cualquier otra suite de pruebas.
2. **Captura de Estado:** El script de setup automatiza el flujo de login por la UI. Una vez autenticado exitosamente, extrae las cookies y el estado del `localStorage` o `sessionStorage`, y las guarda en un archivo físico estático (`playwright/.auth/user.json`).
3. **Inyección de Estado:** Los proyectos de navegadores (ej. Chromium, Firefox) declaran una dependencia (`dependencies: ['setup']`) y configuran el parámetro `storageState` apuntando al archivo generado.
4. **Ejecución de Pruebas:** Todos los tests regulares (ej. `inventory.spec.ts`) inician su contexto de navegador con las cookies pre-cargadas. Esto permite que el comando `page.goto('/ruta-protegida')` funcione directamente, simulando a un usuario que ya tiene la sesión iniciada.

## Beneficios
- **Reducción del tiempo de ejecución (CI/CD):** Se elimina el tiempo de espera del login iterativo.
- **Aislamiento de fallos:** Si el login falla, fallará en el setup, deteniendo la ejecución antes de arrojar cientos de falsos positivos en las pruebas internas.