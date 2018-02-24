$(function() {
    $('.delete-material-type').on('click', function() {
        console.log();
        $('form#materialDelete').append($('<input />', {type: 'hidden', name: 'toDel', value: $(this).attr('id')})).submit();
    });
    $('.delete-submarine-type').on('click', function() {
        console.log();
        $('form#subDelete').append($('<input />', {type: 'hidden', name: 'toDel', value: $(this).attr('id')})).submit();
    })
});