import { createStackNavigator } from 'react-navigation'

import colors from './colors'
import Customer from '../screens/Customer'
import Home from '../screens/Home'

export default createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Home',
      },
    },
    Customer: {
      screen: Customer,
      navigationOptions: {
        headerTitle: 'Customer',
      },
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.$primary,
      },
      headerTintColor: colors.$lightGray,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)
