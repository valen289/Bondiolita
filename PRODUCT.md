# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

HTML, CSS y JavaScript puro, sin paso de build (elegido por el usuario). Los archivos se publican tal cual en Cloudflare con deploy automático desde GitHub (`valen289/Bondiolita`). Sin backend ni base de datos en la Fase 1. Los datos viven en archivos JSON (`data/`), con Google Sheets como fuente editable más adelante. La carga de datos queda en un solo módulo para poder cambiar la fuente sin tocar el resto.

## Users

Clientes de La Bondiolita, parrilla al paso sobre Ruta 90 en Paysandú, Uruguay. Usan el celular, muchas veces con datos móviles: escanean un QR en la mesa o el mostrador, o abren el enlace desde Instagram o WhatsApp. Quieren saber qué hay, cuánto sale y si el local está abierto, y pedir rápido.

El segundo usuario es el dueño del local: recibe los pedidos por WhatsApp y tiene que poder cambiar precios sin depender de un desarrollador.

## Product Purpose

Carta digital con pedido por WhatsApp. El cliente ve el menú con precios, arma el pedido y lo envía por WhatsApp con el mensaje ya armado en menos de un minuto.

El éxito es que al local le lleguen pedidos ordenados, con total, nombre, forma de entrega y forma de pago, en lugar de varios mensajes sueltos, y que los precios publicados estén siempre al día.

## Positioning

No reemplaza WhatsApp ni compite con PedidosYa: ordena el canal que el local ya usa. El pedido llega completo y calculado, sin comisión de intermediarios.

El local ya tiene un catálogo de WhatsApp Business con carrito, fotos y precios (se abre desde Instagram). La carta web solo tiene sentido si hace lo que ese catálogo no hace: decir si está abierto ahora y cuándo abre, mostrar cómo llegar al puesto sobre la ruta, abrirse desde Google, un QR o un enlace sin entrar a WhatsApp, y mandar el pedido completo con nombre, retiro o envío, pago y aclaración, no solo la lista de productos.

Riesgo conocido: si los precios se cargan en dos lugares (catálogo de WhatsApp y carta web), se van a desfasar.

## Operating Context

- El local atiende de lunes a sábado de 11:00 a 15:00, y jueves, viernes y sábado de 20:00 a 00:00. Domingo cerrado.
- Ubicación según su propio cartel: "Ruta 90 pasando Puente Seco, Ruta 3".
- Los precios en Uruguay cambian seguido; una carta desactualizada es peor que no tener carta.
- La mayoría llega desde su casa o desde la ruta (Instagram, WhatsApp, Google), no desde el QR del local. Piden para retirar o, si se confirma, con envío.
- Envío a domicilio: sin confirmar. La opción existe en la configuración pero queda apagada hasta saber zona y costo.
- Moneda: pesos uruguayos, mostrados como `$U`.
- Zona horaria: `America/Montevideo`.

## Capabilities and Constraints

- Portada con nombre, frase corta y estado Abierto/Cerrado calculado según el horario.
- Menú por categorías con barra fija de categorías. Cada producto: nombre, descripción corta opcional, precio en `$U`, foto opcional.
- Carrito con cantidad editable y botón flotante con cantidad y total.
- Pedido por WhatsApp: nombre, retiro o envío (con dirección), pago en efectivo o transferencia, aclaración opcional.
- Información del local: dirección con mapa, horarios, teléfono, Instagram y Facebook.
- Debe cargar en menos de 2 segundos con datos móviles.
- Botones grandes, texto legible.

Datos sin confirmar (no inventar):

- Número de WhatsApp y teléfono.
- Si hacen envío, a qué zona y con qué costo.
- Qué es cada precio del postre ($U 100 / $U 110).
- Nombre completo de la cerveza "Pilsen O.".
- Descripciones de los productos (qué lleva "completo", "a la pizza").
- Enlace exacto de Google Maps, Instagram y Facebook.
- Fotos de los productos.

## Brand Commitments

- Nombre: La Bondiolita.
- El cartel del local usa tuteo ("Ubícanos"). En la interfaz se prefieren infinitivos ("Agregar", "Enviar pedido") para no forzar tú ni vos.
- Logo existente (foto de perfil de Instagram): monocromo, negro sobre blanco. Un círculo con una parrilla tipo kettle humeando, "LA BONDIOLITA" en mayúsculas condensadas y gruesas entre líneas horizontales, y "PARRILLADA" en mayúsculas finas y espaciadas debajo. Los colores de marca confirmados son solo negro y blanco.
- El documento del proyecto pide un estilo de parrilla: cálido, legible y con botones grandes.
- No hay archivo original del logo; solo una captura de pantalla. Pedir el archivo original al local.

## Evidence on Hand

- Menú real con precios, transcrito del cartel del local (`data/menu.json`).
- Catálogo de WhatsApp Business del local (captura del usuario): fotos propias de hamburguesas, chorizo y bondiolas, y nombres más completos ("Hamburguesa completa (1 carne)", "Chorizo al pan completo", "Bondiola común al pan", "Bondiola a la pizza al pan"). Los precios coinciden con el cartel.
- Foto del puesto: estructura tipo contenedor con techo, cartel negro con "LA BONDIOLITA" en blanco y "PAYSANDÚ, URUGUAY" con bandera; el equipo usa remeras negras con el logo. Las fotos originales hay que pedírselas al local; solo hay capturas de baja resolución.
- Horarios y ubicación reales (`data/local.json`).
- No hay fotos, testimonios ni cifras de pedidos. No se deben fabricar.

## Product Principles

1. El pedido tiene que llegar completo: total, entrega y pago, sin tener que preguntar de nuevo.
2. Precio desactualizado es un error grave: los datos se cambian en un solo lugar, sin tocar código.
3. Primero el celular y los datos móviles: cada kilobyte cuenta.
4. Mostrar solo información verdadera del local; lo que falta se marca como pendiente, no se rellena.

## Accessibility & Inclusion

Público general de todas las edades, muchas veces con una mano y al sol o de noche. Botones grandes, contraste alto y texto legible sin hacer zoom.
