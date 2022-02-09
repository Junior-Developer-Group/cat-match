const catApi = "https://api.thecatapi.com/v1/breeds";
const allcats = document.getElementById("allcats");
const submitButton = document.querySelector(".submitButton");
const form = document.getElementById("form");
const allCatsButton = document.querySelector(".allCatsButton");

const loader = document.querySelector(".loader");
let catResults;
let catBreeds;

submitButton.addEventListener("click", async (e) => {
  displayLoader();
  e.preventDefault();
  getUserInputs();
  console.log(userValues);

  let result = await getAllCatBreeds();
  if (result) {
    console.log(result.data);
    catBreeds = result.data;
    //the hideLoader function should go here, when the code for displaying the cats data is done
    //Code for displaying the cats based on the input search parameters goes here.
    catResults = catBreeds.filter((cat) => {
      return (
        (userValues.active
          ? cat.energy_level === userValues.active
          : cat.energy_level) &&
        (userValues.dogFriendly
          ? cat.dog_friendly === userValues.dogFriendly
          : cat.dog_friendly) &&
        (userValues.friendly
          ? cat.stranger_friendly === userValues.friendly
          : cat.stranger_friendly) &&
        (userValues.intelligence
          ? cat.intelligence === userValues.intelligence
          : cat.intelligence) &&
        cat.hypoallergenic === userValues.hypoallergenic &&
        cat.rare === userValues.rare
      );
    });
  }
  console.log(catBreeds);
  console.log(catResults);
});
function displayLoader() {
  loader.classList.add("display");
  loader.setAttribute("aria-expanded", "true");
  setTimeout(() => {
    loader.classList.remove("display");
    loader.setAttribute("aria-expanded", "false");
  }, 5000);
}

function hideLoader() {
  //use function when api is done fetching data
  loader.classList.remove("display");
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
  return (userValues = { ...formValues });
}
