/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { weatherConditions } from '../utils/WeatherConditions-en'
import { weatherConditionsGR } from '../utils/WeatherConditions-gr'
import { weatherConditionsIT } from '../utils/WeatherConditions-it'
import { weatherConditionsRU } from '../utils/WeatherConditions-ru'
import { weatherConditionsFr } from '../utils/WeatherConditions-fr'

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tempText: {
    fontSize: 72,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 60,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
})

export default class WeatherC extends React.Component {
  render() {
    let i
    if (this.props.lan === 'русский') {
      i = weatherConditionsRU
    } else if (this.props.lan === 'Le français') {
      i = weatherConditionsFr
    } else if (this.props.lan === 'italiano') {
      i = weatherConditionsIT
    } else if (this.props.lan === 'ENGLISH') {
      i = weatherConditions
    } else if (this.props.lan === 'Deutsch') {
      i = weatherConditionsGR
    }
    return (
      <View style={[styles.weatherContainer, { backgroundColor: i[this.props.weather].color }]}>
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons size={72} name={i[this.props.weather].icon} color={'#fff'} />
          <Text style={styles.tempText}>{this.props.temperature}˚</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{i[this.props.weather].title}</Text>
          <Text style={styles.subtitle}>{i[this.props.weather].subtitle}</Text>
        </View>
      </View>
    )
  }
}
