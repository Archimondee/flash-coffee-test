import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './SectionLabelStyles';

interface SectionLabelProps {
  leftText: string;
  rightText: string;
  onPress?: () => void;
}

const SectionLabel = (props: SectionLabelProps) => {
  const {leftText, rightText, onPress} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.leftText}>{leftText}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.rightText}> {rightText} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionLabel;
