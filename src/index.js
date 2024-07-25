function updateTime() {
  // Vancouver
  let vanElement = document.querySelector("#vancouver");
  let vanDateElement = vanElement.querySelector(".cityDate");
  let vanTimeElement = vanElement.querySelector(".cityTime");
  let vanTimeNow = moment().tz("America/Vancouver");

  vanDateElement.innerHTML = vanTimeNow.format("MMMM D YYYY");
  vanTimeElement.innerHTML = `${vanTimeNow.format(
    "hh:mm:ss [<small>]A[</small>]"
  )}`;

  // New York
  let newyorkElement = document.querySelector("#new-york");
  let newyorkDateElement = newyorkElement.querySelector(".cityDate");
  let newyorkTimeElement = newyorkElement.querySelector(".cityTime");
  let newyorkTimeNow = moment().tz("America/New_York");

  newyorkDateElement.innerHTML = newyorkTimeNow.format("MMMM D YYYY");
  newyorkTimeElement.innerHTML = `${newyorkTimeNow.format(
    "hh:mm:ss [<small>]A[</small>]"
  )}`;
}

updateTime();
setInterval(updateTime, 1000);
