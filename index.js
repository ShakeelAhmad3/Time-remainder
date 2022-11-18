const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const counterTimer = document.querySelector(".counterTimer");
const heading = document.querySelector("h1");
const second = 1000,
  minute = 60 * second,
  hour = 60 * minute,
  day = 24 * hour;

const timerFunction = () => {
  let now = new Date();
  let dd = String(now.getDate()).padStart(2, "0"),
    mm = String(now.getMonth() + 1).padStart(2, "0"),
    yyyy = now.getFullYear();

  const setDay = prompt("Enter a day").padStart(2, "0");
  const setMonth = prompt("Enter a Month").padStart(2, "0");
  now = `${mm}/${dd}/${yyyy}`;

  let target = `${setMonth}/${setDay}/${yyyy}`;
  if (now > target) {
    target = `${setMonth}/${setDay}/${yyyy + 1}`;
  }

  setInterval(() => {
    const timer = new Date(target).getTime();
    const today = new Date().getTime();
    const difference = timer - today;

    const leftDay = Math.floor(difference / day);
    const leftHour = Math.floor((difference % day) / hour);
    const leftMinute = Math.floor((difference % hour) / minute);
    const leftSecond = Math.floor((difference % minute) / second);
    daysElement.innerText = leftDay;
    hoursElement.innerText = leftHour;
    minutesElement.innerText = leftMinute;
    secondsElement.innerText = leftSecond;

    if (difference < 0) {
      counterTimer.style.display = "non";
      heading.innerText = "Time Over";
    }
  }, 0);
};

timerFunction();
