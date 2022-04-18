import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useParams } from "react-router-dom";
import { selectContent,selectDataTypes, setContent, saveContentAsync, updateContentAsync, loadContentAsync } from './contentEditSlice'; 
import ContentDataSummary from './ContentDataSummary';
import TagGroup from './TagGroup';
import ContentDataCreator from './ContentDataCreator';
import './contentEdit.css';

export default function ContentEdit(props: any){
    let params = useParams();
    let content = useAppSelector(selectContent);
    let updating = content.id;
    let dataTypes = useAppSelector(selectDataTypes);
    let dispatch = useAppDispatch();
    useEffect(() => {
        if(params.id){
            dispatch(loadContentAsync(params.id));
        }
    },[params])
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
                {updating ? <button className="button" onClick={x => dispatch(updateContentAsync(content))}>Update</button>
                : <button className="button" onClick={x => dispatch(saveContentAsync(content))}>Save</button> }
            </div>
            <div className="content-add">
                <ContentDataCreator dataTypes={dataTypes}/>
            </div>
            
        </div>
    )
}