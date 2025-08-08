import React from 'react';
import {  View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.redBox} />
  );
}

const styles = StyleSheet.create({
  redBox: {
    width: 200,
    height: 150,
    backgroundColor: '#ff4444',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#cc0000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    alignSelf: 'center',
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
