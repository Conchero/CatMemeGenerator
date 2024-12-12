import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter, Link, Route } from "react-router-dom";
import { removeFavorite } from "../slice/catMemeSlice";

export function FavoriteImageThumbnail(props){

    const rootUrl = useSelector(state => state.catMeme.rootUrl);
    const dispatch = useDispatch();

    return (<>
                <img src={rootUrl + "/" + props.id + "?type=xsmall"} />
                <button><Link to ={props.url}>See Details</Link></button>
                <button onClick={() => dispatch(removeFavorite(props.id))}>X</button>
            </>)
}