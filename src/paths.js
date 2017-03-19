import React from 'react';
import data from './data';
import showdown  from 'showdown';
import axios from 'axios';

const Paths = {

  getAllPosts: () => {
    return data.posts;
  },

  getPathMeta: (item) => {
    return data.posts[item];
  },

  getPathForTitle: (title) => {
    return [title].map(t => t.toLowerCase())
          .map(s => s.replace(/ /g,"-"))
          .toString();
  },

  getDateObjectForPublishedDate: (path) => {
    return [path].map(p => p.split("-"));
  },

  getPathForTitleWithDate: (title, date) => {
    return [date[0].join('/') + '/' + [title].map(t => t.toLowerCase())
          .map(s => s.replace(/ /g,"-"))]
          .toString();
  },

  getPostForPath: (path) => {
    return [path].map(p => p.split("-")
                  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(" "))
  },



  getMarkdownPath(path){
    return axios.get('/static/posts/' + path + ".md");
  },

  getMarkdown: (filename) => {
    return getMarkdownPath(filename)
      .then( (arr) =>
        { return arr.data} )
  },

};

export default Paths
