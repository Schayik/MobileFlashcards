import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'

import { handleAddCard } from '../actions'

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
    alert: '',
  }

  handleSubmit() {
    const { question, answer } = this.state
    const { addCard, navigation } = this.props
    const { deckName } = navigation.state.params

    if (question === '') {
      this.setState({ alert: 'please fill in the question' })
    } else if (answer === '') {
      this.setState({ alert: 'please fill in an answer' })
    } else {
      addCard(deckName, question, answer)
      navigation.goBack()
    }
  }

  render() {
    const { question, answer, alert } = this.state

    return (
      <KeyboardAvoidingView style={{padding: 40, alignItems: 'center'}}>

        <Text style={styles.buttonText}>Question</Text>
        <TextInput
          value={question}
          maxLength={100}
          style={styles.input}
          onChangeText={input => this.setState({ question: input })}>
        </TextInput>

        <Text style={styles.buttonText}>Answer</Text>
        <TextInput
          value={answer}
          maxLength={100}
          style={styles.input}
          onChangeText={input => this.setState({ answer: input })}>
        </TextInput>

        { alert !== '' &&
          <Text style={{color: 'red'}}>{alert}</Text>
        }

        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => this.handleSubmit()}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'green',
    alignSelf: 'stretch',
    marginBottom: 20,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  alert: {
    color: 'red'
  },
  submitBtn: {
    padding: 10,
    marginTop: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
  },

})

const mapDispatchToProps = dispatch => ({
  addCard: (d, q, a) => dispatch(handleAddCard(d, q, a))
})

export default connect(null, mapDispatchToProps)(AddCard)
