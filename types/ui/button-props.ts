import { type VariantProps } from "class-variance-authority"
import { type ButtonHTMLAttributes } from "react"
import { type buttonVariants } from "@/components/ui/button"

/**
 * Props for the Button component
 */
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    /** Whether to render the button as a child component */
    asChild?: boolean
  } 