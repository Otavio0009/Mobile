import Slider from "@react-native-community/slider";
import { View, Text, StyleSheet, Pressable } from "react-native";
import {useState} from "react";
import { Button } from "./Button";

export function Randomerator() {
    const [value, setValue] = useState(0)

    function incrementar() {
        setValue(value + 1)
    }

    function decrementar () {
        if (value > 0) {
            setValue(value - 1)
        }
    }

    function zera () {
        setValue(value - value)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Rodomerator
            </Text>
            <View style={styles.content}>
                <Text style={styles.result}>{value}</Text>
                
                <Slider
                    style={{height: 30}}
                    minimumValue={6}
                    maximumValue={100}
                    thumbTintColor="#3f75fc"
                    maximumTrackTintColor="#33aaff"
                    minimumTrackTintColor="#c7dceb"
                    value={1}
                />

                <Slider
                    style={{height: 30}}
                    minimumValue={6}
                    maximumValue={100}
                    thumbTintColor="#3f75fc"
                    maximumTrackTintColor="#33aaff"
                    minimumTrackTintColor="#c7dceb"
                    value={100}
                />
                <Button text={"Decrementar"}
                onClick={decrementar}/>

                <Button text={"Incrementar"}
                onClick={incrementar}/>

                <Button text={"Zera"}
                onClick={zera}/>

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
})