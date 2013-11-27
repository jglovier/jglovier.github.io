---
layout: blogpost
title: Better browser compatibility for :last-child
imgclass: code
categories: code css
---

<p>So you're working on styling a list of elements that have borders between them. Of course everyone knows to style said list of elements you can just apply a <code>border-bottom</code> property in your CSS and then remove the very last elements border with <code>li:last-child</code> and set the <code>border-bottom</code> to <code>none</code>.</p>

<p>But does everybody also know that the browser compatibility for <code>:last-child</code> is lacking in everyone's favorite Microsoft browser past version 9? That's right.</p>

<p>Well thanks to my esteemed colleague <a href="https://twitter.com/#!/dougneiner">Doug-E-Fresh</a>, I learned a great workaround that extends browser compatibility all the way back to IE7.</p>

<h3>The Hack</h3>

<p>Okay, so it's not really a hack, but kindof. It's more of a work-around really. What you need to do is use the <code>:first-child</code> selecter instead of the <code>:last-child</code> selector. Why? Because IE supports <code>:first-child</code> all the way back to IE7. Why they didn't add support for <code>:last-child</code> until IE9 is beyond me, <a href="http://www.quirksmode.org/css/contents.html">but that's the reality of it</a>.</p>

<p>Then you've just got to reverse your styles a bit to accomodate for <code>:first-child</code> overwritting. Instead of the <code>border-bottom</code> rule, you'll use <code>border-top</code> and then reset that value to <code>none</code> with your <code>li:first-child</code> selector.</p>

<p>Boom. That just happened.</p>