import { useSelector, useDispatch } from 'react-redux';
import { setNewImage } from '../slice/catMemeSlice';
import { useState, useEffect } from "react";
import axios from "axios";

export function GenerateButton(props){


    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const url = useSelector((state) =>state.catMeme.url)
    const dispatch = useDispatch();

    // const fetchData = async () => {
    //     dispatch(generateFullUrl());
    //     const response = axios.get(url);
    //     console.log(response);
    // };



   return <button onClick={() => dispatch(setNewImage(true))}>Generate Your Meme</button>

}