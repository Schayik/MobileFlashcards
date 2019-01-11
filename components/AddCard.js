import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class AddCard extends Component {
  state = {
    question: '',
    answer: null,
    alert: '',
  }

  handleSubmit() {
    const { question, answer } = this.state

    if (question === '') {
      this.setState({ alert: 'please fill in the question' })
    } else if (answer === null) {
      this.setState({ alert: 'please choose an answer' })
    } else {
      console.log(answer)
    }
  }

  render() {
    const { question, answer } = this.state

    return (
      <View style={{padding: 40, alignItems: 'center'}}>
        <TextInput
          value={question}
          style={styles.input}
          onChangeText={input => this.setState({ question: input })}>
        </TextInput>
        {alert &&
          <Text style={styles.alert}>{alert}</Text>
        }
        <TouchableOpacity
          underlayColor={'rgba(0,0,0,0.5)'}
          style={[styles.button, {backgroundColor: 'lime'}]}
          onPress={() => this.setState({ answer: true })}>
          <Text style={styles.buttonText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#ff0000'}]}
          onPress={() => this.setState({ answer: false })}>
          <Text style={styles.buttonText}>Incorrect</Text>
        </TouchableOpacity>
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
    paddingLeft: 8,
    paddingRight: 8,
    width: 100,
    marginBottom: 20,
  },
  alert: {
    color: 'red'
  },
  button: {
    padding: 10,
    marginTop: 20,
    borderRadius: 4,
  },
  submitBtn: {
    padding: 10,
    marginTop: 40,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
  },

})

export default connect()(AddCard)
