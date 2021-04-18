import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './ClockButtonStyle';
interface ClockButtonProps {
  text: string;
  size: 'small' | 'big';
  position: 'left' | 'right';
  onPressLeft?: () => void;
  onPressRight?: () => void;
}

const ClockButton = (props: ClockButtonProps) => {
  const {text, size, position, onPressLeft, onPressRight} = props;
  return size == 'small' ? (
    <TouchableOpacity
      onPress={position == 'left' ? onPressLeft : onPressRight}
      style={styles(position).containerButton}>
      <Text style={styles().text}> {text} </Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={position == 'left' ? onPressLeft : onPressRight}
      style={styles(position).button}>
      <Text style={styles().text}> {text} </Text>
    </TouchableOpacity>
  );
};

export default ClockButton;
