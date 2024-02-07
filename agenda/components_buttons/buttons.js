import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './estilo_buttons';

const Button = ({ title, onPress, icon }) => (
  <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
    {icon && <Image source={icon} style={styles.buttonIcon} />}
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
