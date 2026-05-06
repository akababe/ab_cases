const Case09 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 09</span>
        <h1>The Ghost User Syndrome</h1>
        <div className="case-meta">Industry: SaaS / Technology &bull; Level: Advanced</div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>CloudCollab</strong> is a B2B SaaS platform for project management and team communication.
            They use a subscription model (monthly/annual) with three tiers: Pro ($50/mo), Business ($150/mo),
            and Enterprise (custom). They've grown to 50,000 paying customers and $300M annual ARR.
          </p>
          <p>
            In SaaS, the golden metric is <strong>Net Revenue Retention (NRR)</strong>. If your NRR is above
            100%, existing customers are spending more over time (upgrades outpace downgrades). CloudCollab's
            NRR was 115% last year. This year, it's dropped to 92%. <em>This is a silent emergency.</em>
          </p>
          <div className="highlight-box">
            <strong>Stakeholders:</strong> VP of Customer Success, Chief Product Officer, CFO.<br />
            <strong>Context:</strong> Sales team is hitting targets (new logo growth at +25%). But retention
            is crumbling. The math is brutal: if new growth = 25% but existing customer decline = 33%, the
            company is dying even though the top line looks healthy.
            <br />
            <strong>The Hidden Crisis:</strong> Most of the churn is "invisible." Customers don't cancel.
            They just... stop using the product. They become "Ghosts."
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Invisible Problem: Why Traditional Metrics Lie</h2>
        <div className="content">
          <p>
            This case is fundamentally different from typical churn analysis because the problem is
            <strong> invisible to standard dashboards</strong>.
          </p>
          <div className="highlight-box">
            <strong>Finance View:</strong> "Churn is only 8% annually. We're retaining 92% of customers."
            <br />
            <strong>Product View:</strong> "Usage is stable. Daily Active Users up 5% month-over-month."
            <br />
            <strong>CS View:</strong> "We have no visibility. Customers don't answer our renewal calls."
            <br />
            <strong>Reality:</strong> 35% of customers are "Ghosts"—paying but not using the product.
          </div>
          <p>
            The Ghost problem breaks traditional metrics because Ghosts don't churn immediately. They churn
            on renewal day—6-12 months after they stopped using the product. By then, it's irreversible.
          </p>
          <ul>
            <li>
              <strong>Month 1-2:</strong> Customer signs up, tries a few features, gets busy. Adoption stalls.
            </li>
            <li>
              <strong>Month 3-8:</strong> User is "Ghost"—subscription renews automatically, but zero usage.
              Company gets revenue (looks healthy). User gets no value.
            </li>
            <li>
              <strong>Month 9:</strong> Annual renewal invoice arrives. User cancels. NRR collapses.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. Business Problem: The "Cascade Effect"</h2>
        <div className="content">
          <p>
            CloudCollab's churn isn't random. It follows a <strong>Cascade Pattern</strong> that most
            companies miss.
          </p>
          <ul>
            <li>
              <strong>Phase 1 — Feature Underutilization (Week 1-4):</strong> New users adopt 1-2 features
              max. They never reach "Aha" (typically requires 3+ core features used regularly).
            </li>
            <li>
              <strong>Phase 2 — Key-Person Dependency (Week 5-12):</strong> If the "Power User" (usually the
              buyer/admin) stops using the product, the entire account (5-50 people) has a 70% probability
              of churning within 60 days. <em>Why?</em> Team coordination breaks. If the admin isn't using
              it, why should anyone else?
            </li>
            <li>
              <strong>Phase 3 — Ghost Period (Month 3-9):</strong> The account is functionally dead, but
              billing doesn't know. Revenue still comes in. It's a slow bleed.
            </li>
            <li>
              <strong>Phase 4 — Renewal Cliff (Month 9-12):</strong> At renewal, the customer realizes they
              haven't used it in 6 months. They cancel. Too late to save.
            </li>
          </ul>
          <div className="highlight-box">
            <strong>Business Impact:</strong>
            <ul>
              <li>
                Current Annual Churn: 15% (but 35% are Ghosts, meaning true "inactive churn" is 24%
                annualized).
              </li>
              <li>NRR decline: 115% → 92% (23-point drop in one year).</li>
              <li>
                Ghost Revenue Leak: 35% × $300M ARR = $105M in revenue from users getting zero value.
              </li>
              <li>
                If Ghosts convert to paid churn at renewal, Company faces $50M+ revenue loss in next 6-12
                months.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Analytics Objective</h2>
        <div className="content">
          <p>
            Build a <strong>Product Health Score</strong> that predicts Ghost status BEFORE it becomes
            irreversible, enabling proactive intervention.
          </p>
          <div className="highlight-box">
            <strong>Key Questions:</strong>
            <ol>
              <li>
                What is "Minimum Viable Engagement" (MVE)? How much usage is required to have a 95%
                probability of staying past renewal?
              </li>
              <li>
                Which features are "Sticky"? (i.e., highly correlated with long-term retention regardless
                of other factors)
              </li>
              <li>
                How does engagement velocity (change in behavior week-over-week) predict Ghost status?
              </li>
              <li>
                If a "Key Person" (Admin/Manager) disengages, can we predict team-wide churn?
              </li>
              <li>
                What intervention (re-engagement email, feature tutorial, CS call) works best for each risk
                tier?
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. Data Perspective: The "Signal Stack"</h2>
        <div className="content">
          <p>
            We combine four layers of data to detect Ghosts. No single layer is sufficient; we need the
            stack.
          </p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Layer</th>
                <th>Data Source</th>
                <th>Key Variables</th>
                <th>What It Reveals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Layer 1<br />Product Usage</strong>
                </td>
                <td>Event logs</td>
                <td>
                  Logins/week, Core Actions/week, Features Used (Gantt, Integrations, Analytics Dashboard),
                  Session Duration
                </td>
                <td>Current engagement level</td>
              </tr>
              <tr>
                <td>
                  <strong>Layer 2<br />Engagement Velocity</strong>
                </td>
                <td>Time-series aggregation</td>
                <td>
                  Week-over-week login change (↓ = risky), Feature usage trend (slope), Days since last
                  action
                </td>
                <td>Direction of engagement (accelerating or decaying?)</td>
              </tr>
              <tr>
                <td>
                  <strong>Layer 3<br />Key-Person Risk</strong>
                </td>
                <td>User roles + events</td>
                <td>
                  Admin/Manager disengagement (0 actions in 14 days?), Team size, User count active vs.
                  inactive
                </td>
                <td>Cascade risk (if leader stops, team follows)</td>
              </tr>
              <tr>
                <td>
                  <strong>Layer 4<br />Support Signals</strong>
                </td>
                <td>Support tickets + NPS</td>
                <td>
                  Ticket volume trend, Sentiment (frustrated vs. neutral), NPS score, Unresolved issues
                </td>
                <td>Friction level (are they trying and failing?)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Step-by-Step: 7-Step Diagnostic Sequence</h2>
        <div className="content">
          <p>
            Unlike typical analytics, we don't build one model. We diagnose the Ghost problem through seven
            sequential steps that validate each layer of the problem.
          </p>

          <ol>
            <li>
              <strong>Step 1 — Define "Active" Correctly (Not Just Login):</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                A user can log in without taking action. We define an "Active Day" as one where a user
                performs at least one "Core Action": create/edit a project, invite a teammate, or comment.
                Login alone ≠ active.
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Finding:
Users with ≥3 Core Actions/week: 95% stay past renewal
Users with 1-2 Core Actions/week: 60% stay past renewal
Users with <1 Core Action/week: 18% stay past renewal
⟹ MVE (Minimum Viable Engagement) = 3 Core Actions/week`}
              </div>
            </li>

            <li>
              <strong>Step 2 — Identify Sticky Features (Feature-Level Churn Drivers):</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                Not all features matter equally. We correlate feature usage with long-term retention.
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Feature Stickiness Ranking (Retention Probability):
1. Integrations (Slack/Google Drive/Jira): 92% retention
2. Analytics Dashboard: 88% retention
3. Gantt Charts: 84% retention
4. Task Management (core): 76% retention
5. Notifications: 52% retention
⟹ Sticky insight: Users who adopt Integrations stay because 
   they've embedded CloudCollab into their existing workflow. 
   High switching cost.`}
              </div>
            </li>

            <li>
              <strong>Step 3 — Measure Engagement Velocity (Not Level, But Slope):</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                A user with 1 Core Action/week but accelerating (trend: ↑) is healthier than a user with 5
                Core Actions/week but decelerating (trend: ↓). We measure velocity.
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Velocity Tiers (Monthly Slope of Core Actions):
• Velocity = +10% WoW: 94% retain (growing)
• Velocity = 0-5% WoW: 72% retain (stable)
• Velocity = -5% to -10% WoW: 35% retain (slow decay)
• Velocity < -10% WoW: 8% retain (rapid decay = Ghost formation)`}
              </div>
            </li>

            <li>
              <strong>Step 4 — Key-Person Risk Measurement (Cascade Effect):</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                If the Admin stops using the product, does the team follow?
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Key-Person Impact:
Admin is Active (≥3 actions/week) & Team is Active: 89% account retention
Admin is Active, Team is Inactive: 76% account retention
Admin is Inactive (<1 action/week) & Team is Active: 41% account retention
Admin is Inactive, Team is Inactive: 12% account retention
⟹ Insight: Admin disengagement → 70% of team follows within 60 days`}
              </div>
            </li>

            <li>
              <strong>Step 5 — Define Ghost Segments (Actionable Risk Tiers):</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                We combine all signals to segment into 4 tiers with different interventions.
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Tier 1 — Healthy (50% of accounts):
  ✓ Active Days: ≥3/week | ✓ Velocity: stable or +
  ✓ Sticky features: ≥2 used | ✓ Admin: active
  → Churn risk: 3% | No intervention needed

