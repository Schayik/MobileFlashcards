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
    alert: '',
  }

  handleTextChange(input) {
    this.setState({
      input,
      alert: '',
    })
  }

  handleSubmit() {
    const { input } = this.state
    const { state, addDeck, navigation } = this.props

    if (!input) {
      this.setState({ alert: 'please enter a name for the deck.' })
    } else if (state[input]) {
      this.setState({ alert: 'already exists, please change name.' })
    } else {
      addDeck(input)
      navigation.navigate( "Decks" )
    }
  }

  render() {
    const { input, alert } = this.state

    return (
      <KeyboardAvoidingView behaviour='padding' style={styles.view}>
        <Text>Name of the new deck:</Text>
        <TextInput
          value={input}
          style={styles.input}
          maxLength={12}
          onChangeText={input => this.handleTextChange(input)}
        />
        {alert !== '' &&
          <Text style={{color: 'red'}}>{alert}</Text>
        }
        <TouchableOpacity
          onPress={() => this.handleSubmit()}
          style={styles.submitBtn}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'green',
    paddingLeft: 8,
    paddingRight: 8,
    width: 100,
  },
  submitBtn: {
    backgroundColor: 'green',
    borderRadius: 4,
    padding: 20,
  }
})

const mapStateToProps = (state) => ({ state })
const mapDispatchToProps = dispatch => ({
  addDeck: name => dispatch(handleAddDeck(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)
