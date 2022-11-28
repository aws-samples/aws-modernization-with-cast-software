---
title: "Cloud Readiness"
chapter: true
weight: 1
---

# Cloud Readiness

## Requirement

The most basic requirement from the perspective of *Cloud Readiness* is *"Can the application and data be moved to the cloud smoothly, with minimal impact to business operations during the transition?"*

An obvious way to meet the requirement is to just port the VMs from the datacenter to an *Infrastructure-as-a-Service* (***IaaS***) provider (such as Amazon EC2). This ***lift & shift*** approach has the advantage of being quite speedy as it doesn't require changes to the applications. However, the cloud has so much more to offer than virtual machines: instantly-scalable computing resources, web services integration, automated testing and deployment, cross-platform environments.
![The new Frontier](/images/DetailedCloud-2b.png)

We want our applications to be able to leverage all the cloud capabilities and services by leveraging *Platform-as-a-Service* (***PaaS***) capabilities of cloud. However, the migration to PaaS comes requires effort. In the subsequent sections, we will see how CAST Highlight helps arrive at effort required, and therefore, cloud readiness of an application. 

## The Application's CloudReady dashboard

Back to our application: the interface of the `jAlbum` app in the CloudReady tab should now look like this:
![Cloud KPIs](/images/DetailedCloud-1.png)

As we can see we have here:
- The application's menu (we're on the ***CloudReady*** tab)
- The CloudReady submenu (we're on the ***CloudReady Survey*** subtab)
- KPI tiles showing various scores:
	- The ***CloudReady*** score is the overall assessment of Cloud Readiness. It is the average of the next two tiles:
	- The ***CloudReady Survey*** score, which we don't have here since we didn't fill that survey (we'll get back to that one later)
	- The ***CloudReady Scan*** score which is calculated from the ***Boosters*** and ***Blockers*** that the scan found within the codebase
	- The ***Boosters*** score: Boosters are good coding practices that bring a positive contribution to your app's ability to move to the cloud
	- The ***Blockers*** score: Blockers are the opposite of Boosters. They are patterns in your code that threaten your cloud adoption by preventing the proper use of cloud capabilities (or even by being downright incompatible with the PaaS environment).
	- The number of ***Roadblocks***: if you think of Blockers as *"bad practices"*, Roadblocks are *"individual occurrences of those bad practices"*
	
Let's dive into the results by clicking on the ***CloudReady Code Scan*** subtab.

### Cloud Blockers and how to deal with them
![Cloud Rules](/images/DetailedCloud-3.png)
Here we see the detailed findings that came from analyzing this application's code for cloud good practices. Each row of this table is one of those rules (it can be either a *Blocker* or a *Booster*) and lets you know:
- What the good/bad practice is
- What technology it is related to
- What is the impact of fixing it (does it require changes to the **C**ode, **F**ramework or **A**rchitecture?)
- Its relative importance to your ability to migrate the application (from *Low* to *Crticial*)
- How does this contribute to the app's *CloudReady* score (Blockers with 0 Roadblocks and Boosters that do occur yield a positive contribution while Blockers with actual Roadblocks give a negative one).
- How many instances of this will require fixing
- How much estimated time will it take to fix these Roadblocks

Obviously, we want to focus on items that demand action. Let's look at a critical Blocker in the application (the **Contribution** and **Roadblocks** counts are shown in red) and find more information in CAST Highlight by clicking on the question mark next to the Blocker's label:
![Details of a Blocker](/images/DetailedCloud-4.png)
This will bring up a dialog explaning in detail:
- what this Blocker is
- why you should care
- how critical it is and what areas will it impact
- how exactly it is detected by the scanner (have a look at the pattern for Java: `import java.nio.file.attribute`)

The next question is: where? For this you can click on the Roadblocks count and it will bring up the list of culprits:
![Roadblocks](/images/DetailedCloud-5.png)
And sure enough, if we look at this file, we find it:
![Roadblock found](/images/DetailedCloud-6.png)

So here we've got a list of issues that need solving, detailed explanations about them, where to find them and even an estimate of the time to fix them. This is what the application's dashboard is for: ***actionable insight*** to help development teams.
*But wait, there's more...*

### Cloud Recommendations
Further down the list of Blockers, you can find these rows:
![File Manipulation](/images/DetailedCloud-7.png)
File and directory manipulation is indeed a problem, as PaaS solutions don't like relying on the file system. That being said, maybe creating and retrieving files is the core functionality of an application, or maybe the effort of dealing with every single Roadblock is just too big. 

Not all battles need to be fought head-on. Click on the ***Recommendations*** subtab and in the ***Platform*** listbox choose ***Amazon Web Services***:
![Recommendations on AWS](/images/DetailedCloud-8.png)

This brings up a list of AWS services that CAST Highlight thinks would be a good fit for this app. At the end of the list, we can see that it recommends S3 so that file manipulation won't be a problem anymore.
![S3](/images/DetailedCloud-9.png)

### And some more
When considering *move to cloud* or *migration on cloud*, there's more than one way to tackle hurdles and CAST Highlight gives you the information you need to make informed decisions. Maybe *"pure PaaS and fix all Blockers"* is the right choice, maybe it's *PaaS+S3*, or maybe you want to containerize all your apps. To that end, you can click on the ***Containerization*** subtab and you'll see the list of Blockers for that approach, which rely on an adapted (sometimes overlapping, sometimes different) list of code patterns.

What's certain is that you won't be lacking information... which by the way CAST Highlight can export to JIRA or to your favourite BI tool using its ***REST API***. For this app, we'll start with a few nice worksheets, which you can get by clicking on the ***Export to Excel*** button in the upper-right corner.

## Code Blockers aren't the only Blockers
We've talked about the Cloud Readiness of your app's custom code, but that code is not alone. Click on the ***Software Composition*** tab in the Application's menu...