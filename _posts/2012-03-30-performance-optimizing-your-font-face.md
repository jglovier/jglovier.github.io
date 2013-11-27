---
layout: blogpost
title: Performance optimizing your @font-face
categories: performance css
---

<p>If you're like any modern web designer worth their salt, you love you some @font-face. And with the <a href="http://arstechnica.com/apple/news/2012/03/signs-in-mountain-lion-point-to-retina-display-coming-this-summer.ars">coming of the retina display</a> to laptops (still rumored of course), you know that @font-face will save us all. <a href="http://www.zeldman.com/2012/03/23/web-type-will-save-us/">You do know that, right</a>?</p>

<p>There is of course two popular ways to implement your webfonts. You can use the tried and true method of converting your web-licensed fonts to a CSS ready package from <a href="http://www.fontsquirrel.com/fontface/generator">Font-Squirrel's generator</a>, or you can use a slick javascript based implementation from everybody's favorite recently Adobe aquired startup, <a href="https://typekit.com/">Typekit</a>.</p>

<p>Typekit of course gives you a whole library at your disposal, depending on the pricing plan you sign up for, making it a pretty robust choice for designers working on lots of projects.</p>

<p>The self-hosted, CSS based option (Font-Squirrel, <a href="http://www.google.com/webfonts">Google Fonts API</a>, etc), however, turns out to be the more performance friendly option. Especially when you dig a little deeper...</p>

<h3>We don't need no stinking basics</h3>

<p>Font-Squirrel has tons of free webfont kits already setup for you on their site, with pretty standard settings. But we don't want "<i>pretty standard</i>" performance, we want <b><i>optimized performance</i></b>, baby!</p>

<p>This is where we instead go to <a href="http://www.fontsquirrel.com/fontface/generator">the generator</a>. The deal here is that you can upload local files and then create your own advanced settings for the @font-face kit that results. If you want any of the fonts on Font-Squirrel but wish to use the generator, just download the basic font to your local, and then upload it again to your generator.<p>

<p>There's several settings that you'll want to be mindful of, and with some basic understanding you can pick the correct performance-optimized options. For more details on this, you've GOT to check out this excellent article from <a href="http://www.artzstudio.com/2012/02/web-font-performance-weighing-fontface-options-and-alternatives/">Artzstudio.com: Web Font Performance: Weighing @font-face Options and Alternatives.</a></p>

<h3>Enter the Basic Latin subset</h3>

<p>I was already familiar with most of the performance optimized settings, but it wasn't until after my friend and fellow CURE colleague <a href="http://jkleinschmidt.wordpress.com/">JK</a> forwarded me that article that I found out about the Basic Latin subset.</p>

<p>So it turns out that in the Font-Squirrel generator, if you select "Advanced", and then under "Subsetting" you select "Custom Subsetting", you can drastically reduce your font file size by selecting only the set of characters you're only going to be using on your site. So if you only plan to use English language on your site (and don't intend to support things like Google translate mind you), then you can pretty safely select only "Basic Latin" from the "Unicode Tables" category, and leave everything else unchecked.</p>

<p>If it turns out that Basic Latin doesn't cover all of your needs, you can either add additional categories as needed, or even add single characters to the set! What this means is that your resulting font file will only contain the characters you need, thus dramatically reducing the overall file weight, and in turn reducing the user's load time.</p>

<h3>BONUS: Data URI</h3>

<p>One thing <a href="http://www.artzstudio.com/2012/02/web-font-performance-weighing-fontface-options-and-alternatives/">the article</a> does not talk about that I always recommend is using the Data URI option. Under "CSS Options," be sure to check the "Base64 Encode" (<a href="http://cl.ly/FRR8">screeenshot</a>).</p>

<p>What this does is convert the font file to a Data URI, which essentially means that the font file is embedded directly in your stylesheet as Base64 data. It makes your stylesheet longer, but it reduces the number of server requests that the users browser will have to make for loading the page. So overall it's a win.</p>

<p>Plus, if you are using a service like Tumblr, or even a CDN where your stylesheet is referencing assets held on a server that your site doesn't live on, Firefox does't like that (without designated accepts headers anyway) and you have to use this method if you want your webfonts to show up in Firefox. So it's a win-win.</p>

<p>But for it to really be performance positive (and not neutral or negative) I suggest using only the Data URI, and removing the previous declaration in the generated stylesheets for the linked font versions.</p>

