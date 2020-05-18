import React, { useState, useReducer } from 'react'

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: 'Blog Post #' + state.length }]
        default:
            return state;
    }
};



export const BlogProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    const addBlogPost = () => {
        dispatch({type:'add_blogpost'})
    };
    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
        {children}
    </BlogContext.Provider>




    // State method
    // const [blogPosts, setBlogPosts] = useState([]);
    // const addBlogPost = () => {
    //     setBlogPosts([
    //         ...blogPosts,
    //         {title: 'Blog Post #' + blogPosts.length}
    //     ]);
    // };

    //     // children is another component
    // return <BlogContext.Provider value={{data:blogPosts, addBlogPost}}>
    //     {children}
    // </BlogContext.Provider>
}

export default BlogContext;