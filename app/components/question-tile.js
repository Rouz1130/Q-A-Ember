import Ember from 'ember';

export default Ember.Component.extend({
  notesShowing: false,
  actions: {
    showNotes: function() {
      this.set('notesShowing', true);
    },
    noNotes: function() {
      this.set('notesShowing', false);
    },
    delete(question) {
      if (confirm('Continue to remove question')) {
        this.sendAction('deleteQuestion', question);
      }
    }
  }
});
