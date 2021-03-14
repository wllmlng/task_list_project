import React, {useState, useEffect} from 'react';
import { updateList, fetchList } from '../../actions/list_actions';
import { useSelector, useDispatch } from 'react-redux';


const ListEdit = ({listId, setEditSec, setForceUpdate}) => {

    const [editInput, setEditInput] = useState('');
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.entities.currentUser);

    useEffect(() => {
        dispatch(fetchList(currentUser.id));
    },[])

    //update list
    const submitUpdateList = () => {

        let newUpdate = {
            list: editInput
        };
        if(editInput === ""){
            alert('Please provide a title');
        }else{
            dispatch(updateList(listId, newUpdate)).then((res) => {
                setForceUpdate(true);
            });
        }
    }

    return(
        <div>
            <div className='listIndvTitle'>
                <input type='text' value={editInput} onChange={e => setEditInput(e.target.value)} />
            </div>
            <div>
                <input type='submit' value='Save' className='listDeleteBtn' onClick={() => submitUpdateList()} />
                <input type='submit' value='Cancel' className='listEditBtn' onClick={()=>setEditSec('')} />
            </div>
        </div>
    )
}

export default ListEdit;