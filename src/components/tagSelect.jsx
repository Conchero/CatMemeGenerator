import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { setTag } from "../slice/catMemeSlice";
import { Tag } from "./Tag";

export function TagSelector() {

    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([]);
    const dispatch = useDispatch();
    const tagList = useSelector(state => state.catMeme.tag)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://cataas.com/api/tags");
                setData(response.data);
            }
            catch (err) {
                console.log(err)
                setLoading(false);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);


    
    const AddTag = (e) => {
        if (!tagList.includes(e.target.value))
        {
            dispatch(setTag(e.target.value));
        }
    }
        
    return(
        <>
         <select onChange={e => AddTag(e)}>
        {data.map((el,i) => {
            if (el != "")
            return <option key={i} value={el}>{el}</option>})}
        </select>
        <ul>
        {tagList.map((el, i) => {
            return <li key={i}><Tag name={el}/></li>})}
        </ul>
        </>
    )

}