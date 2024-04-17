import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface NewsCardProps {
  article: {
    title: string;
    description: string;
    urlToImage?: string | null;
    publishedAt: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    // <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {article.urlToImage && ( 
          <Image source={{ uri: article.urlToImage }} style={styles.image} />
        )}
        <View style={styles.content}>
          <Text style={styles.title}>{article.title}</Text>
          <Text>{article.description}</Text>
        </View>
      </View>
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default NewsCard;
