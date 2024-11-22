import { StyleSheet, Text } from 'react-native';
import React from 'react';


type Props = {
  text: string;
  heading?: string;
  headingNecessary: boolean;
};


export default function DescriptionText({ text, heading, headingNecessary }: Props) {
  if (headingNecessary === true) {
    return (
      <>
        <Text style={[styles.descriptionText, styles.headingText]}>{heading}</Text>
        <Text style={[styles.descriptionText, {top: 35}]}>{text}</Text>
      </>
      );
  }

  return (
    <>
      <Text style={styles.descriptionText}>{text}</Text>
    </>
    );
}


const styles = StyleSheet.create({
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


