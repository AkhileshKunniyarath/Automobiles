import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const Explore = () => {
  const [vehicle, setVehicle] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await fetch(
        'https://auction.riolabz.com/v1/b2c-inventory/getAll/public',
      );
      const json = await response.json();
      // console.log('API Response:', json);

      // Access the nested array of vehicles
      if (json?.data?.data && Array.isArray(json.data.data)) {
        setVehicle(json.data.data);
      } else {
        console.warn('Unexpected API response structure:', json);
        setVehicle([]); // Fallback to an empty array
      }
    } catch (error) {
      console.error('Error fetching vehicle:', error);
      setVehicle([]); // Prevent crashes in case of error
    }
  };

  const handleProduct = item => {
    navigation.navigate('DetailedScreen', {product: item});
  };


  const renderItem = ({item, index}) => {
    // console.log('###################################', item);

    const photoUri =
      item.photos && item.photos.length > 0
        ? item.photos[0]
        : 'fallback-image-url';

    return (
      <View style={styles.card}>
        <TouchableOpacity onPress={() => handleProduct(item)}>
        <Image source={{uri: photoUri}} style={styles.carImage} />
        <View style={styles.details}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.price}>₹{item.vehiclePrice}</Text>
            <View>
              <Text style={styles.emiFrom}>EMI From:</Text>
              <Text style={styles.emi}>₹{item.emiStartsAt}/month</Text>
            </View>
          </View>

          <Text style={styles.title}>
            {item.makeName}
            {' - '}
            {item.modelName}
          </Text>

          <View style={styles.specs}>

            <View style={styles.specView}>
              <Image source={require('../../Assets/images/km.png')} style={{width:17,height:17,}}/>
            <Text style={styles.spec}>{item.odometer}{' '}km</Text>
            </View>

            <View style={styles.specView}>
              <Image source={require('../../Assets/images/gearbox.png')} style={{width:20,height:20,}}/>
              <Text style={styles.spec}>{item.gearBox}</Text>
            </View>

            <View style={styles.specView}>
              <Image source={require('../../Assets/images/fuel.png')} style={{width:16,height:16,}}/>
              <Text style={styles.spec}>{item.fuelTypeName}</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>


        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Show Interest</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.contactButton]}>
            <Text style={[styles.buttonText, styles.contactButtonText]}>
              Contact
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.locationHeader}>
        <SimpleLineIcons name="location-pin" size={12} color="gray" />
        <Text style={styles.location}>Bangalore</Text>
        <Entypo name="chevron-thin-down" size={14} color="gray" />
      </View>

      <View style={styles.header}>
        <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          placeholder="Search Here..."
          style={styles.searchInput}
          placeholderTextColor="gray"
        />
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            backgroundColor: '#fff',
            borderColor: '#fff',
            borderRadius: 5,
            padding: 12,
            marginRight: 10,
          }}>
          <Text>Filter</Text>
          <Icon
            name="filter-list"
            size={16}
            color="gray"
            style={styles.filter}
          />
        </View>
      </View>

      {/* {content} */}
      {/* <View style={{paddingTop:20,paddingBottom:10,}}> */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 20,
          paddingLeft: 10,
        }}>
        <MaterialCommunityIcons
          name="car-side"
          size={30}
          color="#0f0f00"
          style={styles.filter}
        />
        <Text style={styles.category}>4 - Wheelers</Text>
      </View>

      <FlatList
        data={vehicle}
        renderItem={renderItem}
        keyExtractor={item => item.id?.toString() || item._id?.toString()}
      />
    </View>
  );
};

export default Explore;
