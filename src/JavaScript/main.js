// Making hearbar visible and unvisible by scroll
let HeadBar = document.getElementById('HeadBar')

let lastScroll = 0

window.addEventListener("scroll" , ()=>{
    const currentScroll = window.pageYOffset;
    
    if (currentScroll>lastScroll && currentScroll > 150) {
        console.log(currentScroll +"-"+ lastScroll);
        
        HeadBar.classList.add("-translate-y-full")
    } else {
        HeadBar.classList.remove("-translate-y-full")
        
    }
    
    lastScroll = currentScroll
})

