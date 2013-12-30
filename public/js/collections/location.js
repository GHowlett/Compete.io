// A location is a queue of matches that are coming up soon
// Identifiers vary with sport (eg. court 1, mat 4, field 2)
App.Location = Backbone.Collection.extend({
    model: App.Match,
    identifier: "None"
})