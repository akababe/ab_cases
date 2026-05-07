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
            <strong>CloudCollab</strong> is a B2B SaaS platform for project management and team
            communication, competing directly with Asana, Monday.com, and ClickUp. They operate a
            three-tier subscription model: Pro ($50/month), Business ($150/month), and Enterprise
            (custom pricing, typically $2,000–$8,000/month). After six years of growth, they've reached
            50,000 paying accounts and $300M annual ARR — implying a blended ARPU of $500/month.
          </p>
          <p>
            In SaaS, the golden metric is <strong>Net Revenue Retention (NRR)</strong>: if existing
            customers are spending more over time (upgrades outpacing downgrades and churn), NRR exceeds
            100% and the business compounds without needing new customers. CloudCollab's NRR was 115%
            last year. This year, it has dropped to 92%. <em>This is a silent emergency.</em>
          </p>
          <div className="highlight-box">
            <strong>Industry Benchmark:</strong> The SaaS median NRR is approximately 106%. Top-quartile
            B2B SaaS companies achieve 120%+. At 92%, CloudCollab is in the bottom quartile of its peer
            group — below the point where existing revenue can sustain the business without new logo
            acquisition. Investors will flag this at the next board meeting.
          </div>
          <div className="highlight-box">
            <strong>Stakeholders and Tensions:</strong><br />
            <strong>VP of Customer Success:</strong> Overwhelmed with reactive renewals; wants a
            proactive health-monitoring system. Suspects the problem starts in onboarding, not at
            renewal.<br />
            <strong>Chief Product Officer:</strong> Wants to invest in new features but is being asked
            to fix adoption problems for existing ones. Resistant to the idea that onboarding is a product
            failure.<br />
            <strong>CFO:</strong> Sees healthy top-line revenue ($300M ARR) and is skeptical of the
            crisis narrative. Requires financial quantification before approving CS headcount
            expansion.<br />
            <strong>The Tension:</strong> The CFO's view ("revenue looks fine") is exactly what the
            Ghost Syndrome creates — phantom revenue from paying customers who derive no value, which
            collapses silently at renewal. Convincing the CFO requires translating engagement data into
            forward-looking revenue risk, not just churn rates.
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem</h2>
        <div className="content">
          <p>
            CloudCollab's churn isn't random. It follows a structured pattern that is{" "}
            <strong>invisible to standard dashboards</strong> and builds through four observable phases
            before it becomes irreversible.
          </p>

          <div className="highlight-box">
            <strong>Why Traditional Metrics Lie:</strong>
            <br /><strong>Finance View:</strong> "Churn is only 8% annually. We're retaining 92% of customers."
            <br /><strong>Product View:</strong> "Usage is stable. Daily Active Users up 5% MoM."
            <br /><strong>CS View:</strong> "We have no visibility. Customers don't answer our renewal calls."
            <br /><strong>Reality:</strong> 35% of customers are "Ghosts" — paying but not using the product.
            <br /><em>Standard DAU metrics count a user who logs in and closes the tab as "active." This masks
            ghost formation entirely until the renewal cancellation arrives.</em>
          </div>

          <p><strong>The Cascade Pattern — Four Phases of Ghost Formation:</strong></p>
          <ul>
            <li>
              <strong>Phase 1 — Feature Underutilization (Week 1–4):</strong> New users adopt 1–2 features
              max. They never reach the "Aha moment" (typically requires 3+ core features used regularly).
              The product is technically active but not embedded in workflow.
            </li>
            <li>
              <strong>Phase 2 — Key-Person Dependency (Week 5–12):</strong> If the "Power User" (usually
              the buyer or admin) stops using the product, the entire account (5–50 people) has a 70%
              probability of churning within 60 days. Reason: team coordination fails. If the admin isn't
              using it, no one else has reason to.
            </li>
            <li>
              <strong>Phase 3 — Ghost Period (Month 3–9):</strong> The account is functionally dead, but
              billing continues. Revenue still arrives. The CFO sees nothing wrong. The VP CS has no
              signal. The account is in silent decay.
            </li>
            <li>
              <strong>Phase 4 — Renewal Cliff (Month 9–12):</strong> The annual renewal invoice arrives.
              The customer realizes they haven't logged in for six months. They cancel. The intervention
              window is closed.
            </li>
          </ul>

          <div className="highlight-box">
            <strong>Root Cause Hypotheses (Three Testable Claims):</strong>
            <ul>
              <li>
                <em>H1 — Feature Adoption Failure:</em> The majority of ghost accounts never discovered
                a "sticky" feature (integrations, analytics dashboard) that embedded CloudCollab into
                daily workflow. The product has a value discovery problem, not a product quality problem.
              </li>
              <li>
                <em>H2 — Key-Person Dependency:</em> Product adoption is concentrated in a single champion
                (the admin/buyer). When that person's engagement declines, the account has no self-sustaining
                adoption mechanism and the team follows within 60 days.
              </li>
              <li>
                <em>H3 — Auto-Renewal Masking:</em> The annual subscription model creates a structural
                delay between when the customer stops using the product (Month 3) and when the financial
                signal appears (Month 9 cancellation). This 6-month blindspot is exploited by the ghost
                pattern. Note: H3 is a structural issue, not fixable by product changes — it requires
                a monitoring system that operates on usage signals, not billing signals.
              </li>
            </ul>
          </div>

          <div className="highlight-box">
            <strong>Business Impact:</strong>
            <ul>
              <li>
                Reported annual churn: 8% (billing-based). True "inactive churn" when ghost accounts
                are included: 24% annualized — 3× the reported figure.
              </li>
              <li>NRR decline: 115% → 92% (-23 percentage points in one year).</li>
              <li>
                Ghost Revenue at Risk: 35% of 50,000 accounts × $6,000/year ARPU = $105M in ARR from
                accounts deriving zero value — all of which is at-risk at renewal.
              </li>
              <li>
                If 50% of ghost accounts churn at renewal (conservative): $52.5M ARR loss within
                12 months. That alone drops NRR further to ~75%.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <p>
            Build a <strong>Product Health Score</strong> that identifies ghost-in-formation accounts
            before the ghost period becomes irreversible — ideally by Week 4, before the cascade
            pattern takes hold.
          </p>
          <div className="highlight-box">
            <strong>Analytical Approach Type:</strong> This is a{" "}
            <em>diagnostic + predictive</em> engagement. The diagnostic phase (Sections 5–6) answers
            WHERE ghost accounts concentrate, WHO is at risk, and WHAT behavioral patterns precede
            ghosting. The predictive phase builds a leading-indicator model that flags at-risk accounts
            30–45 days before they enter the ghost period. The output is a tiered health score that
            drives differentiated CS intervention — not a single "churn probability" number that
            obscures the mechanism.
          </div>
          <div className="highlight-box">
            <strong>Key Questions:</strong>
            <ol>
              <li>What is "Minimum Viable Engagement" (MVE)? How much usage is required to reach 95%+ probability of renewal?</li>
              <li>Which features are "sticky"? (highly correlated with long-term retention independent of other factors)</li>
              <li>How does engagement velocity (week-over-week change) predict ghost status before it manifests?</li>
              <li>If a "Key Person" (Admin/Manager) disengages, how quickly does team-wide churn follow?</li>
              <li>What intervention (re-engagement email, feature tutorial, CS call) works best for each risk tier?</li>
              <li>What is the financial cost of ignoring this vs. the cost of intervention? (This drives the budget conversation with the CFO.)</li>
            </ol>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 (NEW) ── */}
      <section>
        <h2>4. Framework Selection &amp; Rationale</h2>
        <div className="content">
          <p>
            Ghost User Syndrome is a <em>multi-signal, multi-stage</em> retention problem. No single
            analytical framework is sufficient. The framework selection below was driven by one core
            design principle: the system must detect engagement decay before the customer is aware of
            their own disengagement. That constraint eliminates most traditional churn analytics tools,
            which are built on billing or survey signals.
          </p>

          <div className="highlight-box">
            <strong>Frameworks Selected:</strong>
            <ol style={{ marginTop: "12px" }}>
              <li style={{ marginBottom: "16px" }}>
                <strong>Customer Health Scoring Model</strong> — Purpose-built for subscription SaaS
                with multiple behavioral signals. Aggregates product usage, engagement velocity,
                key-person risk, and support signals into a tiered risk classification (Healthy →
                At Risk → High Risk → Ghost). Unlike binary "churned/retained" analysis, this
                framework provides a continuous spectrum of engagement health, enabling differentiated
                intervention by tier. The Health Score is the output metric that operationalizes
                every other framework selected below.
              </li>
              <li style={{ marginBottom: "16px" }}>
                <strong>Cohort Analysis</strong> — The cascade pattern (Phase 1 → 4) is a time-dependent
                lifecycle problem. Cohort Analysis groups accounts by sign-up month and tracks their
                engagement trajectory over time, revealing that the ghost formation window is
                structurally concentrated in Weeks 4–8. Without cohort segmentation, this temporal
                pattern is averaged out and the intervention window is missed. Cohort Analysis also
                separates accounts by acquisition channel, revealing whether enterprise sales-led
                accounts ghostify at different rates than product-led growth accounts.
              </li>
              <li style={{ marginBottom: "16px" }}>
                <strong>Leading Indicator Framework</strong> — The Ghost Syndrome is fundamentally
                a failure of lagging indicator reliance. The standard monitoring stack (NPS, support
                tickets, renewal rates) all arrive after the decision to leave is made. This framework
                forces a systematic reclassification of every available signal into leading
                (actionable before the churn decision) vs. lagging (visible after it). In this
                engagement, the leading indicators are login velocity in Week 1, integration adoption
                by Day 10, and admin engagement in Weeks 3–6. The lagging indicators — NPS, cancellation
                reason, ticket sentiment — are stripped out of the early warning system entirely.
              </li>
              <li>
                <strong>Engagement Velocity Analysis</strong> — Adapted from financial technical
                analysis (trend slope measurement over rolling windows). The key insight is that
                the current engagement level is a lagging measure; the rate of change of engagement
                is a leading measure. A user with 5 core actions/week declining at -15%/week is
                higher risk than a user with 2 actions/week growing at +10%/week — even though the
                first user looks more "active" on any point-in-time dashboard. This framework captures
                the direction of travel, not just the position.
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
                  <td><strong>RFM (Recency, Frequency, Monetary)</strong></td>
                  <td>Standard customer segmentation tool; familiar to stakeholders</td>
                  <td>Collapses in subscription SaaS: "Frequency" is constant (monthly billing regardless of usage) and "Monetary" is fixed (flat subscription price). These two dimensions carry no signal — only "Recency" survives, which we handle more granularly through velocity analysis.</td>
                </tr>
                <tr>
                  <td><strong>NPS-First Approach</strong></td>
                  <td>NPS is an established satisfaction benchmark; CFO recognizes it</td>
                  <td>Ghost users don't fill out NPS surveys — they've already mentally disengaged. NPS samples are self-selected toward engaged users (response rate ~20%), creating severe survivorship bias. Using NPS as a primary signal would miss exactly the accounts we need to detect.</td>
                </tr>
                <tr>
                  <td><strong>Survival Analysis (Kaplan-Meier)</strong></td>
                  <td>Statistically rigorous time-to-churn modeling with confidence intervals</td>
                  <td>Requires 18+ months of clean, matured data to produce stable survival curves. With a 9-month ghost-to-churn cycle, we don't yet have enough cohort maturity for reliable curves. Filed for 18-month follow-up when the data is ready.</td>
                </tr>
                <tr>
                  <td><strong>Porter's Five Forces</strong></td>
                  <td>Competitive dynamics (Asana, Monday.com) are relevant context</td>
                  <td>Addresses market-level forces, not the internal adoption problem. Relevant to a separate competitive positioning review; not useful for diagnosing why existing customers ghost.</td>
                </tr>
                <tr>
                  <td><strong>Ansoff Matrix</strong></td>
                  <td>Board may ask about expansion into adjacent markets</td>
                  <td>Growth strategy framework; premature when NRR is below 100%. Expanding into new markets while existing customers are ghosting destroys capital efficiency.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="highlight-box">
            <strong>How the Framework Choice Shapes the Analysis:</strong>
            <ul>
              <li><strong>Customer Health Scoring →</strong> Defines the output: a tiered risk classification that drives CS action</li>
              <li><strong>Cohort Analysis →</strong> Identifies WHEN ghost formation happens (Weeks 4–8) and which cohorts are most vulnerable</li>
              <li><strong>Leading Indicator Framework →</strong> Determines WHAT signals to monitor and WHEN to intervene (30–45 days before the ghost period)</li>
              <li><strong>Engagement Velocity →</strong> Detects WHO is at risk before they or their manager knows it — the earliest possible warning signal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 (was 5, upgraded) ── */}
      <section>
        <h2>5. Data Perspective: The "Signal Stack"</h2>
        <div className="content">
          <p>
            We combine four layers of data to detect ghost formation. No single layer is sufficient;
            the diagnostic power comes from their intersection.
          </p>

          <div className="highlight-box">
            <strong>Data Sources:</strong>
            <ul>
              <li><strong>Amplitude (Product Analytics):</strong> Login events, core action events (create/edit project, invite teammate, comment), feature-specific usage (Gantt, Integrations, Analytics Dashboard), session duration, days-since-last-action</li>
              <li><strong>Salesforce CRM:</strong> Account tier (Pro/Business/Enterprise), contract start/renewal dates, account owner (CS manager), expansion history</li>
              <li><strong>Zendesk (Support):</strong> Ticket volume, ticket sentiment (via NLP tag), resolution time, open/unresolved issues</li>
              <li><strong>Delighted (NPS Platform):</strong> NPS scores by account (note: ~20% response rate — significant missingness, see Data Limitations)</li>
              <li><strong>Integration Webhooks (Slack, Jira, Google Drive):</strong> Integration connection events, active days per integration</li>
            </ul>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Layer</th>
                <th>Key Variables</th>
                <th>Type</th>
                <th>Leading / Lagging</th>
                <th>What It Reveals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Layer 1 — Product Usage</strong></td>
                <td>core_actions_per_week, features_adopted (count), session_duration_avg</td>
                <td>Continuous</td>
                <td>Leading (Week 1 signal)</td>
                <td>Current engagement level — are they using the product or just logged in?</td>
              </tr>
              <tr>
                <td><strong>Layer 2 — Engagement Velocity</strong></td>
                <td>wow_login_change_pct, core_action_slope (4-week), days_since_last_action</td>
                <td>Continuous</td>
                <td>Leading (direction of travel)</td>
                <td>Is engagement accelerating, stable, or decaying? Catches ghost formation before it manifests.</td>
              </tr>
              <tr>
                <td><strong>Layer 3 — Key-Person Risk</strong></td>
                <td>admin_active (binary), admin_days_dark (count), pct_team_active</td>
                <td>Binary / Continuous</td>
                <td>Leading (cascade predictor)</td>
                <td>Cascade risk — if the admin disengages, 70% of teams follow within 60 days</td>
              </tr>
              <tr>
                <td><strong>Layer 4 — Support Signals</strong></td>
                <td>tickets_per_month, sentiment_score, nps_score, open_unresolved_tickets</td>
                <td>Continuous / Ordinal</td>
                <td>Mixed (tickets = leading; NPS = lagging)</td>
                <td>Friction level — 0 tickets + 0 usage is a worse signal than 3 frustrated tickets</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: "20px" }}><strong>Sample Data (10 Accounts — Tier Classification):</strong></p>
          <p style={{ fontSize: "13px", color: "#555", marginBottom: "8px" }}>
            Each row illustrates a distinct signal combination and the resulting tier classification.
            The aggregate statistics cited in Section 6 (e.g., "70% of teams follow within 60 days")
            are derived from the full 50,000-account dataset, not from these 10 illustrative rows.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Account</th>
                  <th>Tier</th>
                  <th>Core Actions/wk</th>
                  <th>Velocity (WoW)</th>
                  <th>Integrations</th>
                  <th>Admin Active?</th>
                  <th>Tickets/mo</th>
                  <th>Renewal Risk</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>ACC001</td><td>1 — Healthy</td><td>5.2</td><td>+8%</td><td>Slack, Jira</td><td>Yes</td><td>1</td><td>4%</td></tr>
                <tr><td>ACC002</td><td>1 — Healthy</td><td>4.0</td><td>+3%</td><td>Google Drive</td><td>Yes</td><td>0</td><td>6%</td></tr>
                <tr><td>ACC003</td><td>1 — Healthy</td><td>6.1</td><td>+12%</td><td>Slack, Jira, GDrive</td><td>Yes</td><td>3</td><td>2%</td></tr>
                <tr><td>ACC004</td><td>2 — At Risk</td><td>1.8</td><td>-4%</td><td>None</td><td>Yes (slowing)</td><td>2</td><td>24%</td></tr>
                <tr><td>ACC005</td><td>2 — At Risk</td><td>1.5</td><td>-5%</td><td>None</td><td>Yes</td><td>1</td><td>28%</td></tr>
                <tr><td>ACC006</td><td>3 — High Risk</td><td>0.5</td><td>-18%</td><td>None</td><td>No (14d dark)</td><td>0</td><td>58%</td></tr>
                <tr><td>ACC007</td><td>3 — High Risk</td><td>0.3</td><td>-22%</td><td>None</td><td>No (21d dark)</td><td>0</td><td>65%</td></tr>
                <tr><td>ACC008</td><td>4 — Ghost</td><td>0</td><td>N/A</td><td>None</td><td>No (45d dark)</td><td>0</td><td>91%</td></tr>
                <tr><td>ACC009</td><td>4 — Ghost</td><td>0</td><td>N/A</td><td>None</td><td>No (62d dark)</td><td>0</td><td>94%</td></tr>
                <tr><td>ACC010</td><td>2 — At Risk</td><td>1.2</td><td>-7%</td><td>None</td><td>Yes</td><td>1</td><td>31%</td></tr>
              </tbody>
            </table>
          </div>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Data Limitations:</strong>
            <ul>
              <li>
                <strong>Event fragmentation:</strong> Mobile app events and web app events are tracked
                through separate pipelines (Amplitude SDK vs. server-side events). Cross-device session
                deduplication is imperfect; a user active on both web and mobile may be double-counted
                in login_frequency metrics. We applied a 24-hour deduplication window as a correction.
              </li>
              <li>
                <strong>NPS response bias:</strong> NPS surveys have a ~20% response rate. The 80% of
                accounts with no NPS data are disproportionately ghost accounts — the least engaged
                users are least likely to respond. We use support ticket sentiment (via Zendesk NLP
                tagging) as a proxy for the ~80% with no NPS, and flag this assumption prominently
                in the Health Score documentation.
              </li>
              <li>
                <strong>API webhook data loss:</strong> Integration activity from Slack and Jira flows
                through webhooks with an estimated 2–3% event loss rate due to retry failures. This
                slightly understates integration usage for accounts on high-volume plans. Conservative
                correction applied: accounts with ≥5 integration events/week treated as "active on
                integration" regardless of total count.
              </li>
              <li>
                <strong>Admin role vs. economic buyer:</strong> The Salesforce "admin" flag doesn't
                always align with the actual decision-maker. In ~15% of Enterprise accounts, the
                economic buyer is a department head who is not the product admin. Key-Person Risk
                analysis was supplemented with CSM manual tagging of the true economic buyer for
                Enterprise accounts.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 (was 6, minus ROI step) ── */}
      <section>
        <h2>6. Step-by-Step: 7-Step Diagnostic Sequence</h2>
        <div className="content">
          <p>
            Unlike typical analytics, we don't build one model. We diagnose the Ghost problem through
            seven sequential steps that validate each layer of the signal stack before combining them
            into a health score.
          </p>

          <ol>
            <li>
              <strong>Step 1 — Redefine "Active" (Not Just Login):</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                A login event is a cursor movement, not engagement. We define an "Active Day" as one
                where a user performs at least one Core Action: create/edit a project, invite a
                teammate, or comment. Login alone does not count.
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Minimum Viable Engagement (MVE) Analysis:
Users with ≥3 Core Actions/week: 95% renewal probability
Users with 1-2 Core Actions/week: 60% renewal probability
Users with <1 Core Action/week:  18% renewal probability
⟹ MVE Threshold = 3 Core Actions/week

