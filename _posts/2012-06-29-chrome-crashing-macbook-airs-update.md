---
layout: blogpost
title: Chrome crashing Macbook Airs (UPDATE)
categories: workflow
---

<p>So for everyone keeping track, Google has officially acknowledged that the current stable build of Chrome is causing a kernel panic (system crash) on the brand new Macbooks (Airs and Pros) with the Intel 4000 graphics chipset. Apparently it is in part due to the current Chrome build, and in part due to an issue with the Apple drivers even allowing an application to trigger a kernel panic (<em>meaning the OS shouldn't even be allowing an application to crash the whole machine at all</em>).</p>

<p>More info is available <a href="http://reviews.cnet.com/8301-13727_7-57463603-263/google-yes-chrome-is-crashing-macbooks/">from CNET on the whole issue here</a> (including the statement from Google).</p>

<p>In the short-term, you can run the Google Chrome dev channel which has installed a temporary workaround while they dig into the underlying issue. You can download a .dmg package to install the Chrome Dev channel here: http://dev.chromium.org/getting-involved/dev-channel</p>

<p>The version that includes the workaround is: <code>Version 21.0.1180.15 dev</code>.</p>

<p>To see what version you are runing, go to "Tools > About Google Chrome", and if it's any number less than the version above, then you don't have a ver with the temp fix.</p>

<p>Also, you can keep up to date with the issue by following Chrome's release blog here: http://googlechromereleases.blogspot.com/</p>