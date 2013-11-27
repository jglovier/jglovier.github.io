---
layout: blogpost
title: Solution For CSS Transitions Crashing Safari
imgclass: code
categories: code css
---

A few weeks ago I discovered a bug with my newly launched site <a href="http://remotejobs.io">Remote Jobs</a>. The site is fully responsive, and I happened to be at a Verizon store upgrading my wife's phone when I decided to take a glance at Remote Jobs on one of their iPads.

Surprisingly, the site crashed iOS Safari before it could even fully load. So I tried it again. Crash. And again...crash. I took it to another one of their four iPads, and same thing on every device: crashed iOS Safari before it could even fully load of the page.

Naturally, wanting to debug my site more than upgrade my wife's phone, I tried Remote Jobs on every OTHER tablet in the store that were not iOS devices. Turned out that the site did not crash on any other tablet - just the iPads.

So I tweeted to confirm my issue, and sure enough many other people reported back the same behavior on their iPads and even on Safari 6.1 on OS X.

At this point I was baffled. So the site was crashing Safari on desktop, iOS Safari on iPads, but strangely enough NOT crashing iOS Safari on iPhones.

As soon as I got home I started debugging on Safari for OS X. I checked OS X console for any useful error messages. Nada. I checked other webkit browsers (aka Chrome) to try to observe any similar behavior. Nada. I poured over my code to see if I could spot anything strange. No clues.

Finally, I turned to Google and landed on StackOverflow where a couple questions described Safari crashing under some strange circumstances that were in fact CSS related.

I noticed that some people had similar issues with Safari crashing when using the css <code>transition</code> property, and sure enough it was choking on the <code>transition-property: all</code> value applied to a global anchor selector, in conjunction with the percentage based layout (for responsive design) of the site.

When I changed the value of <code>all</code> to <code>color</code>, the site stopped crashing in Safari.

It's a pretty severe bug, but I hope my experience helps someone else out there. For more on the technical details of the solution, see the question and answer I posted on Stack Overflow: http://stackoverflow.com/questions/15987787/my-website-crashes-safari-both-desktop-and-ios-consistently