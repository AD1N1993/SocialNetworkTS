import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2c4c11b3-b7ca-4a85-9ffe-5b500c4db141"
    }
})
export const usersAPI = {
    getUsers: (pageNumber: number, pageSize: number) => {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    unFollow: (userId: number) => {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data.resultCode;
        });
    },
    follow: (userId: number) => {
        return instance.post(`follow/${userId}`, {}).then(response => {
            return response.data.resultCode;
        });
    },
    checkLoginState: () => {
        return instance.get(`auth/me`);
    },
    getProfile: (userId: number) => {
        return instance.get(`profile/${userId}`);
    }
}
