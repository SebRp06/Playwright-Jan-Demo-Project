# 🚀 Framework Avanzado de Automatización E2E | Playwright & TypeScript

[![Playwright](https://img.shields.io/badge/Playwright-Automated_Testing-2EAD33?style=for-the-badge&logo=playwright)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CI/CD](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![AccedIT](https://img.shields.io/badge/AccedIT-QA_&_Accessibility-8A2BE2?style=for-the-badge)](#)

Este repositorio contiene un framework de automatización de pruebas End-to-End (E2E) escalable y robusto, diseñado bajo estándares de nivel empresarial. Desarrollado por **JanSebastian Rodriguez Peña**, este proyecto sirve como un portafolio técnico que demuestra el dominio integral en el aseguramiento de la calidad del software (QA) y la accesibilidad digital.

## 🌟 Características Principales y Arquitectura

El proyecto ha sido construido de manera modular, integrando las siguientes capacidades:

1. **Page Object Model (POM):** Arquitectura orientada a objetos con herencia centralizada (`BasePage`) para maximizar la reutilización de código y facilitar el mantenimiento.
2. **Gestión de Entornos Seguros:** Manejo de credenciales mediante `.env`, evitando la exposición de datos sensibles en el código fuente.
3. **Data-Driven Testing (DDT):** Parametrización de pruebas a través de archivos JSON (`src/data`) para ejecutar múltiples escenarios sin duplicar código.
4. **Generación Dinámica de Datos:** Utilidades transversales (`src/utils`) para generar información aleatoria en tiempo de ejecución.
5. **Interceptación de Red (Mocking):** Simulación de respuestas de APIs y códigos de estado HTTP para probar el comportamiento de la UI ante fallos del servidor.
6. **Integración Continua (CI/CD):** Pipeline configurado en GitHub Actions para ejecución automática de la suite tras cada integración de código.
7. **Autenticación Global:** Optimización de tiempos de ejecución mediante *Storage State*, iniciando sesión una única vez e inyectando el estado en las pruebas subsecuentemente.
8. **Pruebas de Accesibilidad (a11y):** Auditorías automatizadas bajo el estándar WCAG integrando `@axe-core/playwright`.
9. **Pruebas de Regresión Visual (VRT):** Comparación píxel a píxel de la interfaz gráfica para detectar alteraciones inesperadas en el diseño.

---

## 🛠️ Requisitos Previos

Asegúrate de tener instalado en tu máquina local:
- [Node.js](https://nodejs.org/) (Versión 18 o superior)
- [Git](https://git-scm.com/)

---

## ⚙️ Instalación y Configuración

Sigue estos pasos para clonar el repositorio y configurar el entorno de ejecución:

**1. Clonar el repositorio**
```bash
git clone <URL_DE_TU_REPOSITORIO>
cd <NOMBRE_DE_LA_CARPETA>