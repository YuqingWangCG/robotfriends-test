import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants'

import * as reducers from './reducers'

describe('test search robots', ()=>{
const initialState = {
    searchField: ''
}

it('return initial state', ()=>{
    expect(reducers.searchRobots(undefined, {})).toEqual(initialState)
})

it('handle change search field event', ()=>{
    expect(reducers.searchRobots(initialState, {
        type:CHANGE_SEARCH_FIELD,
        payload: 'abc'
    })).toEqual({searchField:'abc'})
})
})

describe('test request robots', ()=>{
    const initialStateRobots = {
        robots: [],
        isPending: false,
        error:''
        }

    it('return initial state', ()=>{
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    })

    it('handle REQUEST_ROBOTS_SUCCESS', ()=>{
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id:'123',
                name:'Hallo',
                email:'hallo@gmail.com'
            }]
        })).toEqual({
            robots: [{
                id:'123',
                name:'Hallo',
                email:'hallo@gmail.com'
            }],
            isPending: false,
            error:''
        })
    })

    it('handle REQUEST_ROBOTS_FAILED', ()=>{
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'error message!'
        })).toEqual({
            robots: [],
            isPending: false,
            error:'error message!'
        })
    })

    it('handle REQUEST_ROBOTS_PENDING', ()=>{
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true,
            error:''
        })
    })

})