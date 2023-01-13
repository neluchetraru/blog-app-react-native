import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as BlogContext} from '../context/BlogContext';
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation,  route }) => {
    const { state, editBlogPost } = useContext(BlogContext);

    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);


    return <BlogPostForm 
        onSubmit={(title, content) => {
            editBlogPost(route.params.id, title, content, () => {
                navigation.pop();
            });
        }}
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        />
};

const styles = StyleSheet.create({

});

export default EditScreen;