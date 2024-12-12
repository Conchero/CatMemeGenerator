import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUrl } from '../slice/catMemeSlice';
import { useEffect } from 'react';
import { createElement } from 'react';
import { useState } from 'react';
import { setNewImage } from '../slice/catMemeSlice';
import { FavoriteButton } from './FavoriteButton';

export function CatMemeImage(props){
    const rootUrl = useSelector((state) =>state.catMeme.rootUrl)
    const tagList = useSelector((state) =>state.catMeme.tag)
    const text = useSelector((state) =>state.catMeme.text)
    const textAddon = useSelector((state) =>state.catMeme.textAddon)
    const [src,setSrc] = useState("");
    const newImage = useSelector((state) =>state.catMeme.newImage)
    const dispatch = useDispatch();




    useEffect(() => {
        console.log("entered use effect Cat meme image");
        if (newImage)
        {
            if(tagList.length === 0 && text === "")
            {
                dispatch(setCurrentUrl(rootUrl));
                setSrc( rootUrl + "?x=" + Math.floor(Math.random()*1000));
            }
            else if (tagList.length > 0)
            {
                dispatch(setCurrentUrl(rootUrl + "/" + tagList.join(",")));
                CheckImageUrl(setCurrentUrl(rootUrl + "/" + tagList.join(",")));
                setSrc( rootUrl + "/" + tagList.join(",")  + "?x=" + Math.floor(Math.random()*1000));
            }

            if (tagList.length === 0 && text !== "")
            {
                dispatch(setCurrentUrl(rootUrl + textAddon + "/" + text));
                setSrc(rootUrl + textAddon + "/" + text  + "?x=" + Math.floor(Math.random()*1000))
            }
            else if (tagList.length > 0 && text !== "")
            {
                dispatch(setCurrentUrl(rootUrl + "/" + tagList.join(",")  + textAddon + "/" + text));
                setSrc(rootUrl + "/" + tagList.join(",")  + textAddon + "/" + text  + "?x=" + Math.floor(Math.random()*1000))
            }

            dispatch(setNewImage(false));
        }
       
    },[newImage])
    
    
    if (props.id != null)
    {
        console.log(rootUrl + "/" + props.id);
        setSrc(rootUrl + "/" + props.id);
    }

    return(<div>
        <img  src={src} />
        </div>);
}


function CheckImageUrl(url)
{
    fetch(url).then(response => {
        console.log("check response " + response.status);
    });
}