import 'react-native'
import React from 'react'
import Index from '../index.ios.js'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => { // eslint-disable-line
  const tree = renderer.create( // eslint-disable-line
    <Index />
  )
})
