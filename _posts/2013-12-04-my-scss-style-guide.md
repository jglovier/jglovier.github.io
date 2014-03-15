---
layout: blogpost
title: My SCSS style guide
subhead: "This is how I roll, animal print, pants outta control"
hnlink: "https://news.ycombinator.com/item?id=7023041"
categories: code css sass
redirect_from:
  - /writing/2013/my-scss-style-guide/
  - /my-scss-style-guide/
---

One of the beauties of authoring code is that apart from basic syntax rules, formatting is flexible. But, we all know there are best practices for helping make certain code more readable, and more friendly for collaborator environments.

Here's the basic styleguide that I've come to adopt for authoring my Sass files (SCSS flavor of course). You may like what I've come up with (then use it), or you may not like it (then make one of your own). Either way I hope it gets you to think more critically about how formatting your code can lead to efficiency for yourself, and for your team.

{% highlight scss %}
// Style category name
// -------------------------------------------/

.some-element {
    // styles for the `self` item at the top
    overflow: hidden;
    margin: 0 auto;
    background-color: #0099ff;
    border-bottom: 10px solid #fff;

    // When less than 3 properties leave them inline
    .some-child { background-color: #fff; display: block;

        // When 3 or more properties, add new lines and bracket after last
        &:first-child {
            // Group props onto 1 line for logical associations
            width: auto; height: 3em;
            margin: 0; padding: 0;
            display: block;
            position: absolute;
            top: 0; left: 50%; bottom: 0; }

        .some-child-again { width: 50%; height: 40px;

            element {
                display: block;
                color: inherit;
                text-decoration: underline; }

        }

}

// end style category name ------------/
{% endhighlight %}

I've arrived at this format over several years of writing and maintaining CSS or Sass on projects of all different scales, and I've found this approach to be most comfortable for authoring and maintaining, whether riding solo or rolling with a posse.

It's influenced by a number of different CSS schools of thought, including [Nicole Sullivan's](https://twitter.com/stubbornella) pioneering evanglism of [OOCSS](http://oocss.org/), [Jonathan Snook's](https://twitter.com/snookca) very useful [SMACSS](http://smacss.com/) method for large projects, [Jeff Starr's](https://twitter.com/perishable) thoughts on [micro optimizing your CSS](http://perishablepress.com/how-to-micro-optimize-your-css/), [Mark Otto's](https://twitter.com/mdo) very simple and practicle [Code Guide](http://mdo.github.io/code-guide/), and a touch of [Kyle Neath's](https://twitter.com/kneath) method for CSS documentation called [KSS](http://warpspire.com/kss/).

## My approach, not GitHub's

To be clear, this is my personal preferred approach which I have used in the past on client projects, for employers, and for personal projects. However, it's not the exact approach we take at GitHub. It's close, but there are some small differences, like where I tend to combine multiple related properties on one line, or grouping less than two properties in general on one line.

If you'd like to learn more about how we author CSS (and SCSS) at GitHub, you should check out our public [CSS Styleguide](https://github.com/styleguide/css).

<blockquote class="twitter-tweet" lang="en"><p>My SCSS style guide: <a href="http://t.co/F6p1lyqlXR">http://t.co/F6p1lyqlXR</a></p>&mdash; Joel Glovier (@jglovier) <a href="https://twitter.com/jglovier/statuses/408290949723205633">December 4, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
