
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close");

let openModal = () => {
    modal.style.display = "flex";
}

let closeModal = () => {
    modal.style.display = "none";
}
let outside = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

modal.addEventListener('click', outside);
btn.addEventListener('click', openModal);
span.addEventListener('click', closeModal);




