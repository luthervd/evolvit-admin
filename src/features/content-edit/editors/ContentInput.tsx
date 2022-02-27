import React from 'react';
import TextEditor from './TextEditor';

export default function ContentInput(props : any){
    let handleChange = props.onChange;
    let dataType = props.dataType as string;
    let value = props.value;
    let child;
    switch(dataType){
        case 'Text':
        default:
        child = (<TextEditor value={value} onChange={handleChange}/>)
    }
    return(
        <div>
            {child}
        </div>
    )
}