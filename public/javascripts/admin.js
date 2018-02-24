$(function() {
    $('.delete-type').on('click', function() {
        console.log();
        $('form#delete').append($('<input />', {type: 'hidden', name: 'toDel', value: $(this).attr('id')})).submit();
    })
});