import React from 'react'
import { mount } from 'enzyme'
import Static from '../Static'

describe('ClassName', () => {
  test('Has the correct CSS class', () => {
    const wrapper = mount(<Static />)

    expect(wrapper.hasClass('c-InputStatic')).toBeTruthy()
  })

  test('Accepts additional classNames', () => {
    const wrapper = mount(<Static className="mugatu" />)

    expect(wrapper.hasClass('mugatu')).toBeTruthy()
  })
})

describe('Children', () => {
  test('Can render child components', () => {
    const wrapper = mount(
      <Static>
        <div className="mugatu" />
      </Static>
    )

    const o = wrapper.find('.mugatu')

    expect(o.length).toBeTruthy()
  })
})

describe('Style', () => {
  test('Accepts style prop', () => {
    const style = { background: 'red' }
    const wrapper = mount(<Static style={style} />)

    expect(wrapper.html()).toContain('style')
    expect(wrapper.html()).toContain('background')
    expect(wrapper.html()).toContain('red')
  })
})

describe('Size', () => {
  test('Can render an additional size', () => {
    const wrapper = mount(<Static size="md" />)

    expect(wrapper.hasClass('c-InputStatic')).toBeTruthy()
    expect(wrapper.hasClass('is-md')).toBeTruthy()
  })
})

describe('Alignment', () => {
  test('Can be aligned left', () => {
    const wrapper = mount(<Static align="left" />)

    expect(wrapper.hasClass('c-InputStatic')).toBeTruthy()
    expect(wrapper.hasClass('is-block')).toBeTruthy()
    expect(wrapper.hasClass('is-left')).toBeTruthy()
  })

  test('Can be aligned center', () => {
    const wrapper = mount(<Static align="center" />)

    expect(wrapper.hasClass('c-InputStatic')).toBeTruthy()
    expect(wrapper.hasClass('is-block')).toBeTruthy()
    expect(wrapper.hasClass('is-center')).toBeTruthy()
  })

  test('Can be aligned right', () => {
    const wrapper = mount(<Static align="right" />)

    expect(wrapper.hasClass('c-InputStatic')).toBeTruthy()
    expect(wrapper.hasClass('is-block')).toBeTruthy()
    expect(wrapper.hasClass('is-right')).toBeTruthy()
  })
})
