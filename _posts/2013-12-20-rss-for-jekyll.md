---
layout: blogpost
title: RSS for Jekyll blogs
subhead: "Hey, it's easier than ya think, Jack!"
categories: jekyll code
---

Recently I [rebuilt my blog on Jekyll](https://github.com/jglovier/jglovier.github.io), a sweet static site generator. However when a friend noticed I had no way for him to subscribe to my content, he [suggested adding an RSS feed](https://twitter.com/pengwynn/status/408340355315027970).

Turns out adding an RSS feed to a Jekyll site is [SUPER SIMPLE](http://cl.ly/T3k3) by just using [jekyll-rss-feeds](https://github.com/snaptortoise/jekyll-rss-feeds). Here's how:

## 1. Add site details for your Jekyll config file

Add the following key/value pairs to your `_config.yml` file:

{% highlight json %}
name:         Your Blog's Name
description:  A description for your blog
url:          http://your-blog-url.example.com
{% endhighlight %}

These values will be used as site info in your feed. As a bonus, you can now access these as variables anyplace else in your Jekyll templates by using `{% raw %}{{ site.name }}{% endraw %}`, `{% raw %}{{ site.description }}{% endraw %}` and `{% raw %}{{ site.url }}{% endraw %}`.

## 2. Add `feed.xml` to the site root

The [jekyll-rss-feeds](https://github.com/snaptortoise/jekyll-rss-feeds) project includes several options for types of feeds you can use, including a category feed. But we're just going to keep it simple.

The following jekyll template will generate a properly formatted list of your 10 most recent posts. Just create a `feed.xml` file in your site root, and paste this into it:

{% highlight xml %}
{% raw %}
---
layout: none
---
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{{ site.name | xml_escape }}</title>
    <description>{{ site.description | xml_escape }}</description>
    <link>{{ site.url }}</link>
    <atom:link href="{{ site.url }}/feed.xml" rel="self" type="application/rss+xml" />
    {% for post in site.posts limit:10 %}
      <item>
        <title>{{ post.title | xml_escape }}</title>
        <description>{{ post.content | xml_escape }}</description>
        <pubDate>{{ post.date | date: "%a, %d %b %Y %H:%M:%S %z" }}</pubDate>
        <link>{{ site.url }}/{{ post.url }}</link>
        <guid isPermaLink="true">{{ site.url }}/{{ post.url }}</guid>
      </item>
    {% endfor %}
  </channel>
</rss>
{% endraw %}
{% endhighlight %}

If you wish to increase the number of posts that are output in your feed, just modify the integer in the following line that reads `{% raw %}{ for post in site.posts limit:10 }{% endraw %}` from `10` to whatever output you wish.

## 3. Build your site and push

Yup, that's it! Just `jekyll build` your site and push, or if you are on [GitHub Pages](http://pages.github.com/), just push your changes to master and your new RSS feed will be in place.

Don't forget to put a link to your feed somewhere where your readers will no about it and be able to find it.

Mad props to [@snaptortoise](https://github.com/snaptortoise) for creating these simple and easy to use RSS Jekyll templates!