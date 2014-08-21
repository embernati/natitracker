import startApp from '../helpers/start-app';

var App;

module('Create new issue', {
  setup: function() {
    localStorage.clear();
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test('creating an issue with title', function() {
  visit('/issues');
  click('a:contains("Create an issue")');
  fillIn('input[name=issue-title]', 'New Issue Title');
  click('button');

  andThen(function() {
    ok(find('a:contains("New Issue Title")').length, "List has the new issue");
  });
});


