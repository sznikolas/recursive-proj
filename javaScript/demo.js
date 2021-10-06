let canvas = document.getElementById('canvas2');
let c = canvas.getContext('2d');
canvas.width = 720;
canvas.height  = 700;

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })