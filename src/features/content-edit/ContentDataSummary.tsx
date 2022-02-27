import React from 'react';
import { IContentData } from './Content';

export default function ContentDataSummary(props : any){
    const items = props.content as IContentData[];
    return (
        <ul>
            {
                items.map((x, index) => {
                    return ( <li key={index}>
                        <div>
                            <label>Name : {x.name}</label>
                            <label>Description: {x.description}</label>
                            <label>Type: {x.cmsType.name}</label>
                        
                        </div>
                    </li>)
                })  
            }
        </ul>
    )
}