import React from 'react'
import { Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'

import reducer from './reducers'

import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'

const TabNavigator = createMaterialTopTabNavigator({
  Home: DeckList,
  NewDeck: NewDeck,
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
      <Provider store={createStore(reducer)}>
        <View style={{backgroundColor: 'green', height: Constants.statusBarHeight}} />
        <View style={{flex: 1}}>
          <TabContainer />
        </View>
      </Provider>
    );
  }
}
