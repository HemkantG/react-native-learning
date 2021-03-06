import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import ListItem from '../ListItem/ListItem'

const placeList = (props) => {
    const placesOutput = props.places.map((placeItem, i) =>
        (<ListItem key={i} image={placeItem.image} placeName={placeItem.place} onItemPressed={() => props.itemSelected(placeItem.place)} ></ListItem>)
    )
    return (
        <ScrollView style={styles.listContainer}>
            {placesOutput}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});
export default placeList;