import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';



const CustomFooter = ({state, navigation}) => {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const icon =
          route.name === 'Home' ? (
            <Feather name="home" size = {24} color= 'black' />
          ) : route.name === 'Explore' ? (
            <Ionicons name="compass-outline" size = {25} color= 'black' />
          ) : route.name === 'Interested' ? (
            <Feather name="check-square" size = {24} color= 'black' />
          ) : route.name === 'Auctions' ? (
            <FontAwesome name="legal" size = {24} color= 'black' />
          ) : null;
        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(route.name)}
            style={styles.touchContainer}>
            <View style={styles.iconStyle}>{icon}</View>
            <Text style={styles.footerText}>{route.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomFooter;
