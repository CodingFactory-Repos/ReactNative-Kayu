import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Api, { getProductByName } from '../../service/apiCall';
import { TAB_BAR_NAVIGATOR_ROUTES } from '../../components/navigators/TabBarNavigation/TabNavigator.interfaces';


export const Search = () => {
    const [query, setQuery] = useState('');

    async function searchForProduct(productName: string)
    {
        console.log('Waiting data ...');
        let products = await getProductByName(productName);
        console.log('Data received.');
        products.forEach(element => console.log(element.name));
    }

    return(
        <SafeAreaView style={{flex: 1}}>
            <TextInput
                placeholder='Search a product...'
                style={styles.input}
                placeholderTextColor='grey'
                onChangeText={text => setQuery(text)}
            />
            <TouchableOpacity style={styles.button} onPress={() => searchForProduct(query)}>
                <Text>Search</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        textAlign: 'center'
    },
    button: {
        borderWidth: 1,
        marginLeft: '30%',
        marginRight: '30%',
        marginTop: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'limegreen',
        height: 40
    }
});