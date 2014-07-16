import DS from 'ember-data';

var Issue = DS.Model.extend({
  title: DS.attr('string')
});

export default Issue;
