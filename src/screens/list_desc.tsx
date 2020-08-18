import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Props
interface ListDescProps {}

// ListDesc Component
export default ({}: ListDescProps) => {
  return (
    <View style={styles.container}>
      <Text>ListDesc</Text>
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
