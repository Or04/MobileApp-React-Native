/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-invalid-this */
/* eslint-disable import/no-namespace */
/* eslint-disable react/prop-types */
import * as React from 'react'
import { Text, View, StyleSheet, TouchableHighlight, TextInput } from 'react-native'
import Constants from 'expo-constants'

// // You can import from local files
// import AssetExample from './components/AssetExample';

// // or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#4287f5',
    alignItems: 'center'
  },
  ViewFirst: { flexDirection: 'row' },
  inpu: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  button: {
    width: 200,
    height: 100,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttontext: {
    textAlign: 'center',
    alignItems: 'center'
  },
  spacing: {
    height: 25
  }
})
export default class Currency extends React.Component {
  state = {
    usd: '500',
    conv: 0,
    fromSymbo: '',
    i: '',
    toEUR: 1,
    toUSD: 1,
    toRUB: 1,
    toILS: 1
  }

  componentDidMount() {
    this.setState({ fromSymbo: this.props.lan })
    if (this.props.lan === 'русский') {
      fetch(
        'https://free.currconv.com/api/v7/convert?q=RUB_EUR,RUB_USD,RUB_ILS&compact=ultra&apiKey=aa08aadd6959604eb49d'
      )
        .then(response => response.json())
        .then(data =>
          this.setState({
            toEUR: data.RUB_EUR,
            toILS: data.RUB_ILS,
            toUSD: data.RUB_USD
          })
        )
        .then(this.setState({ state: this.state }))
    }
    if (
      this.props.lan === 'Le français' ||
      this.props.lan === 'italiano' ||
      this.props.lan === 'Deutsch'
    ) {
      fetch(
        'https://free.currconv.com/api/v7/convert?q=EUR_RUB,EUR_USD,EUR_ILS&compact=ultra&apiKey=aa08aadd6959604eb49d'
      )
        .then(response => response.json())
        .then(data =>
          this.setState({
            toRUB: data.EUR_RUB,
            toILS: data.EUR_ILS,
            toUSD: data.EUR_USD
          })
        )
        .then(this.setState({ state: this.state }))
    }
    if (this.props.lan === 'ENGLISH') {
      fetch(
        'https://free.currconv.com/api/v7/convert?q=USD_RUB,USD_EUR,USD_ILS&compact=ultra&apiKey=aa08aadd6959604eb49d'
      )
        .then(response => response.json())
        .then(data =>
          this.setState({
            toRUB: data.USD_RUB,
            toILS: data.USD_ILS,
            toEUR: data.USD_EUR
          })
        )
        .then(this.setState({ state: this.state }))
    }
  }
  usdState = () => {
    this.setState({
      conv: this.state.usd * this.state.toUSD
    })
  }

  eurState = () => {
    this.setState({
      conv: this.state.usd * this.state.toEUR
    })
  }
  ilsState = () => {
    this.setState({
      conv: this.state.usd * this.state.toILS
    })
  }
  rubState = () => {
    this.setState({
      conv: this.state.usd * this.state.toRUB
    })
  }
  render() {
    const x = this.props.lan
    let y
    if (x === 'русский') {
      y = '₽'
    }
    if (x === 'Le français' || x === 'italiano' || x === 'Deutsch') {
      y = '€'
    }
    if (x === 'ENGLISH') {
      y = '$'
    }

    return (
      <View style={styles.container}>
        <View style={styles.ViewFirst}>
          <Text style={styles.paragraph}>
            Currency Converter:
            {y}
          </Text>
          <TextInput
            style={styles.inpu}
            onChangeText={usd => this.setState({ usd })}
            value={this.state.usd}
          />
        </View>
        <TouchableHighlight style={styles.button} onPress={this.usdState}>
          <Text style={styles.buttontext}>TO:USD</Text>
        </TouchableHighlight>
        <View style={styles.spacing}></View>

        <TouchableHighlight style={styles.button} onPress={this.eurState}>
          <Text>TO:EUR</Text>
        </TouchableHighlight>
        <View style={styles.spacing}></View>

        <TouchableHighlight style={styles.button} onPress={this.ilsState}>
          <Text>TO:ILS</Text>
        </TouchableHighlight>
        <View style={styles.spacing}></View>
        <TouchableHighlight style={styles.button} onPress={this.rubState}>
          <Text>TO:RUB</Text>
        </TouchableHighlight>
        <Text style={styles.paragraph}>{this.state.conv}</Text>
      </View>
    )
  }
}
