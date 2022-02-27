import React, {useState} from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addData } from './contentEditSlice';
import { ContentData, IDataType } from './Content';
import ContentInput from './editors/ContentInput';

class DataTypeState{
    constructor(public selectedDataType: IDataType, public types: IDataType[]){}
}
export default function ContentDataCreator(props : any){
    let dataTypeArgs = props.dataTypes;
    let [contentData,setContentData] = useState(new ContentData());
    let [dataType,setDataTypes] = useState(new DataTypeState(dataTypeArgs[0],dataTypeArgs));
    let dispatch = useAppDispatch();
    function save(){
        dispatch(addData(contentData));
    }
    function chooseDataType(name : string){
        let type = dataType.types.find(x => x.name === name);
        setDataTypes({...dataType,selectedDataType: type ?? dataType.types[0]});
    }
    function alterValue(value: any){
        setContentData({...contentData,value: value});
    }
    function handleSave(){
        dispatch(addData({...contentData, cmsType: dataType.selectedDataType}));
        setContentData(new ContentData());
    }
    return (
        <div>
            <fieldset>
                <legend>Summary</legend>
                <label>Name</label>
                <input type="text" value={contentData.name} onChange={x => setContentData({...contentData,name: x.target.value})}/>
                <label>Description</label>
                <input type="text" value={contentData.description} onChange={x => setContentData({...contentData,description: x.target.value})}/>
            </fieldset>
            <fieldset>
                <select value={dataType.selectedDataType.name} onChange={x => chooseDataType(x.target.value)}>
                    {dataType.types.map(x  => <option value={x.name} key={x.name}>{x.name}</option>)}
                </select>
                <ContentInput value={contentData.value} dataType={dataType.selectedDataType.name} onChange={alterValue}/>
            </fieldset>
            <button onClick={x => handleSave()}>Add</button>
        </div>
    )
}