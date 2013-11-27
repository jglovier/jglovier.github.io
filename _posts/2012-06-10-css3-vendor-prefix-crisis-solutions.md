---
layout: blogpost
title: CSS3 Vendor Prefix Crisis Solutions
postLink: http://www.sitepoint.com/css3-vendor-prefix-crisis-solutions/
postLinkText: CSS3 Vendor Prefix Crisis Solutions
categories: code css
---

<div class="media link">
  <a href="{{ post.postLink }}">{{ post.postLinkText }}</a>
</div>

<p>So the above link is to an article over at Sitepoint.com talking about the "CSS3 vendor prefix crisis" and some proposed solutions.</p>

<p>If you're not familiar with the "crisis", it looks something like this:</p>

<p>So there's a bunch of properties in the CSS3 spec that are either new or not completely defined by the spec yet, and developers want to use them anyway. Ergo, browser makers have listened to developer and started implementing support for said properties. But for concern that the spec will change, or the implementation on the browser vendor's side isn't fully settled on yet, developers have had to use "vendor specific prefixes" to the properties like,  <code>-webkit-</code>, <code>-moz-</code>, <code>-ms-</code>, <code>-o-</code>, etc.</p>

<p>These vendor specific prefixes are sort of like a caveat in the stylesheet that says, <q>"this is not an official spec implementation, but just a tentative implementation as decided on by the specific browser vendor being targeted."</q></p>

<p>Problem is, it's getting rediculous. To cover support for any given property on as many browser as possible, devs have to write dozens upon dozens of extra lines of code in a given stylesheet because of these prefixes.</p>

<p>Take for example the humble but mighty CSS3 <code>transition</code> property, which theoretically must be written as such to cover a full range of browser support:</p>

<p><pre><code>
element{
-webkit-transition: all .3s ease;
-khtml-transition: all .3s ease;
-moz-transition: all .3s ease;
-ms-transition: all .3s ease;
-o-transition: all .3s ease;
transition: all .3s ease;
}
</code></pre></p>

<p>In addition to causing <a href="http://en.wikipedia.org/wiki/Code_bloat">code bloat</a>, an even more current piece of the vendor prefix crisis discussion centers around browser makers beginning to add support for <strike>other browser vendor's prefixes</strike> <code>-webkit-</code> specific prefixes. The reason for this is simply that <strike>webkit is so freaking awesome</strike> webkit's flavor of implementations have become so popular that many devs have begun only using <code>-webkit-</code> prefixes and neglecting other vendor prefixes, making the other browsers appear subpar in their page rendering because only -webkit- is gettin' the lovin'.</p>

<p>So take a few minutes and read the article from the link above to see what some of the proposed solutions are to this crisis, and what the pros and cons are. I won't spoil it for ya.</p>

<p class="disclaimer"><em>NOTE: I'm not necessarily advocating for any solution mentioned by Sitepoint's article - I just think it's an interesting look at the problem and the solution from several vantage points, comparing PROS and CONS.</em><p>

<p class="disclaimer"><em>Personally, I think the right answer is that developers need to begin to stop using vendor specific prefixes altogether (may be practical...may not be) and force browser makers to simply implement non-vendor specific versions of the property in an aim toward same markup for all browsers. AGAIN, may or may not be practical, but from a purely philosophical standpoint that's my opinion.</em></p>