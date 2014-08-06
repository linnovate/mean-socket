'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Article = mongoose.model('Article');

exports.createFromSocket = function(data, cb) {
  var article = new Article(data.message);
  article.user = data.user._id;
  article.title = data.channel;
  article.save(function(err) {
    if (err) console.log(err);
    Article.findOne({
      _id: article._id
    }).populate('user', 'name username').exec(function(err, article) {
      return cb(article);
    });
  });
};

exports.getAllForSocket = function(channel, cb) {
  Article.find({
    title: channel
  }).sort('created').populate('user', 'name username').exec(function(err, articles) {
    return cb(articles);
  });
};

exports.getListOfChannels = function(cb) {
  Article.distinct('title', {}, function(err, articles) {
    console.log(articles)
    return cb(articles);
  });
};
