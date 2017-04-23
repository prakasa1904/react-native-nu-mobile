/**
 * @flow
 */

import React, { PropTypes, Component } from 'react'
import { Text, View } from 'react-native'
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu'

import CONSTANTS from './../Constants/Main'
import styles from './../Style/TopMenu'

class Simple extends Component {
  static PropTypes = {
    setContent: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  }

  TopNavigation = () => (
    <View style={styles.topbar}>
      <View>
        <Text style={styles.menuTitle}>NU Mobile</Text>
      </View>
      <Menu onSelect={(value) => this.props.setContent(value)}>
        <MenuTrigger style={styles.menuTrigger}>
          <Text style={styles.menuTriggerText}>&#8942;</Text>
        </MenuTrigger>
        <MenuOptions style={styles.menuOptions}>
          {
            CONSTANTS.TopMenu.map((menuName, i) => {
              return(
                <MenuOption key={`top-menu-${menuName.toLowerCase()}`} value={menuName}>
                  <Text>{ menuName }</Text>
                </MenuOption>
              )
            })
          }
          <View style={styles.divider}/>
          <MenuOption value={{ message: 'Hello World!' }}>
            <Text>Logout</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  )

  render() {
    return (
      <MenuContext style={{ flex: 1 }}>
        { this.TopNavigation() }
        { this.props.children }
        </MenuContext>
    );
  }
}

export default Simple
