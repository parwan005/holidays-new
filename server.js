// Babel ES6/JSX Compiler
/*require('babel-register')({
  presets: ['es2015', 'react']
});*/

require('babel-register');

import path from 'path'
import express from 'express'

import React from 'react'
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router";

import PackageListing from './app/components/PackageListing';

var app = express();

// Make sure to include the JSX transpiler
//require("node-jsx").install();




app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//var reactViews = require('express-react-views');
//app.set('view engine', 'jsx');
//app.engine('jsx', reactViews.createEngine());
//app.set('public_dir', path.join(__dirname, 'public'));
//app.use(express.static(app.get('public_dir')));
//app.get('/goa-travel-packages.html', function (req, res) {
//   res.sendFile(path.join(path.join(__dirname, 'public', "travel-packages.html")));
//})
//app.get('/', routes.index);

// Set up Routes for the application
//var routes = require('./app/routes');
//app.use(require('./routes/index.jsx'));

//Route not found -- Set 404
/*app.get('*', function(req, res) {
    res.sendFile(path.join(path.join(__dirname, 'public', "404.html")));
});*/

var MongoClient = require('mongodb').MongoClient;
var db;

// Initialize connection once
MongoClient.connect("mongodb://localhost:27017/holidayseo", function(err, database) {
  if(err) console.log('Unable to connect to Mongo.')

  db = database;

  app.listen(app.get('port'), function() {
    console.log("website running at port", app.get('port'))
  });
});


//console.log(mongoose)

/*var db;
exports.db = function() {
  if (db === null) {
    // MongoClient
    var MongoClient = require('mongodb').MongoClient;
    // Connect to the db
    db = MongoClient.connect("mongodb://localhost:27017/holidayseo", function(err, db) {
    	if (err) throw err;
    	var query = { city: "Goa" };
    	db.collection("packages").find(query).toArray(function(err, result) {
    		if (err) throw err;
    		console.log(result);
    		db.close();
    	});
    });
  }
  return db;
}*/


app.get('/api/goa-travel-packages', function(req, res){
  var query = { city_code: "GOI" };
  db.collection("packages").find(query).toArray(function(err, docs) {
    res.send(docs);
  });
});

/*app.get('*', function(req, res) {
  match({ routes: routes, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
        var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
    		res.render('index.ejs', {
    			PackageInfo: {
    				"city" : "Goa",
    				"package_count" : 383
    			},
    			PackageListing: html
    		});
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});
*/

app.get("*", (req, res) => {
  // This context object contains the results of the render
  const context = {};

  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <PackageListing />
    </StaticRouter>
  );
  //res.status(200).send(html);

  if (req.url == '/holidays-india/goa-travel-packages.html') {
    res.render('index.ejs', {
      PackageInfo: {
        "city" : "Goa",
        "package_count" : 383
      },
      PackageListing: html
    });
  }

  res.sendFile(path.join(path.join(__dirname, 'public', "404.html")));
});
