import React from 'react';
import { IContentData } from './Content';

export default function ContentDataSummary(props : any){
    const items = props.content as IContentData[];
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Descritpiton
                    </th>
                    <th>
                        Value
                    </th>
                </tr>
            </thead>
            {
                items.map((x, index) => {
                    return ( <tr key={index}>
                                <td>{x.name}</td>
                                <td>{x.description}</td>
                                <td>{x.cmsType.name}</td>
                            </tr>)
                })  
            }
        </table>
    )
}