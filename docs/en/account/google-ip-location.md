---
description: Reduce the risk of Google misidentifying your dedicated IP, check the location source on a search result, and report an incorrect country.
---

# When Google locates a dedicated IP in mainland China

An exit IP outside mainland China can sometimes appear to Google as being in mainland China. This IP is exclusively yours while you hold it. Please use it with care, try to avoid sharing it with others, and turn off location access for Google.

## Step 1. Turn off location access for Google {#permissions}

Do this once on each device you use. You can change permissions for your search browser or the Google app and keep location services available for other apps.

| How you search | Where to change the setting |
| --- | --- |
| Chrome on a computer or Android | Open `google.com`. Select the site information icon by the address bar, open **Site settings** or **Permissions**, and set **Location** to **Block**. |
| Google app on Android | Open the phone’s **Settings → Apps → Google → Permissions → Location**, then choose **Don’t allow**. |
| iPhone or iPad | Open **Settings → Privacy & Security → Location Services**. Select **Safari Websites**, Chrome or Google, depending on what you use, and choose **Never**. |

Blocking device location limits one source of location information. Google can still estimate your region from your exit IP. [Google’s location guide](https://support.google.com/websearch/answer/179386) · [Apple’s location settings](https://support.apple.com/en-us/102647)

If you already use Location Guard, **Use fixed location** changes the coordinates a website reads through the browser’s location API. To correct the region Google associates with the IP address, use the report form below. [Location Guard documentation](https://github.com/chatziko/location-guard#what-is-a-fixed-location)

## Step 2. Check which exit and location source Google used {#verify}

Sign in and open [Node list → Exclusive IP](https://oixcloud.com/user/node?node_level=Exclusive). If **Google region check** appears under your address, it shows the latest result and when it was checked. **Possibly mainland China** means the node detected a mainland China region signal from that IP. **Awaiting check**, **Inconclusive** and **Result out of date** mean the current region is still unconfirmed. You can check it yourself even before a result appears.

1. Select your dedicated IP in the client. Open a private window signed out of Google, decline location access and run a search. Check the client’s connection records to confirm that the Google request used your dedicated exit.
2. At the **bottom of the search results**, look for the region and how Google estimated it. The location can come from your device, a home or work address in your account, or past activity. Google may also keep the last device location in a cookie for about six hours.
3. If the footer says **“From your internet address”** and still shows mainland China, report the IP. A YouTube Premium or Gemini availability issue alone does not establish which country Google associates with the IP.

## Step 3. Report the issue while you still hold the IP {#report}

Stay connected through the dedicated exit, sign in to [Google’s IP location report form](https://support.google.com/websearch/workflow/9308722), and submit the exit’s actual country or region. Google says updates can take over a month, so report the error as soon as you confirm it.

A verified case of Google identifying a dedicated IP as being in mainland China is a minor violation. **If the region is still incorrect 14 days after the IP is reclaimed, part of the deposit may be deducted at our discretion.** [Dedicated IP deposit rules](/en/account/dedicated-ip#ip-deposit)
