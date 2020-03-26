var plugins = [{
      plugin: require('/Users/seanblanton/Desktop/blanton/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/seanblanton/Desktop/blanton/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/seanblanton/Desktop/blanton/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/seanblanton/Desktop/blanton/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-29141738-1","head":false,"anonymize":true,"respectDNT":true},
    },{
      plugin: require('/Users/seanblanton/Desktop/blanton/node_modules/gatsby-plugin-favicon/gatsby-ssr'),
      options: {"plugins":[],"logo":"./src/favicon.png","injectHTML":true,"icons":{"android":true,"appleIcon":true,"appleStartup":true,"coast":false,"favicons":true,"firefox":true,"twitter":false,"yandex":false,"windows":false}},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  let results = plugins.map(plugin => {
    if (plugin.plugin[api]) {
      const result = plugin.plugin[api](args, plugin.options)
      return result
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
