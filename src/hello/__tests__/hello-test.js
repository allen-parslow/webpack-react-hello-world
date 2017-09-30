import Hello from'../hello';

jest.unmock('../hello');

import React from "react";
import { shallow } from 'enzyme';

describe('Hello Component', () => {  

  it('Should display hello world', () => {
    const wrapper = shallow(<Hello />);
    expect(wrapper.text()).toBe("Hello world!");
  });  
});