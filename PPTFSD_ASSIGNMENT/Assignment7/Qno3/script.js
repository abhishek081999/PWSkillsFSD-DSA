function getUserData() {
    var username = document.getElementById("username-input").value;
    var apiUrl = "https://api.github.com/users/" + username;

    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (data.message === "Not Found") {
                alert("User not found!");
            } else {
                displayUserData(data);
            }
        })
        .catch(function (error) {
            console.log(error);
            alert("An error occurred while fetching user data.");
        });
}

function displayUserData(user) {
    console.log(JSON.stringify(user))
    var avatar = user.avatar_url;
    var name = user.name;
    var bio=user.bio;
    var repos=user.public_repos;
    var following=user.following;
    var followers=user.followers;
    var loc=user.location;


    document.getElementById("user-avatar").src = avatar;
    document.getElementById("user-name").textContent = `Name: ${name}`;
    document.getElementById("user-bio").textContent = `Bio: ${bio.substring(0,30)}`;
    document.getElementById("user-repos").textContent = `Repos: ${repos}`;
    document.getElementById("user-following").textContent = `Following: ${following}`;
    document.getElementById("user-followers").textContent = `Followers: ${followers}`;
    document.getElementById("user-loc").textContent = `Location: ${loc}`;
}
