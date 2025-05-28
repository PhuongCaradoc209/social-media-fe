import axios from 'axios'
import React from 'react'

export const fetchPost = async (page = 1, userId = null) => {
    try {
        const queryParams = new URLSearchParams({ page });

        if (userId) {
        queryParams.append('userId', userId);
        }

        const res = await axios.get(`https://social-media-be-y4yd.onrender.com/posts?${queryParams.toString()}`,{
            withCredentials: true,
        });
        console.log(res.data);
        return res.data; 
    } catch (err) {
        console.error("Error fetching posts:", err);
        throw err; 
    }
};
export default fetchPost

export const fetchLatestPost = async (userId) => {
    try {
        const res = await axios.get(`https://social-media-be-y4yd.onrender.com/posts/${userId}/latestPost`, {
            withCredentials: true,
        });
        return res.data; 
    } catch (err) {
        console.error("Error fetching latest post:", err);
        throw err;
    }
};  