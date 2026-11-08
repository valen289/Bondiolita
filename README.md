# La Bondiolita — Carta digital

Carta digital de La Bondiolita, parrillada sobre Ruta 90 en Paysandú. El cliente ve si el local está abierto, mira el menú con precios, arma el pedido y lo manda por WhatsApp con el mensaje ya escrito.

## Stack (Fase 1: sin backend ni base de datos)

| Parte | Tecnología |
|---|---|
| Lenguaje | HTML + CSS + JavaScript puro, sin paso de build |
| Menú y precios | `data/menu.json` (más adelante, Google Sheets) |
| Datos del local | `data/local.json`: horarios, dirección, WhatsApp, envío, formas de pago |
| Abierto/Cerrado | `js/horario.js`, con la zona horaria `America/Montevideo` |
| Carrito | `js/carrito.js`, en memoria + `localStorage` |
| Pedido | `js/pedido.js`, enlace `wa.me` con el mensaje armado |
| Tipografía | Bebas Neue autoalojada (`fonts/`, licencia OFL), texto con la fuente del sistema |
| Hosting | Cloudflare, con deploy automático desde GitHub. `_headers` define la caché |

## Cambiar precios o productos

Todo está en [`data/menu.json`](data/menu.json). Cada producto tiene:

```json
{ "id": "bondiola-comun", "nombre": "Bondiola común al pan", "descripcion": "", "precio": 180, "foto": null, "disponible": true }
```

- `precio`: número sin puntos ni `$U`.
- `disponible: false` lo muestra como **Agotado** sin borrarlo.
- `id`: no cambiarlo, porque lo usa el carrito.

Horarios, número de WhatsApp, redes y envío se cambian en [`data/local.json`](data/local.json). Mientras `whatsapp` sea `null`, el pedido abre WhatsApp y el cliente elige el chat; con el número cargado, va directo al local. El envío está apagado (`"habilitado": false`) hasta confirmar zona y costo.

## Probar en la computadora

Hace falta un servidor local, porque abriendo `index.html` como archivo no se cargan los datos:

```bash
npx --yes serve@14.2.4 -l 4321 .
```

Después, abrir http://localhost:4321.

## Datos pendientes del local

- [ ] Número de WhatsApp y teléfono
- [ ] Qué postre corresponde a $U 100 y cuál a $U 110
- [ ] Nombre completo de la cerveza "Pilsen O."
- [ ] Qué lleva "completo" y "a la pizza" (descripciones)
- [ ] Envío: si hacen, zona y costo
- [ ] Enlace de Google Maps, Instagram y Facebook
- [ ] Logo original y fotos de los productos

La Fase 2 (panel de administración y registro de pedidos con Node.js + PostgreSQL en Railway) solo se hace si se justifica. La carga de datos está en una sola función de `js/app.js` para poder cambiar la fuente sin tocar el resto.
