import { StyleSheet, Text } from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Button from '@/components/Buttons';
import ImageViewer from '@/components/ImageViewer';
import React from 'react'


const logo = require('@/assets/images/logo_4.png');


const SignUpSuccess = () => {
  return (
    <SafeAreaProvider style={{backgroundColor: "#2A2D34", padding: 20}}>
      <ImageViewer imgSource={logo} theme='logo'/>
      <SafeAreaView style={styles.border}></SafeAreaView>

      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.descriptionArea}>
          <Text style= {styles.descriptionText}>
            Glückwunsch! Ihre Registrierung hat funktioniert und
            Ihr Konto wurde erfolgreich erstellt. Sie können 
            jetzt loslegen und mit Ihren Freunden chatten. 
            Viel Spaß bei MesajX!
          </Text>
          <Button label='Weiter' />
        </SafeAreaView>
      </SafeAreaView>

    </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  border: {
    borderTopWidth: 2,
    borderTopColor: "#FFFFFF",
  },
  descriptionArea: {
    flex: 1/3,
    alignItems: "center",
    justifyContent: "space-around",
  },
  descriptionText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 18
  },
  });

export default SignUpSuccess