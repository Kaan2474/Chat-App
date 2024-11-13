import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
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
                <SafeAreaView style={styles.leftLabelArea}>
                    <Text style={styles.y}>{leftLabel}</Text>
                    <Text style={styles.x}>{leftAnswer}</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.rightLabelArea}>
                    <Text style={styles.y}>{rightLabel}</Text>
                    <Text style={styles.x}>{rightAnswer}</Text>
                </SafeAreaView>
            </SafeAreaView>
          );
    }

    return (
        <SafeAreaView style={styles.userInformationArea}>
            <SafeAreaView style={styles.leftLabelArea}>
                <Text style={styles.y}>{leftLabel}</Text>
                <Text style={styles.x}>{leftAnswer}</Text>
            </SafeAreaView>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    userInformationArea: {
        flex: 1/11,
        flexDirection: "column",
        borderBottomWidth: 2,
        borderColor: "#FFF",
        marginBottom: 5
    },
    leftLabelArea: {
        alignSelf: "flex-start",
    },
    rightLabelArea: {
        alignSelf: "flex-end",
        bottom: 35,
    },
    x: {
        color: "#FFFFFF",
        top: 10
    },
    y: {
        color: "#D9D9D9"
    }
});