Tier 2 — At Risk (25% of accounts):
  ⚠ Active Days: 1-2/week | ⚠ Velocity: slight decay (-5%)
  ⚠ Sticky features: 1 used | ⚠ Admin: active but slowing
  → Churn risk: 28% | Light-touch intervention (email + in-app)

Tier 3 — High Risk (15% of accounts):
  ⚠⚠ Active Days: <1/week | ⚠⚠ Velocity: steep decay (-15%)
  ⚠⚠ Sticky features: 0 adopted | ⚠⚠ Admin: recently inactive
  → Churn risk: 61% | Mid-touch intervention (CS call + tutorial)

Tier 4 — Ghost (10% of accounts):
  🔴 Active Days: 0 in 30+ days | 🔴 Velocity: offline for 2+ months
  🔴 Support: 0 tickets (not even complaining)
  🔴 Admin: dark for 60+ days
  → Churn risk: 92% | High-touch intervention (executive re-engagement)`}
              </div>
            </li>

            <li>
              <strong>Step 6 — Holdout Test (Prove It Works):</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                Before scaling, we validate with a holdout. Half of Tier 2 accounts get intervention, half
                don't.
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Holdout Test Results (3-month window):
Treatment Group (n=5,000): Automated re-engagement intervention
  → 12-month retention: 78%
  
Control Group (n=5,000): No intervention
  → 12-month retention: 58%
  
Lift: 20 percentage points
Statistical Significance: p < 0.001 ✓
⟹ Conclusion: Model is valid. Intervention works.`}
              </div>
            </li>

            <li>
              <strong>Step 7 — Calculate Per-Segment ROI (Not Blended):</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                Different tiers need different interventions with different costs and returns. One-size-fits-all
                fails.
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`ARPU: $100/month | LTV of retained user: $100 × 24 months = $2,400
LTV of churned user: $100 × 8 months = $800
LTV Gap: $1,600

Tier 2 (At Risk) — Light-Touch Strategy:
  Cost per intervention: $5 (automated email + in-app nudge)
  Success rate: 20% of Tier 2 saved from churn
  Total cost for 10,000 Tier 2 users: $50,000
  Users saved: 10,000 × 0.20 = 2,000
  Value gained: 2,000 × $1,600 = $3,200,000
  Net ROI: `}<span className="math-result">6,350%</span>
{`

Tier 3 (High Risk) — Mid-Touch Strategy:
  Cost per intervention: $75 (CS call + feature tutorial)
  Success rate: 35% of Tier 3 saved from churn
  Total cost for 6,000 Tier 3 users: $450,000
  Users saved: 6,000 × 0.35 = 2,100
  Value gained: 2,100 × $1,600 = $3,360,000
  Net ROI: `}<span className="math-result">6,467%</span>
{`

Tier 4 (Ghost) — High-Touch Strategy:
  Cost per intervention: $300 (exec re-engagement call + deep onboarding)
  Success rate: 15% of Tier 4 saved from churn (hardest to save)
  Total cost for 4,000 Tier 4 accounts: $1,200,000
  Accounts saved: 4,000 × 0.15 = 600
  Value gained: 600 × $1,600 = $960,000
  Net ROI: `}<span className="math-result">-20% (Net loss, but worth it for relationship preservation)</span>
{`

Blended ROI (all three tiers): `}<span className="math-result">4,872%</span>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Findings & Insights</h2>
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
                  <td>Highest churn driver</td>
                  <td>Product quality (bugs, crashes)</td>
                  <td>
                    <strong>Lack of adoption (never found "Aha")</strong>
                  </td>
                </tr>
                <tr>
                  <td>Support ticket correlation</td>
                  <td>More tickets = more churn</td>
                  <td>
                    <strong>0 tickets + 0 usage = highest churn</strong> (not complaining =
                    disengaged)
                  </td>
                </tr>
                <tr>
                  <td>Intervention timing</td>
                  <td>Wait until renewal warning signs</td>
                  <td>
                    <strong>Intervene by Week 4</strong> (after that, too late to reverse)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul style={{ marginTop: "20px" }}>
            <li>
              <strong>The "Integration Stickiness" Discovery:</strong> Users who connect CloudCollab to
              Slack, Jira, or Google Drive have a 92% retention rate. <em>Why?</em> They've embedded us into
              their workflow. Switching cost is now high (they'd lose integrations). <em>Strategic
              Implication:</em> Integrations should be the onboarding priority, not basic task management.
            </li>
            <li>
              <strong>The "Key-Person Cascade Effect":</strong> When an Admin's usage drops below 1
              Core Action/week, the entire team's average usage drops by 35% within 30 days, and account
              churn probability jumps to 70%. <em>Why?</em> Psychological: "If the leader isn't using it,
              why should I?" <em>Intervention:</em> Monitor Admins separately. If Admin is slowing, reach out
              immediately.
            </li>
            <li>
              <strong>The "Week 4 Threshold":</strong> Users who haven't adopted 2+ sticky features by Week
              4 have only a 22% probability of ever reaching them. The onboarding window is narrow.
            </li>
            <li>
              <strong>The "Support Silence" Signal:</strong> Users who open 0 support tickets AND have low
              usage are Ghosts. They've given up. Users who open 1-2 tickets/month are fighting to make it
              work (actually lower churn than expected—they care enough to ask for help).
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Recommendations</h2>
        <div className="content">
          <p><strong>Short-Term (Weeks 1-4):</strong></p>
          <ul>
            <li>
              <strong>Deploy Risk Scoring Dashboard:</strong> Make Tier assignment visible to CS team.
              Automate Tier 1 users (no touch). Flag Tier 2+ for intervention.
            </li>
            <li>
              <strong>Automated Tier 2 Campaign:</strong> If user hasn't adopted Integrations by Day 10,
              send an automated email: "Connect CloudCollab to Slack in 2 clicks" + in-app nudge with
              one-click setup.
            </li>
            <li>
              <strong>Admin Watch List:</strong> If an Admin goes dark for 7+ days, alert CS. Call within 24
              hours (before cascade happens).
            </li>
          </ul>

          <p><strong>Mid-Term (Months 2-4):</strong></p>
          <ul>
            <li>
              <strong>Tier 3 Intervention Protocol:</strong> For Tier 3 (High Risk) accounts, CS schedules a
              30-minute "Product Success" call. Focus: identify which sticky feature maps to their use case,
              then do a guided walkthrough (Integrations or Analytics Dashboard).
            </li>
            <li>
              <strong>Onboarding Redesign (Week 1-4 critical window):</strong> Make sticky features more
              visible. Current onboarding buries Integrations. Move it to Day 3.
            </li>
          </ul>

          <p><strong>Long-Term (Months 5+):</strong></p>
          <ul>
            <li>
              <strong>Product Roadmap Shift:</strong> Tier "Sticky Feature Development" as P0. Integrations
              ≥ Core features. Every quarter, add 2-3 new integrations to expand the "stickiness moat."
            </li>
            <li>
              <strong>Pricing / Packaging Change:</strong> Move Integrations from Business tier down to Pro
              tier. "Hook" users early. Then upsell on volume (Advanced Analytics = Business tier).
            </li>
            <li>
              <strong>Engagement Velocity Scoring:</strong> Build this into the product itself. Show users
              their own engagement dashboard: "You're at 2.8 Core Actions/week (vs. 3.0 MVE). You're healthy!"
              Gamify it.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. Business Decision-Making</h2>
        <div className="content">
          <p>Based on this analysis, the VP of Customer Success and CPO jointly decide:</p>

          <ol>
            <li>
              <strong>Restructure CS Compensation:</strong> Move from "Renewal Dollars" to "Product Health
              Score." CS managers get bonuses when Tier 2+ accounts move to Tier 1 (preventive retention is
              the goal, not reactive saves).
            </li>
            <li>
              <strong>Launch "Ghost Recovery" Program:</strong> For Tier 4 accounts, we run a 4-week
              intensive onboarding intervention (re-onboarding). Expected to save 15% of Tier 4 (600
              accounts × $1,600 = $960K gained; $1.2M intervention cost = small loss, but preserves
              relationships).
            </li>
            <li>
              <strong>Product Prioritization Shift:</strong> Integrations become the #1 roadmap priority.
              "Every quarter, 3 new integrations." This expands the stickiness moat.
            </li>
            <li>
              <strong>Tier 3+ Early Alert System:</strong> Any account moving from Tier 2 to Tier 3 triggers
              an automatic SMS/Slack notification to the assigned CS manager (today's email is too slow).
            </li>
          </ol>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>30-Day KPI Monitoring:</strong>
            <table className="data-table">
              <thead>
                <tr>
                  <th>KPI</th>
                  <th>Current</th>
                  <th>Target (Q3)</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>% of accounts in Tier 1 (Healthy)</td>
                  <td>50%</td>
                  <td>65%</td>
                  <td>CS</td>
                </tr>
                <tr>
                  <td>% of accounts in Tier 4 (Ghost)</td>
                  <td>10%</td>
                  <td>5%</td>
                  <td>CS</td>
                </tr>
                <tr>
                  <td>Sticky Feature Adoption (% with Integrations)</td>
                  <td>32%</td>
                  <td>52%</td>
                  <td>Product</td>
                </tr>
                <tr>
                  <td>Avg Engagement Velocity (slope)</td>
                  <td>-2.1%</td>
                  <td>+1.5%</td>
                  <td>Product</td>
                </tr>
                <tr>
                  <td>Net Revenue Retention (NRR)</td>
                  <td>92%</td>
                  <td>105%</td>
                  <td>CFO</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 10 ── */}
      <section>
        <h2>10. Professional Analyst Mindset</h2>
        <div className="content">
          <p>
            <strong>Senior Perspective:</strong> In SaaS, <strong>churn is a trailing indicator.</strong> By
            the time a cancellation arrives, you've already lost. A senior analyst works backwards from
            churn to build <strong>Leading Indicators</strong> based on engagement layers.
          </p>

          <p style={{ marginTop: "15px" }}>
            This case teaches a critical skill: <strong>Diagnosing Invisible Problems.</strong> The Ghost
            phenomenon is invisible to most dashboards. It doesn't trigger alerts. It just quietly destroys
            NRR. To find it, you need to:
          </p>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>1. Question the Narrative</strong>
            <p style={{ margin: "8px 0", fontSize: "14px" }}>
              Everyone says "Churn is 8%." Push back. "But are they all using the product?" (Answer: No.)
            </p>
          </div>

          <div className="highlight-box">
            <strong>2. Layer Your Diagnostics</strong>
            <p style={{ margin: "8px 0", fontSize: "14px" }}>
              Don't look at one metric. Build a "Signal Stack": Usage → Velocity → Key Persons → Support.
              Each layer reveals something new.
            </p>
          </div>

          <div className="highlight-box">
            <strong>3. Think in Tiers, Not Binaries</strong>
            <p style={{ margin: "8px 0", fontSize: "14px" }}>
              "Churned vs. Not Churned" is too simple. Reality is: Healthy → At Risk → High Risk → Ghost.
              Each tier needs its own strategy.
            </p>
          </div>

          <div className="highlight-box">
            <strong>4. Validate Before Scaling</strong>
            <p style={{ margin: "8px 0", fontSize: "14px" }}>
              Don't roll out the $1.2M Ghost Recovery program until you've run a holdout test with 10K
              users. Prove it works first.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Key Lesson:</strong> Product-Market Fit isn't binary. It's a <em>spectrum of
            engagement</em>. The best way to reduce churn is to move users from "Ghost" → "High Risk" →
            "At Risk" → "Healthy." Not all at once. Gradual, systemic improvement.
            <br />
            <br />
            <strong>Interview Insight:</strong> If asked "How would you reduce SaaS churn?" the
            junior answer is "Build a churn prediction model." The senior answer is "First, I'd diagnose
            whether the churn is visible or invisible. If invisible, I'd layer diagnostics to find the
            problem. Then I'd tier interventions by risk level and validate with holdout tests."
          </div>
        </div>
      </section>
    </div>
  );
};

export default Case09;
