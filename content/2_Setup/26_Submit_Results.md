---
title: "Submitting Results"
chapter: true
weight: 6
---

# Submitting Results

The "technical" work is now done. The ***CAST Highlight Agent*** has done its job and produced scan results for both applications and we're going to upload them to our portfolio.

Let's go back to the CAST Highlight web portal (using our EC2 instance if we used that for scanning) and click on the ***APPLICATION SCANS*** menu (if you don't see this menu, remember the trick to switch to your own *subdomain*). Our campaign is still pending: 
![Campaign Launched](/images/Declare-7.png)

## Uploading the Code Scan Results

Pick one of the apps and click on the ***Upload Results*** button. You'll be prompted to either browse for the results file or drag-and-drop it. Once that's done you'll see that the interface processes the data to completion.
![Data Gathered](/images/Upload-1.png)

Close the dialog and you'll see that the code scan results are now ready for submitting:
![Halfway there](/images/Upload-2.png)
But we're not done yet: we also need to capture some basic non-technical information about the application. Click on the ***Survey 0/2*** button.

## Filling in the Surveys
The surveys we selected during the campaign creation are pretty straightforward. There's a lot more that can be done through surveys, but we'll keep it simple here so you can see how it works. You have two surveys to complete:
- ***Application Properties***
- ***Business Impact***

The answers you provide don't really matter for this workshop, but you'll see that they do have an impact on the application results afterwards.
![First Survey](/images/Upload-3.png)
Here we decided to make this application quite important for the company:
![Second Survey](/images/Upload-4.png)
And once the answers are saved, we can click on the ***Submit*** button and let the interface work its magic. 
![All done](/images/Upload-5.png)
While it does that, you should repeat the process with the second application so that the campaign is wrapped-up.

{{% notice info %}}
At this stage, if you have used an EC2 instance to perform the scans and would rather go back to the comfort of your own local browser, you may do so as we will no longer use the local code scan agent or the windows machine (we'll clean it up at the end of the workshop).
{{% /notice %}}


### Onto the results consumption


Now that we have performed the scans and uploaded the results, we can get to the nice part: getting insights from them...