---
layout: blogpost
title: Quick Tip - Bleed Guides in Photoshop
imgclass: quicktips
categories: quicktips design
---

<p>I just wanted to share this quick tip I stumbled on recently for setting up guides a little faster in Photoshop when you make a new document, specifically for print bleeds.</p>

<p>I design both for print and web all the time, and when designing for print, I always have to consider whether the document needs a bleed. Ninety nine point nine nine percent of the time in my experience the answer is yes. I just seldom design things without a bleed. VERY seldom.</p>

<p>While I do a lot of my print work in InDesign, I usually use Photoshop to create some type of document background image. Sometimes I create the entire design right in Photoshop, and export it as a JPG which I just set as a background object in an InDesign document, and then export it to PDF with print settings.</p>

<p>Adobe InDesign and Illustrator both have handy document functions for setting up a document's bleed, but sadly, Photoshop lacks that feature. You are limited to simply height, width, and resolution parameters for your document. There is no document setting for bleeds.</p>

<p>This means every time I want to create a new document for print with a bleed, I have to factor in the bleed dimensions into the documents total height and width. If I'm creating a 2" x 3.5" business card, for example, instead of creating a document that is actually 2" x 3.5" my document will be 2.25" x 3.75" to account for a .125" bleed on all sides.</p>

<p>Then I use "View > New Guide" to place guides in the exact spots where my document should have designations for bleed, actual document boundaries, and margins (like InDesign and Illustrator let you do natively, without need for a hack; not bitter).</p>

<p>The cumbersome part is calculating where you have to place those guides, as Photoshop only allows you to originate from the top left corner as a starting point. So while determining the left and top bleed, margin, and document boundaries are pretty simple, calculating the right and bottom gets to be a bit more mathematics than I enjoy dealing with because you have to subtract your values from the document's overall width to get the proper coordinates to enter.</p>

<h3>Enter my new process...</h3>

<p>So recently I realized that If I initially create my document at the final size without the bleed (in our example case it's the 2" x 3.5" size), I can snap my guides to the document edges just by pulling them down from the top and left rulers. Then, I can go to Image > Canvas Size... and simply adjust my canvas size to the new dimensions with bleed (2.25" x 3.75"), giving me the bleed I'm looking and with my guides in place without having had to calculate their distance from the edge.</p>

<p>It may sound like a petty thing, but when you have to do that all the time, it's a nice shortcut. Enjoy.</p>