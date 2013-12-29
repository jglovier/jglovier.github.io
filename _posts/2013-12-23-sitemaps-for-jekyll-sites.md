---
layout: blogpost
title: "Sitemaps for Jekyll sites"
subhead: SUCH SIMPLE. SO EASE. WOW.
categories: jekyll code seo
---

A couple days ago I talked about how easy it is to [create an RSS feed with Jekyll](/rss-for-jekyll/). Well just as easy is creating a sitemap.

## Why do I even want a sitemap?

Because GOOGLE. [Webmaster tools](https://www.google.com/webmasters/tools/) are your friend. Use them. Love them. Give them [what they want](http://support.google.com/webmasters/bin/answer.py?hl=en&answer=183669#183669) and enjoy great profit as a result.

Or, in less witty but equally helpful words, a sitemap when provided to Google via a verified Webmaster Tools account, tells Google exactly what all pages of your site it should index.

Okay, now that you're sold on having a sitemap, here's how to use it like a champ:

### 1. Create sitemap.xml

Create a new file at the root of your site called `sitemap.xml`, and add the following code:

{% highlight html %}
{% raw %}
---
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    {% for post in site.posts %}
    <url>
        <loc>{{ site.url }}{{ post.url | remove: 'index.html' }}</loc>
    </url>
    {% endfor %}

    {% for page in site.pages %}
    {% if page.layout != nil %}
    {% if page.layout != 'redirect' %}
    <url>
        <loc>{{ site.url }}{{ page.url | remove: 'index.html' }}</loc>
    </url>
    {% endif %}
    {% endif %}
    {% endfor %}
</urlset>
{% endraw %}
{% endhighlight %}

The above is basically a Jekyll template that outputs your sitemap by looping over all of your posts and pages and outputting their URL in the resulting XML structure. It's based on a [couple useful](http://vvv.tobiassjosten.net/jekyll/jekyll-sitemap-without-plugins/) [examples I found](http://davidensinger.com/2013/11/building-a-better-sitemap-xml-with-jekyll/).

One thing you need to make sure you do for this to work is be sure you have the `url` value set to your root domain name in your `_config.yml` site configuration file. For example, you can [see mine here](https://github.com/jglovier/jglovier.github.io/blob/master/_config.yml).

Also note that you should exclude any utility layouts you may have created, such as for feeds, or in my case, redirects.

### 2. Submit to Google

You need to have a Google account setup with Webmaster Tools, and have your site verified from within Webmaster tools. Instructions on how to do that are [available here](https://support.google.com/webmasters/answer/183669?hl=en#183669).

Once you have submitted your sitemap, Google now knows all of the pages that exist on your site as referenced by your sitemap. Next time it goes to index your site, it will follow this road map.

For the record, Google normally indexes anything that is linked from your site index (homepage) and then anything it can follow from there. So a sitemap is particularly beneficial for cases where you might have pages that aren't linked from your homepage or the built in navigational structures of your site.

It's also good for anytime you change the document structure of your site, like if you modify your permalink settings. That's always a good time to resubmit a sitemap to Google.

<blockquote class="twitter-tweet" lang="en"><p>Sitemaps for <a href="https://twitter.com/jekyllrb">@Jekyllrb</a> sites (and GitHub Pages sites) <a href="http://t.co/UJvg6PInbw">http://t.co/UJvg6PInbw</a></p>&mdash; Joel Glovier (@jglovier) <a href="https://twitter.com/jglovier/statuses/415240947685797889">December 23, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>