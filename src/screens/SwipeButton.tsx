import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

interface SwipeButtonProps {
  onSwipe: () => void; // Function to be called when the button is swiped
}

const SwipeButton: React.FC<SwipeButtonProps> = ({ onSwipe }) => {
  const swipeX = React.useRef(new Animated.Value(0)).current; // Animated value to track swipe position

  // Function to handle swipe gesture
  const handleSwipe = () => {
    Animated.timing(swipeX, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      onSwipe(); // Call the onSwipe function when swipe animation completes
      swipeX.setValue(0); // Reset swipe position
    });
  };

  // Style for animating the button's position
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
