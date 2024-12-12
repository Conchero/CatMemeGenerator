
import { createSlice } from "@reduxjs/toolkit";


export const catMemeSlice = createSlice({
    name:"catMeme",
    initialState:{
        rootUrl:"https://cataas.com/cat",
        url:"https://cataas.com/cat",
        tag:[],
        text:"",
        textAddon:"/says",
        newImage: false
    },

    reducers:{
        setTag: (state,actions) => {
            state.tag.push(actions.payload);
        },
        removeTag:(state,actions) => {
            if (state.tag.includes(actions.payload))
            {  
                const foundIndex = state.tag.find(e => e === actions.payload);
                state.tag.splice(foundIndex,1);
            }
        },
        setText: (state,actions) =>{
            state.text = actions.payload;
        },
        setNewImage: (state, actions) => {
            state.newImage =actions.payload;
        },
        setCurrentUrl: (state,actions) => {
            state.url = actions.payload;
        },
    }
})


export const {setTag,setText,setNewImage, setCurrentUrl,removeTag} = catMemeSlice.actions;

export default catMemeSlice.reducer;