import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteNotes, GetNotes } from '../services/notes';
import { Button } from 'react-bootstrap';

export const NotesTable = () => {
    const notes = useSelector(state => state.notesReducer.notes);
    const dispatch = useDispatch();

    useEffect(() => {
        GetNotes(dispatch);
        // eslint-disable-next-line
    }, []);

    return <table className='table table-dark'>
        <tbody>
            {
                notes.map(n =>
                    <tr>
                        <td style={{ width: '3rem' }}>
                            <Button className='btn btn-danger' onClick={() => DeleteNotes(dispatch, n)}>Delete</Button>
                        </td>
                        <td style={{ textAlign: 'left' }}>{n.value}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
}