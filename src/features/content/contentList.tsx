import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './contentList.css';

export default function ContentList(props:any)
{
    var navigate = useNavigate();
    var initData:any[] = [];
    var [items,setItems] = useState(initData);
    var [isLoaded,setLoaded] = useState(false);

    async function load(){
        let response = await fetch("https://localhost:32001/api/Content");
        let data = await response.json();
        return data;
    }

    useEffect(() => { 
        if(!isLoaded){
            load().then(data => {
                setItems(data);
                setLoaded(true);
            });
        }
    },[isLoaded])

    function onEdit(id: string){
        navigate(`/content-edit/${id}`);
    }
    return (
       <div>
            <table id="content-table" className='table'> 
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Number of fields</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(x => <tr key={x.id}>
                                    <td>{x.name}</td>
                                    <td>{x.description}</td>
                                    <td>{x.data.length}</td>
                                    <td><button className="button" onClick={event => onEdit(x.id)}>Edit</button></td>
                                    </tr>)}
                </tbody> 
            </table>
       </div> 
    )
}