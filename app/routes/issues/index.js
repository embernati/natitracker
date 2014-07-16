import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('issue');
  },

  actions: {
    createIssue: function() {
      this.store.createRecord('issue').save().then(function(issue) {
        this.transitionTo('issues.edit', issue);
      }.bind(this));
    }
  }
});

