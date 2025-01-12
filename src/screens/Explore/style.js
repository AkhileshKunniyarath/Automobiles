import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#Fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e7eff1',
    paddingBottom: 20,
    // elevation: 3,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#e7eff1',
    paddingTop: 10,
  },
  location: {
    fontSize: 14,
    marginHorizontal: 5,
  },
  searchIcon: {
    marginLeft: 30,
    paddingBottom: 10,
    position: 'absolute',
    zIndex: 1,
    flex: 1,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 12,
    paddingHorizontal: 35,
    marginHorizontal: 10,
  },
  filter: {
    marginHorizontal: 10,
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    marginHorizontal: 12,
    overflow: 'hidden',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor:'lightblue',
    paddingBottom: 15,
    marginBottom: 20,
  },
  carImage: {
    width: '95%',
    height: 225,
    resizeMode:'cover',
    borderColor:'#999',
    borderWidth:0.2,
    borderRadius: 10,
    alignSelf:'center',

  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'semibold',
    lineHeight: 25,
  },
  price: {
    fontSize: 25,
    color: '#0f0f0f',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  emiFrom:{
    fontSize: 15,
    color: '#555555',
  },
  emi: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f0f0f',
  },
  specs: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    marginVertical: 5,
  },
  specView: {
    flexDirection:'row',
    alignItems:'center',
    borderWidth:0.5,
    borderColor:'lightblue',
    // padding: 2,
    marginHorizontal:25,
    paddingHorizontal:5,
    borderRadius:5,
  },
  spec: {
    fontSize: 12,
    color: '#777777',
    paddingLeft:5
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  contactButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#0f0f0f',
  },
  contactButtonText: {
    color: '#0f0f0f',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
});

export default styles;
