import axios from "axios";

// Create one axios instance
const API = axios.create({
    baseURL: "https://social-media-be-y4yd.onrender.com/notifications",
    withCredentials: true,
});

export const getNotifications = async (page = 1) => {
    const res = await API.get(`/?page=${page}`);
    return res.data;
};
