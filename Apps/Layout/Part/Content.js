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
