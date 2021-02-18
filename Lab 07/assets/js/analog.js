
const hr = document.querySelector(".hr");
const mn = document.querySelector(".mn");
const sc = document.querySelector(".sc");

const deg = 6; //360deg / 60(min||sec) => 6

setInterval(() => {
  let day = new Date();
  let hour = day.getHours() * 30; //360deg / 12 hour => 30
  let min = day.getMinutes() * deg;
  let sec = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hour + min / 12}deg)`;
  mn.style.transform = `rotateZ(${min}deg)`;
  sc.style.transform = `rotateZ(${sec}deg)`;
});
