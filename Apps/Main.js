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

class Main extends Component {
  state = {
    active: 'Dashboard'
  }
  setContent = (content) => {
    this.setState({
      active: content,
    })
  }

  contentIs = () => {
    switch (label) {
      case 'user':
        return(<Profile />)
        break
      case 'kegiatan':
        return(<Kegiatan />)
        break
      case 'pengurus':
        return(<Pengurus />)
        break
      default:
        return(<Dashboard />)
    }
  }

  render() { 
    return (
      <Layout>
        <View style={styles.container}>
          { this.contentIs() }
        </View>
      </Layout>
    );
  }
}

export default Main
