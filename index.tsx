import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return <View style={styles.redBox} />;
}

const styles = StyleSheet.create({
  redBox: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 100,
  },
});
