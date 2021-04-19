import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import styles from './StoreCardStyles';

interface StoreCardProps {}

const StoreCard = (props: StoreCardProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/office-space.jpg')}
        style={styles.image}
      />
      <View style={styles.containerText}>
        <Text
          ellipsizeMode={'tail'}
          numberOfLines={1}
          style={styles.titlePlace}>
          Mediterania Garden Residence
        </Text>
        <Text
          ellipsizeMode={'tail'}
          numberOfLines={2}
          style={styles.subtitlePlace}>
          Main, Lobby, Apartment Mediterania Garden Residence 1 (Bougenville
          Tasdasdasdasdasdasdad)
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.btnViewMaps}>
            <Text style={styles.btnText}>View Maps</Text>
          </TouchableOpacity>
          <View />
        </View>
      </View>
    </View>
  );
};

export default StoreCard;
