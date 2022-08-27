const socket = io();

socket.on('connect', () => {
  console.warn('Conectado al servidor');
  prompt('La concha de tu madre');
});