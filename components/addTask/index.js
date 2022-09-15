import React from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "./styles.js";

const AddTask = ({ onChangeText, placeholder, addItem, textButton, item, color }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                value={item}
                onChangeText={onChangeText}
            />
            <Button
                title={textButton}
                onPress={addItem}
                color={color}
            />
      </View>
    )
}

export default AddTask;