const Case02 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 02</span>
        <h1>The Digital Lending Dilemma</h1>
        <div className="case-meta">Industry: Banking / FinTech &bull; Level: Advanced</div>
      </header>

      {/* ─── SECTION 1: BUSINESS BACKGROUND ─── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>Nexus Bank</strong> is a mid-sized commercial bank ($8B in assets, 2.1M customers)
            that launched <strong>NexusGo</strong> in Q1 2024 — a mobile-only digital lending product
            targeting the 45M underbanked adults in the U.S. Their strategic goal: capture 5% of the
            $300B "unbanked/underbanked" personal loan market within 3 years, a segment traditional
            banks have ignored because applicants lack FICO scores.
          </p>
          <p>
            NexusGo competes directly with fintechs like Possible Finance, Dave, and SoFi's
            small-dollar product. Their differentiator is instant approval (under 3 minutes) via
            automated risk assessments — decisive against traditional banks (2–5 business days) but
            a risk-engineering nightmare. Speed without proper risk controls is a recipe for
            catastrophic losses.
          </p>
          <div className="highlight-box">
            <strong>Stakeholders and What They Actually Care About:</strong>
            <table className="data-table" style={{marginTop: '12px'}}>
              <thead>
                <tr><th>Stakeholder</th><th>Primary Goal</th><th>Conflict Point</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Chief Risk Officer (CRO)</strong></td>
                  <td>NPL below 5% regulatory ceiling</td>
                  <td>Every approval-rate expansion = more defaults</td>
                </tr>
                <tr>
                  <td><strong>Head of Digital Products</strong></td>
                  <td>70%+ approval rate to hit growth targets</td>
                  <td>Tight credit criteria kills user acquisition and app store ratings</td>
                </tr>
                <tr>
                  <td><strong>Chief Compliance Officer (CCO)</strong></td>
                  <td>ECOA / fair lending compliance</td>
                  <td>Alternative data may encode demographic bias invisible to model builders</td>
                </tr>
                <tr>
                  <td><strong>Fraud Operations Manager</strong></td>
                  <td>Eliminate synthetic identity fraud rings</td>
                  <td>Instant approval design is structurally attractive to organized fraud</td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '12px'}}>
              <strong>Triggering Event:</strong> NexusGo received a Federal Reserve "Matter
              Requiring Attention" (MRA) letter — a formal regulatory warning that their portfolio
              NPL of <strong>7.2%</strong> exceeds the 5% consumer lending ceiling. They have{' '}
              <strong>90 days to demonstrate corrective action</strong> before the Fed escalates to
              a Consent Order, which could include a freeze on new originations. Estimated revenue
              at risk: $48M in Year 1 origination fees alone.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: BUSINESS PROBLEM ─── */}
      <section>
        <h2>2. Business Problem</h2>
        <div className="content">
          <p>
            NexusGo is fighting two simultaneous battles — each requiring a completely different
            analytical solution:
          </p>
          <ul>
            <li>
              <strong>Problem A — The "Thin-File" Blind Spot:</strong> Traditional scoring models
              reject 60% of applicants due to no credit history. Of those rejected, internal analysis
              suggests 40% are actually creditworthy — representing $120M in forgone annual loan
              originations. The wrong response is to reject fewer people. The right response is to
              build better models that separate the creditworthy from the uncreditworthy within the
              no-history segment.
            </li>
            <li>
              <strong>Problem B — Sophisticated Fraud:</strong> Instant approvals have attracted
              organized fraud rings using synthetic identities (real name + fake SSN) to take out
              hundreds of $500 loans simultaneously across different devices. Current fraud
              detection catches only 65% of these attacks — meaning 35% of synthetic identity
              loans are approved and never repaid.
            </li>
            <li>
              <strong>The Compounding Effect:</strong> Both problems hit the same KPI — portfolio
              NPL. Thin-file approval NPL: 12%. Fraud-driven NPL: 8%. Combined portfolio NPL:{' '}
              <strong>7.2%</strong>, already 2.2 points above the regulatory ceiling.
            </li>
          </ul>
          <div className="highlight-box">
            <strong>What the Business Stated vs. What the Data Reveals:</strong>
            <table className="data-table" style={{marginTop: '12px'}}>
              <thead>
                <tr><th>Level</th><th>Stated Problem</th><th>Actual Root Cause</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Surface</td>
                  <td>"Our NPL is too high"</td>
                  <td>Two distinct failure modes with entirely different root causes</td>
                </tr>
                <tr>
                  <td>Layer 1</td>
                  <td>"We're approving bad borrowers"</td>
                  <td>We're approving synthetic identities who never intend to repay</td>
                </tr>
                <tr>
                  <td>Layer 2</td>
                  <td>"Our credit model is too loose"</td>
                  <td>Our thin-file NPL of 12% is a data signal gap — we lack the right predictors</td>
                </tr>
                <tr>
                  <td>Root Cause</td>
                  <td>"Just reject more applicants"</td>
                  <td>We need TWO separate models: one for fraud (intent), one for credit (ability)</td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '12px'}}>
              <strong>Critical separation:</strong> "Thin-file defaults" happen because of genuine
              inability to repay. "Fraud defaults" happen because of intent never to repay. You
              cannot solve fraud with better credit models, and you cannot solve creditworthiness
              with better fraud detection. Conflating them produces a model that does both tasks
              worse.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: ANALYTICS OBJECTIVE ─── */}
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <p>
            The analytical mission is to <strong>decompose and resolve</strong> the NPL crisis
            without sacrificing growth. This is not a "build a better model" problem — it is a
            strategic risk architecture problem.
          </p>
          <div className="highlight-box">
            <strong>Key Questions Management Needs Answered:</strong>
            <ol>
              <li>
                What behavioral signals during the application session reliably distinguish
                fraudsters (intent: never repay) from legitimate thin-file applicants?
              </li>
              <li>
                Can mobile usage patterns and alternative payment data predict repayment
                probability for applicants without FICO scores — with sufficient accuracy to lend
                profitably?
              </li>
              <li>
                What loan amount ceiling minimizes Exposure at Default (EAD) for new thin-file
                borrowers without destroying unit economics?
              </li>
              <li>
                How do we ensure our alternative data variables do not create disparate impact on
                protected classes under ECOA — including proxy variables we haven't yet identified?
              </li>
            </ol>
          </div>
          <p style={{marginTop: '16px'}}>
            <strong>Analytical Approach:</strong> We need a{' '}
            <strong>two-layer sequential Hybrid Risk Engine.</strong> Layer 1 (Fraud Detection)
            filters applications using behavioral and device signals before any credit assessment.
            Layer 2 (Alternative Credit Scoring) evaluates genuine creditworthiness of fraud-clean
            applicants using non-FICO signals. Layers must be sequential — running credit scoring
            on fraudulent applications wastes compute and injects noise into the credit model.
          </p>
          <p>
            <strong>Definition of Success:</strong> Reduce portfolio NPL from 7.2% to below 5.0%
            within 90 days. Increase approval rate from 40% to 65%. Deliver the Fed a written
            remediation plan by Day 30. Net new annual revenue impact: +$78M.
          </p>
        </div>
      </section>

      {/* ─── SECTION 4: FRAMEWORK SELECTION (NEW) ─── */}
      <section>
        <h2>4. Framework Selection &amp; Rationale</h2>
        <div className="content">
          <p>
            <strong>This is where a senior analyst earns their fee.</strong> Every framework
            choice shapes what data you collect, what questions you ask, and what you present to
            the board. The wrong framework doesn't just produce a worse answer — it produces the
            wrong answer with confidence.
          </p>

          <div className="highlight-box">
            <strong>Frameworks Selected and Why:</strong>
            <table className="data-table" style={{marginTop: '12px'}}>
              <thead>
                <tr><th>Framework</th><th>Applied Where</th><th>Why This One Fits</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>MECE Decomposition</strong></td>
                  <td>Problem structuring</td>
                  <td>
                    NPL has two mutually exclusive root causes: fraud and credit risk. Treating
                    them as one problem produces solutions that address neither. MECE forces us to
                    solve them separately, with separate models, separate data, and separate KPIs.
                  </td>
                </tr>
                <tr>
                  <td><strong>Pareto (80/20)</strong></td>
                  <td>Intervention prioritization</td>
                  <td>
                    Fraud affects ~800 loans/month at $500/loan with near-zero recovery. Credit
                    defaults affect ~5,000 loans but are partially recoverable via collections.
                    Fraud has higher per-loan loss impact and lower engineering cost to fix. Fix
                    fraud first — highest ROI per engineering hour.
                  </td>
                </tr>
                <tr>
                  <td><strong>Expected Value (EV) Optimization</strong></td>
                  <td>Approval threshold setting</td>
                  <td>
                    Thresholds are set to maximize EV = P(repay) × revenue − P(default) × loan
                    amount, not to maximize AUC. AUC measures model discrimination; EV measures
                    business outcome. These are not the same thing. A model with AUC 0.90 that
                    approves only 20% of applicants may generate less profit than a model with AUC
                    0.75 that safely approves 60%.
                  </td>
                </tr>
                <tr>
                  <td><strong>Logistic Regression</strong></td>
                  <td>Alternative Credit Score (Layer 2)</td>
                  <td>
                    Chosen over XGBoost / deep learning for three reasons: (1) interpretable —
                    FCRA Section 615(a) requires specific adverse action reasons when declining
                    credit; (2) stable with 18 months of outcome data; (3) accepted by bank
                    examiners under OCC SR 11-7 model risk management guidance. Explainability
                    here is not a preference — it is a legal constraint.
                  </td>
                </tr>
                <tr>
                  <td><strong>Rule-Based Expert System</strong></td>
                  <td>Fraud Detection (Layer 1)</td>
                  <td>
                    Chosen over an ML fraud model because: (1) rules deploy in 2 weeks vs. 3
                    months for a trained model; (2) patterns are deterministic enough to codify
                    (copy-paste SSN = synthetic identity signal with ~68% accuracy); (3) fully
                    explainable for legal hold investigations; (4) we have a 90-day regulatory
                    deadline — speed of deployment trumps marginal accuracy gains.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Frameworks Considered and Rejected:</strong>
            <table className="data-table" style={{marginTop: '12px'}}>
              <thead>
                <tr><th>Framework</th><th>Why Rejected</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>XGBoost for credit scoring</strong></td>
                  <td>
                    Estimated AUC gain of +0.06 over logistic regression. Not worth the trade-off:
                    cannot produce the feature-level adverse action notice required by FCRA 615(a).
                    A model that predicts better but cannot be explained is legally unusable in U.S.
                    consumer credit.
                  </td>
                </tr>
                <tr>
                  <td><strong>Single unified model (fraud + credit combined)</strong></td>
                  <td>
                    Fraud signals (copy-paste, application speed) are noise for the credit model,
                    which needs behavioral stability signals. Combining them produces a model that
                    does both tasks worse. Violates MECE — fraud and creditworthiness are distinct
                    dimensions of risk.
                  </td>
                </tr>
                <tr>
                  <td><strong>Deep Learning / Neural Networks</strong></td>
                  <td>
                    Requires far more historical outcome data than 18 months provides. High risk of
                    overfitting on the thin-file sample. OCC examiners are skeptical of black-box
                    models in consumer credit — creates model risk management overhead
                    disproportionate to any accuracy gain.
                  </td>
                </tr>
                <tr>
                  <td><strong>Blanket rate-based pricing (charge more, approve all)</strong></td>
                  <td>
                    Proposed by the Head of Digital Products: approve 70% at 25% interest rate to
                    "price in the risk." Rejected by the CRO. High-interest loans to borderline
                    borrowers have a well-documented failure mode: the interest burden itself
                    triggers default. Risk-based pricing works. Predatory pricing accelerates losses.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{marginTop: '16px'}}>
            <strong>The Core Principle:</strong> In regulated industries, the best model is the
            simplest one that solves the problem and can be explained to a regulator. Interpretability
            is not a design preference — it is a constraint that eliminates entire categories of
            modeling approaches before you write a single line of code.
          </p>
        </div>
      </section>

      {/* ─── SECTION 5: DATA PERSPECTIVE ─── */}
      <section>
        <h2>5. Data Perspective</h2>
        <div className="content">
          <p>We merge internal application data with four categories of alternative data:</p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Data Category</th>
                <th>Key Variables</th>
                <th>Indicator Type</th>
                <th>Predictive Power</th>
                <th>Bias Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Mobile Stability</strong></td>
                <td>Phone number age (months), device replacement frequency, SIM card changes.</td>
                <td>Leading</td>
                <td>High — stability predicts future behavior</td>
                <td>Low</td>
              </tr>
              <tr>
                <td><strong>Behavioral / Session</strong></td>
                <td>Application completion time, copy-paste usage, field correction count, time of day.</td>
                <td>Leading (real-time)</td>
                <td>Critical — fraud signals, deterministic</td>
                <td>Very Low</td>
              </tr>
              <tr>
                <td><strong>Alternative Transactional</strong></td>
                <td>Utility payment consistency (%), rent payment history, mobile top-up regularity.</td>
                <td>Lagging (30–60 day lag)</td>
                <td>High — repayment discipline proxy</td>
                <td>Medium (geography correlation)</td>
              </tr>
              <tr>
                <td><strong>Digital Footprint</strong></td>
                <td>App categories (banking/professional vs. gaming only), e-commerce history.</td>
                <td>Lagging</td>
                <td>Medium — behavioral maturity proxy</td>
                <td>Medium (age/income proxy — audit required)</td>
              </tr>
              <tr>
                <td><strong>Psychometric</strong></td>
                <td>10-question financial discipline self-assessment, validated against outcomes.</td>
                <td>Leading</td>
                <td>Medium — willingness-to-pay signal</td>
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
                <th>App 1AM–4AM</th>
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
              <li>
                <strong>Missing — Income Verification:</strong> NexusGo relies on self-reported
                income. This is a major gap; stated income is 30–40% overstated on average in
                digital lending applications. We treat this as a known gap and compensate with
                payment-behavior proxies (utility consistency, rent history).
              </li>
              <li>
                <strong>Lagging Indicator Risk:</strong> Utility payment data from third-party
                providers is often 30–60 days stale. A recently unemployed applicant may still
                show "good" payment history. This is why utility consistency is weighted at 40%
                in the model but not the only signal.
              </li>
              <li>
                <strong>Bias Risk — Device Price:</strong> Device price (a seemingly neutral
                variable) correlates with income, which correlates with race/neighborhood. Including
                it could constitute <em>disparate impact discrimination</em> under ECOA — even if
                unintentional. Removed from feature set before model training.
              </li>
              <li>
                <strong>Digital Footprint Decay:</strong> App usage patterns are lagging and
                volatile — a borrower who deleted a banking app 3 months ago still scores "low
                financial app usage." Footprint features get a lower weight (10%) to account for
                this staleness risk.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: STEP-BY-STEP ANALYTICAL THINKING ─── */}
      <section>
        <h2>6. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <p>
            The two-layer approach means we solve fraud first, then creditworthiness.{' '}
            <strong>Never mix these two problems.</strong> A fraud model trained on creditworthiness
            signals will miss fraudsters who have good utility bill histories. A credit model
            contaminated with fraud signals will misfire on legitimate low-income applicants.
          </p>
          <ol>
            <li>
              <strong>Step 1 — Decompose the NPL Composition:</strong> Start with a diagnostic
              before building anything. Understand what percentage of bad loans are fraud vs.
              genuine credit failures — and whether the mix is stable over time.
              <div className="calculation" style={{margin: '15px 0'}}>
{`Portfolio NPL Decomposition:
Total NPL: 7.2% of $200M portfolio = $14.4M in bad loans
────────────────────────────────────────────────────────
Source A — Fraud:
  ~800 fraudulent loans × $500 avg = $400K/month in losses
  NPL contribution: 8% on approved loans in fraud segment

Source B — Thin-File Credit Defaults:
  ~5,000 thin-file loans × $600 avg × 12% = $360K/month
  NPL contribution: 12% on expanded thin-file approvals

Action: These require TWO separate models, not one.
Solving fraud will not reduce the 12% thin-file default rate.
Tightening credit criteria will not stop synthetic identity rings.`}
              </div>
              <div className="calculation" style={{margin: '15px 0'}}>
{`PARETO ANALYSIS — Which Problem Has Higher ROI to Fix First?
────────────────────────────────────────────────────────────────
Among the two identified NPL sources ($760K/month combined loss):
  Fraud:     $400K/month from   800 loans = 53% of addressable losses
  Thin-file: $360K/month from 5,000 loans = 47% of addressable losses

Per-Loan Loss Impact:
  Fraud:     $400K ÷   800 loans        = $500 loss per fraudulent loan
  Thin-file: $360K ÷ 5,000 loans × 12% = $72  loss per defaulted loan
  Ratio: each fraudulent loan causes `}<span className="math-result">6.9x more damage</span>{` than a thin-file default.

Intervention Cost:
  Fix fraud (rules engine):  2 weeks engineering ≈ $20K one-time
  Fix credit model (ACS):    3 months data science ≈ $400K one-time

Month-1 ROI per dollar spent:
  Fraud fix: $400K/month saved ÷ $20K cost = `}<span className="math-result">20x in Month 1</span>
{`  ACS build: $360K/month saved ÷ $400K cost = `}<span className="math-result">0.9x (breaks even Month 2)</span>
{`
Pareto conclusion: Fix fraud first.
  – ~2.5% of approved loans are fraudulent yet cause 53% of addressable NPL losses
  – Fraud fix is 20x cheaper and deploys 6x faster than the ACS model
  – Fraud records contaminate the ACS training set — clearing fraud first
    improves the credit model's signal quality`}
              </div>
            </li>

            <li>
              <strong>Step 2 — Build the Fraud Detection Layer First (Rules Engine):</strong>{' '}
              Before any credit assessment, filter fraudulent applications using session metadata.
              Deploy as rules, not ML — we can go live in 2 weeks and must demonstrate progress
              to the Fed within 30 days.
              <ul>
                <li>
                  <strong>Rule 1 — Speed Check:</strong> Application completed in under 15
                  seconds on a 15-field form = bot or script. Flag for rejection. Legitimate
                  median completion time: 145 seconds.
                </li>
                <li>
                  <strong>Rule 2 — Copy-Paste Detection:</strong> SSN, date-of-birth, and
                  address fields filled via copy-paste = synthetic identity signal. Real users
                  type manually or use device auto-fill. Fraudsters paste from pre-built
                  identity databases.
                </li>
                <li>
                  <strong>Rule 3 — Velocity Check:</strong> Applications between 1AM–4AM with
                  3+ attempts from the same device = organized fraud ring pattern. Fraud rings
                  operate overnight to exploit reduced human review staffing.
                </li>
                <li>
                  <strong>Rule 4 — Device Fingerprint:</strong> Same IMEI hash used for 2+
                  applications within 24 hours = block immediately. Build a 48-hour appeal
                  process for legitimate users who factory-reset their phone.
                </li>
              </ul>
            </li>

            <li>
              <strong>Step 3 — Build the Alternative Credit Score (ACS):</strong> For applicants
              who pass the fraud layer, score creditworthiness using logistic regression. Feature
              weights are derived from the regression on 18 months of historical outcome data —
              not assigned by intuition.
              <div className="calculation" style={{margin: '15px 0'}}>
{`Alternative Credit Score (ACS) Feature Weights:
─────────────────────────────────────────────────────────
Feature                      │ Weight │ Odds Ratio │ ECOA Safe?
─────────────────────────────┼────────┼────────────┼──────────
Utility Payment Consistency  │  40%   │   2.8x     │   Yes
Phone Number Age (years)     │  20%   │   1.9x     │   Yes
Rent Payment History         │  20%   │   2.1x     │   Yes
Psychometric Score (1–100)   │  10%   │   1.4x     │   Yes
Digital Footprint Score      │  10%   │   1.3x     │  Audited*
─────────────────────────────────────────────────────────
*Digital Footprint weight reduced from 15% to 10% after
ECOA audit found 12% lower approval rates for applicants
over 55. Re-audited at 10% — parity within 4/5ths threshold.

Note: Odds Ratio interpretation:
2.8x means applicants with high utility consistency are
2.8x more likely to repay vs. those with low consistency,
all else held equal.`}
              </div>
            </li>

            <li>
              <strong>Step 4 — Map ACS Scores to Risk Tiers:</strong> Translate scores into
              approval decisions with different loan limits and interest rates. Tier boundaries
              are set by EV optimization, not by round numbers.
              <div className="calculation" style={{margin: '15px 0'}}>
{`ACS Score    │ Tier    │ Decision            │ Max Loan │ Rate │ Expected NPL
─────────────┼─────────┼─────────────────────┼──────────┼──────┼─────────────
75 – 100     │ Green   │ Auto-approve         │ $2,000   │ 12%  │ ~3%
50 – 74      │ Yellow  │ Approve with limits  │ $300     │ 18%  │ ~6%
25 – 49      │ Orange  │ Request extra docs   │ $100     │ 22%  │ ~10%
0 – 24       │ Red     │ Decline              │ —        │ —    │ N/A`}
              </div>
            </li>

            <li>
              <strong>Step 5 — ECOA Disparate Impact Audit:</strong> Before deployment, run a
              formal disparate impact analysis across all protected classes. This is not optional
              — it is the difference between a model and a lawsuit.
              <ul>
                <li>
                  Apply the "4/5ths Rule" (80% Rule): if any protected class has an approval
                  rate less than 80% of the highest-approved group, that feature must be removed
                  or adjusted.
                </li>
                <li>
                  <em>Finding:</em> "Digital Footprint Score" showed 12% lower approval rates
                  for applicants over 55. Feature weight reduced from 15% to 10%, re-audited,
                  now within parity threshold.
                </li>
                <li>
                  <em>Finding:</em> "Device price" showed significant disparate impact on low-income
                  applicants in high-poverty zip codes. Removed entirely from the feature set.
                </li>
              </ul>
            </li>

            <li>
              <strong>Step 6 — Model Validation on Holdout Set:</strong> Validate on a 20%
              holdout before any production deployment. Translate model metrics into business
              language for stakeholders.
              <ul>
                <li>Fraud Layer AUC: 0.94 — excellent discrimination</li>
                <li>ACS Credit Model AUC: 0.78 — acceptable for thin-file population (industry
                  benchmark: 0.72–0.80)</li>
                <li>
                  <em>Translate for the CRO:</em> "Our credit model correctly identifies 82 out
                  of 100 future defaulters before they default. We will still approve 18 defaulters
                  per 100 — that cost is priced into our interest rate and EV model."
                </li>
                <li>
                  <em>Never present AUC to a banker.</em> They do not know what it means. Present
                  the hit rate in plain English.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      {/* ─── SECTION 7: CALCULATION & SIMULATION ─── */}
      <section>
        <h2>7. Calculation &amp; Simulation</h2>
        <div className="content">
          <p><strong>Calculation 1: Expected Value (EV) Optimization — How Tier Thresholds Are Set</strong></p>
          <div className="calculation">
{`EV Formula: EV(approve) = P(repay) × interest_revenue − P(default) × loan_amount
            EV(decline) = $0
Decision rule: Approve if EV(approve) > $0; otherwise decline.
─────────────────────────────────────────────────────────────────────
Green Tier (ACS 75–100, Expected NPL ~3%):
  EV = 0.97 × ($2,000 × 12%) − 0.03 × $2,000
     = 0.97 × $240 − $60
     = $232.80 − $60.00 = `}<span className="math-result">+$172.80 per loan → APPROVE</span>
{`
Yellow Tier (ACS 50–74, Expected NPL ~6%):
  EV = 0.94 × ($300 × 18%) − 0.06 × $300
     = 0.94 × $54 − $18
     = $50.76 − $18.00 = `}<span className="math-result">+$32.76 per loan → APPROVE (thin margin → low limit)</span>
{`
Red Tier (ACS 0–24, Expected NPL ~20%):
  EV = 0.80 × ($1,000 × 15%) − 0.20 × $1,000
     = 0.80 × $150 − $200
     = $120 − $200 = `}<span className="math-result">−$80.00 per loan → DECLINE</span>
{`
Why ACS threshold is set at 25 — not at the AUC-maximizing point:
Below ACS 25, EV is negative at any feasible interest rate.
Approving these loans destroys value regardless of pricing.
The math, not intuition, sets the boundary.`}
          </div>

          <p style={{marginTop: '20px'}}><strong>Calculation 2: Full P&amp;L Impact — Hybrid Model vs. Traditional Model</strong></p>
          <div className="calculation">
{`Portfolio Size: 50,000 Applicants/month
Avg Loan Amount: $1,000 | Interest Rate: 15% ($150 revenue/good loan)
─────────────────────────────────────────────────────────────────────
MODEL A: Traditional Strict (Current State)
─────────────────────────────────────────────────────────────────────
Approval Rate: 40% → 20,000 loans approved
Default Rate: 2% → 400 defaults
Revenue: 19,600 × $150                               = $2,940,000
Loss: 400 × $1,000                                   = -$400,000
Model Build/Maintenance:                             = $0 (existing)
Net Monthly Profit:                                  `}<span className="math-result">= $2,540,000</span>
{`
─────────────────────────────────────────────────────────────────────
MODEL B: Hybrid Model (Proposed)
─────────────────────────────────────────────────────────────────────
Fraud Layer catches 92% of fraud (vs. 65% current):
Fraud losses reduced: saves ~$140,000/month

Credit Layer expands approvals:
Approval Rate: 65% → 32,500 loans approved
Default Rate: 4.5% → 1,463 defaults

Revenue: 31,037 × $150                               = $4,655,550
Loss: 1,463 × $1,000                                 = -$1,463,000
Fraud savings:                                       = +$140,000
Model cost (data partnerships + engineering):        = -$80,000/mo
Net Monthly Profit:                                  `}<span className="math-result">= $3,252,550</span>
{`
─────────────────────────────────────────────────────────────────────
NET GAIN vs. Traditional:                            `}<span className="math-result">+$712,550/month (+28%)</span>
{`
SENSITIVITY ANALYSIS:
  If fraud detection only improves to 80% (not 92%):
  Fraud savings = $60,000. Net Monthly: $3,172,550 → `}<span className="math-result">Still +$632K better</span>
{`  If thin-file default rate stabilizes at 6% (via Micro-Lending Ladder):
  Loss reduced by $225K/month. Net Monthly: $3,477,550 → `}<span className="math-result">+$937K better</span>
{`
BREAK-EVEN:
  One-time model build cost: $400,000
  Recovery period: `}<span className="math-result">Month 1 alone</span>
{`  3-Year NPV (10% discount rate): `}<span className="math-result">~$24.3M incremental profit</span>
          </div>

          <p style={{marginTop: '20px'}}><strong>Customer Lifetime Value (CLV) — The Strategic Multiplier:</strong></p>
          <div className="calculation">
{`CLV Calculation for a Thin-File Borrower Who Repays Successfully:

Year 1 (Micro-Lending Ladder):
  3 × $300 loans repaid on time
  Interest revenue: $54 | Default probability: 6%
  Expected Year 1 contribution: `}<span className="math-result">$108</span>
{`
Year 2 (Graduated to Green Tier after 12-month history):
  2 × $2,000 loans at 12%
  Interest revenue: $480 | Default probability: 3%
  Expected Year 2 contribution: `}<span className="math-result">$451</span>
{`
Year 3 (Cross-sell to personal loan / credit card):
  $5,000 personal loan at 9.5%
  Expected Year 3 contribution: `}<span className="math-result">$437</span>
{`
3-Year CLV of a successfully graduated thin-file customer: `}<span className="math-result">~$996</span>
{`
The cost to acquire them (subsidized micro-loan risk): $18
CLV-to-CAC ratio: `}<span className="math-result">55x</span>
          </div>
          <p>
            <em>Key Interpretation:</em> Even though the default rate more than doubles (2% →
            4.5%), the massive volume expansion and fraud savings create a net positive that{' '}
            <strong>dwarfs the increased credit losses.</strong> The deeper strategic insight is
            the CLV pipeline: thin-file borrowers who repay become the most loyal, highest-margin
            customers in the portfolio by Year 3. The $18 acquisition cost vs. $996 CLV is a
            customer-acquisition funnel that traditional banks are leaving entirely on the table.
          </p>
        </div>
      </section>

      {/* ─── SECTION 8: FINDINGS & INSIGHTS ─── */}
      <section>
        <h2>8. Findings &amp; Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>What We Expected vs. What We Found:</strong>
            <table className="data-table" style={{marginTop: '15px'}}>
              <thead>
                <tr>
                  <th>Assumption Going In</th>
                  <th>Expected</th>
                  <th>Actual Finding</th>
                  <th>Confidence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Best fraud signal</td>
                  <td>Application content (fake names, addresses)</td>
                  <td><strong>Behavioral speed and copy-paste patterns are 3x more reliable than content checks</strong></td>
                  <td>High — validated on 18-month holdout</td>
                </tr>
                <tr>
                  <td>Best creditworthiness proxy</td>
                  <td>Stated income level</td>
                  <td><strong>Utility payment consistency outperforms stated income (2.8x vs. 1.6x odds ratio)</strong></td>
                  <td>High — consistent across cohorts</td>
                </tr>
                <tr>
                  <td>Fraud timing</td>
                  <td>Random throughout the day</td>
                  <td><strong>1AM–4AM applications have 3x higher fraud rate — fraud rings exploit overnight staffing gaps</strong></td>
                  <td>High — consistent across 6 months of data</td>
                </tr>
                <tr>
                  <td>Device price as income proxy</td>
                  <td>Neutral variable, low bias risk</td>
                  <td><strong>Statistically significant disparate impact on low-income zip codes — removed from model</strong></td>
                  <td>High — confirmed by ECOA audit</td>
                </tr>
                <tr>
                  <td>Model performance post-graduation</td>
                  <td>Thin-file borrowers remain higher risk long-term</td>
                  <td><strong>Directionally, thin-file borrowers who repay 3+ times show lower default rates than the general population — needs 12 more months to confirm</strong></td>
                  <td>Medium — early data only, directional</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul style={{marginTop: '20px'}}>
            <li>
              <strong>The "Midnight Application" Pattern:</strong> Loans applied between 1AM–4AM
              have a 3x higher fraud rate. Fraud rings operate in overnight shifts to exploit
              reduced human review staffing. This single time-window rule eliminates 31% of all
              fraud applications before any other check runs.
            </li>
            <li>
              <strong>The "Copy-Paste" Signal:</strong> Fraudsters copy-paste SSNs and addresses
              from pre-built synthetic identity databases. Legitimate users type manually or use
              device auto-fill — a fundamentally different physical interaction pattern. This
              single behavioral signal catches 68% of synthetic identity fraud with a false
              positive rate under 2%.
            </li>
            <li>
              <strong>Counter-Intuitive Finding — Electricity Bill Beats Income:</strong> For
              thin-file applicants, a 12-month utility payment consistency score is a stronger
              predictor of loan repayment than self-reported income level (odds ratio 2.8x vs.
              1.6x). The signal is financial discipline — the habit of paying monthly obligations
              on time regardless of income level — not income level itself.
            </li>
            <li>
              <strong>The Regulatory Blind Spot:</strong> "Device price" showed statistically
              significant disparate impact on low-income applicants in high-poverty zip codes.
              This was invisible to the model builders until the ECOA audit ran. This is the
              exact failure mode that creates fair lending violations: a proxy variable that
              <em> feels</em> neutral but encodes the protected characteristic it appears to avoid.
            </li>
          </ul>
        </div>
      </section>

      {/* ─── SECTION 9: RECOMMENDATIONS (THREE TIERS) ─── */}
      <section>
        <h2>9. Recommendations</h2>
        <div className="content">

          <p><strong>Tier 1 — Immediate Actions (Days 1–30): Low Effort, High Impact</strong></p>
          <ul>
            <li>
              <strong>Action:</strong> Deploy Behavioral Fraud Rules Engine immediately.<br />
              <strong>Why:</strong> Session metadata is already collected — this requires zero new
              data partnerships.<br />
              <strong>Owner:</strong> Fraud Operations Manager + Platform Engineering<br />
              <strong>Expected Impact:</strong> Reduce fraud NPL from 8% to ~3% within 60 days.
              Monthly savings: ~$140,000. ROI: 7x in Month 1.<br />
              <strong>Key Risk:</strong> Rules are static — fraud rings will adapt within 3–6
              months. Plan ML fraud model as a follow-on (Tier 2).
            </li>
            <li>
              <strong>Action:</strong> Implement Device Fingerprinting (IMEI hash deduplication).<br />
              <strong>Owner:</strong> Platform Engineering<br />
              <strong>Expected Impact:</strong> Block same-device multi-application rings,
              estimated to catch 25% of remaining fraud not caught by session rules.<br />
              <strong>Key Risk:</strong> Legitimate users who factory-reset their phone will be
              flagged. Build a 48-hour manual appeal process before launch.
            </li>
            <li>
              <strong>Action:</strong> Deliver written Fed remediation plan by Day 30 with NPL
              trajectory and model deployment schedule.<br />
              <strong>Owner:</strong> CRO + CCO<br />
              <strong>Expected Impact:</strong> Forestalls escalation from MRA to Consent Order.
              Buys time for full hybrid model deployment.<br />
              <strong>Key Risk:</strong> Regulators will want leading indicators (fraud detection
              rate, daily NPL trend) not just a plan. Instrument the dashboard before Day 30.
            </li>
          </ul>

          <p><strong>Tier 2 — Medium-Term Initiatives (Months 2–6): Require Resourcing</strong></p>
          <ul>
            <li>
              <strong>Action:</strong> Deploy Alternative Credit Score (ACS) model and
              Micro-Lending Ladder product tier.<br />
              <strong>Owner:</strong> Head of Digital Products + Data Science + Risk<br />
              <strong>Expected Impact:</strong> Increase approval rate from 40% to 65%. Reduce
              thin-file NPL from 12% to ~6% by Month 6 via capped exposure ($100–$300 initial
              limits).<br />
              <strong>Key Risk:</strong> Yellow-tier borrowers ($300 loans at 18%) have low
              absolute dollar return. Unit economics only work at scale — needs 5,000+
              Yellow-tier loans/month to be worth the servicing cost.
            </li>
            <li>
              <strong>Action:</strong> Integrate rent payment data via third-party provider
              (e.g., Rental Kharma, RentTrack).<br />
              <strong>Owner:</strong> Data Science + Vendor Management<br />
              <strong>Expected Impact:</strong> Improve ACS model AUC from 0.78 to estimated
              0.83, translating to ~2% lower default rate on Yellow-tier loans.<br />
              <strong>Key Risk:</strong> $15,000/month data licensing. Payback: ~3 months.
              Verify data freshness SLA before signing — stale rent data is worse than no
              rent data.
            </li>
            <li>
              <strong>Action:</strong> Implement ongoing ECOA monitoring as an always-on
              automated audit.<br />
              <strong>Owner:</strong> CCO + Data Science<br />
              <strong>Expected Impact:</strong> Catches disparate impact drift as the model
              evolves and population mix shifts. Estimated cost: 1 FTE data analyst.<br />
              <strong>Key Risk:</strong> Fair lending violations accumulate silently — by the
              time a regulator flags it, there are 12–24 months of adverse decisions to
              remediate. Treat this as insurance, not overhead.
            </li>
          </ul>

          <p><strong>Tier 3 — Strategic Moves (Months 6–24): Transformational</strong></p>
          <ul>
            <li>
              <strong>Action:</strong> Launch Credit Graduation Program — thin-file borrowers
              who repay successfully for 12 months are automatically referred to NexusBank
              full-product suite (personal loans, credit cards, savings accounts).<br />
              <strong>Owner:</strong> Head of Digital Products + Retail Banking<br />
              <strong>Expected Impact:</strong> 3-year CLV of a graduated thin-file customer ~$996
              vs. $18 acquisition cost (CLV-to-CAC: 55x). This transforms a regulatory headache
              into the most profitable customer acquisition channel in the bank.<br />
              <strong>Key Risk:</strong> Retail Banking may not be operationally ready to absorb
              a surge of newly-qualified customers from the thin-file pipeline. Align capacity
              before the graduation program goes live.
            </li>
            <li>
              <strong>Action:</strong> Replace rule-based fraud layer with an ML fraud model
              trained on 12+ months of labeled outcomes from the rules engine.<br />
              <strong>Owner:</strong> Data Science + Fraud Operations<br />
              <strong>Expected Impact:</strong> Rules engine AUC ~0.88; ML model estimated
              0.93–0.95. Fraud rings adapt to static rules within 6 months — ML model
              re-trains monthly.<br />
              <strong>Key Risk:</strong> ML fraud models can produce false positives that
              disproportionately affect certain demographics. Run ECOA audit on fraud model
              outputs before replacing the rules engine.
            </li>
          </ul>

          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Priority Matrix (Impact × Effort):</strong>
            <table className="data-table">
              <thead>
                <tr><th>Action</th><th>Impact</th><th>Effort</th><th>Owner</th><th>Priority</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Behavioral Fraud Rules Engine</td>
                  <td>Very High</td><td>Low</td>
                  <td>Fraud Ops + Engineering</td>
                  <td>🔴 Do First</td>
                </tr>
                <tr>
                  <td>Device Fingerprinting</td>
                  <td>High</td><td>Low</td>
                  <td>Platform Engineering</td>
                  <td>🔴 Do First</td>
                </tr>
                <tr>
                  <td>Fed Remediation Plan</td>
                  <td>Critical (regulatory)</td><td>Low</td>
                  <td>CRO + CCO</td>
                  <td>🔴 Day 30</td>
                </tr>
                <tr>
                  <td>ACS Model + Micro-Lending Ladder</td>
                  <td>High</td><td>Medium</td>
                  <td>Data Science + Product</td>
                  <td>🟡 Month 2</td>
                </tr>
                <tr>
                  <td>Rent Data Partnership</td>
                  <td>Medium</td><td>Medium</td>
                  <td>Data Science + Vendor</td>
                  <td>🟡 Month 3</td>
                </tr>
                <tr>
                  <td>ECOA Always-On Audit</td>
                  <td>High (risk)</td><td>Low</td>
                  <td>CCO + Data Science</td>
                  <td>🔴 Always-on</td>
                </tr>
                <tr>
                  <td>Credit Graduation Program</td>
                  <td>Transformational</td><td>High</td>
                  <td>Product + Retail Banking</td>
                  <td>🟢 Month 12+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: BUSINESS DECISION-MAKING ─── */}
      <section>
        <h2>10. Business Decision-Making</h2>
        <div className="content">
          <p>The CRO adopts a phased <strong>Tiered Approval System</strong>:</p>
          <ol>
            <li>
              <strong>Green Tier (ACS 75–100):</strong> Strong alternative signals, no prior
              credit history. Instant approval up to $2,000 at 12%. This segment represents the
              "Discovered Diamond" — creditworthy people the market has been systematically
              ignoring. Estimated 15,000 applicants/month qualify.
            </li>
            <li>
              <strong>Yellow Tier (ACS 50–74):</strong> Moderate signals. Approved up to $300
              at 18% with mandatory Micro-Lending Ladder enrollment. The first loan is
              essentially a creditworthiness test. If repaid on time for 3 months, limit
              doubles automatically.
            </li>
            <li>
              <strong>Red Tier (ACS below 50 or fraud flag):</strong> Decline — but with a
              structured "path to approval." Tell the applicant: "Return in 6 months after 6
              consecutive utility payments." This reduces regulatory complaints, eliminates
              adverse action letters that feel arbitrary, and plants a re-application pipeline
              for Month 7.
            </li>
          </ol>

          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Monitoring Dashboard — Weekly KPIs:</strong>
            <table className="data-table">
              <thead>
                <tr>
                  <th>KPI</th><th>Current</th><th>Target (90 days)</th><th>Alert Threshold</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Portfolio NPL Rate</td>
                  <td>7.2%</td>
                  <td>&lt;5.0%</td>
                  <td>&gt;5.5% → escalate to CRO immediately</td>
                </tr>
                <tr>
                  <td>Fraud Detection Rate</td>
                  <td>65%</td>
                  <td>&gt;90%</td>
                  <td>&lt;85% → fraud model review within 48 hours</td>
                </tr>
                <tr>
                  <td>Total Approval Rate</td>
                  <td>40%</td>
                  <td>65%</td>
                  <td>&lt;55% → product review (overly conservative ACS threshold?)</td>
                </tr>
                <tr>
                  <td>Yellow Tier 90-day Repayment</td>
                  <td>N/A (new tier)</td>
                  <td>&gt;88%</td>
                  <td>&lt;82% → tighten ACS Yellow threshold by 5 points</td>
                </tr>
                <tr>
                  <td>ECOA Approval Rate Parity</td>
                  <td>Not tracked</td>
                  <td>Within 80% across all protected groups</td>
                  <td>Any group below 80% → legal review within 24 hours</td>
                </tr>
                <tr>
                  <td>Fraud Rules False Positive Rate</td>
                  <td>Not tracked</td>
                  <td>&lt;2%</td>
                  <td>&gt;3% → rules calibration review (legitimate users being blocked)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{marginTop: '15px'}}>
            <strong>Alternative Strategy Considered and Rejected:</strong> The Head of Digital
            Products proposed a blanket 70% approval rate with a 25% interest rate to "price in
            the risk." The CRO rejected this for a well-documented reason: high-interest loans to
            borderline borrowers create a debt spiral — the interest burden itself triggers default.
            The 25% rate that was supposed to compensate for 15% default rates actually causes the
            18% default rates. Risk-based pricing works when the spread is modest. Predatory
            pricing accelerates losses.
          </p>
        </div>
      </section>

      {/* ─── SECTION 11: WAR ROOM NOTES ─── */}
      <section>
        <h2>11. Senior Practitioner's War Room Notes</h2>
        <div className="content">

          <div className="highlight-box">
            <strong>The Pattern I've Seen Across 20+ Similar Engagements:</strong>
            <p style={{marginTop: '8px'}}>
              Every bank that builds a thin-file digital lending product goes through the same
              three phases: (1) launch with optimism, approve generously, NPL spikes; (2) panic
              and tighten criteria, approval rate collapses, growth stalls; (3) realize they need
              better data, not different thresholds. NexusGo is in Phase 2. The engagement is
              about helping them skip to Phase 3 without losing 18 months.
            </p>
          </div>

          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>The Most Common Mistake Companies Make With This Type of Problem:</strong>
            <p style={{marginTop: '8px'}}>
              They treat fraud and credit risk as a single NPL problem and build a single model to
              solve it. The model then overweights fraud signals (because fraud generates large,
              clean loss events) and underweights the subtler credit quality signals. The result:
              you get slightly better fraud detection and no improvement in credit risk, while
              rejecting a growing number of legitimate thin-file applicants. I have seen this
              mistake cost a mid-market bank $40M in forgone revenue over two years.
            </p>
          </div>

          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>What Junior Analysts Always Miss:</strong>
            <p style={{marginTop: '8px'}}>
              The ECOA audit. Every junior analyst builds the model, validates the AUC, presents
              the results — and ships. The ECOA audit is an afterthought or not done at all. Then
              12 months later the CCO gets a letter from the CFPB, and suddenly the entire model
              has to be rebuilt from scratch under a consent decree timeline with regulators
              watching every decision. The ECOA audit is not the last step. It runs in parallel
              with model development and gates deployment.
            </p>
          </div>

          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>What a Great Analyst Does Differently:</strong>
            <p style={{marginTop: '8px'}}>
              They translate every model metric into a business outcome before presenting it.
              AUC 0.78 means nothing to a CRO. "We correctly identify 82 out of 100 future
              defaulters before they default — and the 18 we miss cost us $X per month, which
              is already priced into the interest rate at this volume" — that is a business
              conversation. The best analysts never present a metric without its business
              interpretation in the same breath.
            </p>
          </div>

          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>A Hard-Won Lesson No Textbook Teaches:</strong>
            <p style={{marginTop: '8px'}}>
              Fraud rings are faster than your model update cycle. Any static rules engine has a
              shelf life of 3–6 months before the rings adapt. The fraud operations team I worked
              with at a major fintech tracked the time from rule deployment to the first detected
              adaptation — average: 11 weeks. The recommendation to add an ML fraud model in
              Tier 3 is not a nice-to-have. It is a business continuity requirement. Build the
              rules engine to buy time. Budget the ML model before the rules engine launches.
            </p>
          </div>

          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Interview-Ready Insight:</strong>
            <p style={{marginTop: '8px'}}>
              If asked "How would you build a credit model for unbanked customers?" the winning
              answer structure is:{' '}
              <em>"First, separate the fraud problem from the credit problem — they require different
              data, different models, and different deployment timelines. Second, identify
              alternative data sources that are predictive, accessible, and legally compliant under
              ECOA. Third, set approval thresholds by maximizing risk-adjusted profit (Expected
              Value), not by minimizing defaults or maximizing AUC. Fourth, run an ECOA disparate
              impact audit on every feature before deployment — not after. And fifth, build the
              thin-file product as a customer acquisition funnel, not just a risk management
              exercise — the CLV of a successfully graduated thin-file borrower is often higher
              than the average FICO-scored customer."</em>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Case02;
