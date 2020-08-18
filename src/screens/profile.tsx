import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Props
interface ProfileProps {}

// Profile Component
export default ({}: ProfileProps) => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
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
