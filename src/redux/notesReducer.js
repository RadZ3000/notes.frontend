const initialState = {
    notes: [],
}

export const ActionTypes = {
    SET_NOTES: 'SET_NOTES',
    DELETE_NOTE: 'DELETE_NOTE',
    ADD_NOTE: 'ADD_NOTE',
    EDIT_NOTE: 'EDIT_NOTE',
}

export const ActionCreators = {
    setNotes: payload => ({ type: ActionTypes.SET_NOTES, payload }),
    deleteNote: payload => ({ type: ActionTypes.DELETE_NOTE, payload }),
    addNote: payload => ({ type: ActionTypes.ADD_NOTE, payload }),
    editNote: payload => ({ type: ActionTypes.EDIT_NOTE, payload }),
}

export default function NotesReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_NOTES:
            return { ...state, notes: [...action.payload] };
        case ActionTypes.DELETE_NOTE:
            for (let i = 0; i < state.notes.length; i++) {
                if (state.notes[i].id === action.payload.id) {
                    state.notes.splice(i, 1);
                    break;
                }
                return { ...state, notes: [...state.notes] };
            }
        case ActionCreators.ADD_NOTE:
            return { ...state, notes: [...state.notes, action.payload] };
        case ActionCreators.EDIT_NOTE:
            for (let i = 0; i < state.notes.length; i++) {
                if (state.notes[i].id === action.payload.id) {
                    state.notes[i].value = action.payload.value;
                }
            }
            return { ...state, notes: [...state.notes] };
        default:
            return state;
    }
}