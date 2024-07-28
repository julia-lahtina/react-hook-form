import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"

type InputProps = ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<ElementRef<'input'>, InputProps>(({className, ...props}, ref) => {
    return (
        <input style={{borderRadius: '5px'}} {...props} ref={ref}/>
    )
})

Input.displayName = 'Input'