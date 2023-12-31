import { IconBaseProps } from 'react-icons'

export const Rune = (props: IconBaseProps) => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="3"
      stroke="currentColor"
      fill="none"
      {...props}
    >
      <path d="m32 10c1-1 1.7909-2 4-2 2 0 4 2 4 4s-2 4-4 4c-4 0-8-8-12-8-2 0-4 2-4 4s2 4 4 4 3-1 6-4" />
      <path d="m10 16c-1-1-2-1.7909-2-4 0-2 2-4 4-4s4 2 4 4c0 4-8 8-8 12 0 2 2 4 4 4s4-2 4-4-1-3-4-6" />
      <path d="m38 32c1 1 2 1.7909 2 4 0 2-2 4-4 4s-4-2-4-4c0-4 8-8 8-12 0-2-2-4-4-4s-4 2-4 4 1 3 4 6" />
      <path d="m16 38c-1 1-1.7909 2-4 2-2 0-4-2-4-4s2-4 4-4c4 0 8 8 12 8 2 0 4-2 4-4s-2-4-4-4-3 1-6 4" />
    </svg>
  )
}
