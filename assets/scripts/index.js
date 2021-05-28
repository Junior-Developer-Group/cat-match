const catApi="https://api.thecatapi.com/v1/breeds";
const allcats=document.getElementById("allcats");
const formButton=document.querySelector(".formButton");
const form=document.getElementById("form");

allcats.addEventListener("change", disableInputs);

formButton.addEventListener("click", (e) => {
    e.preventDefault();
    getUserInputs();
    console.log(userValues);
})

function disableInputs() {
    const elements=form.elements;
    for (element of elements) {
        if (allcats!==element) {
            if (allcats.checked==true&&element.type!='submit') {
                element.disabled=true;
                form.reset();
                allcats.checked=true;
            } else {
                element.disabled=false;
            }
        }
    }
};


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


