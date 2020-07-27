let number = document.getElementById(`number`)
let numberParagraph = document.getElementById(`numberParagraph`)

let names = [``, `thousand`, `million`, `billion`, `trillion`, `quadrillion`, `quintillion`, `sextillion`, `septillion`, `octillion`, `nonillion`, `decillion`, `undecillion`, `duodecillion`, `tredecillion`, `quattuordecillion`, `quindecillion`, `sexdecillion`, `septendecillion`, `octodecillion`, `novemdecillion`, `vigintillion`]

number.addEventListener(`keydown`, keyPressed)
number.focus()

function keyPressed(event) {
  if (event.keyCode == 13) {
    spellNumber()
  }
}

function spellNumber() {
  let numberValue = number.value.trim()

  if (numberValue != `` && !isNaN(numberValue)) {
    if (numberValue < 1) {
      numberParagraph.innerHTML = `Number must be at least 1.`
    }
    else if (numberValue != Math.floor(numberValue)) {
      numberParagraph.innerHTML = `Number must be an integer.`
    }
    else {
      numberParagraph.innerHTML = ``
      let count = 0

      for (let i = numberValue.length - 3; i > -3; i -= 3) {
        let group

        if (count < names.length - 1) {
          group = numberValue.substring(i, i + 3)
        }
        else {
          group = numberValue.substring(0, i + 3)
        }

        let trimmed = trimLeadingZeros(group)

        if (trimmed != ``) {
          let numberText
          
          if (count == 0) {
            numberText = trimmed
          }
          else {
            numberText = `${trimmed} ${names[count]}`
          }

          if (numberParagraph.innerHTML == ``) {
            numberParagraph.innerHTML = numberText
          }
          else {
            numberParagraph.innerHTML = `${numberText}, ${numberParagraph.innerHTML}`
          }
        }

        count++

        if (count == names.length) {
          break
        }
      }
    }
  }
}

function trimLeadingZeros(string) {
  let result = ``
  let nonZeroFound = false

  for (let digit of string) {
    if (digit != `0` || nonZeroFound) {
      result += digit
      nonZeroFound = true
    }
  }

  return result
}