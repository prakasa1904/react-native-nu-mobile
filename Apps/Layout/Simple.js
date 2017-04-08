/**
 * @flow
 */
import React, { PropTypes, Component } from 'react'
import { Text, View } from 'react-native'
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu'

import CONSTANTS from './../Constants/Main'
import styles from './../Style/TopMenu'

const TopNavigation = () => (
  <View style={styles.topbar}>
    <View>
      <Text style={styles.menuTitle}>NU Mobile</Text>
    </View>
    <Menu onSelect={(value) => alert(`User selected the number ${value}`)}>
      <MenuTrigger style={styles.menuTrigger}>
        <Text style={styles.menuTriggerText}>&#8942;</Text>
      </MenuTrigger>
      <MenuOptions style={styles.menuOptions}>
        {
          CONSTANTS.TopMenu.map((menuName, i) => {
            return(
              <MenuOption key={`top-menu-${menuName.toLowerCase()}`} value={i}>
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

class Simple extends Component {
  static PropTypes = {
    children: React.PropTypes.node.isRequired,
  }

  render() {
    return (
      <MenuContext style={{ flex: 1 }}>
        <TopNavigation/>
          { this.props.children }
        </MenuContext>
    );
  }
}

export default Simple
