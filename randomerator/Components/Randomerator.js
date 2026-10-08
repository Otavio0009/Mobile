import Slider from "@react-native-community/slider";
import { View, Text, StyleSheet, Pressable } from "react-native";

export function Randomerator() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Rodomerator
            </Text>
            <View style={styles.content}>
                <Text style={styles.result}>100</Text>
                
                <Slider
                    style={{height: 30}}
                    minimumValue={6}
                    maximumValue={100}
                    thumbTintColor="#3f75fc"
                    maximumTrackTintColor="#33aaff"
                    minimumTrackTintColor="#c7dceb"
                />
                <Pressable style={styles.buttonPimary}>
                    <Text style={styles.buttonText}>
                        Generate
                    </Text>
                </Pressable>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#d5d5d5",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 32,
        gap: 32,
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#565656",
    },

    content: {
        backgroundColor: "#fff",
        width: "100%",
        padding: 16,
        borderRadius: 8,

    },

    result: {
        fontSize: 48,
        fontWeight: "bolde",
        textAlign: "center",
        color: "#6c6c6c",

    },

    buttonPimary: {
        backgroundColor: "#0099ff",
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
    },

    buttonText: {
        color: "#fff",
        fontSize: 24,
        textAlign: "center",

    },
})