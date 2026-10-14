<!-- docs/01_estructura_proyecto.md -->
# 01 - Estructura Base y Arquitectura (POM)

## Descripción General
Este repositorio establece un entorno de automatización de pruebas con **Playwright** y **TypeScript** estructurado bajo el patrón **Page Object Model (POM)**, enfocado en la reutilización de código, mantenibilidad y seguridad.

## Arquitectura de Carpetas
La lógica se ha modularizado estrictamente para evitar scripts secuenciales:

- `src/pages/`: **Page Objects**. Clases que encapsulan los selectores (locators) y las acciones específicas de cada página de la aplicación.
- `src/tests/`: **Test Suites**. Archivos `.spec.ts` que consumen las clases de `pages`. Se mantienen limpios y descriptivos, enfocados únicamente en la aserción y el flujo de la prueba.
- `src/utils/`: **Helpers y Utilidades**. Funciones transversales (ej. generación de datos dinámicos, configuraciones base, manejadores de estado).
- `src/data/`: **Data-Driven Testing**. Fixtures y archivos JSON para parametrizar pruebas. *Regla de seguridad: Ningún dato sensible debe guardarse aquí.*
- `docs/`: Documentación progresiva del sistema de pruebas.

## Estándares de Seguridad y Buenas Prácticas
1. **Gestión de Credenciales:** Uso obligatorio de `dotenv` (`.env`). Las credenciales, tokens o URLs de entornos privados jamás se escriben en texto plano dentro del código.
2. **Git Ignore:** El archivo `.env` y los reportes locales (`test-results/`) están excluidos del control de versiones para evitar filtraciones de datos en el repositorio público.
3. **Código Compacto:** Uso de métodos encadenados y promesas asíncronas optimizadas provistas por Playwright para reducir la verbosidad de las clases.