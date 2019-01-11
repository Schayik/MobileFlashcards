import React from 'react'
import { Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import devToolsEnhancer from 'remote-redux-devtools'

import reducer from './reducers'

import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'

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

// const TabContainer = createAppContainer(TabNavigator)

const StackNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      header: null,
    },
  },
  Deck: {
    screen: Deck,
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
    },
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
    },
  },
})

const StackContainer = createAppContainer(StackNavigator)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, devToolsEnhancer())}>
        <View style={{backgroundColor: 'green', height: Constants.statusBarHeight}} />
        <StackContainer />
      </Provider>
    );
  }
}
