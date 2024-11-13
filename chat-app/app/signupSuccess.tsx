import { StyleSheet, Text, View } from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Button from '@/components/Buttons';
import ImageViewer from '@/components/ImageViewer';
import React from 'react'

const LoginSuccess = () => {
  const logo = require('@/assets/images/logo_4.png');
  return (
    <SafeAreaProvider style={styles.container}>
      <ImageViewer imgSource={logo} theme='logo'/>
      <SafeAreaView style={styles.border}>
        <Text style= {styles.descriptionText}></Text>
      </SafeAreaView>

      <SafeAreaView style={styles.descriptionArea}>
        <Text style= {styles.descriptionText}>
        Glückwunsch! Ihre Registrierung hat funktioniert und
         Ihr Konto wurde erfolgreich erstellt. Sie können 
         jetzt loslegen und mit Ihren Freunden chatten. 
         Viel Spaß bei MesajX!
        </Text>
        <SafeAreaView style={styles.buttonArea}>
          <Button label='Weiter' />
        </SafeAreaView>
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
      border: {
        flex: 1/4,
        borderTopWidth: 2,
        borderTopColor: "#FFFFFF",
      },
      descriptionArea: {
        flex: 1/3,
        alignItems: "center",
        justifyContent: "center",
      },
      buttonArea: {
        flex: 1/6,
        top: 30,
      },
      descriptionText: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 16
      },
  });

export default LoginSuccess