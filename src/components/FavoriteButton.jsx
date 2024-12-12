import { useDispatch, useSelector } from "react-redux"
import { addFavorite } from "../slice/catMemeSlice";
import { useEffect, useState } from "react";
import axios from "axios";


export function FavoriteButton() {
    const url = useSelector(state => state.catMeme.url);
    const dispatch = useDispatch();
    const newImage = useSelector(state => state.catMeme.newImage);
    const [pictureData, setPictureData] = useState([]);

    useEffect(() => {
        if (newImage) {
            const fetchPictureData = async () => {
                try {
                    const response = await axios.get(url + "?json=true");
                    setPictureData(response.data);
                } catch (error) {
                    
                }
               
            };
            fetchPictureData();
        }
    }, [newImage]);



    return <button onClick={() => dispatch(addFavorite(pictureData))}>Add To Favorite</button>

}