---
layout: blogpost
title: Quick Tip - Mountain Lion, Sandboxing, Mail.app & plist files
imgclass: quicktips
categories: quicktips
---

<p>So the last couple days I've encountered some issues with rebooting my new 2012 Macbook Air from sleep (new as in this years model, actually had it since early July) where when the machine would awake from sleep overnight it became unresponsive and I had to do a hard restart.</p>

<p>Today when it happened, I was able to get the Console open before it became completely responsive, and noticed a particular error message from Mail.app that was occurring every few seconds:</p>

<img src="http://media.tumblr.com/tumblr_m9vpray3Sd1qh12k4.png" />

<p>The error reads:</p>

<blockquote>
<p>9/5/12 8:10:50.782 AM sandboxd[737]: ([693]) Mail(693) deny file-read-data /Library/Preferences/com.apple.mail.plist</p>
</blockquote>

So I did a little bit of Googling and arrived at <a href="https://discussions.apple.com/thread/4178698">this Apple Support discussion thread</a>, where several people were experiencing the same issue (specifically the plist file error, not sure about the machine becoming unresponsive).</p>

<p>Turns out with the new app sandboxing requirements of OSX Mountain Lion, apparently Mail.app cannot properly access it's own plist file. Fortunately, the fix is very simple: simply delete that plist file, and Mail.app will recreate a new one in the proper location that it can now access with the new sandboxing restrictions.</p>

<p>I'm still not sure whether this was the exact cause of my machine becoming unresponsive, or if it was the 9 browser windows I had open with a total of 70-80 tabs...but at least there's a solution to the plist file problem. :-)</p>