const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
 wrapper.style.transform = "translateX(-400vw)";

menuItems.forEach((item, index)=>{
    item.addEventListener("click",()=>{
         wrapper.style.transform = `translateX(${-100 * index}vw)`;
        // console.log(index);
    });
});