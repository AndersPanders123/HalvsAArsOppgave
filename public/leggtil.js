console.log("Lukas var her!")

function leggtil() {
    let text = document.getElementById("navn").value
    if(localStorage.getItem('gjenstander') == null) {
        localStorage.setItem("gjenstander", text)
    }
    else {
        localStorage.setItem("gjenstander", localStorage.getItem("gjenstander") + ";" + text)
    }  
}