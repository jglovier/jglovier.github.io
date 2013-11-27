---
layout: blogpost
title: Browser-based CSS Authoring FTW
imgclass: mountain
categories: design code internets
---

<p>So I write my stylesheets in the browser. Or at least - I prefer to. I have been doing this for a few years now, ever since I discovered <a href="http://chrispederick.com/">Chris Pederick's</a> amazingly useful <a href="http://chrispederick.com/work/web-developer/">Web Developer Toolbar</a> addon for Firefox back around 2008.</p>

<p>I had started like most everyone else, authoring styles in my code editor, saving, and then refreshing the browser. But when I discovered that the WDT let me edit stylesheets live in-browser with real-time updating (well at 200 ms refresh rate it might as well be real time). It changed my whole approach to CSS. Well, it made me much more efficient anyway.</p>

<p>Taking away the steps of "Cmd+S", "Cmd+tab" (to switch to browser), and "F5" may not seem like a monumental time savings, but when you consider that you may do that after every few properties you write, or at least after every set of rules - you may end up doing those actions thousands of times in the course of a project.</p>

<p>But the real boost in productivity I would assert is not the mere mechanical movements you avoid, it is from the mental distraction you avoid having to remember to do those extra steps over and over. Rather than having to think about when and how often you are going to check your code live in-browser, then stop your flow to actually do it, when you author live in-browser you can completely trash those steps from your mind, allowing you to focus completely on authoring.</p>

<h3>And then there's the kicker...</h3>

<p>It's all about creating an immediate connection with what you are creating. I was never quite able to sum this part of it up into any type of sensible description until I watched <a href="https://vimeo.com/36579366">this video</a> of a presentation by <a href="http://worrydream.com/">Bret Victor</a> at a conference. In the video, titled "Inventing on Principle" (which is WELL worth the watch), Bret discusses the importance of creators having an immediate connection to their work, and how we as programmers often settle for less than that by having to write code, imagine it's results only in our minds, and then double check by compiling or browser-refreshing after it's written. Bret even demos a scenario using what appears to be custom a custom built code editing environment where he is able to see the results of his code while he types and edits it, leading him to discover new interactions that he wouldn't be able to otherwise observe without live editing.</p>

<p>To a large extent this is a constraint of our modern toolset. But to a very real degree, this is also just an artificial limitation of the way we've patterned ourselves to think and practice our craft apart from the tools we currently have in place. If we decided and insisted that what we have is insufficient, we could easily find or make a solution. We do that all the time for stuff we think is not good enough.</p>

<h3>Then why do most people still author in the editor?</h3>

<p>Good question. When it comes to authoring CSS, I really just don't know - other than that it is just what we've settled for, and accepted to be "good enough." And there are already solutions out there (like the <a href="https://addons.mozilla.org/en-US/firefox/addon/web-developer/">Web Developer Toolbar</a> addon, although at this point you're pretty limited to developing Firefox if you want to effectively use those Edit CSS features) so you don't have to keep doing it the same old tired way.</p>

<p>But why couldn't the same apply to programming in object oriented languages? Or any other type of coding for that matter? It's really just a matter of how long we will wait until we decide that the way we are doing things is not good enough, and begin to push for a change.</p>

<p>That's what I'm trying to do here. Push for a change. Unfortunately, my programming skills don't include being able to write a new code editor, or browser extensions to accomplish what I'd really like to see. But that's why I'm writing about it. Hopefully this may stir up the same discontent in others who can improve our existing toolsets, or create new ones.</p>

<h3>My stake in the matter:</h3>

<p>Even CSS authoring can improve. While I've described to you what I believe to be a much better workflow than the traditional one by using the WDT Edit CSS feature, there's tons of room for improvement even just in the CSS authoring area. One major shortcoming of the existing toolset is that it does nothing to help you if you've chosen a CSS preprocessor for your project (the whole Firefox issue only thing not withstanding as another major shortcoming).</p>

<p>That's something I'm not content with. I'm not satisfied to simply accept that if I'm going to choose a CSS preprocessor like SASS or SCSS that means that I cannot author my styles in browser. It's just not sufficient.</p>

<p>So what can we do about it? How can we change the status quo?</p>

<p class="disclaimer">EDIT: BTW, here's <a href="http://productforums.google.com/d/topic/chrome/OQmnwvU9mYA/discussion">a link to the feature request</a> I submitted for a few CSS authoring improvements to Chrome earlier this year. Feel free to weigh in there, too!</p>