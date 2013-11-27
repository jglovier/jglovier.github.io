---
layout: blogpost
title: Quick Tip - OSX Easy Networking
imgclass: quicktips
categories: quicktips
---

<P>So you have more than one machine - say a Macbook Pro and an iMac, or two Macbook Pros, or a Mac Pro and a Macbook Pro - <em>whatever</em>.</p>

<p>Did you know you can simply plug them into each other with a Firewire cable?? (Or technically a USB cable, but data moves <b>really slowly</b> across USB. Firewire 800 es mucho mejor...)</p>

<p>At first, you'll see the other computer show up in Finder under "Shared", just like if you were connected to a local network in your office. When you mount the drive for that other computer, you'll only get that machine's "Public Folder."</p>

<h3>This is where it gets fun.</h3>

<p>SOOOOO if you want to use files from the other computer on your initial machine, all you've got to do is:

<ol>
<li>Go into System Preferences > Sharing > File Sharing on the computer that hosts the files you wish to access.</li>
<li>Under the column for "Shared Folders", click the little "+" icon at the bottom, and navigate to the directory that you want to share. <em>(TIP: just use your home directory if all your files to share are stored there.)</em>
<li>Then, under the column for "Users", click the "+" icon again, and choose "New Person".</li>
<li>Give the new account a name like "Macbook" or something more specific, and a password. This is the account your other computer is going to use to login to this machine and access files.</li>
<li>Then, make sure you either select "Read & Write" access, if you want to work on files directly on that machine, or "Read Only" if you want to only view files and copy them over to your other machine for editing.</li>
<li>Now, when you navigate to this computer from your other machine, you can choose "Connect As" from the Finder window, and use your loggin info to gain access beyond the Public Folder.</li>
</ol>

<p>Happy networking.</p>

<p class="disclaimer">I've been doing this myself now for a couple weeks, and it works great. Although, I have been experiencing a permissions error on one of my machines that Apple has yet to be able to resolve after talking with 5 AppleCare Advisors, includine a Sr. Advisor. The issue has been escalated to Apple Engineering, and may or may not be related to my recent networking setup between two machines. Just a fair warning.</p>