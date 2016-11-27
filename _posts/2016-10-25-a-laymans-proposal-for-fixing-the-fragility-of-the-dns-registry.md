---
layout: blogpost
title: "A layman's proposal for addressing the fragility of DNS"
categories: internets
---

*Disclaimer: I am not an infrastructure expert. My basic knowledge of internet infrastructure has been absorbed through osmosis while being a developer for the last 12 years, so the ideas in this blog post may be completely stupid. If you continue reading, just don't blame me for wasting precious moments of your life that you will never get back.*

Last Friday we saw one of the most widespread outages of significant websites that I can remember, the cause of which was a [DDoS attack on Dyn](https://www.wired.com/2016/10/internet-outage-ddos-dns-dyn/), a major DNS provider.

Someone was able to successfully DDoS one of Dyn's hosted clients via an IoT botnet, which rendered their networks unable to effectively serve DNS records for a number of the most popular websites on the internet, including Twitter, Spotify, GitHub, AirBnB, Reddit, Basecamp, Etsy, CNN, Pinterest, Yelp, Netflix, and [host of others](http://gizmodo.com/this-is-probably-why-half-the-internet-shut-down-today-1788062835).

This is some [scary shit](https://www.youtube.com/watch?v=gZjg81D-HT8). Seriously, the world is not ready for widespread outages of the internet, and there has even been speculation that we're not just dealing with some isolated, vigilante style attacks, but possibly something [much larger and organized](https://www.schneier.com/blog/archives/2016/09/someone_is_lear.html).

Regardless of who was behind Friday's attack, the fact that a core part of the infrastructure of the internet is so fragile is problematic. But what can be done about it?

DNS providers will certainly need to ramp up their DDoS mitigation strategies, but focusing on improving DDoS mitigation alone will likely yield the downward spiral of "if you get better armor and I'll just invent a better gun."

So what if the problem could be approached similarly to how Git solved distributed version control?

The brilliance of Git being a distributed VCS is that when everything goes offline, you can keep working. Git does this by keeping the entire history of a project on every collaborators local copy. So if the centralized host (GitHub.com, BitBucket.com, etc) is unavailable for whatever reason, you can keep working unaffected until you are able to sync your work with the centralized host again.

The parallel with DNS servers could be similar: if your browser just pings the centralized registry for the server address, why can't your local machine host the entire registry itself if needed?

The DNS registry could still function as the centralized host where changes are synced and distributed, but if it is unavailable your machine could simply fallback to your local copy of the registry until the centralized DNS host was available again.

There are some key challenges to solve in making a solution like this workable, of course, and these are only the challenges on a conceptual level from the eyes of a internet infrastructure layman.

Some of the key challenges I can identify:

### How to get the registry stored locally

It could become a part of your OS as a system level file, or something that browser vendors include in their browser package.

### Storage size of the registry

Assuming the registry size - even as a text file or CSV - is quite large, it would increase the distribution size of browser packages on your machine several fold. Implications for increase those sizes are that browsers are much more cumbersome to download on anything other than high speed internet connections, and more costly to run on your machine on machines with smaller storage.

Since I honestly have no clue how large the entire registry is, it might be that this is the fatal flaw in my logic. Or, maybe this would simply force a more realistic constraint, like only storing the top N records, where N criteria is something like most trafficked websites (even storing the top 5,000 records seems reasonable and would alleviate much of the frustration from widespread outages).

### How to keep the records up to date

On a daily basis, some number of DNS records are being updated constantly, so how often would your machine have to realistically connect to the host to stay in sync? For this reason pinging the DNS hosts could still serve as the default way to find a server address, and the local records would just be a backup that are synced weekly or some other reasonable period.

### Conflicts with DNS providers business model

This might be the hardest problem to solve, or at least the most problematic. I assume there is a business interest reason that DNS providers may not be too keen to alter their existing hosting model to a distributed model.

-

Despite the challenges, one would assume that keeping a registry of the most critical piece of infrastructure to the internet in such a way that accounts for outages shouldn't be very hard to solve, at least from a technical perspective. But perhaps that assumption just betrays my lack of knowledge about how DNS really works?

Obviously, the scope of major changes would involve a lot of players from DNS hosts, to browser vendors, and traditionally major changes that involve this many players don't happen quickly.

But for the future of the web, they are probably well worth the time and effort.

So what do you think? Are these dumb ideas? Is there a fundamental flaw in my logic that I missing because I'm just a layman? Or is there any merit to this path forward?
