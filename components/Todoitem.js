import React from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';


const  TodoItem =({item}) => {
    return (
        <TouchableOpacity style={styles.todo}>
            <Text style={styles.text}>
               {item.text}
            </Text>
            <TouchableOpacity>
                <Text>
                    &#128465;
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
};

export default TodoItem

const styles =  StyleSheet.create({
    todo:{
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        padding: '10px',
        backgroundColor:'white',
        margin: '5px',
        borderRadius:'5px'
    },
    text:{

    }
})