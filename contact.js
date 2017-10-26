var $form = $('form#contact-form'),
url = 'https://script.google.com/macros/s/AKfycbzutdHQQ35URKd6478r4JkVmNj8LbzaWKpvgwV1z_mkjjqcl8Pq/exec'

$('#submit-form').on('click', function(e) {
e.preventDefault();
var jqxhr = $.ajax({
url: url,
method: "post",
data: $form.serialize()
}).done(
    $('#submit-form').css('background-color', 'green')

);
})
