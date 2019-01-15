import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import Card from './Card'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Quiz extends Component {

  state = {
    progress: 0,
    score: 0,
    showBack: false,
  }

  restart() {
    this.setState({
      progress: 0,
      score: 0,
    })
  }

  handleAnswer(answer) {
    const { progress, score } = this.state

    answer && this.setState({ score: (score + 1) })

    this.setState({
      progress: (progress + 1),
      showBack: false,
    })
  }

  render() {
    const { navigation } = this.props
    const { cards } = navigation.state.params
    const { progress, score, showBack } = this.state

    const keys = Object.keys(cards)

    if (progress >= keys.length) {

      clearLocalNotification()
        .then(setLocalNotification())

      return (
        <View style={{padding: 40}}>
          <Text style={styles.text}>
            Finished Quiz
          </Text>
          <Text style={styles.text}>
            Score: {(score / keys.length * 100).toFixed(0)}%
          </Text>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.restart()}>
              <Text style={{fontSize: 20}}>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.goBack()}>
              <Text style={{fontSize: 20}}>Back to Deck</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    return (
      <View style={{padding: 40}}>
        <Text style={styles.text}>
          Progress: {`${progress}/${keys.length}`}
        </Text>

        <Card
          card={cards[keys[progress]]}
          showBack={showBack}
          handleTurn={() => this.setState({ showBack: !showBack })}
        />

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            style={[styles.button2, {backgroundColor: 'lime', marginRight: 20}]}
            onPress={() => this.handleAnswer(true)}>
            <Text style={styles.buttonText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button2, {backgroundColor: '#ff0000'}]}
            onPress={() => this.handleAnswer(false)}>
            <Text style={styles.buttonText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    padding: 20,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 20,
  },
  button2: {
    padding: 10,
    marginTop: 20,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
  }
})

export default connect()(Quiz)
