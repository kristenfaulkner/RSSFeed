NewsReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "api/feeds/",
  
  
  //parse json data coming from server, get entries
  parse: function(jsonResp){
    debugger
    if (jsonResp.latest_entries) {
      this.entries().set(jsonResp.latest_entries);
      delete jsonResp.latest_entries;
    }
    return jsonResp;
  },
  
  //association for entries of this feed
  entries: function() {
    if(!this._entries){
      this._entries = new NewsReader.Collections.Entries([], {
        feed: this
      });
    }
    return this._entries;
  }
});