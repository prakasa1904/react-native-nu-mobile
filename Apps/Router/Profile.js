/**
 * @flow
 */

import React, { PropTypes, Component } from 'react'
import { 
  Container, 
  Content, 
  List, 
  ListItem, 
  Thumbnail, 
  Text, 
  Body } from 'native-base'
import GiftedSpinner from 'react-native-gifted-spinner'
import GiftedListView from 'react-native-gifted-listview'
import Spinner from 'react-native-loading-spinner-overlay'

import CONSTANTS from './../Constants/Main'
import Modeluser from './../Models/User'
import styles from './../Style/List'

const imgSource = 'https://ecs7.tokopedia.net/img/footer/toped.png'

class Profile extends Component {

  state = {
    loading: true,
    total: 0,
    data: [],
  }

  constructor() {
    super()

    this.api = new Modeluser()
  }

  componentDidMount() {
    this.api.getUsers(1, CONSTANTS.Limit).then((result) => {
      this.setState({
        loading: false,
        total: result.total,
        data: result.data,
      })
    })
  }

  onFetch = (page = 2, callback, options) => {
    this.api.getUsers(page, CONSTANTS.Limit).then((result) => {
      this.setState({
        loading: false,
        total: result.total,
        data: result.data,
      })
    })

    setTimeout(() => {
      if ( page === (Math.ceil(this.state.total/CONSTANTS.Limit))) {
        callback(this.state.data, {
          allLoaded: true, // the end of the list is reached
        })
      } else {
        callback(this.state.data)
      }
    }, 1000)
  }

  onPress = (rowData) => {
    console.log('Just Let Me Know Who You Are')
    console.log(`${rowData.username} pressed`)
  }
  
  renderPaginationWaitingView = (paginateCallback) => {
    return (
      <ListItem onPress={paginateCallback}>
        <Text>Load more</Text>
      </ListItem>
    )
  }
  
  renderPaginationAllLoadedView = () => {
    return
  }

  renderEmptyView = (refreshCallback) => {
    return (
      <Container>
        <Content>
          <Spinner
            visible
            size='small'
          />
        </Content>
      </Container>
    )
  }

  renderRowView = (rowData) => {
    return (
      <ListItem onPress={() => this.onPress(rowData)}>
        <Thumbnail square size={80} source={{uri: imgSource}} />
        <Body>
          <Text>{rowData.username}</Text>
          <Text note>{rowData.email}</Text>
        </Body>
      </ListItem>
    )
  }

  render() {
    if (this.state.loading) {
      return (
        <Container>
          <Content>
            <Spinner 
              visible
              size='small'
            />
          </Content>
        </Container>
      )
    }

    return (
      <Container>
          <GiftedListView
            pagination={true} // enable infinite scrolling using touch to load more
            firstLoader={true} // display a loader for the first fetching
            refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
            withSections={false} // enable sections
            enableEmptySections={true} // enable empty sections
            onFetch={this.onFetch}
            rowView={this.renderRowView}
            paginationAllLoadedView={this.renderPaginationAllLoadedView}
            paginationWaitingView={this.renderPaginationWaitingView}
            emptyView={this.renderEmptyView}
          />
      </Container>
    );
  }
}

export default Profile
