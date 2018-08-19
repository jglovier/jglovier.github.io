---
title: "Making code review more powerful"
summary: "dummy text here replace with real summary"
layout: casestudy
---

When GitHub brought code review to the pull request workflow in 2016, it was not a random decision to try something new – it was the result of watching and listening to the people who use GitHub every day to build software (including ourselves).

The pull request workflow had always been intended to provide a forum for code review. The idea was that you open a "pull request" where a contributor requests their modified branch be merged back into the original codebase, and the pull request thread served as a forum to review and discuss the proposed changes.

Getting thorough review of your code, however, had plenty of friction that third party integrations like Code Climate, Reviewable, and [others](https://github.com/works-with/category/code-review) had sprung up to remove.

Seeing third party integrations solve a core problem with your product is both encouraging and discouraging. It means on the one hand that people care enough about your software to improve it, but on the other hand it often also means you're failing to do a fundamental job that your users are hiring you for.

Pull requests offered a forum for discussion of the PR itself (in the discussion timeline view), and a forum for commenting on code. But where it was lacking was:
- a proper way to signal as the reviewer whether you approve or reject the changes
- a way to group all of your line comments into a single unit that could be understood as your official code review
- a way to know how many people had reviewed the code, and what their review status was
