---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Carta digital (index.html)

Modo: Operate. El visitante completa una tarea: ver si está abierto, elegir productos y mandar el pedido por WhatsApp.

## Alcance

Una sola página: tablero de estado, menú por categorías con barra fija, carrito con cantidades, hoja de pedido (nombre, retiro/envío, pago, aclaración) que abre WhatsApp, e información del local (horarios por día, ubicación con mapa, contacto).

## Restricciones

HTML/CSS/JS sin build, datos en `data/*.json`, menos de 2 s con datos móviles, una sola fuente tipográfica propia (Bebas Neue, autoalojada), texto de cuerpo con la fuente del sistema. Datos sin confirmar se ocultan, no se inventan (WhatsApp, redes, envío, fotos).

## Direction contract

THESIS: La carta es el tablero de salidas del puesto: estado, horario y precios se leen de un vistazo en filas y columnas fijas. Rechaza la carta de delivery con tarjetas y fotos (lo que ya hace el catálogo de WhatsApp) y la parrilla de brasas y madera.

OWN-WORLD: Tablero negro mate con letras blancas condensadas en Bebas Neue, como el cartel del local; cuerpo blanco tiza con texto del sistema; ámbar de lámpara solo para estado abierto, selección y pedido; rojo brasa para cerrado, agotado y errores. Reglas de 1px, filas altas, precio en una columna tabular fija, sin tarjetas.

STORY: El cliente sabe en un segundo si está abierto y hasta cuándo, salta a su categoría, agrega con un toque, ve crecer el total y manda el pedido completo por WhatsApp.

FIRST VIEWPORT: A 390×844, tablero negro arriba con logo, filas ESTADO, HOY y DÓNDE; debajo la barra de categorías fija sobre negro con subrayado ámbar; el menú empieza visible con encabezado de categoría y filas Producto · $U · Agregar. La barra del pedido (negra, total en ámbar) aparece abajo al agregar. Movimiento distintivo: el total y el estado cambian como un tablero, con los dígitos que cambian cayendo en cascada en su lugar, sin mover la fila.

FORM: Tablero de la terminal, candidato 6 de 7 en la lista ordenada; seed:175ce2e509c986b7.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Pendiente

Número de WhatsApp, enlace de Maps, Instagram y Facebook, envío, nombres del postre y de la cerveza Pilsen, fotos originales.
