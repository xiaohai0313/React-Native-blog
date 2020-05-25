# React-Native-blog

const [state, dispatch] = useReducer [reducer, initialValue]
const [value, setValue] = useState('')
一样的 reducer 代表绑定的reducer 那个纯文本function , initialValue给state  
dispatch === setValue 改变call

## v1.
在被provider包围的子组件里面  任一组件都可以使用useContext to get context value

const blogPosts = [{title: "Blog Post #1"}, {title: "Blog Post #2}]

return <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>


<FlatList
     data={blogPosts}				//总的数据
     keyExtractor={blogPost => blogPost.title}
     renderItem={({item}) => {					//每个item就相当于一个blogPost
	return <Text>{item.title}</Text>
     }}

## v2. 
子组件call dispatch 使context里面接收指令更改数据

addBlogPost is callback for child components => blogProvider will rerender

## v3. 
use useReducer to replace all the function body code

## v4.
To avoid duplicate code for different context, say comment, image, blogpost etc
create a auto context creation 
addBlogPost = dispatch => { 				//This dispatch just a name for createDataContext to call
     return () => { dispatch({type'add_blogpost'});		// This dispatch is bind with reducer 
     };
};

PS {state , data} the name need identical
Conculsion: 
provider give the range of child components to get context
{state, action} give opptunity to modify context data through callback 
It's like simple redux for us
:)
