import axios from "axios";
import {UserDataType} from "../redux/usersReducer";
import {ProfileType} from "../redux/profileReducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2c4c11b3-b7ca-4a85-9ffe-5b500c4db141"
    }
})
export const usersAPI = {
    getUsers: (pageNumber: number, pageSize: number) => {
        return instance.get<GetUsersResponse>(`users?page=${pageNumber}&count=${pageSize}`)
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

    getProfile: (userId: number) => {
        console.warn("Obsolete method. Please use profileAPI object");
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile: (userId: number) => {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(statusValue: string) {
        return instance.put(`profile/status`, {status: statusValue})
    },
    updatePhoto(photo: Blob) {
        const formData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile(updateProfileModel:ProfileType){
        return instance.put("/profile",{...updateProfileModel, aboutMe:"sss"})
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}
//response types

type ResponseType<D = {}> = {
    data: D
    status: number
    statusText: string
}

type GetUsersResponse = {
    error: null | string
    items: Array<UserDataType>
    totalCount: number
}