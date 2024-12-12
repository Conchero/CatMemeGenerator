import { GenerateButton } from "./GenerateButton"
import { CatMemeImage } from './CatMemeImage.jsx';
import { FavoriteButton } from "./FavoriteButton.jsx";

export function Homepage()
{
    return (
    <>
    <h1>Generate a crazy cat meme !!!</h1>
    <GenerateButton />
    <CatMemeImage />
    <FavoriteButton />
    </>)
}