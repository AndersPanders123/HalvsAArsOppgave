window.addEventListener("load", function () {
    let text = document.getElementById("box1")

    let items  = localStorage.getItem('gjenstander')

    let itemsArray = items.split(";")

    itemsArray.forEach(element => {
        text.innerHTML += '<p>' + element +  '</p>'
    });
})