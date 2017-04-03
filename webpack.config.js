const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Purify = require("purifycss-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const marked = require("marked");
const data = require('./src/data')
const renderer = new marked.Renderer();


const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const PROXY = `http://${HOST}:${PORT}`;

function getDevTool() {
    if (process.env.NODE_ENV !== 'production') {
        return 'source-map'; //enables source map
    }

    return 'cheap-module-source-map';
}

var env = process.env.NODE_ENV || 'development';
var isProduction = env === 'production';


// optimizations for production build
if (isProduction) {
  plugins.push(new webpack.NoErrorsPlugin());
  plugins.push(new webpack.PrefetchPlugin('react'));
  plugins.push(new webpack.optimize.OccurenceOrderPlugin(true));
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true,
      side_effects: true,
            sequences: true,
      dead_code: true,
            drop_debugger: true,
            comparisons: true,
            conditionals: true,
            evaluate: true,
            booleans: true,
            loops: true,
            unused: true,
            hoist_funs: true,
      hoist_vars: true,
            if_return: true,
            join_vars: true,
            cascade: true,
      drop_console: true,
      properties: true
    },
    mangle: true
  }));
}


module.exports = {

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        stats: 'errors-only',
        host: HOST,
        port: PORT,
    },
    entry: {
        client: './src/client.js'
    },
    output: {
        filename: 'bundle.js'
    },
    devtool: getDevTool(),
    module: {
        loaders: [
            {
                test:  /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-2'],
                    cacheDirectory: true
                }
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "markdown-loader",
                        options: {
                           pedantic: true,
                           renderer
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
          // A common mistake is not stringifying the "production" string.
          'process.env.NODE_ENV': JSON.stringify('production')
        }),
        //    new HtmlWebpackPlugin({
        //     inject: true,
        //     template: 'index.html',
        //     minify: {
        //       removeComments: true,
        //       collapseWhitespace: true,
        //       removeRedundantAttributes: true,
        //       useShortDoctype: true,
        //       removeEmptyAttributes: true,
        //       removeStyleLinkTypeAttributes: true,
        //       keepClosingSlash: true,
        //       minifyJS: true,
        //       minifyCSS: true,
        //       minifyURLs: true
        //   }
        // }),
        new ExtractTextPlugin('dist/css/[name].css', {
          allChunks: true
        }),
        new Purify({
            basePath: __dirname,
            resolveExtensions: ['.html','.js'],
            purifyOptions: {
                minify: true,
                rejected: false,
                info: true,
            }
        }),
        new BrowserSyncPlugin(
          // BrowserSync options
          {
            host: HOST,
            port: PORT,
            proxy: PROXY
          },
          // plugin options
          {
            // prevent BrowserSync from reloading the page
            // and let Webpack Dev Server take care of this
            reload: false
          }
        ),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compress:{
            warnings: false
          }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({
          asset: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.8
        })
    ]
};






