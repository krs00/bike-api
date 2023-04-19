export default function getBikeInfo() {
  let request = new XMLHttpRequest();
  const url = 'https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=Portland%2C%20Oregon&stolenness=proximity';

  request.addEventListener("loadend", function () {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      getColors(response);
    } else {
      // printError(this);
    }
  });

  request.open("GET", url, true);
  request.send();

}

function getColors(apiResponse) {
  

  const bikesObj = apiResponse.bikes;


  let newArr = [];

  for(let i = 0; i <= 99; i++) {

    newArr.push(bikesObj[i]);

  }
}

