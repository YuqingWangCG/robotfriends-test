import * as actions from './actions'
import { apiCall } from './api'
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants'

import configureMockStore from 'redux-mock-store';
import  thunkMiddleware  from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])

// export const setSearchField = (text) => ({type:CHANGE_SEARCH_FIELD, payload: text})

// export const requestRobots = () => (dispatch) => {
//     dispatch({ type: REQUEST_ROBOTS_PENDING })
//     apiCall('https://jsonplaceholder.typicode.com/users') 
//     .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
//     .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
//     }

it ('test setSearchField', ()=>{
    const text = 'ohhhh';
    const expectedAction =  {type:CHANGE_SEARCH_FIELD, payload: text}
    expect(actions.setSearchField(text)).toEqual(expectedAction)
})

it('handle request robot api', ()=>{
    const store = mockStore();
    store.dispatch(actions.requestRobots())
    const action = store.getActions()
    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING,
    }
    expect(action[0]).toEqual(expectedAction)
})