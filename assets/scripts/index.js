const catApi="https://api.thecatapi.com/v1/breeds";
const allcats=document.getElementById("allcats");
const submitButton=document.querySelector(".submitButton");
const form=document.getElementById("form");
const allCatsButton=document.querySelector(".allCatsButton");
let catBreeds; 



submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    getUserInputs();
    console.log(userValues);
})

allCatsButton.addEventListener("click", async (e) => {
    let result = await getAllCatBreeds();
    if(result){
        console.log(result.data);
        catBreeds = result.data;
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


