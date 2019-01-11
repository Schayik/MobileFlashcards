import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { handleAddCard } from '../actions'

class AddCard extends Component {
  state = {
    statement: '',
    answer: null,
    alert: '',
  }

  handleSubmit() {
    const { statement, answer } = this.state
    const { addCard, navigation } = this.props
    const { deckName } = navigation.state.params

    if (statement === '') {
      this.setState({ alert: 'please fill in the question' })
    } else if (answer === null) {
      this.setState({ alert: 'please choose an answer' })
    } else {
      addCard(deckName, statement, answer)
      navigation.goBack()
    }
  }

  render() {
    const { statement, answer, alert } = this.state

    return (
      <View style={{padding: 40, alignItems: 'center'}}>
        <Text style={styles.buttonText}>Statement</Text>
        <TextInput
          value={statement}
          maxLength={100}
          style={styles.input}
          onChangeText={input => this.setState({ statement: input })}>
        </TextInput>

        <Text style={styles.buttonText}>Answer</Text>
        { answer !== null && (answer
            ? <Text style={[styles.buttonText, {color: 'lime'}]}>Correct</Text>
            : <Text style={[styles.buttonText, {color: '#ff0000'}]}>Incorrect</Text>
        )}

        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'lime', marginRight: 10}]}
            onPress={() => this.setState({ answer: true })}>
            <Text style={styles.buttonText}>Correct</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#ff0000'}]}
            onPress={() => this.setState({ answer: false })}>
            <Text style={styles.buttonText}>Incorrect</Text>
          </TouchableOpacity>
        </View>

        { alert !== '' &&
          <Text style={{color: 'red'}}>{alert}</Text>
        }

        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => this.handleSubmit()}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
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
  },
  alert: {
    color: 'red'
  },
  button: {
    flex: 1,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 4,
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
  addCard: (d, s, a) => dispatch(handleAddCard(d, s, a))
})

export default connect(null, mapDispatchToProps)(AddCard)
