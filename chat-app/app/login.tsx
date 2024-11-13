import { StyleSheet, Text } from 'react-native'
import React from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import TextField from '@/components/TextField';
import Button from '@/components/Buttons';
import ImageViewer from '@/components/ImageViewer';

const Login = () => {
  const logo = require('@/assets/images/logo_4.png');
  return (
    <SafeAreaProvider style={styles.container}>
      <ImageViewer imgSource={logo} theme='logo'/>
      <SafeAreaView style={styles.descriptionArea}>
        <Text style={styles.descriptionText}>Willkommen zurück! Loggen Sie sich
         ein, um sofort mit dem Chatten zu starten und wieder mit Ihren Freunden 
         in Verbindung zu treten.
        </Text>
      </SafeAreaView>

      <SafeAreaView style={styles.loginArea}>
        <TextField inputLabel="Nutzername"/>
        <TextField inputLabel='Passwort'></TextField>
        <SafeAreaView style={styles.buttonArea}>
          <Button label='Anmelden'></Button>
          <Text style={styles.passwordText}>Passwort vergessen?</Text>
        </SafeAreaView>
      </SafeAreaView>
      
    </SafeAreaProvider>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: "wrap",
        backgroundColor: "#2A2D34",
        padding: 20,
      },
      descriptionArea: {
        flex: 1/4,
        justifyContent: "center",
        borderTopWidth: 2,
        borderTopColor: "#FFFFFF",
        borderBottomWidth: 2,
        borderBottomColor: "#FFFFFF"
      },
      descriptionText: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 16
      },
      loginArea: {
        flex: 1/2,
        alignItems: "center",
        justifyContent: "center",
      },
      buttonArea: {
        flex: 1/4,
        top: 20
      },
      passwordText: {
        textAlign: "center",
        color: "#FFFFFF",
        top: 7.5
      }
  });