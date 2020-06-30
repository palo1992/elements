const divs = document.querySelectorAll('.animate');

divs.forEach(div => {
    div.onclick = (e) => {
        e.target.style.transition = "opacity 1.5s";
        e.target.style.opacity = 0.8;
        console.log(e.target);
        //  e.target.querySelector("p").classList.toggle("show");

    }
});