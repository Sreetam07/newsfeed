// src/components/SwipeButton.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

interface SwipeButtonProps {
  onSwipe: () => void;
}

const SwipeButton: React.FC<SwipeButtonProps> = ({ onSwipe }) => {
  const swipeX = React.useRef(new Animated.Value(0)).current;

  const handleSwipe = () => {
    Animated.timing(swipeX, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      onSwipe();
      swipeX.setValue(0);
    });
  };

  const swipeStyle = {
    transform: [
      {
        translateX: swipeX.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 100],
        }),
      },
    ],
  };

  return (
    <TouchableOpacity onPress={handleSwipe}>
      <Animated.View style={[styles.container, swipeStyle]}>
        <Text style={styles.text}>Swipe to Fetch</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default SwipeButton;
