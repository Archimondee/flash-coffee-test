import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  containerText: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  titlePlace: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  subtitlePlace: {
    paddingTop: 5,
    color: '#848484',
    fontSize: 12,
  },
  btnViewMaps: {
    marginTop: 20,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: '#fb3667',
  },
  btnText: {
    color: '#fb3667',
    fontWeight: 'bold',
  },
});

export default styles;