Statistical validation: Logistic regression, coefficient for
core_actions_per_week = -0.51 (p < 0.001, n = 50,000).
MVE of 3 actions/week identified via precision-recall optimization
at F1 threshold of 0.74.`}
              </div>
            </li>

            <li>
              <strong>Step 2 — Identify Sticky Features (Feature-Level Retention Drivers):</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                Not all features drive retention equally. We correlate feature adoption (binary:
                adopted in first 30 days) with 12-month renewal probability.
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Feature Stickiness Ranking (12-month Renewal Probability):
1. Integrations (Slack/Google Drive/Jira): 92% renewal
2. Analytics Dashboard:                    88% renewal
3. Gantt Charts:                           84% renewal
4. Task Management (core):                 76% renewal
5. Notifications only:                     52% renewal

Mechanism: Integrations create workflow lock-in — project data,
team history, and notification routing live inside CloudCollab.
Switching cost is no longer just "learning a new tool"; it's
rebuilding the team's entire operational infrastructure.`}
              </div>
            </li>

            <li>
              <strong>Step 3 — Measure Engagement Velocity (Slope, Not Level):</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                A user with 5 core actions/week declining at -15%/week is higher risk than a user with
                2 actions/week growing at +10%/week. Current level is a position; velocity is the
                direction of travel. We measure 4-week rolling slope.
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Engagement Velocity Tiers (4-week rolling slope of Core Actions):
• Velocity ≥ +10% WoW:          94% renewal (growing)
• Velocity 0% to +10% WoW:      72% renewal (stable)
• Velocity -5% to -10% WoW:     35% renewal (slow decay)
• Velocity < -10% WoW:           8% renewal (rapid decay = ghost forming)

