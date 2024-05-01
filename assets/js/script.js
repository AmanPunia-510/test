function startTimer(duration, display) {
  var timer = duration,
    hours,
    minutes,
    seconds,
    milliseconds;
  setInterval(function () {
    hours = Math.floor((timer / (60 * 60 * 1000)) % 24);
    minutes = Math.floor((timer / 60000) % 60);
    seconds = Math.floor((timer / 1000) % 60);
    milliseconds = Math.floor(timer % 1000);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    milliseconds =
      milliseconds < 100
        ? milliseconds < 10
          ? "00" + milliseconds
          : "0" + milliseconds
        : milliseconds;

    display.textContent =
      hours + ":" + minutes + ":" + seconds + ":" + milliseconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 10);
}
