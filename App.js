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

import reducer from './reducers'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'
import { setLocalNotification } from './utils/helpers'

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

const StackNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      header: null,
    },
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'green',
      },
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerStyle: {
        backgroundColor: 'green',
      },
    },
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerStyle: {
        backgroundColor: 'green',
      },
    },
  },
})

const StackContainer = createAppContainer(StackNavigator)

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