Key design choice: velocity is measured on a rolling 4-week window,
not a single week, to filter out natural variation (holidays, launches).`}
              </div>
            </li>

            <li>
              <strong>Step 4 — Key-Person Risk Measurement (Cascade Effect):</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                Admin disengagement is the strongest single predictor of account-level churn. We
                test this with a 2×2 matrix of admin vs. team engagement states.
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Key-Person Impact (Account Renewal Probability):
Admin Active (≥3 actions/wk) & Team Active:    89%
Admin Active              & Team Inactive:      76%
Admin Inactive (<1 action/wk) & Team Active:   41%
Admin Inactive            & Team Inactive:      12%

⟹ Admin disengagement → 70% of teams follow within 60 days.
   (Cox regression hazard ratio: 2.8x, p < 0.001)

Key insight: the team follows the leader. If the admin stops
using it, the signal cascades downward regardless of product quality.`}
              </div>
            </li>

            <li>
              <strong>Step 5 — Define Ghost Segments (Actionable Risk Tiers):</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                We combine all four signal layers into a tiered classification with distinct
                intervention protocols. Tiers are defined by threshold crossing on the composite
                health score (0–100, lower = higher risk).
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Tier 1 — Healthy (50% of accounts, 25,000 accounts):
  ✓ Core Actions: ≥3/week | ✓ Velocity: stable or positive
  ✓ Integrations: ≥1 adopted | ✓ Admin: active
  → Renewal risk: 3–6% | Action: monitor only

