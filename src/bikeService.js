// import { handleSubmit } from "./index.js";



export default function getBikeInfo(colorSelection, citySelection) {
  let request = new XMLHttpRequest();
  const url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=100&colors=${colorSelection}&location=${citySelection}&distance=10&stolenness=proximity`;

  request.addEventListener("loadend", function () {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      countColor(getColors(response));
  
    } else {
      // printError(this); 
    }
  });

  request.open("GET", url, true);
  request.send();

}




function getColors(apiResponse) {
  const bikesObj = apiResponse.bikes;
  const colorsArr = [];
  for (let i = 0; i < bikesObj.length; i++) {
    colorsArr.push(bikesObj[i].frame_colors[0]);
  }

  console.log(colorsArr.sort());
  // let frameColorsArray = newArr.map(obj => obj.frame_colors).flat();
  // console.log(frameColorsArray);
  return colorsArr.sort();
}


function countColor(array) {

  let blackCount = 0;
  let blueCount = 0;
  let greenCount = 0;
  let brownCount = 0;
  let redCount = 0;
  let silverCount = 0;
  let tealCount = 0;
  let whiteCount = 0;
  let yellowCount = 0;
  let orangeCount = 0;
  let pinkCount = 0;
  let purpleCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'Black') {
      blackCount++;
    } else if (array[i] === 'Blue') {
      blueCount++;
    } else if (array[i] === 'Green') {
      greenCount++;
    } else if (array[i] === 'Brown') {
      brownCount++;
    } else if (array[i] === 'Red') {
      redCount++;
    } else if (array[i] === 'Silver, gray or bare metal') {
      silverCount++;
    } else if (array[i] === 'Teal') {
      tealCount++;
    } else if (array[i] === 'Yellow or Gold') {
      yellowCount++;
    } else if (array[i] === 'White') {
      whiteCount++;
    } else if (array[i] === 'Orange') {
      orangeCount++;
    } else if (array[i] === 'Pink') {
      pinkCount++;
    } else if (array[i] === 'Purple') {
      purpleCount++;
    }
  }

  console.log(`Black: ${blackCount}`);
  console.log(`Blue: ${blueCount}`);
  console.log(`Green: ${greenCount}`);
  console.log(`Brown: ${brownCount}`);
  console.log(`Red: ${redCount}`);
  console.log(`Silver, gray or bare metal: ${silverCount}`);
  console.log(`Teal: ${tealCount}`);
  console.log(`Yellow or Gold: ${yellowCount}`);
  console.log(`White: ${whiteCount}`);
  console.log(`Orange: ${orangeCount}`);
  console.log(`Pink: ${pinkCount}`);
  console.log(`Purple: ${purpleCount}`);

}