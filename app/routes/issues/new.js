import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    willTransition: function (transition) {
      var hasUnsavedChanges = this.controller.get('hasUnsavedChanges');
      if (hasUnsavedChanges) {
        if (!confirm('Really!?!?!')) {
          transition.abort();
        }
      }
    }
  }
});

