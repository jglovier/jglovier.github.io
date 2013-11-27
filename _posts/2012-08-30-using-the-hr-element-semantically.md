---
layout: blogpost
title: Using the &lt;hr&gt; Element Semantically
categories: code
---

I was doing a code review for a friend recently when I noticed something I've seen people do from time to time: use the `&lt;hr&gt;` (horizontal rule) element as a way to provide a border or line solely for sake of the page design.

For reference, the HTML5 spec from the W3C says the `&lt;hr&gt;` element is:

>The `&lt;hr&gt;` element represents a paragraph-level thematic break.
>[W3C specification](http://dev.w3.org/html5/markup/hr.html)

Remember, our goal when writing markup should always be to separate style from content by writing semantically meaningful HTML, and using CSS for presentation. Part of achieving that goal means being careful to use elements only for what they are intended to be used for, which means looking at them for how they describe your content, not how they relate to the page design.

The vast majority of the time when you need a border somewhere, you can accomplish it with either a CSS border rule on an existing element (such as `&lt;section&gt;`, `&lt;article&gt;` or `&lt;div&gt;`), or a background image (for any style of border that cannot be achieved through CSS styles alone). In extreme cases where you have to use an extra element just for a CSS hook it should always be a semantically meaningless element like `&lt;div&gt;` or `&lt;span&gt;`, and even in those cases I usually try to add a class with a relevant name just to help make the code more meaningful (more so for editors than for search engines). But most of the time it can simply be accomplished as a border style on an existing element.

For more info about the proper use of the `&lt;hr&gt;` element, here's a couple resources that explain what it's really for:

- [The small & hr elements](http://html5doctor.com/small-hr-element/)
- [The hr Element](http://www.whatwg.org/specs/web-apps/current-work/multipage/grouping-content.html#the-hr-element)