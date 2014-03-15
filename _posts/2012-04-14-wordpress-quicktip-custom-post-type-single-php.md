---
layout: blogpost
title: Wordpress QuickTip - Custom Post Type Single.php
categories: code wordpress
redirect_from:
  - /writing/2012/wordpress-quicktip-custom-post-type-single-php/
  - /wordpress-quicktip-custom-post-type-single-php/
---

<p>So I'm developing a Wordpress powered site for a client, and I'm using Wordpress custom post-types to power different sections on the site, like a job board.</p>

<p>Setting up custom post-types is easy enough by registering the post type in the functions.php file. But one thing you may not be as familiar with <em>(I sure wasn't)</em> is how to get those posts to display with a template that's different than your single.php file for regular blog posts.</p>

<p>Turns out to be an easy solution: just create a new single.php file with a suffix of your custom post-type name. For example: <code>"single-posttype.php"</code>.</p>

<p>Boom. Wordpress FTW.</p>
