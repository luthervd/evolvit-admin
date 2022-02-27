import { endPoints } from '../../config/endpoints';
import { IContent } from './Content';

export async function saveContent(content: IContent){
    let url = endPoints.root + "/content";
    let verb = content.id 
    let response = await fetch(url,{method: "POST", body: JSON.stringify(content),  headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }})
    return await response.json();
}