import { useDispatch } from "react-redux"
import { removeTag } from "../slice/catMemeSlice"

export function Tag(props)
{

    const dispatch = useDispatch();

    return <div id={props.id + props.name}>
            <p>{props.name}</p>
            <button onClick={() => dispatch(removeTag(props.name))}>X</button>
            </div>

}