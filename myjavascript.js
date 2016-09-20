$(document).ready(function() {
    var last_page = 1;
    var current_page = 1;
    $('.search').hide();
    $('.mainheading').show();
    $('.sectionheading').hide();
    $('.bottomcolumns').show();
    $('.searchresulttable').hide();
    $('.signup').hide();
    $('.login').hide();

    $('#homeLink').click(function(){
        document.title = 'GMUExchange - Home';
        $('.searchresulttable').hide();
        $('.bottomcolumns').show();
        $('.mainheading').show();
        $('.sectionheading').hide();
        $('.search').hide();
        $('.signup').hide();
        $('.login').hide();
    });
    $('#quickLoginButton').click(function(){
    });
    $('#logInLink').click(function(){
        document.title = 'GMUExchange - Log In';
        $('.searchresulttable').hide();
        $('.bottomcolumns').hide();
        $('.mainheading').hide();
        $('.sectionheading').show();
        $('.search').hide();
        $('.signup').hide();
        $('.login').show();
    });
    $('#signUpLink').click(function(){
        document.title = 'GMUExchange - Sign Up';
        $('.searchresulttable').hide();
        $('.bottomcolumns').hide();
        $('.mainheading').hide();
        $('.sectionheading').show();
        $('.search').hide();
        $('.signup').show();
        $('.login').hide();
    });
    $('#searchLink').click(function(){
        document.title = 'GMUExchange - Search';
        $('.searchresulttable').show();
        $('.bottomcolumns').hide();
        $('.mainheading').hide();
        $('.sectionheading').show();
        $('.search').show();
        $('.signup').hide();
        $('.login').hide();
    })
    $('#backLink').click(function(){
       history.back();
    });
});
