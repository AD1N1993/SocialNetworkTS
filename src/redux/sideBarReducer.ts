
import {ActionsTypes, FriendDataType, FriendsDataType} from "./store";


let initialState:FriendsDataType = {
    friendsData: [
        {
            id: 1,
            avatarLink: "https://sun9-44.userapi.com/impf/Og0nBt7TJGbkuKkZKSaqt4wGoKimHb0QgNyy6Q/9qoUsJzdhEY.jpg?size=200x0&quality=90&sign=7e863cd91046de72f55c911f94995105&ava=1",
            name: "Alena Svirida"
        },
        {
            id: 2,
            avatarLink: "https://vignette.wikia.nocookie.net/avatar/images/f/f4/3%D1%8521_%D0%90%D0%B0%D0%BD%D0%B3.jpg/revision/latest?cb=20110327121409&path-prefix=ru",
            name: "Seregaaaaaa Serg"
        }
        ,
        {
            id: 3,
            avatarLink:
                "https://png.pngtree.com/png-clipart/20190906/original/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-png-image_4561296.jpg",
            name: "Dinossssssssssss Zag"
        }
    ]
}

const sideBarReducer = (state= initialState,action:ActionsTypes): FriendsDataType => {


    return state
}

export default sideBarReducer;