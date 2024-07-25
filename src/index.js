// City Grid Display

function updateTime() {
  // Vancouver
  let vanElement = document.querySelector("#vancouver");
  if (vanElement) {
    let vanDateElement = vanElement.querySelector(".cityDate");
    let vanTimeElement = vanElement.querySelector(".cityTime");
    let vanTimeNow = moment().tz("America/Vancouver");

    vanDateElement.innerHTML = vanTimeNow.format("MMMM D YYYY");
    vanTimeElement.innerHTML = `${vanTimeNow.format(
      "hh:mm:ss [<small>]A[</small>]"
    )}`;
  }

  // New York
  let newyorkElement = document.querySelector("#new-york");
  if (newyorkElement) {
    let newyorkDateElement = newyorkElement.querySelector(".cityDate");
    let newyorkTimeElement = newyorkElement.querySelector(".cityTime");
    let newyorkTimeNow = moment().tz("America/New_York");

    newyorkDateElement.innerHTML = newyorkTimeNow.format("MMMM D YYYY");
    newyorkTimeElement.innerHTML = `${newyorkTimeNow.format(
      "hh:mm:ss [<small>]A[</small>]"
    )}`;
  }

  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".cityDate");
    let parisTimeElement = parisElement.querySelector(".cityTime");
    let parisTimeNow = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTimeNow.format("MMMM D YYYY");
    parisTimeElement.innerHTML = `${parisTimeNow.format(
      "hh:mm:ss [<small>]A[</small>]"
    )}`;
  }

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".cityDate");
    let tokyoTimeElement = tokyoElement.querySelector(".cityTime");
    let tokyoTimeNow = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTimeNow.format("MMMM D YYYY");
    tokyoTimeElement.innerHTML = `${tokyoTimeNow.format(
      "hh:mm:ss [<small>]A[</small>]"
    )}`;
  }
}

updateTime();
setInterval(updateTime, 1000);

// Dropdown Selecting City to update the view

function updateCity(event) {
  let selectedCityTimezone = event.target.value;
  if (selectedCityTimezone === "current") {
    selectedCityTimezone = moment.tz.guess();
  }
  if (selectedCityTimezone.length > 0) {
    let selectedCityName = selectedCityTimezone.split("/")[1];
    let selectedCityTime = moment().tz(selectedCityTimezone);
    let selectedCityElement = document.querySelector("#gridContainer");

    selectedCityElement.innerHTML = `
  <div class="cityDetail">
    <div class="cityName">${selectedCityName}</div>
    <div class="cityTime">${selectedCityTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    )}</div>
    <div class="cityDate">${selectedCityTime.format("MMMM D YYYY")}</div>
  </div>
  <br />
  <a href="/"> Back to all cities </a>
  `;
  }
}

let selectCityElement = document.querySelector("#cities");
selectCityElement.addEventListener("change", updateCity);
