import { Text, StyleSheet, ScrollView, View } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';
import TextField from '@/components/TextField';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from '@/components/Buttons';
import ImageViewer from '@/components/ImageViewer';


const PlaceholderImage = require('@/assets/images/default_user.jpg');


export default function SignUp() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "bottom", "left", "right"]}>
        <ScrollView>
          <SafeAreaView style={styles.imageContainer}>
            <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
            <View style={styles.buttonContainer}>
              <Button label='Foto hinzufügen' theme='image' onPress={pickImageAsync}></Button>
            </View>
          </SafeAreaView>
      
          <SafeAreaView style={styles.textfieldContainer}>
            <TextField inputLabel='Vorname'></TextField>
            <TextField inputLabel='Nachname'></TextField>
            <TextField inputLabel='Geburtsdatum'></TextField>
            <TextField inputLabel='E-Mail'></TextField>
            <TextField inputLabel='Nutzername'></TextField>
            <TextField inputLabel='Passwort'></TextField>
            <TextField inputLabel='Passwort bestätigen'></TextField>
            <View style={styles.buttonContainer}>
              <Button label='Registrieren'></Button>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.loginText}>Du hast bereits ein Konto? Anmelden</Text>
            </View>
          </SafeAreaView>

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    padding: 20,
  },
  imageContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 10
  },
  textfieldContainer: {
    marginTop: 5,
    alignItems: "center",
  },
  loginText: {
    color: "#FFF",
  },
});