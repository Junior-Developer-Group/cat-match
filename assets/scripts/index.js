const catApi = "https://api.thecatapi.com/v1/breeds";
const allcats = document.getElementById("all");
const submitButton = document.querySelector(".submitButton");
const form = document.getElementById("form");
const allCatsButton = document.querySelector(".allCatsButton");
const catcatParagraph = document.getElementById('catParagraph');

const allSelectFields = document.getElementsByTagName('select');
const allTickboxFields = document.getElementsByTagName('input');


const loader = document.querySelector(".loader");
let catResults;
let catBreeds;

this.baseUrl = 'https://api.thecatapi.com/v1/';

async function getAllCatBreeds(){
    let response = null;
    try {
        response = await axios.get(`${this.baseUrl}breeds`);
    }
    catch (error){
        console.error(error);
    }
    return response;
}

submitButton.addEventListener("click", async (e) => {
    displayLoader();
    e.preventDefault();
    getUserInputs();

    let result = await getAllCatBreeds();

    if (result) {
      catBreeds = result.data;
      if(catBreeds.length > 0 ) {
        hideLoader();
        hideCatContainerParagraph();
      }
      //specify local images for the persian ,european and burmese cat as the api does not have images for these.
      catBreeds.forEach(cat=>{
        if (cat.name =="Persian"){
          cat.image.url = "../assets/images/persiancat.jpg"
        }else if(cat.name == "European Burmese"){
          cat.image = {url: "../assets/images/europeanBurmese.jpeg"};
          cat.wikipedia_url="https://en.wikipedia.org/wiki/Burmese_cat";
        }else if (cat.name == "Malayan"){
          cat.image={url:"../assets/images/malayan.jpeg"};
        }
      })
      //check if we have anything in uservalues, if nothing then the form hasent been filled in at all and we display message and return
      const checkValues=Object.values(userValues).every((v) => v === 0);
      if (checkValues){
       displayCatContainerParagraph();
       return
      }
      //Code for displaying the cats based on the input search parameters goes here.
      if (userValues.all){
        catResults = catBreeds;
      }else {
        catResults = catBreeds.filter((cat) => {
          return (
           (!userValues.rare| cat.rare=== userValues.rare) && 
           (!userValues.hypoallergenic || cat.hypoallergenic === userValues.hypoallergenic) && 
           (!userValues.active || cat.energy_level === userValues.energy_level)&&
           (!userValues.dogFriendly || cat.dog_friendly===userValues.dogFriendly)&&
           (!userValues.grooming || cat.grooming === userValues.grooming)&&
           (!userValues.intelligence || cat.intelligence===userValues.intelligence)&&
           (!userValues.friendly || cat.stranger_friendly ===userValues.friendly)
          );
        });
      }
      if (catResults == 0) {
        displayCatContainerParagraph();
      }
    }
 
   //get where the cat cards container is going to go
  const cardContainer = document.getElementById("cardContainer");

  catResults.map(cat =>{
    card =
     ` <div class="card">
     ${cat.image?`<img class = "cardImage"src="${cat.image.url}" alt="${cat.name}">`:``}
      <div class = "catDetails">
        <div class= "catDetails__inner">
        <h1>${cat.name}</h1>
        <p class="card__description">${cat.description}</p>
        <p><strong>Temperament</strong>: <br> ${cat.temperament}</p>
        <p><strong>Origins</strong>: ${cat.origin}</p>
        <p><strong>Life-Span</strong>: ${cat.life_span} years</p>
        <a class = "flexible" href="${cat.wikipedia_url}">More information on this breed</a>
        </div>
      </div>
    </div>`;

    cardContainer.innerHTML +=card;
    
  })

    displayCatContainer();
});

function greyOutTheFields() {

  // add disabled
  for (let item of allSelectFields) {
    
    item.setAttribute('disabled',true);
  }
  for (let item of allTickboxFields) {

    if(item.getAttribute('id') !== 'all') {
      item.setAttribute('disabled', true);
    }

  }


  // stop mouse from clicking
  for (let item of allSelectFields) {
    item.classList.add('cursor-not-allowed');
  }

  for (let item of allTickboxFields) {

    if(item.getAttribute('id') !== 'all') {
      item.classList.add('cursor-not-allowed');
    }

  }

}

function removeGreyFromTheFields() {

  // remove disabled
  for (let item of allSelectFields) {
    item.removeAttribute('disabled')
  }


  for (let item of allTickboxFields) {
    item.removeAttribute('disabled');
  }


   // allow mouse clicking
   for (let item of allSelectFields) {
    item.classList.remove('cursor-not-allowed');
   }

  for (let item of allTickboxFields) {
    item.classList.remove('cursor-not-allowed');
  }

}

function toggleDisabledClasses() {
  if(allcats.checked) {
    greyOutTheFields()
  } else {
    removeGreyFromTheFields();
  }
}



function getUserInputs() {
  const inputs = form.elements;
  let formValues = {};
  for (const input of inputs) {
    if (input.type == "checkbox") {
      formValues[input.id] = input.checked == true ? 1 : 0;
    } else if (input.type == "select-one") {
      formValues[input.id] = parseInt(input.value);
    }
  }
  //this may be changes to a button click?
  resetSearchForm();
  hideCatContainer();
  return (userValues = { ...formValues });
}

function resetSearchForm() {
  form.reset();
  removeGreyFromTheFields();
}


function displayCatContainer() {
  cardContainer.classList.add('display');

}

function hideCatContainer() {
  cardContainer.classList.remove('display');
  cardContainer.innerHTML = '';
}

function displayCatContainerParagraph() {
  catParagraph.classList.add('display');

}

function hideCatContainerParagraph() {
  catParagraph.classList.remove('display');
}

function displayLoader() {
  loader.classList.add("display");
  loader.setAttribute("aria-expanded", "true");
}


function hideLoader() {
  loader.classList.remove("display");
  loader.setAttribute("aria-expanded", "false");
}

function ninjaClick() {
  submitButton.click()
  document.getElementById('submit').scrollIntoView();
}
