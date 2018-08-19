---
title: Improving code review on GitHub
summary: Iterating on a software development workflow for the 20M power users by removing the friction and raising speed limits.
layout: casestudy
banner-image: /img/case-studies/case-study-github-improving-code-review-banner.png
thumnail: /img/case-studies/improving-code-review-banner-thumbnail.png
bodyclass: absolute-site-header
---

In September 2016 GitHub improved code review on pull requests with the [Pull Request Reviews](https://blog.github.com/2016-09-14-a-whole-new-github-universe-announcing-new-tools-forums-and-features/) feature.

Developers quickly adopted the feature as it formalized the process of discussing proposed changes within the pull request diffs and discussion views with tooling that emphasized reviews as a distinct object in the workflow, and added the ability to affect mergability through protected branches features like [requiring an approved review to merge](#), and [restricting review dismissal](https://github.com/blog/2330-restrict-review-dismissals-with-protected-branches).

After the initial impact of Pull Request Reviews ("PRRs"), we began to explore how we could iterate and improve on the GitHub code review process by building on the PRRs primitive.

PRRs were just the beginning of building an effective code review workflow on GitHub.

## Iterating based on feedback

PRRs laid a critical foundation for the code review workflow on GitHub. As we watched how developers used PRRs for the code review process with their collaborators and listened to customer feedback, we discovered a few common themes:

- **Collaborators** wanted a way to signal when their pull requests were ready for review, and to request review from specific maintainers or groups of maintainers.
- **Maintainers** wanted to require review prior to a pull request being merged to ensure that code wasn't merged carelessly or without sufficient review.
- **Maintainers** wanted to designate certain people as owners for specific files or directories corresponding to areas of responsibility.

### Initiating the review cycle

The first thing we noticed was that pull request authors needed a way to signal that their code was ready for review. While PRRs allowed for a formalized review process, often pull request authors aren't ready for review the moment they opened a pull request.

Many authors subscribe to an "open early for discussion" model of pull request review, where a pull request is opened on the first commit well before the bulk of a contribution's activity has occurred to help define scope and approach along with project maintainers, so they needed a way to signal when a pull request is ready for review.

### Reaching the right reviewers

Pull request authors also wanted a way to be able to request review from specific people. Often a project's maintainers and collaborators list is very large, so making sure a pull request gets reviewed by the right person or people could be difficult.

### Utilizing existing organization teams

GitHub already provided a powerful tool for maintainer organization with the teams feature, which allows organization defined groups of maintainers or collaborators to be @ mentioned in discussion threads. For organizations that effectively use teams, the ability to request review specifically from domain specific teams would...

### [Hypothesis]

By introducing a set of additional tools to supplement PPRs, we believed we could tighten the communication and synchronization gap between contributing developers and repository maintainers.

## Review requests

### Exploring solutions

![review requests workflow sketch](/img/case-studies/code-review-requested-reviews-workflow-sketch.png)

## Filtering pull requests by review state and pull requests dashboard

## Code owners

## Team review requests

## Protected branches support



---

### Humans involved in this work

- [Naomi Plasterer](https://github.com/nplasterer), Engineering lead (Review requests)
- [Joel Glovier](https://github.com/jglovier), Product design lead (Review requests)
- [Jessica Card](https://github.com/jessicard), Engineering contributor (Review requests, API & Graph QL)
- [Mike Skalnik](https://github.com/skalnik), Engineering review (Review requests)
- [Rob Sanheim](https://github.com/rsanheim), Engineering review (Review requests)
- [Joshua Peek](https://github.com/josh), Engineering review (Review requests)
- [Francis Batac](https://github.com/francisfuzz), Technical support ombudsman (Review requests)
- [David Graham](https://github.com/dgraham), Engineering manager, engineering review (Review requests)
- [Fabian Perez](https://github.com/fabianperez), Product design manager, design review (Review requests)
- [Jon Rohan](https://github.com/jonrohan), Engineering review, design systems (Review requests)
- [Diana Mounter](https://github.com/broccolini), Engineering review, design systems (Review requests)
- [Stephanie Wills](https://github.com/stephbwills), UI copy review (Review requests)
- [Ben Balter](https://github.com/benbalter), Community and Safety product management review (Review requests)
- [Mark Otto](https://github.com/mdo), Product design review (Review requests)
- [Ben Bleikamp](https://github.com/bleikamp), Product design review (Review requests)
- [Jenn Leaver](https://github.com/jleaver), Docs support (Review requests)
- [Connor Sears](https://github.com/connors), Director of Product Design, Leadership product reviews (Review requests)
- [Todd Berman](https://github.com/tberman), VP of Product Engineering, Leadership product reviews (Review requests)

- Engineering
- Product design
- Support: Jenn Leaver, Emily _______
- Docs
- Executive leadership

---

### URLs

- [GitHub features](https://github.com/features)
- [Code Review on GitHub features overview](https://github.com/features/code-review)
- [Pull request reviews Help doc](https://help.github.com/articles/about-pull-request-reviews/)

### On the GitHub blog

- [More code review tools](https://github.com/blog/2123-more-code-review-tools)
- [Review requests](https://github.com/blog/2291-introducing-review-requests)
- [Filtering pull request reviews and review requests](https://github.com/blog/2306-filter-pull-request-reviews-and-review-requests)
- [Protected branches review dismissal restrictions](https://github.com/blog/2330-restrict-review-dismissals-with-protected-branches)
- [Team review requests](https://github.com/blog/2389-requesting-reviews-from-repository-teams)
- [Code Owners](https://github.com/blog/2392-introducing-code-owners)

### In the news

- [GitHub introduces code owners for code review](https://sdtimes.com/code/github-introduces-code-owners-code-review/)
- [Own it: GitHub introduces Code Owners](https://jaxenter.com/github-code-owners-135673.html)
- [GitHub launches a Trello competitor, pull request reviews, redesigned profile pages](https://venturebeat.com/2016/09/14/github-launches-a-trello-competitor-pull-request-reviews-redesigned-profile-pages/)
