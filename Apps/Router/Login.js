import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import styles from './../Style/Login'

export default class Login extends Component {
  render() {
    return (
		<View style={styles.container}>
				<View style={styles.content}>
					<Image source={require('../img/numobile.png')} style={styles.logo}>
					</Image>
					<View style={styles.inputContainer}>
						<TextInput underlineColorAndroid='transparent' style={styles.input} placeholder='Nama Pengguna'>
						</TextInput>
						<TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input} placeholder='Password'>
						</TextInput>
					</View>
					<TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
						<Text style={styles.buttonText}>LOGIN</Text>
					</TouchableOpacity>
						<Text>Lupa Password?</Text>
				</View>
		</View>
    );
  }
}
