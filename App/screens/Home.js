import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Text } from 'react-native'

import { Container } from '../components/Container'
import colors from '../config/colors'

class Home extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const { navigation } = this.props

    return (
      <Container>
        <Text>My Home View</Text>
        <Button
          color={colors.$primaryBlue}
          title="Go to Customer"
          onPress={() => navigation.navigate('Customer', {
            customerID: '123',
          })}
        />
      </Container>
    )
  }
}
Home.propTypes = {
  navigation: PropTypes.shape().isRequired,
}

export default Home
