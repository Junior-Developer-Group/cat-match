const catApi="https://api.thecatapi.com/v1/breeds";
const allcats=document.getElementById("allcats");
const submitButton=document.querySelector(".submitButton");
const form=document.getElementById("form");
const allCatsButton=document.querySelector(".allCatsButton");
let catBreeds; 



submitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    getUserInputs();
    console.log(userValues);

    let result = await getAllCatBreeds();
    if(result){
        console.log(result.data);
        catBreeds = result.data;
        //Code for displaying the cats based on the input search parameters goes here.
    }
});

function getUserInputs() {
    const inputs=form.elements;
    let formValues={};
    for (const input of inputs) {
        if (input.type=="checkbox") {
            formValues[input.id]=input.checked==true? 1:0;
        } else {
            formValues[input.id]=input.value;
        }
    }
    return userValues={ ...formValues };
};


