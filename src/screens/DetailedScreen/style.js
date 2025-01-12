import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    imageContainer: {
      alignItems: 'center',
      padding: 16,
    borderTopLeftRadius:50,
    
    },
    carImage: {
      width: '100%',
      height: 200,
    //   borderRadius: 8,
    },
    price: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 8,
    },
    carName: {
      fontSize: 18,
      fontWeight: '600',
    },
    specs: {
      fontSize: 14,
      color: 'gray',
    },
    sectionContainer: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    featureItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 4,
    },
    featureIcon: {
      marginRight: 8,
    },
    mapContainer: {
      height: 200,
      margin: 16,
    },
    map: {
      flex: 1,
      borderRadius: 8,
    },
  });
  export default styles;