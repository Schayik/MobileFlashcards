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

  state = {
    showAlert: false,
  }

  handleStartQuiz() {
    const { deck, navigation } = this.props

    Object.keys(deck.cards).length === 0
      ? this.setState({ showAlert: true })
      : navigation.navigate('Quiz', { cards: deck.cards })
  }

  render() {
    const { deck, navigation } = this.props
    const { showAlert } = this.state

    return (
      <View style={styles.deck}>
        <Text style={{fontSize: 24}}>
          {deck.name}
        </Text>
        <Text style={{fontSize: 20}}>
          {Object.keys(deck.cards).length} Cards
        </Text>
        { showAlert && Object.keys(deck.cards).length === 0 &&
          <Text style={{color: 'red'}}>Please add a card first.</Text>
        }
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleStartQuiz()}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddCard', { deckName: deck.name })}>
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
