import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
            <Button
                title="Save Blog Post"
               
            />
        </View>
    );
};

const style = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        margin: 5,
        padding: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5
    }
});

export default BlogPostForm;