import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Alert } from 'react-native';
import SwipeButton from './src/screens/SwipeButton';

const App: React.FC = () => {
  const [isFetching, setIsFetching] = useState(false);

  const handleFetchNews = () => {
    Alert.alert("Right swipe")
    setIsFetching(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.swipeButtonContainer}>
          <SwipeButton onSwipe={handleFetchNews} />
          {!isFetching && <Text style={styles.noNewsText}>No news</Text>}
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
  noNewsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#555',
  },
});

export default App;
