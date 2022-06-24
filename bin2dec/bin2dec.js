// Creating variables
let userInput = document.getElementById('binary')
const decText = document.getElementById('decimal')
const btnSend = document.getElementById('btn-send')

btnSend.addEventListener('click', function () {
  userValue = userInput.value
  // Check if string has other number than 0 or 1
  binaryCheck =
    userValue.includes('2') ||
    userValue.includes('3') ||
    userValue.includes('4') ||
    userValue.includes('5') ||
    userValue.includes('6') ||
    userValue.includes('7') ||
    userValue.includes('8') ||
    userValue.includes('9') ||
    userValue == ''
  if (binaryCheck == true) {
    window.alert('Type a binary number')
    decText.textContent = '0'
    decText.style.opacity = 0.4
  } else {
    let dec = parseInt(userValue, 2)
    decText.textContent = dec
    decText.style.opacity = 1
  }
})

// Method using array
// let dec = 0
// btnSend.addEventListener('click', function () {
//   // Convert user input to array of numbers
//   const binary = Array.from(userInput.value).map(Number)

//   // Reverse array order to start from least significant number
//   const binaryReverse = binary.reverse()

//   // Check if user input is a binary number
//   let binaryCheck = binaryReverse.every(function (e) {
//     return e == 1 || e == 0
//   })

//   // Convert binary to decimal
//   if (binaryCheck === true) {
//     for (i = 0; i < binaryReverse.length; i++) {
//       dec += binaryReverse[i] * Math.pow(2, i)
//     }
//     decText.textContent = dec
//     decText.style.opacity = 1
//     dec = 0
//   } else {
//     // If user didn't type a binary
//     window.alert('Type a binary number')
//     decText.textContent = '0'
//     decText.style.opacity = 0.4
//   }
// })
