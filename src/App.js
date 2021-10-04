import React, {useState} from 'react'
import './styles/post.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

let App = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'}
    ])
    const [title, setTitle] = useState('')

    let addNewPost = (e) => {
        e.preventDefault()
        console.log(title)
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Name of post"
                />
                <MyInput type="text" placeholder="Description"/>
                <MyButton onClick={addNewPost}>Create new post</MyButton>
            </form>

            <PostList posts={posts} title='List of posts Javascript'/>
        </div>
    )
}

export default App