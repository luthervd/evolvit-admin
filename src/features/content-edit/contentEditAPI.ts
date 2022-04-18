import { endPoints } from '../../config/endpoints';
import { IContent } from './ContentModel';

export async function saveContent(content: IContent){
    let url = endPoints.root + "/content";
    let response = await fetch(url,{method: "POST", body: JSON.stringify(content),  headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }})
    return await response.json();
}

export async function loadContent(id: string){
  let url = `${endPoints.root}/content/${id}`;
  let response = await fetch(url);
  return await response.json();
}

export async function updateContent(content: IContent){
  let url = endPoints.root + "/content";
  let response = await fetch(url,{method: "PUT", body: JSON.stringify(content),  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }})
  return await response.json();
}