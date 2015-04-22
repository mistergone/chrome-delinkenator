
$(document).ready( function() {
  if ( $('#link-disabler-notification').length === 0 ) {
    var linksDisabledHTML = 'Links have been disabled!\
                         <button class="close-window">\
                          Close <span class="cf-icon cf-icon-delete close-window"></span>\
                          </button>';
    var buttonsDisabledHTML = 'Buttons have been disabled!\
                         <button class="close-window">\
                          Close <span class="cf-icon cf-icon-delete close-window"></span>\
                          </button>';

    $('body').prepend('<div id="link-disabler-notification"></div>');
    $('#link-disabler-notification').append('<div class="disabled-links-text hidden-notification close-me"></div>');
    $('#link-disabler-notification').append('<div class="disabled-buttons-text hidden-notification close-me"></div>');
    $('#link-disabler-notification .disabled-links-text').html( linksDisabledHTML );
    $('#link-disabler-notification .disabled-buttons-text').html( buttonsDisabledHTML );
  }

  $('.close-window').click( function() {
    $(this).parents('.close-me').slideUp(300, function() {
      if ( $('#link-disabler-notification .hidden-notification:visible').length === 0 ) {
        $('#link-disabler-notification').slideUp();
      }
    });
  });

});
