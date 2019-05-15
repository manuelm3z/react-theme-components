import expect from 'expect'
import React from 'react'
import {
  render,
  unmountComponentAtNode
} from 'react-dom'

import {
  Button,
  InputText,
  Title
} from 'src/'

describe('Button', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays text', () => {
    render(<Button>This is a button</Button>, node, () => {
      expect(node.innerHTML).toContain('This is a button')
    })
  })
})

describe('Title', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays text', () => {
    render(<Title>This is a title</Title>, node, () => {
      expect(node.innerHTML).toContain('This is a title')
    })
  })
})

describe('InputText', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays text', () => {
    render(<InputText placeholder="This is a input type text" />, node, () => {
      expect(node.innerHTML).toContain('This is a input type text')
    })
  })
})
