import Ember from 'ember';

var questions = [{
  id: 1,
  content: "Sports",
  author: "Bob Costas",
  notes: "MLB"
  }, {
  id: 2,
  content: "Politics",
  author: "Noam Chomsky",
  notes: "Election"
  }, {
  id: 3,
  content: "Astronomy",
  author: "Stephen Hawking",
  notes: "Black-Holes"
  }];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
