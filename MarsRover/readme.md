# Mars Rover

Este mini proyecto es una simulación de un rover en Marte que se mueve dentro de una cuadrícula de 10x10 siguiendo comandos dados por el usuario en un input. Además, permite generar obstáculos aleatorios en el terreno que el rover deberá evitar.

## Funcionalidades

- Introducir comandos: F, L, R. Los comandos L y R giran el Rover únicamente, y si queremos que el rover se mueva debemos utilizar F. Ejemplo de uso: FFRRFFFRL.

- Generación aleatoria de obstáculos en el terreno.

- Detección de obstáculos: si el rover intenta moverse a una casilla con un obstáculo, el recorrido del rover se detiene antes del obstáculo y muestra un mensaje de error.

- Botón de reinicio para restablecer la posición del rover y limpiar los obstáculos.

## Tecnologías utilizadas

- HTML5 para la estructura de la página.

- CSS para el diseño y presentación visual.

- JavaScript para la lógica del movimiento del rover y la gestión de los obstáculos.

## Instrucciones de uso

    1. Abrir el archivo index.html en un navegador (por ejemplo Live Server de VS Code).

    2. Ingresar una secuencia de comandos en el campo de texto:

    - F (Forward): Moverse hacia adelante en la dirección actual.

    - L (Left): Girar a la izquierda.

    - R (Right): Girar a la derecha.

    3. (Opcional) Generar obstáculos ingresando una cantidad y haciendo clic en el botón Generar Obstáculos.

    4. Hacer clic en el botón Ejecutar para mover el rover.

    Si el rover encuentra un obstáculo, el recorrido se detendrá y aparecerá un mensaje.

    Para reiniciar la simulación, hacer clic en el botón Reiniciar.

## Posibles mejoras

- Implementar una interfaz más atractiva con animaciones.

- Poder ampliar la cuadrícula y permitir su personalización.

- Guardar el estado del juego en localStorage para persistencia.

- Incluir diferentes tipos de obstáculos o terrenos con distintas propiedades.

- Hacer uso de algún framework e iniciar sesión con un usuario para poder guardar estadísticas de las partidas.

## Créditos

Desarrollado por Javier Arroyes Vázquez como Kata para Developer Junior.
