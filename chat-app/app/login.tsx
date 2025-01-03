import { StyleSheet, Text } from 'react-native'
import React from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import TextField from '@/components/TextField';
import Button from '@/components/Buttons';
import ImageViewer from '@/components/ImageViewer';
import DescriptionText from '@/components/DescriptionText';


const logo = require('@/assets/images/logo_4.png');


const Login = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <ImageViewer imgSource={logo} theme='logo'/>
      <SafeAreaView style={styles.descriptionArea}>
        <DescriptionText text='Willkommen zurück! Loggen Sie sich ein, um
        sofort mit dem Chatten zu starten und wieder mit Ihren Freunden
        in Verbindung zu treten.' headingNecessary={false}/>
      </SafeAreaView>

      <SafeAreaView style={styles.loginArea}>
        <TextField inputLabel="Nutzername"/>
        <TextField inputLabel='Passwort'></TextField>
        <Button label='Anmelden'></Button>
      </SafeAreaView>

      <Text style={styles.passwordText}>Passwort vergessen?</Text>
      
    </SafeAreaProvider>
  )
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
    alignItems: "center",
    borderTopWidth: 2,
    borderTopColor: "#FFFFFF",
    borderBottomWidth: 2,
    borderBottomColor: "#FFFFFF"
  },
  loginArea: {
    flex: 1/2,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  passwordText: {
    textAlign: "center",
    color: "#FFFFFF",
    bottom: 50
  }
});

  export default Login