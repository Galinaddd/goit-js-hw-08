import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframeRef = document.querySelector('#vimeo-player');

const iframePlayer = new Player(iframeRef);

let currentTime = Number(localStorage.getItem('videoplayer-current-time')) || 0;

iframePlayer.setCurrentTime(currentTime);

iframePlayer.on('timeupdate', throttle(timeUpdateHandler, 1000));

function timeUpdateHandler(data) {
  console.log(data.seconds);
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}
