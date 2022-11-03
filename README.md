joelglovier.com [![Build Status](https://travis-ci.org/jglovier/jglovier.github.io.png)](https://travis-ci.org/jglovier/jglovier.github.io)
==================

![image](https://user-images.githubusercontent.com/1319791/102702995-1729ce80-421e-11eb-8a69-ac8288bf4ab7.png)

## About the Site

This site is my personal home on the web. I write about stuff, I link to other stuff, and I showcase stuff I've done/built/designed. It's purely personal in nature and does not necessarily reflect the views of my employer, my family, my community, or anyone else besides me. It's just where I share things I've built, written, or done.

It lives here: [joelglovier.com](http://joelglovier.com)

### Older versions, and a bit of history

I've been working on this site in various forms since around 2005. Initially it was just a customized Blogger page for a few years. Then, I designed and built the first version around 2008 after teaching myself to write HTML and CSS (and eventually some shoddy PHP). I launched the first version sometime around 2009. Ever since, I've been redesigning every few years. I've republished the older verions as repo dumps and GH pages just for fun and posterity.

- [2009 website](https://2009.joelglovier.com/) ([repo](https://github.com/jglovier/website-2009))
- [2011 website](https://2011.joelglovier.com/) ([repo](https://github.com/jglovier/website-2011/))
- [2013 website](https://2013.joelglovier.com/) ([repo](https://github.com/jglovier/website-2013/))
- [2015 website](https://2015.joelglovier.com/) ([repo](https://github.com/jglovier/website-2015/))
- [Current site](https://joelglovier.com/) (launched 2017)

## Running locally

1. Clone locally via GitHub Desktop, or via CLI: `git clone https://github.com/jglovier/jglovier.github.io.git`
2. Install dependencies using [bundler](https://bundler.io/): `bundle install`
3. Run the Jekyll Server: `bundle exec jekyll serve`
4. View in browser at `http://localhost:4000`

## Regular maintenance

This project currently is a static hosted site on Netlify, built with Jekyll (static site gen), and from time to time needs basic maintenance. Some things to keep an eye on:
- Is the gemfile up to date? If GitHub is showing a Dependabot alert for security vulnerabilities, it probably means you need to update the gemfile bundle (Bundler is used to maintain the gems). You can easily bump the gemfile.lock by running `bundle update` from the command line, pushing to a new branch, and merge it into `main`.
- Are builds still working? From time to time things change and the builds get borked (deprecated config values, Travis-CI makes some other change, etc). Just keep an eye on it.

## Licensing

Feel free to inspect the code structure, and reuse what is appropriate. But please respect that the files in the following directories are Copyright Joel Andrew Glovier. You may not reuse anything therein without my written permission:
- _posts/
- post-images/
- img/
- fonts/ (these fonts are licensed only for my own use)

All other directories and files are MIT Licensed (where applicable).
