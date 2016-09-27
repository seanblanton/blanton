---
layout: post
title: "Making Susy Grids Atomic"
---

Today I'm releasing my very first open source project. Albeit tiny, I wanted to share it with the world. I hacked on this over a weekend while trying to refactor my site to make the css a little leaner.

For a while now I've been using <a href="http://susy.oddbird.net/" class="u"> Susy Grids</a> to prototype both personal and professional work. Susy grids are great for designing responsive layouts quickly in the browser. I often find that I have a hard time conceptulizing how content will react to breakpoints. I can make static mockups at several sizes, but my intuition is often wrong. Susy grids help fix the problem by allowing me to experiment early.

But Susy and I weren't getting along with how I wanted to write CSS when it came to dealing with media queries and breakpoints. I was stuck constructing grid component media queries with OOCSS, which wasn't jiving with my interests in utility classes (inspired by <a href="http://www.basscss.com" class="u">BassCSS</a> and <a href="http://tachyons.io/" class="u"> Tachyons</a> )

I wrote Susy Bricks as a module to extend Susy's mixins into atomic classes at multiple breakpoints using the prefixes `.xs`, `.sm`, `.md`, and `.lg` to quickly adjust layouts without even having to touch css. Here's an example below. 


```html
    <div class="box xs-span12 md-span6 lg-span3"> 
````


To give credit where credit is due, I did look to Buzzfeed's <a href="https://solid.buzzfeed.com" class="u"> Solid</a> to help me get the prefixing mixin off the ground. 

I've been tryin to find better ways to organize my CSS, and this is a step in the right direction. I hope to continue to work on this in the future. Right now, this module only works with the most vanilla version of Susy (which is all I've really used Susy for), but I'd love for it to be more robust in the future. 


Check it out over on <a href="https://github.com/seanblanton/susybricks" class="u"> Github</a> if you'd like to play around with it




