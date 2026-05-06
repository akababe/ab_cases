const Case02 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 02</span>
        <h1>The Digital Lending Dilemma</h1>
        <div className="case-meta">Industry: Banking / FinTech &bull; Level: Advanced</div>
      </header>
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p><strong>Nexus Bank</strong> is a mid-sized commercial bank ($8B in assets) that recently launched <strong>NexusGo</strong>, a mobile-only digital lending app targeting Gen Z and Millennials. Their strategic goal: capture 5% of the $300B "unbanked/underbanked" personal loan market within 3 years — a segment traditional banks have ignored because applicants lack FICO scores.</p>
          <p>NexusGo offers instant loan approvals (under 3 minutes) via automated risk assessments. This speed is their key competitive advantage over traditional banks (which take 2–5 business days). However, speed without proper risk controls is a recipe for catastrophic losses.</p>
          <div className="highlight-box">
            <strong>Stakeholders:</strong> Chief Risk Officer (CRO), Head of Digital Products, Fraud Operations Manager, Chief Compliance Officer (CCO).<br />
            <strong>Context:</strong> To stay competitive, NexusGo must approve loans for people without FICO scores while keeping the Non-Performing Loan (NPL) ratio below 5% — the regulatory ceiling set by the Federal Reserve for consumer lending portfolios.<br />
            <strong>Stakeholder Tension:</strong> The Head of Digital Products wants to approve 70%+ of applicants to hit growth targets. The CRO wants to keep defaults below 5%. The CCO warns that any proxy variable correlated with race or gender could trigger ECOA (Equal Credit Opportunity Act) violations. These three imperatives create direct conflict and shape every analytical decision.
          </div>
        </div>
      </section>
      <section>
        <h2>2. Business Problem</h2>
        <div className="content">
          <p>NexusGo is fighting two simultaneous battles — each requiring a different analytical solution:</p>
          <ul>
            <li><strong>Problem A — The "Thin-File" Blind Spot:</strong> Traditional scoring models reject 60% of applicants due to no credit history. Of those rejected, internal analysis suggests 40% are actually creditworthy — representing $120M in forgone annual loan originations.</li>
            <li><strong>Problem B — Sophisticated Fraud:</strong> Instant approvals have attracted organized fraud rings using synthetic identities (real name + fake SSN) to take out hundreds of $500 loans simultaneously across different devices. Current fraud detection catches only 65% of these attacks — meaning 35% of synthetic identity loans are approved and never repaid.</li>
            <li><strong>The Compounding Effect:</strong> Both problems hit the same metric — the NPL ratio. Current NPL for thin-file approvals: 12%. Current NPL from fraud: 8%. Combined NPL across the portfolio: <strong>7.2%</strong>, which already exceeds the 5% regulatory ceiling. The bank faces a regulatory warning letter if not corrected within 90 days.</li>
            <li><strong>Root Cause Separation:</strong> This is critical. "Thin-file defaults" happen because of genuine inability to repay. "Fraud defaults" happen due to intent never to repay. The intervention for each is completely different — you cannot solve fraud with better credit models, or solve creditworthiness with better fraud detection.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <p>We need a <strong>two-layer Hybrid Risk Engine</strong>: Layer 1 filters fraud, Layer 2 assesses creditworthiness for remaining applicants using Alternative Data.</p>
          <div className="highlight-box">
            <strong>Key Questions:</strong>
            <ol>
              <li>What behavioral signals during the application session distinguish fraudsters from legitimate applicants?</li>
              <li>Can mobile usage patterns (phone age, app categories, data spend) predict repayment probability for thin-file applicants?</li>
              <li>What loan amount ceiling minimizes "Exposure at Default" for new thin-file borrowers?</li>
              <li>How do we ensure our alternative data variables do not create disparate impact on protected classes (ECOA compliance)?</li>
            </ol>
            <strong>Target Outcome:</strong> Reduce portfolio NPL from 7.2% to below 5%, while increasing approval rate from 40% to 65%, resulting in +$78M in net new annual loan revenue.
          </div>
        </div>
      </section>
      <section>
        <h2>4. Data Perspective</h2>
        <div className="content">
          <p>We merge internal application data with four categories of alternative data:</p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Data Category</th>
                <th>Key Variables</th>
                <th>Predictive Power</th>
                <th>Bias Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Mobile Stability</strong></td>
                <td>Phone number age (months), device replacement frequency, SIM card changes.</td>
                <td>High — stability signals</td>
                <td>Low</td>
              </tr>
              <tr>
                <td><strong>Behavioral / Session</strong></td>
                <td>Application completion time, copy-paste usage, field correction count, time of day.</td>
                <td>Critical — fraud signals</td>
                <td>Very Low</td>
              </tr>
              <tr>
                <td><strong>Alternative Transactional</strong></td>
                <td>Utility payment consistency (%), rent payment history, mobile top-up regularity.</td>
                <td>High — repayment ability</td>
                <td>Medium (correlates with geography)</td>
              </tr>
              <tr>
                <td><strong>Digital Footprint</strong></td>
                <td>App categories used (banking, professional vs. gaming only), e-commerce purchase history.</td>
                <td>Medium — behavioral maturity</td>
                <td>Medium (review for proxy bias)</td>
              </tr>
              <tr>
                <td><strong>Psychometric</strong></td>
                <td>Self-assessment quiz on financial discipline (10 questions, validated against outcomes).</td>
                <td>Medium — willingness to pay</td>
                <td>Low</td>
              </tr>
            </tbody>
          </table>
          <p style={{marginTop: '20px'}}><strong>Sample Applicant Data (8 cases):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Phone Age</th>
                <th>Utility Consistency</th>
                <th>Form Speed</th>
                <th>Copy-Paste?</th>
                <th>App Time (2AM–4AM)</th>
                <th>Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>A001</td><td>5.2 yrs</td><td>94%</td><td>180s</td><td>No</td><td>No</td><td>Good Loan</td></tr>
              <tr><td>A002</td><td>0.3 yrs</td><td>45%</td><td>8s</td><td>Yes</td><td>Yes</td><td><strong>Fraud</strong></td></tr>
              <tr><td>A003</td><td>2.1 yrs</td><td>78%</td><td>95s</td><td>No</td><td>No</td><td>Default</td></tr>
              <tr><td>A004</td><td>7.8 yrs</td><td>99%</td><td>210s</td><td>No</td><td>No</td><td>Good Loan</td></tr>
              <tr><td>A005</td><td>0.1 yrs</td><td>20%</td><td>6s</td><td>Yes</td><td>Yes</td><td><strong>Fraud</strong></td></tr>
              <tr><td>A006</td><td>3.4 yrs</td><td>85%</td><td>140s</td><td>No</td><td>No</td><td>Good Loan</td></tr>
              <tr><td>A007</td><td>1.5 yrs</td><td>55%</td><td>70s</td><td>No</td><td>No</td><td>Default</td></tr>
              <tr><td>A008</td><td>4.9 yrs</td><td>91%</td><td>165s</td><td>No</td><td>No</td><td>Good Loan</td></tr>
            </tbody>
          </table>
          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Data Limitations &amp; Hidden Variables:</strong>
            <ul>
              <li><strong>Missing:</strong> Income verification — NexusGo relies on self-reported income. This is a major gap; stated income is 30–40% overstated on average in digital lending applications.</li>
              <li><strong>Bias Risk:</strong> "Device price" correlates with income, which correlates with race/neighborhood. Using device price as a feature could constitute <em>disparate impact discrimination</em> under ECOA — even if unintentional.</li>
              <li><strong>Data Freshness:</strong> Utility payment data from third-party providers is often 30–60 days stale — meaning a recently unemployed applicant may still show "good" payment history.</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>5. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <p>The two-layer approach means we solve fraud first, then creditworthiness. <strong>Never mix these two problems.</strong></p>
          <ol>
            <li><strong>Step 1 — Separate the Two Problems Explicitly:</strong> Run a diagnostic to understand the NPL composition:
              <div className="calculation" style={{margin: '15px 0'}}>
{`Portfolio NPL Decomposition:
Total NPL: 7.2% of $200M portfolio = $14.4M in bad loans
Source A — Fraud: 8% NPL on approved loans
  Fraud accounts: ~800 loans × $500 avg = $400K/month losses
Source B — Thin-File Defaults: 12% NPL on expanded approvals
  Thin-file accounts: 5,000 loans × $600 avg × 12% = $360K/month
Action: These require TWO separate models, not one.`}
              </div>
            </li>
            <li><strong>Step 2 — Build the Fraud Layer First (Session Behavioral Analysis):</strong> Before any credit assessment, filter fraudulent applications using session metadata:
              <ul>
                <li><strong>Rule 1 — Speed Check:</strong> Application completed in under 15 seconds on a 15-field form = bot or script. Flag for rejection. (Legitimate median: 145 seconds.)</li>
                <li><strong>Rule 2 — Copy-Paste Detection:</strong> SSN, date-of-birth, and address fields filled via copy-paste = synthetic identity signal. Real users type or use device auto-fill.</li>
                <li><strong>Rule 3 — Time-of-Day Velocity:</strong> Applications between 1AM–4AM with 3+ same-device attempts = organized fraud ring pattern.</li>
                <li><strong>Rule 4 — Device Fingerprint:</strong> Same device fingerprint (IMEI hash) used for 2+ applications within 24 hours = block immediately.</li>
              </ul>
            </li>
            <li><strong>Step 3 — Derive the Composite Stability Score:</strong> For applicants who pass the fraud layer, build an Alternative Credit Score. Feature weights are derived from logistic regression on 18 months of historical outcome data:
              <div className="calculation" style={{margin: '15px 0'}}>
{`Alternative Credit Score (ACS) Components:
─────────────────────────────────────────────────
Feature                    │ Weight │ Odds Ratio
───────────────────────────┼────────┼───────────
Utility Payment Consistency│  40%   │   2.8x
Phone Number Age (yrs)     │  20%   │   1.9x
Rent Payment History       │  20%   │   2.1x
Psychometric Score (1-100) │  10%   │   1.4x
Digital Footprint Score    │  10%   │   1.3x
─────────────────────────────────────────────────
Note: Weights derived from logistic regression,
NOT assigned arbitrarily. Each variable validated
for predictive power AND bias impact before inclusion.`}
              </div>
            </li>
            <li><strong>Step 4 — Define Risk Tiers with Business Thresholds:</strong> Map ACS scores to approval decisions:
              <div className="calculation" style={{margin: '15px 0'}}>
{`ACS Score    │ Tier   │ Decision          │ Max Loan │ Interest Rate
─────────────┼────────┼───────────────────┼──────────┼──────────────
75–100       │ Green  │ Auto-approve       │ $2,000   │ 12%
50–74        │ Yellow │ Approve w/ limits  │ $300     │ 18%
25–49        │ Orange │ Request extra docs │ $100     │ 22%
0–24         │ Red    │ Decline            │ —        │ —`}
              </div>
            </li>
            <li><strong>Step 5 — ECOA Bias Audit (Non-Negotiable):</strong> Before deployment, run disparate impact analysis:
              <ul>
                <li>Test whether approval rates differ significantly across race, gender, and age groups after controlling for ACS score.</li>
                <li>If any protected class has an approval rate less than 80% of the highest-approved group (the "4/5ths Rule"), that feature must be removed or adjusted.</li>
                <li><em>Finding:</em> "Digital Footprint Score" showed 12% lower approval rates for applicants over 55. Feature weight reduced from 15% to 10% and re-audited.</li>
              </ul>
            </li>
            <li><strong>Step 6 — Model Validation:</strong> Before live deployment, validate on a holdout set (20% of historical data):
              <ul>
                <li>Fraud Layer AUC: 0.94 — excellent discrimination between fraud and legitimate</li>
                <li>ACS Credit Model AUC: 0.78 — acceptable for thin-file population (industry benchmark: 0.72–0.80)</li>
                <li>Translate for stakeholders: "Our model correctly identifies 82 out of 100 future defaulters before they default."</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>
      <section>
        <h2>6. Calculation &amp; Simulation</h2>
        <div className="content">
          <p>Let's simulate the full P&amp;L impact of the Hybrid Model vs. the Traditional Model, including model build cost:</p>
          <div className="calculation">
{`Portfolio Size: 50,000 Applicants/month
Avg Loan Amount: $1,000 | Interest Rate: 15% ($150 revenue/good loan)
─────────────────────────────────────────────────────────────────
MODEL A: Traditional Strict (Current State)
─────────────────────────────────────────────────────────────────
Approval Rate: 40% → 20,000 loans approved
Default Rate: 2% → 400 defaults
Revenue: 19,600 × $150                          = $2,940,000
Loss: 400 × $1,000                              = -$400,000
Model Build/Maintenance:                         = -$0 (existing)
Net Monthly Profit:                              `}<span className="math-result">= $2,540,000</span>
{`
─────────────────────────────────────────────────────────────────
MODEL B: Hybrid Model (Proposed)
─────────────────────────────────────────────────────────────────
Fraud Layer catches 92% of fraud (vs. 65% current):
Fraud losses reduced: saves ~$140,000/month
Credit Layer expands approvals:
Approval Rate: 65% → 32,500 loans approved
Default Rate: 4.5% → 1,463 defaults
Revenue: 31,037 × $150                          = $4,655,550
Loss: 1,463 × $1,000                            = -$1,463,000
Fraud savings:                                  = +$140,000
Model cost (data partnerships + engineering):   = -$80,000/mo
Net Monthly Profit:                             `}<span className="math-result">= $3,252,550</span>
{`
─────────────────────────────────────────────────────────────────
NET GAIN vs. Traditional: `}<span className="math-result">+$712,550/month (+28%)</span>
{`
SENSITIVITY: What if fraud detection only improves to 80%?
Fraud savings reduced to $60,000/month.
Net Monthly Profit: $3,172,550 → Still `}<span className="math-result">+$632,550 better</span>
{`
BREAK-EVEN: Model is profitable from Month 1.
One-time build cost ($400k): recovered in `}<span className="math-result">Month 1 alone</span>
          </div>
          <p><em>Key Interpretation:</em> Even though the default rate more than doubles (2% → 4.5%), the massive volume expansion and fraud savings create a net positive that <strong>dwarfs the increased credit losses.</strong> This is a core senior-analyst insight: risk management is not about minimizing defaults — it's about maximizing <strong>risk-adjusted profit</strong>.</p>
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
                  <td>Fraud signal</td>
                  <td>Application content (fake names, addresses)</td>
                  <td><strong>Application behavior (speed, copy-paste) is 3x more reliable</strong></td>
                </tr>
                <tr>
                  <td>Best creditworthiness proxy</td>
                  <td>Income level</td>
                  <td><strong>Utility payment consistency outperforms stated income</strong></td>
                </tr>
                <tr>
                  <td>Fraud timing</td>
                  <td>Random throughout day</td>
                  <td><strong>1AM–4AM applications have 3x higher fraud rate</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul style={{marginTop: '20px'}}>
            <li><strong>The "Midnight Application" Pattern:</strong> Loans applied between 1AM–4AM have a 3x higher fraud rate. <em>Why?</em> Fraud rings operate in shifts to exploit overnight batch processing windows when human review teams are smallest.</li>
            <li><strong>The "Copy-Paste" Signal:</strong> Fraudsters copy-paste SSNs and addresses from pre-built synthetic identity databases. Legitimate users type manually or use device auto-fill. This single behavioral signal catches 68% of synthetic identity fraud.</li>
            <li><strong>Counter-Intuitive Finding — Electricity Bill Beats Income:</strong> For thin-file applicants, a 12-month electricity bill payment consistency score is a stronger predictor of loan repayment than self-reported income level (odds ratio: 2.8x vs. 1.6x). Paying monthly obligations on time — regardless of income level — is the real signal of financial discipline.</li>
            <li><strong>The Regulatory Blind Spot:</strong> "Device price" (a seemingly neutral variable) showed statistically significant disparate impact on low-income applicants in high-poverty zip codes. Removed from the model before deployment. This would have been invisible without the ECOA audit step.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>8. Recommendations</h2>
        <div className="content">
          <p><strong>Short-Term (Weeks 1–4):</strong></p>
          <ul>
            <li><strong>Deploy Behavioral Fraud Layer immediately.</strong> This requires zero new data partnerships — session metadata is already collected. <br /><strong>Expected Impact:</strong> Reduce fraud NPL from 8% to 3% within 60 days. Monthly savings: ~$140,000. <br /><strong>Cost:</strong> 2 weeks of engineering time ($20,000). <strong>ROI: 7x in Month 1.</strong></li>
            <li><strong>Implement Device Fingerprinting</strong> to block same-device multi-applications. <br /><strong>Expected Impact:</strong> Catch remaining 25% of fraud rings not caught by session rules. <br /><strong>Risk:</strong> Legitimate users who reset their phone may be falsely flagged — build a 48-hour appeal process.</li>
          </ul>
          <p><strong>Long-Term (Months 2–6):</strong></p>
          <ul>
            <li><strong>Deploy Micro-Lending Ladders (Credit Building Track):</strong> Thin-file customers start with a $100 limit. If they repay on time for 3 months, the limit doubles. This minimizes Exposure at Default while building a repayment track record. <br /><strong>Expected Impact:</strong> Reduce thin-file default rate from 12% to 6% by Month 6. <br /><strong>Strategic Benefit:</strong> Creates a pipeline of creditworthy borrowers with 12-month repayment history — eventually bankable at full FICO rates.</li>
            <li><strong>Data Partnership for Rent Payment Data</strong> (e.g., integration with major rental platforms). <br /><strong>Expected Impact:</strong> Improves ACS model AUC from 0.78 to an estimated 0.83. <br /><strong>Cost:</strong> $15,000/month data licensing. <strong>Payback:</strong> ~3 months.</li>
          </ul>
          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Priority Matrix (Impact × Effort):</strong>
            <table className="data-table">
              <thead>
                <tr><th>Action</th><th>Impact</th><th>Effort</th><th>Priority</th></tr>
              </thead>
              <tbody>
                <tr><td>Behavioral Fraud Layer</td><td>Very High</td><td>Low</td><td>🔴 Do First</td></tr>
                <tr><td>Device Fingerprinting</td><td>High</td><td>Low</td><td>🔴 Do First</td></tr>
                <tr><td>Micro-Lending Ladder</td><td>High</td><td>Medium</td><td>🟡 Month 2</td></tr>
                <tr><td>Rent Data Partnership</td><td>Medium</td><td>Medium</td><td>🟡 Month 3</td></tr>
                <tr><td>ECOA Ongoing Audit</td><td>High (risk)</td><td>Low</td><td>🔴 Always-on</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <h2>9. Business Decision-Making</h2>
        <div className="content">
          <p>The CRO adopts a phased <strong>Tiered Approval System</strong>:</p>
          <ol>
            <li><strong>Green Tier (ACS 75–100):</strong> No prior credit history but strong alternative signals. Instant approval up to $2,000 at 12%. This segment is the "Discovered Diamond" — creditworthy people the market has been ignoring.</li>
            <li><strong>Yellow Tier (ACS 50–74):</strong> Moderate signals. Approved up to $300 at 18% with mandatory Micro-Lending Ladder enrollment. The first loan is essentially a creditworthiness test.</li>
            <li><strong>Red Tier (ACS below 50 or fraud flag):</strong> Decline with a clear explanation. <em>Important:</em> Provide declined applicants with a "path to approval" — e.g., "Return in 6 months after 6 consecutive utility payments." This reduces regulatory complaints and builds long-term customer relationships.</li>
          </ol>
          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Monitoring Dashboard — Weekly KPIs:</strong>
            <table className="data-table">
              <thead>
                <tr><th>KPI</th><th>Current</th><th>Target (90 days)</th><th>Alert Threshold</th></tr>
              </thead>
              <tbody>
                <tr><td>Portfolio NPL Rate</td><td>7.2%</td><td>&lt;5.0%</td><td>&gt;5.5% = escalate to CRO</td></tr>
                <tr><td>Fraud Detection Rate</td><td>65%</td><td>&gt;90%</td><td>&lt;85% = model review</td></tr>
                <tr><td>Approval Rate (total)</td><td>40%</td><td>65%</td><td>&lt;55% = product review</td></tr>
                <tr><td>Yellow Tier 90-day Repayment</td><td>N/A (new)</td><td>&gt;88%</td><td>&lt;82% = tighten ACS threshold</td></tr>
                <tr><td>ECOA Approval Rate Parity</td><td>Not tracked</td><td>Within 80% across groups</td><td>Any group below 80% = legal review</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{marginTop: '15px'}}><strong>Alternative Strategy Rejected:</strong> The Head of Digital Products proposed a blanket 70% approval rate with a 25% interest rate to "price in the risk." The CRO rejected this — high-interest loans to borderline borrowers have a well-documented failure mode: the interest burden itself triggers default. Risk-based pricing works; predatory pricing accelerates losses.</p>
        </div>
      </section>
      <section>
        <h2>10. Professional Analyst Mindset</h2>
        <div className="content">
          <p><strong>Senior Perspective:</strong> In banking, analytics isn't just about accuracy (AUC/ROC) — it's about the <strong>Economic Trade-off</strong>. A model that is "too safe" kills the business by rejecting profitable customers. A model that is "too aggressive" kills it with defaults and regulatory penalties. The senior analyst finds the profit-maximizing point within regulatory constraints, not the accuracy-maximizing point in isolation.</p>
          <div className="highlight-box">
            <strong>Key Lesson:</strong> When you lack traditional data, <strong>Proxy Data</strong> (mobile stability, payment behavior) is your best friend. But never forget: (1) fraudsters study your proxies and adapt, and (2) proxies may inadvertently encode demographic bias. The best alternative credit models are the ones that are both <em>predictive</em> and <em>fair</em> — and you need to audit for both simultaneously.
          </div>
          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Common Beginner Mistake:</strong> Beginners optimize for AUC (model accuracy). Seniors optimize for <strong>Expected Net Value (ENV)</strong>:
            <div className="calculation" style={{marginTop: '10px'}}>
{`ENV = P(Good Loan) × Revenue - P(Default) × Loan Amount - Model Cost
A model with AUC = 0.90 that only approves 20% of applicants
may generate LESS profit than a model with AUC = 0.75 that
safely approves 60%.
Always translate model performance into business P&L.
Never present AUC to a banker — they don't know what it means.
Present: "We correctly identify 85 out of 100 future defaulters."`}
            </div>
          </div>
          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Interview-Ready Insight:</strong> If asked "How would you build a credit model for unbanked customers?" the winning answer structure is: <em>"First, separate the fraud problem from the credit problem — they require different data and different models. Second, identify alternative data sources that are predictive, available, and legally compliant. Third, define the approval threshold not by minimizing defaults but by maximizing risk-adjusted profit. Fourth, audit every variable for ECOA disparate impact before deployment. This is not optional — it is the difference between a model and a lawsuit."</em>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Case02;
