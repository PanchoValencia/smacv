$('input').prop('aucomplete' , 'off'); //desactivar el aucompletado de los inputs

$('input , select').each(function(){
    $(this).on('focus' , function(){
        $(this).closest('div').find('label').animate({
            'font-size' : '.9em',
            'top' : 0
        });
    });
    $(this).on('focusout' , function(){
        if ( $(this).val().length == 0 )
        {
            $(this).closest('div').find('label').animate({
                'font-size' : '1em',
                'top' : '30'
            });
        }
    });
});

$(document).ready(function(){
    $('input , select').each(function(){
        if ( $(this).val().length == 0 )
        {
            $(this).closest('div').find('label').css({
                'font-size' : '1em',
                'top' : '30'
            });
        }
        else
        {
            $(this).closest('div').find('label').css({
                'font-size' : '.9em',
                'top' : 0
            });
        }
    });
});
