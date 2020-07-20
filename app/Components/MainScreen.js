/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { View, Linking, StyleSheet } from 'react-native'
import { Header, Button } from 'react-native-elements'
import Translte from './Translate'
import Weather from './Weather'
import Currency from './Currency'
const styles = StyleSheet.create({
  firstText: { flex: 1 },
  heade: { flex: 1, flexDirection: 'row' },
  rightc: { flex: 1, flexDirection: 'row' }
})
export default class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: '',
      curr: '',
      currectStage: 'sun'
    }
  }
  componentDidMount() {
    this.setState({ lang: this.props.lan })
  }

  render() {
    let x
    switch (this.state.currectStage) {
      case 'money':
        x = <Currency lan={this.state.lang} />
        break
      case 'sun':
        x = <Weather lan={this.state.lang} />
        break
      case 'translate':
        x = <Translte lan={this.state.lang} />
        break
    }
    return (
      <View style={styles.firstText}>
        <Header
          leftComponent={
            <View style={styles.heade}>
              <Button
                icon={{
                  type: 'font-awesome',
                  name: 'facebook',
                  color: 'white'
                }}
                onPress={() => {
                  Linking.openURL('https://www.facebook.com/goisrael/')
                }}
              />
              <Button
                icon={{
                  type: 'font-awesome',
                  name: 'undo',
                  color: 'white'
                }}
                onPress={() => {
                  this.props.callbackFromParent()
                }}
              />
            </View>
          }
          centerComponent={{
            text: 'IsraelApp',
            style: { textAlign: 'center', color: '#fff', fontSize: 22, paddingRight: 12 }
          }}
          rightComponent={
            <View style={styles.rightc}>
              <Button
                icon={{
                  name: 'g-translate',
                  color: 'white'
                }}
                onPress={() => {
                  this.setState({ currectStage: 'translate' })
                }}
              />
              <Button
                icon={{
                  name: 'euro-symbol',
                  color: 'white'
                }}
                onPress={() => {
                  this.setState({ currectStage: 'money' })
                }}
              />

              <Button
                icon={{
                  name: 'wb-sunny',
                  color: 'white'
                }}
                onPress={() => {
                  this.setState({ currectStage: 'sun' })
                }}
              />
            </View>
          }
        />
        {x}
      </View>
    )
  }
}
