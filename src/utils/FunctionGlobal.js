export default function FunctionGlobal() {
  window.formatCurrency = function (number) {
    if (isNaN(number)) {
      return 'Invalid number'
    }

    let parts = parseFloat(number).toFixed(2).split('.')
    let formattedNumber = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')

    return '₫' + formattedNumber
  }

  window.formatDate = function (dateString) {
    const date = new Date(dateString)
    if (!isNaN(date.getTime())) {
      const formattedDay = date.getDate().toString().padStart(2, '0')
      const formattedMonth = (date.getMonth() + 1).toString().padStart(2, '0')
      const formattedYear = date.getFullYear()

      return `${formattedDay}.${formattedMonth}.${formattedYear}`
    }

    return 'Invalid Date'
  }
}
