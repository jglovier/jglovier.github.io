---
layout: blogpost
title: The secret to using HTML character entities as content in a CSS
postLink: http://www.evotech.net/blog/2007/04/named-html-entities-in-numeric-order/
postLinkText: Named HTML entities in numeric order
imgclass: code
categories: code
redirect_from:
  - /writing/2011/the-secret-to-using-html-character-entities-as-content-in-css/
  - /the-secret-to-using-html-character-entities-as-content-in-css/
---

<p>So yesterday I was trying to style a blockquote element on <a href="http://cure.org/hydrocephalus">a landing page</a> and I wanted to use the cool technique <a href="https://twitter.com/#!/chriscoyier">Chris Coyier</a> emphasized at <a href="http://frontenddesignconference.com/">Front End Design Conf</a> this summer to accomplish it: <a href="http://css-tricks.com/9516-pseudo-element-roundup/">CSS :before/:after pseudo elements</a>.</p>

<p>
The trouble is, I was trying to use the character entity for a left double quotation mark as the content, but it wasn't turning out right. Firefox was straight up ignoring the ISO code, and Chrome was rending the code as text.
</p>

<p>I tried simply pasting the character in from Microsoft Word, but that only partly worked.</p>

<p>To anyone missing the issue here - it is that I was trying to use the ISO code for a left double quotation mark, which is different than a plain quotation mark. The plain quotation mark can be accomplished in HTML by typing the quotation button on the keyboard. But to achieve the double quotation mark - which is essentially the same thing except the former is a straight mark, and the latter is curved toward the text - you have to use the ISO code.</p>

<p>Back to my problem - the ISO code was generating...code.</p>

<p>I <a href="https://twitter.com/#!/jglovier/status/117252487366459392">tweeted the issue</a> and another friend from the conference, <a href="http://www.minamarkham.com/">Mina Markham</a>, showed me the answer: <a href="http://www.evotech.net/blog/2007/04/named-html-entities-in-numeric-order/"><strong>you have to use unicode or ASCII text.</strong></a></p>
