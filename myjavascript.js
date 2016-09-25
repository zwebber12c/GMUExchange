//Set up starter data
var users = [{ first_name: "Joe", last_name: "Smith", email: "jsmith@gmu.edu", password: "123"},
    { first_name: "Jane", last_name: "Doe", email: "jdoe@gmu.edu", password: "123"},
    { first_name: "Lisa", last_name: "Johnson", email: "ljohnson@gmu.edu", password: "123"},
    { first_name: "Mary", last_name: "Walter", email: "mwalter@gmu.edu", password: "123"}];

var features = [{name: "Feature 1", detail: "Feat 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {name: "Feature 2", detail: "Feat 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {name: "Feature 3", detail: "Feat 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}];

/*var items = [{image: "IMAGE 1", description: "DESCRIPTION 1", price: "$XXX.XX"},
    {image: "IMAGE 2", description: "DESCRIPTION 2", price: "$XXX.XX"},
    {image: "IMAGE 3", description: "DESCRIPTION 3", price: "$XXX.XX"},
    {image: "IMAGE 4", description: "DESCRIPTION 4", price: "$XXX.XX"}];*/
var items = [];


$(document).ready(function() {
    //push state onto history.
    //https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
    history.pushState({activePane: 'Home'},'');
    //show main heading, hide section heading
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
        $('#content').html(
            '<form class = "creds">' +
            '<br>Email:<br><input type="text" id = "email" placeholder="GMU e-mail" pattern="[a-z0-9]*@(masonlive\\.)?gmu\\.edu"><br>' +
            '<br>Password:<br><input type="password" id = "password" placeholder = "password"><br>' +
            '<br>First name:<br><input type="text" placeholder = "First Name" id="firstName"><br>' +
            '<br>Last name:<br><input type="text" id="lastName" placeholder = "Last Name"><br>' +
            '<br><button class = "button" id = "signUpButton" onlick = "createUser();">Sign Up</button></form>'
        );
         function createUser(){             //this takes data entered into the sign up fields and creates a new user and add its to the user list
            var user = {
                    email: document.getElementById('email').value,
                    password: document.getElementById('password').value,
                    first_name: document.getElementById('nameFirst').value,
                    last_name: document.getElementById('nameLast').value
            };
            users.push(user);
         }
    });

    //search page
    $('#searchLink').click(function(){
        history.pushState({activePane: 'Search'},'');
        document.title = 'GMUExchange - Search';
        $('#subtitle').html('<h2 class="subtitle">Search</h2>');
        $('.mainHeading').hide();
        $('.sectionHeading').show();
        $('.newItem').hide();

        //Collect information from starter data; populate searchBoxTable with Items
        var temp = '<div class = "search" data-list-size="4"><table class = "searchBoxTable"><tr><td><label>' +
            '<p>Search: <input type = "text" placeholder = "Search terms" id = "searchBox"/></p></label></td><td>' +
            '<button class = "button" id = "searchButton">Submit</button></td></tr></table>' +
            '<button class = "button" id = "postButton">Post new item</button></td></tr></table>' +
            '<div class = "newItem" disabled = "true"><form class = newItemForm" action = "">' +
            '<input type = "file" name = "image" placeholder = "Image"/><input type = "text2" name = "item" value = "" placeholder = "description"/>' +
            '<input type = "text2" name = "price" value = "" placeholder = "Price"/><input type = "text2" name = "sellerContact" value = "" placeholder = "Contact Info"/>' +
            '<button class = "button" id = cotactSeller">Contact Seller</button>' +
            '<button class = "button" id = "postItem">Submit Item</button></div>' +
            '<table class = "searchResultTable"><tr><th>Image</th><th>Description</th><th>Price</th><th>Seller Contact</th></tr>';
        for (item of items) {
            temp = temp.concat('<tr><td>' + item.image + '</td><td>'+ item.description +
                '</td><td>'+ item.price+'</td></tr>');
        }
        temp = temp.concat('</table></div>');
        $('#content').html(temp);
        $(document).on("click", '#postButton', function(){
            $('newItem').show();
            $('#postItem').click(function(){
                var item = { 
                    image: $('#image').val(), item: $('#item').val(), price: $('#price').val(), seller: $('#sellerContact').val()
                           };
                items.push(item);
                $('newItem').hide();
            }); 
        });
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
