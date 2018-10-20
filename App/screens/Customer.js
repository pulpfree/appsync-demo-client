import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert, Button, Text } from 'react-native'

import { SearchBar } from 'react-native-elements'
import { debounce } from 'lodash'

import colors from '../config/colors'
import { Container } from '../components/Container'


class Customer extends Component {
  static navigationOptions = {
    // headerTitle: 'Details',
    headerRight: (
      <Button
        onPress={() => Alert.alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  }

  constructor(props) {
    super(props)
    this.props = props

    this.handleSearch = debounce(this.handleSearch, 500)
    // this.search.focus()
    // this.handleCalculateLitres = debounce(this.handleCalculateLitres, 250)
  }

  componentDidMount() {
    this.search.focus()
  }
  /*
   handleSearch = (e) => {
     console.log('e: ', e)
   }
  */

  render() {
    const { navigation } = this.props
    const customerID = navigation.getParam('customerID', 'NO-ID')

    return (
      <Container>
        <SearchBar
          containerStyle={{ width: '100%', position: 'absolute', top: 0 }}
          inputStyle={{ color: '#000' }}
          lightTheme
          onChangeText={this.handleSearch}
          // onClear={someMethod}
          placeholder="Enter customer last name"
          ref={(search) => { this.search = search }}
          // ref={(arg) => {this.deleteBtn = arg; }}
          showLoading
          searchIcon={{ size: 64 }}
        />
        <Button
          color={colors.$primaryBlue}
          title="Go to Customer... again"
          onPress={() => navigation.push('Customer')}
        />
        <Button
          color={colors.$primaryBlue}
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          color={colors.$primaryBlue}
          title="Go back"
          onPress={() => navigation.goBack()}
        />
        <Text>
          My Customer View for customerID:
          {customerID}
        </Text>
      </Container>
    )
  }
}
Customer.propTypes = {
  navigation: PropTypes.shape().isRequired,
}

export default Customer
