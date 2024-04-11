import React from 'react'

export default function Table({ children }) {
  // Lấy mảng các phần tử con của Table
  const childrenArray = React.Children.toArray(children)

  // Khởi tạo một mảng để chứa các phần tử JSX
  const renderedChildren = []

  // Duyệt qua các phần tử con của Table
  childrenArray[0].props.children.forEach((child) => {
    // Thêm các phần tử JSX vào mảng renderedChildren
    renderedChildren.push(child)
  })

  // Thêm phần tử JSX của <groupBy> vào mảng renderedChildren
  renderedChildren.push(childrenArray[1])
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex"></div>
        <div className="flex"></div>
      </div>
    </>
  )
}
