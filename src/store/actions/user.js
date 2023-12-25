import types from '../types'

/** Unified control and processing of all modes
 * @param {*}
 */
export const actionNoticeHandle = (info) => {
    return (dispatch) => {
        dispatch({ type: types.user_handle, info: info });
    };
};
