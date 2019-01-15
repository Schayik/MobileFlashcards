import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Card = ({ card, showBack, handleTurn }) => (
  <View style={styles.card}>
    {showBack
      ? <Text style={styles.question}>{card.answer}</Text>
      : <Text style={styles.question}>{card.question}</Text>
    }

    <TouchableOpacity
      onPress={() => handleTurn()}>
      <Text style={styles.showBack}>show {showBack ? 'question' : 'answer'}</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  card: {
    padding: 20,
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
  },
  question: {
    textAlign: 'center',
    fontSize: 24,
  },
  showBack: {
    color: 'red',
    fontSize: 20,
    marginTop: 10,
  }
})

export default Card
