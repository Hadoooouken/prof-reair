export const timer = (deadline) => {
  const timerDays = document.querySelectorAll('.count_1 span');
  const timerHours = document.querySelectorAll('.count_2 span');
  const timerMinutes = document.querySelectorAll('.count_3 span');
  const timerSeconds = document.querySelectorAll('.count_4 span');

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);
    let days = Math.floor(timeRemaining / 60 / 60 / 24);


    return { timeRemaining, hours, minutes, seconds, days };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();
    timerDays.forEach((days) => (days.textContent = String(getTime.days).padStart(2, '0')));
    timerHours.forEach((hours) => (hours.textContent = String(getTime.hours).padStart(2, '0')));
    timerMinutes.forEach(
      (minutes) => (minutes.textContent = String(getTime.minutes).padStart(2, '0')),
    );
    timerSeconds.forEach(
      (seconds) => (seconds.textContent = String(getTime.seconds).padStart(2, '0')),
    );

    if (getTime.timeRemaining <= 0) {
      timerDays.forEach((days) => (days.textContent = '00'));
      timerHours.forEach((hours) => (hours.textContent = '00'));
      timerMinutes.forEach((minutes) => (minutes.textContent = '00'));
      timerSeconds.forEach((seconds) => (seconds.textContent = '00'));

      clearInterval(timerInterval);
    }
  };
  const timerInterval = setInterval(() => {
    updateClock();
  }, 1000);

  updateClock();
};
