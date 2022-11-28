---
title: "Exploring the Results"
chapter: true
weight: 3
---

# Exploring the Results

At this point, we have completed the following steps:
- registering applications,
- scanning them,
- uploading the scan results,
- and enriching those results with survey answers,

Now, we move on to exploring the insights for the applications.

{{% notice info %}}
This workshop follows a bottoms-up approach, which means that we'll first explore the individual results for the applications we just scanned and then we'll see how they are consolidated into the whole portfolio. Following this workflow, you may see information about the other apps and the whole portfolio. Worry not - we'll get to that in the next chapter.
{{% /notice %}}

## Overview

This chapter will perform a deep dive into our two applications on the following aspects:
- **Cloud Readiness**: How fit are the applications for being deployed onto PaaS? And what can we do to improve the process?
- **Software Composition**: What are the risks posed by the third-party libraries leveraged by our apps?
- **Software Health**: How good is the app's code itself? Is it sturdy, clear and maintainable?

All these aspects are fundamental to drive a move-to-cloud or modernization project, and we'll see later how each can impact the project.

## Where to find our new apps

Let's find our way back to the main *home page* by clicking on ***HOME*** in the top menu. Now, let's scroll down on that page until we see the list of ***Latest Onboarded Apps***:
![Latest Apps](/images/DetailedIntro-1.png)

{{% notice info %}}
If at this point you can't see the apps in the list, it could be that you've been faster than CAST Highlight. Once an application's results are submitted, the web portal takes a few minutes to recalculate all of the portfolio's demographics. Grab a cup of coffee before refreshing the page.
{{% /notice %}}

Click on the name of *jAlbum* and you'll be taken to

## The Application's Dashboard
![App Dashboard](/images/DetailedIntro-2.png)
This is the indivual page for this application. From here, we'll be able to access all the data extracted from it. Without going too far, you can already see the following info (most KPIs are calculated on a scale of 0 to 100):
- ***Software Health***, which is the average of 
	- ***Software Resiliency*** (how **sturdy** the application is)
	- ***Software Agility*** (how **maintainable** the application is)
	- ***Software Elegance*** (how **non-complex** the application is)
- ***Cloud Readiness*** (how ready the app is for being hosted on **PaaS**)
- ***Open-Source Safety*** (how safe safe are the 3rd-party libraries used)
- ***Business Impact*** (how important that application is for the company. This is derived from the answers to the *Business Impact* survey you filled out a few minutes ago).

Below the application's name, you can see the application's menu (we're currently on the ***Overview*** tab), which is where we'll navigate through the various screens detailing the insights generated for the app.

### Onto Cloud Readiness
Click on the ***CloudReady*** tab of the application's menu, and we'll see if it's ready to fly...  