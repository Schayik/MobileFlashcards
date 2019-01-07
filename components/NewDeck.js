import React, { Component } from 'react'
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'

import { handleAddDeck } from '../actions'

class NewDeck extends Component {
  state = {
    input: '',
    showAlert: false,
  }

  handleTextChange(input) {
    this.setState({
      input,
      showAlert: false,
    })
  }

  handleSubmit() {
    const { input } = this.state
    const { addDeck } = this.props

    input
      ? addDeck(input)
      : this.setState({ showAlert: true })

  }

  render() {
    const { input, showAlert } = this.state

    return (
      <KeyboardAvoidingView behaviour='padding' style={{alignItems: 'center'}}>
        <Text>NewDeck</Text>
        <Text>Name of the new deck:</Text>
        <TextInput
          value={input}
          style={styles.input}
          onChangeText={input => this.handleTextChange(input)}
        />
        {showAlert &&
          <Text style={{color: 'red'}}>please enter a name for the deck.</Text>
        }
        <TouchableOpacity onPress={() => this.handleSubmit()}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  }
})

const mapDispatchToProps = dispatch => ({
  addDeck: name => dispatch(handleAddDeck(name))
})

export default connect(null, mapDispatchToProps)(NewDeck)
