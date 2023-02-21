import React from 'react';
import {shallow} from 'enzyme'
// import {render} from '@testing-library/react'
import Card from './Card'

test('expect to render Card component', ()=>{
    // expect(render(<Card/>)).toMatchSnapshot();
    const mockId=1;
    const mockName = 'Jane'
    const mockEmail='Jane@gmail.com'
    
    expect(shallow(<Card id={mockId} name={mockName} email={mockEmail}/>)).toMatchSnapshot();
})