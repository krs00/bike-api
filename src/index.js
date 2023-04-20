import getBikeInfo from "./bikeService";

export function handleSubmit(event) {
  event.preventDefault();
  const colorSelection = document.getElementById('bike-color').value;
  const citySelection = document.getElementById('city').value;
  console.log(colorSelection);
  console.log(citySelection);

  getBikeInfo(colorSelection, citySelection);

}

const form = document.getElementById('form');

form.addEventListener("submit", handleSubmit);