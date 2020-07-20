/* eslint-disable no-invalid-this */
import React, { Component } from 'react'
import { View, Platform, StyleSheet, FlatList, Linking } from 'react-native'
import ListItem from './ListItem'
import MainScreen from './MainScreen'
import { Header, Button } from 'react-native-elements'
const styles = StyleSheet.create({
  container: {
    flex: 3,
    marginTop: Platform.OS === 'android' ? 25 : 0
  },
  view: { flex: 1, flexDirection: 'row' }
})

export default class ListFlatList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listDataFromChild: '',
      scr: false,
      list: [
        {
          key: '1',
          img: 'https://cdn.pixabay.com/photo/2016/07/17/18/44/england-1524478_960_720.png',
          nome: 'ENGLISH',
          msg: 'Click here to switch to English'
        },
        {
          key: '2',
          img: 'https://cdn3.iconfinder.com/data/icons/flags-of-countries-3/128/Italy-512.png',
          nome: 'italiano',
          msg: 'Clicca qui per passare alla lingua italiana'
        },
        {
          key: '3',
          img: 'https://cdn1.iconfinder.com/data/icons/european-country-flags/83/france-512.png',
          nome: 'Le français',
          msg: 'Cliquez ici pour passer au français'
        },
        {
          key: '4',
          img: 'https://i.dlpng.com/static/png/158723_preview.png',
          nome: 'русский',
          msg: 'Нажмите здесь, чтобы перейти на русский'
        },
        {
          key: '5',
          img: 'http://aux2.iconspalace.com/uploads/424097756.png',
          nome: 'Deutsch',
          msg: 'Hier klicken, um zur deutschen Sprache zu gehen'
        }
      ]
    }
  }
  myCallback = dataFromChild => {
    this.setState({ listDataFromChild: dataFromChild })
  }
  myCallbackMain = () => {
    this.setState({ listDataFromChild: '' })
  }

  render() {
    if (this.state.listDataFromChild === '') {
      return (
        <View style={styles.container}>
          <Header
            leftComponent={
              <View style={styles.view}>
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
              </View>
            }
            centerComponent={{
              text: 'IsraelApp',
              style: { textAlign: 'center', color: '#fff', fontSize: 22, paddingRight: 12 }
            }}
          />
          <FlatList
            data={this.state.list}
            renderItem={({ item }) => <ListItem callbackFromParent={this.myCallback} data={item} />}
          />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <MainScreen callbackFromParent={this.myCallbackMain} lan={this.state.listDataFromChild} />
      </View>
    )
  }
}
