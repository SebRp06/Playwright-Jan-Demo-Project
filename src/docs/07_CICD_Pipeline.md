# Documentación: Integración Continua (CI/CD)

**Referencia al código:** `.github/workflows/playwright.yml`

## Descripción General
El proyecto cuenta con un flujo de integración continua soportado por **GitHub Actions**. Este pipeline garantiza que toda nueva integración de código (Push o Pull Request) pase obligatoriamente por la suite de automatización antes de ser considerada estable.

## Triggers (Disparadores)
El pipeline se activa bajo tres condiciones:
1. `push`: Al enviar código directamente a la rama principal.
2. `pull_request`: Al abrir una solicitud de integración hacia la rama principal.
3. `workflow_dispatch`: Permite la ejecución manual desde la pestaña "Actions" en el repositorio de GitHub.

## Gestión de Variables de Entorno en CI
Para mantener el estándar de seguridad establecido en el Módulo 1, el archivo `.env` nunca se sube al repositorio. En su lugar, el pipeline mapea las variables requeridas consumiéndolas de **GitHub Secrets**.
*Para configurar esto en un fork:* Ve a `Settings > Secrets and variables > Actions` en tu repositorio y agrega `BASE_URL`, `TEST_USER` y `TEST_PASSWORD`.

## Artefactos
Si una prueba falla, Playwright genera capturas de pantalla y rastreos (traces) según lo configurado en `playwright.config.ts`. El pipeline utiliza la acción `upload-artifact` para comprimir la carpeta `playwright-report/` y adjuntarla al resumen de la ejecución en GitHub, permitiendo descargar el reporte HTML completo para depuración visual.