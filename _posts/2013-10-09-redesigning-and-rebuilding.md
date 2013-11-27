---
layout: blogpost
title: Redesigning and rebuilding
subhead: or "Static sites FTW"
imgclass: code
categories: code
---

This site is my personal home on the World Wide Intarnetz™. I write about stuff, I link to other stuff, and I showcase stuff I've done/built/designed. It's purely personal in nature and does not necessarily reflect the views of my wonderful employer, my Murica, my tattoo artist, my barber or my neighbor's dog. It's where I represent, yo!

But it's also where I practice new things I'm learning. Years ago I used it to learn basic HTML & CSS. Later I used it to learn to build sites with Wordpress. Then I used it to learn to theme Tumblr. I've also used it as a jQuery learning playground, a way to better understand things like [SSH](http://en.wikipedia.org/wiki/Secure_Shell), [versioning systems](http://en.wikipedia.org/wiki/Source_Code_Control_System) ([SVN](http://en.wikipedia.org/wiki/Apache_Subversion) and now [Git](http://git-scm.com/)), [PHP](http://php.net/), [mySQL](http://www.mysql.com/), server side logic, etc.

This website has been one of the best teachers I've ever had as a design professional.

Recently I found yet one more excuse to use this thing as a learning tool: [Jekyll](http://jekyllrb.com/) and [GitHub pages](http://pages.github.com/). I took some time to update the site so that the code is now entirely hosted on my GitHub profile, powered by GitHub Pages, streamlining my workflow and overhead immensly.

The site content is also drastically simplified.  This site is now a streamlined version of only the things I really want to have online. Or to say it another way: I used to have a lot more crap to impress people that I no longer need to impress (since I stopped freelancing and [now have my dream job](https://github.com/blog/1522-joel-glovier-is-a-githubber)), so now this site is just The Essentials™, powered by mere static markup and styles.

## Behind the Curtain

Said static markup and styles are generated with love by [Jekyll](http://jekyllrb.com/), a static site generator.

Why Jekyll and why a static site? Because it's easy to setup, easy to deploy, and easy to maintain. And it's hella fast because it's just raw HTML/CSS/JS cached on a server! Plus [@mojombo](https://github.com/mojombo/) made it, so...

**Some History**

The first version of my site in 2009 was just raw HTML & CSS, and then Wordpress installed in a separate directory for the blog. Then in 2011 I redesigned the site from the ground up, and built the entire site on Wordpress. However it turned out to be overkill, as I only used a couple features of Wordpress (not even the blog which ended up being a Tumblr blog!), but it was a good exercise in learning to work with Wordpress templates, post-types, etc., which I was doing plenty of at the time anyway.

Fast forward to 2013 and I'm no longer doing much Wordpress development, [nor am I taking on new freelance gigs or side projects](https://github.com/blog/1522-joel-glovier-is-a-githubber). In short, the needs of my personal web presence have changed. All I really need now is a simple place to introduce myself to visitors, host my writing, link to some of my projects and other places on the web. A database driven website is way overkill for what I need. Plus PHP is out, Ruby is in. :trollface: But SRSLY.

**How It Works**

The premise is simple: Jekyll is a ruby based framework for generating an entire static site out of templates and markdown files. You can either run Jekyll in production to build the site, or you can run Jekyll locally and then just push your static files to production. Both are easy breasy, especially with a [GitHub](https://github.com/) repo, [GitHub Pages](http://pages.github.com/), and the new [GitHub Pages gem](https://github.com/blog/1581-cutting-the-github-pages-gem).

## The REAL Reason: [GitHub Flow™](http://scottchacon.com/2011/08/31/github-flow.html) and [GitHub Pages™](http://pages.github.com/)

Although I had been wanting to move away from a database driven website for a while in favor of a simpler, static system, I dragged my feet for quite some time. Part of my procrastination had to do with deciding on a technology to use and FUD around learning a new process, and part was just for lack of time/interest.

But when I started at GitHub a few months ago, I found new motivation to rebuild my website with Jekyll, a tool that GitHub uses lots of places. Adopting someting we were already using in house (and @mojombo made it) seemed like a no brainer.

Not only that, but by using Jekyll (or even just the static files) and a GitHub repo I am able to sync my entire workflow and website with my GitHub account by using GitHub Pages for free. Develop locally, push to GitHub, deploy to my site with the click of a button, and track future iterations using [GitHub issues](https://github.com/jglovier/jglovier.github.io/issues?state=open). :boom:

## Y U NO COMMENTS?!?!?!?!!?

In the past I've had comments on my blog, but I opted to leave them out this time around. Reason being: they simply haven't added anything meaningful to the reader experience. I've had a few people give nice words about my writing, but rarely (if ever) have I had any meaningful conversations take place through comments on my blog.

And I'm okay with that, honestly. I'm totally fine with this just being a place for me to publish my thoughts, and others to read. I participate in enough "social media channels" that if you'd like to have a conversation with me about something I've written, let's do it [elsewhere](/#elsewhere).

Also, FWIW I've rarely seen meaningful conversations happen in blog comments on ANYONE's blog.

## Something is missing/broken/sucks

Sorry about that. Yeah this is a massive work in progress, aka minimum viable product. You can still check out my old site if you like just by visiting [2011.joelglovier.com](http://2011.joelglovier.com). Some stuff will be broken there too now, and I apologize, but if you happened to be looking for anything I had there before (like my [thoughts on Jesus](http://2011.joelglovier.com/good-news/), notes from my [HACC Web Authoring](http://2011.joelglovier.com/hacc/web-authoring/) class, [wallpapers](http://2011.joelglovier.com/wallpaper/), [fonts](http://2011.joelglovier.com/fonts/dubfresh/), [Dev Tees](http://www.devte.es/) or [other projects](http://2011.joelglovier.com/#projects-section)) you can generally find the old links intact there. Although eventually I will be porting all this stuff over to the new site.

## [Fork me on GitHub](https://github.com/jglovier/jglovier.github.io)!

Best part is this site is now open source! Well, most of it. :-) The content, images, and certain other assets (like web-fonts) are not open source, but the basic framework of my site and styles are open for use. Of course, be classy and make it your own - don't just copy and paste. At the very least change the color scheme. But even if you don't I won't be mad. Just dont' go using my blog content as your own or pretending to be me. For more on the licensing see the [README in the GitHub repo](https://github.com/jglovier/jglovier.github.io#jgloviergithubio-) for the site.