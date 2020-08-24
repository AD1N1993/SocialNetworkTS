const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";

type UserLocationType = {
    country: string
    city: string
}

type UserDataType = {
    id: number
    firstName: string
    status: string
    followed: boolean
    location: UserLocationType
}
export type usersPageType = {
    usersData: Array<UserDataType>
}

type followACType = {
    type: "FOLLOW"
    userID: number
}
type unFollowACType = {
    type: "UN_FOLLOW"
    userID: number
}

type ActionsTypes = followACType | unFollowACType;

let initialState: usersPageType = {
    usersData: [
        {
            id: 1,
            followed: false,
            firstName: "Dmytri",
            status: "I am a Boss",
            location: {country: "Belarus", city: "Minsk"}
        },
        {
            id: 2,
            followed: true,
            firstName: "Alex",
            status: "I am a SuperBoss",
            location: {country: "Russia", city: "Moscow"}
        },
        {
            id: 3,
            followed: false,
            firstName: "Kat",
            status: "I am a PrimaryBoss",
            location: {country: "Ukraine", city: "Kiefollowed:truev,"}
        },

    ],
}

const usersReducer = (state: usersPageType = initialState, action: ActionsTypes): usersPageType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        case UN_FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };

        default:
            return state
    }
}

export const followAC = (userID: number): ActionsTypes => ({type: FOLLOW, userID: userID});

export const unFollowAC = (userID: number): ActionsTypes => ({type: UN_FOLLOW, userID: userID});

export default usersReducer;