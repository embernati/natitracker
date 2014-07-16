import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      { id: 1, title: 'first' },
      { id: 2, title: 'second' }
    ];
  }
});
