import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';


type Props = {
  text: string;
  heading?: string;
  headingNecessary: boolean;
};

export default function DescriptionText({ text, heading, headingNecessary }: Props) {
  if (headingNecessary === true) {
    return (
      <SafeAreaView style={styles.descriptionArea}>
        <Text style={[styles.descriptionText, styles.headingText]}>{heading}</Text>
        <Text style={[styles.descriptionText, {top: 35}]}>{text}</Text>
      </SafeAreaView>
      );
  }

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
  headingText: {
    fontWeight: "bold",
    fontSize: 32,
  },
  descriptionText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16
  },
});


