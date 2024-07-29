import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from "react"

type InputProps = ComponentPropsWithoutRef<'input'> & {
    errorMessage?: string
    label?: string
}

export const Input = forwardRef<ElementRef<'input'>, InputProps>(({className, label, errorMessage, id, ...props}, ref) => {

    const generatedId = useId()
    const finalId = id ?? generatedId

    return (
        <div>
            {!!label && <label htmlFor={finalId}>{label}</label>}
            <input style={{borderRadius: '5px'}} {...props} id={finalId} ref={ref}/>
            {!!errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        </div>
    )
})

Input.displayName = 'Input'