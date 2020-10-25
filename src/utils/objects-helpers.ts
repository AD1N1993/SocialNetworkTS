import {UserDataType, usersPageType} from "../redux/usersReducer";

export const updateObjectInArray = (
    items: Array<UserDataType>,
    itemId: number,
    objPropName: "id"|"status"|"followed"|"name",
    newObjProps: {}
) => {

    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps};
        }
        return u;
    })
}