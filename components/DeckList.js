import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { receiveDecks } from '../actions'
import Deck from './Deck'

class DeckList extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(receiveDecks())
  }

  handleClick(key) {
    this.props.navigation.navigate('Deck', {name: key})
  }

  render() {
    const { state } = this.props

    return (
      <View style={{padding: 40}}>
        {state && Object.keys(state).map(key => (
          <TouchableOpacity
            key={key}
            style={styles.deck}
            onPress={() => this.handleClick(key)}>
            <Text style={styles.deckName}>
              {state[key].name}
            </Text>
            <Text style={styles.cardsAmount}>
              {Object.keys(state[key].cards).length} Cards
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    padding: 20,
    marginBottom: 40,
    borderColor: 'grey',
    borderWidth: 1,
  },
  deckName: {
    fontSize: 24,
    textAlign: 'center'
  },
  cardsAmount: {
    fontSize: 20,
    textAlign: 'center'
  },
})

const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps)(DeckList)
