'use strict';

function random(min, max) {
  var diff = max - min + 1;//зачем +1, как манипулировать Math.random, какой механизм
  return Math.floor(Math.random() * diff) + min;
}

function extractRandom(list) {
  var index = random(0, list.length - 1);
  return list.splice(index, 1).shift();//splice -  возвращает массив из удалённых элементов из массива list, shift удаляет из массива первый элемент и возвращает его
}

var avatars = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var types = ['palace', 'flat', 'house', 'bungalo'];
var checkins = ['12:00', '13:00', '14:00'];
var featuresOf = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var photosOf = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];


for(var i = 0; i < 8; i++) {

  var titles = TITLES.slice(0, random(0, TITLES.length - 1));//с помощью slice копируем TITLES с 0 до

  var data = {
    author: {
      avatar: 'img/avatars/user0' + extractRandom(avatars) + '.png' //img/avatars/user{{xx}}.png
    },

    offer: {
      title: extractRandom(titles),
      address: '{{location.x}}, {{location.y}}',
      price: random(1000, 1000000),
      type: extractRandom(types),
      rooms: random(1, 5),
      guests: random(1, 100),
      checkin: extractRandom(checkins),
      checkout: extractRandom(checkins),
      features: extractRandom(featuresOf),
      description: '',
      photos: extractRandom(photosOf)
    },

    location: {
      x: random(300, 900),
      y: random(150, 500)
    }
  };

  console.log (data);
}
