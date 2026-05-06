const Case08 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 08</span>
        <h1>The Attribution Blind Spot</h1>
        <div className="case-meta">Industry: CPG / Advertising &bull; Level: Advanced</div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>SparkBev</strong> is a global beverage company with $1.2B in annual revenue. Last year, they spent <strong>$120M on marketing</strong> across five channels: TV, YouTube, Facebook, Google Search, and In-store Displays.
          </p>
          <p>
            The business model is straightforward: invest in brand awareness (TV), consideration (YouTube/Facebook), intent capture (Search), and conversion (In-store). In theory, this is a well-orchestrated funnel.
          </p>
          <p>
            But here's the tension: <strong>Digital channels (Facebook, Google Search) report dramatically higher ROI than TV</strong>. Search reports a 5.2x ROAS. TV reports a 1.8x ROAS. On the surface, this suggests SparkBev should shift dollars from TV to Search.
          </p>
          <div className="highlight-box">
            <strong>Stakeholders:</strong> Chief Marketing Officer (CMO), Chief Financial Officer (CFO), Finance Director, Search/Social Team Leads, Brand Leadership.<br />
            <strong>Context:</strong> The CFO is skeptical. She sees stagnant total revenue (+2% YoY) despite a 12% increase in digital spend. She's proposing a $20M budget cut unless the marketing team can prove ROI. The CMO suspects that digital platforms are taking credit for sales that would happen anyway — but has no proof.
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem: Peeling Back the Layers</h2>
        <div className="content">
          <p>
            At first glance, the problem seems simple: <strong>"Digital ROAS is 5.2x, TV ROAS is 1.8x, therefore shift budget to digital."</strong>
          </p>
          <p>
            But there are <strong>four hidden layers</strong> to this problem, and the CMO suspects the real issue is Layer 2 (measurement), not Layer 1 (allocation):
          </p>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Layer 1 — Channel Saturation Problem:</strong>
            <p style={{ marginTop: "8px", marginBottom: "0px", fontSize: "14px" }}>
              <em>"We've hit diminishing returns on Facebook."</em> Spend increased 20% YoY, but incremental sales only grew 3%. The cost-per-acquisition is rising. This is a real optimization problem.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Layer 2 — Attribution Bias Problem (The Real Culprit):</strong>
            <p style={{ marginTop: "8px", marginBottom: "0px", fontSize: "14px" }}>
              <em>"Google takes credit for sales that were already going to happen."</em> A customer might see a TV ad (which influences them), then search "SparkBev" and click the Google ad. Google gets 100% of the credit (Last-Click Attribution). But did Google drive the sale, or did TV? Attribution systems can't see this.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Layer 3 — Adstock/Memory Problem:</strong>
            <p style={{ marginTop: "8px", marginBottom: "0px", fontSize: "14px" }}>
              <em>"TV's effect lingers over weeks; digital shows results instantly."</em> A TV ad on Monday might influence a purchase on Friday. But weekly reporting systems treat them as separate events. This makes TV look less efficient than it is.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Layer 4 — Synergy/Halo Problem:</strong>
            <p style={{ marginTop: "8px", marginBottom: "0px", fontSize: "14px" }}>
              <em>"TV makes digital work better."</em> When TV brand awareness is high, Search click-through rates spike. But this interaction isn't captured in channel-level ROI metrics. TV's true value is being hidden.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "20px", backgroundColor: "#fff3cd" }}>
            <strong>The Core Question:</strong> Which layer is the real problem?
            <ul style={{ marginTop: "10px", marginBottom: "0px" }}>
              <li>If it's <strong>Layer 1</strong> (saturation): Reallocate budget within digital, keep TV flat.</li>
              <li>If it's <strong>Layer 2</strong> (attribution bias): Redistribute credit, might prove TV is actually more efficient.</li>
              <li>If it's <strong>Layer 3</strong> (adstock): Increase TV spend, it's more valuable than metrics show.</li>
              <li>If it's <strong>Layer 4</strong> (synergy): Increase TV AND Search together, they amplify each other.</li>
            </ul>
            <p style={{ marginTop: "10px", marginBottom: "0px" }}>
              <em>Wrong diagnosis = wrong fix = wasted $20M.</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. The Diagnostic Framework: How to Uncover the Real Problem</h2>
        <div className="content">
          <p>
            Instead of jumping to "build an MMM model," a senior analyst asks: <strong>"What tests can we run to identify which layer is the bottleneck?"</strong>
          </p>

          <ol>
            <li>
              <strong>Test 1 — The Holdout Test (Measure Layer 2: Attribution Bias)</strong>
              <ul style={{ marginTop: "8px" }}>
                <li>
                  <strong>Design:</strong> Pause all Search spending in one geographic region for 4 weeks. Measure the impact on revenue in that region vs. a control region.
                </li>
                <li>
                  <strong>Question it answers:</strong> When we turn off Search, how much revenue actually drops? If it drops 20%, Search is driving $20. If it drops 2%, Search was mostly taking credit for other channels.
                </li>
                <li>
                  <strong>Why this matters:</strong> This bypasses attribution systems entirely. It's a <em>causal</em> measurement, not a <em>correlational</em> one.
                </li>
              </ul>
            </li>
            <li>
              <strong>Test 2 — The Saturation Test (Measure Layer 1: Diminishing Returns)</strong>
              <ul style={{ marginTop: "8px" }}>
                <li>
                  <strong>Design:</strong> In one region, increase Facebook spend by 50% for 4 weeks. Track the incremental revenue.
                </li>
                <li>
                  <strong>Question it answers:</strong> Does the incremental revenue justify the incremental spend? If we spend $500K more and only get $500K in revenue, we're at break-even (1x mROAS). If we get $2M in revenue, we should increase spend.
                </li>
                <li>
                  <strong>Key insight:</strong> We're measuring <em>marginal</em> ROI, not total ROI. A channel can have 4.0x total ROI but 0.5x marginal ROI. The second number is what matters for optimization.
                </li>
              </ul>
            </li>
            <li>
              <strong>Test 3 — The Adstock Test (Measure Layer 3: Memory Effect)</strong>
              <ul style={{ marginTop: "8px" }}>
                <li>
                  <strong>Design:</strong> Analyze weekly sales data and TV spend with a 1-week lag, 2-week lag, etc. Which lag captures the strongest correlation?
                </li>
                <li>
                  <strong>Question it answers:</strong> If a 2-week lag shows the strongest correlation, TV's effect lingers for 2 weeks. This means we should credit TV for sales that happen in the 2 weeks following the ad.
                </li>
                <li>
                  <strong>Why this matters:</strong> Weekly reporting artificially compresses TV's impact into a single week. Multi-week lags reveal the true power.
                </li>
              </ul>
            </li>
            <li>
              <strong>Test 4 — The Synergy Test (Measure Layer 4: Halo Effect)</strong>
              <ul style={{ marginTop: "8px" }}>
                <li>
                  <strong>Design:</strong> In weeks where TV spend is high, measure Search CTR and CPA. In weeks where TV spend is low, measure the same metrics. Compare.
                </li>
                <li>
                  <strong>Question it answers:</strong> Does Search perform better when TV is running? If CTR is 15% when TV is running and 8% when it's not, TV is creating a halo effect. The $50K TV spend enabled $200K in Search revenue that wouldn't have happened otherwise.
                </li>
              </ul>
            </li>
          </ol>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>The Diagnostic Sequence:</strong>
            <p style={{ marginTop: "10px", marginBottom: "0px" }}>
              Start with the <strong>cheapest, fastest tests first</strong> (lag analysis, correlation). They might reveal the problem immediately. Only move to expensive holdout tests if needed.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Data Perspective: What We Actually Have</h2>
        <div className="content">
          <p>We have <strong>156 weeks (3 years) of data</strong> at weekly granularity. This is both a blessing and a curse.</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Data Type</th>
                <th>Variables</th>
                <th>Quality Issues</th>
                <th>Analytical Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Revenue (Target)</strong></td>
                <td>Weekly total revenue ($M), Unit sales, ASP.</td>
                <td>Seasonal spikes during holidays; promotional weeks create outliers.</td>
                <td>Dependent variable for all analysis.</td>
              </tr>
              <tr>
                <td><strong>Media Spend (Controlled)</strong></td>
                <td>TV (GRPs), YouTube (impressions), Facebook (spend $), Search (spend $), In-store (display count).</td>
                <td>TV in GRPs (not $), others in spend or impressions—unit mismatch. Spend data lags media flight by 1-2 weeks.</td>
                <td>Independent variables; need unit-normalization or log transformation.</td>
              </tr>
              <tr>
                <td><strong>External Drivers</strong></td>
                <td>Temperature (°C), Competitor pricing, Economic index, Holiday flags.</td>
                <td>Temperature is strongly seasonal; competitor data is incomplete for 10% of weeks.</td>
                <td>Control variables to account for "noise" not driven by SparkBev's marketing.</td>
              </tr>
              <tr>
                <td><strong>Attribution Data</strong></td>
                <td>Last-click attribution, View-through conversions, Multi-touch attribution.</td>
                <td>Last-click is biased; view-through is sparse; multi-touch is noisy.</td>
                <td>Validation check against causal estimates, but NOT primary source of truth.</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: "20px" }}>
            <strong>Data Limitation (Critical):</strong> We don't have geo-level data for most channels. TV is regional (by DMA), but Facebook and Search are national. This limits our ability to do clean holdout tests.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Implication:</strong> Our analysis will rely heavily on time-series variation (different weeks/months), not geographic variation. This is weaker causal inference, but workable with proper controls.
          </p>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. The Analytical Approach: Why Not Just "Build an MMM"?</h2>
        <div className="content">
          <p>
            The business problem has <strong>four distinct layers</strong>. Each requires a different analytical tool. Building one "Marketing Mix Model" would conflate them all.
          </p>

          <p style={{ marginTop: "15px" }}>
            Instead, we use a <strong>"Layered Diagnosis"</strong> approach:
          </p>

          <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f0f4f8", borderRadius: "8px" }}>
            <strong>Phase 1: Quick Diagnostics (Week 1-2)</strong>
            <ul style={{ marginTop: "10px" }}>
              <li><strong>Adstock Lag Analysis:</strong> Which weeks does TV drive revenue? 1-week lag? 2-week? 3-week? Tests Layer 3 quickly.</li>
              <li><strong>Correlation with Controls:</strong> Do seasons, competitors, and price changes explain the revenue swings? If yes, we know the "baseline" to subtract from our channel estimates. Tests whether we need to control for Layer 2 bias.</li>
              <li><strong>Saturation Curve Plotting:</strong> Plot Facebook spend (X-axis) vs. revenue (Y-axis). Is it linear or S-shaped? If S-shaped, saturation is real. Tests Layer 1 visually.</li>
            </ul>
          </div>

          <div style={{ marginTop: "15px", padding: "15px", backgroundColor: "#f0f4f8", borderRadius: "8px" }}>
            <strong>Phase 2: Causal Estimation (Week 3-6)</strong>
            <ul style={{ marginTop: "10px" }}>
              <li><strong>If diagnostics suggest attribution bias (Layer 2):</strong> Build a Bayesian Structural Time-Series (BSTS) model or do a geo-level holdout test. These measure the causal impact of turning off a channel.</li>
              <li><strong>If diagnostics suggest saturation (Layer 1) dominates:</strong> Fit a Hill Saturation function to each channel separately. Predict marginal ROAS at different spend levels.</li>
              <li><strong>If diagnostics suggest synergy (Layer 4):</strong> Model interactions (TV × Search) to quantify the cross-channel boost.</li>
            </ul>
          </div>

          <div style={{ marginTop: "15px", padding: "15px", backgroundColor: "#f0f4f8", borderRadius: "8px" }}>
            <strong>Phase 3: Optimization & Allocation (Week 7-8)</strong>
            <ul style={{ marginTop: "10px" }}>
              <li>Use Phase 2 estimates to build a budget allocation optimizer.</li>
              <li>Solve: "How do we reallocate $120M across channels to maximize total revenue, given the saturation curves and synergies we identified?"</li>
              <li>Present scenarios: "Conservative" (modest changes), "Target" (recommended), "Aggressive" (max revenue, most risk).</li>
            </ul>
          </div>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Why This Approach?</strong>
            <p style={{ marginTop: "8px", marginBottom: "0px" }}>
              Standard MMM tries to estimate one model with all variables at once. This creates <strong>multicollinearity hell</strong> — TV spend is correlated with Search spend, which is correlated with time trends, etc. The model can't tease apart causation.
            </p>
            <p style={{ marginTop: "10px", marginBottom: "0px" }}>
              By diagnosing the <em>layers</em> first, we know which effects to isolate. We can then use targeted methods for each layer, rather than one bloated model.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Phase 1 Diagnostics: The Results</h2>
        <div className="content">
          <p>
            We ran the quick diagnostics. Here's what we found:
          </p>

          <div className="calculation" style={{ marginTop: "20px" }}>
{`DIAGNOSTIC 1: Adstock Lag Analysis
─────────────────────────────────────
Weekly TV Spend correlated with Revenue at different lags:

Lag 0 (same week):     r = 0.32
Lag 1 (1 week after):  r = 0.64  ← STRONGEST
Lag 2 (2 weeks after): r = 0.58
Lag 3 (3 weeks after): r = 0.41

Finding: TV's peak influence is 1 week later. This suggests a "memory decay" 
where 70% of impact is in week 1, 30% in weeks 2+.

Implication: Layer 3 (Adstock) is REAL. Weekly reporting underestimates TV's impact.

───────────────────────────────────────
DIAGNOSTIC 2: Saturation Curve Analysis (Facebook)
───────────────────────────────────────

We plotted Facebook Spend (X) vs. Incremental Revenue (Y):

At $2M/week spend:  Incremental revenue = $12M  → mROAS = 6.0x
At $4M/week spend:  Incremental revenue = $20M  → mROAS = 5.0x
At $6M/week spend:  Incremental revenue = $26M  → mROAS = 4.3x
At $8M/week spend:  Incremental revenue = $30M  → mROAS = 3.75x
At $10M/week spend: Incremental revenue = $33M  → mROAS = 3.3x
At $12M/week spend: Incremental revenue = $35M  → mROAS = 2.9x  ← Approaching saturation

Curve Type: S-shaped (Hill Function), NOT linear.

Implication: Layer 1 (Saturation) is REAL. Facebook is approaching a saturation point 
around $8-10M/week. Spending beyond this is inefficient.

───────────────────────────────────────
DIAGNOSTIC 3: Seasonality & Control Variables
───────────────────────────────────────

Revenue Drivers (Regression, controlling for media spend):

Temperature effect:      +$800K per °C increase
Holiday week effect:     +$4.2M (Thanksgiving, Christmas, Summer)
Competitor price change: -$1.2M per 10% competitor discount
Own price change:        -$3M per 5% price increase

Finding: These external factors explain ~35% of revenue variance. 
They're large enough to mask channel effects if not controlled for.

Implication: Layer 2 (Attribution Bias) is MODERATE. Some bias from seasonality,
but not catastrophic if we control for it properly.

───────────────────────────────────────
DIAGNOSTIC 4: Synergy Check (TV × Search)
───────────────────────────────────────

Search CTR (click-through rate) by TV spend level:

In weeks with TV spend >$3M:       CTR = 2.8%
In weeks with TV spend $1-3M:      CTR = 2.1%
In weeks with no TV spend:         CTR = 1.4%

Implication: TV creates a HALO EFFECT. When TV is running, Search gets 2x the CTR.
This is Layer 4 (Synergy) — it's REAL and LARGE.

`}
          </div>

          <div className="highlight-box" style={{ marginTop: "20px", backgroundColor: "#e8f5e9" }}>
            <strong>Diagnostic Summary: What's the Real Problem?</strong>
            <table className="data-table" style={{ marginTop: "15px" }}>
              <thead>
                <tr>
                  <th>Layer</th>
                  <th>Finding</th>
                  <th>Impact</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Layer 1: Saturation</strong></td>
                  <td>Facebook is over-spent beyond $8M/week</td>
                  <td>Losing $2-3M/week in marginal efficiency</td>
                  <td>🔴 CRITICAL</td>
                </tr>
                <tr>
                  <td><strong>Layer 2: Attribution Bias</strong></td>
                  <td>Moderate; controlled by seasonal adjustments</td>
                  <td>Some distortion, but manageable</td>
                  <td>🟡 MEDIUM</td>
                </tr>
                <tr>
                  <td><strong>Layer 3: Adstock</strong></td>
                  <td>TV has 1-week lag; memory decay of ~70/30</td>
                  <td>TV is undervalued by ~15% in weekly reporting</td>
                  <td>🟡 MEDIUM</td>
                </tr>
                <tr>
                  <td><strong>Layer 4: Synergy</strong></td>
                  <td>TV amplifies Search CTR by 100% (when running)</td>
                  <td>TV's true value includes synergy boost</td>
                  <td>🟢 OPPORTUNISTIC</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Phase 2 Causal Estimation: The Real ROI Model</h2>
        <div className="content">
          <p>
            Based on diagnostics, the REAL problem is <strong>Facebook saturation</strong>. But we need to confirm the causal impact, not just correlations.
          </p>

          <p style={{ marginTop: "15px" }}>
            We build a <strong>Bayesian Structural Time-Series (BSTS) model</strong> to measure the causal impact of each channel.
          </p>

          <div className="calculation" style={{ marginTop: "20px" }}>
{`BSTS MODEL RESULTS: Causal Contribution by Channel
──────────────────────────────────────────────────

Current Weekly Revenue Baseline: $40M
(This is the revenue we'd get with ZERO marketing — driven by base brand equity, 
distribution, and seasonality.)

Channel Contributions (Causal Impact):

TV:
  Current spend: $3M/week
  Causal contribution to revenue: $18M/week
  Causal ROAS: `}<span className="math-result">6.0x</span>
{`  Incremental ROAS: `}<span className="math-result">6.2x</span>
{` (meaning $1 more would add $6.20)

YouTube:
  Current spend: $2.5M/week
  Causal contribution: $10M/week
  Causal ROAS: `}<span className="math-result">4.0x</span>
{`  Incremental ROAS: `}<span className="math-result">4.8x</span>

