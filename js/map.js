'use strict';

function random(min, max) {
  var diff = max - min + 1;//зачем +1, Math.random не возвращает единицу
  return Math.floor(Math.random() * diff) + min;
}
function getRandomNumber (list) {
  return list[random(0, list.length - 1)];
}

function getUniqueArray(list) {
  var index = random(0, list.length - 1);
  return list.splice(index, 1).shift();//splice -  возвращает массив из удалённых элементов из массива list, shift удаляет из массива первый элемент и возвращает его
}

function sortRandom () {
  return Math.random() - 0.5;
}

function getRandomMixedList (list) {
  var copy = list.slice();
  return copy.sort(sortRandom);
}

function getRandomListLength (list) {
  var copy = list.slice();
  var length = random(1, list.length - 1);
  var randomArray = copy.sort(sortRandom);
  return randomArray.slice(0, length);
}

var avatars = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var types = ['palace', 'flat', 'house', 'bungalo'];
var checkins = ['12:00', '13:00', '14:00'];
var featuresOf = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var photosOf = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var titles = TITLES.slice();//с помощью slice копируем TITLES с 0 до, зачем

for(var i = 0; i < 8; i++) {
  var x = random(300, 900);
  var y = random(150, 500);
  var data = {
    author: {
      avatar: 'img/avatars/user0' + getUniqueArray(avatars) + '.png' //img/avatars/user{{xx}}.png
    },

    offer: {
      title: getUniqueArray(titles),
      address: x + ', ' + y,//как вывести здесь свойства объекта location, зачем двойные скобки
      price: random(1000, 1000000),
      type: getUniqueArray(types),
      rooms: random(1, 5),
      guests: random(1, 100),
      checkin: getRandomNumber(checkins),
      checkout: getRandomNumber(checkins),
      features: getRandomListLength(featuresOf),
      description: '',
      photos: getRandomMixedList(photosOf)
    },

    location: {
      x: x,
      y: y
    }
  };

  console.log (data);
}
