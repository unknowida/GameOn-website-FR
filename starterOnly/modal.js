function editNav() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}
// #2 Implement form entries
function validate() {
  console.log('Validate')

  let formValid = true

  const inputFirstName = document.querySelector('#first')
  const firstName = inputFirstName.value

  if (firstName.length < 2) {
    formValid = false
  }
  return formValid
}




/// DOM Elements
const modalbg = document.querySelector('.bground')
const modalBtn = document.querySelectorAll('.modal-btn')
const formData = document.querySelectorAll('.formData')
//*close modal*//
const modalClose = document.querySelectorAll('span.close')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = 'block'
}

// #1 TODO : close modal

// Close modal event
modalClose.forEach((close) => close.addEventListener('click', closeModal))

// close modal form
function closeModal() {
  modalbg.style.display = 'none'
}



