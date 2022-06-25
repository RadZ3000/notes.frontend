import { ActionCreators } from '../redux/notesReducer';

export const GetNotes = async (dispatch) => {
    try {
        // api call
        const response = [
            { value: 'Study for exam in 3 weeks', id: 1 },
            { value: 'Build more full-stack applications', id: 2 },
            { value: 'Write notes, comment, program in general', id: 3 },
            { value: 'At this rate, I will be a master in no time', id: 4 },
        ];

        dispatch(ActionCreators.setNotes(response));
    } catch {
        console.log('Error!');
    }
}