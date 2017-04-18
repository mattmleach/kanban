import React from 'react';
import Note from './Note';
import Editable from './Editable';

export default ({
    notes,
    onNoteClick=() => {},
    onEdit=() => {},
    onDelete=() =>{}}) => (

    <ul className="notes">
        {notes.map((note) => 
            <li key={note.id}>
                <Note className="note" onClick={onNoteClick.bind(null, note.id)}>
                    <Editable
                        editing={note.editing}
                        value={note.task}
                        onEdit={onEdit.bind(null, note.id)} />
                    <button className="delete" onClick={onDelete.bind(null, note.id)}>x</button>
                </Note>
            </li>
        )}
    </ul>

)