import React from 'react'

const Medium = ({ width = '35', height = 'auto' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.519 20 10ZM11.004 10C11.004 12.458 9.024 14.45 6.584 14.45C4.142 14.45 2.163 12.458 2.163 10C2.163 7.542 4.143 5.549 6.583 5.549C9.025 5.549 11.004 7.542 11.004 9.999M15.854 9.999C15.854 12.313 14.864 14.189 13.644 14.189C12.422 14.189 11.433 12.313 11.433 9.999C11.433 7.685 12.423 5.809 13.643 5.809C14.863 5.809 15.854 7.684 15.854 9.999ZM17.836 9.999C17.836 12.071 17.488 13.753 17.059 13.753C16.63 13.753 16.281 12.072 16.281 9.999C16.281 7.926 16.629 6.245 17.059 6.245C17.488 6.245 17.836 7.925 17.836 9.999Z"
        fill="black"
      />
    </svg>
  )
}

export default Medium
