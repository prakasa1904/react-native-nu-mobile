/**
 * @flow
 */

import React, { PropTypes, Component } from 'react'
import {
  Text,
  View
} from 'react-native'

import Layout from './Layout/Simple'
import styles from './Style/Base'

// Routes
import Dashboard from './Router/Dashboard'
import Profile from './Router/Profile'
import Kegiatan from './Router/Kegiatan'
import Pengurus from './Router/Pengurus'
import Login from './Router/Login'

class Main extends Component {
  state = {
    active: 'Login'
  }

  setContent = (content) => {
    this.setState({
      active: content,
    })
  }

  contentIs = () => {
    const label = this.state.active

    switch (label) {
      case 'Login':
          return(<Login />)
          break
      case 'Profile':
        return(<Profile />)
        break
      case 'Kegiatan':
        return(<Kegiatan />)
        break
      case 'Pengurus':
        return(<Pengurus />)
        break
      default:
        return(<Dashboard />)
    }
  }

  render() {
    return (
      <Layout setContent={this.setContent} >
        <View style={styles.container}>
          { this.contentIs() }
        </View>
      </Layout>
    );
  }
}

export default Main
