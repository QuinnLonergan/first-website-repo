const h2 = document.createElement('h2');
h2.textContent = "Quinn Lonergan";

document.querySelector('body').appendChild(h2); 


function addingEventListener() {
    const country = document.getElementById('country');

function clickAlert() {
  alert('I was clicked!');
}

country.addEventListener('click', clickAlert); 
}

addingEventListener();

//function changeImage() {
    //if (document.getElementById("countryimg").src == "images/51Qmd5JHNeL._AC_.jpg") 
    //{
    //document.getElementById("countryimg").src = "images/country2.jpg";
    //}
    //else 
    //{
    //document.getElementById("countryimg").src = "images/51Qmd5JHNeL._AC_.jpg";
//}
//}


