import React from 'react'
import { Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import devToolsEnhancer from 'remote-redux-devtools'

import reducer from './reducers'

import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'

const TabNavigator = createMaterialTopTabNavigator({
  "Decks": DeckList,
  "New Deck": NewDeck,
},
{
  tabBarOptions: {
    style: {
      backgroundColor: 'green',
    },
    indicatorStyle: {
      backgroundColor: 'blue',
    },
  }
})

const TabContainer = createAppContainer(TabNavigator)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, devToolsEnhancer())}>
        <View style={{backgroundColor: 'green', height: Constants.statusBarHeight}} />
        <TabContainer />
      </Provider>
    );
  }
}
