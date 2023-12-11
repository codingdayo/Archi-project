const counts = document.querySelectorAll(".count");
const speed = 97;

counts.forEach((counter) => {
  function updateCount() {
    const target = Number(counter.getAttribute("data-target"));
    const count = Number(counter.innerText);
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(inc + count);
      setTimeout(updateCount, 40);
    } else {
      counter.innerText = target + "+";
    }
  }

  updateCount();
});

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");

  const mobileMenu = document.querySelector(".mobile-menu");
  const icon = menuButton.querySelector("i");

  icon.addEventListener("click", () => {
    icon.classList.toggle("fa-x");
    icon.classList.toggle("fa-bars");
  });

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});

// const counts = document.querySelectorAll('.count')
// const speed = 97

// counts.forEach((counter) => {
//     function upDate(){
//         const target = Number(counter.getAttribute('data-target'))
//         const count = Number(counter.innerText)
//         const inc = target / speed
//         if(count < target){
//             counter.innerText = Math.floor(inc + count)
//             setTimeout(upDate, 15)
//         }else{
//             counter.innerText = target
//         }
//     }
//     upDate()
// })
