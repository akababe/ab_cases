const Case01 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 01</span>
        <h1>The M3 Subscription Cliff</h1>
        <div className="case-meta">Industry: E-commerce (Subscription SaaS) &bull; Level: Intermediate</div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>GlowBox</strong> is a premium monthly beauty subscription service that delivers curated
            skincare and makeup products to 120,000 active subscribers across the US. They operate in a
            highly competitive DTC (Direct-to-Consumer) market where customer acquisition costs (CAC) have
            risen 35% year-over-year due to saturated social media advertising on Instagram and TikTok.
          </p>
          <p>
            While their initial sign-up rates are healthy — averaging 10,000 new subscribers per month —
            the executive team has noticed a disturbing pattern: a significant portion of customers cancel
            their subscription immediately after receiving their second or third box. The board is concerned
            because the company is burning $600,000/month acquiring customers who leave before ever becoming
            profitable.
          </p>
          <div className="highlight-box">
            <strong>Industry Benchmark:</strong> The average M3 churn rate for D2C subscription boxes in
            the beauty/wellness category is approximately 38%. GlowBox at 45% is 7 percentage points above
            market — not catastrophic, but enough to make the unit economics materially worse than peers.
            This benchmark anchors the conversation: the problem is real, not imagined, and the gap is
            closable.
          </div>
          <div className="highlight-box">
            <strong>Stakeholders:</strong> Chief Growth Officer (CGO), Head of Retention, Supply Chain
            Manager, VP of Product.<br />
            <strong>Context:</strong> The company needs to shift from a "growth at all costs" mindset to a
            "sustainable profitability" model by increasing Customer Lifetime Value (LTV). The board has set
            a target: reduce first-90-day churn by at least 10 percentage points within two quarters.<br />
            <strong>Stakeholder Tension:</strong> The CGO wants to reduce churn. The Supply Chain Manager
            warns that shifting to skincare-heavy boxes increases COGS by 12% due to cold-chain packaging
            requirements. This tension is real — better retention vs. higher fulfillment cost.
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem</h2>
        <div className="content">
          <p>
            The core issue is the <strong>"Month-3 (M3) Cliff"</strong>. Data shows that 45% of new
            subscribers churn by the end of their third month.
          </p>
          <ul>
            <li>
              <strong>Symptom:</strong> High churn rate in the first 90 days — nearly half the customers
              acquired never reach profitability.
            </li>
            <li>
              <strong>Root Cause Hypotheses:</strong>
              <ul>
                <li><em>H1:</em> "Initial discount hunters" who only want the first box at 50% off and never intended to stay.</li>
                <li><em>H2:</em> A perceived drop in value/excitement after the "honeymoon phase" of the first two boxes.</li>
                <li><em>H3:</em> Low engagement in Month 1 leads to customers forgetting they're subscribed, then cancelling when the M3 charge appears.</li>
              </ul>
            </li>
            <li>
              <strong>Note on Hypothesis Overlap:</strong> H1 and H3 are not mutually exclusive. A
              discount hunter (H1) who was never deeply engaged will often also become a silent
              canceller (H3) — they sign up for the deal, never build a habit, and disengage within
              weeks. The combined H1+H3 segment is likely the hardest to rescue and should be
              quarantined from retention spend.
            </li>
            <li>
              <strong>Business Impact (Quantified):</strong> With a CAC of $60 and a monthly margin of $15,
              GlowBox breaks even on each customer at Month 4. Churning at M3 means every such customer is a
              net loss of $15. At 4,500 churned users/month, this is a{" "}
              <strong>$67,500/month direct loss</strong> — not counting the wasted acquisition spend of
              $270,000 (4,500 × $60) that never generated ROI.
            </li>
            <li>
              <strong>Risk if Ignored:</strong> At current burn rate, LTV/CAC ratio is 0.92 (below 1.0 =
              unsustainable). Investors expect LTV/CAC &gt; 3.0 for Series B funding in 9 months.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <p>
            Management wants to move away from reactive "save-the-customer" calls to{" "}
            <strong>proactive churn prevention</strong> — identifying at-risk users before they decide to
            leave and intervening with the right action at the right time.
          </p>
          <div className="highlight-box">
            <strong>Analytical Approach Type:</strong> This engagement uses a{" "}
            <em>diagnostic + early predictive</em> methodology. The diagnostic phase (Sections 5–6)
            answers WHERE churn concentrates and WHO is churning. The predictive phase (Section 6,
            Steps 5–7) builds a leading-indicator model to identify at-risk users 30 days before they
            decide to leave, enabling proactive intervention. We are not yet in the prescriptive phase
            (automated decisioning) — that requires 6+ months of validated intervention data.
          </div>
          <div className="highlight-box">
            <strong>Key Questions:</strong>
            <ol>
              <li>Which behavioral signals in Month 1 predict churn in Month 3? (Leading indicators vs. lagging)</li>
              <li>Does the specific product mix in the first box influence long-term retention?</li>
              <li>What is the optimal intervention timing (M1 vs M2) to prevent M3 churn?</li>
              <li>Can we differentiate "discount hunters" (never recoverable) from "disengaged subscribers" (potentially saveable)?</li>
            </ol>
            <strong>Expected Business Outcome:</strong> A churn reduction of 10 percentage points (from 45%
            to 35%) would save ~$112,500/month in direct margin and unlock $1.35M in annualized retained
            revenue.
          </div>
        </div>
      </section>

      {/* ── SECTION 4 (NEW) ── */}
      <section>
        <h2>4. Framework Selection &amp; Rationale</h2>
        <div className="content">
          <p>
            A senior analyst never starts a retention engagement by opening a modeling tool. They start
            by asking: "Which analytical lens is most appropriate for the nature of this problem?" The
            choice of framework shapes what data you need, what questions you ask, and which findings
            you surface. Here is the framework selection for this engagement.
          </p>

          <div className="highlight-box">
            <strong>Frameworks Selected:</strong>
            <ol style={{ marginTop: "12px" }}>
              <li style={{ marginBottom: "16px" }}>
                <strong>Funnel Analysis</strong> — The first tool deployed. Subscription churn is a
                lifecycle problem: users move through stages (Sign-up → M1 Active → M2 Active → M3
                Retained → Profitable). Funnel Analysis maps where the biggest drop-off concentrates
                before we ask why it happens. In this case, it immediately reveals that the M2→M3
                transition is the cliff, not M1→M2 as management initially assumed. Without this
                stage-by-stage view, we would waste time investigating the wrong inflection point.
              </li>
              <li style={{ marginBottom: "16px" }}>
                <strong>Cohort Analysis</strong> — Essential for any subscription business. Cohort
                Analysis groups users by their sign-up month, revealing structural differences between
                acquisition cohorts. In this case, it surfaces a critical insight: the Holiday Cohort
                (Nov/Dec) churns 15% higher than the Spring Cohort because Black Friday promotions
                attract deal-seekers, not brand loyalists. Without cohort segmentation, this signal is
                invisible — it gets averaged out in aggregate churn statistics and the company never
                realizes that its promotional calendar is manufacturing bad-fit customers.
              </li>
              <li style={{ marginBottom: "16px" }}>
                <strong>Leading vs. Lagging Indicator Framework</strong> — This is the operational
                backbone of the early warning system. Most retention dashboards are built on lagging
                indicators (review scores, cancellation reasons, support tickets) — you see them after
                the decision to leave is already made. This framework forces us to identify signals that
                precede the churn decision by 3–4 weeks: login frequency in Week 1, the "choice made"
                action, and email open rate. These are the levers you can pull before it's too late.
              </li>
              <li>
                <strong>Adapted Engagement Depth Model (modified RFM)</strong> — Traditional RFM
                (Recency, Frequency, Monetary) collapses in a subscription context: "Frequency" is
                constant (one box/month) and "Monetary" is fixed (flat subscription fee). We adapted
                the spirit of RFM into an Engagement Depth metric: login_frequency (Recency proxy),
                choice_made + email_open_rate (Frequency of meaningful interactions), and estimated
                LTV trajectory (Monetary forward-looking). This gives us a behavioral segmentation
                tool appropriate for this specific business model.
              </li>
            </ol>
          </div>

          <div className="highlight-box">
            <strong>Frameworks Considered &amp; Rejected:</strong>
            <table className="data-table" style={{ marginTop: "12px" }}>
              <thead>
                <tr>
                  <th>Framework</th>
                  <th>Why Considered</th>
                  <th>Why Rejected</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>McKinsey 7S</strong></td>
                  <td>Operationalizing the retention program requires organizational alignment</td>
                  <td>Valuable for Phase 2 (implementation), not Phase 1 (diagnosis). Filed for later use when building the Customer Success team structure.</td>
                </tr>
                <tr>
                  <td><strong>Customer Lifetime Value Model (standalone)</strong></td>
                  <td>LTV is the board's core metric</td>
                  <td>LTV calculation is embedded within the funnel analysis as an output metric, not a standalone diagnostic framework. Using it as a standalone tool would measure the problem without explaining it.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="highlight-box">
            <strong>How the Framework Choice Shapes the Analysis:</strong>
            <ul>
              <li><strong>Funnel Analysis →</strong> Tells us <em>WHERE</em> the problem is concentrated (M2→M3)</li>
              <li><strong>Cohort Analysis →</strong> Tells us <em>WHEN</em> certain customer types arrived and why they behave differently</li>
              <li><strong>Leading Indicator Framework →</strong> Tells us <em>WHAT</em> to measure and <em>WHEN</em> to intervene (30 days before the churn decision)</li>
              <li><strong>Adapted RFM (Engagement Depth) →</strong> Tells us <em>WHO</em> is at risk before they realize it themselves</li>
            </ul>
            <p style={{ marginTop: "12px", fontSize: "0.9em" }}>
              The frameworks complement each other: Funnel and Cohort Analysis answer the diagnostic
              questions, while the Leading Indicator and Engagement Depth frameworks power the
              predictive early warning system. Using any single framework alone would answer only part
              of the question.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 (was 4) ── */}
      <section>
        <h2>5. Data Perspective</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Data Sources:</strong>
            <ul>
              <li><strong>CRM (Salesforce):</strong> signup_source, signup_month, discount_used, cancellation_reason</li>
              <li><strong>Transaction / Order Management System:</strong> first_box_category, COGS per box, delivery timestamps</li>
              <li><strong>Mobile &amp; Web App Analytics (Mixpanel):</strong> login_frequency, choice_made, email_open_rate, days-since-last-login</li>
              <li><strong>Product Review Platform (Yotpo):</strong> review_score, review_text (NLP-derived sentiment, not yet formalized)</li>
              <li><strong>Billing System (Stripe):</strong> billing vs. shipping address (used as gift subscription proxy), payment failure flags</li>
            </ul>
          </div>
          <p>We have access to a relational database with the following key variables:</p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Variable</th>
                <th>Description</th>
                <th>Importance</th>
                <th>Type</th>
                <th>Leading / Lagging</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>signup_source</code></td>
                <td>Channel (IG, TikTok, Search, Referral)</td>
                <td>High (Channel quality)</td>
                <td>Categorical</td>
                <td>Leading</td>
              </tr>
              <tr>
                <td><code>first_box_category</code></td>
                <td>Dominant product type (Skincare vs Makeup)</td>
                <td>Critical (Product fit)</td>
                <td>Categorical</td>
                <td>Leading</td>
              </tr>
              <tr>
                <td><code>review_score</code></td>
                <td>Rating given to the first box (1–5)</td>
                <td>Medium (Satisfaction)</td>
                <td>Ordinal</td>
                <td>Lagging</td>
              </tr>
              <tr>
                <td><code>login_frequency</code></td>
                <td>Days active on site/app in Month 1</td>
                <td>High (Engagement)</td>
                <td>Continuous</td>
                <td>Leading</td>
              </tr>
              <tr>
                <td><code>email_open_rate</code></td>
                <td>% of onboarding emails opened in M1</td>
                <td>High (Engagement)</td>
                <td>Continuous</td>
                <td>Leading</td>
              </tr>
              <tr>
                <td><code>choice_made</code></td>
                <td>Did user pick their M2 "Choice Item"?</td>
                <td>High (Investment)</td>
                <td>Binary</td>
                <td>Leading</td>
              </tr>
              <tr>
                <td><code>discount_used</code></td>
                <td>Was a signup promo code applied?</td>
                <td>High (Intent signal)</td>
                <td>Binary</td>
                <td>Leading</td>
              </tr>
              <tr>
                <td><code>signup_month</code></td>
                <td>Calendar month of initial subscription</td>
                <td>Medium (Seasonality)</td>
                <td>Date</td>
                <td>Leading</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: "20px" }}><strong>Sample Data (10 Users):</strong></p>
          <p style={{ fontSize: "13px", color: "#555", marginBottom: "8px" }}>
            This table is for <em>pattern illustration only</em>. Each row is designed to demonstrate a
            recognizable signal combination (high logins + choice made = retained; low logins + promo =
            churned). The aggregate statistics cited in Section 6 — such as 58% promo-churn or 62% churn
            for logins &lt;5 days — come from the full 10,000-subscriber cohort, not from these 10 rows.
          </p>
          <table className="data-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Source</th>
                <th>Box Type</th>
                <th>Review</th>
                <th>Logins (M1)</th>
                <th>Choice?</th>
                <th>Promo?</th>
                <th>Churned M3?</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>U001</td><td>TikTok</td><td>Makeup</td><td>3</td><td>2</td><td>No</td><td>Yes</td><td><strong>Yes</strong></td></tr>
              <tr><td>U002</td><td>Referral</td><td>Skincare</td><td>5</td><td>12</td><td>Yes</td><td>No</td><td>No</td></tr>
              <tr><td>U003</td><td>IG</td><td>Makeup</td><td>4</td><td>1</td><td>No</td><td>Yes</td><td><strong>Yes</strong></td></tr>
              <tr><td>U004</td><td>Search</td><td>Skincare</td><td>4</td><td>8</td><td>Yes</td><td>No</td><td>No</td></tr>
              <tr><td>U005</td><td>TikTok</td><td>Makeup</td><td>2</td><td>0</td><td>No</td><td>Yes</td><td><strong>Yes</strong></td></tr>
              <tr><td>U006</td><td>Referral</td><td>Skincare</td><td>5</td><td>15</td><td>Yes</td><td>No</td><td>No</td></tr>
              <tr><td>U007</td><td>IG</td><td>Skincare</td><td>3</td><td>4</td><td>No</td><td>Yes</td><td><strong>Yes</strong></td></tr>
              <tr><td>U008</td><td>Search</td><td>Makeup</td><td>4</td><td>6</td><td>Yes</td><td>No</td><td>No</td></tr>
              <tr><td>U009</td><td>TikTok</td><td>Makeup</td><td>1</td><td>0</td><td>No</td><td>Yes</td><td><strong>Yes</strong></td></tr>
              <tr><td>U010</td><td>Referral</td><td>Skincare</td><td>4</td><td>10</td><td>Yes</td><td>No</td><td>No</td></tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Data Limitations:</strong>
            <ul>
              <li>
                We lack NPS (Net Promoter Score) data — review scores only capture product quality, not
                overall experience or brand sentiment.
              </li>
              <li>
                No "unboxing" engagement tracking — did the customer open the package the day it arrived, or
                did it sit untouched for a week?
              </li>
              <li>
                <strong>Hidden Variable — gift_subscription:</strong> We suspect gift recipients (someone
                else paid) are a major confound with estimated churn of 90%+. To mitigate this, we excluded
                accounts where the billing address differed from the shipping address in 3+ consecutive
                months — a reliable proxy for gift subscriptions. This reduced the suspected gift cohort to
                ~4% of records, which were removed from the training dataset before analysis. The{" "}
                <code>gift_subscription</code> flag should be formalized in the data pipeline for future
                model iterations.
              </li>
              <li>
                <code>email_open_rate</code> data has ~12% missingness due to Apple Mail Privacy Protection
                (MPP), which pre-fetches pixels and inflates open rates on iOS devices. We applied a
                conservative 0.7× correction factor to iOS-originated records and flagged this as an
                assumption in the model documentation.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 (was 5) ── */}
      <section>
        <h2>6. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <p>
            As a senior analyst, we <strong>never jump straight into modeling</strong>. We follow a logical
            investigative flow — starting wide and narrowing down:
          </p>
          <ol>
            <li>
              <strong>Step 1 — Map the Customer Journey Funnel:</strong> Before touching any model, draw
              the lifecycle funnel:
              <div className="calculation" style={{ margin: "15px 0" }}>
{`Customer Lifecycle Funnel:
Signup (10,000) → M1 Active (9,200) → M2 Active (7,800) → M3 Retained (5,500) → M4+ Profitable (5,100)
   Drop: 8%         Drop: 15%         Drop: 30% ← THE CLIFF      Drop: 7%
Key Observation: The biggest drop is M2 → M3 (30%).
But there's also a hidden "silent drop" at M1 → M2 (15%) we shouldn't ignore.`}
              </div>
            </li>
            <li>
              <strong>Step 2 — Cohort Analysis:</strong> We group users by their sign-up month. We discover
              that the "Holiday Cohort" (Nov/Dec) has 15% higher churn than the "Spring Cohort" (Apr/May).{" "}
              <em>Reasoning:</em> November has aggressive "Black Friday" promotions that attract
              deal-seekers, not brand loyalists. <em>Validation:</em> If true, the{" "}
              <code>discount_used</code> flag should be significantly higher in the Holiday cohort — and it
              is (78% vs. 41%).
            </li>
            <li>
              <strong>Step 3 — Hypothesis Testing with Pivot Tables:</strong> Before building any model, we
              create simple pivot tables to test our three hypotheses:
              <div className="calculation" style={{ margin: "15px 0" }}>
{`Hypothesis Testing Results:
┌─────────────────────────┬─────────────┬─────────────┬──────────┐
│ Segment                 │ M3 Churn    │ Sample Size │ Signal?  │
├─────────────────────────┼─────────────┼─────────────┼──────────┤
│ Promo Signup (Yes)      │ 58%         │ 4,200       │ ✓ STRONG │
│ Promo Signup (No)       │ 31%         │ 5,800       │          │
│ Box: Skincare-heavy     │ 30%         │ 4,800       │ ✓ STRONG │
│ Box: Makeup-heavy       │ 55%         │ 5,200       │          │
│ Login M1 ≥ 5 days       │ 22%         │ 3,900       │ ✓ STRONG │
│ Login M1 < 5 days       │ 62%         │ 6,100       │          │
│ Choice Made (Yes)       │ 18%         │ 3,100       │ ✓ STRONG │
│ Choice Made (No)        │ 57%         │ 6,900       │          │
│ Review Score ≥ 4        │ 40%         │ 5,500       │ ✗ WEAK   │
│ Review Score < 4        │ 51%         │ 4,500       │          │
└─────────────────────────┴─────────────┴─────────────┴──────────┘
Key Surprise: review_score is the WEAKEST predictor.
"Participation" beats "Satisfaction" every time.`}
              </div>
            </li>
            <li>
              <strong>Step 4 — Segmentation by Product:</strong> We slice the M3 churn rate by{" "}
              <code>first_box_category</code>.
              <ul>
                <li>Users who received "Skincare" heavy boxes churn at 30%.</li>
                <li>Users who received "Makeup" heavy boxes churn at 55%.</li>
                <li>
                  <em>Business Insight:</em> Skincare products create daily "routines" (cleanser → serum →
                  moisturizer), whereas makeup is "transactional" — you buy one lipstick and don't need
                  another for months.
                </li>
                <li>
                  <em>Causality Note:</em> This is observational — skincare-interested users may simply have
                  higher baseline loyalty regardless of box contents. To confirm causality, we need the A/B
                  test described in Section 9: randomly assign new signups to a skincare-heavy vs. standard
                  box. If the treatment group retains significantly better, the product mix itself drives the
                  outcome, not pre-existing user preference.
                </li>
              </ul>
            </li>
            <li>
              <strong>Step 5 — Leading vs. Lagging Indicator Analysis:</strong> A critical senior-level
              distinction:
              <ul>
                <li>
                  <strong>Leading Indicators</strong> (can act on early):{" "}
                  <code>login_frequency</code> in Week 1, <code>choice_made</code> status,{" "}
                  <code>email_open_rate</code>.
                </li>
                <li>
                  <strong>Lagging Indicators</strong> (by the time you see them, it's too late):{" "}
                  <code>review_score</code>, <code>cancellation_reason</code>,{" "}
                  <code>support_ticket_count</code>.
                </li>
                <li>
                  <em>Lesson:</em> Build your early warning system on leading indicators only.
                </li>
              </ul>
            </li>
            <li>
              <strong>Step 6 — The "Silent Canceller" Discovery:</strong> We analyze login patterns and find
              a critical threshold: users who don't log in for 14+ days after receiving their first box have
              an 85% probability of churning at M3. These users never complain — they simply forget the
              subscription exists.{" "}
              <em>Validation:</em> We run a logistic regression with all leading indicators as inputs.{" "}
              <code>login_frequency</code> has a coefficient of -0.87 (p &lt; 0.001), confirming it is
              statistically significant. We checked for multicollinearity between <code>promo_used</code>{" "}
              and <code>login_frequency</code> (VIF = 2.1, within acceptable range) — both contribute
              independent predictive power and were retained in the model.
            </li>
            <li>
              <strong>Step 7 — Path Analysis (Decision Tree Thinking):</strong> We look at the "Choice
              Made" variable. Users who engage with the "Choose one item for your next box" feature in M1
              are <strong>3x more likely to stay past M3</strong>.
              <ul>
                <li>
                  <em>Why?</em> The act of choosing creates psychological ownership — they've invested in
                  "their" box, making cancellation feel like losing something.
                </li>
                <li>
                  <em>Counterpoint:</em> Is this selection bias? Maybe already-engaged users are more likely
                  to both choose AND stay. This is exactly why the A/B test in Section 9 is designed to
                  randomly nudge users to make a choice — separating the effect of the feature from the
                  pre-existing engagement level.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      {/* ── SECTION 7 (was 6) ── */}
      <section>
        <h2>7. Calculation &amp; Simulation</h2>
        <div className="content">
          <p>
            Let's calculate the financial impact across <strong>multiple scenarios</strong> to give
            management a range, not a single number:
          </p>
          <div className="calculation">
            <strong>Base Assumptions:</strong>
            <br />
            New Monthly Subs: 10,000
            <br />
            CAC: $60 | Monthly Margin: $15
            <br />
            Break-even: Month 4 (CAC recovered after 4 margin payments)
            <br />
            Current M3 Churn: 45% (4,500 users lost)
            <br />
            <br />
            <strong>Current State (Status Quo):</strong>
            <br />
            Total Lost Margin: 4,500 × $15 = $67,500/month
            <br />
            Wasted CAC: 4,500 × $60 = $270,000/month (never recovered)
            <br />
            <br />
            <strong>SENSITIVITY ANALYSIS: Impact of Different Churn Reductions</strong>
          </div>
          <div style={{ overflowX: "auto", margin: "12px 0" }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>New Churn</th>
                  <th>Users Saved</th>
                  <th>Margin Saved</th>
                  <th>Revenue M4-M6</th>
                  <th>Net Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Conservative</td>
                  <td>40% (-5%)</td>
                  <td>500</td>
                  <td>$7,500</td>
                  <td>$22,500</td>
                  <td><span className="math-result">$30,000/mo</span></td>
                </tr>
                <tr>
                  <td>Target</td>
                  <td>35% (-10%)</td>
                  <td>1,000</td>
                  <td>$15,000</td>
                  <td>$45,000</td>
                  <td><span className="math-result">$60,000/mo</span></td>
                </tr>
                <tr>
                  <td>Optimistic</td>
                  <td>30% (-15%)</td>
                  <td>1,500</td>
                  <td>$22,500</td>
                  <td>$67,500</td>
                  <td><span className="math-result">$90,000/mo</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="calculation">
            <strong>Intervention Cost Estimate:</strong>
            <br />
            - Automated email/SMS system: $3,000/month
            <br />
            - Choice feature improvement: $15,000 one-time (dev cost)
            <br />
            - Skincare-heavy M1 box shift: +$2.40/box COGS increase
            <br />
            Monthly COGS increase: 10,000 × $2.40 = $24,000/month
            <br />
            <br />
            <strong>Break-even Analysis:</strong>
            <br />
            Even the CONSERVATIVE scenario ($30,000/month benefit) exceeds intervention cost
            <br />
            ($3,000 + $24,000 = $27,000/month).
            <br />
            Net positive from Day 1: <span className="math-result">+$3,000/month minimum</span>
            <br />
            <br />
            <strong>12-Month Annualized Impact (Target Scenario):</strong>
            <br />
            $60,000/month × 12 = <span className="math-result">$720,000/year in retained revenue</span>
            <br />
            Plus recovered CAC: 1,000 users × $60 × 12 months = $720,000
            <br />
            Total annual value: <span className="math-result">$1,440,000</span>
            <br />
            <br />
            <strong>LTV/CAC Trajectory — Series B Requirement:</strong>
            <br />
            Current LTV: $15 × avg 9.2 months retained = $138 | CAC: $60
            <br />
            Current LTV/CAC = 138 / 60 = <span className="math-result">2.30 ← still below 3.0</span>
            <br />
            Wait — the existing data says LTV/CAC is 0.92. Let's reconcile:
            <br />
            0.92 × $60 CAC implies LTV ≈ $55, meaning avg retention ≈ 3.7 months (including all churners).
            <br />
            At Target Scenario (35% M3 churn), avg retention improves to ~5.4 months:
            <br />
            New LTV = $15 × 5.4 = $81 | LTV/CAC = 81 / 60 = <span className="math-result">1.35</span>
            <br />
            To reach LTV/CAC = 3.0: LTV must reach $180 → avg retention = 12 months.
            <br />
            That requires reducing M3 churn to ~20% AND improving M4-M12 retention simultaneously.
            <br />
            <span className="math-result">Conclusion: This program gets us to ~1.35. The Series B target of
            3.0 requires a multi-year retention roadmap, not a single intervention.</span>
          </div>
          <div className="highlight-box">
            <strong>Strategic Implication for the Board:</strong> The interventions in this analysis
            move LTV/CAC from 0.92 to ~1.35 — above 1.0 (sustainable) but well below 3.0 (Series B
            standard). This is honest math. Present it to the board as Phase 1 of a two-year retention
            roadmap. Phase 2 (the Skin Diary feature, personalization engine, and channel mix shift)
            is what closes the remaining gap to 3.0.
          </div>
        </div>
      </section>

      {/* ── SECTION 8 (was 7) ── */}
      <section>
        <h2>8. Findings &amp; Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>What We Expected vs. What We Found:</strong>
            <table className="data-table" style={{ marginTop: "15px" }}>
              <thead>
                <tr>
                  <th>Assumption</th>
                  <th>Expected</th>
                  <th>Actual Finding</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Strongest predictor of retention</td>
                  <td>Review score (satisfaction)</td>
                  <td><strong>login_frequency + choice_made (behavior)</strong></td>
                </tr>
                <tr>
                  <td>Churn is random across channels</td>
                  <td>Equal churn rates</td>
                  <td><strong>TikTok churns 2× more than Referral — a channel quality problem, not a product problem</strong></td>
                </tr>
                <tr>
                  <td>Product type doesn't matter</td>
                  <td>Similar retention</td>
                  <td><strong>Skincare = 30% churn vs. Makeup = 55% — a 40% LTV differential</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul style={{ marginTop: "20px" }}>
            <li>
              <strong>The Engagement Trigger:</strong> The single biggest predictor of retention isn't
              satisfaction (review score), but <strong>participation</strong> (making a choice for the next
              box). This insight is counter-intuitive — most businesses focus on improving the product when
              they should focus on increasing user investment.
            </li>
            <li>
              <strong>The TikTok Channel Problem (Unpacked):</strong> TikTok signups churn at 2× the rate
              of Referral signups. This is not a product problem — it is a channel quality problem. TikTok
              drives impulse signups from users attracted by viral unboxing content; Referral brings
              warm leads who already trust a friend's recommendation. The implication is significant: the
              company is spending approximately $180,000/month acquiring TikTok subscribers who will
              predominantly churn at M3. A 15% reallocation of the TikTok budget ($27,000/month) into
              Referral program incentives would almost certainly improve the average LTV of new cohorts
              without reducing acquisition volume.
            </li>
            <li>
              <strong>Product LTV Differential (with derivation):</strong> Skincare subscribers are the
              "Gold" segment. Here is how the LTV figures are calculated:
              <div className="calculation" style={{ margin: "12px 0" }}>
{`LTV Formula: Monthly Margin × Average Retention Months

Skincare subscriber:
  Avg. retention = 18 months | Monthly margin = $15
  LTV = $15 × 18 = $270

Makeup subscriber:
  Avg. retention = 11 months | Monthly margin = $15
  LTV = $15 × 11 = $165

LTV differential = $270 − $165 = $105 (~40% higher for skincare)`}
              </div>
              This gap explains why shifting new subscribers toward skincare routines is a strategic
              priority, not just an operational preference.
            </li>
            <li>
              <strong>The "Silent Canceller" Pattern:</strong> Users who don't log in for 14 days after
              receiving Box 1 have an 85% probability of churning. These users never submit a complaint.
              They simply forget. <em>Statistical backing:</em> Logistic regression coefficient for
              login_frequency: -0.87 (p &lt; 0.001). VIF check confirmed no multicollinearity with
              promo_used (VIF = 2.1).
            </li>
            <li>
              <strong>Counter-Intuitive Finding:</strong> High review scores (4–5 stars) do NOT prevent
              churn. Users can love the product but still cancel because they're "full" — they have enough
              skincare products to last months. Satisfaction ≠ Retention when the product is a physical
              good that accumulates.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 9 (was 8) ── */}
      <section>
        <h2>9. Recommendations</h2>
        <div className="content">
          <p><strong>Tier 1 — Immediate Actions (0–30 days, low effort, high impact):</strong></p>
          <ul>
            <li>
              <strong>Action:</strong> Trigger an automated "Personalize your next box" email/SMS 3 days
              after the first box is delivered. <strong>Owner: Head of Retention.</strong>
              <br /><strong>Expected Impact:</strong> Increase "Choice Made" rate from 31% to 50%, reducing
              M3 churn by ~8 percentage points.{" "}
              <br /><strong>Priority:</strong> High | <strong>Cost:</strong> $3,000/month (email platform).
            </li>
            <li>
              <strong>Action:</strong> Create a "Silent Canceller" alert — if no login within 14 days of
              Box 1 delivery, trigger a personalized re-engagement push notification (not a discount — a
              personalized product tip or how-to content). <strong>Owner: VP of Product.</strong>
              <br /><strong>Expected Impact:</strong> Recover 15% of silent cancellers (~450 users/month).{" "}
              <br /><strong>Priority:</strong> High | <strong>Cost:</strong> Minimal (reuse existing
              notification system).
            </li>
          </ul>

          <p><strong>Tier 2 — Medium-Term Initiatives (1–6 months, require resourcing):</strong></p>
          <ul>
            <li>
              <strong>Action:</strong> Shift the M1 "New Member" box to be skincare-heavy rather than
              makeup-heavy to build routine behavior. Run A/B test first with a 2,000-user pilot before
              full rollout. <strong>Owner: VP of Product + Supply Chain Manager.</strong>
              <br /><strong>Expected Impact:</strong> Convert 20% of would-be makeup churners into routine
              users.{" "}
              <br /><strong>Risk/Tradeoff:</strong> COGS increases by $2.40/box. Makeup-preference users
              may feel disappointed — monitor review scores and Choice Made rates in treatment group
              closely.
            </li>
            <li>
              <strong>Action:</strong> Implement a predictive "Churn Risk" dashboard for the Customer
              Success team. Flag high-risk M2 users and offer targeted gifts (not discounts — discounts
              train customers to expect them). <strong>Owner: Head of Retention + Analytics team.</strong>
              <br /><strong>Expected Impact:</strong> $45,000/month in retained margin at target scenario.{" "}
              <br /><strong>Priority:</strong> Medium | <strong>Cost:</strong> $15,000 one-time dev +
              $2,000/month operations.
            </li>
            <li>
              <strong>Action:</strong> Reallocate 15% of the TikTok acquisition budget ($27,000/month)
              into a Referral Program incentive (e.g., "Give a friend $20, get $20").{" "}
              <strong>Owner: CGO.</strong>
              <br /><strong>Expected Impact:</strong> Improve new cohort average LTV by shifting channel
              mix toward higher-quality Referral signups. Referral users churn at 50% the rate of TikTok
              users — this is the highest-ROI acquisition budget change available.{" "}
              <br /><strong>Priority:</strong> High | <strong>Cost:</strong> $27,000/month redirected (not
              incremental spend).
            </li>
          </ul>

          <p><strong>Tier 3 — Strategic Moves (6+ months, transformational):</strong></p>
          <ul>
            <li>
              <strong>Action:</strong> Build a "Skin Diary" in-app feature — a personalized skincare
              routine tracker that logs which products the user is currently using, prompts daily check-ins,
              and recommends upcoming box contents based on the routine. <strong>Owner: VP of Product.</strong>
              <br /><strong>Expected Impact:</strong> Increases switching cost for skincare subscribers
              dramatically — the diary is built around GlowBox products, making the subscription feel like
              a personal tool, not a commodity box. Estimated to add 3–4 months to average skincare
              subscriber retention, pushing skincare LTV from $270 to $315.{" "}
              <br /><strong>Investment:</strong> ~$80,000–$120,000 development + $5,000/month maintenance.
            </li>
            <li>
              <strong>Action:</strong> Develop a formal "Segment and Serve" acquisition strategy — set
              channel-specific CAC ceilings based on measured LTV by channel. TikTok CAC ceiling: $35
              (given average LTV of ~$80 for TikTok cohort). Referral CAC ceiling: $80 (given average LTV
              of ~$240). This prevents the current situation where all channels are measured against the
              same $60 CAC target despite having radically different LTV profiles.{" "}
              <strong>Owner: CGO + Analytics team.</strong>
              <br /><strong>Priority:</strong> Medium | <strong>Cost:</strong> Analytics infrastructure +
              6 weeks of modeling work.
            </li>
          </ul>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Experimentation Design (A/B Test) — Resolving Causality:</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              This experiment is designed to answer two open causality questions simultaneously: (1) Does
              the skincare box itself drive retention, or do skincare-interested users simply have higher
              baseline loyalty? (2) Does nudging users to make a choice cause retention, or do already-engaged
              users self-select into making choices? By randomly assigning both box type AND the choice nudge,
              we separate effect from selection bias.
            </p>
            <ul>
              <li><strong>Test:</strong> Skincare-heavy M1 box + choice nudge email (Treatment) vs. Standard M1 box (Control)</li>
              <li><strong>Sample:</strong> 2,000 new signups split 50/50 — randomly assigned, not self-selected</li>
              <li><strong>Primary Metric:</strong> M3 retention rate</li>
              <li><strong>Secondary Metrics:</strong> Review score, login frequency, choice_made rate</li>
              <li><strong>Duration:</strong> 90 days (full M3 cycle)</li>
              <li>
                <strong>Decision Rule:</strong> If Treatment M3 retention &gt; Control by ≥5 percentage
                points (p &lt; 0.05), roll out to all new signups. If the effect is driven by the nudge
                alone (not box type), run a follow-up 2×2 factorial test to isolate each variable.
              </li>
              <li>
                <strong>Day 91 Decision Gate:</strong> The CGO reviews results with the A/B data in hand.
                Three paths: (A) Full rollout if both treatments show effect. (B) 2×2 factorial test if
                the effect is ambiguous. (C) Abandon and pivot to the Churn Risk Dashboard as the primary
                intervention if neither treatment shows ≥5pp improvement.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 10 (was 9) ── */}
      <section>
        <h2>10. Business Decision-Making</h2>
        <div className="content">
          <p>Based on this analysis, the CGO decides to:</p>
          <ol>
            <li>
              <strong>Reallocate Budget:</strong> Move 15% of the TikTok acquisition budget
              ($90,000/month) into a "Customer Onboarding &amp; Education" team — because saving existing
              customers is 4x cheaper than acquiring new ones. An additional $27,000/month is redirected
              from TikTok into Referral Program incentives based on the channel LTV analysis.
            </li>
            <li>
              <strong>Product Roadmap:</strong> Prioritize an in-app "Skin Diary" feature to increase the
              "Switching Cost" for skincare users — making the subscription more personal and harder to
              abandon. This is a 6-month initiative allocated to the VP of Product's Q3–Q4 roadmap.
            </li>
            <li>
              <strong>Alternative Strategy Considered:</strong> The Head of Retention proposed offering a
              "3-month commitment discount" (lock users in). The CGO rejected this because it treats the
              symptom (churn) not the cause (low engagement). Locked-in users who don't engage will simply
              churn at M6 instead of M3 — and they will have been trained to expect discounts.
            </li>
          </ol>
          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Monitoring Dashboard — Weekly KPIs:</strong>
            <table className="data-table">
              <thead>
                <tr>
                  <th>KPI</th>
                  <th>Current</th>
                  <th>Target (Q2)</th>
                  <th>Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>M3 Retention Rate</td><td>55%</td><td>65%</td><td>Monthly (by cohort)</td></tr>
                <tr><td>"Choice Made" Rate (M1)</td><td>31%</td><td>50%</td><td>Weekly</td></tr>
                <tr><td>M1 Login Frequency (avg)</td><td>4.2 days</td><td>7.0 days</td><td>Weekly</td></tr>
                <tr><td>Silent Canceller Rate (14-day no-login)</td><td>38%</td><td>20%</td><td>Weekly</td></tr>
                <tr><td>LTV/CAC Ratio</td><td>0.92</td><td>1.35 (Phase 1)</td><td>Monthly</td></tr>
                <tr><td>Referral Channel Mix (%)</td><td>~8%</td><td>15%</td><td>Monthly</td></tr>
              </tbody>
            </table>
          </div>
          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Day 91 Review Protocol:</strong> The CGO holds a structured review with the Head of
            Retention and VP of Analytics. Agenda: (1) A/B test results presented with statistical
            significance. (2) KPI dashboard reviewed against targets. (3) One of three decisions made:
            full rollout, 2×2 factorial follow-up, or pivot to alternative intervention. This is not a
            "let's see how it goes" review — it is a pre-committed decision gate with criteria set
            before the test began.
          </div>
        </div>
      </section>

      {/* ── SECTION 11 (was 10 — WAR ROOM NOTES) ── */}
      <section>
        <h2>11. Senior Practitioner's War Room Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>The Pattern I've Seen Before:</strong>
            <p style={{ marginTop: "8px" }}>
              I've seen this exact scenario at three subscription businesses over the past seven years —
              a meal kit company, a wellness supplement box, and a SaaS productivity tool. In every
              case, the executive team comes in with the same brief: "We have a churn problem." But when
              you pull the funnel, it's almost never random churn. It always concentrates at a structural
              inflection point — the moment novelty wears off and the product hasn't yet embedded into a
              habit. For physical goods, that inflection is almost always around the third delivery. For
              SaaS, it's around the end of the free trial or the first renewal. The question is never
              "why are people leaving?" — it's always "why didn't they form a habit before the novelty
              expired?"
            </p>
          </div>

          <div className="highlight-box">
            <strong>The Most Dangerous Mistake Companies Make:</strong>
            <p style={{ marginTop: "8px" }}>
              They launch a discount-based "save the customer" program. This feels decisive and shows
              a number on a dashboard. In practice, it does three damaging things simultaneously:
              (1) it trains your customer base to expect a discount whenever they signal intent to
              leave, so you've created a profitable churn arbitrage that savvy users exploit
              repeatedly; (2) it brings back exactly the discount-hunters who were never profitable to
              begin with, temporarily inflating your retention numbers while worsening the underlying
              economics; (3) it creates a perverse budget spiral where you spend more to retain the
              least valuable customers. The CGO was right to reject the commitment discount proposal.
              The correct save is a gift — something that deepens the relationship without conditioning
              the behavior.
            </p>
          </div>

          <div className="highlight-box">
            <strong>What Junior Analysts Always Miss:</strong>
            <p style={{ marginTop: "8px" }}>
              They analyze the wrong comparison group. Most juniors pull a dataset of churned customers
              and look for patterns within that group: "What do churned customers have in common?" That
              is the wrong question. The insight comes from comparing churned customers to retained
              customers at the same lifecycle stage. The "silent canceller" pattern — zero logins for
              14 days — only emerges when you notice that churned users average 0.8 logins in days
              14–30 while retained users average 7.2. You cannot see that from churned users alone. You
              need the contrast. This is a version of survivorship bias, and it kills the quality of
              retention analysis in probably 60% of the engagements I've reviewed.
            </p>
          </div>

          <div className="highlight-box">
            <strong>What a Great Analyst Does Differently:</strong>
            <p style={{ marginTop: "8px" }}>
              They reframe the question before answering it. Management asked: "How do we reduce
              churn?" A mediocre analyst answers that question directly. A great analyst steps back and
              says: "The real question is: how do we embed this product into a daily routine before the
              novelty threshold at M3?" The first framing leads to save campaigns, winback discounts,
              and longer contract options. The second leads to onboarding redesign, habit architecture,
              and psychological ownership mechanisms — which is what the "Choice Made" feature
              represents. The reframe is worth more than the entire model.
            </p>
          </div>

          <div className="highlight-box">
            <strong>Hard-Won Lesson No Textbook Teaches:</strong>
            <p style={{ marginTop: "8px" }}>
              In subscription retention, the most dangerous customer is not the one who complains —
              it's the one who silently disappears. A complaint is a signal. It tells you something
              is wrong and gives you a chance to respond. Silence is a void. By the time you notice a
              silent canceller, they've already mentally cancelled — the formal click is just
              paperwork. Build your monitoring system to detect absence, not just negative presence.
              A customer who hasn't logged in for 14 days is already gone in every meaningful sense;
              you just don't know it yet. The best retention intervention is not a save program —
              it's never letting them go silent in the first place.
            </p>
          </div>

          <div className="highlight-box">
            <strong>The Interview-Ready Framework (Funnel → Segment → Signal → Experiment):</strong>
            <p style={{ marginTop: "8px" }}>
              If asked "How would you reduce churn for a subscription business?" in a consulting
              interview, the winning answer structure is:{" "}
              <em>
                "First, I'd map the lifecycle funnel to find WHERE churn concentrates. Then I'd use
                cohort analysis to find WHEN different customer types behave differently. I'd segment
                users by WHO is churning versus staying. Then I'd analyze behavioral leading indicators
                to understand WHY before they decide to leave. Finally, I'd design an A/B test with a
                pre-committed decision rule to validate the intervention before scaling it."
              </em>{" "}
              Funnel → Cohort → Segment → Signal → Experiment. That structure, delivered confidently
              with one concrete example, will separate you from 90% of candidates in any analytics
              interview.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Case01;
