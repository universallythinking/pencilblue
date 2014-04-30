/*

    Interface for changing your password
    
    @author Blake Callens <blake.callens@gmail.com>
    @copyright PencilBlue 2013, All rights reserved

*/

$(document).ready(function()
{
    $('#change_password_form').validate(
    {
        rules:
        {
            current_password:
            {
                required: true
            },
            new_password:
            {
                required: true
            },
            confirm_password:
            {
                required: true
            }
        }
    });
});

function checkPasswordMatch(keepType)
{
    if(typeof keepType === 'undefined')
    {
        $('#new_password').attr('type', 'password');
    }

    if($('#new_password').val() != $('#confirm_password').val() || $('#new_password').val().length == 0)
    {
        $('#password_check').attr('class', 'fa fa-thumbs-down');
        $('#password_check').attr('style', 'color: #AA0000');
    }
    else
    {
        $('#password_check').attr('class', 'fa fa-thumbs-up');
        $('#password_check').attr('style', 'color: #00AA00');
    }
}

function generatePassword()
{
    var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '?'];
    
    var password = '';
    while(password.length < 8)
    {
        password = password.concat(characters[parseInt(Math.random() * characters.length)]);
    }
    
    $('#new_password').attr('type', 'text');
    $('#new_password').val(password);
    $('#confirm_password').val(password);
    checkPasswordMatch(true);
}