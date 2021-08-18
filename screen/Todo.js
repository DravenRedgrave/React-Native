import React from 'react';
import { StyleSheet,SafeAreaView, View,ImageBackground,FlatList } from 'react-native';
import Form from '../components/Form';
import Header from '../components/Header';
import TodoItem from '../components/Todoitem';

export default function Todo() {


  const [todoItems,setTodoItems] = React.useState([
    {id:1,text:'React Native 1'},
    {id:2,text:'React Native 2'},
    {id:3,text:'React Native 3'},
  ])


  const addTodo = (newItem) =>{
    setTodoItems([
      ...todoItems,
      {...newItem}
    ])
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
         <FlatList
          data={todoItems}
          keyExtractor={ item => item.id}
          renderItem={ ({item}) =>(
            <TodoItem
              item={item}
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