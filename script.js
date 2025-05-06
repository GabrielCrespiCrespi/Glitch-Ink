const expirationDate = 'May 6, 2025 10:00:00'; // Aqui va la data final del timer
let deadlineTime = new Date(expirationDate);

deadlineTime.setDate(deadlineTime.getDate());
let deadline = deadlineTime.getTime();

// Funcio per actualitzar el timer
function updateCountdown() {
  if (countdownInterval !== null) {

    let now = new Date().getTime();
    let timeToLive = deadline - now;

    let days = Math.floor(timeToLive / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeToLive % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeToLive % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeToLive % (1000 * 60)) / 1000);

    let daysElements = document.getElementsByClassName("days");
    let hoursElements = document.getElementsByClassName("hours");
    let minutesElements = document.getElementsByClassName("minutes");
    let secondsElements = document.getElementsByClassName("seconds");

    Array.from(daysElements).forEach(el => el.innerHTML = days);
    Array.from(hoursElements).forEach(el => el.innerHTML = hours);
    Array.from(minutesElements).forEach(el => el.innerHTML = minutes);
    Array.from(secondsElements).forEach(el => el.innerHTML = seconds);

    if (timeToLive < 0) {
      countdownInterval && clearInterval(countdownInterval);
      Array.from(daysElements).forEach(el => el.innerHTML = 0);
      Array.from(hoursElements).forEach(el => el.innerHTML = 0);
      Array.from(minutesElements).forEach(el => el.innerHTML = 0);
      Array.from(secondsElements).forEach(el => el.innerHTML = 0);
    }
  }
}

//per cridar a la funcio cada segon
let countdownInterval = null;
updateCountdown();
countdownInterval = setInterval(updateCountdown, 1000);
 
//funcio per anar al link de la pagina
function comprovant() {
  let now = new Date().getTime();
  let timeToLive = deadline - now;

  if (timeToLive > 0) {
    alert("Beneit");
  } else {
    window.location.href =
      "https://itch.io/"; //Aqui anira u link de la pagina web
  };
};

//funcio per arreglar un problema amb el carrusel
function scrollToElement(event, id) {
  event.preventDefault();
  document.getElementById(id).scrollIntoView({ block: "center" });
}

//funcions per calcular i mostrar el cercle de l'scroll
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient( #8402a5 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;