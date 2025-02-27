import React from "react"

const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 17V13.8125L13.375 3.4375C13.5278 3.28472 13.6944 3.17361 13.875 3.10417C14.0556 3.03472 14.2431 3 14.4375 3C14.6319 3 14.8194 3.03472 15 3.10417C15.1806 3.17361 15.3472 3.28472 15.5 3.4375L16.5625 4.5C16.7153 4.65278 16.8264 4.81944 16.8958 5C16.9653 5.18056 17 5.36806 17 5.5625C17 5.75694 16.9653 5.94444 16.8958 6.125C16.8264 6.30556 16.7153 6.47222 16.5625 6.625L6.1875 17H3ZM14.4375 6.625L15.5 5.5625L14.4375 4.5L13.375 5.5625L14.4375 6.625Z"
      fill="currentColor"
    />
  </svg>
)

export default EditIcon
