import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, StatusBar } from 'react-native'

import styles from './styles'

const Container = ({ children, backgroundColor }) => {
  const containerStyles = [styles.container]
  if (backgroundColor) {
    containerStyles.push({ backgroundColor })
  }
  return (
    <SafeAreaView style={containerStyles}>
      <StatusBar
        barStyle="light-content"
        // barStyle="dark-content"
        // backgroundColor="#6a51ae"
      />
      {children}
    </SafeAreaView>
  )
}

Container.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.instanceOf(Object).isRequired,
}

Container.defaultProps = {
  backgroundColor: '',
  // children: {},
}

export default Container
