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
                <SafeAreaView>
                    <Text style={styles.labelText}>{leftLabel}</Text>
                    <Text style={styles.answerText}>{leftAnswer}</Text>
                </SafeAreaView>
                <SafeAreaView>
                    <Text style={styles.labelText}>{rightLabel}</Text>
                    <Text style={styles.answerText}>{rightAnswer}</Text>
                </SafeAreaView>
            </SafeAreaView>
          );
    }

    return (
        <SafeAreaView style={styles.userInformationArea}>
            <SafeAreaView>
                <Text style={styles.labelText}>{leftLabel}</Text>
                <Text style={styles.answerText}>{leftAnswer}</Text>
            </SafeAreaView>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    userInformationArea: {
        flex: 1/10,
        borderColor: "#FFF",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    labelText: {
        color: "#D9D9D9",
        fontSize: 16
    },
    answerText: {
        color: "#FFFFFF",
        fontSize: 16,
        top: 7.5,
    },
});


