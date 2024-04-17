# News Feed App

News Feed App is a React Native application that fetches and displays news articles from the News API. The app features a custom swipe control named "Swipe to Fetch button" to trigger the fetching of news data.

## Features

- Fetch news articles from the News API.
- Display news articles in a card view with images.
- Custom swipe control to fetch news data.
- Clean and intuitive user interface.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Sreetam07/newsfeed.git

2. **Navigate to the project directory:**
   cd news-feed-app

3. **Install dependencies:**
   npm install

4. **Start the application:**
   For Android:
   npx react-native run-android

   For iOS:
   npx react-native run-ios

5. **To configure the News API key:**
  Obtain an API key from the News API.
  Replace the placeholder API key in the `src/screens/App.tsx` file with your API key.
  `const NEWS_API_URL = 'https://newsapi.org/v2/everything?q=tesla&from=2024-04-16&to=2024-04-16&sortBy=popularity&apiKey=YOUR_API_KEY';`





