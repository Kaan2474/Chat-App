import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';


type Props = {
  leftLabel: string;
  leftAnswer: string;
  rightLabel?: string;
  rightAnswer?: string;
  bothLabels: boolean;
};

export default function ProfileInformation({ leftLabel, leftAnswer, rightLabel, rightAnswer, bothLabels }: Props) {
    if (bothLabels === true) {
        return (
            <SafeAreaView style={styles.userInformationArea}>
                <SafeAreaView style={styles.leftArea}>
                    <Text style={styles.labelText}>{leftLabel}</Text>
                    <Text style={styles.answerText}>{leftAnswer}</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.rightArea}>
                    <Text style={styles.labelText}>{rightLabel}</Text>
                    <Text style={styles.answerText}>{rightAnswer}</Text>
                </SafeAreaView>
            </SafeAreaView>
          );
    }

    return (
        <SafeAreaView style={styles.userInformationArea}>
            <SafeAreaView style={styles.leftArea}>
                <Text style={styles.labelText}>{leftLabel}</Text>
                <Text style={styles.answerText}>{leftAnswer}</Text>
            </SafeAreaView>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    userInformationArea: {
        flex: 1/9,
        flexDirection: "column",
        borderBottomWidth: 2,
        borderColor: "#FFF",
        marginBottom: 5,
    },
    leftArea: {
        alignSelf: "flex-start",
    },
    rightArea: {
        alignSelf: "flex-end",
        bottom: 35,
    },
    labelText: {
        color: "#D9D9D9",
        textAlign: "left",
        fontSize: 16
    },
    answerText: {
        color: "#FFFFFF",
        top: 10,
        textAlign: "left",
        fontSize: 16
    },
});


