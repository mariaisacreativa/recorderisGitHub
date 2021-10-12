let btn = document.getElementById("saveBtn");
let nombre = document.getElementById("personName");
let personId = document.getElementById("personId");

btn.addEventListener("click", function (event) {
    console.log(event)
    event.preventDefault();
    guardarData(personId.value,nombre.value)
})

function guardarData(personIdentifier, dataAGuardar) {
    localStorage.setItem(personIdentifier,dataAGuardar)
}

