import React from 'react';


export default function TextEditor(props: any){
    return(
        <div>
            <input className="input" type='text' value={props.value} onChange={x => props.onChange(x.target.value)}/>
        </div>
    )
}