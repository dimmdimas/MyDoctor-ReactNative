import React, { useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors, fonts } from '../../../utils'

const Input = ({ label, value, onChangeText, secureTextEntry}) => {
    const[border, setBorder] = useState (colors, border);
    const onFocusForm = () => {
        setBorder(colors.tertiary)
    }
    const onBlurForm = () => {
        setBorder(colors.border)
    }
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput   
                style={styles.input(border)}
                onFocus={onFocusForm}
                onBlur={onBlurForm}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: (border) => ({
        borderWidth: 1,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 12,
        borderColor: border
    }),
    label: {
        fontSize: 16,
        color: colors.text.secondary,
        marginBottom: 6,
        fontFamily: fonts.primary[400]
    }
})
