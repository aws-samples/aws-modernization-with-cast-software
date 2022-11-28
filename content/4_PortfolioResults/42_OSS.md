---
title: "Open-Source Safety"
chapter: true
weight: 2
---

# Open-Source Safety
Going back to the home page, click on the black ***Open Source Safety*** tile. You'll reach the dashboards where all the ***Software Composition Analysis*** intel is collated at the portfolio-level. 

## Divide and Conquer
When it comes to managing the risks of using of Open Source, the primary user of insights may differ for security vulnerabilities (infosec and development teams), license risk (legal and compliance teams) or technology obsolescence (development and maintenance teams).

Prioritization is also extremely important, especially when considering that many development teams are currently inundated – if not submerged – by information on Open Source vulnerabilities, licensing issues or deprecated components. While remediations are often a good course of action for an application, managers and executives may want to take a step back and rationalize time-intensive tasks. Taking into account, for instance, whether an application is publicly accessible or critical to the business helps make more informed decisions on how best to utilize limited resources for remediation.

This is where CAST Highlight can help using the ***Portfolio Advisor for Open Source*** to automatically segment and prioritize your application portfolio with recommendations on where to focus efforts to reduce open source risks.
![Divide and Conquer](/images/PortfolioSCA-1.png)

The six Portfolio Advisor for Open Source segments recommend specific actions to take on applications and are defined as follows:
-***Immediate attention***: These applications are important to the organization and have multiple 3rd party component risks which include two or more of the following: security vulnerabilities, risky licenses, obsolete components.
-***Fix Vulnerabilities***: These applications are important to the organization and are using 3rd party components that have critical or high severity security vulnerabilities.
-***Evaluate Legal Risk***: These applications are important to the organization and are using 3rd party components that have risky licenses.
-***Upgrade Components***: These applications are important to the organization and are using 3rd party components that are out of date or obsolete creating operational risk.
-***Consider Alternate Components***: These applications are less important to the organization and have multiple 3rd party component risks which include two or more of the following: security vulnerabilities, risky licenses, obsolete components.
-***Role Models***: These applications are using 3rd party components that have low risk for the organization.

When you click on the ***See Applications*** button at the bottom you should be able to find the two apps we scanned. 
![Recommendations for 2](/images/PortfolioSCA-2.png)
{{% notice tip %}}
If recent changes have been made that might affect the recommendations, you can trigger them to be recalculated by clicking on the ***Compute*** button at the top right of the graph.
{{% /notice %}}

Similar to the *Portfolio Advisor for Cloud*, clicking on the crosshair icon shows you why that particular recommendation is assigned to any app and you can change it if desired.

![Flight-Booking needs an Upgrade](/images/PortfolioSCA-3.png)

## Components overview
If you're looking to implement good practices for third-party library management within your organization, it sure will help to have some overview of what you're dealing with. Click on the ***Components*** tab:
![Component Histograms](/images/PortfolioSCA-4.png)

Here are a few things you can find out with just a few clicks:
- which package are we using the most different versions of? (it would probably make sense to standardize that a bit)
- which applications are using that package?
- which library has the most CVEs?
- sorting by the ***Status*** column, are we using components that are in the ***Deny List***? Portfolio managers can add libraries to the ***Allow*** or ***Deny*** list according to their own policies. You can have a peek at that functionality by going into the ***MANAGE PORTFOLIO*** menu and choosing ***Manage Component Catalog***.

## License Management
In the dashboard's menu (if you strayed away you can find your way back to the OSS dashboard using the ***DASHBOARDS*** menu and selecting ***Software Composition***), click on the ***Licenses*** tab:
![Licenses Overview](/images/PortfolioSCA-5.png)

Just as we did for managing components, after consulting with your IP lawyer, you can define which types of licenses are and aren't acceptable for your organization by going into the ***MANAGE PORTFOLIO*** menu and selecting ***Manage License Profiles***.

### Onto more demographics
There's still quite a number of high-level insights for us to look at. In the main ***DASHBOARDS*** menu, let's choose ***Portfolio Demographics***...