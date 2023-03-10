import React from 'react';
import MainPage from './MainPage';
import {shallow} from 'enzyme';

let wrapper;
beforeEach(()=>{
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots : [],
        searchField:'',
        isPending: false
    }

    wrapper = shallow(<MainPage {...mockProps}/>)
})


it('test MainPage.js', ()=>{
    expect(wrapper).toMatchSnapshot
})

it('test filter robots works', ()=>{
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots : [{
            id:3,
            name:'Jane',
            email: 'Jane@gmail.com'
        }],
        searchField:'a',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2}/>)
    expect(wrapper2.instance().filterRobots()).toEqual([{id:3, name:'Jane', email: 'Jane@gmail.com'}])
})

it('test filter robots works 2', ()=>{
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots : [{
            id:3,
            name:'Jane',
            email: 'Jane@gmail.com'
        }],
        searchField:'o',
        isPending: false
    }
    
    const wrapper3 = shallow(<MainPage {...mockProps3}/>)
    expect(wrapper3.instance().filterRobots()).toEqual([])
})