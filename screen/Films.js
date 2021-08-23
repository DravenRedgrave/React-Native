import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import FilmItem from '../components/FilmItem';

export default function Films() {

  const [films,setFilms] = React.useState([])

  React.useEffect(()=>{
    const getFilms = async() => {
      const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=124214124512&language=en-US&page=1')
      setFilms(res.data.results)
    }
    getFilms()
  },[])

  return (
    <View>
      <Text>Films</Text>
      <FlatList
      data={films}
      keyExtractor={item =>item.id}
      renderItem={(item)=>(
        <FilmItem
          film={item}
        />
      )}
      />
    </View>
  );
}