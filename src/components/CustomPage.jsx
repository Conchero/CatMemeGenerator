import { useDispatch } from "react-redux";
import { GenerateButton } from "./GenerateButton"
import { TagSelector } from "./tagSelect";
import { setText } from "../slice/catMemeSlice";
import { CatMemeImage } from "./CatMemeImage";
import { FavoriteButton } from "./FavoriteButton";
export function CustomPage()
{
    const dispatch = useDispatch();

    return (
        <>
    <h2>Generate a custom cat meme</h2>
    <TagSelector />
    <input type="text" placeholder="enter your custom text here" onChange={e => dispatch(setText(e.target.value))}></input>
    <GenerateButton />
    <CatMemeImage />
    <FavoriteButton />
    <></>
    </>
);
}