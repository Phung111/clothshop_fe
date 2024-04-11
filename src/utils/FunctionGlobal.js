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

  window.convertDateFormat = function (dateString) {
    // Tạo một đối tượng Date từ chuỗi ngày
    const date = new Date(dateString)

    // Lấy ngày, tháng và năm từ đối tượng Date
    const day = date.getDate().toString().padStart(2, '0') // Đảm bảo ngày có 2 chữ số
    const month = (date.getMonth() + 1).toString().padStart(2, '0') // Tháng được đánh số từ 0 đến 11
    const year = date.getFullYear()

    // Trả về chuỗi ngày theo định dạng "dd-mm-yyyy"
    return `${day}-${month}-${year}`
  }
}
