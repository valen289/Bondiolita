# La Bondiolita — Carta digital

Carta digital de La Bondiolita, parrilla de Paysandú. El cliente ve el menú con precios, arma su pedido y lo manda por WhatsApp en menos de un minuto.

## Stack (Fase 1: sin backend ni base de datos)

| Parte | Tecnología |
|---|---|
| Lenguaje | HTML + CSS + JavaScript puro |
| Desarrollo | Vite (solo como herramienta; el resultado es HTML/CSS/JS estático) |
| Menú y precios | Google Sheets publicado como CSV, con `menu.json` de respaldo |
| Datos del local | Pestaña "Config" en la misma planilla (horarios, WhatsApp, envío) |
| Abierto/Cerrado | JavaScript con zona horaria `America/Montevideo` |
| Carrito | En memoria + `localStorage` |
| Pedido | Enlace `wa.me` con el mensaje armado |
| Imágenes | WebP optimizadas, carga diferida |
| Hosting | Cloudflare (deploy automático desde GitHub) |

La Fase 2 (panel de administración, registro de pedidos con Node.js + PostgreSQL en Railway) solo se hace si se justifica. La carga del menú queda en una sola función para poder cambiar Sheets por una API sin tocar el resto.

## Datos pendientes del local

- [ ] Número de WhatsApp
- [ ] Menú completo con precios
- [ ] Horarios
- [ ] Dirección
- [ ] Envío: zona y costo
- [ ] Logo y fotos
- [ ] Instagram y Facebook
