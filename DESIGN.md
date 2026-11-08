---
name: La Bondiolita
description: Carta digital con pedido por WhatsApp, leída como el tablero de salidas del puesto.
colors:
  tablero: "#111110"
  tablero-alto: "#1d1d1b"
  tablero-regla: "#363631"
  tablero-texto: "#fafaf7"
  tablero-texto-2: "#a6a59e"
  ambar: "#f2a007"
  brasa-claro: "#ff6a45"
  fondo: "#fafaf7"
  texto: "#111110"
  texto-2: "#5c5b55"
  regla: "#dcdbd4"
  regla-fuerte: "#9b9a93"
  relleno: "#111110"
  brasa: "#b3361a"
  fondo-oscuro: "#171716"
  texto-oscuro: "#f3f2ed"
  regla-oscuro: "#33332f"
  regla-fuerte-oscuro: "#6b6a64"
  relleno-oscuro: "#2b2b28"
typography:
  display:
    fontFamily: "Bebas Neue, Arial Narrow, sans-serif"
    fontSize: "2.875rem"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Bebas Neue, Arial Narrow, sans-serif"
    fontSize: "2.375rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.03em"
  title:
    fontFamily: "Bebas Neue, Arial Narrow, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.06em"
  body:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.45
    fontFeature: "tnum"
  body-strong:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.25
  label:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.2em"
rounded:
  celda: "3px"
  control: "6px"
  boton: "8px"
  barra: "10px"
  hoja: "14px"
spacing:
  gutter: "16px"
  columna: "40rem"
  control: "48px"
  fila-producto: "74px"
  categoria: "32px"
components:
  button-agregar:
    textColor: "{colors.texto}"
    rounded: "{rounded.control}"
    height: "48px"
    width: "6.75rem"
    typography: "{typography.body-strong}"
  button-agregar-hover:
    backgroundColor: "{colors.texto}"
    textColor: "{colors.fondo}"
  stepper:
    backgroundColor: "{colors.relleno}"
    textColor: "{colors.ambar}"
    rounded: "{rounded.control}"
    height: "48px"
    width: "6.75rem"
  button-enviar:
    backgroundColor: "{colors.ambar}"
    textColor: "{colors.tablero}"
    rounded: "{rounded.boton}"
    height: "58px"
    width: "100%"
  button-borde:
    textColor: "{colors.texto}"
    rounded: "{rounded.boton}"
    height: "54px"
    width: "100%"
  button-tablero:
    textColor: "{colors.tablero-texto}"
    rounded: "{rounded.boton}"
    height: "52px"
  input-campo:
    backgroundColor: "{colors.fondo}"
    textColor: "{colors.texto}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
    height: "52px"
  chip-opcion:
    textColor: "{colors.texto}"
    rounded: "{rounded.control}"
    padding: "10px 14px"
    height: "56px"
  chip-opcion-elegida:
    backgroundColor: "{colors.relleno}"
    textColor: "{colors.tablero-texto}"
  nav-categoria:
    backgroundColor: "{colors.tablero}"
    textColor: "{colors.tablero-texto-2}"
    typography: "{typography.title}"
    padding: "15px 10px 10px"
  nav-categoria-activa:
    textColor: "{colors.tablero-texto}"
  barra-pedido:
    backgroundColor: "{colors.tablero}"
    textColor: "{colors.tablero-texto}"
    rounded: "{rounded.barra}"
    padding: "8px 18px"
    height: "66px"
  celda:
    backgroundColor: "{colors.tablero-alto}"
    textColor: "{colors.tablero-texto}"
    rounded: "{rounded.celda}"
    width: "0.66em"
---

# Design System: La Bondiolita

## Overview

**Creative North Star: "El tablero de la terminal"**

La carta es el tablero de salidas del puesto sobre la ruta. Un marco negro mate (cabecera, barra de categorías, sección del local, barra del pedido, cabeza de la hoja) encierra un cuerpo de lectura blanco tiza donde el menú se lee en filas y columnas fijas: producto, precio en pesos, control. Las letras grandes son condensadas y en mayúsculas, como el cartel del local; todo lo demás usa la fuente del sistema, para que la página pese poco con datos móviles.

