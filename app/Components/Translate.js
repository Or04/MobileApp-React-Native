/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Button } from 'native-base'

const addItemStyles = StyleSheet.create({
  wrapper: {
    padding: 20,
    backgroundColor: '#4287f5',
    height: '100%'
  },
  firstText: {
    color: 'white',
    fontSize: 25,
    margin: 15,
    paddingBottom: 25,
    fontWeight: 'bold'
  },
  firstTextInput: {
    justifyContent: 'flex-start',
    borderColor: 'black',
    borderWidth: 2,
    fontWeight: 'bold',
    paddingLeft: 5
  },
  secondView: { margin: 15, paddingBottom: 25 },
  thirdText: { color: 'white', fontSize: 25, fontWeight: 'bold' },
  thirdView: { margin: 15, paddingBottom: 25 },
  fourText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'flex-end'
  }
})
export default class Translate extends Component {
  constructor(props) {
    super(props)
    this.transalteWord = this.transalteWord.bind(this)
    this.state = {
      i: '',
      k: '',
      x: '',
      o: '',
      fromTranslte: '',
      textToTranslate: ''
    }
  }
  transalteWord() {
    fetch(
      `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190517T155022Z.deff04699b844d9b.311cb472d735a04f98b864f5ec29c5267a61f0fd&lang=${this.state.fromTranslte}-he&text=${this.state.x}`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          textToTranslate: data.text[0]
        })
      )
  }
  componentDidMount() {
    if (this.props.lan === 'русский') {
      this.setState({
        i: 'Введите слово, которое вы хотите перевести на иврит',
        x: 'Введите здесь',
        k: 'перевести',
        fromTranslte: 'ru'
      })
    } else if (this.props.lan === 'Le français') {
      this.setState({
        i: 'Entrez le mot que vous souhaitez traduire en hébreu',
        x: 'Tapez ici',
        k: 'Traduire',
        fromTranslte: 'fr'
      })
    } else if (this.props.lan === 'italiano') {
      this.setState({
        i: 'Inserisci la parola che vuoi tradurre in ebraico',
        x: 'Scrivi qui',
        k: 'tradurre',
        fromTranslte: 'it'
      })
    } else if (this.props.lan === 'ENGLISH') {
      this.setState({
        i: 'Enter the word you want to translate into Hebrew:',
        x: 'Type here',
        k: 'Translate',
        fromTranslte: 'en'
      })
    } else if (this.props.lan === 'Deutsch') {
      this.setState({
        i: 'Geben Sie das Wort ein, das Sie ins Hebräische übersetzen möchten',
        x: 'Tippen Sie hier',
        k: 'Übersetzen',
        fromTranslte: 'de'
      })
    }
  }

  render() {
    return (
      <View style={addItemStyles.wrapper}>
        <View>
          <Text style={addItemStyles.firstText}>{this.state.i}</Text>
          <View>
            <View style={addItemStyles.secondView}>
              <TextInput
                onChangeText={data => this.setState({ x: data })}
                value={this.state.x}
                style={addItemStyles.firstTextInput}
              />
            </View>
            <Button
              block
              onPress={() => {
                this.transalteWord()
              }}
            >
              <Text style={addItemStyles.thirdText}>{this.state.k}</Text>
            </Button>
            <View style={addItemStyles.thirdView}>
              <Text style={addItemStyles.fourText}>{this.state.textToTranslate}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
