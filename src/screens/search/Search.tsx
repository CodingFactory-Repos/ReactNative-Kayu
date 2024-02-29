import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import { getProductByName } from '../../service/apiCall';
import {Colors} from '../../utils/colors.ts';

export const Search = () => {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);

    async function searchForProduct(productName: string) {
        let products = await getProductByName(productName);
        setProducts(products);
    }
    
    const renderProducts = () => {
        return products.map((product, index) => (
            <View key={index} style={styles.card}>
                <View style={styles.header}>
                    <Image style={styles.image} source={{ uri: product.image }} />
                    <View style={styles.headerText}>
                        <Text style={styles.title}>{product.name}</Text>
                        <Text style={styles.subtitle}>{product.energy100g}kg</Text>
                    </View>
                    <Text style={styles.badge}>
                    {product.nutriscore} - "{product.nutriscore_point}/100"
                    </Text>
                </View>
            </View>
        ));
    };

    return (
        <SafeAreaView style={styles.screen}>
            <TextInput
                placeholder='Search a product...'
                style={styles.input}
                onChangeText={text => {
                        setQuery(text);
                        if(text == '')
                        {
                            searchForProduct(query);
                            setProducts([]);
                        }
                    }
                }
            />
            <TouchableOpacity style={styles.button} onPress={() => searchForProduct(query)}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
            <ScrollView>
                {renderProducts()}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    input: {
        borderRadius: 20,
        borderColor: '#E5E7EB',
        borderWidth: 1,
        margin: '5%',
        padding: 10,
    },
    button: {
        backgroundColor: '#4B5563',
        marginHorizontal: '30%',
        marginTop: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        margin: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    headerText: {
        flex: 1, 
        marginLeft: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16, 
    },
    subtitle: {
        color: '#4B5563',
        fontSize: 14, 
    },
    badge: {
        backgroundColor: '#FECACA',
        color: '#B91C1C',
        borderRadius: 20,
        padding: 4,
        fontSize: 12, 
    },
});

export default Search;