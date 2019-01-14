import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends Component {
  state = {
    showBack: false,
  }

  checkAnswer(answer) {
    const { card, handleAnswer } = this.props
    card.answer === answer
      ? handleAnswer(true)
      : handleAnswer(false)
  }

  render() {
    const { card } = this.props
    const { showBack } = this.state

    return (
      <View style={styles.card}>
        <Text style={styles.question}>{card.question}</Text>
        <TouchableOpacity
          onPress={() => this.setState({ showBack: !showBack })}>
          <Text style={{color: 'red', fontSize: 18}}>show {showBack ? 'question' : 'answer'}</Text>
        </TouchableOpacity>
        {showBack
          ? <View>
              <Text style={{fontSize: 36}}>
                { card.answer ? 'Yes' : 'No' }
              </Text>
            </View>
          : <View>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: 'lime'}]}
                onPress={() => this.checkAnswer(true)}>
                <Text style={styles.buttonText}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: '#ff0000'}]}
                onPress={() => this.checkAnswer(false)}>
                <Text style={styles.buttonText}>Incorrect</Text>
              </TouchableOpacity>
            </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
  },
  question: {
    textAlign: 'center',
    fontSize: 24,
  },
  button: {
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
