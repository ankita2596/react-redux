const selectUser = (user) => {
    console.log("You selected user:", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user,
    }
};
export default selectUser;