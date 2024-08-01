export default function FunctionGlobal() {
  window.formatCurrency = function (number) {
    if (isNaN(number)) {
      return 'Invalid number'
    }

    let parts = parseFloat(number).toFixed(2).split('.')
    let formattedNumber = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')

    if (parts[1] === '00') {
      return formattedNumber + ' đ'
    } else {
      return formattedNumber + ',' + parts[1] + ' đ'
    }
  }

  window.formatCurrency2 = function (number) {
    if (isNaN(number)) {
      return 'Invalid number'
    }

    let parts = parseFloat(number).toFixed(2).split('.')
    let formattedNumber = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')

    if (parts[1] === '00') {
      return '₫ ' + formattedNumber
    } else {
      return '₫ ' + formattedNumber + ',' + parts[1]
    }
  }

  window.formatNumberNođ = function (numberString) {
    const parts = numberString.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    return parts.join('.')
  }

  window.convertDateFormat = function (dateString) {
    const date = new Date(dateString)

    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()

    return `${day}-${month}-${year}`
  }

  window.convertDateFormatDot = function (dateString) {
    const dateParts = dateString.split('-')

    const day = dateParts[0]
    const month = dateParts[1]
    const year = dateParts[2]

    return `${day}.${month}.${year}`
  }
}
