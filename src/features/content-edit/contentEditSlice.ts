import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { IContent, ContentData, IDataType } from './ContentModel';
import { saveContent, loadContent, updateContent } from './contentEditAPI';

export const saveContentAsync = createAsyncThunk('contentedit/save',async (content: IContent) => {
    let result = await saveContent(content);
    return result;
});

export const loadContentAsync = createAsyncThunk('contentedit/load',async (id: string) => {
    let result  = await loadContent(id);
    return result;
});

export const updateContentAsync = createAsyncThunk('content/update',async (content: IContent) =>{
    let result = await updateContent(content);
    return result;
});

interface State {
    content: IContent,
    dataTypes: IDataType[],
    loading: boolean
}

const initialState : State = {
    content:  {  name: "",
                description: "",
                tags: [],
                data: []
             },
    dataTypes: [
        {name:"Text",description:"Free text"},
        {name:"String",description:"Short String"},
        {name:"Image",description:"A link to a saved image"},
        {name:"Switch",description:"A true false switch"},
        {name:"Number",description:"A positive or negative number"},
        {name:"Float",description:"A floating precision number"},
        {name:"Currency",description:"A currency amount"}
    ],
    loading: false
}

export const contentEditSlice = createSlice({
    name: "contentedit",
    initialState,
    reducers:{
        setContent: (state, action: PayloadAction<IContent>) => {
            state.content = {...action.payload};
        },
        addData: (state, action: PayloadAction<ContentData>) =>{
            let data = state.content.data;
            data.push(action.payload);
            state.content.data = [...data];
        },
        addTag: (state, action: PayloadAction<string>) => {
            state.content.tags = [...state.content.tags,action.payload];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(saveContentAsync.pending,(state) => {
            state.loading = true;
        })
        .addCase(saveContentAsync.fulfilled,(state,action) => {
            state.loading = false;
            state.content = action.payload;
        })
        .addCase(loadContentAsync.fulfilled,(state, action) => {
           state.content =  action.payload;
        });
    }
})
export const { setContent, addData } = contentEditSlice.actions;

export const selectContent = (state: RootState) => state.contentedit.content;

export const selectDataTypes = (state: RootState) => state.contentedit.dataTypes;

export default contentEditSlice.reducer;

