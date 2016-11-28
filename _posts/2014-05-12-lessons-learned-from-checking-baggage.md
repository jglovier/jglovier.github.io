---
layout: blogpost
title: "Lessons learned from checking baggage"
subhead: "Or, multiple points of success"
categories: design user-experience product
hnlink: "https://news.ycombinator.com/item?id=7734749"
---

It's no secret that airlines have been trying to push their profit margin and increase ticket sales at the same time by a relatively common practice where travelers must pay an extra fee to check bags. Many travelers can get away with bringing only a carry on bag, and those who don't are often traveling on their company's dime so don't have to think about the extra cost anyway.

So, as a whole, the market has decided this practice can continue. No harm, no foul.

## Delta and United: a personal story

I used to travel Delta out of my small, local airport in Harrisburg, Pennsylvania. Delta has long offered what I feel is a quality service, worth the normally higher fare than other airlines. They were one of the first companies to offer an excellent mobile app, they've had newer planes, they had a credit card that allowed me to check bags for free and get priority boarding, and it's where my status was.

But that changed recently, when Delta made some key changes to their Skymiles rewards program hurt travelers like myself who travel much more than the average person, but significantly less than the business travelers who travel very often. Despite having flown across country several times last year, I ended up just shy of having any status at all for this year. And to top it off I was going to have to pay $195 this year to keep my Delta Skymiles credit card - which is a ridiculous value proposition. So last month I switched to United.

Last week I flew from Harrisburg to my company's office in San Francisco for a week of work and strategy meetings in the office, and I had to check a bag. With Delta, I had grown used to being able to check my bag for free via the Delta airlines app where it recongized that I was a Skymiles credit card holder (despite not having booked the flight on my Skymiles card), and it always allowed me to check for free right from within the app.

## Strike one: business model problems

United, however, will only allow me to check my bag for free if I'm a MileagePlus Explorer credit card holder (which I am) AND have booked my flight with that card. Since my company books all the flights for me with the company's card, I had to pay for the bags anyway.

Not the end of the word, certainly. I could always expense the baggage fees, and since my United ticket was considerably lower than the Delta options anyway, the extra baggage fees would not be a significant impact on my net cost of travel, even if it would cost me some extra productivity time to complete an expense form.

However, what the United business model is doing by forcing me to use my MileagePlus card to get the benefit is making it feel like a much less valuable benefit than the same perk in the Delta ecosystem.

## Strike two: technology problems

When I arrived back from my trip this weekend and sat down to file my expense report this morning, I checked my email for the receipt from my baggage fees. Even though the United app prompted me to enter an email address where the baggage fee receipts would be sent, I never received one. I searched all of my email accounts in case I entered the wrong one, and I searched the junk mail folder. Nothing.

It seemed odd that the app would explicitly ask me to enter an email address for my receipt and never send one to me, but perhaps there is a bug in their app. So I tried looking for a place in the app to email a copy of the receipt to myself, but I cannot even find my previous flights, much less the purchase of checked baggage.

"Well certainly I can go to the website to print out the receipt,"" I thought. I was, of course, mistaken.

