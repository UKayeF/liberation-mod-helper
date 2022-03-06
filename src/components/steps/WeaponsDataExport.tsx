import React, {useState} from 'react';
import RadioGroup, {Primitive} from "../RadioGroup/RadioGroup";

const Variant1 = () => {
    return (
        <div>
            Variant 1 (recommended)<br/>
            <input type="file" name="upload-export" accept=".py"/>
        </div>
    )
}

const Variant2 = () => {
    return (
        <div>
            Variant2 (also okay)<br/>
            <input type="file" name="upload-export" accept=".py"/>
        </div>
    )
}

const Variant3 = () => {
    return (
        <div>
            Variant3 (only use this if you are lazy and are willing to risk using outdated data)<br/>
        </div>
    )
}

const WeaponsDataExport = () => {
    const [variant, setVariant]: [Primitive, any] = useState(1);
    return (
        <div>
            You can either import the latest weapon export from
            &nbsp;
            <a href="https://github.com/pydcs/dcs/blob/master/dcs/weapons_data.py">
                https://github.com/pydcs/dcs/blob/master/dcs/weapons_data.py
            </a>&nbsp;
            or you can create your own export with your modded aircraft installed <b>(recommended)</b>.<br/>
            If you do neither, the default will be picked and it's probably outdated.
            <br/>
            <br/>
            <RadioGroup options={[
                {label: 'Upload custom export', optionId: 'variant-1', value: 1 },
                {label: 'Upload export from pydcs repo', optionId: 'variant-2', value: 2 },
                {label: 'Use fallback export', optionId: 'variant-3', value: 3 },
            ]} name='select-variant' description='Choose a method to use the weapons data export'
                        currentValue={variant} setValue={setVariant}/>
            <br/>
            <br/>
            {variant === 1 ? <Variant1/> : null}
            {variant === 2 ? <Variant2/> : null}
            {variant === 3 ? <Variant3/> : null}
        </div>
    );
};

export default WeaponsDataExport;