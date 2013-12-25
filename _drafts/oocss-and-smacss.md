---
layout: blogpost
title: OOCSS and SMACSS
subhead: Thoughts on usage
imgclass:
permalink:
categories:
---

So I’ve been following some subset of principles from Nicole Sullivan’s doctrine of Object Oriented CSS (OOCSS) for a couple years now, thanks to my former CURE colleague John Kleinschmidt who introduced me to her work - and urged me to consider implementing it for it’s performance and maintenance benefits.

But recently I’ve gotten a chance to really dig into Jonathan Snook’s book on Scalable and Modular Architecture for CSS (SMACSS), and have found it quite interesting. My appendTo colleague Doug Neiner asked for my impressions, so I decided to write them out as it helps me to think more concretely about it in writing.

So first of all let me just say that I think Snook has a wealth of insight and expertise as a foundation for building this approach on, from his work at Yahoo! to his general long-time presence in our industry as both a thought-leader and practice-leader. He knows his stuff.

Also, it’s clear that what he is proposing as a method comes from his direct experience in a specific environment: Yahoo!. Of course, his thoughts are also probably being shaped by the many other projects he has worked out apart from his role at Yahoo!, but it’s clear that the strength of SMACSS (as he admits in the book) is within a context of two critical components:

1) a larger, enterprise-esq development environment where there will be a range of people working on the same project, and…

2) a site or an application that is at a higher level of complexity and will demand frequent iteration over time, and necessitate reuse of site components throughout the app.

For scenarios that involve both of these factors (or arguably just one of them), the SMACSS method clearly solves a lot of common challenges in maintaining and creating scalable front end code. This is really it’s area of strength.

But to be fair, there are definitely much broader principles to SMACSS that can be applied across the board, even at levels of much smaller complexity like fairly basic sites or workflows. The idea of looking at site components for how they can be reusable, or even just how their styles can be reusable, is a very valuable tool alone.
<h3>What I love about SMACSS</h3>
The thing I love most about SMACSS is the thing it really excels at: improving efficiency of the development process and creating a framework for code organization that makes scalability (both in terms of code and team) really managable.
<h3>What I don’t love about SMACSS</h3>
Where the SMACSS method’s benefits begin to fade is obviously at the extreme use case scenarios. Or, perhaps, that’s when they shine the brightest?

What I mean is, when you push SMACSS all the way to the extreme, without really strong discretion on how it’s principles are implemented, I could see an app ending up with incredibly complex CSS whose benefits no longer outweigh it’s cost. If you have hundreds of modules, for example, and each module has a handful of state rules