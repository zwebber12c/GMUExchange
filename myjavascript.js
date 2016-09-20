//Set up starter data
var users = [{ first_name: "Joe", last_name: "Smith", email: "jsmith@gmu.edu", password: "123"},
    { first_name: "Jane", last_name: "Doe", email: "jdoe@gmu.edu", password: "123"},
    { first_name: "Lisa", last_name: "Johnson", email: "ljohnson@gmu.edu", password: "123"},
    { first_name: "Mary", last_name: "Walter", email: "mwalter@gmu.edu", password: "123"}];

var features = [{name: "Feature 1", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {name: "Feature 2", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {name: "Feature 3", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}];

var items = [{image: "IMAGE 1", description: "DESCRIPTION 1", price: "$XXX.XX"},
    {image: "IMAGE 2", description: "DESCRIPTION 2", price: "$XXX.XX"},
    {image: "IMAGE 3", description: "DESCRIPTION 3", price: "$XXX.XX"},
    {image: "IMAGE 4", description: "DESCRIPTION 4", price: "$XXX.XX"}];


$(document).ready(function() {
    //push state onto history.
    //https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
    history.pushState({activePane: 'Home'},'');
    $('.mainHeading').show();
    $('.sectionHeading').hide();
    /*
     Initial attempt after https://piazza.com/class/irw2gs1od6u14p?cid=34:

     $('#content').html(
     '<div class = "bottomColumns"><h1 class = "features">Features</h1><table><tr>'
     );
     for (feature of features) {
     $('#content').append('<td><h3>' + feature.name + '</h3>' + feature.detail + '</td>'); //FIX
     }
     $('#content').append('</tr></table></div>');

     The class did not apply to the items being added until the newer method of concat() was applied
     */
    //Collect information from starter data; populate bottomColumns with Features
    var temp = '<div class = "bottomColumns"><h1 class = "features">Features</h1><table><tr>';
    for (feature of features) {
        temp = temp.concat('<td><h3>' + feature.name + '</h3>' + feature.detail + '</td>');
    }
    temp = temp.concat('</tr></table></div>');
    $('#content').html(temp);


    //Home Link tab
    $('#homeLink').click(function(){
        history.pushState({activePane: 'Home'},'');
        //window.alert(history.state.activePane + ' ' + history.length);
        //window.history.go(-2);
        document.title = 'GMUExchange - Home';
        $('#subtitle').html('<h2 class="subtitle">Tag line</h2>');
        $('.searchResultTable').hide();
        $('.mainHeading').show();
        $('.sectionHeading').hide();
        //Collect information from starter data; populate bottomColumns with Features
        var temp = '<div class = "bottomColumns" data-list-size="3"><h1 class = "features">Features</h1><table><tr>';
        for (feature of features) {
            temp = temp.concat('<td><h3>' + feature.name + '</h3>' + feature.detail + '</td>');
        }
        temp = temp.concat('</tr></table></div>');
        $('#content').html(temp);

    });

    //quick login button behavior - home page
    $('#quickLoginButton').click(quickLogInUser);


    function quickLogInUser(){
        //get values
        var username = $('#quickLoginEmail').val();
        var password = $('#quickLoginPassword').val();
        //Collect information from starter data; check username and password credentials
        for( var user of users) {
            //check validity, update page
            if (user.email == username && user.password == password) {
                $('.rightMenuLinks').hide();
                $('#userName').html('Welcome, ' + user.first_name + '!');
                $('.mainHeading').hide();
                $('.sectionHeading').show();
                $('#subtitle').html('<h2 class="subtitle">Tag line</h2>');
                $('#logOut').css({"visibility": "visible"}); //http://stackoverflow.com/questions/3730035/how-to-change-css-using-jquery
            }
        }
    }

    //log in page
    $('#logInLink').click(function(){
        history.pushState({activePane: 'logIn'},'');
        document.title = 'GMUExchange - Log In';
        $('#subtitle').html('<h2 class="subtitle">Log In</h2>');
        $('.mainHeading').hide();
        $('.sectionHeading').show();
        $('#content').html(
            '<form class = "creds"><br>Email:<br>' +
            '<input type="text" placeholder="GMU e-mail" id = "regularLogInEmail" pattern="[a-z0-9]*@(masonlive\\.)?gmu\\.edu" />' +
            '<br><br>Password:<br><input type="password" placeholder = "password" id = "regularLogInPassword" /><br><br>' +
            '<button class = "button" id = "regularLogInButton">Log In</button></form>'
        );
    });

    //button in log in page - hehavior
    $(document).on("click",'#regularLogInButton',function(){
        var username = $('#regularLogInEmail').val();
        var password = $('#regularLogInPassword').val();
        //Collect information from starter data; check username and password credentials
        for( var user of users) {
            if (user.email == username && user.password == password) {
                $('.rightMenuLinks').hide();
                $('#userName').html('Welcome, ' + user.first_name + '!');
                $('.mainHeading').hide();
                $('.sectionHeading').show();
                $('#subtitle').html('<h2 class="subtitle">Tag line</h2>');
                $('#logOut').css({"visibility": "visible"}); //http://stackoverflow.com/questions/3730035/how-to-change-css-using-jquery
            }
        }
    });

    //page to sign up
    $('#signUpLink').click(function(){
        history.pushState({activePane: 'signUp'},'');
        document.title = 'GMUExchange - Sign Up';
        $('#subtitle').html('<h2 class="subtitle">Sign Up</h2>');
        $('.mainHeading').hide();
        $('.sectionHeading').show();
        $('.bottomColumns').hide();
        $('#content').html(
            '<form class = "creds">' +
            '<br>Email:<br><input type="text" placeholder="GMU e-mail" pattern="[a-z0-9]*@(masonlive\\.)?gmu\\.edu"><br>' +
            '<br>Password:<br><input type="password" placeholder = "password"><br>' +
            '<br>First name:<br><input type="text" placeholder = "First Name" id="firstName"><br>' +
            '<br>Last name:<br><input type="text" id="lastName" placeholder = "Last Name"><br>' +
            '<br><button class = "button" id = "signUpButton">Sign Up</button></form>'
        );
    });

    //search page
    $('#searchLink').click(function(){
        history.pushState({activePane: 'Search'},'');
        document.title = 'GMUExchange - Search';
        $('#subtitle').html('<h2 class="subtitle">Search</h2>');
        $('.mainHeading').hide();
        $('.sectionHeading').show();
        $('.bottomColumns').hide();

        //Collect information from starter data; populate searchBoxTable with Items
        var temp = '<div class = "search" data-list-size="4"><table class = "searchBoxTable"><tr><td><label>' +
            '<p>Search: <input type = "text" placeholder = "Search terms" id = "searchBox"/></p></label></td><td>' +
            '<button class = "button" id = "searchButton">Submit</button></td></tr></table>' +
            '<table class = "searchResultTable"><tr><th>Image</th><th>Description</th><th>Price</th></tr>';
        for (item of items) {
            temp = temp.concat('<tr><td>' + item.image + '</td><td>'+ item.description +
                '</td><td>'+ item.price+'</td></tr>');
        }
        temp = temp.concat('</table></div>');
        $('#content').html(temp);
    });

    //log out page
    $('#logOut').click(function(){
        $('.rightMenuLinks').show();
        $('#userName').css({"visibility": "hidden"});
        $('#logOut').css({"visibility": "hidden"}); //http://stackoverflow.com/questions/3730035/how-to-change-css-using-jquery
    });

    //handling of back button
    $('#backLink').click(function(){
        history.back(1);
    });

});