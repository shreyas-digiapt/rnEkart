import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Props
interface StatusScreenProps {}

// StatusScreen Component
export default ({}: StatusScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>StatusScreen</Text>
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
