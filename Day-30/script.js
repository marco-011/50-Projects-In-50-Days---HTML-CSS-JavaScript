// Get elements from DOM
const resultEl  = document.getElementById('result')        // where password is shown
const lengthEl = document.getElementById('length')         // password length input
const uppercaseEl = document.getElementById('uppercase')   // uppercase checkbox
const lowercaseEl  = document.getElementById('lowercase')  // lowercase checkbox
const numbersEl = document.getElementById('numbers')       // numbers checkbox
const symbolsEl = document.getElementById('symbols')       // symbols checkbox
const generateEl = document.getElementById('generate')     // generate button
const clipboardEl = document.getElementById('clipboard')   // copy button

// Object storing all random generator functions
const randomFun = {
  lower: getRandomlower,
  upper: getRandomupper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

// ================= COPY PASSWORD =================
clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea') // create temp textarea
  const password = resultEl.innerText                 // get generated password

  if (!password) return                              // if empty, do nothing

  textarea.value = password                          // set password inside textarea
  document.body.appendChild(textarea)                // add to DOM
  textarea.select()                                  // select text
  document.execCommand('copy')                       // copy text
  textarea.remove()                                 // remove textarea

  alert('Password copied to clipboard!')             // success message
})

// ================= GENERATE PASSWORD =================
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value         // get length (convert to number)
  const hasLower = lowercaseEl.checked   // check if lowercase selected
  const hasUpper = uppercaseEl.checked   // check if uppercase selected
  const hasNumber = numbersEl.checked    // check if numbers selected
  const hasSymbol = symbolsEl.checked    // check if symbols selected

  // call function and display result
  resultEl.innerText = generatepassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  )
})

// ================= PASSWORD LOGIC =================
function generatepassword(lower, upper, number, symbol, length) {
  let generatedPassword = ''   // store final password

  // create array of selected types only
  const typesArr = [
    { lower },
    { upper },
    { number },
    { symbol }
  ].filter(item => Object.values(item)[0])

  if (typesArr.length === 0) return '' // if nothing selected

  // loop for password length
  for (let i = 0; i < length; i++) {

    // pick random type (lower/upper/number/symbol)
    const type = typesArr[Math.floor(Math.random() * typesArr.length)]

    // append corresponding random character
    if (type.lower) generatedPassword += getRandomlower()
    if (type.upper) generatedPassword += getRandomupper()
    if (type.number) generatedPassword += getRandomNumber()
    if (type.symbol) generatedPassword += getRandomSymbol()
  }

  // return final password (cut to exact length)
  return generatedPassword.slice(0, length)
}

// ================= RANDOM CHARACTER FUNCTIONS =================

// generate random lowercase letter (a-z)
function getRandomlower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

// generate random uppercase letter (A-Z)
function getRandomupper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

// generate random number (0-9)
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

// generate random symbol
function getRandomSymbol() {
  const symbols = "!@#$%^&*()=<>{}[]/"  // symbol list
  return symbols[Math.floor(Math.random() * symbols.length)]
}
