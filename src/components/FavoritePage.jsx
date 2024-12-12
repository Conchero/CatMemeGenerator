import { useSelector } from "react-redux"
import { CatMemeImage } from "./CatMemeImage";
import { FavoriteImageThumbnail } from "./FavoriteImageThumbnail";


export function FavoritePage()
{

    const favorites = useSelector(state => state.catMeme.favorites);
    const favoriteUrl = "/favoriteDetails/";

    return <div>
            {favorites.map((el,i) => 
                <FavoriteImageThumbnail key={i} id={el._id} url={favoriteUrl + el._id}/>)}
        </div>
}