/**
 * @flow
 */

import React, { PropTypes, Component } from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from './../Style/Base'

class Profile extends Component {
  render() { 
    return (
      <View>
        <Text style={styles.welcome}>
          Profile
        </Text>
        <Text style={styles.instructions}>
          Selamat datang di aplikasi NU Mobile By React Native
        </Text>
        <Text style={styles.instructions}>
          Coming Soon Launch at Mei 2017,{'\n'}
          We're still underconstruction'
        </Text>
      </View>
    );
  }
}

export default Profile
