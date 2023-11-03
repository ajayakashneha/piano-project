const wrapper = document.querySelector(".wrapper")
// console.log(wrapper)
const signupHeader = document.querySelector(".signup Header")
//console.log(signupHeader)
const loginHeader = document.querySelector(".login Header")
//console.log(loginHeader)
loginHeader.addEventListener("click", () =>{
    wrapper.classList.add("active")
})

signupHeader.addEventListener("click", () =>{
    wrapper.classList.remove("active")
})