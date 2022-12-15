const UserStatsComponent = (user = {
    firstName: "first name",
    lastName: "last name",
    email: "email name",
    username: "username",
    password: "password",
    userType: "USER",
    dateJoined: new Date()
}) => {
    const timeOnBookworm = new Date() - user.dateJoined;
    const daysOnBookworm = timeOnBookworm / (1000 * 3600 * 24);
    return(
        <>
            Days on Bookworm: {daysOnBookworm}.
        </>
    )
};

export default UserStatsComponent;