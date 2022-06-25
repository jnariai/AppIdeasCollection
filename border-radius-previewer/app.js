const inputTL = document.getElementById('inputTL')
const inputTR = document.getElementById('inputTR')
const inputBL = document.getElementById('inputBL')
const inputBR = document.getElementById('inputBR')

const btn = document.getElementById('btn')
const btnCopy = document.getElementById('btnCopy')
const boxPreview = document.getElementById('boxPreview')

btn.addEventListener('click', function () {
  boxPreview.style.borderTopLeftRadius = inputTL.value + 'px'
  boxPreview.style.borderTopRightRadius = inputTR.value + 'px'
  boxPreview.style.borderBottomLeftRadius = inputBL.value + 'px'
  boxPreview.style.borderBottomRightRadius = inputBR.value + 'px'
})

btnCopy.onclick = function () {
  const copyCss = `border-radius: ${inputTL.value}px ${inputTR.value}px ${inputBL.value}px ${inputBR.value}px`
  navigator.clipboard.writeText(copyCss)
}
