import React from 'react'
import { Modal, Image, View, Text, Button, StyleSheet } from 'react-native'
import placeImage from '../../assets/nature.png'

const placedetail = (props) => {
    let imageContent = null;
    let imagePlace = null;

    if (props.selectedPlace !== null) {
        imageContent = <Image source={props.selectedPlace.image} style={styles.placeImage}></Image>
        imagePlace = <Text style={styles.placeName}>{props.selectedPlace.place}</Text>
    }

    return (
        <Modal animationType="slide" visible={props.selectedPlace !== null} onRequestClose={props.onModalClosed}>
            <View style={styles.modalContainer}>
                {imageContent}
                {imagePlace}
                <View style={styles.buttonContainer}>
                    <Button onPress={()=>props.onItemDeleted(props.selectedPlace.place)} title="Delete" color='red' />
                    <Button onPress={props.onModalClosed} title="Close" color='blue' />
                </View>
            </View>
        </Modal>
    )

};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    placeImage: {
        width: '100%',
        height: 200
    },
    placeName: {
        fontWeight: 'bold',
        fontSize: 28,
    }
})
export default placedetail;