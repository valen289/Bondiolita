// Muestra un valor como en un tablero de salidas: los caracteres que cambian
// caen en su lugar, uno detrás del otro, sin mover el resto de la fila.

const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)');

const escapar = (texto) =>
  String(texto).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export function mostrarEnTablero(elemento, texto) {
  const anterior = elemento.dataset.valor;
  if (anterior === texto) return;
  elemento.dataset.valor = texto;

  const animar = anterior !== undefined && !reducirMovimiento.matches;
  // Se compara desde la derecha para que las unidades queden alineadas cuando cambia la cantidad de cifras.
  const desfase = texto.length - (anterior ?? '').length;
  let orden = 0;
  let celdas = '';

  for (let i = 0; i < texto.length; i++) {
    const caracter = texto[i];
    const cambio = animar && (anterior ?? '')[i - desfase] !== caracter;
    const forma = caracter === ' ' ? ' espacio' : '.,:'.includes(caracter) ? ' estrecha' : '';
    celdas += cambio
      ? `<span class="celda${forma} cae" style="--i:${orden++}">${escapar(caracter)}</span>`
      : `<span class="celda${forma}">${escapar(caracter)}</span>`;
  }

  elemento.innerHTML = `<span class="sr-only">${escapar(texto)}</span><span aria-hidden="true">${celdas}</span>`;
}
