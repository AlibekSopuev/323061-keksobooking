'use strict';

function random(min, max) {
  var diff = max - min + 1;
  return Math.floor(Math.random() * diff) + min;
}

function extractRandom(list) {
  var index = random(0, list.length - 1);
  return list.splice(index, 1).shift();
}

var avatars = [0,1,2,3,4,5,6,7,8];
var titles = ["Большая уютная квартира", "Маленькая неуютная квартира", "Огромный прекрасный дворец", "Маленький ужасный дворец", "Красивый гостевой домик", "Некрасивый негостеприимный домик", "Уютное бунгало далеко от моря", "Неуютное бунгало по колено в воде"];
var types = ["palace", "flat", "house", "bungalo"];
var checkins = ["12:00", "13:00", "14:00"];
var featuresOf = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var photosOf = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];

var card = {
  "author": {
    "avatar": '0' + extractRandom(avatars) + '.png';
  },

  "offer": {
    "title": extractRandom(titles);
    "address": "{{location.x}}, {{location.y}}",
    "price": random(1000, 1000000),
    "type": extractRandom(types),
    "rooms": random (1, 5),
    "guests": random (1, 100),
    "checkin": extractRandom(checkins),
    "checkout": extractRandom(checkins),
    "features": extractRandom(featuresOf),
    "description": "",
    "photos": extractRandom(photosOf)
  },

  "location": {
    "x": random(300, 900),
    "y": random(150, 500)
  }
}
