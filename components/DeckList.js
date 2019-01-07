import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { receiveDecks } from '../actions'

class DeckList extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(receiveDecks())
  }

  render() {
    const { decks } = this.props
    return (
      <View>
        <Text>Decks</Text>
        {decks && Object.keys(decks).map(key => (
          <View key={key}>
            <Text>{decks[key].name}</Text>
            <Text>{Object.keys(decks[key].cards).length}</Text>
          </View>
        ))}
      </View>
    )
  }
}

const mapStateToProps = ({ decks }) => ({ decks })

export default connect(mapStateToProps)(DeckList)
