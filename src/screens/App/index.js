import React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Home';
import {NavigationContainer} from '@react-navigation/native';
import CustomFooter from '../../Components/CustomFooter';
import Explore from '../Explore';
import Interested from '../Interested';
import Auctions from '../Auctions';
import DetailScreen from '../DetailedScreen';

const Stack = createNativeStackNavigator();
const Footer = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AppFooter = props => {
  return (
    <Footer.Navigator tabBar={props => <CustomFooter {...props} />}>
      <Footer.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Footer.Screen
        name="Explore"
        component={Explore}
        options={{headerShown: false}}
      />
      <Footer.Screen
        name="Interested"
        component={Interested}
        options={{headerShown: false}}
      />
      <Footer.Screen
        name="Auctions"
        component={Auctions}
        options={{headerShown: false}}
      />
    </Footer.Navigator>
  );
};

const AppDrawer = props => {
  return (
    <Drawer.Navigator
      initialRouteName="Footer"
      // drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Footer"
        component={AppFooter}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Drawer" component={AppDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return <AppNavigator />;
};

export default App;
