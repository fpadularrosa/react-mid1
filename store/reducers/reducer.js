import {
    GET_ARTICLES_BY_NAME,
    GET_RELEVANT,
    GET_ARTICLES,
    GET_DETAILS
} from '../actions/constants';

const initialState = {
    articles: [],
    detail: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTICLES_BY_NAME:
            return {
                ...state,
                articles: action.payload
            }
        case GET_ARTICLES:
            return {
                ...state,
                articles: action.payload
            }
        case GET_RELEVANT:
            return {
                ...state,
                articles: action.payload
            }
        case GET_DETAILS:
            return {
                ...state,
                detail: action.payload
            }
        default: return state
    }
}
export default reducer;