import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

export type CheckboxProps = ComponentPropsWithoutRef<typeof Checkbox.Root>

export const CheckboxZod = forwardRef<ElementRef<typeof Checkbox.Root>, CheckboxProps>(({className, ...props}, ref) => {
    return (
            <Checkbox.Root className="CheckboxRoot" {...props} ref={ref}>
                <Checkbox.Indicator className="CheckboxIndicator">
                    <CheckIcon />
                </Checkbox.Indicator>
            </Checkbox.Root>
    )
})

CheckboxZod.displayName = 'Checkbox'