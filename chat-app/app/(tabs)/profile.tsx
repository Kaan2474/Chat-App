import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ImageViewer from '@/components/ImageViewer';
import DescriptionText from '@/components/DescriptionText';
import ProfileInformation from '@/components/ProfileInformation';


const logo = require('@/assets/images/logo_4.png');
const PlaceholderImage = require('@/assets/images/default_user.jpg');


const Profile = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <ImageViewer imgSource={logo} theme='logo'/>

      <SafeAreaView style={styles.descriptionArea}>
        <DescriptionText text='Das ist Ihr Profil! Hier können Sie Ihre
        Informationen ansehen und Ihr Profilbild ändern!' headingNecessary={false}/>
      </SafeAreaView>

      <SafeAreaView style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
        <Text style={[styles.userInformation, {top: 7.5}]}>Kaan2474</Text>
      </SafeAreaView>

      <View style={styles.userInformationArea}>
        <View>
          <Text style={styles.userInformation}>Vorname</Text>
          <Text style={[styles.userInformation, {marginBottom: 7.5}]}>Kaan</Text>
          <Text style={styles.userInformation}>Geburtsdatum</Text>
          <Text style={[styles.userInformation, {marginBottom: 7.5}]}>21.09.1998</Text>
          <Text style={styles.userInformation}>E-Mail</Text>
          <Text style={[styles.userInformation, {marginBottom: 7.5}]}>k.hsrglu@gmx.de</Text>
          <Text style={[styles.userInformation]}>Zitat: </Text>
          <Text style={[styles.userInformation]}>Niemals aufgeben!</Text>
        </View>

        <View style={{marginLeft: 133.5}}>
          <Text style={styles.userInformation}>Nachname</Text>
          <Text style={[styles.userInformation, {marginBottom: 7.5}]}>Hisiroglu</Text>
          <Text style={styles.userInformation}>Alter</Text>
          <Text style={[styles.userInformation, {marginBottom: 7.5}]}>26 Jahre alt</Text>
          <Text style={styles.userInformation}>Nutzername</Text>
          <Text style={[styles.userInformation, {marginBottom: 7.5}]}>Kaan2474</Text>
        </View>

      </View>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2D34",
    padding: 20,
  },
  descriptionArea: {
    flex: 1/3,
    justifyContent: "center",
    borderTopWidth: 2,
    borderTopColor: "#FFFFFF",
    borderBottomWidth: 2,
    borderBottomColor: "#FFFFFF"
  },
  imageContainer: {
    flex: 1/2,
    alignItems: "center",
    justifyContent: "center",
  },
  userInformationArea: {
    flexDirection: "row", 
    marginTop: 30, 
  },
  userInformation: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default Profile