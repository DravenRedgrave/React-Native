import React from 'react'
import {TouchableOpacity,Text} from 'react-native'
function FilmItem(film) {
    return (
        <TouchableOpacity>
            <Text>
            {film.title}
            </Text>
        </TouchableOpacity>
    )
}

export default FilmItem
