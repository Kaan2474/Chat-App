import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import TextField from '@/components/TextField';
import Button from '@/components/Buttons';

const Login = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.descriptionArea}>
        <Text style={styles.descriptionText}>Willkommen zurück! Loggen Sie sich
         ein, um sofort mit dem Chatten zu starten und wieder mit Ihren Freunden 
         in Verbindung zu treten.
        </Text>
      </SafeAreaView>

      <SafeAreaView style={styles.loginArea}>
        <TextField inputLabel="Nutzername"/>
        <TextField inputLabel='Passwort'></TextField>
        <Button label='Anmelden' />
        <Text style={styles.passwordText}>Passwort vergessen?</Text>
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
        flex: 1,
      },
      descriptionText: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 16
      },
      loginArea: {
        flex: 2,
        alignItems: "center"
      },
      passwordText: {
        top: 25, 
        textAlign: "center",
        color: "#FFFFFF"
      }
  });