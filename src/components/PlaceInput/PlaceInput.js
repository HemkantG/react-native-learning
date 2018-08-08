import React, { Component } from 'react'
import { StyleSheet, View, Button, TextInput } from 'react-native'
class PlaceInput extends Component {
    state = {
        place: '',
    }

    onNameChangeHandler = (value) => {
        this.setState({
            place: value,
        })
    }

    placeSubmitHandler = () => {
        if (this.state.place.trim() === "")
            return;
        this.props.onPlaceAdded(this.state.place)
    }


    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInpunt}
                    placeholder="Enter place here!"
                    onChangeText={this.onNameChangeHandler} />
                <Button
                    style={styles.buttonAdd}
                    title="Add"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    onPress={this.placeSubmitHandler}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    placeInpunt: {
        width: "70%"
    },
    buttonAdd: {
        width: "30%"
    },
})
export default PlaceInput