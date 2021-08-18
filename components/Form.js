import React from 'react';
import {View,StyleSheet,TextInput,Button} from 'react-native';
import uuid from 'react-native-uuid';

function Form({addTodo}) {
    const [inputValue,setInputValue] = React.useState('')
    return (
        <View>
            <TextInput
                placeholder="Введите название задачи"
                style={styles.TextInput}
                onChangeText={text => setInputValue(text)}
                value={inputValue}
            />
            <Button
                title="Добавить задачу"
                style={styles.btn}
                disabled={!inputValue}
                onPress={() => {
                    addTodo({
                        id:uuid.v4(),
                        text: inputValue
                    })
                    setInputValue('')
                }}
            />
        </View>
    );
}

export default Form

const  styles = StyleSheet.create({
    TextInput:{
        padding: '15px',
        margin: '15px',
        backgroundColor:'white',
        shadowColor:'black',
        shadowOffset:{ width:1,height:1},
        shadowOpacity:.3,
        shadowRadius:3
    }
})