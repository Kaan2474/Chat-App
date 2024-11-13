import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Buttons';
import DescriptionText from '@/components/DescriptionText';
import ProfileInformation from '@/components/ProfileInformation';

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
        <Text style={styles.userName}>Kaan2474</Text>
      </SafeAreaView>

      <ProfileInformation leftLabel='Vorname' leftAnswer="Kaan" rightLabel='Nachname' rightAnswer='Hisiroglu' bothLabels={true}/>
      <ProfileInformation leftLabel='Geburtsdatum' leftAnswer="21.09.1998" rightLabel='Alter' rightAnswer='26 Jahre' bothLabels={true}/>
      <ProfileInformation leftLabel='Mitglied seit' leftAnswer='12.09.2025' rightLabel='Freunde' rightAnswer='7' bothLabels={true}/>
      <ProfileInformation leftLabel='Email' leftAnswer='k.hsrglu@gmx.de' bothLabels={false}/>
      <ProfileInformation leftLabel='Zitat' leftAnswer="Niemals aufgeben!" bothLabels={false}/>
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
  },
  userName: {
    color: "#FFFFFF",
    fontSize: 16,
    top: 10
  }
});

export default Profile