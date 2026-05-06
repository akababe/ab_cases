const Case08 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 08</span>
        <h1>The Attribution Blind Spot</h1>
        <div className="case-meta">Industry: Media / CPG / Advertising &bull; Level: Advanced</div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>SparkBev</strong> is a leading global beverage company. Last year, they spent{" "}
            <strong>$120 Million</strong> on marketing across various channels: TV, YouTube, Facebook, Google
            Search, and In-store displays.
          </p>
          <p>
            In the advertising world, the "Holy Grail" is knowing exactly which dollar spent led to which
            dollar earned. This is the domain of <strong>Marketing Mix Modeling (MMM)</strong>.
          </p>
          <div className="highlight-box">
            <strong>Stakeholders:</strong> Chief Marketing Officer (CMO), Finance Director, Brand Managers.
            <br />
            <strong>Context:</strong> Digital channels (Facebook/Google) report high "Last-Click" ROAS, but
            total company sales are stagnant. The CMO suspects that digital platforms are taking credit for
            sales that would have happened anyway. The Finance Director is threatening to cut the marketing
            budget by $20M unless ROI can be scientifically proven.
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Attribution Crisis: Peeling Back the Layers</h2>
        <div className="content">
          <p>
            SparkBev is suffering from <strong>"Attribution Fragmentation."</strong> But this is actually
            masking four distinct problems. A senior analyst doesn't treat them as one — they diagnose each
            layer separately.
          </p>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>LAYER 1 — Saturation (Diminishing Returns)</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "14px" }}>
              The marketing team keeps increasing the Facebook budget, but incremental sales per dollar are
              dropping. They've hit the "Saturation Point." The first $5M of Facebook spend is highly efficient.
              The next $5M is less efficient. By $10M+, they're burning money. <em>Signal:</em> Spend is
              increasing but revenue is flat.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>LAYER 2 — Attribution Bias (Last-Click Fallacy)</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "14px" }}>
              If a customer sees a TV ad, then a Billboard, then finally clicks a Google Search ad to buy,
              Google takes 100% of the credit. Digital platforms are incentivized to show high ROI. Meanwhile,
              TV (which actually triggered the purchase journey) is completely invisible. <em>Signal:</em> Digital
              ROAS looks suspiciously high (4.0-5.0x) while TV looks weak (1.5-2.0x). This is backwards.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>LAYER 3 — Adstock/Memory Effect (Carryover)</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "14px" }}>
              A TV ad seen on Monday might influence a purchase on Saturday. Most digital models ignore this
              "Carryover Effect." If you don't account for it, you're comparing apples (TV spend) to oranges
              (immediate clicks). <em>Signal:</em> Revenue seems to lag spend by 1-2 weeks, especially for TV.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>LAYER 4 — Synergy/Halo Effect (Cross-Channel)</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "14px" }}>
              When TV ads are running, the click-through rate (CTR) on Search ads increases by 25%. TV "primes"
              the audience, making them more responsive to Search. This means optimizing channels in isolation is
              dangerous — you're destroying the synergy. <em>Signal:</em> Search performance is inconsistent; it
              correlates with TV spending, not just Search spending.
            </p>
          </div>

          <p style={{ marginTop: "20px" }}>
            <strong>The Real Problem:</strong> The CMO, Finance Director, and Search team all have different
            theories about what's wrong because <strong>they're each seeing one layer.</strong> A senior analyst
            separates the layers, measures each one independently, then prioritizes which one is the biggest
            bottleneck.
          </p>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. Diagnostic Framework: Test Before You Build</h2>
        <div className="content">
          <p>
            The instinct is to build a massive MMM model immediately. <strong>Don't.</strong> Instead, run
            targeted diagnostic tests to identify which layer is actually the problem.
          </p>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Test 1: Lag Analysis (Testing Layer 3 — Adstock)</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              Does revenue follow spend immediately, or with a 1-2 week delay? <br />
              Method: Cross-correlation of spend vs. revenue over time. <br />
              Result: TV spend has a 1-week lag (0.8 correlation at lag=7 days). Facebook has no lag
              (immediate correlation). <br />
              <em>Implication:</em> TV is being undervalued because we're comparing week N spend to week N revenue.
              We should compare week N TV spend to week N+1 revenue.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Test 2: Saturation Curve Plotting (Testing Layer 1 — Diminishing Returns)</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              Plot spend vs. revenue for each channel. Does the relationship look linear or S-curved? <br />
              Method: Scatter plot + non-linear regression (Hill function). <br />
              Result: Facebook is clearly S-curved (flattening at $8M+). YouTube is still linear. <br />
              <em>Implication:</em> Facebook is saturated; YouTube is not. Budget reallocation will help.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Test 3: Platform Bias Check (Testing Layer 2 — Attribution Bias)</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              Compare "reported" platform ROAS (from Facebook Ads Manager) vs. "observed" correlation in your
              data. <br />
              Method: Platform-reported sales / platform-reported spend vs. (your revenue * platform's share) /
              actual spend. <br />
              Result: Facebook reports 4.2x ROAS, but your data only supports 2.5x correlation. The 1.7x gap is
              attribution bias. <br />
              <em>Implication:</em> Platform reports are inflated. Use your own data, not theirs.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Test 4: Synergy/Halo Check (Testing Layer 4 — Cross-Channel)</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              Does Search performance correlate more strongly with Search spend, or with TV spend? <br />
              Method: Regression of Search revenue on Search spend + TV spend. Compare coefficients. <br />
              Result: TV spend coefficient is +0.35; Search spend coefficient is +0.28. TV "enables" Search. <br />
              <em>Implication:</em> Cutting TV will hurt Search more than you expect. Don't optimize channels in
              isolation.
            </p>
          </div>

          <p style={{ marginTop: "20px" }}>
            <strong>Key Insight:</strong> These four tests take 1-2 weeks. A full MMM model takes 2-3 months.
            These tests tell you which layer matters most, so you can <strong>focus your modeling effort on the
            right problem.</strong>
          </p>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Data Perspective: What We Need (And What We'll Actually Get)</h2>
        <div className="content">
          <p>We are using 3 years of weekly time-series data. But real data is messy. Here's what we need vs. what we'll get:</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Variable Type</th>
                <th>What We Need</th>
                <th>What We Actually Get</th>
                <th>How We Handle It</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Target</strong></td>
                <td>Weekly revenue (consistent definition)</td>
                <td>Revenue = (Sales - Returns) + (Wholesale - Chargebacks) [messy]</td>
                <td>Use a consistent revenue definition; test sensitivity to different definitions</td>
              </tr>
              <tr>
                <td><strong>TV Spend</strong></td>
                <td>Exact dollars spent each week</td>
                <td>GRPs (Gross Rating Points) — not dollars. Conversion requires assumptions about CPM.</td>
                <td>Use GRPs directly; they're more stable. Normalize across markets.</td>
              </tr>
              <tr>
                <td><strong>Digital Spend</strong></td>
                <td>Spend data you control</td>
                <td>Platform-reported spend has lookback windows, attribution windows, reconciliation delays</td>
                <td>Use actual spend from your bank statements, not platform reports</td>
              </tr>
              <tr>
                <td><strong>Controls</strong></td>
                <td>Price, competitor spend, seasonality</td>
                <td>Price changes mid-week; competitor spend is estimated; seasonality has outliers (holidays, supply shocks)</td>
                <td>Dummy-code holidays; use competitor spends from Nielsen; lag price to reflect consumer impact</td>
              </tr>
              <tr>
                <td><strong>External</strong></td>
                <td>Weather, economic index</td>
                <td>Weather is local, not national. Economic index lags 2-3 weeks. Both are noisy.</td>
                <td>Use weighted-average temperature across top 10 markets; use lagged econ index</td>
              </tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Data Quality Issues (Transparent):</strong>
            <ul>
              <li>
                <strong>Reconciliation lag:</strong> Facebook spend reconciles 2 weeks after the campaign runs.
                We use preliminary data and adjust later.
              </li>
              <li>
                <strong>Attribution window mismatch:</strong> Facebook uses a 28-day window; Google uses 30 days.
                We normalize to a 30-day window.
              </li>
              <li>
                <strong>Cannibalization:</strong> We don't have household-level data to know if Facebook and
                Search customers are the same person. We assume some overlap (~20% based on industry benchmarks)
                and test sensitivity.
              </li>
              <li>
                <strong>Out-of-model factors:</strong> PR events, product launches, influencer campaigns aren't
                in our dataset. We'll see unexplained variance, which we'll flag.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. Analytical Approach: Why Not Just Build an MMM?</h2>
        <div className="content">
          <p>
            This is the critical question a CFO will ask: <em>"Why do we need multiple tests? Why not just
            build the model?"</em>
          </p>

          <p style={{ marginTop: "15px" }}>
            <strong>The Problem with "One Big Model":</strong> If you throw all layers into one MMM, you're
            making assumptions about all four simultaneously:
          </p>

          <ul style={{ marginTop: "15px" }}>
            <li>
              "The relationship is S-curved" (assumes saturation is real)
            </li>
            <li>
              "Spend has a 1-week lag" (assumes adstock)
            </li>
            <li>
              "Channels interact multiplicatively" (assumes synergy)
            </li>
            <li>
              "Platform data is unbiased" (assumes no attribution bias)
            </li>
          </ul>

          <p style={{ marginTop: "15px" }}>
            If ANY of these assumptions is wrong, your entire model is wrong. You won't know which one broke it.
          </p>

          <p style={{ marginTop: "15px" }}>
            <strong>The Phased Approach:</strong>
          </p>

          <div className="calculation" style={{ margin: "15px 0" }}>
{`PHASE 1 — Diagnostics (Weeks 1-2):
Run the four tests independently.
Ask: "Which layers are REAL problems?"
Output: Diagnostic report (which layers matter)

PHASE 2 — Causal Inference (Weeks 3-4):
Build a Bayesian Structural Time-Series (BSTS) model.
Why BSTS? It explicitly measures: "What if we had spent $0 on this channel?"
This isolates CAUSAL impact, not just correlation.
Output: True incremental ROAS per channel (not platform-reported ROAS)

PHASE 3 — Optimization (Weeks 5-6):
Given true ROAS and saturation curves, optimize budget allocation.
Run sensitivity analysis: "What if our saturation estimates are off by 20%?"
Output: Recommended budget allocation + confidence interval`}
          </div>

          <p style={{ marginTop: "15px" }}>
            <strong>Why This Matters:</strong> If Phase 1 shows that Layer 3 (adstock) and Layer 4 (synergy) are
            not significant, we don't build complex models for them. We simplify. If Phase 1 shows Layer 1
            (saturation) is the dominant problem, we focus there. This is efficient.
          </p>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Phase 1 Diagnostics: The Results</h2>
        <div className="content">
          <p>
            We ran the four diagnostic tests. Here's what we found and what it means for the business.
          </p>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Test 1 Result: Lag Analysis</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "14px" }}>
              <strong>Finding:</strong> TV has a 1-week lag. Facebook and YouTube have no lag.
            </p>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              <strong>Implication:</strong> We need to account for adstock. But it's not as complex as some MMM
              models assume. Simple 1-week decay is sufficient.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Test 2 Result: Saturation Curve</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "14px" }}>
              <strong>Finding:</strong> Facebook shows clear S-curve saturation above $8M/month. YouTube is still
              linear. TV is slightly S-curved but with a higher saturation point ($15M).
            </p>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              <strong>Implication:</strong> This is the dominant problem. We can't just allocate budget
              proportionally. We need to respect saturation curves. Facebook money is better spent on YouTube.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Test 3 Result: Platform Bias Check</strong>
            <div style={{ margin: "10px 0" }}>
              <p style={{ fontSize: "13px", marginBottom: "8px" }}>
                <strong>Platform-Reported ROAS (Facebook Ads Manager):</strong>
              </p>
              <div style={{ marginLeft: "15px", fontSize: "13px", marginBottom: "10px" }}>
                Facebook reports:
                {` $40M in sales / $10M spend = `}<span className="math-result">4.0x ROAS</span>
              </div>
              <p style={{ fontSize: "13px", marginBottom: "8px" }}>
                <strong>Observed ROAS (From Your Revenue Data):</strong>
              </p>
              <div style={{ marginLeft: "15px", fontSize: "13px", marginBottom: "10px" }}>
                Your data shows: ($25M attributable to FB) / $10M spend =
                {` `}<span className="math-result">2.5x ROAS</span>
              </div>
              <p style={{ fontSize: "13px" }}>
                <strong>The Gap:</strong> 4.0x - 2.5x = 1.5x of inflated credit. This is pure attribution
                bias.
              </p>
            </div>
            <p style={{ marginTop: "12px", marginBottom: "8px", fontSize: "14px" }}>
              <strong>Implication:</strong> Digital platforms are over-crediting their own contributions.
              Facebook's true impact is ~60% of what they report. Use your own data, not theirs.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Test 4 Result: Synergy/Halo Check</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "14px" }}>
              <strong>Finding:</strong> Search revenue increases when TV is running. Specifically:
            </p>
            <div style={{ marginLeft: "15px", fontSize: "13px", margin: "10px 0" }}>
              Search revenue = (0.28 × Search spend) + (0.35 × TV spend)
              <br />
              TV has a stronger coefficient than Search spend itself.
            </div>
            <p style={{ marginTop: "12px", marginBottom: "8px", fontSize: "14px" }}>
              <strong>Implication:</strong> TV "primes" the audience. If we cut TV, Search will underperform.
              Channels are not independent. Optimize them jointly.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Phase 2: Causal Inference (True Incremental ROAS)</h2>
        <div className="content">
          <p>
            Now that we know <strong>Layer 1 (Saturation) and Layer 2 (Attribution Bias) are the real
            problems</strong>, we build a targeted causal model. Not a bloated MMM that tries to estimate
            everything. A BSTS (Bayesian Structural Time-Series) model.
          </p>

          <p style={{ marginTop: "15px" }}>
            <strong>What BSTS Does:</strong> It answers the question: <em>"What would revenue have been if we
            had spent $0 on Facebook for the past 3 years?"</em> This is the counterfactual. The difference
            between actual revenue and counterfactual revenue is the causal impact.
          </p>

          <div className="calculation" style={{ margin: "15px 0" }}>
{`BSTS Model Results (True Causal ROAS):

Channel: Facebook
Reported ROAS (Platform):         4.0x
Observed Correlation ROAS:        2.5x
Causal ROAS (BSTS):               2.0x
↑ This is the REAL number

Channel: YouTube
Reported ROAS (Platform):         3.0x
Observed Correlation ROAS:        3.0x
Causal ROAS (BSTS):               3.2x
↑ YouTube is actually BETTER than reported

Channel: TV
Reported ROAS (Industry bench):   1.8x (often ignored)
Observed Correlation ROAS:        3.5x
Causal ROAS (BSTS):               5.8x
↑ TV is the BEST performer, but invisible to digital attribution

Channel: Search
Reported ROAS (Platform):         5.0x
Observed Correlation ROAS:        4.2x
Causal ROAS (BSTS):               2.8x
↑ High correlation, but much of it is driven by TV priming
`}
          </div>

          <p style={{ marginTop: "15px" }}>
            <strong>Key Insight:</strong> True causal ROAS flips the conventional wisdom:
          </p>

          <table className="data-table" style={{ marginTop: "15px" }}>
            <thead>
              <tr>
                <th>Channel</th>
                <th>Platform Says</th>
                <th>We Measure</th>
                <th>Reality (BSTS)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Facebook</td>
                <td>Hero (4.0x)</td>
                <td>Good (2.5x)</td>
                <td><strong>Saturated (2.0x)</strong></td>
              </tr>
              <tr>
                <td>YouTube</td>
                <td>Good (3.0x)</td>
                <td>Good (3.0x)</td>
                <td><strong>Best digital (3.2x)</strong></td>
              </tr>
              <tr>
                <td>TV</td>
                <td>Weak (1.8x)</td>
                <td>Strong (3.5x)</td>
                <td><strong>Best overall (5.8x)</strong></td>
              </tr>
              <tr>
                <td>Search</td>
                <td>Hero (5.0x)</td>
                <td>Strong (4.2x)</td>
                <td><strong>Assisted, not driven (2.8x)</strong></td>
              </tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>The Shocking Finding:</strong> TV is 2.9x more efficient than Facebook, but because TV
            doesn't generate "last clicks," it's been systematically underfunded. Meanwhile, Facebook takes credit
            for sales that TV enabled.
          </div>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Phase 3: Budget Optimization (Marginal Returns Drive Allocation)</h2>
        <div className="content">
          <p>
            Now we know the true ROAS per channel. But <strong>allocation isn't just about average ROAS — it's
            about MARGINAL ROAS.</strong> This is where most analyses fail.
          </p>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>The Marginal vs. Average Confusion:</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              <strong>Average ROAS:</strong> "Facebook generates $2 for every $1 spent" (across all $10M)
              <br />
              <strong>Marginal ROAS:</strong> "The next $1 I spend on Facebook generates $0.50" (because it's
              saturated)
              <br />
              <br />
              <strong>Correct decision rule:</strong> Allocate incremental dollars to the channel with the
              highest marginal return, not average return.
            </p>
          </div>

          <div className="calculation" style={{ margin: "15px 0" }}>
{`Current Budget Allocation:
Facebook:  $10M | Avg ROAS: 2.0x | Marginal ROAS: 0.5x
YouTube:   $5M  | Avg ROAS: 3.2x | Marginal ROAS: 3.0x
TV:        $15M | Avg ROAS: 5.8x | Marginal ROAS: 5.0x
Search:    $8M  | Avg ROAS: 2.8x | Marginal ROAS: 2.0x

Total Current Spend: $38M
Total Current Revenue Generated: $156M

SCENARIO 1 — Conservative Reallocation (-$3M from Facebook, +$3M to YouTube):
New Allocation: Facebook $7M, YouTube $8M, TV $15M, Search $8M
Lost from Facebook: $3M × 0.5 mROAS = $1.5M
Gained in YouTube: $3M × 3.0 mROAS = $9M
Net Impact: +$7.5M revenue

SCENARIO 2 — Target Reallocation (-$5M from Facebook, +$3M YouTube, +$2M TV):
New Allocation: Facebook $5M, YouTube $8M, TV $17M, Search $8M
Lost from Facebook: $5M × 0.5 mROAS = $2.5M
Gained in YouTube: $3M × 3.0 mROAS = $9M
Gained in TV: $2M × 5.0 mROAS = $10M
Net Impact: +$16.5M revenue

SCENARIO 3 — Aggressive Reallocation (-$8M from Facebook, +$4M YouTube, +$4M TV):
New Allocation: Facebook $2M, YouTube $9M, TV $19M, Search $8M
Lost from Facebook: $8M × 0.5 mROAS = $4M
Gained in YouTube: $4M × 3.0 mROAS = $12M
Gained in TV: $4M × 5.0 mROAS = $20M
Net Impact: +$28M revenue
(But risk: removes brand presence entirely from Facebook)
`}
          </div>

          <p style={{ marginTop: "15px" }}>
            <strong>Recommendation: Target Scenario</strong>
          </p>
          <p>
            Reallocate $5M from over-saturated Facebook to under-saturated YouTube ($3M) and TV ($2M).
          </p>
          <p style={{ marginTop: "15px", marginBottom: "15px" }}>
            <strong>Expected Outcome:</strong>
          </p>
          <div style={{ marginLeft: "15px" }}>
            <div style={{ marginBottom: "10px" }}>
              Current Total Revenue: $156M
            </div>
            <div>
              New Total Revenue: $156M + $16.5M ={" "}
              <span className="math-result">$172.5M</span> (+10.6% uplift with same total spend)
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. Findings & Insights</h2>
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
                  <td>Digital channels are most efficient</td>
                  <td>Digital ROAS: 3.5-5.0x</td>
                  <td><strong>TV is 5.8x; digital digital is 2.0-3.2x</strong></td>
                </tr>
                <tr>
                  <td>Search is the best performer</td>
                  <td>Search drives the most revenue</td>
                  <td><strong>Search is "assisted" by TV; standalone ROAS is only 2.8x</strong></td>
                </tr>
                <tr>
                  <td>More Facebook spend is good</td>
                  <td>Budget should increase</td>
                  <td><strong>Facebook is saturated above $8M; marginal return is only 0.5x</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul style={{ marginTop: "20px" }}>
            <li>
              <strong>The Attribution Bias Discovery:</strong> Digital platforms systematically over-credit
              their own contributions by 60%. This isn't malice — it's the inherent limitation of last-click
              attribution. Platforms can only see the last click. They can't see the TV ad that primed the
              customer.
            </li>
            <li>
              <strong>The Synergy Finding:</strong> TV and Search are partners, not competitors. When TV is
              running, Search converts 25% better. This means the marketing team (TV) and the digital team
              (Search) are actually on the same side. Their incentives should align.
            </li>
            <li>
              <strong>The Saturation Insight:</strong> Diminishing returns aren't a bug in the data — they're a
              feature of advertising. The first dollars spent reach the most responsive audience. Later dollars
              reach the less responsive audience. This is predictable and should be baked into budget allocation.
            </li>
            <li>
              <strong>The Finance Implication:</strong> The $20M budget cut threat was based on flawed
              measurement. With true causal attribution, we can show Finance that marketing is actually
              performing well — TV especially. A reallocation (not a cut) will increase revenue by $16.5M.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 10 ── */}
      <section>
        <h2>10. Recommendations & Business Decision-Making</h2>
        <div className="content">
          <p><strong>Immediate Actions (Weeks 1-4):</strong></p>
          <ul>
            <li>
              <strong>Stop using "Last-Click ROAS" as a KPI.</strong> Replace it with "Incremental ROAS"
              derived from the BSTS model. This aligns incentives. The digital team is no longer motivated to
              game the last-click metric.
            </li>
            <li>
              <strong>Reallocate $5M from Facebook to YouTube + TV.</strong> This is a budget shift, not a cut.
              Same total spend, higher total revenue.
            </li>
            <li>
              <strong>Implement a Holdout Test.</strong> Turn off all marketing in one city for 2-4 weeks. This
              gives you a "counterfactual" to validate the BSTS results. If the holdout city loses $2M in
              revenue from $500K spend, your mROAS estimates are right.
            </li>
          </ul>

          <p style={{ marginTop: "20px" }}>
            <strong>Medium-Term (Months 2-6):</strong>
          </p>
          <ul>
            <li>
              <strong>Move to a "Fluid Budget" model.</strong> Instead of fixed annual budgets, allocate monthly
              based on marginal ROI curves. As saturation changes, budgets shift automatically. This is dynamic
              optimization.
            </li>
            <li>
              <strong>Implement "Unified Measurement."</strong> Combine BSTS (strategic, long-term) with
              cohort-based attribution (tactical, short-term). Use causal MMM for budget allocation; use
              cohort analysis for campaign-level diagnostics.
            </li>
          </ul>

          <p style={{ marginTop: "20px" }}>
            <strong>Long-Term (6+ Months):</strong>
          </p>
          <ul>
            <li>
              <strong>Build an "Attribution Reconciliation" process.</strong> Monthly: compare platform-reported
              ROAS to your BSTS estimates. Track the gap. If it widens, investigate why. This keeps platforms
              honest.
            </li>
            <li>
              <strong>Expand the model to other KPIs.</strong> We optimized for revenue. What about margin?
              What about customer lifetime value? A $1 of TV revenue might drive higher-margin repeat purchases
              than a $1 of Search revenue.
            </li>
          </ul>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>The CMO's Decision:</strong>
            <ol>
              <li>
                <strong>Approval:</strong> Proceed with $5M reallocation from Facebook to YouTube + TV. Expected
                uplift: $16.5M revenue on same spend.
              </li>
              <li>
                <strong>Pilot Holdout:</strong> Run holdout test in Boston market for 3 weeks. If results match
                BSTS predictions (within 10%), roll out the model to all future budget decisions.
              </li>
              <li>
                <strong>Stakeholder Alignment:</strong> Present findings to Finance. The message: "Marketing is
                strong (5.8x ROI on TV). The measurement was wrong. Reallocation will prove it."
              </li>
              <li>
                <strong>Team Incentives:</strong> Change digital team KPI from "Last-Click ROAS" to "Incremental
                ROAS." This removes the gaming incentive and aligns them with Finance.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ── SECTION 11 ── */}
      <section>
        <h2>11. Professional Analyst Mindset: Why This Approach Works</h2>
        <div className="content">
          <p>
            <strong>The Senior Perspective:</strong> Digital platforms are incentivized to show you high ROI.
            A senior analyst is naturally skeptical. They know that <strong>"Correlation is not Incremental."</strong>{" "}
            Just because someone clicked an ad and bought doesn't mean the ad <em>caused</em> the purchase.
          </p>

          <div className="highlight-box">
            <strong>Why Layered Diagnostics Beat One Big Model:</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              Beginners build one MMM model and trust it. Seniors build diagnostic tests first. Why? Because
              if the model is wrong, you need to know which layer broke. Diagnostics tell you:
            </p>
            <ul style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              <li>Is saturation real? (Layer 1)</li>
              <li>Is attribution biased? (Layer 2)</li>
              <li>Is there a memory effect? (Layer 3)</li>
              <li>Are there synergies? (Layer 4)</li>
            </ul>
            <p style={{ marginTop: "8px", fontSize: "13px" }}>
              Once you know which layers matter, your model is automatically better because you're only
              modeling what's real.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>The Marginal Return Insight:</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              Most marketers optimize for average ROAS. Economists optimize for marginal ROAS. The difference
              is the difference between "good" and "correct." If Facebook's average ROAS is 2.0x but marginal
              ROAS is 0.5x, the next dollar should go to a different channel. This is basic optimization.
              Surprisingly, most companies don't do it.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Interview-Ready Insight:</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              If asked "How would you optimize a marketing budget?" in an interview, the winning answer is:
            </p>
            <p style={{ marginTop: "8px", fontSize: "13px", fontStyle: "italic" }}>
              "First, I'd diagnose the layers of the problem: saturation, attribution bias, memory effects, and
              synergies. I'd test each independently. Then, I'd use causal inference (BSTS, not correlation) to
              measure true impact. Finally, I'd allocate incrementally to maximize marginal returns, not average
              returns. This is systems thinking, not just analytics."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Case08;
