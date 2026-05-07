const Case14 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 14</span>
        <h1>The Loyalty Illusion</h1>
        <div className="case-meta">Industry: Retail / Consumer Loyalty Programs &bull; Level: Advanced / Strategic</div>
      </header>

      {/* ── SECTION 1: BUSINESS BACKGROUND ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>VantageRx</strong> is a regional pharmacy and drugstore chain operating 420 locations across 18 Midwest and Southeast states. With <strong>$2.8B in annual revenue</strong>, they sit in the uncomfortable middle of the pharmacy sector — too large to be nimble, too small to compete on scale with CVS or Walgreens. Their differentiation has been built on community trust, pharmacist relationships, and one flagship strategic asset: the <strong>VantageCard Loyalty Program</strong>.
          </p>
          <p>
            VantageCard has been running for <strong>8 years</strong> with <strong>14 million enrolled members</strong>. Mechanics are simple: earn 1 point per $1 spent; 1,000 points redeems for a $10 reward. The program costs <strong>$47M per year</strong> to operate (discounts redeemed + CRM infrastructure + program management). The CMO considers it the company's most valuable marketing asset.
          </p>
          <div className="highlight-box">
            <strong>What Triggered This Engagement:</strong> A new CFO, recruited from a McKinsey consulting background, arrived six months ago and began auditing every major cost center. Her question was blunt: <em>"We've spent $376M on this loyalty program over 8 years. Our revenue has grown 2% annually — in line with the overall pharmacy market. Show me that this program is driving incremental growth, not just rewarding customers who would have shopped here anyway."</em>
            <br /><br />
            <strong>Stakeholder Dynamics:</strong> The CMO (8-year champion of the program) is defensive. The VP of Loyalty's entire career identity is wrapped around VantageCard. The CFO wants a number. The CEO wants to avoid a political civil war while making the right capital allocation decision before next quarter's budget lock.
          </div>
          <p>
            This is one of the most politically charged analytics engagements you will encounter in a retail career. The data will likely hurt someone. That is exactly why it must be done correctly.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: BUSINESS PROBLEM ── */}
      <section>
        <h2>2. Business Problem: The Self-Selection Trap</h2>
        <div className="content">
          <p>
            The VP of Loyalty regularly presents a slide showing that <strong>loyalty members spend $180/year on average versus $61/year for non-members</strong> — a 3x differential that "proves" the program drives value. This is the central claim. It is also the central analytical error.
          </p>
          <div className="highlight-box">
            <strong>Symptom (What the Business Sees):</strong> Loyalty members spend dramatically more than non-members. Program ROI is reported as 35x.
            <br /><br />
            <strong>Root Cause (What the Data Actually Shows):</strong> Customers who choose to enroll in a loyalty program are self-selecting — they are <em>already</em> your most engaged, most frequent shoppers. They don't spend more <em>because</em> they joined; they joined <em>because</em> they already spend more. VantageRx has been measuring correlation and calling it causation for 8 years.
          </div>
          <p>
            The critical diagnostic question no one has asked: <strong>What did loyalty members spend in the 12 months BEFORE they enrolled?</strong>
          </p>
          <p>
            When we pull this data, the answer is $148/year — compared to $61 for non-members. That means members were already 2.4x higher-value before the program touched them. The program can only claim credit for the $32 gap between pre-enrollment ($148) and post-enrollment ($180) behavior. And even that $32 requires further scrutiny — some portion of it reflects natural customer lifecycle growth that would have happened regardless.
          </p>
          <div className="highlight-box">
            <strong>Business Impact:</strong>
            <ul>
              <li>$47M/year is committed to a program with an unmeasured true ROI</li>
              <li>If the program is subsidizing behavior that would happen anyway, VantageRx is forfeiting margin on every sale to loyal customers who aren't changing their behavior</li>
              <li>Capital that could fund 4–5 new store openings per year is locked into points redemptions for customers who would have come back regardless</li>
              <li>If unsolved: Next year's $47M budget gets approved on false ROI assumptions, and the structural misallocation compounds</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: ANALYTICS OBJECTIVE ── */}
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <p>
            This engagement has one north star question and three supporting questions. The north star is non-negotiable.
          </p>
          <div className="highlight-box">
            <strong>North Star:</strong> What is the TRUE incremental revenue generated by VantageCard, net of what members would have spent anyway — and is the program ROI above VantageRx's 10% marketing hurdle rate?
          </div>
          <p><strong>Supporting Questions:</strong></p>
          <ol>
            <li>Which customer segments genuinely change their purchasing behavior after enrolling, and which segments are simply being rewarded for pre-existing loyalty?</li>
            <li>What specific reward mechanics (earn events, redemption milestones, targeted offers) actually drive incremental trips — not just points accumulation?</li>
            <li>Is there an optimal program structure that maintains member satisfaction while redirecting reward spend from captive customers toward those with genuine behavior-change potential?</li>
          </ol>
          <p>
            <strong>What success looks like:</strong> A defensible incremental ROI figure that the CFO can take to the board. A program restructuring roadmap that improves true ROI — ideally without cutting total spend — so the CMO doesn't lose face. And a permanent holdout measurement system so VantageRx never has to argue about loyalty ROI from correlation data again.
          </p>
          <p>
            <strong>Analytical approach:</strong> Causal inference (incrementality testing via propensity-matched holdout), diagnostic segmentation (RFM), and CLV cohort trajectory analysis. This is not a descriptive analytics engagement. We need causal evidence, not correlation dashboards.
          </p>
        </div>
      </section>

      {/* ── SECTION 4: FRAMEWORK SELECTION ── */}
      <section>
        <h2>4. Framework Selection & Rationale</h2>
        <div className="content">
          <p>
            Framework selection here is critical because the wrong methodology will produce a number that is analytically meaningless — and with $47M on the line, "meaningless" is dangerous. I am going to walk through what I considered and why I landed where I did.
          </p>

          <div className="highlight-box">
            <strong>Primary Framework: Incrementality Testing (Propensity-Matched Holdout)</strong>
            <p style={{ marginTop: '10px', marginBottom: '8px', fontSize: '14px' }}>
              The only framework that separates <em>correlation</em> from <em>causation</em> in loyalty analytics. The approach:
            </p>
            <ul>
              <li>For every loyalty member, find a non-member with an identical pre-enrollment purchase trajectory (matched within ±10% on spend velocity, basket composition, and store geography)</li>
              <li>Track both populations for 12 months post the member's enrollment date</li>
              <li>The difference in outcomes is the causal program effect, not the raw member/non-member gap</li>
            </ul>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Why this fits:</strong> It is the only way to answer "would they have bought anyway?" with statistical rigor. Every other method measures the wrong thing.
            </p>
          </div>

          <div className="highlight-box">
            <strong>Secondary Framework: RFM Segmentation</strong>
            <p style={{ marginTop: '10px', fontSize: '14px' }}>
              Recency (days since last purchase) × Frequency (visits per month) × Monetary (avg basket). Segments the 14M member base into actionable groups so we can measure which segments respond to the program and which don't — rather than analyzing the average across the whole base (which masks everything important).
            </p>
          </div>

          <div className="highlight-box">
            <strong>Supporting Framework: CLV Cohort Trajectory Analysis</strong>
            <p style={{ marginTop: '10px', fontSize: '14px' }}>
              Group members by enrollment year (2016–2023 cohorts). Plot their spend trajectory from 24 months pre-enrollment through 24 months post. If the program creates genuine loyalty, you should see a positive inflection in the trajectory at the enrollment date. If you see a smooth, pre-existing upward trend passing through the enrollment point unchanged, the program is enrolling already-growing customers and claiming credit for natural growth.
            </p>
          </div>

          <p><strong>Frameworks Considered and Rejected:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Framework</th>
                <th>Why Rejected</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Simple Before/After Comparison</strong></td>
                <td>Confounded by seasonality, economic conditions, and natural customer lifecycle. Cannot isolate program effect.</td>
              </tr>
              <tr>
                <td><strong>A/B Test (Randomized)</strong></td>
                <td>Ideal — but impractical retroactively. Cannot randomly assign historical loyalty enrollment. Useful going forward, not for diagnosing 8 years of history.</td>
              </tr>
              <tr>
                <td><strong>NPS / Customer Satisfaction Survey</strong></td>
                <td>Measures sentiment, not behavior. High satisfaction among captive customers proves nothing about incremental spend.</td>
              </tr>
              <tr>
                <td><strong>Raw Member vs. Non-Member Comparison</strong></td>
                <td>This is what the current dashboard uses. It is exactly the self-selection fallacy we are trying to correct.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 5: DATA PERSPECTIVE ── */}
      <section>
        <h2>5. Data Perspective</h2>
        <div className="content">
          <p>
            Retail loyalty analytics requires four layers of data combined at the individual customer level. Aggregate data is useless for this analysis — we need transaction-level granularity.
          </p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Data Source</th>
                <th>Key Variables</th>
                <th>What It Enables</th>
                <th>Leading or Lagging?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>POS Transactions (3yr)</strong></td>
                <td>Transaction date, basket value, SKU categories, store ID, member ID</td>
                <td>Full purchase history — the ground truth for all behavior</td>
                <td>Lagging</td>
              </tr>
              <tr>
                <td><strong>Loyalty Enrollment Log</strong></td>
                <td>Member ID, enrollment date, enrollment channel, home store</td>
                <td>Defines the "program entry" event that anchors the cohort analysis</td>
                <td>Fixed event</td>
              </tr>
              <tr>
                <td><strong>Reward Events Log</strong></td>
                <td>Points earned date, cumulative balance, redemption date, reward value, category of earn</td>
                <td>Program economics — cost per member — and behavioral response to threshold milestones</td>
                <td>Leading (near threshold) / Lagging (redemption)</td>
              </tr>
              <tr>
                <td><strong>Non-Member Transactions</strong></td>
                <td>Same POS variables, captured via payment card linkage for non-enrolled repeat customers</td>
                <td>The control population for propensity matching</td>
                <td>Lagging</td>
              </tr>
              <tr>
                <td><strong>Member Profile / CRM</strong></td>
                <td>Age band, household size, ZIP code, RFM score, category breadth</td>
                <td>Enables propensity matching on demographic and behavioral dimensions</td>
                <td>Baseline attribute</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Sample Data — Pre/Post Enrollment Behavior with Matched Controls:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Member ID</th>
                <th>Pre-Enroll Spend (12mo)</th>
                <th>Post-Enroll Spend (12mo)</th>
                <th>Matched Non-Member Spend</th>
                <th>True Incremental Lift</th>
                <th>Segment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>M-1001</td>
                <td>$210</td>
                <td>$245</td>
                <td>$232</td>
                <td><strong>$13</strong></td>
                <td>Champion (Captive)</td>
              </tr>
              <tr>
                <td>M-1002</td>
                <td>$485</td>
                <td>$492</td>
                <td>$488</td>
                <td><strong>$4</strong></td>
                <td>Champion (Captive)</td>
              </tr>
              <tr>
                <td>M-1003</td>
                <td>$88</td>
                <td>$142</td>
                <td>$94</td>
                <td><strong>$48</strong></td>
                <td>At-Risk (Responsive)</td>
              </tr>
              <tr>
                <td>M-1004</td>
                <td>$35</td>
                <td>$81</td>
                <td>$39</td>
                <td><strong>$42</strong></td>
                <td>Potential Loyalist (Responsive)</td>
              </tr>
              <tr>
                <td>M-1005</td>
                <td>$520</td>
                <td>$510</td>
                <td>$518</td>
                <td><strong>−$8</strong></td>
                <td>Champion (Natural Drift)</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '15px' }}>
            <strong>Data Gaps & Assumptions:</strong> (1) We have no visibility into competitor pharmacy spend — so our "incremental" lift may include wallet-share shifts we can't fully attribute to the program. (2) ~12% of members share household accounts, diluting individual-level behavior signals. (3) Self-reported demographic fields are 34% incomplete. Working assumption: we exclude households with shared accounts from the incrementality analysis and use transaction behavior alone for propensity matching.
          </p>
        </div>
      </section>

      {/* ── SECTION 6: STEP-BY-STEP ANALYTICAL THINKING ── */}
      <section>
        <h2>6. Step-by-Step: The 7-Step Incrementality Diagnostic</h2>
        <div className="content">
          <p>
            I never start a loyalty analysis at the program level. I always start by trying to kill the core assumption — that the program changes behavior. If I can't kill it, it survives and I believe it. Here is the exact sequence I run.
          </p>

          <ol>
            <li>
              <strong>Step 1 — Pull the Pre-Enrollment Baseline (Kill the "3x" Claim)</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Before running any model, I pull the average spend of members in the 12 months <em>before</em> their enrollment date. This is the single most important query in the entire engagement.
              </p>
              <div className="calculation" style={{ margin: '12px 0', fontSize: '13px' }}>
{`Pre-enrollment avg spend (VantageCard members, 12 months before join date): $148/yr
Post-enrollment avg spend (same members, 12 months after join date):           $180/yr
Non-member avg annual spend:                                                    $61/yr

"Naive" lift (how the program is currently measured): $180 − $61 = $119/member
Pre-enrollment-adjusted lift (the honest number):     $180 − $148 = $32/member

⟹ The program enrolled customers who were already 2.4x more valuable than non-members.
   The "3x effect" is 80% pre-existing customer quality, not program impact.`}
              </div>
            </li>

            <li>
              <strong>Step 2 — Run the Cohort Trajectory Test (Was It Already Trending Up?)</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Plot spend trajectory from 24 months pre-enrollment through 24 months post, for each enrollment-year cohort. I'm looking for an inflection point — a visible acceleration in spend growth — at the enrollment date. If the line is smooth through the enrollment point, the program didn't cause the growth.
              </p>
              <div className="calculation" style={{ margin: '12px 0', fontSize: '13px' }}>
{`2019 Enrollment Cohort — Quarterly Spend Trajectory:
  Q-8 (2 yrs before enrollment): $32/quarter  ↗
  Q-4 (1 yr before enrollment):  $38/quarter  ↗
  Q0  (enrollment date):         $41/quarter  [Program starts]
  Q+4 (1 yr post-enrollment):    $45/quarter  ↗
  Q+8 (2 yrs post-enrollment):   $46/quarter  →

⟹ The trend was already in place before enrollment. The slope did NOT change at enrollment.
   The program joined a moving train and claimed to be the engine.`}
              </div>
            </li>

            <li>
              <strong>Step 3 — Build the Propensity-Matched Control Group</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                For each enrolled member, I find a non-enrolled customer with identical pre-enrollment characteristics: spend velocity (±10%), category breadth (±1 category), home store ZIP, and seasonal shopping pattern. This synthetic twin becomes their counterfactual — what they would have spent if they'd never enrolled.
              </p>
              <div className="calculation" style={{ margin: '12px 0', fontSize: '13px' }}>
{`Matching Results (3.2M matched pairs out of 14M total members):
  Matched member avg post-enrollment spend:      $180/yr
  Matched control (non-member twin) avg spend:   $155/yr
  True causal increment:                          $25/yr per member

vs. raw "naive" lift of $119/yr — a 4.8x overstatement of program impact.

Unmatched members (10.8M): excluded — no statistical twin available.
  (These are extreme heavy users or outlier geographies with no comparable non-member population)`}
              </div>
            </li>

            <li>
              <strong>Step 4 — RFM Segmentation: Who Actually Responds?</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                I segment the full loyalty base by RFM and calculate the true incremental lift PER SEGMENT. The average $25 lift is hiding a massive spread across segments. This is where the actionable insight lives.
              </p>
              <div className="calculation" style={{ margin: '12px 0', fontSize: '13px' }}>
{`RFM Segment          | % of Members | Avg Points/Yr | True Incr. Lift | Rewards Cost/Member
─────────────────────────────────────────────────────────────────────────────────────────────
Champions            |     18%       |   2,400 pts   |    $8/yr        |   $24/yr
Loyal Customers      |     22%       |   1,800 pts   |    $15/yr       |   $18/yr
At-Risk Customers    |     15%       |   1,200 pts   |    $62/yr  ←★   |   $12/yr
Lost/Low Value       |     28%       |    200 pts    |    $1/yr        |    $2/yr
Potential Loyalists  |     17%       |    600 pts    |    $31/yr  ←★   |    $6/yr

★ = High incrementality, underserved by current program mechanics
Key finding: Champions consume 45% of total reward spend but generate the lowest incremental ROI.`}
              </div>
            </li>

            <li>
              <strong>Step 5 — Identify the 90-Day Behavior-Change Window</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                I plot when incremental lift occurs relative to enrollment date. If the program changes behavior, I expect the lift to be distributed across the membership period. If it is concentrated at a specific window, that tells me where the critical intervention moment is.
              </p>
              <div className="calculation" style={{ margin: '12px 0', fontSize: '13px' }}>
{`Distribution of incremental lift by days-since-enrollment:
  Days 0–90:   78% of total incremental lift occurs in this window
  Days 91–180: 15% of total incremental lift
  Days 181+:   7% of total incremental lift

⟹ The program has a narrow 90-day "behavior change window" after enrollment.
   After 90 days, member behavior largely reverts to pre-enrollment trajectory.
   If we fail to drive habit formation in the first 90 days, we likely never will.
   Current program: No specific onboarding mechanics exist for days 0–90.`}
              </div>
            </li>

            <li>
              <strong>Step 6 — Test the "Threshold Urgency" Effect (What Actually Drives Trips?)</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                I analyze whether members visit more frequently when they are within 200 points of a reward threshold — a natural experiment embedded in the transaction data. This is the only direct behavioral test of whether points mechanics change trip patterns.
              </p>
              <div className="calculation" style={{ margin: '12px 0', fontSize: '13px' }}>
{`Visit frequency by points-to-threshold distance (for Champion segment):
  >500 pts from threshold:   0.9 visits/week (baseline)
  200–500 pts from threshold: 1.1 visits/week (+22%)
  <200 pts from threshold:   2.1 visits/week (+133%) ← "Threshold Urgency" effect

Same analysis for At-Risk segment:
  >500 pts from threshold:   0.3 visits/week (baseline)
  <200 pts from threshold:   0.5 visits/week (+67%) — smaller absolute but proportionally meaningful

⟹ Threshold urgency is real but primarily activates heavy users who will reach thresholds
   frequently. Low-frequency members rarely get close enough to threshold to trigger the effect.
   The program's incentive structure is physically inaccessible to the people who most need to change.`}
              </div>
            </li>

            <li>
              <strong>Step 7 — Full Economic Decomposition: The Real ROI</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Now I have all the inputs needed to replace the inflated 35x claim with a defensible, segment-by-segment ROI calculation that the CFO can take to the board.
              </p>
              <div className="calculation" style={{ margin: '12px 0', fontSize: '13px' }}>
{`Full Program Economic Breakdown:

Segment          | Members  | Reward Spend | Incr. Revenue | Segment ROI
─────────────────────────────────────────────────────────────────────────
Champions        | 2.52M    |   $21.2M     |   $20.2M      |  0.95x  ← near break-even
Loyal Customers  | 3.08M    |   $11.0M     |   $46.2M      |  4.2x
At-Risk          | 2.10M    |    $7.1M     |   $35.4M      |  5.0x   ← best ROI
Lost/Low Value   | 3.92M    |    $4.7M     |    $2.1M      |  0.45x  ← destroying value
Potential Loyal. | 2.38M    |    $3.0M     |   $18.6M      |  6.2x   ← best ROI per $
─────────────────────────────────────────────────────────────────────────
TOTAL            | 14.00M   |   $47.0M     |  $122.5M      |  2.6x (true ROI)

Previously reported ROI: 35x (based on raw member vs. non-member comparison)
True program ROI:          2.6x (based on propensity-matched incrementality)

Still positive. Still above the 10% hurdle rate. But the distribution is the problem:
$25.9M of reward spend (Champions + Lost segments) generates only $22.3M in incremental revenue.
That $25.9M is largely a subsidy to customers who don't need it.`}
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ── SECTION 7: CALCULATIONS & SIMULATION ── */}
      <section>
        <h2>7. Calculations & Simulation</h2>
        <div className="content">

          <p><strong>Calculation 1: Quantifying the Self-Selection Overstatement</strong></p>
          <div className="calculation">
{`Naive (Current Method):
  Avg member spend:           $180/yr
  Avg non-member spend:        $61/yr
  Claimed lift:               $119/member
  14M members × $119      = $1,666M "attributed" revenue
  Program cost:                $47M
  "ROI" = $1,666M / $47M  = 35.4x

True (Incrementality Method):
  Avg member spend:           $180/yr
  Matched non-member spend:   $155/yr (baseline-adjusted)
  True lift:                   $25/member
  Members with genuine lift: 14M × 35% = 4.9M
  True incr. revenue:        4.9M × $25 = $122.5M
  Program cost:                $47M
  True ROI = $122.5M / $47M = 2.6x

ROI Overstatement Factor = 35.4x / 2.6x = 13.6x overstatement`}
          </div>

          <p style={{ marginTop: '25px' }}><strong>Calculation 2: Cost of Subsidizing Captive Champions</strong></p>
          <div className="calculation">
{`Champions (18% of base, 45% of reward spend):
  Members:           2.52M
  Reward cost/member: $24/yr
  Total spend:       $21.2M

  Incremental lift/member: $8/yr
  Total incremental rev:   $20.2M

  Program P&L (Champions only):
    Revenue generated:    $20.2M
    Reward cost:         −$21.2M
    Net contribution:    −$1.0M  ← Marginally negative

⟹ The program's highest-earning, most "loyal" segment is the only one generating
   a net-negative incremental contribution. They are the segment we can afford to
   stop rewarding — because they will keep shopping regardless.`}
          </div>

          <p style={{ marginTop: '25px' }}><strong>Calculation 3: Reallocation Impact (The Upside Scenario)</strong></p>
          <div className="calculation">
{`Scenario: Reallocate $14M from Champions/Lost segments → At-Risk + Potential Loyalists

Freed from Champions (reduce reward rate from $24 to $10/member): $35.3M saved
 — Risk: Some champion churn; estimate 8% churn on top decile = −$1.6M revenue
Freed from Lost segment (reduce reward to near-zero): $4.2M saved
 — Risk: Minimal; this segment has 0.45x ROI, already near worthless

Total reallocation pool: $14.0M (conservative net-of-attrition risk)

Deploy to At-Risk segment (additional $6.7M at 5.0x ROI):  → +$33.5M incremental rev
Deploy to Potential Loyalists (additional $4.7M at 6.2x):  → +$29.1M incremental rev
Deploy to 90-day onboarding program ($2.6M at est. 7.6x):  → +$19.8M incremental rev

New total incremental revenue: $122.5M + $82.4M − $22.3M (lost from reallocated segs)
                              = $182.6M
New true ROI: $182.6M / $47M = 3.9x  (+50% improvement with same total budget)`}
          </div>

          <p style={{ marginTop: '25px' }}><strong>Calculation 4: 90-Day Onboarding Window Revenue Value</strong></p>
          <div className="calculation">
{`Current state (no dedicated onboarding program):
  New members who sustain behavior change past 90 days:  22% of enrolled
  New members who show lift in 0–90 days but revert:     13% of enrolled

Intervention: Structured 90-day habit formation program (milestone rewards, streak bonuses)
  Estimated conversion of "reverters" to "sustained":    50%
  Additional sustained members per year (80% of new enroll is ~1.2M/yr):
    1.2M new/yr × 13% reverters × 50% conversion = 78,000 additional sustained members

  Incremental revenue per sustained member: $25/yr × avg 3.5 year tenure = $87.50 LTV
  Total LTV gain: 78,000 × $87.50 = $6.8M per annual cohort (compounding over 5 yrs: ~$28M)
  Required investment in onboarding UX + rewards: ~$2.8M
  ROI on 90-day onboarding program: $28M / $2.8M = 10x over 5-year horizon`}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FINDINGS & INSIGHTS ── */}
      <section>
        <h2>8. Findings & Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Expected vs. Actual — The Full Scorecard:</strong>
            <table className="data-table" style={{ marginTop: '15px' }}>
              <thead>
                <tr>
                  <th>Assumption</th>
                  <th>What Everyone Believed</th>
                  <th>What the Data Shows</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Program ROI</td>
                  <td>35x (members spend 3x non-members)</td>
                  <td><strong>2.6x true incremental ROI — a 13.6x overstatement</strong></td>
                </tr>
                <tr>
                  <td>Champions are most valuable</td>
                  <td>High earners = high program value</td>
                  <td><strong>Champions have near-zero incremental ROI (0.95x) — they're captive</strong></td>
                </tr>
                <tr>
                  <td>Reward redemption = program success</td>
                  <td>Redeemers are the most loyal</td>
                  <td><strong>Redeemers are captive heavy users — the reward doesn't change their behavior</strong></td>
                </tr>
                <tr>
                  <td>More points = more trips</td>
                  <td>Incentive response is linear</td>
                  <td><strong>Only threshold urgency effect exists; largely inaccessible to low-frequency members</strong></td>
                </tr>
                <tr>
                  <td>Program tenure drives loyalty</td>
                  <td>The longer they're enrolled, the more loyal</td>
                  <td><strong>78% of incremental lift happens in first 90 days; program has no onboarding mechanics</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul style={{ marginTop: '20px' }}>
            <li>
              <strong>Finding 1 — The Inverted ROI Paradox:</strong> The customers who receive the most reward spend (Champions) generate the lowest incremental return. The customers who receive the least (At-Risk, Potential Loyalists) generate 5–6x ROI. The program is built exactly backwards from an incrementality standpoint.
            </li>
            <li>
              <strong>Finding 2 — The 90-Day Critical Window:</strong> Almost all behavior change happens in the first 90 days post-enrollment. The program has no dedicated onboarding mechanism — it treats a new member the same as a 5-year member from day one. This is the single highest-leverage improvement opportunity.
            </li>
            <li>
              <strong>Finding 3 — The Lost Segment ($4.7M Dead Zone):</strong> 28% of members (3.9M customers) generate only $0.45 of incremental revenue per $1 of reward spend. They enrolled, collected minimal points, and never changed behavior. The program is subsidizing customers with no value to capture and no behavior to change.
            </li>
            <li>
              <strong>Finding 4 — True Program ROI Is Still Positive:</strong> This is important to emphasize. Despite the overstatement, 2.6x true ROI clears the 10% hurdle rate. The program is not broken — it is misallocated. This finding gives the CMO a defensible path: the program works, it just needs to be redirected.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 9: RECOMMENDATIONS ── */}
      <section>
        <h2>9. Recommendations</h2>
        <div className="content">
          <p><strong>Tier 1 — Immediate Actions (0–30 Days):</strong></p>
          <ul>
            <li>
              <strong>Freeze automatic point accrual for Champions above $400/yr spend.</strong> Replace with experiential rewards (priority pharmacist access, free health screenings, birthday gifts) — high perceived value, near-zero marginal cost. Champions will not churn over this change. They are captive by geography and relationship. Owner: VP Loyalty. Expected savings: $8M/yr reallocated. Risk: Low.
            </li>
            <li>
              <strong>Terminate the Lost segment's reward flow entirely.</strong> Members earning fewer than 100 points in 12 months receive no ongoing reward spend. They are re-engaged only via targeted reactivation campaigns (triple points for 30 days, sent once per year). Owner: CRM Team. Savings: $4.2M/yr.
            </li>
            <li>
              <strong>Launch "Reactivation Sprint" for At-Risk members</strong> — members with high historical spend but 90+ days since last visit. Offer: triple points for next 30 days. Estimated cost: $1.2M. Expected incremental revenue at 5.0x ROI: $8.5M. Owner: Marketing Ops. Timeline: 2 weeks to execute in CRM.
            </li>
          </ul>

          <p style={{ marginTop: '20px' }}><strong>Tier 2 — Medium-Term (1–6 Months):</strong></p>
          <ul>
            <li>
              <strong>Redesign point-earn mechanics from spend-based to behavior-based.</strong> Stop rewarding customers for buying the same product in the same store on the same schedule — that is not behavior change. New earn triggers: first purchase in a new category (+500 pts), prescription transfer (+1,000 pts), visit within 7 days of last trip (+double pts), second visit in a new month (+triple pts.
            </li>
            <li>
              <strong>Build a dedicated 90-Day Onboarding Flow.</strong> New members enter a structured streak program: Week 1 reward unlocks on second visit; Week 4 reward on category expansion; Day 60 milestone reward. Target: convert 50% of "reverters" to sustained habit. Investment: $2.8M. 5-year ROI: 10x.
            </li>
            <li>
              <strong>Establish a permanent 5% holdout group.</strong> All new enrollees: 5% randomly receive zero points (but are enrolled for all other program benefits). This creates an ongoing, continuously-updated incrementality measurement baseline — eliminating the need for this engagement to be run again in another 8 years.
            </li>
          </ul>

          <p style={{ marginTop: '20px' }}><strong>Tier 3 — Strategic (6+ Months):</strong></p>
          <ul>
            <li>
              <strong>Introduce "VantageCard Plus" — a paid loyalty tier at $49/year.</strong> Champions are captive and highly satisfied. They will pay for premium benefits (same-day prescription delivery, annual health checkup discount). This converts the loyalty program from a pure cost center into a partial revenue line. Estimated: 15% of Champions subscribe = 378K members × $49 = $18.5M new annual revenue.
            </li>
            <li>
              <strong>Transition the board KPI from "enrolled members" to "incremental revenue per program dollar."</strong> As long as the north-star metric is enrollment count, the CMO will optimize for enrollment. Once it is incremental ROI, every program decision aligns with what actually matters.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 10: BUSINESS DECISION-MAKING ── */}
      <section>
        <h2>10. Business Decision-Making</h2>
        <div className="content">
          <p>
            This is where the analysis meets the organization. In a world of perfect information and zero politics, the recommendations above get implemented immediately. In reality, the CMO has a valid concern: publicly acknowledging a 35x → 2.6x ROI correction looks like an admission of 8 years of misleading the board.
          </p>
          <div className="highlight-box">
            <strong>How to Frame the Findings Without Creating a Crisis:</strong>
            <p style={{ marginTop: '10px', fontSize: '14px' }}>
              Frame the incrementality finding as a <em>methodology upgrade</em>, not a failure. Recommended framing for the board: "We previously measured the correlation between loyalty membership and spending, which showed the value of our most loyal customers. We have now applied causal inference methodology — the industry gold standard — and identified a 2.6x true ROI. More importantly, we have identified specific segments with 5–6x ROI that are currently underserved, and a reallocation path that increases program ROI to 3.9x with the same total budget." The CMO gets to own a program optimization story, not a failure narrative.
            </p>
          </div>
          <p><strong>Which recommendations will get funded immediately:</strong></p>
          <ul>
            <li>Reactivation Sprint ($1.2M cost, $8.5M return) — this pays back in 45 days. CFO will approve on sight.</li>
            <li>Champion experiential reward shift — no incremental budget required. Political risk is the only barrier.</li>
            <li>90-Day onboarding program — $2.8M investment with 10x ROI over 5 years clears any reasonable hurdle rate.</li>
          </ul>

          <div className="highlight-box" style={{ marginTop: '20px' }}>
            <strong>90-Day KPI Monitoring Dashboard:</strong>
            <table className="data-table" style={{ marginTop: '12px' }}>
              <thead>
                <tr>
                  <th>KPI</th>
                  <th>Current</th>
                  <th>Target (90 Days)</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>At-Risk member visit frequency</td>
                  <td>0.8 visits/month</td>
                  <td>1.4 visits/month</td>
                  <td>Loyalty Ops</td>
                </tr>
                <tr>
                  <td>New member 90-day habit retention</td>
                  <td>22%</td>
                  <td>35%</td>
                  <td>Marketing / Product</td>
                </tr>
                <tr>
                  <td>Incremental revenue per reward $</td>
                  <td>$2.60</td>
                  <td>$3.20</td>
                  <td>Finance / Analytics</td>
                </tr>
                <tr>
                  <td>Category breadth (new members, 90 days)</td>
                  <td>2.1 categories</td>
                  <td>3.0 categories</td>
                  <td>Merchandising</td>
                </tr>
                <tr>
                  <td>Champion segment satisfaction (NPS)</td>
                  <td>72</td>
                  <td>≥68 (acceptable range)</td>
                  <td>CX</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: WAR ROOM NOTES ── */}
      <section>
        <h2>11. Senior Practitioner's War Room Notes</h2>
        <div className="content">
          <p>
            I have run variants of this engagement across grocery, pharmacy, airline, hotel, and banking loyalty programs. The self-selection problem is <em>systemic</em> across the industry. Here is what I have learned that no analytics textbook will tell you.
          </p>

          <div className="highlight-box">
            <strong>The Most Common Mistake Across All Loyalty Analytics:</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Using "member vs. non-member" comparisons without controlling for pre-enrollment behavior. Every single loyalty team I have ever worked with makes this mistake. Not because they are incompetent — but because the data needed to correct it (pre-enrollment history matched to non-member controls) requires intentional data architecture that nobody builds when the program launches. The correction requires going back and reconstructing it, which is painful. Most teams never do.
            </p>
          </div>

          <div className="highlight-box">
            <strong>What a Junior Analyst Does vs. What a Senior Analyst Does:</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Junior: Downloads the loyalty dashboard, sees "members spend 3x more than non-members," builds a slide deck showing 35x ROI, and presents it to the CMO who is delighted.
              <br /><br />
              Senior: Immediately asks "What did those members spend in the 12 months before they enrolled?" That one question — which takes 30 minutes to query — invalidates three years of program reporting. The senior analyst knows that loyalty programs self-select high-value customers, and always, <em>always</em> checks the pre-enrollment baseline first.
            </p>
          </div>

          <div className="highlight-box">
            <strong>The Career Risk Dimension:</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Loyalty programs are sacred cows at retail companies. They are the CMO's flagship initiative, the VP of Loyalty's entire identity, and often the justification for an entire department's headcount. Delivering a finding that the ROI is 13.6x overstated is not an analytics problem — it is a change management problem. I have seen this finding delivered two ways: (1) as a critique ("your program ROI is wrong") which triggers a defensive war and usually gets the analyst removed from the account; and (2) as an optimization opportunity ("your program works in these specific segments — here is how to make it work everywhere else") which usually results in the CMO taking credit for the improvement. The second approach is the right one, every time. You are there to help the business, not to be right.
            </p>
          </div>

          <div className="highlight-box">
            <strong>The Technique That Resolves All Future Arguments:</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Build the permanent 5% holdout group into the program architecture from this engagement forward. Once you have a living control group, the incrementality question is answered automatically every month. The CFO will never need to commission another engagement like this. The CMO will never be able to overstate ROI again. And your analytics team becomes the source of truth — not the source of controversy. The holdout group is the most valuable deliverable of this entire project, and most teams never build it because it feels like admitting uncertainty. It is actually the opposite: it proves you know what you are doing.
            </p>
          </div>

          <div className="highlight-box">
            <strong>The Pattern Across 20+ Loyalty Engagements:</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              In pharmacy: 65–72% of loyalty reward spend goes to customers who would have purchased anyway.
              In grocery: 55–68%.
              In airline (frequent flyer): 40–55% — better because miles involve real purchase behavior (flights are high-consideration decisions where miles can tip a choice).
              In hotel: 60–70%.
              <br /><br />
              The programs with the lowest self-selection bias share one common trait: they reward <em>behavior change</em> (e.g., flying a route you don't usually fly, buying a category you don't usually buy) rather than spend volume. Volume rewards are a subsidy to existing behavior. Behavior rewards are the only true loyalty investment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Case14;
