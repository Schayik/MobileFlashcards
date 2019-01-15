import React from 'react'
import { Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'

import reducer from './reducers'
import StackContainer from './components/Navigator'
import { setLocalNotification } from './utils/helpers'

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{backgroundColor: 'green', height: Constants.statusBarHeight}} />
        <StackContainer />
      </Provider>
    );
  }
}
