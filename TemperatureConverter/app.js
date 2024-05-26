// ==========================================================

document.getElementById("convert").addEventListener("click", () => {
  const temp = document.getElementById("temperature").value;
  const unit = document.getElementById("unit").value;
  let result;
  if (unit === "Celsius") {
    // Convert Celsius to Fahrenheit and Kelvin
    result =
      (temp * 9) / 5 +
      32 +
      " Fahrenheit, " +
      (parseFloat(temp) + 273.15) +
      " Kelvin";
  } else if (unit === "Fahrenheit") {
    // Convert Fahrenheit to Celsius and Kelvin
    result =
      ((temp - 32) * 5) / 9 +
      " Celsius, " +
      (((temp - 32) * 5) / 9 + 273.15) +
      " Kelvin";
  } else if (unit === "Kelvin") {
    // Convert Kelvin to Celsius and Fahrenheit
    result =
      temp -
      273.15 +
      " Celsius, " +
      (((temp - 273.15) * 9) / 5 + 32) +
      " Fahrenheit";
  }

  document.getElementById("results").textContent = result;
});
