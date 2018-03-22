---
title: "Implementing the responsive redesign of TIME.com"
summary: "Working with the TIME.com web team, Doug Neiner and I implemented a complete responsive redesign of TIME.com to help make their content more accessible to readers across multiple devices."
layout: casestudy
banner-image: /img/case-studies/case-study-time-responsive-redesign.png
thumnail: /img/case-studies/case-study-time-responsive-redesign-thumbnail.png
bodyclass: absolute-site-header
---

In 2012 the online home of global news publisher TIME Magazine, [time.com](http://time.com/), was not easy to read on a phone's web browser. In fact, most news media wasn't easy to access on a phone's web browser at that time.

The Boston Globe, however, helped to usher in a new era of responsive web design by being the first major news outlet to feature a responsive web design – meaning it's content adapted to the device viewing it for an optimized reading and browsing experience for that device, regardless of screen dimensions.

On October 22, 2012, TIME Magazine followed suit by becoming the [first global news publisher](http://techland.time.com/2012/10/22/the-new-time-com-a-responsive-global-news-site/) to launch a responsive web design.

As part of the team at consulting agency [AppendTo](https://appendto.com/) (contracted by TIME for the project), I implemented a responsive design for TIME.com along with [Doug Neiner](https://twitter.com/dougneiner) (technical lead) and [Ralph Whitbeck](https://twitter.com/RedWolves) (project manager).

We partnered with TIME.com's in house design team, led by [Davina Anthony](https://www.linkedin.com/in/dmacreative), who provided the design for AppendTo's implementation, consisting of more than 200 PSD comps of the various TIME.com screens at each major responsive breakpoint ranging from 1122px down to 320px.

>We wanted to embrace our existing advertisers, not limit them – so we set a guideline for the use of traditional advertising sizes. The ads, however, needed to work in a fully responsive environment. appendTo produced a custom wrapper around TIME.com’s existing advertising solutions. This made the ad regions aware of the available real estate so the correct advertisement could be loaded on all devices. We’re happy and our advertisers are really happy. – Davina Anthony, Time.com Design Lead

## Background

Prior to the redesign, TIME.com was optimized for desktop browsers and had a separate mobile site for mobile devices. However, that left an experience that had a lot of gaps for users increasingly coming from different sized mobile devices, tablets, and other non-standard screens.

What TIME really wanted was an experience that has become standard today, but in 2012 was still very new: a responsive website that adapted to whatever screen size it was being viewed on.

The responsive web design movement was still just beginning to gain traction, but there were already a lot of well established patterns and best practices in place thanks in large part to pioneers of the movement like [Ethan Marcotte](https://ethanmarcotte.com/), whose A Book Apart book [Responsive Web Design](https://abookapart.com/products/responsive-web-design) influenced an entire industry of web designers seeking to adopt this new approach.

We also took inspiration from [Nicole Sullivan](https://twitter.com/stubbornella?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)'s [thinking](https://www.slideshare.net/stubbornella/object-oriented-css) on [OOCSS](https://github.com/stubbornella/oocss/wiki), and Jonathan Snook's [Scalable and Modular Architecture for CSS](https://smacss.com/) book as we approached the best way to architect the CSS.

With responsive design best practices in our tool belt, we took to implementing TIME.com's design into a functioning responsive website.

## The build process

Doug Neiner and I worked together to tackle the dozens of views that needed to be coded from the over 200 PSD files that the TIME design team provided using a [git](https://git-scm.com/) repository to collaborate together and provide code access and full revision history to the TIME.com development team to take over after our work was complete.

We started by establishing a plan for how we'd work together and a framework for our workflow. The very first code commit made was a README establishing general development guidelines, documentation for our intended development directory structure, and instructions for how to use the static spike we were building.

This was an important step to make sure our responsive spike was easy enough for any developer or stakeholder on the TIME.com implementation side to clone locally and quickly get started working with the responsive code we wrote, as they still had the final step of wiring it up and integrating it into their content management platform.

### Tooling

Front-end markup was written with HTML5, using semantically relevant elements like `<header>`, `<nav>`, `<section>`, and `<article>`. The TIME.com team also implemented their video player using HTML5 video. We used CSS3 for styling effects like rounded corners, shadows, gradients, and as many visual effects as possible to keep the page weight light.

We relied on the CSS preprocessor [Sass](https://sass-lang.com/) (SCSS flavor) with [Compass](http://compass-style.org/) to help make our style authoring workflow light and easily maintainable during development. We used Compass mixins to solve for vendor prefixing and custom functions to make responsive math calculations on the fly.

We reset styles with [Normalize.css](https://github.com/necolas/normalize.css), used [Modernizr](www.modernizr.com) to detect support or lack of for specific HTML, CSS, and JS features, and used [Respond.js](https://github.com/scottjehl/Respond) to help bring support to older versions of Internet Explorer.

[JQuery](https://jquery.com/) (at the time ver 1.7.2!) was our tool of choice for DOM manipulation and event binding. We used [RequireJS](http://requirejs.org/) for dependency management, and [Backbone.js](http://backbonejs.org/) for view structure and components.

## Responsive approach

Given the design approach by TIME.com's team utilizing consistent spacing between layout elements throughout the design's breakpoints, we used margin and padding in set pixel values for most spacing, and allowed percentage based widths with a fixed max width of 1122px to handle the responsive content flow.

To handle the sidebar which appeared on many of the template layouts and appeared at a consistent width until a much smaller breakpoint, we used a negative margin the same width as the element which effectively removed it from the block flow, allowing it to remain at it's full width while the rest of the layout around it fluidly responded to the viewport width.

Implementing TIME's design presented a few unique problems to solve.

### Transforming site header and footer navigation menus

### Pseudo responsive advertising

## Results



---

### References:
- [Case study from AppendTo's old website](http://web.archive.org/web/20130328070350/https://appendto.com/case-study/responsive-design-time-com)
- [Case study from AppendTo's redesigned website](https://web.archive.org/web/20150307022946/http://appendto.com:80/work/time-com-responsive-redesign/)
- In the news:
  - [Responsive Design Weekly #28](http://responsivedesignweekly.com/archive/responsive-design-weekly-28/)
  - [The New TIME.com: A Responsive Global News Site](http://techland.time.com/2012/10/22/the-new-time-com-a-responsive-global-news-site/)
  - [Case Study: Responsive Design for Time.com](https://responsivedesign.is/news/2012/10/case-study-responsive-design-for-time-com/)
- Stats:
  - Time.com General Manager, Craig Ettinger, revealed that their pages per visit increased 23% following their move to a responsive site.
