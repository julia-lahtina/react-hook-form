import { CheckboxProps, CheckboxZod } from "@/components/checkbox"
import { Control, FieldValues, useController, UseControllerProps } from "react-hook-form"

type Props<T extends FieldValues> = Omit<UseControllerProps<T>, 'control'> & Omit<CheckboxProps, 'checked' | 'onCheckedChange'> & {control: Control<T>} // теперь поле control обязательное

export const FormCheckbox =<T extends FieldValues> ({control, name, disabled, ...rest}: Props<T>) => {

    const {field: {onChange, value, ...rememberMeField}} = useController({
        control,
        name,
        disabled
    })

    return (
        <CheckboxZod {...rest} {...rememberMeField} checked={value} onCheckedChange={onChange} />
    )
}