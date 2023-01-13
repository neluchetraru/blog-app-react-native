import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context as BlogContext} from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation, route }) => {    
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: route.params.id })}>
                    <EvilIcons name="pencil" size={30} />
                </TouchableOpacity>
            )
        })
    }, [navigation])
    const { state } = useContext(BlogContext);
    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ShowScreen;