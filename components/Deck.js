import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component {

  render() {
    const { deck } = this.props

    console.log(deck)

    if (!deck) {
      return null
    }

    return (
      <View>
        <Text>{deck.name}</Text>
        <Text>{Object.keys(deck.cards).length}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state, { name }) => {
  console.log(name)
  console.log(state)
  console.log(state[name])
  return ({
    deck: state[name]
  })
}

export default connect(mapStateToProps)(Deck)
