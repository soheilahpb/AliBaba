let HeadBar = document.getElementById('HeadBar')

// Making hearbar visible and unvisible by scroll

let lastScroll = 0

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 150) {
        HeadBar.classList.add("-translate-y-full")
    } else {
        HeadBar.classList.remove("-translate-y-full")
    }

    lastScroll = currentScroll
})



// making the menu 
const _buttons = document.querySelectorAll("._select>li")
const _tabs = document.querySelectorAll("._section>div")
const _image = document.getElementById("title_image")
console.log(_buttons);
console.log(_tabs);

const _tab = (e) => {

    console.log(e.currentTarget);
    let _title = e.currentTarget.getAttribute("data-title")
    console.log(_title);
    

    // reset buttons color
    _buttons.forEach((val) => {
        val.classList.remove("*:text-[#0077DB]")
        val.children[1].classList.remove('border-b-4')
        val.children[1].classList.remove('border-b-[#0077DB]')
    })

    // reset pages opacity
    _tabs.forEach((val) => {
        val.classList.add("opacity-0")
        val.classList.remove("opacity-100")
    })

    // change pages
    document.getElementById(_title).classList.add("opacity-100")
    document.getElementById(_title).classList.remove("opacity-0")

    // make button colorfull
    e.currentTarget.classList.add("*:text-[#0077DB]")
    e.currentTarget.children[1].classList.add("border-b-4")
    e.currentTarget.children[1].classList.add("border-b-[#0077DB]")

    // change picture
    _image.src = "src/images/"+_title+".webp"
}