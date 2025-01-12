import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SvgUri} from 'react-native-svg';

const HomeScreen = () => {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchBrands();
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await fetch(
        'https://auction.riolabz.com/v1/brand/get/all/',
      );
      const json = await response.json();
      // console.log('data' ,json);
      setBrands(json.data);
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  const handleBrandRender = ({item, index}) => {
    return (
      <View>
        <Text style={{paddingLeft: 15, fontWeight: '600'}}>"{item.name}"</Text>
      </View>
    );
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        'https://auction.riolabz.com/v1/vehicletype/get/all/',
      );
      const json = await response.json();
      // console.log('data' ,json);
      setCategories(json.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleCategoriesRender = ({item, index}) => {
    // console.log(item.image);
    return (
      <View style={styles.grid}>
        <View key={index} style={styles.categoryCard}>
          <SvgUri uri={item.image} width={125} height={125} />
        </View>
        <Text style={styles.categoryText}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View>
      <View style={{}}>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={styles.header}>
          <Image source={require('../../Assets/images/applogo.png')} style={styles.logo} />
          <View style={{right: 90, flexDirection: 'column'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold',lineHeight:17}}>Auto</Text>
            <Text style={{fontSize: 18, fontWeight: 'light',lineHeight:17}}>Smart</Text>
          </View>

          <Text style={styles.welcomeText}>Welcome to AutoSmart!</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {/* Popular Car Brands */}
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            marginVertical: 25,
          }}>
          <AntDesign name="tagso" size={24} color="black" paddingLeft={10} />
          <Text style={styles.sectionTitle}>Popular Car Brands</Text>
        </View>

        <View>
          <FlatList
            horizontal
            data={brands}
            showsHorizontalScrollIndicator={false}
            renderItem={handleBrandRender}
          />
        </View>

        {/* Finance Companies */}
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            marginVertical: 25,
          }}>
          <MaterialCommunityIcons name="finance" size={24} color="black" paddingLeft={10} />
          <Text style={styles.sectionTitle}>Finance Companies</Text>
        </View>
        <View style={styles.row}>
          <Text>No Data</Text>
        </View>

        {/* EMI Calculator */}
        <TouchableOpacity style={styles.emiCard}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons name="calculator-variant-outline" size={20} color="black"/>
                <Text style={styles.emiText}>Calculate Your EMI</Text>              </View>
              
              <Text style={styles.emiSubText}>
                Find the best EMI plan for your budget.
              </Text>
            </View>

            <View style={styles.startNow}>
              <Text style={styles.startNowText}>Start Now</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Categories */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 25,
          }}>
          <Ionicons name="apps-outline" size={24} color="black" paddingLeft={10} />
          <Text style={styles.sectionTitle}>Categories</Text>
          </View>

        <View>
          <FlatList
            numColumns={2}
            data={categories}
            renderItem={handleCategoriesRender}
          />
        </View>

        {/* Footer */}
        <View style={styles.footerTextView}>
          <Text style={styles.footerText}>Privacy Policy</Text>
          <Text style={styles.footerTextAnd}>and</Text>
          <Text style={styles.footerText}>Terms & Conditions</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
