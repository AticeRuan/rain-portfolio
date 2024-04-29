'use client'

const Expand = ({ width = '36', height = '36' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 12L12 18L18 12M6 6L12 12L18 6"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  )
}
const Close = ({ width = '36', height = '36' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 12L12 6L6 12M18 18L12 12L6 18"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  )
}

export { Expand, Close }
