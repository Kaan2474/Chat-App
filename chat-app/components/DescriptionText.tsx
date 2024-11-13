import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';


type Props = {
  text: string;
};

export default function DescriptionText({ text }: Props) {
    return (
        <SafeAreaView style={styles.descriptionArea}>
        <Text style={styles.descriptionText}>{text}</Text>
      </SafeAreaView>
      );
}

const styles = StyleSheet.create({
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
});