Tier 2 — At Risk (25% of accounts, 12,500 accounts):
  ⚠ Core Actions: 1-2/week | ⚠ Velocity: slight decay (-5%)
  ⚠ Integrations: 0 adopted | ⚠ Admin: active but slowing
  → Renewal risk: 24–31% | Action: automated light-touch

Tier 3 — High Risk (15% of accounts, 7,500 accounts):
  ⚠⚠ Core Actions: <1/week | ⚠⚠ Velocity: steep decay (-15%+)
  ⚠⚠ Integrations: 0 adopted | ⚠⚠ Admin: recently dark (14-21d)
  → Renewal risk: 58–65% | Action: CS call + guided walkthrough

Tier 4 — Ghost (10% of accounts, 5,000 accounts):
  🔴 Core Actions: 0 for 30+ days | 🔴 Velocity: offline 2+ months
  🔴 Admin: dark for 45-60+ days  | 🔴 Support: 0 tickets
  → Renewal risk: 91-94% | Action: executive re-engagement`}
              </div>
            </li>

            <li>
              <strong>Step 6 — Holdout Test (Prove the Model Works Before Scaling):</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                Before committing the CS team to the full intervention protocol, we validate with a
                randomized holdout test. Half of Tier 2 accounts receive the automated intervention;
                half receive no change (business as usual).
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Holdout Test Design:
  Treatment Group (n=6,250 Tier 2 accounts): Automated re-engagement
  Control Group  (n=6,250 Tier 2 accounts): No intervention
  Duration: 90-day observation window

Results:
  Treatment → 12-month renewal rate: 78%
  Control   → 12-month renewal rate: 58%
  Lift: +20 percentage points
  Statistical significance: p < 0.001 ✓

⟹ Model is valid. The health score correctly identifies at-risk
  accounts, and the intervention demonstrably improves retention.

  Precision of Tier 4 "Ghost" detection: 89% (9 in 10 flagged
  Ghost accounts do churn at renewal without intervention).`}
              </div>
            </li>

            <li>
              <strong>Step 7 — Validate Ghost Scoring Accuracy (Precision-Recall Tradeoff):</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                Before deploying to the CS team, we measure model quality in business terms — not
                just accuracy. False positives (flagging healthy accounts as at-risk) waste CS time.
                False negatives (missing a ghost account) cause real revenue loss. We need the right
                tradeoff.
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Model Performance on 12-month renewal holdout (n=10,000):

              Predicted At-Risk  Predicted Healthy
