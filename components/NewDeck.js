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
      this.setState({ input: '' })
      navigation.navigate( "Deck", { name: input })
    }
  }

  render() {
    const { input, alert } = this.state

    return (
      <KeyboardAvoidingView behaviour='padding' style={styles.view}>
        <Text style={styles.text}>Name</Text>
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
          <Text style={styles.submitText}>Create new Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 8,
    alignSelf: 'stretch',
    fontSize: 24,
    textAlign: 'center'
  },
  submitBtn: {
    backgroundColor: 'green',
    borderRadius: 4,
    padding: 12,
    marginTop: 10,
  },
  submitText: {
    fontSize: 20
  },
})

const mapStateToProps = (state) => ({ state })
const mapDispatchToProps = dispatch => ({
  addDeck: name => dispatch(handleAddDeck(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)
