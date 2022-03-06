import React, {Dispatch, SetStateAction} from "react";
import styled from "styled-components";

export type Primitive = string | number | boolean | undefined;

export interface RadioGroupOption<T extends Primitive>{
    label: string;
    optionId?: string;
    value: T;
}

export interface RadioGroupProps<T extends Primitive> {
    options: RadioGroupOption<T>[],
    name: string,
    description?: string,
    currentValue: T,
    setValue: Dispatch<SetStateAction<T>>,
}
const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    flex-flow: column;
    align-items: flex-start;
`
const FlexItem = styled.div`
    display: flex;
    width: 100%;
`

// @ts-ignore
const RadioGroup = <T, > ({options, name, currentValue, setValue, description}: RadioGroupProps<T>): JSX.Element => {
    return (
        <form>
            { description ? <p>{description}</p> : null }
            <FlexContainer>
            {
                // @ts-ignore
                options.map(({label, optionId, value}: RadioGroupOption<T>, index: number) => (
                    <FlexItem key={label + index}>
                        <input type="radio" name={name} value={value as any} checked={currentValue === value}
                               id={optionId ?? `${name}-${index}`} onClick={() => setValue(value)}/>
                        <label htmlFor={optionId ?? `${name}-${index}`}>{label}</label>
                    </FlexItem>
                ))
            }
            </FlexContainer>
        </form>
    )
}
export default RadioGroup