

const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)


const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconThem= "ri-sun-line"
/* <i class="ri-sun-line"></i> */
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// const getCurrentTheme =()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentTheme =()=> themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

const getCurrentTheme = () =>document.body.classList.contains(darkTheme) ? 'dark': 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconThem) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon=== 'ri-moon-line' ? 'add': 'remove'](iconThem)
}


themeButton.addEventListener('click', ()=>{

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconThem)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())


})

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'aadimalviyaa@gmail.com',  
        From : document.getElementById("email").value,
        Subject : "Some one has quary",
        Body : "Name: "+ document.getElementById("name").value
              + "<br> Email: "+ document.getElementById("email").value
              + "<br> Phone no.: "+ document.getElementById("phone").value
              + "<br> Message: "+ document.getElementById("message").value
              
    }).then(
      message => alert(message)
    );
}