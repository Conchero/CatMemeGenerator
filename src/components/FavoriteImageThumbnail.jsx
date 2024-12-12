import { useSelector } from "react-redux"

export function FavoriteImageThumbnail(props){

    const rootUrl = useSelector(state => state.catMeme.rootUrl);


    return <img src={rootUrl + "/" + props.id + "?type=xsmall"} />
}