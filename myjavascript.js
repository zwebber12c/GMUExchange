var users = [{ first_name: "Joe", last_name: "Smith", email: "jsmith@gmu.edu", password: "123"},
    { first_name: "Jane", last_name: "Doe", email: "jdoe@gmu.edu", password: "123"},
    { first_name: "Lisa", last_name: "Johnson", email: "ljohnson@gmu.edu", password: "123"},
    { first_name: "Mary", last_name: "Walter", email: "mwalter@gmu.edu", password: "123"}];

$(document).ready(function() {
    $('#content').html(
        '<div class = "bottomColumns"><h1 class = "features">Features</h1><table><tr><td>' +
        '<h3>Feature 1</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>' +
        '<td><h3>Feature 2</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>' +
        '<td><h3>Feature 3</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>' +
        '</tr></table></div>'
    )
    $('.sectionHeading').hide();

    $('#homeLink').click(function(){
        document.title = 'GMUExchange - Home';
        $('#subtitle').html('<h2 class="subtitle">Tag line</h2>');
        $('.searchResultTable').hide();
        $('.mainHeading').show();
        $('.sectionHeading').hide();
        $('#content').html(
            '<div class = "bottomColumns"><h1 class = "features">Features</h1><table><tr><td>' +
            '<h3>Feature 1</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>' +
            '<td><h3>Feature 2</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>' +
            '<td><h3>Feature 3</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>' +
            '</tr></table></div>'
        )
    });

    $('#quickLoginButton').click(function(){
        var username = $('#quickLoginEmail').val();
        var password = $('#quickLoginPassword').val();
        for( var user of users) {
            if (user.email == username && user.password == password) {
                $('.rightMenuLinks').hide();
                $('#userName').html('Welcome, ' + user.first_name + '!');
                $('.mainHeading').hide();
                $('.sectionHeading').show();
                $('#subtitle').html('<h2 class="subtitle">Tag line</h2>');
                $('#logOut').css({"visibility": "visible"});
            }
        }
     });

    $('#logInLink').click(function(){
        document.title = 'GMUExchange - Log In';
        $('#subtitle').html('<h2 class="subtitle">Log In</h2>');
        $('.mainHeading').hide();
        $('.sectionHeading').show();
        $('.bottomColumns').hide();
        $('#content').html(
            '<form class = "creds"><br>Email:<input type="text" name="email">' +
            '<br><br>Password:<input type="password" name="password"><br><br>' +
            '<button class = "button" id = "logInButton">Log In</button>'
        );
    });

    $('#signUpLink').click(function(){
        document.title = 'GMUExchange - Sign Up';
        $('#subtitle').html('<h2 class="subtitle">Sign Up</h2>');
        $('.mainHeading').hide();
        $('.sectionHeading').show();
        $('.bottomColumns').hide();
        $('#content').html(
            '<form class = "creds">' +
            '<br>Email:<input type="text" name="email" pattern="[a-z0-9]*@(masonlive\.)?gmu\.edu"><br>' +
            '<br>Password:<input type = "password" name = "password"><br>' +
            '<br>First name:<input type="text" name="firstname"><br>' +
            '<br>Last name:<input type="text" name="lastname"><br>' +
            '<br><button class = "button" id = "signUpButton">Sign Up</button></form>'
        );
    });

    $('#searchLink').click(function(){
        document.title = 'GMUExchange - Search';
        $('#subtitle').html('<h2 class="subtitle">Search</h2>');
        $('.mainHeading').hide();
        $('.sectionHeading').show();
        $('.bottomColumns').hide();
        $('#content').html(
            '<table class = "searchBoxTable"><tr><td><label>' +
            '<p>Search: <input type = "text" placeholder = "Search terms" /></p></label></td><td>' +
            '<button class = "button" id = "searchButton">Submit</button></td></tr></table>'
        );
    });

    $('#logOut').click(function(){
        $('.rightMenuLinks').show();
        $('#userName').html('');
        $('#logOut').css({"visibility": "hidden"});
    });

    $('#backLink').click(function(){
       history.back(1);
    });
});
