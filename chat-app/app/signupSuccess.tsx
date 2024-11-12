import { StyleSheet, Text, View } from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Button from '@/components/Buttons';
import React from 'react'

const LoginSuccess = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.descriptionArea}>
        <Text style= {styles.descriptionText}>
        Glückwunsch! Ihre Registrierung hat funktioniert und
         Ihr Konto wurde erfolgreich erstellt. Sie können 
         jetzt loslegen und mit Ihren Freunden chatten. 
         Viel Spaß bei MesajX!
        </Text>
        <Button label='Weiter' />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: "wrap",
        backgroundColor: "#2A2D34",
        padding: 20,
      },
      descriptionArea: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      descriptionText: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 16
      },
  });

export default LoginSuccess