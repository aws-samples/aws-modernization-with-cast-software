---
title: "Application Health"
chapter: true
weight: 3
---

# Application Health

After reviewing the application's *Cloud Readiness* and the risks borne by its dependencies, we still have to look at the quality of the custom code itself. From the application's dashboard menu, click on the ***Health Distribution*** tab.
![Health distribution](/images/DetailedHealth-1.png)

Before we talk about the KPIs and their meaning, let's use this screen to notice that our application is, by and large, a Java application. Given that its overall Health scores are a weighted average of Health scores computed for each technology, Java code quality will be the most important driver of said scores. This doesn't mean that other languages should be ignored, though: the abysmal Resiliency score for JavaScript would certainly warrant an investigation.

## Key Health Metrics

The core health metrics provided by CAST Highlight are the following:
| Key Metric | Description | Direct Interpretation | Business Impact |
|---|---|---|---|
| ***Software Resiliency*** |  Measure the robustness and how bullet-proof is the Software against production failure | Reflects presence of code patterns that may comprise vulnerability of the software | Customer Satisfaction, Confidence and Loyalty. Opportunities & Revenue |
| ***Software Agility*** | Measure to indicate the easiness of a development team to understand and maintain an application |   Reflects absence of embedded documentation and code readability good practices | Maintenance Cost and Transferability |
| ***Software Elegance*** | Measures the ability to deliver software value with less code complexity | Indicates decreased quality in code, resulting in higher defects that become costly to fix | Time to market, Innovation|

Knowing what they are, we now want to see where they come from. Click on the ***Code Insights*** tab.

## How sturdy is it?
The first KPI that we're drilling down on is the ***Software Resiliency*** (notice the two other subtabs). As code insights are technology-dependent, we'll select "Java" in the *Technology* listbox. 
![Health distribution](/images/DetailedHealth-2.png)
The top line shows us the Resiliency score for Java, the distribution of files according to their quality and the tech's contribution to the app's overall score.

On the left side, we have our ***Improvement Opportunities***: coding good practices where the app could use some work. You can see the relative importance of each best practice in the *Contribution* column as well as an idea of how well this app performs vs the field.

{{% notice tip %}}
The CAST Highlight ***Benchmark*** is based on consistent, precise, machine analysis of over 15,000 applications, which makes it possible to optimize your application portfolio and prioritize software development efforts by comparing your applications against other organizations in the same industry. 
{{% /notice %}} 

Clicking on an individual quality rule, we can see in which files this problem has been identified:
![Health distribution](/images/DetailedHealth-3.png)
And if you have questions or wish to know more about the particulars of a quality rule, click on the little question mark next to it and you'll be taken to documentation detailing what the rule is, how it is detected by CAST Highlight and what is the impact it can have for you. 

This trove of information follows the same simple goal as what we saw earlier: *provide detailed **actionable insights** for organizations to make **informed software decisions***.

It might not be practical to approach health issues *by rule*, but instead focus on critical areas of the codebase that need the most work. This is what the right side of this screen does: it presents you with files that are the best ***candidates for improvement***. Clicking on the file's name, you can see the list of topics that require fixing:
![Health distribution](/images/DetailedHealth-4.png)
Because if you're going to work on a file to improve something, you might as well get rid of all the issues in there.
## How maintainable is it?
Using the other subtabs, you can explore the application's ***Agility*** and ***Elegance***.
![Agility and Elegance](/images/Agility-Button.png)
Can you find out which JavaScript file is pulling everthing down?

## Getting it all together

We have spent some time drilling down through every aspect of this application, and now we'd like to explore the other one. This time, as we go through it all, we'd like to build a detailed report that we can present to our team. That sounds like it will take a lot of work... *or will it?*

Go back to the applications list (for instance through the top menu, by clicking on ***DASHBOARDS*** and then ***Applications Results***) 
![Application Results Button](/images/AppResults-Button.png)
and find the *Flight Booking* application.
{{% notice tip %}}
You can sort tables by any column (ascending or descending) and this one also provides a search box for when the portfolio is large.
{{% /notice %}}
Once you've reached the individual application's dashboard, check out the ***PPT Report*** button in the top right:
![A fullyy automated report](/images/DetailedHealth-5.png)

Go ahead and request a Powerpoint report containing the data of your choosing. In a matter of minutes, you'll get a complete automated report containing all the application's detailed insights ready to download or conveniently delivered to your mailbox.
![Delivered to your mailbox](/images/Report-email.png)

In this report, you'll get the executive summary:
![Report Exec Summary](/images/Report-1.png)
the health insights:
![Report Health](/images/Report-2.png)
the software composition results:
![Report SCA](/images/Report-3.png)
... and the Cloud Readiness Boosters & Blockers, all ready to present and share.
![Report CloudReady](/images/Report-4.png)
## Onto the big picture
Now that we've seen the details of what CAST Highlight does, it's time for us to get some altitude...