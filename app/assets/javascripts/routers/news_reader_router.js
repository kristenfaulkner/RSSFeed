NewsReader.Routers.NewsReaderRouter = Backbone.Router.extend({
  routes:{
    "" : "feedsIndex",
    "feeds/:id": "feedShow"
  },
  
  feedsIndex: function(){
    NewsReader.Collections.feeds.fetch();
    var indexView = new NewsReader.Views.FeedIndexView({
      collection: NewsReader.Collections.feeds
  
    });
    $('div#content').html(indexView.render().$el);
    // this._swapView(indexView);
  },
  
  feedShow: function(id) {
    var id = id
    
    var feed = NewsReader.Collections.feeds.get(id) || 
          new NewsReader.Models.Feed({id: id})
    feed.fetch()

    var showView = new NewsReader.Views.FeedEntriesView({
      model: feed
    });
    $('div#content').html(showView.render().$el);

    
    // NewsReader.Collections.feeds.fetch({success: success, wait: true});
    
    // this._swapView(indexView);

  }
  
  
});