Actual Churned:    4,210              390       ← False Negatives (missed ghosts)
Actual Retained:     890            4,510       ← False Positives (wasted CS calls)

Precision: 4,210 / (4,210 + 890) = 82.5%
Recall:    4,210 / (4,210 + 390) = 91.5%
F1 Score:  86.7%

Business interpretation:
  For every 100 CS calls triggered by the model:
    - 83 are genuinely at-risk accounts (precision 82.5%)
    - 17 are healthy accounts interrupted unnecessarily
  For every 100 accounts that will actually churn:
    - 92 are caught by the model (recall 91.5%)
    - 8 slip through undetected

Decision: This precision-recall tradeoff is acceptable for Tier 2
(low-cost automated interventions). For Tier 3 (CS calls = $75 cost),
we tighten the threshold to 90%+ precision to avoid wasted call time.`}
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ── SECTION 7 (NEW STANDALONE) ── */}
      <section>
        <h2>7. Calculation &amp; Simulation</h2>
        <div className="content">
          <p>
            All calculations below use the <strong>correct ARPU of $500/month</strong>, derived from
            stated financials: $300M ARR ÷ 50,000 accounts ÷ 12 months = $500/month average. This
            is a critical correction from the common simplification of using $100/month — a 5× error
            that would misrepresent the ROI of every intervention tier.
          </p>

          <div className="calculation">
{`Base Financial Parameters:
ARPU: $500/month (derived: $300M ARR / 50,000 accounts / 12 months)
Contract type: Annual subscription (auto-renews)
Average retained customer lifespan: 24 months
Average ghost-churned customer lifespan: 8 months (leaves at renewal)

LTV Calculation:
  LTV (Retained) = $500/month × 24 months = $12,000
  LTV (Churned at renewal) = $500/month × 8 months = $4,000
  LTV Gap per saved account = $12,000 − $4,000 = $8,000`}
          </div>

          <div className="calculation" style={{ marginTop: "16px" }}>
{`INTERVENTION ROI BY TIER:

Tier 2 — Light-Touch (Automated Email + In-App Nudge):
  Accounts: 12,500 | Cost per account: $5
  Total cost: 12,500 × $5 = $62,500
  Save rate (from holdout): 20% → 2,500 accounts saved
  LTV recovered: 2,500 × $8,000 = $20,000,000
  Net benefit: $20,000,000 − $62,500 = `}<span className="math-result">$19,937,500</span>
{`
  ROI: `}<span className="math-result">31,900%</span>
{`

Tier 3 — Mid-Touch (CS Call + Feature Tutorial):
  Accounts: 7,500 | Cost per account: $75
  Total cost: 7,500 × $75 = $562,500
  Save rate: 35% → 2,625 accounts saved
  LTV recovered: 2,625 × $8,000 = $21,000,000
  Net benefit: $21,000,000 − $562,500 = `}<span className="math-result">$20,437,500</span>
{`
  ROI: `}<span className="math-result">3,633%</span>
{`

Tier 4 — High-Touch (Executive Re-Engagement + Deep Re-Onboarding):
  Accounts: 5,000 | Cost per account: $300
  Total cost: 5,000 × $300 = $1,500,000
  Save rate: 15% → 750 accounts saved
  LTV recovered: 750 × $8,000 = $6,000,000
  Net benefit: $6,000,000 − $1,500,000 = `}<span className="math-result">$4,500,000</span>
{`
  ROI: `}<span className="math-result">300% (profitable, not a net loss as previously stated)</span>
{`

COMBINED PROGRAM:
  Total cost:    $62,500 + $562,500 + $1,500,000 = $2,125,000
  Total benefit: $20M + $21M + $6M = $47,000,000
  Blended ROI:   `}<span className="math-result">($47M − $2.125M) / $2.125M = 2,112%</span>
          </div>

          <div className="calculation" style={{ marginTop: "16px" }}>
{`NRR RECOVERY PROJECTION:

Current NRR: 92%
Meaning: $300M ARR base generates only $276M in trailing 12 months
Annual revenue shortfall from retention: $300M − $276M = $24M

Accounts saved by intervention program: 2,500 + 2,625 + 750 = 5,875
Annual revenue preserved: 5,875 × $500/month × 12 = $35,250,000

New NRR with intervention:
  ($276M + $35.25M) / $300M = 311.25 / 300 = `}<span className="math-result">103.75% NRR</span>
{`

Note: This does not reach the 115% NRR historical peak. The
remaining gap requires:
  - Onboarding redesign (Sections 9, Tier 3 recommendation)
  - Integration expansion (3 new integrations per quarter)
  - Pricing change: move Integrations to Pro tier (Tier 3, Long-Term)

