import React from 'react';
import { StyleSheet,SafeAreaView, View,ImageBackground } from 'react-native';
import Header from '../components/Header';

export default function Todo() {
  return (
    <SafeAreaView style={styles.app}>
      <Header/>
      <ImageBackground
        source={require('../assets/bg.jpg')}
        style={styles.bg}
       >

      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex:1,
  },
  app: {
    flex:1
  }
})