import React from 'react';
import { StyleSheet,SafeAreaView, View,ImageBackground,FlatList,Text } from 'react-native';
import Form from '../components/Form';
import Header from '../components/Header';
import TodoItem from '../components/Todoitem';

export default function Todo() {


  const [todoItems,setTodoItems] = React.useState([
  ])


  const addTodo = (newItem) =>{
    setTodoItems([
      ...todoItems,
      {...newItem}
    ])
  }


  const deleteTodo = (id) =>{
    setTodoItems((newList)=>{
      return newList.filter(todoItems => id != todoItems.id)
    })
  }

  return (
    <SafeAreaView style={styles.app}>
      <Header/>
      <ImageBackground
        source={require('../assets/bg.jpg')}
        style={styles.bg}
       >
            <Form
              addTodo={addTodo}
            />

            {
              todoItems.length
              ? <Text>Всего: [{todoItems.length}]</Text>
              :null
            }
         <FlatList
          data={todoItems}
          keyExtractor={ item => item.id}
          renderItem={ ({item}) =>(
            <TodoItem
              item={item}
              deleteTodo={deleteTodo}
            />
          )}
         />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex:1,
  },
  app: {
    flex:1
  }
})