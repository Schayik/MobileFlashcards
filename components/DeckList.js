import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
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

  renderItem = ({ item }) => {
    const { decks } = this.props

    return (
      <TouchableOpacity
        key={item}
        style={styles.deck}
        onPress={() => this.handleClick(item)}>
        <Text style={styles.deckName}>
          {item}
        </Text>
        <Text style={styles.cardsAmount}>
          {Object.keys(decks[item].cards).length} Cards
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { decks } = this.props

    return (
      <View style={{padding: 20, paddingBottom: 0,}}>
        <FlatList
          data={Object.keys(decks).reverse()}
          renderItem={this.renderItem}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    padding: 20,
    marginBottom: 20,
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

const mapStateToProps = (state) => ({ decks: state })

export default connect(mapStateToProps)(DeckList)
