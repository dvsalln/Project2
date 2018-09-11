setTimeout(1000);
$("#add-btn").on("click", function(event){
    event.preventDefault();

    var newProfile = {
        // profilePhoto: 
        firstName: $("#userFName").val().trim(), 
        lastName: $("#userLName").val().trim(),
        email: $("#userEmail").val().trim(),
        age: $("#userAge").val().trim(),
        password: $("#userPassword").val().trim(),
        gender: $("#userGender").val().trim(),
        occupation: $("#userOccupation").val().trim(),
        location: $("#userLocation").val().trim(),
        summary: $("#userSummary").val().trim(),
        interests: $("#userInterests").val().trim()
    };  
    setTimeout(2000);
    $.post("/api/new", newProfile)
        .then(function(data){
            console.log(data);
        });

        $("#userFName").val("");
        $("#userLName").val("");
        $("#userEmail").val("");
        $("#userAge").val("");
        $("#userPassword").val("");
        $("#userGender").val("");
        $("#userOccupation").val("");
        $("#userLocation").val("");
        $("#userSummary").val("");
        $("#userInterests").val("");
});
setTimeout(2000);