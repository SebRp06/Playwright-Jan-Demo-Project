# Documentación: Interceptación de Red y API Mocking

**Referencia al código:** `src/tests/apiMocking.spec.ts`

## Descripción General
Playwright ofrece un control total sobre el tráfico de red del navegador. Mediante `page.route()`, podemos interceptar peticiones HTTP salientes (GET, POST, etc.) y modificar sus respuestas antes de que lleguen al FrontEnd.

## Casos de Uso Comunes Implementados
- **Aislamiento de la UI:** Permite validar el comportamiento de la interfaz gráfica sin depender de la disponibilidad del backend.
- **Simulación de Errores (Edge Cases):** Forzar códigos de estado HTTP (400, 401, 500) que son difíciles o peligrosos de replicar en un entorno real.
- **Velocidad de Ejecución:** Evitar tiempos de latencia de red reales inyectando directamente las cargas útiles (payloads) en formato JSON.

## Funcionamiento Técnico
El método `route.fulfill()` detiene la petición original hacia el servidor y entrega instantáneamente los parámetros configurados (estado, encabezados, cuerpo) directamente a la aplicación web, comportándose exactamente como si la respuesta hubiera viajado por la red real.