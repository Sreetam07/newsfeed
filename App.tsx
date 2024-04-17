import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Alert } from 'react-native';
import SwipeButton from './src/screens/SwipeButton';

const App: React.FC = () => {
  const handleFetchNews = () => {
    Alert.alert("Right swipe")
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.swipeButtonContainer}>
          <SwipeButton onSwipe={handleFetchNews} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  swipeButtonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default App;
