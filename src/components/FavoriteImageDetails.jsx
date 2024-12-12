import { useSelector } from "react-redux"


export function FavoriteImageDetails(props)
{
    const rootUrl = useSelector(state => state.catMeme.rootUrl);
    return <img src={rootUrl + "/" + props.id + "?type=medium"} />
}