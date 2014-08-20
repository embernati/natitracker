import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function() {
      this.get('model').save();
      this.transitionTo('issues');
    }
  }
});
