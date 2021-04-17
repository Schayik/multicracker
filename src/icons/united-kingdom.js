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
      <path fill="#f0f0f0" d="M0 85.333h512V426.67H0z" />
      <path
        fill="#d80027"
        d="M288 85.33h-64v138.666H0v64h224v138.666h64V287.996h224v-64H288z"
      />
      <g fill="#0052b4">
        <path d="M393.785 315.358L512 381.034v-65.676zM311.652 315.358L512 426.662v-31.474l-143.693-79.83zM458.634 426.662l-146.982-81.664v81.664z" />
      </g>
      <path
        fill="#f0f0f0"
        d="M311.652 315.358L512 426.662v-31.474l-143.693-79.83z"
      />
      <path
        fill="#d80027"
        d="M311.652 315.358L512 426.662v-31.474l-143.693-79.83z"
      />
      <g fill="#0052b4">
        <path d="M90.341 315.356L0 365.546v-50.19zM200.348 329.51v97.151H25.491z" />
      </g>
      <path
        fill="#d80027"
        d="M143.693 315.358L0 395.188v31.474l200.348-111.304z"
      />
      <g fill="#0052b4">
        <path d="M118.215 196.634L0 130.958v65.676zM200.348 196.634L0 85.33v31.474l143.693 79.83zM53.366 85.33l146.982 81.664V85.33z" />
      </g>
      <path fill="#f0f0f0" d="M200.348 196.634L0 85.33v31.474l143.693 79.83z" />
      <path fill="#d80027" d="M200.348 196.634L0 85.33v31.474l143.693 79.83z" />
      <g fill="#0052b4">
        <path d="M421.659 196.636L512 146.446v50.19zM311.652 182.482V85.331h174.857z" />
      </g>
      <path
        fill="#d80027"
        d="M368.307 196.634L512 116.804V85.33L311.652 196.634z"
      />
    </svg>
  )
}

export default SvgComponent