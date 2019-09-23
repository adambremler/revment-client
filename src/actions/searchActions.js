import axios from '../helpers/revmentAxiosInstance';
import {
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from '../constants/actionTypes';

export const search = query => async (dispatch, getState) => {
    dispatch(searchRequest());

    try {
        const { data } = await axios.get('/urls/search', {
            params: { q: query },
            headers: {
                Authorization: `Bearer ${getState().user.token}`
            }
        });

        dispatch(searchSuccess(data));
    } catch (e) {
        dispatch(
            searchFailure(
                e.response
                    ? e.response.data.error
                    : 'Could not get search results'
            )
        );
    }
};

const searchRequest = () => ({
    type: SEARCH_REQUEST
});

const searchSuccess = data => ({
    type: SEARCH_SUCCESS,
    payload: {
        results: data.results,
        isQueryReachable: data.isQueryReachable
    }
});

const searchFailure = error => ({
    type: SEARCH_FAILURE,
    payload: { error }
});
