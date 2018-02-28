---
title: Improving code review on GitHub
summary: Iterating on a software development workflow for the 20M power users by removing the friction and raising speed limits.
layout: casestudy
banner-image: /img/case-studies/case-study-github-improving-code-review-banner.png
thumnail: /img/case-studies/improving-code-review-banner-thumbnail.png
bodyclass: absolute-site-header
---

In 2016, GitHub improved code review on pull requests with the [Pull Request Reviews](https://help.github.com/articles/about-pull-request-reviews/) feature.

Developers quickly adopted the feature as it formalized a process pattern of discussing proposed changes within the pull request diffs and discussion views with tooling that both encapsulated reviews as a distinct object in the workflow, and added the ability to affect mergability through protected branches feature like requiring an approved review, and [restricting review dismissal](https://github.com/blog/2330-restrict-review-dismissals-with-protected-branches).

After the initial impact of Pull Request Reviews, we began to ask how we could continue to iterate on and improve the code review process on GitHub by building on the PRR primitive. Pull Request Reviews were just the beginning of building an effective code review workflow on GitHub.

## Understanding the problem

Pull Request Reviews laid a critical foundation for the code review workflow on GitHub. But as we observed how developers used Pull Request Reviews for the code review process with their collaborators, we found areas that we could improve based on the most common needs we saw.

### Initiating review

The first thing we noticed was that pull request authors wanted a way to request review when their code was ready for review. While Pull Request Reviews allowed for a formalized review process, often pull request authors aren't ready for review the moment they opened a pull request.

Many authors subscribe to an "open early for discussion" model of pull request review, where a pull request is opened on the first commit well before the bulk of a contribution's activity has occurred to help define scope and approach along with project maintainers, so having a way to signal when a pull request is ready for review was a commonly heard piece of feedback.

### Reaching the right reviewers

Pull request authors also wanted a way to be able to request review from specific people. Often a project's maintainers and collaborators list is very large, so making sure a pull request gets reviewed by the right person or people can be difficult.

### Utilizing existing organization teams

GitHub already provided a powerful tool for maintainer organization with the teams feature, which allows organization defined groups of maintainers or collaborators to be @ mentioned in discussion threads. For organizations that effectively use teams, the ability to request review specifically from domain specific teams would...



### [Research]

### [Hypothesis]

## Exploring solutions

## Testing, gathering feedback, and iterating

## Shipping to real people

## Measuring results & iterating

---

URLs
- [GitHub features](https://github.com/features)
- [Code Review on GitHub features overview](https://github.com/features/code-review)
- [Pull request reviews Help doc](https://help.github.com/articles/about-pull-request-reviews/)

GitHub Blog
- [More code review tools](https://github.com/blog/2123-more-code-review-tools)
- [Review requests](https://github.com/blog/2291-introducing-review-requests)
- [Filtering pull request reviews and review requests](https://github.com/blog/2306-filter-pull-request-reviews-and-review-requests)
- [Protected branches review dismissal restrictions](https://github.com/blog/2330-restrict-review-dismissals-with-protected-branches)
- [Team review requests](https://github.com/blog/2389-requesting-reviews-from-repository-teams)
- [Code Owners](https://github.com/blog/2392-introducing-code-owners)
