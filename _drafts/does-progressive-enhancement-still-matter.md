---
layout: blogpost
title: Does Progressive Enhancement Still Matter?
---

So it's 2013, and we're in the age of responsive design and web applications. The web standards war has been won and accessibility is a universal standard for all. Right?

Wrong. The web standards war has been fought, but still has not been fully won. We're on the path to victory, yes. We can now observe a prevailing mindset among developers around the web that web standards matter, and are right.

But we still have many battles yet to fight - and to keep on fighting - if we are to truly win the war.

## Progressive Enhancement

Progressive enhancement started gaining popularity as an approach to web development around 2008, when [the web standards movement](http://www.webstandards.org/) had really been gaining an audience. It refers to a methodology of building web sites and applications that allows for the maximum possible usability for users across all browsers, rewarding users of modern browsers with enhanced experiences, while not preventing users of older browsers from accessing basic content and features.

In other words, aspects of a user experience that may not be supported on older browsers do not break the experience when missing - just *"enhance"* the experience when present.

A very basic example could be using a CSS gradient background on an interface element that when not present on older browsers (IE8 and below for example) does not break the experience for the user.

One of the key aspects of building sites with progressive enhancement is providing *fallbacks*.

Taking our example of the CSS gradients - while IE8 and below do not support the standard CSS gradient syntax, they do support a proprietary -ms-filter that can be used to achieve the gradient. So including the filter syntax for IE8 and below would be a fallback that adds to the site experience for users on older browsers.

Or, if you want to stay away from the proprietary filters for [performance reasons](http://msdn.microsoft.com/en-us/library/ms533035(v=vs.85).aspx), your fallback could be as simple as adding a separate background-color declaration when gradients aren't supported.

Another basic situation is use of rounded corners - IE didn't start supporting border-radius until IE9, while many other browsers had supported border-radius with vendor specific prefixes, or natively for some time before IE9's release. One of the conclusions that we often arrive at by following the principles of progressive enhancement is that *not all users have to have the exact same experience*.

Meaning, don't spend too much time adding support for things that only give a marginal return on your time investment.

Rounded corners are one example of something that more often then not falls into this category. Unless the rounded corners are somehow critical to the overall user experience *(which they should not be)*, then you may be better off not investing time adding support for them in browsers where CSS3 border-radius syntax is not supported.

This generally holds true for most visual interface enhancements. We should accept that the visual design in older browsers may not display the full glory of our site or application and be okay with that. As long as the experience isn't "broken" and the content or primary functionality remains in tact for those users, we don't need to spend inordinate amounts of time getting everything to look "pixel perfect" all the way back to IE6, or on Android 2.1.

Conversely, the principles of progressive enhancement also serve to advise us that it's a bad idea to create features or experiences that are going to go really bad for the user if something as small as border-radius is not supported. We must build experiences around robust, proven methods and support them as far back as necessary to not break the experience for users who don't have the chance to use a modern device.

## The Problem

But certainly this comes as no surprise to you. We all know these things and live by them, right? Progressive enhancement is SO 2008.

Or is it? Could it be that we have not actually come as far as we think we have? We have clearly defined what the methodology of progressive enhancement describes in terms of best practices by now, but are we *really* seeing the picture well enough to change our habits?

But the problem - and the reason why progressive enhancement is still worth talking about, lies in two areas:

### 1. The Problem of the Shiny New

So the *"shiny new"* is all the cool things you can do today with HTML5, or CSS vendor prefixed rules. Or if you just implement that new CSS hierarchies module that is in candidate recommendation status and is actually already supported in Chrome canary. Or if you can just get away with implementing the new HTML5 unicorn API (again, supported in Chrome Canary already).

The temptation is to get so caught up in [all the new developments of web technologies](http://www.html5rocks.com/) that are going on around us and being touted on Twitter all the time, that neglect development best practices as we attempt to push the web forward.

We've all been in this boat before. We discover an amazing new API, or CSS module that has nominal browser support, but *we want* it to have support. *We want* to use it. And we convince ourselves that if we use it, we are pushing the web forward.

And that's great. The problem is not using new things. The problem is getting so enamored with the new things that we neglect to really consider the experience for users who cannot access our content when we rely too heavily on those new and shiny technologies.

We start to forget about the average user, and how they are stuck on IE8, or maybe if they are lucky IE9. Or they just haven't updated Firefox in a really long time, because well, not everyone who is outside of the development world realizes the importance of upgrading their browser.

Or worse yet, the tale of the dev writing all their styles with webkit prefixes only, because hey - webkit is the coolest browser and screw everyone else, right?

Whether or not I am preaching to the choir here, the reality is we should all take more time to consider the average user, and to advocate for being steadfast in development best practices.

We must remember that while the shiny and new is great, the experience should be just as great for users who don't haz the shiny and new browsers of tomorrow.

Again, I'm not saying we should not push the envelope in our development. I'm simply advocating for use of polyfills, fallbacks and overall consideration for users who may not be able to take advantage of the great new things HTML5, CSS3 and modern browsers have brought us.

### 2. The Problem of Audience Assumptions

We do a lot of work with enterprise companies at appendTo, and for all the crap that enterprises take for their organizational structure and ridiculous red tape, one thing I've  come to appreciate about them is that they usually do their research - because they can't afford not to. Sometimes to their detriment, but often to their profit. When your monthly site traffic is in excess of 20 million unique visitors, you can't just "wing it" on user experience decisions. You have to make data-driven judgement calls.

As developers, we tend to like data-driven decision. But we don't live in a vacuum, and most of us are part of companies or teams that are made up of more than just developers. What can sometimes happen in situations where we have the data, but are part of a larger group of stakeholders, is that it the data doesn't get to inform decisions as much as it should.

We have a key role to play in this equation: we are data-advocates. We have to speak up for the data, and for the users.

Data is pretty easy to come by these days. At least for web sites and web applications, Google Analytics alone can tell you most of the really key things you need to know to make informed decisions about who your users are, how your audience is finding you and arriving at your application, etc.

Most of the time the hard part is just putting the data to use properly - giving the data a voice. If you're a one man shop or part of a very small team this may not be an issue in your environment. But for many developers, we often find ourselves in situations where we need to speak up for the data we possess.

If a project lead is leaning toward cutting support for IE8 when you know that's still making up even 10% of your audience, *you're* the guy that has to fight for it. Sure, it's going to make you want to punch a wall for a few days while you're debugging IE8 issues for a few days later (like I did last week), but if it's the right thing to do, you need to speak up for it.

And unfortunately, many of us just ignore the data altogether in favor of just making general assumptions about our audience based on anecdotal evidence.

## In Practice: Core Tenants

Finally, as a review let's identify a few of the core tenants of developing with progressive enhancement. These are the things we need to be practicing, and advocating for:

1. *Basic content and functionality should be available in some form to all users.* This translates into writing semantic, content based markup, and serving it to all users. Don't create roadblocks.
2. *Enhancements to visual user experience (layout, design, interface) implemented through external stylesheets.* Providing fallbacks for browsers lacking support for advanced CSS techniques methods, or with javascript disabled.
3. *Enhancements to functional user experience (behavior) implemented through external, unobtrusive JavaScript.* Again, providing fallbacks for browsers with JavaScript disabled.
4. *End user browser preferences are respected.* Designing sites & apps that allow users to override settings with browser stylesheets or other methods (like simple browser zooming).

If we are careful to build these tenants into our development practices and advocate that others adhere to them too, we will find ourselves one battle closer to winning the web standards war. Because after all the web is for everyone, not just for modern browser users.

#### Some Tools & Resources
- [Caniuse.com](http://caniuse.com/)
- [Modern.ie](http://modern.ie/)
- [HTML5Please](http://html5please.com/)
- [The Web Standards Project](http://www.webstandards.org/)