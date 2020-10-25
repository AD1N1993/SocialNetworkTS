import profileReducer, {addPostActionCreator, deletePostAC, ProfilePageType} from "./profileReducer";
let startState: ProfilePageType = {
    postData: [
        {id: 1, post: "It's first post", likes: 10},
        {id: 2, post: "It's second post", likes: 110},
        {id: 3, post: "It's third post", likes: 22},
        {id: 4, post: "It's fourth post", likes: 1},
    ],
    profile: null,
    status: "",
}
describe("test profile reducer", () => {
    it("new post should be added", () => {

        let action = addPostActionCreator("YourDeveloper");

        let endState = profileReducer(startState, action);

        expect(endState.postData[4].post).toBe("YourDeveloper");
        expect(endState.postData.length).toBe(5);

    });

    it("post should be delete",()=>{

        let action = deletePostAC(1);

        let endState = profileReducer(startState,action);

        expect(endState.postData.length).toBe(3);
    })

})



