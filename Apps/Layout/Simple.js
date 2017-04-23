import React, { PropTypes, Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  Icon,
  Drawer,
  Button,
} from 'native-base'
import ContentLayout from './Part/Content'
import LeftMenu from './Part/LeftMenu'

export default class Simple extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
    setContent: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  }

  state={
    drawerOpen: false,
    drawerDisabled: false,
  }

  closeDrawer = () => {
    this.setState({drawerOpen: false})
  }
  
  openDrawer = () => {
    this.setState({drawerOpen: true})
  }

  render() {
    return (
      <Drawer
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        content={<LeftMenu closeDrawer={this.closeDrawer} />}
        open={this.state.drawerOpen}
        onOpen={() => {
          this.setState({drawerOpen: true})
        }}
        onClose={() => {
          this.setState({drawerOpen: false})
        }}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={(viewport) => {
          return 100
        }}
        closedDrawerOffset={() => 0}
        type='static'
      >
        <ContentLayout
          openDrawer={this.openDrawer}
        >
          { this.props.children }
        </ContentLayout>
      </Drawer>
    )
  }
}
