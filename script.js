var photo = document.getElementById('photo');

photo.addEventListener('click', function() {
  // здесь можно написать код, который будет выполняться при клике на фотографию
  console.log('Клик на фотографии!');
});

// получаем ссылки на Canvas элемент и его контекст
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
// загружаем изображение на Canvas элемент
var image = new Image();
image.src = 'zzBNjg3bBkg.jpg';
image.width= 1000;
image.onload = function() {
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
};

// добавляем обработчик события для движения мыши
canvas.addEventListener('mousemove', function(event) {
  // проверяем, была ли нажата кнопка мыши
  if (event.buttons !== 1) {
    return;
  }

  // определяем координаты мыши на Canvas элементе
  var x = event.offsetX;
  var y = event.offsetY;

  // стираем пиксель на указанных координатах
  context.clearRect(x-15, y-15, 30, 30);
});

// добавляем обработчик события для нажатия кнопки мыши
canvas.addEventListener('mousedown', function(event) {
  // запрещаем выделение текста на Canvas элементе
  event.preventDefault();
});