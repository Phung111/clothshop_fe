export default function Description() {
  const preStyle = {
    whiteSpace: 'pre-wrap', // Giữ nguyên định dạng xuống dòng
    fontFamily: 'inherit', // Sử dụng font chữ của parent element (có thể là Tailwind)
    fontSize: '14px', // Sử dụng cỡ chữ của parent element (có thể là Tailwind)
  }

  return (
    <div className="p-4">
      <pre style={preStyle}>
        {`
1. THÔNG TIN SẢN PHẨM 

- Các Size  M - L- XL- XXL 

+ Size  M :      53 - 63 kg            cao 1m55 - 1m67
+ Size L :        64 - 70kg             cao 1m63 - 1m75
+ Size XL :      71- 78kg             cao 1m65 - 1m77
+ Size XXL :   79 - 87kg             cao 1m68 - 1m85


- Form áo regular dễ phối đồ

2. CHÍNH SÁCH BÁN HÀNG:

- Chất lượng và mẫu mã sản phẩm giống với hình ảnh.
- Hoàn tiền nếu sản phẩm không giống với mô tả.
- Hỗ trợ đổi trả hàng trong vòng 2 ngày.

3. HƯỚNG DẪN CÁCH ĐẶT HÀNG

- Bước 1: Cách chọn size, shop có bảng size mẫu. Bạn NÊN INBOX, cung cấp chiều cao, cân nặng để SHOP TƯ VẤN SIZE
- Bước 2: Cách đặt hàng: Nếu bạn muốn mua 2 sản phẩm khác nhau hoặc 2 size khác nhau, để được freeship
+ Bạn chọn từng sản phẩm rồi thêm vào giỏ hàng
+ Khi giỏ hàng đã có đầy đủ các sản phẩm cần mua, bạn mới tiến hành ấn nút “ Thanh toán”
- Shop luôn sẵn sàng trả lời inbox để tư vấn.        
`}
      </pre>
    </div>
  )
}
