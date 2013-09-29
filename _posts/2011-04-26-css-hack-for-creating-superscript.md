---
layout: blogpost
title: CSS Hack for Creating Superscript
---

<p>So I'm working on <a href="http://cure.org/mothersday">this page</a> at CURE.org which we are launching shortly, and I noticed that my super-script dollar signs in the appeal offer look off in Chrome.</p>

<p>Everything looks just fine in Firefox 4, but Chrome doesn't look so great. What in the world...</p>

<p>At first I thought there must be some line-height bug in one of the two browsers, but it seems what is actually happening is some discrepancy with how Chrome and Firefox render changes to the CSS property for vertical-align.</p>

<p>I don't like discrepancies. Lack of support is one thing, because you can work around lack of support with progressive enhancement. But discrepancies just drive me nuts.</p>

<p>In this case, I decided to look for a workaround...OK, actually a hack.</p>

<p>And I found one <a href="http://stackoverflow.com/questions/501671/superscript-in-css-only/501689#501689">here</a>.</p>

<p>Turns out there is a sweet little hack (as sweet as a hack can be of course) where instead of using the CSS vertical-align property with a value of "super", we can use a combination of the following properties to achieve roughly the same effect, without throwing off the line-height across browers.</p>


<pre><code><span class="html-element">&lt;p&gt;</span>
  <span class="html-element">&lt;span class="<span class="attribute-value">super</span>"&gt;</span>$<span class="html-element">&lt;/span&gt;</span>
  100
<span class="html-element">&lt;/p&gt;</span>

<span class="html-element">&lt;style&gt;</span>
<span class="css-selector">.super</span> {
    <span class="css-property">font-size</span>:<span class="css-property-value">80%</span>; <span class="comment">/* or designate an appropriate px or em value here */</span>
    <span class="css-property">position</span>:<span class="css-property-value">relative</span>;
    <span class="css-property">top</span>:<span class="css-property-value">-.5em</span>; <span class="comment">/* alternatively, you could use a positive bottom value */</span>
}
<span class="html-element">&lt;/style&gt;</span></code></pre>