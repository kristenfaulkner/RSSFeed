NewsReader.Views.FeedEntriesView = Backbone.View.extend({
  template: JST["feeds/feedShowEntries"],
  tagName: "ul",
  className: "showEntries",
  
  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'add', this.render);
    
  },
  
  render: function(){
    var view = this;
    var content = this.template({
      feed: view.model
    });
    view.$el.html(content);
    var myEntries = view.model.entries();
    myEntries.each(function(entry) {
      var entryShowView = new NewsReader.Views.EntryShowView({ 
        model: entry 
      });
      view.$el.append(entryShowView.render().$el);
    });
    return view;
  }
  

});