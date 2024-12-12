import { useDispatch } from 'react-redux';
import { setNewImage } from '../slice/catMemeSlice';

export function GenerateButton(){
    const dispatch = useDispatch();
   return <button onClick={() => dispatch(setNewImage(true))}>Generate Your Meme</button>
}