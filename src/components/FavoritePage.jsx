import { useSelector } from "react-redux"
import { CatMemeImage } from "./CatMemeImage";
import { FavoriteImageThumbnail } from "./FavoriteImageThumbnail";
import { BrowserRouter, Link, Route } from "react-router-dom";


export function FavoritePage()
{

    const favorites = useSelector(state => state.catMeme.favorites);
    const favoriteUrl = "/favoriteDetails/";

    return <div>
            {favorites.map((el,i) => {
                return (
                <>
                <FavoriteImageThumbnail key={i} id={el._id}/>
                <Link to ={favoriteUrl+el._id}>See Details</Link>
                </>
                )
            })}
        </div>
}