---
layout: blogpost
title: My CSS Styleguid
---

One of the beauties of authoring code is that apart from basic syntax rules, formatting is flexible. But we all know there are best practices for helping make certain code more readable, and more friendly for collaborator environments.

Here's a suggested style guide for authoring SASS files (SCSS flavor specifically) based on my own personal experience. You may like what I've come up with (then use it), or you may not like it (then fork it). Either way I hope it gets you to think more critically about how formatting your code can lead to efficiency for yourself, and for your team.

```css
/* @group Style Category Name -------------------- */

.some-element {
    /* styles for the `self` item at the top */
    overflow: hidden;
    margin: 0 auto;
    background-color: #0099ff;
    border-bottom: 10px solid #fff;

    /* When less than 3, do inline */
    .some-child { background-color: #fff; display: block; position: relative;

        /* When 3 or more props, add new lines and brace after last */
        &:first-child {
            width: auto; height: 3em; /* group props onto 1 line for logical associations */
            margin: 0; padding: 0;
            display: block;
            position: absolute;
            top: 0; left: 50%; }

        .some-child-again { width: 50%; height: 40px; float: left;

            element { display: block; color: inherit; }

        }

}

/* @end style category name */
```