import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    // elevation: 50,
    borderTopWidth: 0.21,
    borderTopColor:'lightblue',
  },
  touchContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    marginBottom: 5,
  },
  footerText: {
    color: 'black',
    fontSize: 14,
    // fontFamily: 'Lato-Bold',
    // marginTop: 0.002,
  },
  
});

export default styles;
