---
title: "The Cloud Journey"
chapter: true
weight: 1
---

# The Cloud Journey

{{% notice info %}}
While following this workshop, you might notice some slight discrepancies between the screenshots shown here and the data you discover within the CAST Highlight web portal. This is not a cause for concern as our product is regularly updated with new features and portfolio demographics are constantly being refreshed (for instance new CVEs are discovered and integrated every day, which might alter the OSS score of an application).
{{% /notice %}}

## The Portfolio Advisor for Cloud
Imagine if you could click a button and instantly get all the necessary tasks to complete in the next 3 years to succeed in your career, your personal life or to win the lottery. Black magic? Yet, this is similar to what the new ***Portfolio Advisor for Cloud*** achieves for organizations that are analyzing an application portfolio for cloud migration. Based on a multi-dimensional analysis of CAST Highlight’s ***Software Intelligence*** insights, a simple click calculates the recommended *Cloud migration segment* for each application in a portfolio using a model similar to Gartner's "5Rs".
![Parliament of apps](/images/PortfolioCloud-1.png)
### What are the segments?
![The new Frontier](/images/DetailedCloud-2.png)
The five Portfolio Advisor for Cloud segments are defined as follows:
- ***Rehost***: A recommendation to change the infrastructure configuration of the application in order to “Lift & Shift” it to the cloud using Infrastructure as a Service (IaaS).
- ***Refactor***: A recommendation to perform modest modifications of the application code without changing the architecture or functionality so that it can be migrated to the cloud in a container using Container as a Service (CaaS) or using Platform as a Service (PaaS).
- ***Rearchitect***: A recommendation to dramatically modify the application code thereby altering the architecture to improve the health of the application and enable it to be migrated to the cloud using Platform as a Service (PaaS) or deployed serverless using Function as a Service (FaaS).
- ***Rebuild***: A recommendation to discard the code of the application and develop it again in the cloud using Platform as a Service (PaaS) or serverless using Function as a Service (FaaS).
- ***Retire***: A recommendation to discard the application altogether or potentially replace it with a commercial Software as a Service (SaaS) alternative.

### How the recommended segment is determined
For each application having scan results, CAST Highlight blends relevant Software Intelligence insights, weights, and benchmarks together to determine the recommended segment. Here are the indicators the Portfolio Advisor for Cloud uses to establish the segmentation recommendations:
- ***Business Impact*** scores (from the Business Impact survey)
- ***CloudReady*** scores and benchmarks (Blocker and Booster patterns)
- ***CloudReady Estimated Effort*** (to remediate Blockers)
- ***Software Health*** scores and benchmarks (Resiliency, Agility, Elegance)
- ***Open Source Safety*** scores and benchmarks (vulnerabilities, license risk, obsolescence)

You can access an application's individual assessment by clicking on the little crosshair next to the recommendation:
![Rearchitect](/images/PortfolioCloud-3.png)
Here we see that while *Rearchitect* is the winning segment for this one, *Rehost* comes close second. Since these are automated recommendations CAST Highlight makes based on the data available, it may not always recommend the perfect option. Therefore, you have the ability to alter the target segment for a particular app when building your migration plan.
## Planning the journey
Speaking of which, it's nice to know what we'd like to achieve ultimately for those apps, but that may still be a daunting task. What's our short-term plan?
### Where to start?
Click on the ***Decision Matrix*** tab and you'll see that you get a graph where:
- Each bubble represents an application
- Its size is the number of *Roadblocks* identified in its CloudReady assessment
	- You may go ahead and change this to represent the estimated effort or the number of code lines by using the listbox on the top right of the graph
- Its position on the y-axis is its *Business Impact*: apps at the top are more important
- Its position on the x-axis is given by its *CloudReady score*: apps on the right are quite ready to move

We then naturally see 4 quadrants emerging from this:
![Decision Matrix](/images/PortfolioCloud-4.png)
- ***Quick Wins*** are apps that you can probably migrate relatively easily... and if you hit a few bumps along the way, you'll be glad that they aren't vital to your business. Those are the best ones to start your cloud journey with and have your teams gain some experience.
- ***Core Cloud*** apps are also quite ready to migrate, but their business criticality means that you'll probably want to tackle them with more care and planning.
- ***Long-term Bets*** are your real problems. Core-business apps (i.e. you really want them to leverage all the Cloud's capabilities) with significant hurdles to overcome before they can move. Those aren't going to be ready within a few sprints... but that's OK: we have insights which can direct our team's efforts where they are needed and where we will be able to monitor the progress as we see those bubbles migrate to the right side of the chart.
- ***Pursue Later*** sit at the tail end of the journey... and it could well be that their voyage doesn't lead to the Cloud at all as they're also often good candidates for replacement.

### Where to go?
Wouldn't it be nice to have an idea of what our cloud landscape will look like? The ***Cloud Service Recommendations*** we saw at the application level are consolidated in the ***Recommendations*** tab. Checking out the AWS platform we can see which flavor of services we're going to end up using and how much of each:  
![Service Recommendations](/images/PortfolioCloud-5.png)

### Solving issues
Likewise, all of the ***Blockers*** and ***Boosters*** identified on all the apps are brought together in the ***Cloud Requirements*** tab. You can see that several of them are not *agnostic* but in fact limited to a specific cloud provider. Clicking on the number of affected apps for a requirement brings up the list of said apps: 
![Boosters](/images/PortfolioCloud-6.png)
When it comes to *Blockers* you also get the total number of *Roadblocks* and estimate of the effort required to fix them:
![Blockers](/images/PortfolioCloud-7.png)
This is where you can make strategic decisions about how to tackle some issues, for example assigning a transverse team of experts to fix a specific Blocker throughout the whole portfolio.

### Catering to specific needs
Similar to *Cloud Requirements*, if your migration strategy involves some systematic *Containerization* of apps, clicking on that tab will take you to the consolidated list of requirements:
![Containerization](/images/PortfolioCloud-8.png)
And here's another use case: you may have applications already running across multiple cloud providers that you would like to consolidate on AWS. Click on the ***Multi-Cloud*** tab and see what will need to be addressed to make this move easier.
![Multi-Cloud](/images/PortfolioCloud-9.png)

### App to App Dependencies
Unless you clearly understand the boundaries and technical interactions of each of your applications across your entire portfolio, it is a real challenge to consolidate the various software links, especially when you have hundreds or even thousands of apps. However, anticipating and estimating the impact of a change in the application landscape is key, regardless of the use case (Cloud migration, application modernization, software resiliency heatmap, etc.)
In the top menu's ***DASHBOARDS***, choose ***Application Links*** to explore the relationships declared between the apps:
![App Dependencies](/images/PortfolioCloud-10.png)
Selecting applications you intend to migrate, you can immediately see which ones are in their adhenrence and might be impacted by the next wave of migrations.

{{% notice info %}}
The Application Links dashboard requires that the *Application Links* survey be completed which can either be done by answering questions manually or importing the data from another system that already has this data.
{{% /notice %}}

## How easy is this?
Let's take a moment to think about what we have seen here: we can go from *"I have 200 applications which I want to move to that Cloud thing, but I have no idea where to start or what to do"* to having:
- A recommended 5R migration path for each application
- A roadmap of which apps to handle first and what the impact of migrating them will be 
- Detailed insights into each application's requirements and solid estimates of the effort needed to comply with them

... and for 200 apps, all of this can be gathered ***within a couple of weeks***.

### Onto the OSS
We're planning to move a lot of items here so we should probably look at the baggage they're carrying...  

