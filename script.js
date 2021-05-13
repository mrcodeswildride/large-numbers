let number = document.getElementById(`number`)
let numberParagraph = document.getElementById(`numberParagraph`)

let names = [
  ``,
  `thousand`,
  `million`,
  `billion`,
  `trillion`,
  `quadrillion`,
  `quintillion`,
  `sextillion`,
  `septillion`,
  `octillion`,
  `nonillion`,
  `decillion`,
  `undecillion`,
  `duodecillion`,
  `tredecillion`,
  `quattuordecillion`,
  `quindecillion`,
  `sexdecillion`,
  `septendecillion`,
  `octodecillion`,
  `novemdecillion`,
  `vigintillion`,
]

number.addEventListener(`input`, spellNumber)
number.focus()

function spellNumber() {
  let numberValue = number.value.trim()
  numberParagraph.innerHTML = ``

  if (/^[0-9]+$/.test(numberValue)) {
    let groupNum = 0

    for (let i = numberValue.length - 3; i > -3; i -= 3) {
      let group

      if (groupNum < names.length - 1) {
        group = numberValue.substring(i, i + 3)
      } else {
        group = numberValue.substring(0, i + 3)
      }

      let trimmed = trimLeadingZeros(group)

      if (trimmed != ``) {
        let numberText

        if (groupNum == 0) {
          numberText = trimmed
        } else {
          numberText = `${trimmed} ${names[groupNum]}`
        }

        if (numberParagraph.innerHTML == ``) {
          numberParagraph.innerHTML = numberText
        } else {
          numberParagraph.innerHTML = `${numberText}, ${numberParagraph.innerHTML}`
        }
      }

      groupNum++

      if (groupNum == names.length) {
        break
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
