---
layout: blogpost
title: Generating a link to the next article with Jekyll
---

So lately publishing platforms like Medium, Svbtle, Ghost and Editorially have renewed the web's interest in publishing. Okay, well honestly it's not like it ever died down. But there are now more tools than ever for publishing written content.

One of the things I love about this latest surge in new bloggin platforms as a web designer is that it certainly has sparked a renewed focus on designing for content consumption, rather than cheap design tricks. Gorgeously legible typography, grid based layouts, and design that is optimized for reading experiences is quickly becoming the norm.

In fact I [recently reworked my own pertfolio site](#) (yes this one) to focus primarily on my writing. Partly because I no longer need a design and web portfolio site since I [stopped freelancing this year](#), and because there are so many other places to showcase my work that I don't need to make it center stage on my website.

## Iterating the Reading Experience

My site is a massive work in progress, but then isn't everything we build? As I grow as a designer I'm learning that there's never a "finished", only a "current iteration" and "next iteration".

With that spirit I was recently thinking of how to optimize the reader experience on my article pages. One of the popular design elements that I've particularly admired about Medium and some of the other new platforms is the link to the next article at the end of each article. The way it's executed makes you really want to check it out because it feels like far more than the afterthought bare bones text link that used to be standard for handling post navigation.

## Making it happen in Jekyll

I set out to implement this in Jekyll, and quickly realized that because just linking to 1 next article isn't standard behavior yet (most blog engines expect you to link to before and after) I would have to do a little digging to make it work.

Turns out the solution is pretty simple.

---------
http://stackoverflow.com/questions/2026023/having-difficulties-with-jekyll-liquid
http://jekyllrb.com/docs/posts/
