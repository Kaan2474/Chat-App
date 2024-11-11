import { Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';
import Button from '@/components/Buttons';
import ImageViewer from '@/components/ImageViewer';
import TextField from '@/components/TextField';

const PlaceholderImage = require('@/assets/images/DSC_7208.jpg');

export default function Index() {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
        <Button label='Foto hinzufügen' theme='image'></Button>
      </SafeAreaView>
      
      <SafeAreaView style={styles.textfieldContainer}>
        <TextField inputLabel='Vorname'/>
        <TextField inputLabel='Nachname'/>
        <TextField inputLabel='Geburtsdatum'/>
        <TextField inputLabel='Email'/>
        <TextField inputLabel='Nutzername'/>
        <TextField inputLabel='Passwort'/>
        
        <Button label='Registrieren'/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    flexDirection: "column",
    padding: 20,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  textfieldContainer: {
    flex: 2,
    alignItems: "center",
  },
});
