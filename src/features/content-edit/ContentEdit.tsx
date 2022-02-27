import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectContent,selectDataTypes, setContent, saveContentAsync } from './contentEditSlice'; 
import ContentDataSummary from './ContentDataSummary';
import TagGroup from './TagGroup';
import ContentDataCreator from './ContentDataCreator';

export default function ContentEdit(props: any){
    let content = useAppSelector(selectContent);
    let dataTypes = useAppSelector(selectDataTypes);
    let dispatch = useAppDispatch();

    return (
        <div>
            <form onSubmit={x => x.preventDefault()}>
                <fieldset>
                    <legend>Content Details</legend>
                    <label>Name:</label>
                    <input type='text' value={content.name} onChange={x => dispatch(setContent({...content,name: x.target.value}))}/>
                    <label>Description</label>
                    <input type='text' value={content.description} onChange={x => dispatch(setContent({...content,description: x.target.value}))}/>
                </fieldset>
                <fieldset>
                    <legend>
                       Content
                    </legend>
                    <ContentDataSummary content={content.data} />
                </fieldset>
                <fieldset>
                    <legend>
                        Add a value
                    </legend>
                    <ContentDataCreator dataTypes={dataTypes}/>
                </fieldset>
                <fieldset>
                    <button onClick={x => dispatch(saveContentAsync(content))}>Save</button>
                </fieldset>
            </form>
        </div>
    )
}