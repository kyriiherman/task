import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';

interface CInputProps {
    value: string;
    onChange?: (value: string) => void;
    defaultValue?: string;
}

export const CInput = ({ value: extValue, onChange, defaultValue }: CInputProps) => {
    const [stateValue, setValue] = useState('');
    useEffect(() => {
        setValue(extValue);
    }, [extValue]);

    const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if(onChange) {
            onChange(stateValue);
        }
    }, [onChange, setValue]);

    return (
        <input value={stateValue} defaultValue={defaultValue} onChange={onInputChange}/>
    )
}
