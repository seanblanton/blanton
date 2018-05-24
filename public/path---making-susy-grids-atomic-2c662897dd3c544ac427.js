webpackJsonp([68657122552613],{346:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Sean Blanton"}},markdownRemark:{html:'<p>Today I\'m releasing my very first open source project. Albeit tiny, I wanted to share it with the world. I hacked on this over a weekend while trying to refactor my site to make the css a little leaner.</p>\n<p>For a while now I\'ve been using <a href="http://susy.oddbird.net">Susy Grids</a> to prototype both personal and professional work. Susy grids are great for designing responsive layouts quickly in the browser. I often find that I have a hard time conceptulizing how content will react to breakpoints. I can make static mockups at several sizes, but my intuition is often wrong. Susy grids help fix the problem by allowing me to experiment early.</p>\n<p>But Susy and I weren\'t getting along with how I wanted to write CSS when it came to dealing with media queries and breakpoints. I was stuck constructing grid component media queries with OOCSS, which wasn\'t jiving with my interests in utility classes (inspired by <a href="http://www.basscss.com">BassCSS</a> and <a href="http://www.tachyons.io">Tachyons</a> )</p>\n<p>I wrote Susy Bricks as a module to extend Susy\'s mixins into atomic classes at multiple breakpoints using the prefixes <code class="language-text">.xs</code>, <code class="language-text">.sm</code>, <code class="language-text">.md</code>, and <code class="language-text">.lg</code> to quickly adjust layouts without even having to touch css. Here\'s an example below.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>box xs-span12 md-span6 lg-span3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>To give credit where credit is due, I did look to Buzzfeed\'s <a href="https://solid.buzzfeed.com">Solid</a> to help me get the prefixing mixin off the ground.</p>\n<p>I\'ve been tryin to find better ways to organize my CSS, and this is a step in the right direction. I hope to continue to work on this in the future. Right now, this module only works with the most vanilla version of Susy (which is all I\'ve really used Susy for), but I\'d love for it to be more robust in the future.</p>\n<p>Check it out over on <a href="https://github.com/seanblanton/susybricks">Github</a> if you\'d like to play around with it</p>',frontmatter:{title:"Making Susy Grids Atomic",date:"08 May, 2016"}}},pathContext:{slug:"/making-susy-grids-atomic/"}}}});
//# sourceMappingURL=path---making-susy-grids-atomic-2c662897dd3c544ac427.js.map