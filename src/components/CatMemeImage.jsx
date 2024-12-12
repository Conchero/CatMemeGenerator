import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUrl } from '../slice/catMemeSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import { setNewImage } from '../slice/catMemeSlice';
import axios from 'axios';

export function CatMemeImage() {
    const rootUrl = useSelector((state) => state.catMeme.rootUrl)
    const tagList = useSelector((state) => state.catMeme.tag)
    const text = useSelector((state) => state.catMeme.text)
    const textAddon = useSelector((state) => state.catMeme.textAddon)
    const [src, setSrc] = useState("");
    const newImage = useSelector((state) => state.catMeme.newImage)
    const dispatch = useDispatch();

    
    useEffect(() => {
        if (newImage) {
            let url = "";

            if (tagList.length === 0 && text === "") {
                url = rootUrl;
            }
            else if (tagList.length > 0) {
                url = rootUrl + "/" + tagList.join(",");
            }

            if (tagList.length === 0 && text !== "") {
                url = rootUrl + textAddon + "/" + text;
            }
            else if (tagList.length > 0 && text !== "") {
                url = rootUrl + "/" + tagList.join(",") + textAddon + "/" + text;
            }
            if (CheckImageUrl(url) !== 404)
            {
                dispatch(setCurrentUrl(url));
                setSrc(url + "?x=" + Math.floor(Math.random() * 1000) + "?type=medium" )
                dispatch(setNewImage(false));
            }
        }

    }, [newImage])

    
    return (<div>
        <img src={src} />
    </div>);
}


function CheckImageUrl(url) {
    axios.get(url).catch(function (error) {
        if (error.response) {
           return error.response.status;
        }
    });
}