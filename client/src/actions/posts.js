import * as api from '../api/index' //this means we will be able to use everything from the api

//Action Creators

//redux thunk  allows us to use this with astnc functions 

export const getPosts = () => async(dispatch) => {
    try{
        const { data } = await api.fetchPosts()

        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch(error){
        console.log(error.message)
    }
    
}

export const createPost = (post) => async(dispatch)=>{
    try {
        const { data } = await api.createPost(post)
        dispatch({type: 'CREATE',payload:data})
        
    } catch (error) {
        console.log(error.message);
        
    }
}
