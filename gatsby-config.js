module.exports = {
	siteMetadata: {
		title: 'Sean Blanton',
		description:
			'Sean Blanton is a Product Designer living in Seattle, Washington building design systems and tools at Facebook.',
		siteUrl: `https://www.sean-blanton.com`
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: '›',
							aliases: {}
						}
					}
				]
			}
		},

		'gatsby-plugin-react-helmet',
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-offline`,
		`gatsby-remark-smartypants`,
		{
			resolve: `gatsby-plugin-sitemap`
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-29141738-1',
				// Puts tracking script in the head instead of the body
				head: false,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true
			}
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `#0ebcc7`,
				showSpinner: false
			}
		},
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: './src/favicon.png',
				injectHTML: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					twitter: false,
					yandex: false,
					windows: false
				}
			}
		}
	]
};