Combined with expansion revenue from reactivated accounts (estimated
+$5M/year from upsells), target NRR of 110-115% is achievable within
18-24 months.`}
          </div>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>CFO Presentation Summary:</strong> The full intervention program costs $2.125M
            upfront with an estimated $47M in preserved LTV and $35.25M in annual recurring revenue
            protected. Payback period is under 3 weeks. The program moves NRR from 92% to ~104%
            within 12 months. Achieving the 115% historical peak requires 18–24 months and the
            onboarding + pricing investments in Tier 3 recommendations.
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
                  <td>Highest churn driver</td>
                  <td>Product quality (bugs, crashes, missing features)</td>
                  <td><strong>Lack of adoption — users never found the "Aha moment." Product quality scores for ghost accounts are not statistically different from retained accounts.</strong></td>
                </tr>
                <tr>
                  <td>Support ticket correlation</td>
                  <td>More tickets = more frustrated = more churn</td>
                  <td><strong>Zero tickets + zero usage = highest churn. One-to-two frustrated tickets/month = lower churn than expected. They're fighting to make it work — that's engagement, not departure.</strong></td>
                </tr>
                <tr>
                  <td>Intervention timing</td>
                  <td>Intervene at renewal warning signs (Month 9–11)</td>
                  <td><strong>Effective intervention window closes by Week 4. After 8 weeks of ghost pattern, save rates drop from 35% to under 5%.</strong></td>
                </tr>
                <tr>
                  <td>NRR problem is a churn problem</td>
                  <td>Reduce cancellations = fix NRR</td>
                  <td><strong>NRR problem is primarily a ghost problem — 35% of ARR is at-risk but not yet churned. The billing system sees no signal; the usage system sees everything.</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul style={{ marginTop: "20px" }}>
            <li>
              <strong>The Integration Lock-In Effect:</strong> Accounts using at least one integration
              (Slack, Jira, or Google Drive) retain at 92% vs. 52% for non-integration accounts. The
              mechanism is not simply "satisfaction with integrations" — it is structural workflow
              embedding. When a team's daily standups post to Slack via CloudCollab, when Jira tickets
              sync to projects automatically, when Google Drive files are attached to tasks — switching
              to a competitor means rebuilding the team's entire operational infrastructure. The switching
              cost becomes real and painful. Strategic implication: integrations are not a feature;
              they are the retention moat.
            </li>
            <li>
              <strong>The Key-Person Cascade Effect:</strong> When an admin's usage drops below 1 core
              action/week, the entire team's average usage drops by 35% within 30 days, and account
              churn probability jumps to 70%. The mechanism is psychological, not structural: "If the
              leader isn't using it, this must not be important here." Admin-level engagement is the
              most leveraged intervention point — one person's re-engagement can save 5–50 seats.
            </li>
            <li>
              <strong>The Week 4 Threshold:</strong> Accounts that have not adopted at least one sticky
              feature (integrations or analytics dashboard) by Week 4 have only a 22% probability of
              ever doing so. The onboarding window is narrow and non-recoverable. This finding re-frames
              the entire CS strategy: the highest-value CS work is in the first 28 days, not at renewal.
            </li>
            <li>
              <strong>The Support Silence Signal:</strong> The highest-risk account signature is zero
              support tickets combined with zero usage. These accounts have given up — they no longer
              care enough to ask for help. Accounts with 1–2 frustrated tickets/month are actually lower
              churn risk than zero-ticket accounts because frustration is still engagement. Silence is
              not contentment; it is disengagement so complete that even complaint is too much effort.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 9 (was 8, with ownership + expanded tiers) ── */}
      <section>
        <h2>9. Recommendations</h2>
        <div className="content">
          <p><strong>Tier 1 — Immediate Actions (0–30 days, low effort, high ROI):</strong></p>
          <ul>
            <li>
              <strong>Action:</strong> Deploy Risk Scoring Dashboard — make Tier assignment visible
              to all CS managers. Automate Tier 1 monitoring (no touch needed). Flag Tier 2+ for
              immediate action. <strong>Owner: VP of Customer Success.</strong>
              <br /><strong>Expected Impact:</strong> Enables the entire intervention program.
              Without this visibility, CS operates reactively.{" "}
              <br /><strong>Cost:</strong> 2–3 weeks of analytics engineering; $0 incremental spend.
            </li>
            <li>
              <strong>Action:</strong> Automated Tier 2 Campaign — if an account hasn't adopted
              any integration by Day 10, trigger an automated email: "Connect CloudCollab to Slack
              in 2 clicks" with a one-click setup guide and in-app nudge.{" "}
              <strong>Owner: VP of Customer Success + VP of Product (for in-app).</strong>
              <br /><strong>Expected Impact:</strong> 20% save rate on Tier 2 = 2,500 accounts
              preserved = $20M LTV protected.{" "}
              <br /><strong>Cost:</strong> $62,500 total (automated, scales to zero marginal cost).
            </li>
            <li>
              <strong>Action:</strong> Admin Watch List — if an admin goes dark for 7+ days, alert
              the assigned CS manager immediately (Slack notification, not email). Call within 24
              hours before the cascade reaches the team.{" "}
              <strong>Owner: VP of Customer Success.</strong>
              <br /><strong>Expected Impact:</strong> Intercepts the highest-leverage churn
              mechanism before it cascades.{" "}
              <br /><strong>Cost:</strong> Webhook + Slack integration, $0 incremental.
            </li>
          </ul>

          <p><strong>Tier 2 — Medium-Term Initiatives (1–4 months):</strong></p>
          <ul>
            <li>
              <strong>Action:</strong> Tier 3 Intervention Protocol — for High Risk accounts,
              CS schedules a 30-minute "Product Success" call. Goal: identify which sticky feature
              maps to their specific use case, then run a guided walkthrough. Focus should be
              integrations first, analytics dashboard second.{" "}
              <strong>Owner: Head of Customer Success (individual CSMs).</strong>
              <br /><strong>Expected Impact:</strong> 35% save rate = 2,625 accounts = $21M LTV.
              <br /><strong>Cost:</strong> $562,500 (CS call time + preparation materials).
            </li>
            <li>
              <strong>Action:</strong> Onboarding Redesign — current onboarding buries integrations
              in Day 7+ of the onboarding sequence. Move integration setup to Day 3. Make it the
              "first win" moment, not an advanced feature. One integration activated in the first
              week changes the 12-month retention probability from 52% to 92%.{" "}
              <strong>Owner: VP of Product.</strong>
              <br /><strong>Expected Impact:</strong> Structurally reduces Tier 2 and Tier 3 formation
              by improving the Week 1–4 adoption rate. Estimated 5pp improvement in new cohort
              retention.{" "}
              <br /><strong>Cost:</strong> 4–6 weeks of product design + development.
            </li>
            <li>
              <strong>Action:</strong> Restructure CS Compensation — move from "Renewal Dollars
              Saved" to "Product Health Score Improvements." CS managers get bonuses when Tier 2+
              accounts move to Tier 1. Preventive retention is the goal, not reactive saves.{" "}
              <strong>Owner: VP of Customer Success + Head of People.</strong>
              <br /><strong>Expected Impact:</strong> Aligns CS incentives with leading indicators,
              not lagging ones. Prevents the common failure mode where CS is measured on saves but
              not on preventing risk accumulation.
            </li>
          </ul>

          <p><strong>Tier 3 — Strategic Moves (5+ months, transformational):</strong></p>
          <ul>
            <li>
              <strong>Action:</strong> Integrations to Pro Tier — currently, integrations are
              restricted to the Business tier ($150/month). Move integration access to the Pro
              tier ($50/month) to drive stickiness earlier in the customer relationship. Upsell
              on Advanced Analytics (which remains Business-tier). This is a deliberate "hook
              early, upsell on value" pricing strategy.{" "}
              <strong>Owner: CPO + CFO.</strong>
              <br /><strong>Expected Impact:</strong> Pro tier churn drops from ~45% to an
              estimated ~25% as integrations become available at entry price. Revenue impact is
              neutral-to-positive: some Pro accounts that would have churned now stay and
              eventually upgrade to Business.{" "}
              <br /><strong>Risk:</strong> Business-tier accounts may question why they pay more
              if integrations move to Pro. Mitigation: add a new Business-tier exclusive
              (advanced integration customization, priority routing) when making this change.
            </li>
            <li>
              <strong>Action:</strong> Integrations Roadmap as P0 — every quarter, ship 3 new
              integrations expanding the stickiness moat (target: HubSpot, Notion, GitHub, Figma,
              Salesforce). Each new integration is a new workflow-lock-in vector.{" "}
              <strong>Owner: CPO.</strong>
              <br /><strong>Expected Impact:</strong> Stickiness compounds over time — each new
              integration increases the switching cost for the installed base and makes the product
              more defensible against Asana, Monday.com, and ClickUp.
            </li>
            <li>
              <strong>Action:</strong> Segment-and-Serve Acquisition — implement account-level ARPU
              × predicted retention scoring to set channel-specific CAC ceilings. Sales-led Enterprise
              accounts ($2,000+/month ARPU, high integration adoption) can support $800+ CAC.
              Product-led Pro accounts ($50/month ARPU, low integration adoption at signup) should
              have a CAC ceiling of $120 maximum.{" "}
              <strong>Owner: CFO + CGO.</strong>
              <br /><strong>Expected Impact:</strong> Prevents the acquisition of high-ghost-risk
              accounts at rates that guarantee unprofitability.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 10 (was 9, with Day 91 gate) ── */}
      <section>
        <h2>10. Business Decision-Making</h2>
        <div className="content">
          <p>Based on this analysis, the VP of Customer Success and CPO jointly decide:</p>

          <ol>
            <li>
              <strong>Restructure CS Compensation:</strong> Move from "Renewal Dollars" to "Product
              Health Score." CS managers receive quarterly bonuses when Tier 2+ accounts move to Tier
              1. Reactive saves are still measured but are not the primary incentive metric. This
              change is approved by the VP CS and Head of People within 30 days.
            </li>
            <li>
              <strong>Launch Ghost Recovery Program:</strong> For Tier 4 accounts, deploy a 4-week
              intensive re-onboarding intervention (executive sponsor outreach + CS call + walkthrough
              session). Expected to save 15% = 750 accounts at $6M LTV gain vs $1.5M cost — a 300%
              ROI, not a loss as previously modeled with incorrect ARPU.
            </li>
            <li>
              <strong>Product Roadmap Shift:</strong> Integrations are elevated to P0 for the next
              three quarters. Every sprint review includes an integration adoption metric. "Number of
              active integrations across the installed base" becomes a company-level OKR.
            </li>
            <li>
              <strong>Tier 3+ Escalation System:</strong> Any account moving from Tier 2 to Tier 3
              triggers an automatic Slack alert to the assigned CS manager within 15 minutes of the
              threshold breach. Today's email notifications are too slow for a problem this time-sensitive.
            </li>
            <li>
              <strong>Pre-Renewal Escalation Protocol (closes H3 — Auto-Renewal Masking):</strong> The
              auto-renewal structure is what makes ghosts invisible — the billing system keeps charging
              while the usage system sees nothing. The fix is a mandatory health gate inserted into the
              renewal calendar itself. 90 days before every contract renewal date, the system
              automatically checks the account's current tier:
              <ul style={{ marginTop: "8px" }}>
                <li><strong>Tier 1 at 90-day mark:</strong> No action needed. Renewal proceeds automatically.</li>
                <li><strong>Tier 2 at 90-day mark:</strong> Automated "Success Review" email sent to the account admin with their product health summary and one recommended next step. CS manager notified to follow up if no response within 5 days.</li>
                <li><strong>Tier 3 or 4 at 90-day mark:</strong> CS manager escalates immediately to VP CS. A rescue plan — not a discount offer — is built and executed before the invoice arrives. The economic buyer receives a direct call from their assigned CSM within 48 hours.</li>
              </ul>
              <strong>Owner: VP of Customer Success (system design) + Analytics Engineering (automation).</strong>
              <br /><strong>Why this closes H3:</strong> H3 is not a behavior problem; it is a timing
              problem. The 6-month ghost period exists because auto-renewal removes the natural
              check-in that a manual renewal would force. This protocol reinserts that check-in
              structurally — every account gets a health review 90 days before the invoice, regardless
              of whether anyone noticed the disengagement in real time.
            </li>
            <li>
              <strong>Phase 2 Ownership — NRR 104% → 115%:</strong> The intervention program in Phase 1
              recovers NRR from 92% to ~104% by preserving 5,875 at-risk accounts. Reaching the
              historical 115% NRR peak requires a second phase owned jointly by the CPO and CFO,
              with a committed 18-month timeline:
              <ul style={{ marginTop: "8px" }}>
                <li><strong>Onboarding redesign</strong> (integrations to Day 3) → estimated +5pp NRR improvement from new cohort quality</li>
                <li><strong>Integrations to Pro tier</strong> (pricing change) → estimated +3pp NRR from reduced Pro-tier ghost formation</li>
                <li><strong>Quarterly integration expansion</strong> (3 new integrations per quarter) → estimated +3pp NRR from installed-base stickiness compounding</li>
              </ul>
              Combined: 104% + 5 + 3 + 3 = <strong>~115% NRR target by Month 18.</strong>
              <br /><strong>Owner: CPO (product changes) + CFO (pricing change approval).</strong>
              <br /><strong>Review cadence:</strong> Quarterly board review of Phase 2 progress against
              the 115% target, with the CFO as the sponsor. This is not a "nice to have" — it is the
              Series A / growth-round narrative that requires a demonstrated path back to 115%+ NRR.
            </li>
          </ol>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Monitoring Dashboard — KPIs and Owners:</strong>
            <table className="data-table">
              <thead>
                <tr>
                  <th>KPI</th>
                  <th>Current</th>
                  <th>Target (Q3)</th>
                  <th>Owner</th>
                  <th>Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>% accounts in Tier 1 (Healthy)</td><td>50%</td><td>65%</td><td>VP CS</td><td>Weekly</td></tr>
                <tr><td>% accounts in Tier 4 (Ghost)</td><td>10%</td><td>5%</td><td>VP CS</td><td>Weekly</td></tr>
                <tr><td>Integration adoption rate (% with ≥1)</td><td>32%</td><td>52%</td><td>CPO</td><td>Weekly</td></tr>
                <tr><td>Admin 7-day dark rate</td><td>~22%</td><td>10%</td><td>VP CS</td><td>Weekly</td></tr>
                <tr><td>Avg engagement velocity (portfolio slope)</td><td>-2.1%</td><td>+1.5%</td><td>CPO</td><td>Weekly</td></tr>
                <tr><td>NRR — Phase 1</td><td>92%</td><td>104% (Month 12)</td><td>CFO</td><td>Monthly</td></tr>
                <tr><td>NRR — Phase 2</td><td>104%</td><td>115% (Month 18)</td><td>CPO + CFO</td><td>Quarterly</td></tr>
                <tr><td>Pre-renewal escalations triggered (Tier 2–4)</td><td>0 (not yet built)</td><td>100% coverage</td><td>VP CS</td><td>Monthly</td></tr>
              </tbody>
            </table>
          </div>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Day 91 Decision Gate:</strong> The VP CS and CPO hold a structured review after
            the 90-day holdout test completes. Agenda: (1) Holdout results reviewed with statistical
            significance confirmed. (2) KPI dashboard vs. targets. (3) Pre-committed decision: if
            treatment group retention exceeds control by ≥20pp (confirmed by test), launch the full
            Tier 2 + Tier 3 program to all accounts. If the lift is 10–20pp, run a 2×2 factorial
            test isolating the email nudge vs. the CS call vs. the combination. If lift is below 10pp,
            revisit the tier classification thresholds — the model may need recalibration.
          </div>
        </div>
      </section>

      {/* ── SECTION 11 (was 10 — MAJOR UPGRADE: WAR ROOM NOTES) ── */}
      <section>
        <h2>11. Senior Practitioner's War Room Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>The Pattern I've Seen Before:</strong>
            <p style={{ marginTop: "8px" }}>
              This specific scenario — ghost users hiding behind auto-renewal — appears in virtually
              every B2B SaaS company above $30M ARR that I've worked with. I've seen it at a data
              analytics platform (ghosts represented 40% of ARR), a CRM tool (28%), and an HR
              software company (33%). In every case, the same conversation happens in the first
              client meeting: the CFO points to healthy revenue numbers and does not see the crisis.
              The VP CS is drowning in reactive renewals without the visibility to act earlier. And
              the product team is building features for the users who are loud — those filing tickets
              and sending feedback — while ignoring the users who are silent. The NRR collapse is
              always visible in retrospect. It is always "surprising" to the executive team. That
              surprise tells you the monitoring system was measuring the wrong things, not that the
              problem was unpredictable.
            </p>
          </div>

          <div className="highlight-box">
            <strong>The Most Common Mistake Companies Make:</strong>
            <p style={{ marginTop: "8px" }}>
              They respond to ghost accounts by deploying discount-based save campaigns or extended
              trial offers. This is backwards — it treats the renewal cancellation (a lagging symptom)
              not the onboarding failure (the leading cause). By the time an account qualifies for a
              save campaign, the economic buyer has already made their decision. You are not preventing
              churn at that point; you are doing grievance management. The accounts you "save" with
              discounts are predominantly the ones you should have lost — they will return to ghosting
              within 3 months and churn at the next renewal, now with conditioned expectations of a
              discount every cycle. The only save that works is the one that fires in Week 2 when
              engagement velocity first turns negative.
            </p>
          </div>

          <div className="highlight-box">
            <strong>What Junior Analysts Always Miss:</strong>
            <p style={{ marginTop: "8px" }}>
              They measure DAU or MAU without defining what "active" means. A login event is counted
              as "active." Sometimes even an email open is counted as "active." These metrics look
              healthy while 35% of accounts are functionally dead. I have sat in dashboards reviews
              where a VP Product was proud of "92% MAU" while their NRR was collapsing — because
              "monthly active user" was defined as anyone who logged in at least once in the month.
              The fix is straightforward but requires something junior analysts rarely do: sitting
              with the customer success team and asking "what do your top 10% of accounts do that
              no one else does?" That conversation reveals the core action definition. It is not in
              any dataset; it lives in the CSM's head. Getting it out is one of the most valuable
              things an analyst can do on a retention engagement.
            </p>
          </div>

          <div className="highlight-box">
            <strong>What a Great Analyst Does Differently:</strong>
            <p style={{ marginTop: "8px" }}>
              They run the analysis backwards. Instead of starting with "what predicts churn?" they
              start with "what do the healthiest 10% of accounts do that no one else does?" Then they
              ask: why aren't the other 90% doing that? In CloudCollab's case, the answer was
              integrations. The Tier 1 accounts are not healthy because they are inherently loyal or
              because the product works better for them — they are healthy because integrations have
              embedded CloudCollab into their daily operational workflow, making switching painful.
              The strategic implication is completely different from what a forward-facing churn
              analysis would produce: don't try to save ghosting customers with outreach. Engineer
              the pathway from Tier 2 to Tier 1 by making integration adoption frictionless on
              Day 3 of onboarding. Prevention beats intervention by an order of magnitude.
            </p>
          </div>

          <div className="highlight-box">
            <strong>Hard-Won Lesson No Textbook Teaches:</strong>
            <p style={{ marginTop: "8px" }}>
              Ghost User Syndrome is almost never a product quality problem. I have analyzed churn
              across dozens of SaaS companies and the pattern holds: ghost users do not leave because
              the product is bad. They leave because they never figured out how to make it good for
              them. Their product satisfaction scores — when you can get them — are often average or
              slightly positive. They don't hate the product. They just have no relationship with it.
              This means that every dollar spent improving product quality for ghost accounts is wasted.
              The investment belongs in onboarding — specifically in compressing the time between account
              creation and the first moment a user says "oh, this is actually useful for me." In
              CloudCollab's case, that moment comes when the first integration fires automatically in
              a real team workflow. Make that happen by Day 3 instead of Day 10, and you will move
              more NRR than any product feature shipped in the same quarter.
            </p>
          </div>

          <div className="highlight-box">
            <strong>The Interview-Ready Framework (Diagnose → Layer → Tier → Validate):</strong>
            <p style={{ marginTop: "8px" }}>
              If asked "How would you address ghost users in a SaaS business?" in a consulting or
              analytics interview, the winning structure is:{" "}
              <em>
                "First I'd diagnose whether churn is visible or invisible — standard billing data
                may dramatically understate the problem if auto-renewal masks ghost formation. Then
                I'd layer diagnostics: product usage, engagement velocity, key-person risk, and
                support silence. I'd tier accounts by risk level and design differentiated interventions
                for each tier, starting with the cheapest intervention for the largest group. Finally,
                I'd validate with a holdout test before scaling — proving the model works before
                committing the CS budget."
              </em>{" "}
              The critical distinction from the junior answer ("build a churn model") is the explicit
              acknowledgment that the data you see in the billing system is not the data you need —
              and that building a monitoring system on usage signals rather than billing signals is
              the entire insight.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Case09;
