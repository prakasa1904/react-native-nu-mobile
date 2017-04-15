/**
 * @flow
 */

import React, { PropTypes, Component } from 'react'
import {
  TouchableHighlight,
  Image,
  Text,
  View
} from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'
import GiftedListView from 'react-native-gifted-listview'

import CONSTANTS from './../Constants/Main'
import Modeluser from './../Models/User'
import styles from './../Style/List'

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
    this.api.getUsers(0, CONSTANTS.Limit).then((result) => {
      this.setState({
        loading: false,
        total: result.total,
        data: result.data,
      })
    })
  }

  onFetch = (page = 1, callback, options) => {
    setTimeout(() => {
      // if (page === 3) {
      //   callback(this.state.data, {
      //     allLoaded: true, // the end of the list is reached
      //   })
      // } else {
      //   callback(this.state.data)
      // }
      if (page > 0) {
        this.api.getUsers(page, CONSTANTS.Limit).then((result) => {
          this.setState({
            loading: false,
            total: result.total,
            data: result.data,
          })
        })
        callback(this.state.data)
      }
    }, 1000)
  }

  onPress = (rowData) => {
    console.log('Just Let Me Know Who You Are')
    console.log(`${rowData.username} pressed`)
  }
  
  renderSeparatorView = () => {
    return (
      <View style={styles.separator} />
    )
  }
  
  renderPaginationFetchigView = () => {
    return (
      <View style={styles.paginationView}>
        <GiftedSpinner />
      </View>
    )
  }
  
  renderPaginationWaitingView = (paginateCallback) => {
    return (
      <TouchableHighlight
        underlayColor='#c8c7cc'
        onPress={paginateCallback}
        style={styles.paginationView}
      >
        <Text style={[styles.actionsLabel, {fontSize: 13}]}>
          Load more
        </Text>
      </TouchableHighlight>
    )
  }
  
  renderPaginationAllLoadedView = () => {
    return (
      <View style={styles.paginationView}>
        <Text style={styles.actionsLabel}>
          ~
        </Text>
      </View>
    )
  }

  renderEmptyView = (refreshCallback) => {
    return (
      <View>
        <Text style={styles.defaultViewTitle}>
          Sorry, there is no content to display
        </Text>
        <TouchableHighlight
          underlayColor='#c8c7cc'
          onPress={refreshCallback}
        >
          <Text>↻</Text>
        </TouchableHighlight>
      </View>
    )
  }

  renderRowView = (rowData) => {
    return (
      <TouchableHighlight
        style={styles.row}
        underlayColor='#c8c7cc'
        onPress={() => this.onPress(rowData)}
      >
        <Text>{ rowData.username }</Text>
      </TouchableHighlight>
    )
  }

  render() {
    /*if (this.state.loading) {
      return (
        <View>
          <Text>Sabar bro, loading ....</Text>
        </View>
      )
    }*/

    return (
      <View>
        <GiftedListView
          pagination={true} // enable infinite scrolling using touch to load more
          firstLoader={true} // display a loader for the first fetching
          refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
          withSections={false} // enable sections
          onFetch={this.onFetch}
          rowView={this.renderRowView}
          paginationFetchigView={this.renderPaginationFetchigView}
          paginationAllLoadedView={this.renderPaginationAllLoadedView}
          paginationWaitingView={this.renderPaginationWaitingView}
          emptyView={this.renderEmptyView}
          renderSeparator={this.renderSeparatorView}
        />
      </View>
    );
  }
}

export default Profile
