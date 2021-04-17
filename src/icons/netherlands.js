import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path fill="#f0f0f0" d="M0 85.337h512v341.326H0z" />
      <path fill="#a2001d" d="M0 85.337h512v113.775H0z" />
      <path fill="#0052b4" d="M0 312.888h512v113.775H0z" />
    </svg>
  )
}

export default SvgComponent