import React from 'react';
import {shallow} from 'enzyme'
// import {render} from '@testing-library/react'
import CardList from './CardList'

test('expect to render CardList component', ()=>{
    // expect(render(<CardList/>)).toMatchSnapshot();
    const mockRobots=[
    {   id:1,
        name:'John Snow',
        email: 'john@gmail.com'
    }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})