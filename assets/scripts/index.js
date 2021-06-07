const catApi="https://api.thecatapi.com/v1/breeds";
const allcats=document.getElementById("allcats");
const submitButton=document.querySelector(".submitButton");
const form=document.getElementById("form");



submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    getUserInputs();
    console.log(userValues);
})


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