Facebook:
  Current spend: $10M/week
  Causal contribution: $25M/week
  Causal ROAS: `}<span className="math-result">2.5x</span>
{`  Incremental ROAS: `}<span className="math-result">0.6x</span>
{` ← SATURATED (marginal return collapsing)

Search:
  Current spend: $2M/week
  Causal contribution: $8M/week
  Causal ROAS: `}<span className="math-result">4.0x</span>
{`  Incremental ROAS: `}<span className="math-result">3.8x</span>

In-store Displays:
  Current spend: $1M/week
  Causal contribution: $3M/week
  Causal ROAS: `}<span className="math-result">3.0x</span>
{`  Incremental ROAS: `}<span className="math-result">2.9x</span>

──────────────────────────────────────────────────
TOTAL WEEKLY REVENUE: $40M (base) + $64M (marketing) = `}<span className="math-result">$104M</span>
TOTAL WEEKLY SPEND: `}<span className="math-result">$18.5M</span>
BLENDED ROAS: `}<span className="math-result">3.46x</span>

──────────────────────────────────────────────────
KEY FINDING: Reported vs. Actual
──────────────────────────────────────────────────

Facebook reported ROAS: 4.2x (via attribution platform)
Facebook causal ROAS:   2.5x (via BSTS)

Gap: Facebook is claiming 68% more credit than it's actually driving.
Why? Because Facebook is capturing the "last click" on customers who were 
already primed by TV, YouTube, and seasonality.

`}
          </div>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>The "Attribution Blind Spot" Revealed:</strong>
            <ul style={{ marginTop: "10px" }}>
              <li>Facebook looks best because it gets the "last click" in the customer journey.</li>
              <li>But its true incremental value (0.6x mROAS at current spend) is terrible.</li>
              <li>TV looks weak (6.2x incremental ROAS) but is actually the STRONGEST driver and LEAST saturated.</li>
              <li>If we reallocate from Facebook to TV, we'd increase revenue by $15-20M/week, not decrease it.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. The Budget Reallocation Optimizer</h2>
        <div className="content">
          <p>
            Now we solve the <strong>optimization problem:</strong>
          </p>
          <p style={{ marginTop: "10px" }}>
            <em>"Given the saturation curves and synergies we identified, how should we reallocate $18.5M to maximize weekly revenue?"</em>
          </p>

          <div className="calculation" style={{ marginTop: "20px" }}>
{`SCENARIO PLANNING: Three Budget Allocation Options
──────────────────────────────────────────────────────

CURRENT STATE (Status Quo):
  TV:       $3.0M   → Revenue contribution: $18.6M
  YouTube:  $2.5M   → Revenue contribution: $12.0M
  Facebook: $10.0M  → Revenue contribution: $6.0M
  Search:   $2.0M   → Revenue contribution: $7.6M
  In-store: $1.0M   → Revenue contribution: $2.9M
  ────────────────────────────────────────────
  Total:    $18.5M  → Total revenue lift: $47.1M
  Weekly revenue: $87.1M

──────────────────────────────────────────────────────

SCENARIO 1: CONSERVATIVE (Low Risk)
Shift $5M from Facebook to TV + YouTube

  TV:       $5.0M   → Revenue contribution: $29.0M   (+$10.4M)
  YouTube:  $3.5M   → Revenue contribution: $16.0M   (+$4.0M)
  Facebook: $5.0M   → Revenue contribution: $15.0M   (+$9.0M, at lower saturation)
  Search:   $2.5M   → Revenue contribution: $9.0M    (+$1.4M, Search benefits from TV halo)
  In-store: $1.0M   → Revenue contribution: $2.9M
  ────────────────────────────────────────────
  Total:    $17.5M  → Total revenue lift: $71.9M
  Weekly revenue: `}<span className="math-result">$111.9M</span>
{` (+$24.8M vs. current state)

Risk: $5M is conservative. Facebook might complain about reduced budget.

──────────────────────────────────────────────────────

SCENARIO 2: TARGET (Recommended)
Shift $7M from Facebook to TV + YouTube + Search

  TV:       $6.0M   → Revenue contribution: $34.0M   (+$15.4M)
  YouTube:  $4.0M   → Revenue contribution: $17.5M   (+$5.5M)
  Facebook: $3.0M   → Revenue contribution: $8.5M    (+$2.5M, much less saturated)
  Search:   $3.5M   → Revenue contribution: $12.5M   (+$4.9M, TV halo is strong)
  In-store: $2.0M   → Revenue contribution: $6.0M    (+$3.1M, expanded)
  ────────────────────────────────────────────
  Total:    $18.5M  → Total revenue lift: $78.5M
  Weekly revenue: `}<span className="math-result">$118.5M</span>
{` (+$31.4M vs. current state)

Rationale: Puts Facebook at the "knee" of the saturation curve where it's still 
efficient (mROAS ~3.5x), and reallocates excess spend to under-saturated channels.

Expected annual impact: `}<span className="math-result">+$1.63B</span>