El color funciona como en un tablero: casi todo es negro y blanco, y la luz aparece solo donde hay información viva. El ámbar de lámpara marca lo abierto, lo elegido y el pedido; el rojo brasa marca lo cerrado, lo agotado y los errores. Los valores que cambian (estado, total) viven en casilleros con una línea al medio y caen en su lugar con un pliegue, sin mover la fila.

Densidad de lista, no de catálogo: filas altas (74px mínimo), reglas de 1px, controles de 48px pensados para una mano y para el sol o la noche. Se rechazan las tarjetas con foto de una carta de delivery y la estética de brasas y madera.

**Key Characteristics:**
- Marco negro de tablero alrededor de un cuerpo tiza (o grafito en modo oscuro); el tablero es igual en ambos modos.
- Filas de tres columnas fijas con reglas de 1px; los productos nunca van en tarjetas.
- Bebas Neue solo para voz de cartel; fuente del sistema para todo lo que se lee.
- Ámbar y brasa como luces de estado, nunca como decoración.
- Casilleros con línea media y pliegue escalonado para los valores que cambian.

## Colors

Negro de tablero y blanco tiza casi monocromos, con dos luces de estado.

### Primary
- **Ámbar de lámpara** (ambar): la única luz positiva. Estado abierto (lámpara y palabra), subrayado de la categoría activa, día de hoy en los horarios y su marca "Hoy", cantidad en el control de pasos, punto del pago elegido, total de la barra del pedido y el botón de enviar. También la selección de texto y el enlace de salto.

### Secondary
- **Brasa** (brasa-claro sobre el tablero y en modo oscuro; brasa sobre el cuerpo claro): estado cerrado, aviso de cerrado en la hoja, "Agotado" y los errores de formulario con su borde.

### Neutral
- **Negro de tablero** (tablero): fondo del marco: cabecera, barra de categorías fija, sección del local, barra del pedido, cabeza de la hoja. También el texto del cuerpo claro y el relleno del control de pasos en modo claro.
- **Tablero alto** (tablero-alto): casilleros de los valores y fondo del mapa; un escalón apenas más claro que el tablero.
- **Regla de tablero** (tablero-regla): líneas de 1px entre filas sobre negro.
- **Letra de tablero** (tablero-texto) y **letra de tablero secundaria** (tablero-texto-2): texto principal y etiquetas sobre negro.
- **Tiza** (fondo): cuerpo del menú y de la hoja en modo claro. En modo oscuro pasa a **grafito** (fondo-oscuro) con texto (texto-oscuro).
- **Tinta secundaria** (texto-2): detalles de producto, encabezados de columna, etiquetas de campo, notas.
- **Regla** (regla) y **regla fuerte** (regla-fuerte): 1px entre filas de producto; 2px en bordes de campos y opciones.
- **Relleno** (relleno; relleno-oscuro en modo oscuro): fondo del control de pasos y de la opción elegida.

### Named Rules
**The Lámpara Rule.** El ámbar significa "abierto, elegido o en el pedido". Si un elemento nuevo no es ninguna de esas tres cosas, no lleva ámbar.

**The Tablero Fijo Rule.** El marco negro no cambia con el modo de color; solo el cuerpo cambia de tiza a grafito.

**The Brasa por Superficie Rule.** Sobre negro o grafito, la brasa clara; sobre tiza, la brasa oscura. Nunca la clara sobre tiza.

## Typography

**Display Font:** Bebas Neue (con Arial Narrow, sans-serif), autoalojada, un solo peso.
**Body Font:** fuente del sistema (system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif).

**Character:** la condensada en mayúsculas habla como el cartel del local; la del sistema hace el trabajo de lectura sin costo de descarga. Todas las cifras usan números tabulares.

