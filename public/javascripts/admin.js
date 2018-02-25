$(function() {
    $('.delete-material-type').on('click', function() {
        $('form#materialDelete').append($('<input />', {type: 'hidden', name: 'toDel', value: $(this).attr('id')})).submit();
    });
    $('.delete-submarine-type').on('click', function() {
        $('form#subDelete').append($('<input />', {type: 'hidden', name: 'toDel', value: $(this).attr('id')})).submit();
    });
    $('.delete-level-type').on('click', function() {
        $('form#levelDelete').append($('<input />', {type: 'hidden', name: 'toDel', value: $(this).attr('id')})).submit();
    });
});