──────────────────────────────────────────────────────

SCENARIO 3: AGGRESSIVE (Maximize Revenue)
Shift $10M from Facebook to TV + YouTube + Search

  TV:       $8.0M   → Revenue contribution: $44.0M   (+$25.4M)
  YouTube:  $4.5M   → Revenue contribution: $18.5M   (+$6.5M)
  Facebook: $1.0M   → Revenue contribution: $3.2M    (-$2.8M, but at peak efficiency)
  Search:   $4.0M   → Revenue contribution: $14.0M   (+$6.4M)
  In-store: $1.0M   → Revenue contribution: $2.9M
  ────────────────────────────────────────────
  Total:    $18.5M  → Total revenue lift: $82.6M
  Weekly revenue: `}<span className="math-result">$122.6M</span>
{` (+$35.5M vs. current state)

Expected annual impact: `}<span className="math-result">+$1.85B</span>

Risk: Very aggressive. Facebook will be under-resourced. Synergy with other channels 
might suffer. Execution risk is HIGH.

`}
          </div>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Budget Reallocation Recommendation: Target Scenario</strong>
            <ul style={{ marginTop: "10px" }}>
              <li>Shift $7M from Facebook to TV, YouTube, and Search</li>
              <li>Expected revenue impact: +$31.4M/week = +$1.63B annually</li>
              <li>This proves to the CFO that marketing ROI is REAL and can be improved through optimization, not cutting</li>
              <li>Implementation: Roll out in 4-week test markets first, validate assumptions, then scale</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. The Measurement Truth: Why Recommendation Matters</h2>
        <div className="content">
          <p>
            The core finding: <strong>Digital platforms' "reported ROAS" is inflated because they take last-click credit.</strong>
          </p>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Channel</th>
                  <th>Reported ROAS (Platform Attribution)</th>
                  <th>True Causal ROAS (BSTS)</th>
                  <th>Gap</th>
                  <th>Reason for Gap</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Facebook</td>
                  <td>4.2x</td>
                  <td>2.5x</td>
                  <td>-41%</td>
                  <td>Takes credit for TV + YouTube awareness</td>
                </tr>
                <tr>
                  <td>Search</td>
                  <td>4.8x</td>
                  <td>4.0x</td>
                  <td>-17%</td>
                  <td>Last-click bias, but still significant</td>
                </tr>
                <tr>
                  <td>TV</td>
                  <td>1.8x</td>
                  <td>6.0x</td>
                  <td>+233%</td>
                  <td>Under-credited; effect is multi-week and drives other channels</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: "20px" }}>
            <strong>The Business Implication:</strong> If SparkBev had listened to platform attribution, they would have cut TV spending. Instead, TV is the most efficient channel — it's just hiding behind the "last click."
          </p>
        </div>
      </section>

      {/* ── SECTION 10 ── */}
      <section>
        <h2>10. Recommendations & Implementation</h2>
        <div className="content">
          <p><strong>Immediate Actions (Week 1-4):</strong></p>
          <ul>
            <li>
              <strong>Communicate findings to CMO + CFO:</strong> Present the BSTS results showing that TV is actually more efficient than reported, and Facebook is over-saturated. This directly counters the CFO's budget-cut threat.
            </li>
            <li>
              <strong>Launch test market rollout:</strong> Implement Target Scenario in 2-3 geographic markets (e.g., Pacific Northwest, Southwest). Run for 4 weeks to validate the model's predictions vs. actual outcomes.
            </li>
            <li>
              <strong>Change KPI Reporting:</strong> Stop reporting "Last-Click ROAS" as the primary metric for digital channels. Instead, report "Causal ROAS" derived from BSTS or time-series analysis.
            </li>
          </ul>

          <p style={{ marginTop: "15px" }}><strong>Medium-Term (Month 2-3):</strong></p>
          <ul>
            <li>
              <strong>Scale successful test markets to full rollout:</strong> If test results validate model predictions (±10%), implement nationally.
            </li>
            <li>
              <strong>Establish ongoing monitoring dashboard:</strong> Track weekly mROAS by channel, saturation curves, and synergy metrics. Re-optimize budget monthly based on new data.
            </li>
          </ul>

          <p style={{ marginTop: "15px" }}><strong>Long-Term (Month 4+):</strong></p>
          <ul>
            <li>
              <strong>Build a "Unified Measurement" capability:</strong> Combine BSTS (strategic, macro-level) with MMM (tactical, channel-level) to get a 360-degree view of marketing effectiveness across time horizons.
            </li>
            <li>
              <strong>Invest in geo-level data:</strong> Get Search and Social spend data at the region level, not just national. This will enable cleaner causal inference and faster decision-making.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 11 ── */}
      <section>
        <h2>11. Business Decision-Making: Stakeholder Alignment</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>CMO's Decision:</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px" }}>
              "The attribution blind spot was real. Our digital teams were measuring performance wrong. By moving to causal estimation (BSTS), we can now fairly evaluate all channels. This gives us the confidence to reallocate budget intelligently instead of reactively cutting TV."
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>CFO's Buy-In:</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px" }}>
              "I was skeptical about the $120M spend because digital platforms claimed high ROI but total revenue was flat. Now I understand: we were measuring wrong. The BSTS analysis shows true ROI is 3.46x across all channels, and a smart reallocation can boost it to 4.25x. That's +$1.6B annually. I'm not cutting budget; I'm approving the reallocation test."
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Search/Social Team's Pivot:</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px" }}>
              "We used to compete with TV for budget. Now we understand: we NEED TV running for Search to work well. When TV is active, our CTR is 2x higher. Instead of fighting for budget, we should collaborate. TV primes the audience; we convert it. Together, we're more valuable than apart."
            </p>
          </div>

          <p style={{ marginTop: "20px" }}>
            <strong>The Tension Resolved:</strong> Everyone was looking at the same data differently. The CMO saw attribution bias. The CFO saw flat revenue. The Search team saw a competitive threat. Once we untangled the layers (saturation, bias, adstock, synergy), everyone could see the same truth: reallocate intelligently, don't cut blindly.
          </p>
        </div>
      </section>

      {/* ── SECTION 12 ── */}
      <section>
        <h2>12. Professional Analyst Mindset: The Real Lesson</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Senior Perspective:</strong>
            <p style={{ marginTop: "8px", marginBottom: "0px" }}>
              A junior analyst sees: "Digital has 4.2x ROAS, TV has 1.8x ROAS. Shift budget to digital."
            </p>
            <p style={{ marginTop: "10px", marginBottom: "0px" }}>
              A senior analyst asks: "Are those numbers measuring the same thing? Are they causal or correlational? What's being hidden by the measurement system itself?"
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Key Lesson: Trust Data, But Verify Measurement</strong>
            <p style={{ marginTop: "8px", marginBottom: "0px" }}>
              Digital platforms WANT you to believe their numbers. They're incentivized to show high ROAS. A sophisticated analyst doesn't assume malice; they assume misalignment of incentives. They ask: "Is this platform measuring its true contribution, or is it capturing credit for things it didn't cause?"
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>The Meta-Lesson: Attribution Systems are Broken</strong>
            <p style={{ marginTop: "8px", marginBottom: "0px" }}>
              "Last-click attribution" is the industry standard because it's easy to implement. But it's fundamentally flawed. It can't see multi-touch journeys or synergies. It will always over-credit bottom-of-funnel channels and under-credit top-of-funnel ones.
            </p>
            <p style={{ marginTop: "10px", marginBottom: "0px" }}>
              The fix isn't a better attribution model (still correlational). The fix is <strong>causal inference</strong> (BSTS, geo-holdout tests, incrementality trials). These measure "what happens if we turn off the channel," not "what credit does the channel deserve."
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Interview-Ready Insight:</strong>
            <p style={{ marginTop: "8px", marginBottom: "0px" }}>
              If asked "How would you optimize a marketing budget across multiple channels?" the winning answer structure is:
            </p>
            <p style={{ marginTop: "10px", marginBottom: "0px" }}>
              <em>
                "First, I'd diagnose the layers of the problem (saturation, measurement bias, adstock effects, synergies). Then, I'd use causal inference methods (not attribution) to measure true contribution. Finally, I'd build an optimizer to allocate budget based on marginal ROI curves, not total ROAS. The key insight: you can't optimize a system using metrics that don't measure what they claim to measure."
              </em>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Case08;
