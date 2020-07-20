/* eslint-disable react/prop-types */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4'
  },
  loadingText: {
    fontSize: 30
  }
})

import { API_KEY } from '../utils/WeatherAPIKey'

import WeatherC from './WeatherC'

export default class Weather extends React.Component {
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.fetchWeather(position.coords.latitude, position.coords.longitude)
    })
  }

  fetchWeather(lat, lon) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        this.setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          isLoading: false
        })
      })
  }

  render() {
    const { isLoading, weatherCondition, temperature } = this.state
    return (
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Fetching The Weather</Text>
          </View>
        ) : (
          <WeatherC lan={this.props.lan} weather={weatherCondition} temperature={temperature} />
        )}
      </View>
    )
  }
}
