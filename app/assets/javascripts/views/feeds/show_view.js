NewsReader.Views.FeedShowView = Backbone.View.extend({
  template: JST["feeds/show_item"],
  tagName: "li",
  className: "showFeed",

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },
  
  render: function(){
    var content = this.template({
      feed: this.model
    });
    this.$el.html(content);
    return this;
  },
  
  events: {
    "click button.delete-feed": "destroy"
  },
  
  destroy: function(event) {
    event.preventDefault();
    var view = this;
    var id = $(event.currentTarget).data("id");
    var model = new NewsReader.Models.Feed({"id": id});
    model.destroy({
      success: function() {
        view.model.collection.remove(model);
        view.$el.remove();
        Backbone.history.navigate('#', {trigger: true});
      }
    })
  }
});