### Hierarchy
- **Display** (400, 2.875rem; 3.5rem desde 720px; interlineado 0.88): solo el nombre del local en la cabecera.
- **Headline** (400, 2.375rem; 2.75rem desde 720px; 1): encabezados de categoría y "El local". Variantes de la misma voz: estado (2rem, ámbar o brasa), cabeza de la hoja (2rem), total de la hoja (2.125rem), total de la barra (1.75rem, ámbar), cantidad del control de pasos (1.625rem, ámbar), días de la semana (1.375rem).
- **Title** (400, 1.3125rem, tracking 0.06em): pestañas de categoría.
- **Body** (400, 1.0625rem, 1.45): texto corrido. Nombre de producto en 600 con interlineado 1.25; precio en 700 a 1.125rem; detalle en 400 a 0.875rem en tinta secundaria.
- **Label** (400 a 600, 0.75rem, tracking 0.18 a 0.2em, mayúsculas): rótulos de dato: filas del tablero (Estado, Hoy, Dónde), encabezados de columna (Producto, $U), etiquetas de campo, subtítulos del local, cuenta de la barra, "Total".

### Named Rules
**The Voz de Cartel Rule.** Bebas Neue va en nombres, estados, categorías, días y totales; nunca en párrafos, botones de acción ni etiquetas de campo.

**The Rótulo Rule.** La etiqueta chica en mayúsculas espaciadas nombra un dato, una columna o un campo que está al lado o debajo. No se pone encima de un titular como antesala.

### Content
La interfaz está en español de Uruguay y evita tú y vos: las acciones e instrucciones van en infinitivo o impersonal ("Agregar", "Ver pedido", "Enviar pedido por WhatsApp", "Vaciar pedido", "Volver a intentar", "El pedido se puede mandar igual"). Los precios se muestran como `$U` seguido del monto.

## Layout

Una sola columna centrada de 40rem con márgenes laterales de 16px, en todos los anchos; en escritorio crece la tipografía de cartel, no la grilla. El menú es una tabla visual: tres columnas fijas (nombre flexible, precio de 3.75rem alineado a la derecha, control de 6.75rem), con filas de 74px mínimo y una regla de 2px bajo los encabezados de columna. La cabecera usa filas de rótulo y valor (4.75rem + resto); los horarios, día, turnos y marca de hoy (6.5rem + resto + auto). Cada categoría abre con 32px arriba y respeta la barra fija al saltar. La barra de categorías es fija arriba y se desplaza horizontalmente con un desvanecido a la derecha cuando hay más. La barra del pedido flota abajo a 12px de los bordes y el contenido reserva espacio cuando aparece. La hoja del pedido sube desde abajo en el celular y se centra desde 720px.

## Elevation & Depth

Plano por defecto: la profundidad se da por contraste entre el marco negro y el cuerpo claro, y por reglas, no por sombras. Solo las dos capas que flotan sobre la página tienen sombra.

### Shadow Vocabulary
- **Barra flotante** (`box-shadow: 0 10px 30px rgb(0 0 0 / 0.28), 0 2px 6px rgb(0 0 0 / 0.2)`; en modo oscuro `0 0 0 1px` regla de tablero más `0 10px 30px rgb(0 0 0 / 0.6)`): la barra del pedido.
- **Hoja** (`box-shadow: 0 0 0 1px` regla de tablero, `0 -12px 40px rgb(0 0 0 / 0.35)`): la hoja del pedido, sobre un fondo de tablero al 72%.

### Named Rules
**The Solo Flota Rule.** Una sombra significa que la capa flota sobre la página (barra, hoja). Filas, botones y campos no llevan sombra.

## Shapes

Esquinas apenas suavizadas y escalonadas por tamaño: 3px en casilleros y la marca "Hoy", 6px en controles de fila, campos y opciones, 8px en botones de ancho completo, avisos y el mapa, 10px en la barra del pedido, 14px arriba en la hoja (12px centrada en escritorio). Las líneas son la forma principal: 1px entre filas, 2px para bordes de control y para cerrar la tabla. La lámpara de estado y el punto de pago son círculos llenos.

## Components

