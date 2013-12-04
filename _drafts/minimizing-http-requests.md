---
layout: blogpost
title: "Minimizing HTTP requests"
subhead: "A story about dropping stuff and picking it back up"
imgclass:
permalink:
categories:
---

# Minimizing HTTP requests for performance

One of the most important parts of understanding performance improvements on the front end is minimizing http requests, or the requests that the visitors browser must make back to the server to get all the assets it needs in order to render the web page for the user.

HTTP requests can be particularly hard to understand if your not very familiar with how server calls work and how web pages render. There's also the variable of connection speed and latency, and whether your content is being served from a CDN or not.

All of that can be a bit confusing when you are just trying to figure out how to make your page feel "faster". But the simple rule to follow is that the less HTTP requests the better.

Here's a simple illustration of why this is the case.

Remember when you were in school and you were carrying your books and papers in your hand one day when that big, awful bully bumped into you on purpose causing you to spill your pile of papers all over the floor, causing everyone to laugh at you? Oh that didn't happen to you? Um...me either.

Well let's just pretend it did. Those papers you were carrying are like all the things a web page needs to give to your user in order to display the page. They are the html document (or equivalent rendered markup by your server-side language) containing the references to everything else, the CSS files which tell the page how it should look, the JavaScript files which tell the page how it should behave, the images that belong on the page, and any other assets the page needs to present to the user.

Now let's suppose you could simply hand that stack of papers over to the user as one big pile. That would only require one hand off, right? And depending on how large the stack is, it would go fairly quickly. The problem is, you can't just hand over the whole stack because that's now how browsers work. The most you can hand over is two pages at a time - or, to break from analogy, you can only make a maximum of two concurrent http requests at a time.

Now you could try to fit all the contents of your documents into one big long document, but for practical purposes that would only go so far and not really make much sense.

So you have to think about it like handing over your 40 page term paper one page at a time. If the goal is to get the stack of papers out of your hand and into your users hand as quickly as possible, you have to start thinking about how to cut pages, or combine contents where appropriate.

It's pretty much the same with HTTP requests. The server has all of your assets, and can only give them to your user at a maximum pace of two at a time. So if you want to reduce the overall amount of time it takes to get the "whole stack of papers" to your user then you start thinking about how to cut out pages, or at least combine them so it takes less hand-offs to give them the entire stack.

If you're ready to start thinking practically about how to reduce your HTTP requests, there's lots of well written articles on the subject that I'll just point you too. Here's a couple good ones:
- [Minimize request overhead](https://developers.google.com/speed/docs/best-practices/request)
- [Best Practices for Speeding Up Your Web Site](http://developer.yahoo.com/performance/rules.html)

