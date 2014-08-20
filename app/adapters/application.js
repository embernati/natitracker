import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://natitracker.firebaseio.com')
});

// export default DS.LSAdapter.extend({
//     namespace: 'natitracker'
// });

