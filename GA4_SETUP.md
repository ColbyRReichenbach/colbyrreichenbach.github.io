# Google Analytics 4 (GA4) Setup Guide for Colby Reichenbach Portfolio

Your portfolio is fully instrumented with "Enterprise-Grade" tracking. However, maximizing its value requires configuring your Google Analytics 4 (GA4) dashboard to "catch" the custom data we are sending.

## 1. Verify Your Measurement ID
In `index.html`, the code is currently using the ID: **`G-KRK1FSC72E`**.
*   **Action:** Go to your GA4 Admin Panel -> Data Field -> Data Streams.
*   **Verify:** Ensure `G-KRK1FSC72E` matches your actual Measurement ID. If it is different, update line 27 and 32 in `index.html`.

## 2. Register Custom Dimensions (CRITICAL)
GA4 ignores custom data key/values unless you explicitly tell it they exist. We need to register the following "Custom Dimensions".

**Go to:** Admin (Gear Icon) -> Data Display -> **Custom Definitions**.

Click **"Create custom dimension"** for each of the following rows:

| Dimension Name | Scope | Event Parameter | Description |
| :--- | :--- | :--- | :--- |
| **Project Name** | Event | `project_name` | Name of the project user is interacting with. |
| **Link Domain** | Event | `link_domain` | The domain of the link clicked (e.g. github.com, tableau.com). |
| **Link Context** | Event | `context` | Where the link was clicked (e.g., "S.P.E.C. Modal", "General Page"). |
| **Platform** | Event | `platform` | Social platform clicked (LinkedIn, GitHub, Email). |
| **File Name** | Event | `file_name` | Name of the downloaded file (Resume). |
| **Scroll Depth** | Event | `percent_scrolled` | How far down the page they scrolled (25%, 50%, etc). |
| **Read Trigger** | Event | `trigger` | What triggered the read time event (e.g., 'tab_hidden' or 'modal_close'). |

*Note: It may take 24-48 hours for data to start populating in these dimensions after you register them.*

## 3. Register Custom Metric
We are tracking how many seconds people spend reading your projects.

**Go to:** Admin -> Data Display -> **Custom Definitions** -> **Custom Metrics**.

Click **"Create custom metric"**:
*   **Metric Name:** Project Read Time
*   **Scope:** Event
*   **Event Parameter:** `value`
*   **Unit of Measurement:** Seconds

## 4. How to Test (DebugView)
1.  Open your portfolio in Chrome (`http://localhost:8080` or live URL).
2.  Install the [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) extension OR just open your browser Console (`Cmd+Opt+J`) and look for network requests.
3.  Go to GA4 -> Admin -> **DebugView**.
4.  Click around your site:
    *   Open the S.P.E.C. modal.
    *   Click the GitHub link.
    *   Scroll down to the bottom.
    *   Click "Resume".
5.  Watch **DebugView** timeline. You should see events like `resume_download`, `project_read_time`, and `social_contact_click` appear in real-time.
