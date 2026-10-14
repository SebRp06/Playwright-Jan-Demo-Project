# 🚀 Framework Avanzado de Automatización E2E | Playwright & TypeScript

[![Playwright](https://img.shields.io/badge/Playwright-Automated_Testing-2EAD33?style=for-the-badge&logo=playwright)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CI/CD](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![AccedIT](https://img.shields.io/badge/AccedIT-QA_&_Accessibility-8A2BE2?style=for-the-badge)](#)

Este repositorio contiene un framework de automatización de pruebas End-to-End (E2E) escalable y robusto, diseñado bajo estrictos estándares de nivel empresarial. Desarrollado por **JanSebastian Rodriguez Peña**, este proyecto sirve como un portafolio técnico que demuestra el dominio integral en el aseguramiento de la calidad del software (QA), automatización y la accesibilidad digital.

---

## 🌟 Características Principales y Arquitectura

El proyecto ha sido construido de manera modular, escalable y mantenible, integrando las siguientes capacidades avanzadas:

1. **Page Object Model (POM):** Arquitectura orientada a objetos con herencia centralizada (`BasePage`) para maximizar la reutilización de código y facilitar el mantenimiento de selectores y acciones.
2. **Gestión de Entornos Seguros:** Manejo estricto de credenciales mediante `dotenv` (`.env`), garantizando la política de Zero Trust y evitando la exposición de datos sensibles en el código fuente.
3. **Data-Driven Testing (DDT):** Parametrización dinámica de pruebas a través de archivos JSON (`src/data`) para ejecutar decenas de escenarios negativos sin duplicar una sola línea de código en las suites.
4. **Generación Dinámica de Datos:** Utilidades transversales e independientes (`src/utils`) para generar información aleatoria y única en tiempo de ejecución (correos, códigos, etc.).
5. **Interceptación de Red (API Mocking):** Simulación de respuestas y códigos de estado HTTP del backend para validar de manera aislada el comportamiento de la interfaz gráfica ante fallos (ej. Error 500).
6. **Autenticación Global (Storage State):** Optimización extrema de tiempos de ejecución, iniciando sesión una única vez a nivel de configuración global e inyectando las cookies de estado en todas las pruebas subsecuentes.
7. **Integración Continua (CI/CD):** Pipeline sólido configurado en GitHub Actions para la ejecución automática de la suite de pruebas tras cada push o Pull Request, garantizando la calidad del código entrante.
8. **Pruebas de Accesibilidad (a11y):** Auditorías automatizadas bajo los estándares internacionales WCAG (Niveles A y AA) integrando directamente `@axe-core/playwright`.
9. **Pruebas de Regresión Visual (VRT):** Comparación estricta (píxel a píxel) de la interfaz gráfica para detectar alteraciones CSS inesperadas en el diseño y en los componentes clave.

---

## 🛠️ Requisitos Previos (Prerequisites)

Para ejecutar este framework localmente, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (Versión 18 LTS o superior recomendada)
- [Git](https://git-scm.com/)

---

## ⚙️ Instalación y Configuración

Sigue estos sencillos pasos para clonar el repositorio y configurar tu entorno de ejecución en pocos minutos:

**1. Clonar el repositorio**
```bash
git clone <URL_DE_TU_REPOSITORIO>
cd <NOMBRE_DE_LA_CARPETA>
```

**2. Instalar todas las dependencias de Node**
```bash
npm install
```

**3. Instalar los binarios de los navegadores de Playwright**
```bash
npx playwright install --with-deps
```

**4. Configurar el Entorno (Environment)**
Este framework utiliza variables de entorno protegidas.
- Copia la plantilla del entorno provista en la raíz:
  ```bash
  cp .env.example .env
  ```
- Abre tu nuevo archivo `.env` y completa los datos reales (URL base, usuarios de prueba, etc.). *Nota: El archivo `.env` ya está ignorado por defecto en `.gitignore` para tu seguridad.*

---

## 🚀 Ejecución de Pruebas (Test Execution)

Playwright CLI ofrece múltiples banderas para adaptar la ejecución a tus necesidades. Aquí están los comandos más utilizados:

**Ejecutar toda la suite en modo "Headless" (Rápido, ideal para CI/CD):**
```bash
npx playwright test
```

**Ejecutar pruebas abriendo la interfaz gráfica del navegador (Modo UI/Debug):**
```bash
npx playwright test --ui
```

**Ejecutar un archivo de prueba específico (ej. Login):**
```bash
npx playwright test src/tests/login.spec.ts
```

**Generar o actualizar las capturas base para Regresión Visual (VRT):**
```bash
npx playwright test --update-snapshots
```
## 💡 Nota: La primera vez que se ejecuten las pruebas visuales en un entorno nuevo fallarán porque Playwright necesita utilizar esa ejecución inicial para crear las imágenes de referencia. Cuando el diseño de la página cambie de forma intencional en el futuro, deberás sobreescribir las imágenes base ejecutando npx playwright test --update-snapshots.

**Ver el reporte HTML interactivo generado tras una ejecución:**
```bash
npx playwright show-report
```

---

## 📂 Estructura del Proyecto

El diseño de carpetas separa las responsabilidades de negocio, de configuración y de datos:

```text
📁 .github/workflows/    # Pipelines de CI/CD (GitHub Actions)
📁 playwright/.auth/     # Sesiones y cookies guardadas (Storage State - Ignorado en git)
📁 src/
 ├── 📁 data/            # Fixtures y JSONs para flujos Data-Driven (DDT)
 ├── 📁 docs/            # Documentación progresiva y técnica (.md)
 ├── 📁 pages/           # Page Objects y abstracciones Base
 ├── 📁 tests/           # Suites de prueba automatizadas (.spec.ts)
 │    └── 📁 setup/      # Scripts globales de pre-condición (ej. Login Global)
 └── 📁 utils/           # Utilidades compartidas y Data Generators
📄 .env.example          # Plantilla pública de variables requeridas
📄 .gitignore            # Reglas de exclusión de repositorio
📄 playwright.config.ts  # Corazón de configuración (Browsers, retries, reporters)
📄 package.json          # Dependencias y scripts de NPM
```

---

## 📚 Documentación Técnica Detallada

Para facilitar el entendimiento de la arquitectura a nuevos desarrolladores o revisores técnicos, cada módulo de este proyecto cuenta con su propia documentación. Explora la carpeta `src/docs/`:

- [01_Estructura_Proyecto.md](./src/docs/01_Estructura_Proyecto.md)
- [02_LoginPage.md](./src/docs/02_LoginPage.md)
- [03_LoginTests.md](./src/docs/03_LoginTests.md)
- [04_DataDrivenTesting.md](./src/docs/04_DataDrivenTesting.md)
- [05_UtilsAndHelpers.md](./src/docs/05_UtilsAndHelpers.md)
- [06_NetworkInterception.md](./src/docs/06_NetworkInterception.md)
- [07_CICD_Pipeline.md](./src/docs/07_CICD_Pipeline.md)
- [08_GlobalAuthentication.md](./src/docs/08_GlobalAuthentication.md)
- [09_AccessibilityTesting.md](./src/docs/09_AccessibilityTesting.md)
- [10_VisualRegressionTesting.md](./src/docs/10_VisualRegressionTesting.md)

---
*Diseñado y desarrollado con pasión por la calidad.*