import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    deleteQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
