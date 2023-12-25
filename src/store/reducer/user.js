import types from "../types";
const defaultValue = {
    name: JSON.parse(localStorage.getItem('user')).name || 'admin',
    role: JSON.parse(localStorage.getItem('user')).role || 'student'
}
const user = (state=defaultValue, action) => {
    switch (action.type) {
        case types.user_handle:
            return { ...state, ...action.info };
        default:
            return state;
    }
}
export default user;