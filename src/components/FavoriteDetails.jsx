import { useParams } from "react-router-dom"
import { FavoriteImageThumbnail } from "./FavoriteImageThumbnail";
import { useSelector } from "react-redux";
import { CatMemeImage } from "./CatMemeImage";
import { FavoriteImageDetails } from "./FavoriteImageDetails";


export function FavoriteDetails()
{
    const {id} = useParams();
    const favorites = useSelector(state => state.catMeme.favorites)    
    const catMemeJson = favorites.filter(e => e._id ===id)[0];


    return (
            <>
            <h2>Favorite Details</h2>
       
            <FavoriteImageDetails id={id} />
            <ul>
            {catMemeJson.tags.map((e,i) =>{
                return <li key={i}>{e}</li>
              })}
            </ul>
            <p>Picture added to the date: {catMemeJson.createdAt}</p>
            </>
    )
}