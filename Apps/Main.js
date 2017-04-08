/**
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Layout from './Layout/Simple'
import styles from './Style/Base'

class Main extends Component {
  render() {
    return (
      <Layout>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Dashboard
          </Text>
          <Text style={styles.instructions}>
            Selamat datang di aplikasi NU Mobile By React Native
          </Text>
          <Text style={styles.instructions}>
            Coming Soon Launch at Mei 2017,{'\n'}
            We're still underconstruction'
          </Text>
        </View>
      </Layout>
    );
  }
}

export default Main
