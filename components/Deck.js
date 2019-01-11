import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { name } = navigation.state.params
    return {
      title: name
    }
  }

  render() {
    const { deck, navigation } = this.props

    return (
      <View style={styles.deck}>
        <Text style={{fontSize: 24}}>
          {deck.name}
        </Text>
        <Text style={{fontSize: 20}}>
          {Object.keys(deck.cards).length} Cards
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Quiz', { cards: deck.cards })}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddCard')}>
          <Text>Add Card</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    alignItems: 'center',
    padding: 20,
    margin: 40,
    borderColor: 'grey',
    borderWidth: 1,
  },
  button: {
    padding: 20,
    marginTop: 20,
    borderColor: 'grey',
    borderWidth: 1,
  }
})

const mapStateToProps = (state, { navigation }) => ({ deck: state[navigation.state.params.name] })

export default connect(mapStateToProps)(Deck)
