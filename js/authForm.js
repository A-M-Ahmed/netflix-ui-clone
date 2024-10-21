const formTitle = document.querySelector('#form-title')
const authForm = document.querySelector('#authForm')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
const authButton = document.querySelector('#authButton')
//* paragraph
const authSwitch = document.querySelector('#authSwitch')
//* the link of rigister
const switchForm = document.querySelector('#switchForm')

// * click 
let signIn = true
document.body.addEventListener('click', (e) => {
    if (e.target.id != 'switchForm') return
   
    signIn = !signIn
    if (signIn) {
        formTitle.textContent = 'Sign In'
        username.style.display = 'none'
        confirmPassword.style.display = 'none'
        authButton.textContent = 'Sign In'
        username.value = ''
        confirmPassword.value = ''

        authSwitch.innerHTML = `
      New to DugFlix? <a href="#" id="switchForm">Register now</a>
    `

    } else {


        formTitle.textContent = 'Sign Up'
        username.style.display = 'block'
        confirmPassword.style.display = 'block'
        authButton.textContent = 'Sign Up'

        authSwitch.innerHTML = `
     Already have an account <a href="#" id="switchForm">Sign In</a>
    `

    }


})

///?? form submit
authForm.addEventListener('submit', function(e){

    e.preventDefault()
    const user = {
        username : signIn ? undefined : username.value,
        email : email.value,
        password : password.value,
        confirmPassword: signIn ? undefined : confirmPassword.value
     
    }
    
    if(!signIn && confirmPassword.value.trim() !== password.value.trim()){
        alert('Password mismatch')
        return;
    }
    localStorage.setItem('users', JSON.stringify(user))
  
  
})