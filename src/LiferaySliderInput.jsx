import React, { useState } from 'react';
import { Provider } from '@clayui/core';
import Slider from '@clayui/slider';
import { ClayInput } from '@clayui/form';

import '@clayui/css/lib/css/atlas.css';

function LiferaySliderInput(props) {
    const min = props.min ?? 0;
    const max = props.max ?? 100;
    const step = props.step ?? 1;

    const defaultValue = props.value ?? min;

    const [value, setValue] = useState(defaultValue);
    const [inputValue, setInputValue] = useState(String(defaultValue));

    const handleSliderChange = (val) => {
        setValue(val);
        setInputValue(String(val));
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const commitInputValue = () => {
        const parsed = parseFloat(inputValue);
        if (!isNaN(parsed) && parsed >= min && parsed <= max) {
            setValue(parsed);
        } else {
            setInputValue(String(value));
        }
    };

    return (
        <Provider spritemap={window.Liferay.Icons.spritemap}>
            <Slider
                defaultValue={defaultValue}
                id={`${props.fragmentEntryLinkNamespace}-slider-numeric-input`}
                name={props.name}
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleSliderChange}
            />
            <ClayInput.Group>
                <ClayInput.GroupItem prepend>
                    <ClayInput
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={commitInputValue}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                commitInputValue();
                            }
                        }}
                    />
                </ClayInput.GroupItem>
                <ClayInput.GroupItem shrink append>
                    <ClayInput.GroupText>{props.unit}</ClayInput.GroupText>
                </ClayInput.GroupItem>
            </ClayInput.Group>
        </Provider>
    );
}

export default LiferaySliderInput;