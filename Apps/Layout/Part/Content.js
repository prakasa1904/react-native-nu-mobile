/**
 * @flow
 */

import React, { PropTypes, Component } from 'react'
import { 
  Container,
  Header,
  Title,
  Content,
  Card,
  Footer,
  FooterTab,
  Drawer,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base'
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu'

import CONSTANTS from './../../Constants/Main'
import Base from './../../Style/Base'
import TopMenu from './../../Style/TopMenu'

class ContentLayout extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
    setContent: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    openDrawer: PropTypes.func.isRequired,
  }
  
  TopNavigation = () => (
    <View style={TopMenu.topbar}>
      <View>
        <Text style={TopMenu.menuTitle}>NU Mobile</Text>
      </View>
      <Menu onSelect={(value) => this.props.setContent(value)}>
        <MenuTrigger style={TopMenu.menuTrigger}>
          <Text style={TopMenu.menuTriggerText}>&#8942;</Text>
        </MenuTrigger>
        <MenuOptions style={TopMenu.menuOptions}>
          {
            CONSTANTS.TopMenu.map((menuName, i) => {
              return(
                <MenuOption key={`top-menu-${menuName.toLowerCase()}`} value={menuName}>
                  <Text>{ menuName }</Text>
                </MenuOption>
              )
            })
          }
          <View style={TopMenu.divider}/>
          <MenuOption value={{ message: 'Hello World!' }}>
            <Text>Logout</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  )

  render() {
    return (
      <Container style={Base.container}>
        <Header>
          <Left>
            <Button transparent onPress={ this.props.openDrawer }>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>{ this.props.title }</Title>
          </Body>
          <Right />
        </Header>
        { this.props.children }
      </Container>
    );
  }
}

export default ContentLayout
