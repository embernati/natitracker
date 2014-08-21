import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      this.store
        .createRecord('issue', {title: this.get('title')})
        .save()
        .then(function () {
          this.set('title', null);
          this.transitionToRoute('issues');
        }.bind(this));
    }
  },
  hasUnsavedChanges: Ember.computed.notEmpty('title')
});
