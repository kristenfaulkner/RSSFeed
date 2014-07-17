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
  }
});