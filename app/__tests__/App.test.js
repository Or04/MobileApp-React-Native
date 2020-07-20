import React from 'react'
import renderer from 'react-test-renderer'
import ListItem from '../Components/ListItem';

describe('ListItem tests', function() {
  test('renders correctly', async () => {
    const item = {
      msg: 'testing'

    }
  
    const testRenderer = renderer.create(
      <ListItem
       msg={item.msg}

      />
    )
    expect(testRenderer.root.props).toHaveProperty('msg')

  })

  test('checks if undefiened ', async () => {
    const item = {
      msg: 'testing'
    }

    const testRenderer = renderer.create(
      <ListItem
        msg={item.msg}

      />
    )
    expect(testRenderer.root.props.item).toBeUndefined()
  })
})
