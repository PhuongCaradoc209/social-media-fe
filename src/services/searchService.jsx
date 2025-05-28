// services/userService.js
import axios from 'axios';

export const searchUsersService = async (username) => { 
    await new Promise(resolve => setTimeout(resolve, 500));
    const res = await axios.get(`https://social-media-be-y4yd.onrender.com/users/search`, {
        params: { username },
        withCredentials: true,
    });
    return res.data;
};

export const searchHashtagsService = async (keyword) => {
    const res = await axios.get(`https://social-media-be-y4yd.onrender.com/posts/hashtags/search`, {
        params: { keyword },
        withCredentials: true,
    });
    return res.data;
};