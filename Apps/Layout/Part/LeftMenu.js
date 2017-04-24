import React, { PropTypes, Component } from 'react'
import {
  StyleSheet,
  ScrollView,
} from 'react-native'
import { 
  Container,
  Header, 
  Content,
  List, 
  ListItem, 
  Thumbnail,
  Text, 
  Icon, 
  Badge, 
  Left, 
  Body, 
  Right, 
  Switch,
  Button,
} from 'native-base'

import Base from './../../Style/Base'
const AVATAR = require('../../img/warga.png')

export default class LeftMenu extends Component {
  static PropTypes = {
    closeDrawer: PropTypes.func.isRequired,
  }

  render() {
    return (
      <ScrollView style={Base.containerSidebar}>
        <Container>
          <Header>
            <Left/>
            <Body />
            <Right>
              <Button transparent light onPress={this.props.closeDrawer}>
                <Icon name='close' />
              </Button>
            </Right>
          </Header>
          <Content>
            <ListItem>
                <Thumbnail square size={80} source={AVATAR} />
                <Body>
                    <Text>User</Text>
                    <Text note>Warga</Text>
                </Body>
            </ListItem>
            <ListItem icon>
                <Left>
                    <Icon name='home' />
                </Left>
                <Body>
                  <Text>Dashboard</Text>
                </Body>
                <Right/>
            </ListItem>
            <ListItem icon>
                <Left>
                    <Icon name='person' />
                </Left>
                <Body>
                  <Text>Profile</Text>
                </Body>
                <Right/>
            </ListItem>
            <ListItem icon>
                <Left>
                    <Icon name='settings' />
                </Left>
                <Body>
                  <Text>Pengaturan</Text>
                </Body>
                <Right/>
            </ListItem>
            <ListItem icon>
                <Left>
                    <Icon name='help' />
                </Left>
                <Body>
                  <Text>Bantuan</Text>
                </Body>
                <Right/>
            </ListItem>
            <ListItem icon>
                <Left>
                    <Icon name='log-out' />
                </Left>
                <Body>
                  <Text>Logout</Text>
                </Body>
                <Right/>
            </ListItem>
          </Content>
        </Container>
      </ScrollView>
    )
  }
}
