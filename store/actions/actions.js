import {
    GET_ARTICLES_BY_NAME,
    GET_RELEVANT,
    GET_ARTICLES,
    GET_DETAILS
} from './constants';

export const getArticles = _ => async dispatch => {
    fetch(`http://localhost:9045/api/articles`)    
    .then(articles => articles.json())
    .then(articles => dispatch({type: GET_ARTICLES, payload: articles}), 
    err => dispatch({type: GET_ARTICLES, payload: err.toString()}))
}

export const getArticlesByName = name => async dispatch => {
    fetch(`http://localhost:9045/api/articles?name=${name}`)    
    .then(articles => articles.json())
    .then(articles => dispatch({type: GET_ARTICLES_BY_NAME, payload: articles}), 
    err => dispatch({type: GET_ARTICLES_BY_NAME, payload: err.toString()}))
}
export const getRelevant = name => async dispatch => {
    fetch(`http://localhost:9045/api/relevants?name=${name}`)    
    .then(relevants => relevants.json())
    .then(relevants => dispatch({type: GET_RELEVANT, payload: relevants}), 
    err => dispatch({type: GET_RELEVANT, payload: err.toString()}))
}

export const getDetails = id => async dispatch => {
    try {
        fetch(`http://localhost:9045/api/details/${id}`)    
        .then(details => details.json())
        .then(details => dispatch({type: GET_DETAILS, payload: details}), 
        err => dispatch({type: GET_DETAILS, payload: err.toString()}))
    } catch (error) {
        console.log(error)
    }
}