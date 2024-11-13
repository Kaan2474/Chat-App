import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Buttons';
import DescriptionText from '@/components/DescriptionText';

const Profile = () => {
  const logo = require('@/assets/images/logo_4.png');
  const PlaceholderImage = require('@/assets/images/default_user.jpg');

  return (
    <SafeAreaProvider style={styles.container}>
      <ImageViewer imgSource={logo} theme='logo'/>
      <DescriptionText text='Das ist Ihr Profil! Hier können Sie Ihre
       Informationen ansehen und Ihr Profilbild ändern!'/>

      <SafeAreaView style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
        <Text style={{color: "#FFFFFF", top: 10, fontSize: 16}}>Kaan2474</Text>
      </SafeAreaView>

      <SafeAreaView style={styles.userInformationArea}>
        <Text style={{textAlign:"left"}}>Vorname</Text>
        <Text style={{textAlign:"right", alignSelf:"flex-end"}}>Nachname</Text>
        </SafeAreaView>
        <Text>Geburtstag</Text>
        <Text>Alter</Text>
        <Text>Email</Text>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: "#2A2D34",
    padding: 20,
  },
  imageContainer: {
    flex: 1/4,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  userInformationArea: {
    backgroundColor: "orange",
  }
});

export default Profile