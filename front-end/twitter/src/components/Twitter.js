import React, {useCallback, useEffect, useContext} from 'react';
import UpdateTwitter from './UpdateTwitter';
import axios from 'axios';
import AppContext from './AppContext';
import PostItem from './PostItem';

function Twitter(props) {
    const {state, dispatch} = useContext(AppContext);
    const {posts, user} = state;

    const getAllPosts = useCallback(async() => {
        try{
            const response = await axios.get("http://localhost:7000/api/v1/posts");
            const posts = response.data.data.posts;
            console.log(posts);
        }catch(error){
            console.log(error);
        }
    }, []) 

    useEffect(() => {
        getAllPosts();
    }, [getAllPosts]);

    const newPosts = posts.map((post, index) => {
        if(user){
            return post.author.name === user.userName ?
                {...post, isEditable: true} : post
        }else{
            return {...post, isEditable: false}
        }
    })

    return (
        <div className='list-twitter'>
            {
                newPosts.map((post, index) => {
                    <PostItem 
                        key={post._id}
                        post={post}
                    />
                })
            }
        </div>
    );
}

export default Twitter;