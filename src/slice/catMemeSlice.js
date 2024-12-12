
import { createSlice } from "@reduxjs/toolkit";


export const catMemeSlice = createSlice({
    name: "catMeme",
    initialState: {
        rootUrl: "https://cataas.com/cat",
        url: "https://cataas.com/cat",
        tag: [],
        text: "",
        textAddon: "/says",
        newImage: false,
        favorites: []
    },

    reducers: {
        setTag: (state, actions) => {
            state.tag.push(actions.payload);
        },
        removeTag: (state, actions) => {
            if (state.tag.includes(actions.payload)) {
                const foundIndex = state.tag.find(e => e === actions.payload);
                state.tag.splice(foundIndex, 1);
            }
        },
        setText: (state, actions) => {
            state.text = actions.payload;
        },
        setNewImage: (state, actions) => {
            state.newImage = actions.payload;
        },
        setCurrentUrl: (state, actions) => {
            state.url = actions.payload;
        },
        resetCustom: (state) => {
            state.tag = [];
            state.text = "";
        },
        addFavorite: (state, actions) => {
            if (actions.payload.length > 0 && !state.favorites.includes(actions.payload)) {
                state.favorites.push(actions.payload);
            }
        },
        removeFavorite: (state, actions) => {
            let foundIndex = 0;
            state.favorites.forEach((e, i) => {
                if (e._id === actions.payload) {
                    foundIndex = i;
                }
            });
            state.favorites.splice(foundIndex, 1);
        },
    }
})


export const { setTag, setText, setNewImage, setCurrentUrl, removeTag, resetCustom, addFavorite, removeFavorite } = catMemeSlice.actions;

export default catMemeSlice.reducer;