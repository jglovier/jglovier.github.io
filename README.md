Source for my personal website (joelglovier.com)
==================

Source for the new joelglovier.com (currently under development; this repo is not actually live on joelglovier.com yet).


## About the Site

This site is my personal home on the World Wide Intarnetz™. I write about stuff, I link to other stuff, and I showcase stuff I've done/built/designed. It's purely personal in nature and does not necessarily reflect the views of my wonderful employer, my Murica, my tattoo artist, my barber or my neighbor's dog. But you should still check it out.

**Recent Updates**

The site has recently been updated so that the code is no entirely hosted on my GitHub profile, powered by GitHub Pages, and is overall a more simple, streamlined version of what I really want to put online. In other words I used to have a lot more crap to impress people that I no longer need to impress (since I stopped freelancing and [have my dream job](https://github.com/blog/1522-joel-glovier-is-a-githubber)), so now it's just The Essentials.™ I hope you enjoy your time visiting.

## Behind the Curtain

This site is built with [Jekyll](http://jekyllrb.com/), a static site generator. Why Jekyll and why a static site? Because it's easy to setup, easy to deploy, and easy to maintain. And it's hella fast because it's just raw HTML/CSS/JS cached on a server! Plus @mojombo made it, so...

**Some History**

The first version of my site in 2009 was just raw HTML & CSS, and then Wordpress installed in a separate directory for the blog. Then in 2011 I redesigned the site from the ground up, and built the entire site on Wordpress. However it turned out to be overkill, as I only used a couple features of Wordpress (not even the blog which ended up being a Tumblr blog!), but it was a good exercise in learning to work with Wordpress templates, post-types, etc., which I was doing plenty of at the time anyway.

Fast forward to 2013 and I'm no longer doing much Wordpress development, [nor am I taking on new freelance gigs or side projects](https://github.com/blog/1522-joel-glovier-is-a-githubber). In short, the needs of my personal web presence have changed. All I really need now is a simple place to introduce myself to visitors, host my writing, link to some of my projects and other places on the web. A database driven website is way overkill for what I need. Plus PHP is out, Ruby is in. :trollface: But SRSLY.

**How It Works**

The premise is simple: Jekyll is a ruby based framework for generating an entire static site out of templates and markdown files. You can either run Jekyll in production to build the site, or you can run Jekyll locally and then just push your static files to production. Both are easy breasy, especially with a [GitHub](https://github.com/) repo, [GitHub Pages](http://pages.github.com/), and the new [GitHub Pages gem](https://github.com/blog/1581-cutting-the-github-pages-gem).

## The REAL Reason: [GitHub Flow™](http://scottchacon.com/2011/08/31/github-flow.html) and [GitHub Pages™](http://pages.github.com/)

Although I had been wanting to move away from a database driven website for a while in favor of a simpler, static system, I dragged my feet for quite some time. Part of my procrastination had to do with deciding on a technology to use and FUD around learning a new process, and part was just for lack of time/interest.

But when I started at GitHub a few months ago, I found new motivation to rebuild my website with Jekyll, a tool that GitHub uses lots of places. Adopting someting we were already using in house (and @mojombo made it) seemed like a no brainer.

Not only that, but by using Jekyll (or even just the static files) and a GitHub repo I would be able to sync my entire workflow and website with my GitHub account by using GitHub Pages for free. Develop locally, push to GitHub, deploy to my site with the click of a button. :boom:

## Licensing

Feel free to inspect the code structure, and reuse what is appropriate. But please respect that the files in the following directories are Copyright Joel Andrew Glovier. You may not reuse anything therein without my written permission:
- _posts/
- img/
- fonts/ (these fonts are licensed only for my own use)

All other directories and files are MIT Licensed.
