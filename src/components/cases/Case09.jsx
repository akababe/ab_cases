const Case09 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 09</span>
        <h1>The Ghost User Syndrome</h1>
        <div className="case-meta">Industry: SaaS / Technology &bull; Level: Intermediate</div>
      </header>
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p><strong>CloudCollab</strong> is a B2B SaaS platform for project management and team communication. They use a subscription model (monthly/annual) with three tiers: Pro, Business, and Enterprise.</p>
          <p>In SaaS, the most important metric is <strong>MRR (Monthly Recurring Revenue)</strong> and its mortal enemy: <strong>Churn</strong>. If you lose more revenue from cancellations than you gain from new signups, the business will eventually collapse.</p>
          <div className="highlight-box">
            <strong>Stakeholders:</strong> VP of Customer Success, Product Manager, CFO.<br />
            <strong>Context:</strong> CloudCollab has a healthy acquisition rate, but their "Net Revenue Retention" (NRR) is dropping below 100%. This means existing customers are spending less over time.
          </div>
        </div>
      </section>
      <section>
        <h2>2. Business Problem</h2>
        <div className="content">
          <p>CloudCollab is facing the <strong>"Ghost User Syndrome."</strong></p>
          <ul>
            <li><strong>The Silent Churn:</strong> Many users don't cancel their subscription immediately. Instead, they simply stop logging in. They are "Ghost Users"—paying but getting zero value.</li>
            <li><strong>The Inevitable Cliff:</strong> These Ghost Users always cancel eventually (usually when the annual renewal hits). By then, it's too late to save them.</li>
            <li><strong>Feature Underutilization:</strong> 70% of churned users only used 1 or 2 features. They never reached the "Aha! Moment" where the product becomes indispensable.</li>
            <li><strong>Business Impact:</strong> 15% annual revenue churn, leading to a "Leaky Bucket" where the marketing team has to work twice as hard to stay still.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <p>The goal is to build an <strong>Early Warning System (EWS)</strong> to identify high-risk accounts based on <strong>Usage Velocity</strong>, not just "Did they cancel?"</p>
          <div className="highlight-box">
            <strong>Key Questions:</strong>
            <ol>
              <li>What is the "Minimum Viable Engagement" (MVE) required to keep a user for 12+ months?</li>
              <li>Which specific features are "Sticky" (highly correlated with long-term retention)?</li>
              <li>How does a drop in login frequency over 30 days predict the probability of churn in 90 days?</li>
            </ol>
          </div>
        </div>
      </section>
      <section>
        <h2>4. Data Perspective</h2>
        <div className="content">
          <p>We are analyzing event-level product logs and billing data:</p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Data Category</th>
                <th>Variables</th>
                <th>Analytical Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Product Usage</strong></td>
                <td>Logins per week, Time spent per session, Number of "Tasks" created.</td>
                <td>Active engagement levels.</td>
              </tr>
              <tr>
                <td><strong>Feature Adoption</strong></td>
                <td>Usage of 'Gantt Charts', 'API Integrations', 'Mobile App'.</td>
                <td>Breadth of value.</td>
              </tr>
              <tr>
                <td><strong>Support</strong></td>
                <td>Number of tickets opened, Sentiment of tickets, Time to resolution.</td>
                <td>Friction & Frustration signals.</td>
              </tr>
              <tr>
                <td><strong>Billing</strong></td>
                <td>Payment failures, Plan downgrades, Discount usage.</td>
                <td>Financial commitment.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2>5. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <ol>
            <li><strong>Defining "Activity":</strong> We move beyond "Last Login." We define an "Active Day" as a day where the user performed at least one "Core Action" (e.g., creating a project or commenting).</li>
            <li><strong>The "Aha! Moment" Analysis:</strong> We find that users who invite at least 3 teammates in their first 7 days have an 85% lower churn rate. <em>Insight:</em> Collaboration is the "Hook."</li>
            <li><strong>Engagement Velocity:</strong> We track the *change* in behavior. If a user goes from 5 days/week to 1 day/week, their "Risk Score" spikes, even if they are still "Active."</li>
            <li><strong>Support Ticket Correlation:</strong> Interestingly, users who open 1-2 tickets per month have *lower* churn than users who open zero. <em>Reasoning:</em> Opening a ticket shows they are trying to use the product. Zero tickets + low usage = Disengagement.</li>
          </ol>
        </div>
      </section>
      <section>
        <h2>6. Calculation & Simulation</h2>
        <div className="content">
          <p>Let's calculate the <strong>Customer Lifetime Value (LTV)</strong> impact of proactive intervention.</p>
          <div className="calculation">
{`Average Revenue Per User (ARPU): $50/month
Avg Life of a Non-Ghost User: 24 months
LTV of 'Healthy' User: $50 * 24 = $1,200
LTV of a 'Ghost' User (churns at Month 6): $50 * 6 = $300
LTV Gap: $900 per user
Scenario:
Risk Engine flags 1,000 'Ghost' users at Month 4.
Customer Success (CS) Team spends $20 per user on a 'Re-engagement' webinar/call.
CS success rate: 20% (200 users saved and restored to 24-month lifespan).
Total Cost: 1,000 * $20 = $20,000
Total Value Gained: 200 saved users * $900 gap = $180,000
Net Profit: `}<span className="math-result">$160,000</span>
{`ROI: `}<span className="math-result">800%</span>
          </div>
        </div>
      </section>
      <section>
        <h2>7. Findings & Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <ul>
              <li><strong>The "Integration Hook":</strong> Users who connect CloudCollab to Slack or Google Drive are 5x more likely to stay. They've built the product into their existing workflow.</li>
              <li><strong>The Manager Signal:</strong> If an "Admin" or "Manager" user stops logging in, the entire account (e.g., all 50 employees) is 70% likely to churn within 60 days.</li>
              <li><strong>Price Insensitivity:</strong> Users who use the "Analytics Dashboard" feature are the least price-sensitive and the most likely to upgrade to Enterprise.</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>8. Recommendations</h2>
        <div className="content">
          <p><strong>Short-Term:</strong></p>
          <ul>
            <li><strong>Automated "Re-activation" emails:</strong> If a user hasn't logged in for 10 days, send a "What you missed" summary of team activity.</li>
            <li><strong>In-app Walkthroughs:</strong> Trigger a tutorial for "Gantt Charts" (a sticky feature) for any user who hasn't tried it after 30 days.</li>
          </ul>
          <p><strong>Long-Term:</strong></p>
          <ul>
            <li><strong>Product Roadmap:</strong> Prioritize "Integrations" as a core growth pillar, as they are the strongest predictors of retention.</li>
            <li><strong>Tier Restructuring:</strong> Move the "Sticky" features (like Integrations) to the lower-priced Pro tier to "hook" users early, then upsell them on volume.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>9. Business Decision-Making</h2>
        <div className="content">
          <p>The VP of Customer Success decided to:</p>
          <ol>
            <li><strong>Change Compensation:</strong> CS Managers are now incentivized on "Product Adoption Scores" rather than just "Renewal Dollars."</li>
            <li><strong>High-touch Strategy:</strong> Any "Enterprise" account with a "Velocity Drop" of &gt;30% triggers an immediate manual "Account Health Review" by a senior executive.</li>
          </ol>
        </div>
      </section>
      <section>
        <h2>10. Professional Analyst Mindset</h2>
        <div className="content">
          <p><strong>Senior Perspective:</strong> In SaaS, <strong>Churn is a trailing indicator.</strong> If you wait for the cancellation, you've already lost. A senior analyst builds "Leading Indicators" based on <strong>Engagement Health</strong>. You are a doctor monitoring a patient's pulse, not a coroner investigating a death.</p>
          <div className="highlight-box">
            <strong>Key Lesson:</strong> Product-Market Fit isn't binary; it's a spectrum of engagement. **The best way to reduce churn is to make your product a 'Utility'—something they can't do their job without.**
          </div>
        </div>
      </section>
    </div>
  );
};
export default Case09;