On the [united.com](https://united.com) website there is not discoverable place where I can print a receipt for my checked baggage purchase. Seriously tell me this is not ridiculous. In fact, I cannot even find a place to view a receipt for my past flights, though I can view a receipt for my upcoming flights.

Contrast this experience with United's technology to my experience with Delta's, where even if the UI was a bit difficult to navigate I could at least find what I was looking for. I've been able to print out receipts for past trips from Delta's website before - although admittedly finding the functionality felt a bit like being Nicholas Cage in National Treasure. But at least it was, ultimately, discoverable.

## Strike three: customer service problems

Finally, after digging around for an inordinate amount of time on the United app and on United.com, I gave in and figured I'd brave the path of contacting Customer Service.

Actually locating a phone number to speak to someone about what I was trying to do was basically impossible, even after using the "Ask Alex" feature (which said I'd need to contact customer care). So I settled for calling the best alternative number I could find on United's [Contact Us](https://www.united.com/web/en-US/content/Contact/reservations/default.aspx?camp=virtual_expert) webpage: the Reservations and Information line.

By this point I expected nothing other than a crappy, automated user experience nightmare. And finally, United lived up to my expectations. After being presented with several vague options and a "more options" option, I tried just pressing `0` to speak to someone. The automated system didn't like that, of course, and suggested that if I would just pick an option it could get me to the correct person. So I listened again, and this time went with the "more options" option, since I knew that what I was calling for had nothing to do with the basic presented options like "book a flight", "flight status", "existing reservation" or "mileage plus".

Eventually, after more rounds of options, and continuing to hit `0` a couple more times, the system was thoroughly convinced I actually *did* need to speak to someone.

Unfortunately, however, my experience speaking with a representative was just further proof of how broken the United system is. While the agent was friendly and polite, she was completely unfamiliar with my dilema or how to help me. She almost transferred me to another department a couple times before eventually deciding that she could try to handle my request for a receipt herself. However, in the end she went through several steps of taking information from me just to inform me that my request for a receipt had been submitted and would be processed within 14 days.

Fourteen days?!?! I'm trying to complete my expense report today, not two weeks from now.

Then when I offered politely to the agent some feedback that perhaps she could pass on to people who manage that type of thing that the entire experience of checking baggage on United is broken, she listened to me then told me to go to United.com, find the Contact us page, then find the leave feedback link and fill out [some huge form](https://www.united.com/web/en-US/content/Contact/customer/default.aspx) where I could type up my sentiments into a little, faceless/voiceless input box.

## Learning a valuable lesson

So in the end United Airlines has created a customer experience where you can feel completely frustrated, and unimportant from start to finish. It's certainly making me rethink whether leaving Delta for United was the right decision, but I'm guessing that wasn't what they are going for.

Now matter how much I may feel like United hates me as a customer because of how crappy the experience of checking baggage has been, I'm guessing is nobody designed this experience with the intention that I would feel this way about it.

However, *not designing for people to feel terrible*, and *designing for people to feel wonderful* and two completely different things. In fact, not designing for people to feel terrible is almost always a failure because it's not actually a thing. It's just the lack of a thing. It's the lack of any intentions that could create a negative experience, but lacking intentions is not where things happen, it's where things fail.

What I'm left with is the impression that my experience is likely the result of a very complicated system that was likely driven by many different people, many different teams and departments, many different signoffs, many different designs and many different goals. The greatest failure of United in my particular experience may simply be too many factors going into an end result.

### Everyone knows this problem

The cool thing here, though, is that everyone knows this problem. United's particular situation may be an extreme example, but we all of us who design and create products have experienced the problems that result from any of those factors. We may not work in environments where all of those conditions are true (bloated product requirements, too many managers, refusal to kill features, etc), but anyone can point to examples of one or some of those conditions within any team or organization.

So in a very real sense, we can all relate to the United environment that produced my particular crappy customer experience. We may pride ourselves in not being part of a system like that, or in standing against those type of processes and conditions that lead to horrible user experiences, but if we are honest, we can at least relate.

### Multiple points of success

The amazing thing about this story is that from United's perspective, there is tons of opportunity for improvement. My bad experience wasn't the result of one missing solution, it was the result of many missing solutions. A single solution introduced along the way would have kept me from having an failure in the end.

Multiple points of failure mean many opportunities for solutions.

As someone who builds product, I'm always thinking about ways to improve our product. Our team is constantly, deliberately, and obsessively turning over every stone, hoping to discover some incredibly significant angle that we can use to improve the customer experience for the humans that use our tool. But the reality is that customer experiences do not live and die by a single feature or change. They are the sum of dozens of individual experiences with interacting with our products.

And to the extent that we are making little improvements all the time, we have tremendous power to slowly, gradually, and meaningfully cultivate positive user experiences. Just think if any one of the above points of failure in my experience with United had been resolved, I likely would not have ended up being so frustrated that I took to writing about my experience in gory detail. My experience still may not have been the most awesome it could possibly be, but I would have at least ended up satisfied, rather than in completely frustration and reconsidering whether I want to even be a United customer.

If you design and build experiences for others, play the long game. The long game involves lots of small victories and small wins. It can feel tedious and there will be long stretches where you aren't sure if you're even making progress. But if you can choose to focus on simply solving real, practical problems all the time, you will ensure that the people who engage with your work feel like there is a real solution behind the thing they are using, not just an endless succession of failures.