### Buttons
- **Agregar (disponible):** borde de 2px en color de texto, sin relleno, 48px de alto, ancho de la columna de control. Al pasar se rellena con el color de texto; al presionar se achica a 0.97.
- **Enviar pedido:** el único botón relleno de ámbar, con texto de tablero en 700, 58px de alto, ancho completo, ícono de chat. Al pasar sube el brillo; al presionar 0.985.
- **Botón de borde:** acción secundaria de ancho completo (54px, borde 2px en texto); se invierte al pasar.
- **Botón de tablero:** la misma forma sobre negro, borde en letra de tablero, 52px; se invierte al pasar.
- **Texto-botón:** acción menor subrayada en tinta secundaria, 44px de alto ("Vaciar pedido").
- **Foco:** anillo de 3px a 3px de distancia; tinta sobre el cuerpo claro, ámbar sobre el tablero y sobre el cuerpo en modo oscuro.

### Control de pasos (en el pedido)
Reemplaza a "Agregar" en la misma celda: bloque relleno de 48px con menos y más de 40px a los lados y la cantidad al centro en Bebas Neue ámbar.

### Agotado
Precio tachado en tinta secundaria, nombre atenuado, y "Agotado" en mayúsculas espaciadas y brasa en lugar del control.

### Chips (opciones de entrega y pago)
- **Style:** grilla de dos, 56px, borde 2px en regla fuerte, punto circular con borde.
- **State:** elegida se rellena (relleno) con texto claro y punto ámbar lleno.

### Inputs / Fields
- **Style:** fondo del cuerpo, borde 2px en regla fuerte, 6px, 52px de alto (84px el área de texto), etiqueta en estilo rótulo arriba.
- **Focus:** el borde pasa al color de texto con un anillo de 1px adicional.
- **Error:** borde brasa y mensaje en brasa 600 debajo.

### Navigation
Barra de categorías fija sobre negro: pestañas en Bebas Neue en letra secundaria de tablero, subrayado de 3px transparente. La activa pasa a letra de tablero con subrayado ámbar. Desplazamiento horizontal con encaje y desvanecido final.

### Barra del pedido
Botón negro flotante de 66px: cuenta en rótulo arriba, total en Bebas Neue ámbar abajo, "Ver pedido" con flecha a la derecha. Entra desde abajo en 0.4s con la curva de salida.

### Casilleros del tablero (signature)
Los valores que cambian (estado, total de la barra, total de la hoja) se muestran carácter por carácter en casilleros de tablero alto, 0.66em de ancho (0.38em para puntuación, 0.22em sin fondo para espacios), con una línea de 1px de negro de tablero a media altura. Solo los caracteres que cambiaron se pliegan: giro desde -90° en X con rebote a 12°, 0.52s con la curva de salida, 45ms de escalonado entre casilleros, comparando desde la derecha para que las unidades queden alineadas. Con movimiento reducido no hay pliegue: el valor cambia directo. El texto completo se anuncia a lectores de pantalla por separado.

### Horarios
Filas de día sobre negro con reglas de 1px; el día en Bebas Neue, el de hoy en ámbar con la marca "Hoy" rellena de ámbar.

## Do's and Don'ts

### Do:
- **Do** poner los productos en filas de tres columnas fijas con reglas de 1px, precio alineado a la derecha en números tabulares.
- **Do** mantener todo control tocable en 48px o más.
- **Do** expresar el estado de un producto solo con el vocabulario existente: borde (disponible), relleno con cantidad ámbar (en el pedido), tachado y "Agotado" en brasa (agotado).
- **Do** mostrar cualquier valor nuevo que cambie en vivo con los casilleros y el pliegue, y desactivar el pliegue con movimiento reducido.
- **Do** usar anillos de foco de 3px: ámbar sobre el tablero, tinta sobre el cuerpo claro.
- **Do** escribir la interfaz en infinitivo o impersonal, sin tú ni vos.

### Don't:
- **Don't** poner productos en tarjetas con foto ni en grillas de catálogo.
- **Don't** usar ámbar para decorar o destacar algo que no esté abierto, elegido o en el pedido.
- **Don't** usar la brasa clara sobre el cuerpo tiza.
- **Don't** usar Bebas Neue en párrafos, botones o campos, ni sumar otra fuente propia.
- **Don't** agregar sombras a filas, botones o campos.
- **Don't** usar texturas de brasas, madera o fuego.
