/* global Firebase */

import DS from 'ember-data';

export default (function () {
  if (window.QUnit) {
    return DS.LSAdapter.extend({namespace: 'natitracker'});
  } else {
    return DS.FirebaseAdapter.extend({
      firebase: new Firebase('https://natitracker.firebaseio.com')
    });
  }
})();
