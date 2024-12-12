
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { resetCustom } from '../slice/catMemeSlice';


export function PageTracker()
{
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetCustom());
     },[location]);
}