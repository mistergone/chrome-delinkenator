$('a').click( function(ev) {
  ev.preventDefault();
  $('#link-disabler-notification .disabled-links-text').text('Links have been disabled!');
});
