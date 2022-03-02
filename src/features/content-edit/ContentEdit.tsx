import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectContent,selectDataTypes, setContent, saveContentAsync } from './contentEditSlice'; 
import ContentDataSummary from './ContentDataSummary';
import TagGroup from './TagGroup';
import ContentDataCreator from './ContentDataCreator';
import './contentEdit.css';

export default function ContentEdit(props: any){
    let content = useAppSelector(selectContent);
    let dataTypes = useAppSelector(selectDataTypes);
    let dispatch = useAppDispatch();

    return (
        <div className="content-create-container">
            <div className="content-meta">
                <div className="field">
                    <label className="label">Content Name</label>
                    <div className="control">
                        <input className="input" type='text' value={content.name} onChange={x => dispatch(setContent({...content,name: x.target.value}))}/>   
                    </div>
                </div>
                <div className="field">
                    <label className="label">Content Description</label>
                    <div className="control">
                        <textarea className="input" value={content.description} onChange={x => dispatch(setContent({...content,description: x.target.value}))}/>
                    </div>
                </div>
                <div className="content-list">
                    <ContentDataSummary content={content.data} />
                </div>
                <button className="button" onClick={x => dispatch(saveContentAsync(content))}>Save</button>
            </div>
            <div className="content-add">
                <ContentDataCreator dataTypes={dataTypes}/>
            </div>
            
        </div>
    )
}