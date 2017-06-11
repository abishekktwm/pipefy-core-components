import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import Example from '../Example'

const props = {
  onClick: () => {}
}

it('maches the snapshot', () => {
  const tree = renderer.create(<Example {...props}>Facebook</Example>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('calls onClick on item click', function() {
  const onClick = jest.fn()
  const wrapper = mount(<Example {...props} onClick={onClick}> Aqui! </Example>)

  expect(onClick).not.toBeCalled()

  expect(wrapper.find('button').length).toEqual(1);
  wrapper.find('button').simulate('click')

  expect(onClick).toBeCalled()
})
