const list = document.querySelectorAll("#navitems li");

Array.from(list).forEach(li => {
    li.addEventListener("click", (e) => console.log(e.target.innerText))
}) 