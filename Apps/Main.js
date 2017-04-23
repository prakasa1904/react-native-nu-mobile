/**
 * @flow
 */

import React, { Component } from 'react'
import Layout from './Layout/Simple'

// Routes
import Dashboard from './Router/Dashboard'
import Profile from './Router/Profile'
import Kegiatan from './Router/Kegiatan'
import Pengurus from './Router/Pengurus'
import Login from './Router/Login'

const BACKGROUND = require('./img/background.png')

class Main extends Component {
  state = {
    title: 'Dashboard',
    active: 'Profile',
    loginStatus: '',
  }

  setTitle = (title) => {
    this.setState({
      title: title,
    })
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
      <Layout
        title={this.state.title}
        setTitle={this.setTitle}
        setContent={this.setContent}
      >
        { this.contentIs() }
      </Layout>
    );
  }
}

export default Main
