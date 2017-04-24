import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native'
import MD5 from 'md5'

import styles from './../Style/Login'
import Modeluser from './../Models/User'
const LOGO = require('../img/numobile.png')
const BACKGROUND = require('../img/background.png')

export default class Login extends Component {
	state = {
		username: '',
		password: '',
	}
	
	constructor() {
    super()
		
		this.api = new Modeluser()
  }

	isEmail = (email) => {
		const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)
	}

	onUsernameChangesHandler = (username) => {
		this.setState({username: username})
	}
	
	onPasswordChangesHandler = (password) => {
		this.setState({password: password})
	}

	onSubmitHandler = () => {
		let data = JSON.parse('{}')
		const password = String(MD5(this.state.password))

		if (this.isEmail(this.state.username)) {
			data = Object.assign(data, {action: 'login', email: this.state.username, password: password})
		} else {
			data = Object.assign(data, {action: 'login', username: this.state.username, password: password})
		}
		
		this.api.login(data)
		.then((result) => {
			console.log(result)
		})
	}

  render() {
    return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Image source={LOGO} style={styles.logo}>
				</Image>
					<View style={styles.inputContainer}>
						<TextInput
							onChangeText={this.onUsernameChangesHandler}
							underlineColorAndroid='transparent' 
							style={styles.input} 
							placeholder='Nama Pengguna'>
						</TextInput>
						<TextInput
							onChangeText={this.onPasswordChangesHandler}
							secureTextEntry={true} 
							underlineColorAndroid='transparent' 
							style={styles.input} 
							placeholder='Password'>
						</TextInput>
					</View>
					<TouchableOpacity 
						onPress={this.onSubmitHandler} 
						style={styles.buttonContainer}>
						<Text style={styles.buttonText}>LOGIN</Text>
					</TouchableOpacity>
						<Text>Lupa Password?</Text>
			</View>
		</View>
    );
  }
}
