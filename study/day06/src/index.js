// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector(".country-select");

function saveCountry() {
  const selectedCountry = select.value;
  if (selectedCountry === "") {
    localStorage.removeItem("country");
  } else {
    localStorage.setItem("country", selectedCountry);
  }
}

function init() {
  select.addEventListener("change", saveCountry);
}

init();
