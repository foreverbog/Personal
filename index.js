const logInBtn = document.querySelector('.logInBtn')
const logInForm = document.querySelector('.logInForm')
const guestcontainer = document.querySelector('.guestcontainer')
const closeBtn = document.querySelector('.closeBtn')
const closeBtn2 = document.querySelector('.closeBtn2')
const registerBtn = document.querySelector('.registerBtn')
const registerForm = document.querySelector('.registerForm')

logInBtn.addEventListener('click', () => {
    guestcontainer.classList.add('hidden')
    logInForm.classList.remove('hidden')
})
registerBtn.addEventListener('click', () => {
    guestcontainer.classList.add('hidden')
    registerForm.classList.remove('hidden')
})

closeBtn.addEventListener('click', () => {
    guestcontainer.classList.remove('hidden')
    logInForm.classList.add('hidden')
})
closeBtn2.addEventListener('click', () => {
    guestcontainer.classList.remove('hidden')
    registerForm.classList.add('hidden')
    
})