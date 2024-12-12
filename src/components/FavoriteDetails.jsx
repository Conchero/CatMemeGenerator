import { useParams } from "react-router-dom"
import { FavoriteImageThumbnail } from "./FavoriteImageThumbnail";
import { useSelector } from "react-redux";
import { CatMemeImage } from "./CatMemeImage";


export function FavoriteDetails()
{
    const {id} = useParams();
    const favorites = useSelector(state => state.catMeme.favorites)    
    const catMemeJson = favorites.filter(e => e._id ===id);


    return (
            <>
            <h2>Favorite Details</h2>
            {console.log("in favortite details")}
            <CatMemeImage id={id} />
            </>
    )
}