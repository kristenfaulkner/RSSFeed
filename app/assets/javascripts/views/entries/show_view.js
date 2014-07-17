NewsReader.Views.EntryShowView = Backbone.View.extend({
  template: JST["entries/show"],
  tagName: "li",
  className: "showFeed",
  
  render: function(){
    var content = this.template({
      entry: this.model
    });
    this.$el.html(content);
    return this;
  }
});