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
    const { state } = this.props

    return (
      <View>
        {state && Object.keys(state).map(key => (
          <View key={key}>
            <Text>{state[key].name}</Text>
            <Text>{Object.keys(state[key].cards).length}</Text>
          </View>
        ))}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps)(DeckList)
