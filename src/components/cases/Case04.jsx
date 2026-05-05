import React from 'react';

const Case04 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 04</span>
        <h1>The One-Size-Fits-None Trap</h1>
        <div className="case-meta">Industry: Retail / E-commerce &bull; Level: Beginner to Intermediate</div>
      </header>

      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p><strong>LuxeLane</strong> is a high-end multi-brand fashion retailer with 12 physical stores and a growing e-commerce platform generating $95M annual revenue. They have a database of 200,000 loyalty members built over 8 years — their most valuable business asset, yet one they've consistently underutilized.</p>
          <p>Historically, LuxeLane treated all customers identically, sending a weekly "General Newsletter" with the same 15% discount code to everyone — from their top-spending VIPs to customers who bought a single pair of socks two years ago. This one-size-fits-all approach was tolerable when CAC was low. It is no longer tolerable.</p>
          <div className="highlight-box">
            <strong>Stakeholders:</strong> Marketing Director, CRM Manager, E-commerce Manager, CFO.<br />
            <strong>Context:</strong> Customer Acquisition Costs (CAC) have increased 40% YoY due to saturated paid social channels. The board has mandated a "Retention-First" strategy — extract more value from existing customers before spending on new acquisition.<br />
            <strong>Stakeholder Tension:</strong> The Marketing Director wants to stop all discounts immediately to protect brand equity. The CRM Manager fears that removing discounts will trigger a mass churn of price-sensitive customers who make up 40% of transaction volume. Analytics must resolve this with data — not opinion.
          </div>
        </div>
      </section>

      <section>
        <h2>2. Business Problem</h2>
        <div className="content">
          <p>LuxeLane is suffering from <strong>"Marketing Fatigue"</strong> — the result of irrelevant, undifferentiated communication at scale:</p>
          <ul>
            <li><strong>Symptom A:</strong> Email open rates have dropped from 25% to 12% in 18 months. Unsubscribe rate hit 3.2% last month — 4x the industry average of 0.8%.</li>
            <li><strong>Symptom B:</strong> Discount redemption is at 22%, but 70% of redemptions come from customers who were going to buy anyway. The company is giving away margin unnecessarily on customers who don't need the incentive.</li>
            <li><strong>Root Cause:</strong> A VIP customer spending $8,000/year receives the exact same "15% off sneakers" email as a one-time bargain hunter. This is not just inefficient — it actively damages the brand relationship with high-value customers.</li>
            <li><strong>Business Impact Quantified:</strong>
              <ul>
                <li>Unnecessary discounts on non-price-sensitive customers: ~$380K/year in margin destruction</li>
                <li>Lost VIP revenue from brand dilution: estimated $520K/year (premium brands lose 8% of VIP spend when over-discounted)</li>
                <li>Total annual cost of the blast approach: <strong>~$900K/year</strong></li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <p>Implement <strong>RFM Segmentation</strong> to replace mass blast marketing with differentiated, segment-specific strategies — each with its own message, offer type, and frequency.</p>
          <div className="highlight-box">
            <strong>Key Questions:</strong>
            <ol>
              <li>Who are our "Champions" and what do they actually respond to? (Hint: probably not discounts.)</li>
              <li>Which segments are "At Risk" of churning, and is a discount the right win-back lever — or does it further damage the relationship?</li>
              <li>What is the 12-month LTV difference between a "Champion" kept engaged vs. one who becomes "At Risk"?</li>
              <li>Where is the over-segmentation risk — how many segments can we actually action with different content?</li>
            </ol>
            <strong>Target Outcome:</strong> Increase email marketing ROAS from 3.2x to 6.0x, reduce unsubscribes by 60%, and protect Champions' full-price purchase behavior (no discount erosion).
          </div>
        </div>
      </section>

      <section>
        <h2>4. Data Perspective</h2>
        <div className="content">
          <p>RFM is computed from the transaction history database. All three dimensions are derived from a single table — <code>order_transactions</code>:</p>
          <table className="data-table">
            <thead>
              <tr><th>Dimension</th><th>Variable</th><th>Measurement Window</th><th>Score Direction</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Recency (R)</strong></td><td><code>days_since_last_order</code></td><td>As of analysis date</td><td>Lower days = Higher score</td></tr>
              <tr><td><strong>Frequency (F)</strong></td><td><code>total_order_count</code></td><td>Last 24 months</td><td>More orders = Higher score</td></tr>
              <tr><td><strong>Monetary (M)</strong></td><td><code>total_spend_value</code></td><td>Last 24 months</td><td>Higher spend = Higher score</td></tr>
              <tr><td><strong>Contextual</strong></td><td><code>fav_category</code>, <code>channel</code></td><td>Last 24 months</td><td>Used for personalization</td></tr>
            </tbody>
          </table>

          <p style={{marginTop: '20px'}}><strong>How RFM Scores Are Assigned — Quintile Method:</strong></p>
          <div className="calculation" style={{margin: '10px 0'}}>
{`Step 1: Sort all 200,000 customers by each dimension.
Step 2: Divide into 5 equal groups (quintiles) of 40,000 customers each.
Step 3: Assign score 5 to top quintile, 1 to bottom quintile.

Example — Recency (R) Score Assignment:
Quintile 5 (score=5): Purchased 0–14 days ago   → 40,000 customers
Quintile 4 (score=4): Purchased 15–45 days ago  → 40,000 customers
Quintile 3 (score=3): Purchased 46–120 days ago → 40,000 customers
Quintile 2 (score=2): Purchased 121–365 days    → 40,000 customers
Quintile 1 (score=1): Purchased 366+ days ago   → 40,000 customers

Note: Thresholds are DATA-DRIVEN (quintiles), not arbitrarily chosen.`}
          </div>

          <p style={{marginTop: '20px'}}><strong>Sample RFM Customer Profiles (8 customers):</strong></p>
          <table className="data-table">
            <thead>
              <tr><th>Customer</th><th>Last Purchase</th><th>Orders (24mo)</th><th>Total Spend</th><th>R</th><th>F</th><th>M</th><th>RFM Code</th><th>Segment</th></tr>
            </thead>
            <tbody>
              <tr><td>C001</td><td>3 days ago</td><td>22</td><td>$9,800</td><td>5</td><td>5</td><td>5</td><td>555</td><td><strong>Champion</strong></td></tr>
              <tr><td>C002</td><td>18 days ago</td><td>14</td><td>$4,200</td><td>4</td><td>4</td><td>4</td><td>444</td><td>Loyal</td></tr>
              <tr><td>C003</td><td>200 days ago</td><td>9</td><td>$3,800</td><td>2</td><td>3</td><td>3</td><td>233</td><td>At Risk</td></tr>
              <tr><td>C004</td><td>8 days ago</td><td>1</td><td>$6,200</td><td>5</td><td>1</td><td>5</td><td>515</td><td>Big Spender (Gift?)</td></tr>
              <tr><td>C005</td><td>410 days ago</td><td>2</td><td>$380</td><td>1</td><td>1</td><td>1</td><td>111</td><td>Hibernating</td></tr>
              <tr><td>C006</td><td>7 days ago</td><td>1</td><td>$145</td><td>5</td><td>1</td><td>1</td><td>511</td><td>New Customer</td></tr>
              <tr><td>C007</td><td>50 days ago</td><td>11</td><td>$5,100</td><td>3</td><td>4</td><td>5</td><td>345</td><td>Potential Champion</td></tr>
              <tr><td>C008</td><td>380 days ago</td><td>8</td><td>$4,600</td><td>1</td><td>3</td><td>4</td><td>134</td><td>Lost High-Value</td></tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{marginTop: '15px'}}>
            <strong>Data Limitations &amp; Hidden Variables:</strong>
            <ul>
              <li><strong>Missing — Channel Attribution:</strong> We know <em>what</em> a customer bought but not <em>why they came back</em>. Did the last email drive their purchase, or were they already planning to visit?</li>
              <li><strong>Missing — Household Data:</strong> C004 (high M, low F) may be a corporate buyer or gift purchaser — fundamentally different from a personal luxury shopper. The RFM score alone can't distinguish these.</li>
              <li><strong>Lookback Window Risk:</strong> A 24-month window may misclassify a customer who was very active 3 years ago but paused due to pregnancy/relocation — not brand dissatisfaction. Pure RFM has no context for life events.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>5. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <p>RFM is simple to calculate but <strong>requires careful interpretation</strong> at every step:</p>
          <ol>
            <li><strong>Step 1 — Validate the Pareto Hypothesis First:</strong> Before building the full model, run a quick check: do 20% of customers really generate 80% of revenue? If the distribution is more uniform, RFM's value is lower.
              <div className="calculation" style={{margin: '10px 0'}}>
{`LuxeLane Revenue Concentration (200K customers):
Top 5% customers  (10,000): 60% of revenue → $57M
Top 10% customers (20,000): 75% of revenue → $71M
Top 20% customers (40,000): 88% of revenue → $83.6M
Bottom 50% customers:        4% of revenue → $3.8M

Verdict: Pareto is confirmed and extreme.
The bottom 100,000 customers generate less than $4M total.
This validates RFM as the right analytical lens.`}
              </div>
            </li>
            <li><strong>Step 2 — Define Segments Before Scoring (Avoid Post-Hoc Rationalization):</strong> Decide what behaviors each segment label means BEFORE running the numbers — otherwise you'll find patterns that match your expectations but don't represent real behavioral archetypes.</li>
            <li><strong>Step 3 — Assign Scores Using Quintiles (Data-Driven Thresholds):</strong> Never set arbitrary score thresholds ("R=5 means bought in last 30 days") without checking the actual data distribution. Use quintiles so each score group always contains exactly 20% of customers.</li>
            <li><strong>Step 4 — Collapse into Actionable Segments (Avoid Over-Segmentation):</strong> The full RFM space has 5×5×5 = 125 possible combinations. Most cells will have fewer than 100 customers — not enough to run a meaningful campaign. Collapse into 6–8 named archetypes based on business logic:
              <div className="calculation" style={{margin: '10px 0'}}>
{`Segment Mapping:
────────────────────────────────────────────────────────
Segment            │ RFM Pattern  │ Size   │ % Revenue
───────────────────┼──────────────┼────────┼──────────
Champions          │ R≥4,F≥4,M≥4  │ 8,200  │ 55%
Loyal              │ F≥4 any R/M  │ 14,000 │ 18%
Potential Champions│ R≥4,F=2-3    │ 11,000 │ 8%
At Risk            │ R≤2,F≥3      │ 22,000 │ 12%
New Customers      │ R=5,F=1      │ 18,000 │ 3%
Hibernating        │ R=1,F≤2      │ 41,000 │ 2%
Lost High-Value    │ R≤2,F≥3,M≥4  │ 5,800  │ 2%
────────────────────────────────────────────────────────`}
              </div>
            </li>
            <li><strong>Step 5 — Design Differentiated Action per Segment:</strong> This is where most analysts stop too early — they build the segments but don't build the playbook. Each segment needs a distinct strategy:
              <table className="data-table" style={{marginTop: '10px'}}>
                <thead>
                  <tr><th>Segment</th><th>Goal</th><th>Offer Type</th><th>Frequency</th><th>Expected Conv %</th></tr>
                </thead>
                <tbody>
                  <tr><td>Champions</td><td>Protect &amp; Deepen</td><td>Early Access (NO discount)</td><td>Monthly</td><td>12–15%</td></tr>
                  <tr><td>Loyal</td><td>Upgrade to Champion</td><td>Loyalty Points Bonus</td><td>Bi-weekly</td><td>8–10%</td></tr>
                  <tr><td>At Risk</td><td>Win Back</td><td>25% one-time discount</td><td>Once, then silence</td><td>3–5%</td></tr>
                  <tr><td>New Customers</td><td>Onboard to habit</td><td>Style Guide (no discount)</td><td>Weekly × 4</td><td>8–12%</td></tr>
                  <tr><td>Hibernating</td><td>Reactivate or accept loss</td><td>"We miss you" + 30% off</td><td>Once/quarter max</td><td>1–2%</td></tr>
                  <tr><td>Lost High-Value</td><td>Personal outreach</td><td>Concierge call from stylist</td><td>Once</td><td>5–8%</td></tr>
                </tbody>
              </table>
            </li>
            <li><strong>Step 6 — Measure Segment Migration Over Time:</strong> RFM is not a one-time snapshot — it's a dynamic system. A customer who was a Champion in Q1 may slip to "At Risk" in Q3. Track movement between segments monthly to catch decay early:
              <ul>
                <li>Champion → At Risk: Immediate personal outreach (stylist call)</li>
                <li>New Customer → Potential Champion: Accelerate onboarding sequence</li>
                <li>At Risk → Hibernating (no response to win-back): Accept loss, remove from active campaigns to reduce email cost</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      <section>
        <h2>6. Calculation &amp; Simulation</h2>
        <div className="content">
          <p>The core tension: Targeted strategy generates <strong>less short-term revenue</strong> than blast — but <strong>far more long-term profit</strong>. This must be explained carefully.</p>
          <div className="calculation">
{`BLAST CAMPAIGN (Current State):
Total Audience: 100,000 active customers
Campaign Cost: $5,000 | Discount: 15% on all purchases
Conversion Rate: 1% | AOV: $100 → After discount: $85
Revenue: 100,000 × 1% × $85 = $85,000
But: 70% were going to buy anyway → only 30% are truly incremental
True incremental revenue: $25,500
Margin destroyed by unnecessary discounts: $85,000 × 15% × 70% = `}<span className="math-result">$8,925 wasted</span>
{`
TARGETED STRATEGY (3 Segments Only):

1. Champions (8,200 users) — Early Access, NO discount:
   Conv Rate: 14%, Full-Price AOV: $280
   Revenue: 8,200 × 14% × $280 = `}<span className="math-result">$321,440</span>
{`   Margin impact vs. blast: ZERO discount erosion on top customers

2. At Risk (22,000 users) — 25% win-back discount:
   Conv Rate: 4%, AOV after discount: $95
   Revenue: 22,000 × 4% × $95 = `}<span className="math-result">$83,600</span>
{`
3. New Customers (18,000 users) — Style Guide, NO discount:
   Conv Rate: 9%, Full-Price AOV: $145
   Revenue: 18,000 × 9% × $145 = `}<span className="math-result">$235,350</span>
{`
TARGETED TOTAL: $640,390 from 48,200 customers (48% of list)
BLAST TOTAL: $85,000 from 100,000 customers (full list)

Difference: `}<span className="math-result">+$555,390 more revenue with targeted approach</span>
{`

WHY IS TARGETED MUCH HIGHER?
The blast uses a $100 AOV assumption — the average across ALL customers.
Champions actually spend $280 AOV. By NOT discounting them, we keep
their full-price behavior intact AND their conversion rate is 14x higher
than the blast's 1% average conversion on disengaged customers.

12-MONTH LTV IMPACT — Champion Protection:
Champion who gets 15% blast discount every week:
  → Trains them to wait for sales
  → AOV gradually erodes from $280 to $210 (-25%) over 12 months
  → LTV loss per Champion: 22 purchases × $70 AOV erosion = `}<span className="math-result">$1,540/year/customer</span>
{`  → Across 8,200 Champions: `}<span className="math-result">$12.6M annual LTV erosion</span>
{`
This is the number that wins the boardroom argument.`}
          </div>
        </div>
      </section>

      <section>
        <h2>7. Findings &amp; Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>What We Expected vs. What We Found:</strong>
            <table className="data-table" style={{marginTop: '15px'}}>
              <thead>
                <tr><th>Assumption</th><th>Expected</th><th>Actual Finding</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Revenue concentration</td>
                  <td>80/20 Pareto</td>
                  <td><strong>60/5 — top 5% generate 60% of revenue. Extreme.</strong></td>
                </tr>
                <tr>
                  <td>Champions' response to early access</td>
                  <td>Moderate (prefer discounts)</td>
                  <td><strong>14% conversion — 14x higher than blast average</strong></td>
                </tr>
                <tr>
                  <td>High Monetary = High Loyalty</td>
                  <td>M=5 customers are most loyal</td>
                  <td><strong>C004 (M=5, F=1) is a gift buyer — single purchase, no loyalty signal</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul style={{marginTop: '20px'}}>
            <li><strong>The Pareto Extreme:</strong> The top 5% of customers (10,000 people) generate 60% of revenue. Losing 10% of these Champions would cost more than acquiring 50,000 new bargain-hunting customers.</li>
            <li><strong>The "Newbie" Insight:</strong> New customers (R=5, F=1) respond 3x better to a curated "Style Guide" than to a discount code — because they're in discovery mode, not deal-hunting mode. Sending a discount as the first touch trains price-sensitivity from Day 1.</li>
            <li><strong>The Monetary Illusion:</strong> Customers with high M but low F (like C004) are often "Gift Buyers" — appearing once at Christmas, spending big, then disappearing for 11 months. They inflate the Monetary dimension without signaling true loyalty. Treat separately.</li>
            <li><strong>Counter-Intuitive Insight — Less Revenue Short-Term, Far More Long-Term:</strong> The targeted strategy appears to "lose" by generating lower aggregate revenue in some scenarios. It wins decisively on a 12-month LTV basis because it protects Champion purchase behavior and avoids the $12.6M annual discount erosion on the top-value segment.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>8. Recommendations</h2>
        <div className="content">
          <p><strong>Short-Term (Weeks 1–4):</strong></p>
          <ul>
            <li><strong>Halt all-audience discounts immediately.</strong> Replace with segment-specific offers. <br /><strong>Expected Impact:</strong> Recover $8,925/campaign in unnecessary margin destruction. <strong>Zero cost to implement.</strong></li>
            <li><strong>Launch "Luxe Circle" private portal for Champions</strong> — early collection previews, personal stylist access, free express shipping. <br /><strong>Expected Impact:</strong> Increase Champion email open rate from 12% to 35%+, retain full-price AOV. <strong>Cost:</strong> $8,000/month portal maintenance.</li>
          </ul>
          <p><strong>Long-Term (Months 2–6):</strong></p>
          <ul>
            <li><strong>Automate RFM Lifecycle Triggers:</strong> When a customer's R score drops by 2 points in a single month, automatically trigger a personalized product recommendation email. <br /><strong>Expected Impact:</strong> Catch 35% of Champion-to-At-Risk migrations before they go dormant, saving ~$540K in annual LTV.</li>
            <li><strong>Build a "Gift Buyer" sub-segment:</strong> Identify M=5, F=1 customers with December purchase concentration. Market to them in October–November with "Gift Curation" content rather than personal fashion. <br /><strong>Expected Impact:</strong> 6% conversion on 5,000 identified gift buyers in the pre-holiday window = ~$186K incremental revenue.</li>
          </ul>
          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Priority Matrix:</strong>
            <table className="data-table">
              <thead>
                <tr><th>Action</th><th>Annual Benefit</th><th>Cost</th><th>Priority</th></tr>
              </thead>
              <tbody>
                <tr><td>Stop all-audience discounts</td><td>$900K (margin protection)</td><td>$0</td><td>🔴 Immediate</td></tr>
                <tr><td>Champions early-access program</td><td>$12.6M LTV protection</td><td>$96K/yr</td><td>🔴 Week 1</td></tr>
                <tr><td>Automated lifecycle triggers</td><td>$540K saved</td><td>$20K dev</td><td>🟡 Month 2</td></tr>
                <tr><td>Gift buyer sub-segment</td><td>$186K incremental</td><td>Low</td><td>🟡 Month 3</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2>9. Business Decision-Making</h2>
        <div className="content">
          <p>The Marketing Director decides to implement a formal tiered strategy:</p>
          <ol>
            <li><strong>Launch "Luxe Elite" Tier</strong> for the top 5% of RFM scorers — free shipping, concierge styling, and seasonal preview events. The ROI justification: retaining one Champion (avg $9,800/year spend) costs less than acquiring 65 new customers at current CAC.</li>
            <li><strong>Reallocate 50% of graphic design budget</strong> to create segment-specific content templates — removing the operational bottleneck of custom content creation for each segment.</li>
            <li><strong>Alternative Strategy Rejected:</strong> The CRM Manager proposed a simple "spend threshold" loyalty program (spend $500 = Gold, spend $2,000 = Platinum). Marketing Director rejected it — spend thresholds reward historical spending, not current engagement. A former Champion now buying elsewhere still has high historical spend. RFM's Recency dimension catches this decay; a tier system doesn't.</li>
          </ol>
          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Monitoring Dashboard — Monthly KPIs:</strong>
            <table className="data-table">
              <thead>
                <tr><th>KPI</th><th>Current</th><th>Target (Q3)</th><th>Alert Threshold</th></tr>
              </thead>
              <tbody>
                <tr><td>Champion Retention Rate</td><td>~72%</td><td>88%</td><td>&lt;80% = stylist outreach</td></tr>
                <tr><td>Champion Avg. Email Open Rate</td><td>12%</td><td>35%</td><td>&lt;25% = content review</td></tr>
                <tr><td>Champion Full-Price Purchase Rate</td><td>N/A (baseline)</td><td>≥85%</td><td>&lt;75% = discount creep risk</td></tr>
                <tr><td>At-Risk Win-back Rate</td><td>N/A (new)</td><td>4–5%</td><td>&lt;2% = reconsider offer</td></tr>
                <tr><td>Email Unsubscribe Rate</td><td>3.2%</td><td>&lt;0.8%</td><td>&gt;1.5% = content audit</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2>10. Professional Analyst Mindset</h2>
        <div className="content">
          <p><strong>Senior Perspective:</strong> Segmentation is not about grouping data — it's about <strong>Empathy at Scale</strong>. A senior analyst asks: "What is happening in this person's life that they haven't bought from us in 6 months?" RFM gives you the signal; your job as an analyst is to translate that signal into a human story that guides the business to act differently for each group.</p>
          <div className="highlight-box">
            <strong>Key Lesson:</strong> The most dangerous number in RFM is Monetary. High M looks like loyalty, but it might be one gift purchase or one corporate order. Always triangulate: a true "Champion" has high R AND high F AND high M. Any one dimension alone is misleading.
          </div>
          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Common Beginner Mistake:</strong> Creating 5×5×5 = 125 RFM segments and calling it "granular personalization." In practice, most cells will have fewer than 200 customers — statistically too small to run meaningful campaigns and operationally impossible to create 125 different content variants. Collapse to 6–8 actionable archetypes. <strong>Precision is not the same as granularity.</strong> The goal is actionability, not complexity.
          </div>
          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Interview-Ready Insight:</strong> If asked "How would you segment customers for a luxury brand?" the winning answer: <em>"I'd use RFM with one critical addition — I'd weight Recency and Frequency more heavily than Monetary for a luxury brand, because high spend without recent engagement signals a lapsed relationship, not a loyal one. Then I'd run the 'discount test': before offering any incentive, ask whether this segment responds to exclusivity or to savings. Champions are won with access; At-Risk customers might need economics. Giving a Champion a discount is actually a brand insult."</em>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Case04;
