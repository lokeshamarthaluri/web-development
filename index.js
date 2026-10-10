var users = [
    {
        "name": "John Doe",
        "gender": "Male",
        "image": "john.png"
    },
    {
        "name": "Jane Smith",
        "gender": "Female",
        "image": "jane.png"
    }
];

let currentIndex = 0;

function toggle() {
    console.log("hii from js : toggle");
    
    // Switch index between 0 and 1
    currentIndex = (currentIndex === 0) ? 1 : 0;
    let currentUser = users[currentIndex];

    // Update the DOM elements
    document.getElementById("user-name").innerText = currentUser.name;
    document.getElementById("user-gender").innerText = currentUser.gender;
    document.getElementById("user-avatar").src = currentUser.image;


}

function randomUser(){
    fetch("https://randomuser.me/api/")
    .then(function(rawdata){
        return rawdata.json();
    })
    .then(function(jsonData){
        var user=jsonData.results[0];
        var gender=user.gender;
        var fullName=user.name.title + " " + user.name.first + " "+ user.name.last;
        var image=user.picture.large;
        document.getElementById("user-name").innerText = fullName;
        document.getElementById("user-gender").innerText = gender;
        document.getElementById("user-avatar").src = image;
    })
}