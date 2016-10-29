import Ember from 'ember';

export default Ember.Component.extend({
  notesShowing: false,
  actions: {
    showNotes: function() {
      this.set('notesShowing', true);
    },
    noNotes: function() {
      this.set('notesShowing', false);
    }
  }
});
