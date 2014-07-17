NewsReader.Views.FeedIndexView = Backbone.View.extend({
  template: JST["feeds/index"],
  className: "feeds-index",
  tagName: 'ul',
  
  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },
  
  render: function(){
    var view = this;
    var content = view.template();
    var feed = new NewsReader.Models.Feed();
    var form = new NewsReader.Views.FormView({model: feed});
    view.$el.html(content).append(form.render().$el);
    view.collection.each(function(feed) {
      var showView = new NewsReader.Views.FeedShowView({ model: feed });
      view.$el.append(showView.render().$el);
    });
    return view;
  }
  

});
