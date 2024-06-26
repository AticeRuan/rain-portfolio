import React from 'react'

const Email = ({ width = '35', height = '28' }) => {
  return (
    <div className="group">
      {' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 35 28"
        fill="none"
      >
        <path
          d="M0 3.5C0 2.57174 0.368749 1.6815 1.02513 1.02513C1.6815 0.368749 2.57174 0 3.5 0H31.5C32.4283 0 33.3185 0.368749 33.9749 1.02513C34.6313 1.6815 35 2.57174 35 3.5V24.5C35 25.4283 34.6313 26.3185 33.9749 26.9749C33.3185 27.6313 32.4283 28 31.5 28H3.5C2.57174 28 1.6815 27.6313 1.02513 26.9749C0.368749 26.3185 0 25.4283 0 24.5V3.5ZM6.15825 3.5L17.5 13.4242L28.8418 3.5H6.15825ZM31.5 5.82575L18.6533 17.0678C18.3341 17.3474 17.9243 17.5015 17.5 17.5015C17.0757 17.5015 16.6659 17.3474 16.3467 17.0678L3.5 5.82575V24.5H31.5V5.82575Z"
          fill="black"
        />
      </svg>
    </div>
  )
}

export default Email
