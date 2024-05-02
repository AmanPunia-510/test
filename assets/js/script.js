// accordian-content

let accordian_items = document.querySelectorAll(".accordian-box");

accordian_items.forEach((items) => {
  let paragraph = items.querySelector(".accordian-p");
  let heading = items.querySelector(".accordian-h-svg");
  let svg = items.querySelector(".accordian-svg");

  heading.style.cursor = "pointer";
  heading.addEventListener("click", () => {
    accordian_items.forEach((other) => {
      if (other !== items) {
        let paragraph = other.querySelector(".accordian-p");
        let svg = other.querySelector(".accordian-svg");
        paragraph.classList.add("d-none");
        svg.style.transform = "rotate(0deg)";
      }
    });

    if (paragraph.classList.contains("d-none")) {
      paragraph.classList.remove("d-none");
      paragraph.classList.add("d-block");
      svg.style.transform = "rotate(180deg)";
    } else {
      paragraph.classList.remove("d-block");
      paragraph.classList.add("d-none");
      svg.style.transform = "rotate(0deg)";
    }
  });
});

// navbar

const nav_items = document.querySelector(".navbar-items");
let menubar = document.querySelector(".toggle");

menubar.addEventListener("click", () => {
  nav_items.classList.toggle("show");

  let all_content = document.querySelector("body");
  if (nav_items.classList.contains("show")) {
    all_content.style.position = "fixed";
    all_content.style.top = "0";
    all_content.style.left = "0";
    all_content.style.width = "100%";
  } else {
    all_content.style.position = "unset";
  }
});

// counter

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 19);
targetDate.setHours(targetDate.getHours() + 10);
targetDate.setMinutes(targetDate.getMinutes() + 2);
targetDate.setSeconds(targetDate.getSeconds() + 55);

function updateCountdown() {
  const now = new Date();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const countdownElement = document.getElementById("timer");
  countdownElement.textContent = `${days}d:${hours}hr:${minutes}min:${seconds}sec`;

  if (timeLeft < 0) {
    clearInterval(timerInterval);
    countdownElement.textContent = "Countdown is over!";
  }
}

const timerInterval = setInterval(updateCountdown, 1000);

updateCountdown();

// preloader---------------------
let preloader = document.querySelector(".preloader");
preloader.classList.add("d-flex");
setTimeout(() => {
  preloader.classList.add("d-none");
}, 3000);
