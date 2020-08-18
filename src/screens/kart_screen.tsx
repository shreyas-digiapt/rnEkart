import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Props
interface KartProps {}

// Kart Component
export default ({}: KartProps) => {
  return (
    <View style={styles.container}>
      <Text>Kart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
