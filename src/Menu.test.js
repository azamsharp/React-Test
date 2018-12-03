import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'

import { Menu, MenuItem } from './Menu'

configure({ adapter: new Adapter() })

describe("<Menu/>",() => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Menu />)
  })

  it('should display two <MenuItem /> elements when not authenticated',() => {
    // actual testing logic
    expect(wrapper.find(MenuItem)).toHaveLength(2)
  })

  it('should display four <MenuItem /> elements when if authenticated',() => {
    // actual testing logic
    //wrapper = shallow(<MenuItem isAuthenticated />)
    wrapper.setProps({ isAuthenticated : true })
    expect(wrapper.find(MenuItem)).toHaveLength(4)
  })

})
