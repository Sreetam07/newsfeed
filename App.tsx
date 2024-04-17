import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Alert, SafeAreaView } from 'react-native';
import SwipeButton from './src/screens/SwipeButton';
import useNewsData from './src/hooks/useNewsData';
import NewsCard from './src/screens/NewsCard';

const App: React.FC = () => {
  // Define the News API URL
  const NEWS_API_URL = 'https://newsapi.org/v2/everything?q=tesla&from=2024-04-16&to=2024-04-16&sortBy=popularity&apiKey=4ae7de8f989640a499d76121a8bf896a';

  // State variable to track whether news data is being fetched
  const [isFetching, setIsFetching] = useState(false);

  // Fetch news data using the useNewsData hook
  const { newsData } = useNewsData(NEWS_API_URL);

  // Function to handle the swipe action
  const handleFetchNews = () => {
    // Set isFetching to true when the swipe action occurs
    if (!isFetching) {
      setIsFetching(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.swipeButtonContainer}>
          {/* Render the SwipeButton component */}
          <SwipeButton onSwipe={handleFetchNews} />
          {/* Render "No news" text if news data is not yet fetched */}
          {!isFetching && <Text style={styles.noNewsText}>No news</Text>}
        </View>
        {/* Render NewsCard components for each article if news data is available */}
        {newsData && (
          <View style={styles.newsContainer}>
            {isFetching && newsData.articles.map((article: { title: string; description: string; urlToImage: string; publishedAt: string; }, index: React.Key | null | undefined) => (
              <NewsCard key={index} article={article} />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
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
  newsContainer: {
    paddingHorizontal: 10,
  },
});

export default App;
