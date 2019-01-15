import React from 'react'
import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation'

import DeckList from './DeckList'
import NewDeck from './NewDeck'
import Deck from './Deck'
import Quiz from './Quiz'
import AddCard from './AddCard'

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

export default StackContainer
