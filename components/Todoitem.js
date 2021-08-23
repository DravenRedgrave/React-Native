import React from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';


const  TodoItem =({item,deleteTodo}) => {
    return (
        <TouchableOpacity style={styles.todo}>
            <Text style={styles.text} onLongPress={()=> deleteTodo(item.id)}>
               {item.text}
            </Text>
            <TouchableOpacity onPress={()=> deleteTodo(item.id)}>
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