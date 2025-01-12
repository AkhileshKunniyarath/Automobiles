import React from 'react';
import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import styles from './style';
// import { FontAwesome } from '@expo/vector-icons';
// import MapView, { Marker } from 'react-native-maps';

const DetailScreen = props => {
  const {product} = route.params;
  const photoUri =
      item.photos && item.photos.length > 0
        ? item.photos[0]
        : 'fallback-image-url';
  const features = [
    { id: '1', name: 'All Wheel Drive', icon: 'check' },
    { id: '2', name: 'All Wheel Steering', icon: 'check' },
    { id: '3', name: 'Anti-Lock Brakes/ABS', icon: 'check' },
    { id: '4', name: 'Cruise Control', icon: 'check' },
    { id: '5', name: 'Front Airbags', icon: 'check' },
  ];

  return (

    <ScrollView style={styles.container}>

      {/* Header Section */}
      <View style={styles.imageContainer}>
      <Image source={{uri: photoUri}} style={styles.carImage} />
        
        
        {/* <Image
          source={{ uri: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' }} // Replace with car image URL
          style={styles.carImage}
        /> */}
        <Text style={styles.price}>AED 127,500</Text>
        <Text style={styles.carName}>Kia Sorento EX TOP</Text>
        <Text style={styles.specs}>2024 | 0 km | European Specs</Text>
      </View>

      {/* Overview Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Car Overview</Text>
        <Text>Body Type: SUV</Text>
        <Text>Exterior Color: White</Text>
        <Text>Doors: 5+ doors</Text>
        <Text>Interior Color: Black</Text>
        <Text>Seating Capacity: 5 Seater</Text>
      </View>

      {/* Description Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Hi opinions 2.5 Engine only export</Text>
        <Text>This car only for Export.</Text>
        <Text>Posted On: 21st Nov, 2024</Text>
      </View>

      {/* Features Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Features</Text>
        <FlatList
          data={features}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.featureItem}>
              {/* <FontAwesome name={item.icon} size={16} color="green" style={styles.featureIcon} /> */}
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>

      {/* Map Section */}
      <View style={styles.mapContainer}>
        <Text style={styles.sectionTitle}>Map View</Text>
        {/* <MapView
          style={styles.map}
          initialRegion={{
            latitude: 25.2048,
            longitude: 55.2708,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{ latitude: 25.2048, longitude: 55.2708 }}
            title="Ras Al Khor Industrial 2"
            description="Ras Al Khor Industrial, Al Khor"
          />
        </MapView> */}
      </View>
    </ScrollView>
  );
};



export default DetailScreen;
