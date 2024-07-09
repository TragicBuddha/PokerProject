// MainScreen
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AddGameModal from './components/newGameModal';
import StatsModal from './components/statsModal';

// Loading in custom Font
// Needs to be brought in from its own file assets/fonts/file
const loadFonts = () => {
  return Font.loadAsync({
    'ComicNeue-Font': require('/Users/hj/Desktop/PokerProject/assets/fonts/ComicNeue-Bold.ttf'),
  });
};

// Executing application
export default function App() {

  // Creating inital variables and their state
  const [modalVisible, setModalVisible] = useState(false);
  const [statsModalVisible, setStatsModalVisible] = useState(false);

  // Function to toggle both our modals 
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const toggleStatsModal = () => {
    setStatsModalVisible(!statsModalVisible);
  };

  // ?? Creating a check to load our custom font (Not sure if this and loadFonts function should be on this page)
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  // Rendering our main screen 
  return (
    <ImageBackground
      source={require('/Users/hj/Desktop/PokerProject/assets/images/app_background.png')}
      style={styles.background}
    >
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Image
          style={styles.addNewGameButton}
          source={require('./assets/images/poker_chip.png')}
        />
      </TouchableOpacity>
      <AddGameModal 
        isVisible={modalVisible} 
        onClose={toggleModal} 
      />
      <TouchableOpacity onPress={toggleStatsModal}>
        <Image
          style={styles.seeStatsButton}
          source={require('./assets/images/stats_tab_icon.png')}
        />
      </TouchableOpacity>
      <StatsModal 
        isVisible={statsModalVisible} 
        onClose={toggleStatsModal} 
      />
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

// Styling for our container 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addNewGameButton: {
    marginTop: 70,
    height: 300,
    width: 300,
  },
  seeStatsButton: {
    height: 350,
    width: 350,
  },
  background: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
  }
});
