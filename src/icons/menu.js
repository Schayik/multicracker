import React from "react"

function SvgComponent(props) {
  return (
    <svg
      aria-label="Menu"
      viewBox="0 0 16 16"
      fill="none"
      stroke="#fff"
      strokeWidth={2}
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M0 2h16M0 8h16M0 14h16" />
    </svg>
  )
}

export default SvgComponent