const Case07 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 07</span>
        <h1>The 30-Day Revolving Door</h1>
        <div className="case-meta">Industry: Healthcare / Insurance &bull; Level: Advanced</div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>St. Jude's Medical Center</strong> is a 400-bed urban hospital system serving a diverse
            population of 2.1 million in the metro area. In the modern healthcare landscape under <strong>Value-Based
            Care</strong> models, hospitals are no longer paid primarily for volume. Instead, they face financial
            penalties for poor outcomes — particularly readmissions.
          </p>
          <p>
            Under the <strong>Hospital Readmissions Reduction Program (HRRP)</strong>, CMS penalizes hospitals if their
            30-day readmission rates for specific conditions (heart failure, pneumonia, COPD, coronary artery bypass)
            exceed national benchmarks. Every percentage point above benchmark translates to a financial penalty tied
            to hospital reimbursement.
          </p>
          <div className="highlight-box">
            <strong>Stakeholders:</strong> Chief Medical Officer (CMO), VP of Population Health, Financial Controller,
            Chief Nursing Officer (CNO).<br />
            <strong>Context:</strong> St. Jude's is currently 2.3 percentage points ABOVE the national benchmark for
            heart failure readmission. This isn't just a clinical quality issue — it's a financial crisis. The hospital
            is leaving money on the table through penalties and the hospital <strong>cannot afford to penalize itself
            further</strong> given competitive pressure from nearby health systems.<br />
            <strong>Stakeholder Tension:</strong> The CMO wants clinical outcomes improved (patient safety). The CFO
            wants financial penalties eliminated (business sustainability). The CNO is concerned about nursing workload
            (already stretched). All three are correct.
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem</h2>
        <div className="content">
          <p>
            St. Jude's is facing a <strong>"Readmission Penalty Crisis."</strong> The problem isn't unique to St.
            Jude's, but it's acute for them.
          </p>
          <ul>
            <li>
              <strong>Symptom (Quantified):</strong> 18% of discharged heart failure patients are readmitted within 30
              days, compared to the national benchmark of 15.8%.
            </li>
            <li>
              <strong>Scale of Readmissions:</strong> Heart failure alone accounts for 380 discharges per year at St.
              Jude's. At 18% readmit rate, that's 68 readmissions per year — 53 of which should have been prevented
              (vs. benchmark).
            </li>
            <li>
              <strong>Financial Impact (Annual):</strong> Each avoidable readmission costs the hospital $15,000 in
              unreimbursed expenses (CMS doesn't reimburse readmissions within 30 days). Additionally, CMS applies a
              penalty multiplier of ~1.5% of total DRG reimbursement for high readmitter hospitals. Total annual cost:
              <strong>$2.4M in penalties + $795K in unreimbursed readmit costs = $3.195M/year</strong>.
            </li>
            <li>
              <strong>Root Cause Hypothesis:</strong> Poor "Transition of Care." Patients are discharged with complex
              medication regimens, ambiguous follow-up instructions, and no clear safety net. Many patients don't
              understand their medications, don't have scheduled follow-up appointments, and don't know how to
              recognize warning signs.
            </li>
            <li>
              <strong>Current State Inefficiency:</strong> The hospital calls every patient after discharge, but the
              call protocol is one-size-fits-all — 2-minute calls for all patients regardless of risk. This is
              ineffective (doesn't identify high-risk patients proactively) and wasteful (wasted effort on low-risk
              patients).
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <p>
            The goal is to move from <strong>reactive, one-size-fits-all discharge protocols to proactive,
            risk-stratified interventions</strong>. Build a <strong>Readmission Risk Engine (RRE)</strong> to identify
            high-risk patients 24 hours BEFORE discharge and match them to appropriate interventions.
          </p>
          <div className="highlight-box">
            <strong>Key Questions:</strong>
            <ol>
              <li>
                Which clinical, pharmaceutical, and social factors most strongly predict 30-day readmission? (Leading
                vs. lagging indicators)
              </li>
              <li>
                Can we segment patients into actionable risk tiers (High/Medium/Low) with distinct readmission rates,
                enabling targeted interventions?
              </li>
              <li>
                What is the ROI of intensive "pharmacist-led medication reconciliation + home health coordination" for
                the top 15% highest-risk patients?
              </li>
              <li>
                Can we reduce readmissions from 18% to 14% (matching the national benchmark) within 12 months?
              </li>
            </ol>
            <strong>Expected Business Outcome:</strong> Reduce 30-day readmission rate by 4 percentage points (from 18%
            to 14%), eliminating the CMS penalty and generating $2.4M in annual savings through avoided penalties +
            reduced unreimbursed care.
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Data Perspective</h2>
        <div className="content">
          <p>
            We merged Electronic Health Records (EHR), pharmacy data, and social determinants data from the state
            poverty database:
          </p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Data Source</th>
                <th>Key Variables</th>
                <th>Type</th>
                <th>Predictive Insight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Clinical (EHR)</strong></td>
                <td>Diagnosis codes (ICD-10), comorbidities, length of stay, prior admissions (12-mo)</td>
                <td>Structured</td>
                <td>Disease severity &amp; chronicity</td>
              </tr>
              <tr>
                <td><strong>Lab Results</strong></td>
                <td>Sodium levels, hemoglobin, albumin, creatinine (at discharge)</td>
                <td>Continuous</td>
                <td>Acute physiological stability</td>
              </tr>
              <tr>
                <td><strong>Pharmacy</strong></td>
                <td>Number of distinct medications (polypharmacy), drug-drug interactions, adherence flags</td>
                <td>Continuous</td>
                <td>Medication complexity &amp; confusion risk</td>
              </tr>
              <tr>
                <td><strong>Discharge Planning</strong></td>
                <td>Has PCP (primary care physician) appointment scheduled, discharge destination, discharge time</td>
                <td>Binary/Categorical</td>
                <td>Care continuity &amp; follow-up readiness</td>
              </tr>
              <tr>
                <td><strong>Social (SDoH)</strong></td>
                <td>Lives alone, zip code poverty level, transportation access, food security proxy</td>
                <td>Categorical/Proxy</td>
                <td>External barriers to recovery &amp; adherence</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: "20px" }}>
            <strong>Sample Data (10 Heart Failure Patients):</strong>
          </p>
          <p style={{ fontSize: "13px", color: "#555", marginBottom: "8px" }}>
            This table is for pattern illustration only. Each row demonstrates a recognizable risk pattern. The
            aggregate statistics cited in Section 5 (e.g., 35% readmit for polypharmacy ≥12 meds) come from the full
            380-patient cohort analyzed, not these 10 rows.
          </p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Age</th>
                <th>Meds</th>
                <th>Prior Admits (12mo)</th>
                <th>PCP Appt?</th>
                <th>Lives Alone</th>
                <th>Sodium</th>
                <th>30-Day Readmit?</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>P001</td><td>72</td><td>14</td><td>2</td><td>No</td><td>Yes</td><td>129</td><td><strong>Yes</strong></td></tr>
              <tr><td>P002</td><td>58</td><td>8</td><td>0</td><td>Yes</td><td>No</td><td>138</td><td>No</td></tr>
              <tr><td>P003</td><td>81</td><td>16</td><td>3</td><td>No</td><td>Yes</td><td>128</td><td><strong>Yes</strong></td></tr>
              <tr><td>P004</td><td>65</td><td>9</td><td>1</td><td>Yes</td><td>No</td><td>137</td><td>No</td></tr>
              <tr><td>P005</td><td>76</td><td>12</td><td>2</td><td>No</td><td>Yes</td><td>130</td><td><strong>Yes</strong></td></tr>
              <tr><td>P006</td><td>62</td><td>7</td><td>0</td><td>Yes</td><td>No</td><td>139</td><td>No</td></tr>
              <tr><td>P007</td><td>79</td><td>15</td><td>4</td><td>No</td><td>Yes</td><td>127</td><td><strong>Yes</strong></td></tr>
              <tr><td>P008</td><td>68</td><td>10</td><td>1</td><td>Yes</td><td>No</td><td>136</td><td>No</td></tr>
              <tr><td>P009</td><td>74</td><td>13</td><td>2</td><td>No</td><td>Yes</td><td>128</td><td><strong>Yes</strong></td></tr>
              <tr><td>P010</td><td>64</td><td>8</td><td>0</td><td>Yes</td><td>No</td><td>138</td><td>No</td></tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Data Limitations &amp; Mitigations:</strong>
            <ul>
              <li>
                <strong>Missing Data:</strong> ~20% of lab values are missing (not ordered pre-discharge). For these
                cases, we use the most recent available lab value within 48 hours. Impact: Reduces precision but keeps
                usable sample size.
              </li>
              <li>
                <strong>Social Data Proxy:</strong> SDoH data comes from zip-code estimates, not individual-level
                assessment. This is a known limitation — we're using population-level poverty as a proxy for individual
                barriers. Validation: Cross-reference with "Lives Alone" and "Transportation Access" flags to identify
                high-risk patients more precisely.
              </li>
              <li>
                <strong>"Confounding by Indication":</strong> Sicker patients are more likely to get pharmacist
                consults AND more likely to readmit. This creates selection bias. Mitigation: We use this as a leading
                variable in our stratification — high-risk patients who RECEIVE pharmacy consults are the "treatment
                group" in our quasi-experimental design.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <p>
            As a senior analyst in healthcare, we follow the same diagnostic sequence as subscription businesses, but
            adapted for clinical complexity:
          </p>

          <ol>
            <li>
              <strong>Step 1 — Map the Patient Journey Funnel:</strong> Before any modeling, understand the readmission
              timeline.
              <div className="calculation" style={{ margin: "15px 0" }}>
{`Patient Discharge Funnel:
Discharged (380) → Days 1-7 Active (370) → Days 8-21 "At Risk" (340) → Days 22-30 Safe (310) → Never Readmit (312)
Drop: 3%         Drop: 8% (post-acute)     Drop: 9% ← THE CLIFF      Drop: 0.6%
Key Observation: 63% of all readmissions occur in Days 8-21 (post-acute phase).
This is the intervention window — can we catch deterioration before ED visit?`}
              </div>
            </li>

            <li>
              <strong>Step 2 — Temporal Segmentation:</strong> We segment by discharge day and time.
              <ul>
                <li>
                  Patients discharged on <strong>Friday</strong> have 21% readmit rate vs. Wednesday 12% readmit rate.
                </li>
                <li>
                  <em>Hypothesis:</em> Friday discharges have no PCP follow-up access over the weekend. By Monday, the
                  patient has deteriorated.
                </li>
                <li>
                  <em>Quick validation:</em> Cross-tab: 78% of Friday-discharged patients have NO PCP appointment
                  scheduled (vs. 34% for Mon-Thu). Strong correlation.
                </li>
              </ul>
            </li>

            <li>
              <strong>Step 3 — Hypothesis Testing with Pivot Tables:</strong> Before any model, test the leading
              hypotheses about readmission drivers.
              <div className="calculation" style={{ margin: "15px 0" }}>
{`Hypothesis Testing Results (380 HF Patients, 30-Day Readmission):
┌──────────────────────────────┬──────────────┬──────────┬─────────┐
│ Segment                      │ 30-Day       │ Sample   │ Signal? │
│                              │ Readmit Rate │ Size     │         │
├──────────────────────────────┼──────────────┼──────────┼─────────┤
│ Polypharmacy (≥12 meds)      │ 35%          │ 128      │ ✓ STRONG│
│ Polypharmacy (<8 meds)       │ 8%           │ 157      │         │
│ PCP Appt Scheduled (Yes)     │ 10%          │ 189      │ ✓ STRONG│
│ PCP Appt Scheduled (No)      │ 28%          │ 191      │         │
│ Lives Alone (Yes)            │ 24%          │ 198      │ ✓ MEDIUM│
│ Lives Alone (No)             │ 14%          │ 182      │         │
│ Prior Admissions (≥3 in 12mo)│ 28%          │ 112      │ ✓ STRONG│
│ Prior Admissions (<3)        │ 12%          │ 268      │         │
│ Sodium < 135 (hyponatremia)  │ 32%          │ 95       │ ✓ STRONG│
│ Sodium ≥ 135                 │ 14%          │ 285      │         │
│ Discharged Friday            │ 21%          │ 54       │ ✓ MEDIUM│
│ Discharged Mon-Thu           │ 12%          │ 326      │         │
│ Review Score (Patient Sat.)  │ 16%          │ 380      │ ✗ WEAK  │
│ (No variance by satisfaction)│              │          │         │
└──────────────────────────────┴──────────────┴──────────┴─────────┘
Key Surprise: Polypharmacy (35% readmit) is STRONGER than prior admissions
(28% readmit). This suggests medication confusion trumps disease chronicity.
Satisfaction score has NO predictive power. Presence of care coordination
trumps patient satisfaction.`}
              </div>
            </li>

            <li>
              <strong>Step 4 — Leading vs. Lagging Indicators:</strong> Critical distinction in healthcare:
              <ul>
                <li>
                  <strong>Leading Indicators (actionable pre-discharge):</strong> Polypharmacy count, PCP appointment
                  status, discharge day, living situation, lab abnormalities (sodium, albumin).
                </li>
                <li>
                  <strong>Lagging Indicators (only visible post-discharge):</strong> Missed appointments, ED visits,
                  symptom calls to nurse line, weight gain (fluid retention).
                </li>
                <li>
                  <em>Implication:</em> Build the risk engine on leading indicators only. You can't intervene on a
                  missed appointment; you CAN intervene on a patient with 15 medications.
                </li>
              </ul>
            </li>

            <li>
              <strong>Step 5 — The "Silent Deteriorator" Discovery:</strong> We analyze discharge patterns and find a
              critical pattern:
              <ul>
                <li>
                  Patients discharged with <strong>polypharmacy (≥12 distinct medications)</strong> have a 35%
                  readmission rate vs. 8% for those with ≤8 meds.
                </li>
                <li>
                  But here's the clincher: <strong>Polypharmacy patients who receive a pharmacist medication
                  reconciliation intervention pre-discharge drop to 18% readmission rate</strong> (47% relative
                  reduction).
                </li>
                <li>
                  <em>Why?</em> Medication errors (dosing confusion, drug interactions, missed doses) are the
                  unobserved driver of readmission. Addressing it directly pays off.
                </li>
              </ul>
            </li>

            <li>
              <strong>Step 6 — Confounding Awareness (The Senior Move):</strong> Here's where we pump the brakes:
              <ul>
                <li>
                  <strong>Observation:</strong> Patients who get pharmacist consults have 20% readmission vs. 18% for
                  those who don't.
                </li>
                <li>
                  <strong>Naive Interpretation:</strong> "Pharmacist consults HURT outcomes!"
                </li>
                <li>
                  <strong>Senior Interpretation:</strong> "Confounding by Indication. Sicker patients (higher
                  polypharmacy, more comorbidities) are SELECTED for pharmacist consults AND are inherently higher
                  risk. The raw comparison is biased."
                </li>
                <li>
                  <strong>Solution:</strong> Stratify analysis by risk tier. Within HIGH-RISK patients (polypharmacy
                  ≥12), those who receive pharmacist consults drop from 35% → 18% readmit (47% reduction). Within
                  LOW-RISK patients (polypharmacy ≤8), pharmacist consults don't change the outcome (already low risk).
                </li>
              </ul>
            </li>

            <li>
              <strong>Step 7 — Path Analysis (Segmentation + Intervention Matching):</strong> We segment patients into
              three risk tiers, each with distinct readmit rates:
              <div className="calculation" style={{ margin: "12px 0" }}>
{`Risk Segmentation (Based on Logistic Regression Score):

HIGH RISK (Top 15% by score): 57 patients
  - Avg Polypharmacy: 14.2 meds | Avg Prior Admits: 2.8
  - No PCP Appt: 68% | Lives Alone: 74%
  - Expected 30-day readmit rate: 35%
  - Annual readmits if untreated: 20

MEDIUM RISK (Next 40% by score): 152 patients
  - Avg Polypharmacy: 10.1 meds | Avg Prior Admits: 1.2
  - No PCP Appt: 45% | Lives Alone: 52%
  - Expected 30-day readmit rate: 16%
  - Annual readmits if untreated: 24

LOW RISK (Bottom 45% by score): 171 patients
  - Avg Polypharmacy: 6.8 meds | Avg Prior Admits: 0.1
  - No PCP Appt: 12% | Lives Alone: 28%
  - Expected 30-day readmit rate: 8%
  - Annual readmits if untreated: 14

Current State (No Stratification): 68 total readmits / year
High-risk tier alone: 20 readmits = 29% of total readmissions
But high-risk is only 15% of patients. Extreme concentration of risk.`}
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Calculation &amp; Simulation</h2>
        <div className="content">
          <p>
            Let's calculate the ROI of a stratified intervention program targeting the HIGH-RISK tier specifically:
          </p>
          <div className="calculation">
{`Base Assumptions:
Annual Heart Failure Discharges: 380 patients
Current 30-Day Readmission Rate: 18% (68 readmits/year)
National Benchmark: 15.8% (60 readmits/year)
Excess Readmissions (vs. benchmark): 8/year

Cost per Readmission (Unreimbursed): $15,000
Current Annual Readmission Cost: 68 × $15,000 = $1,020,000

CMS Penalty for High Readmitter: ~$2.4M/year
(Based on 1.5% of total DRG reimbursement multiplier)

Total Annual Cost: $1,020,000 + $2,400,000 = $3,420,000

─────────────────────────────────────────────────────────────
PROPOSED INTERVENTION: High-Risk Tier Only (57 patients)
─────────────────────────────────────────────────────────────
Intervention Design:
  1. Pharmacist medication reconciliation (30-min, pre-discharge)
  2. Home health nurse visit (Days 1-3 post-discharge)
  3. PCP appointment guarantee (scheduled before discharge)
  4. Community health worker for social support (if lives alone)

Intervention Cost per Patient: $400
  - Pharmacist time: $150
  - Home nurse visit: $180
  - Care coordination: $70

Total Intervention Cost: 57 × $400 = $22,800/year

Expected Outcome:
  - HIGH-RISK tier readmit rate: 35% → 18% (47% reduction)
  - Readmits in high-risk tier: 20 → 11 = 9 prevented
  - Medium/Low-risk tiers: Minimal spillover (unchanged)
  - Total prevented readmits: 9 per year

Savings Calculation:
  Avoided readmission costs: 9 × $15,000 = $135,000
  Avoided CMS penalty: (3/380) × $2,400,000 = $18,947
  (Penalty reduction proportional to reduction in readmission rate)
  Total Savings: $135,000 + $18,947 = $153,947

Net ROI: ($153,947 - $22,800) / $22,800 = `}<span className="math-result">575% ROI</span>
{`

─────────────────────────────────────────────────────────────
SENSITIVITY ANALYSIS: Multiple Scenarios
─────────────────────────────────────────────────────────────
Scenario        │ Readmit     │ Prevented │ Savings  │ Cost   │ Net Benefit │ ROI
────────────────┼─────────────┼───────────┼──────────┼────────┼─────────────┼─────
Conservative    │ 35% → 24%   │ 6 readmits│ $90,000  │$22,800│ `}<span className="math-result">$67,200</span>
{` │ 195%
Target          │ 35% → 18%   │ 9 readmits│ $153,947 │$22,800│ `}<span className="math-result">$131,147</span>
{` │ 575%
Optimistic      │ 35% → 12%   │ 13 readmit│ $222,000 │$22,800│ `}<span className="math-result">$199,200</span>
{` │ 874%

Break-Even Analysis:
  Need only 1.5 prevented readmits to break even ($22.8K intervention cost).
  High-risk cohort: 20 readmits baseline → only need 1.5 to prevent = 92.5% failure tolerance.
  In other words: Program only needs 7.5% effectiveness to break even.
  Target scenario assumes 45% effectiveness (well within achievable range).

12-Month Annualized Savings (Target Scenario):
  $153,947 × 1.1 (growth adjustment) = `}<span className="math-result">$169,342/year</span>
{`
3-Year Impact: $169,342 × 3 = `}<span className="math-result">$508,026</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Findings &amp; Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>What We Expected vs. What We Found:</strong>
            <table className="data-table" style={{ marginTop: "15px" }}>
              <thead>
                <tr>
                  <th>Assumption</th>
                  <th>Expected (Clinical Intuition)</th>
                  <th>Actual Finding (Data)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Strongest predictor of readmission</td>
                  <td>Disease severity (prior admissions)</td>
                  <td><strong>Medication complexity (polypharmacy)</strong></td>
                </tr>
                <tr>
                  <td>Patient satisfaction predicts outcomes</td>
                  <td>Higher satisfaction → lower readmit</td>
                  <td><strong>Zero correlation — satisfaction doesn't predict readmit</strong></td>
                </tr>
                <tr>
                  <td>Readmissions spread across time window</td>
                  <td>Even distribution over 30 days</td>
                  <td><strong>63% of readmits cluster in Days 8-21 (post-acute phase)</strong></td>
                </tr>
                <tr>
                  <td>Social factors are "soft"</td>
                  <td>Nice to have, not critical</td>
                  <td><strong>"Lives alone" reduces risk by 10pp (24% vs. 14%)</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul style={{ marginTop: "20px" }}>
            <li>
              <strong>The Medication Confusion Lever:</strong> Polypharmacy is the strongest single predictor of
              readmission. 35% of patients with ≥12 medications readmit vs. 8% with ≤8 medications. This isn't because
              sicker patients take more meds (though that's true) — it's because medication errors are the MECHANISM of
              readmission. When patients are discharged without understanding their new medication regimen, they make
              mistakes (missed doses, wrong timing, drug interactions), leading to deterioration.
            </li>

            <li>
              <strong>The "Friday Discharge Trap":</strong> Patients discharged on Friday have 21% readmit rate vs.
              12% for Mon-Thu. The trap isn't Friday itself — it's follow-up scheduling. 78% of Friday-discharged
              patients have no PCP appointment scheduled (vs. 34% for weekday discharges). By Monday, clinical
              deterioration has set in. <em>Actionable insight:</em> Mandate PCP appointment scheduling BEFORE
              discharge, not after.
            </li>

            <li>
              <strong>The "Lives Alone" Risk Factor (10pp Effect):</strong> Having a caregiver at home reduces
              readmission from 24% to 14% among similar-risk patients. This 10pp gap is material. Why? Caregivers
              catch warning signs (weight gain, shortness of breath) and ensure medication adherence. <em>Clinical
              insight:</em> For "lives alone" patients, remote monitoring (daily weight checks via smart scale) becomes
              critical — it replaces the missing caregiver's eyes.
            </li>

            <li>
              <strong>Why Satisfaction Doesn't Matter:</strong> Patients love their hospital experience but still
              readmit. This counter-intuitive finding reflects a key insight: <strong>Patient satisfaction measures
              the hospitalization, not the recovery capacity.</strong> A patient can have a wonderful hospital
              experience and still come back 2 weeks later because their medication regimen was confusing. The data
              shows "care coordination" trumps "care quality."
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Recommendations</h2>
        <div className="content">
          <p><strong>Immediate (P0 — Weeks 1–4):</strong></p>
          <ul>
            <li>
              <strong>Action:</strong> Implement "Meds-to-Beds" protocol — deliver ALL discharge medications to
              patient's bedside 1 hour before discharge with a 10-minute explanation from pharmacy tech. <br />
              <strong>Expected Impact:</strong> Ensure patients have first dose on hand; reduce medication confusion.
              <br />
              <strong>Cost:</strong> $0 (reuse existing pharmacy staff) | <strong>Priority:</strong> P0
            </li>
            <li>
              <strong>Action:</strong> Mandate PCP Appointment Scheduling Before Discharge — Use discharge coordinator
              to schedule 7-day follow-up while patient is still in hospital. If no PCP, assign to urgent care clinic
              visit. <br />
              <strong>Expected Impact:</strong> Increase PCP appointment rate from 50% to 90% (targets the "Friday
              discharge trap"). <br />
              <strong>Cost:</strong> $0 (reuse existing coordinators) | <strong>Priority:</strong> P0
            </li>
          </ul>

          <p><strong>Short-Term (P1 — Weeks 5–8):</strong></p>
          <ul>
            <li>
              <strong>Action:</strong> Deploy Pharmacist Medication Reconciliation for HIGH-RISK patients
              (polypharmacy ≥12 + prior admits ≥3 + lives alone). 30-min bedside consult pre-discharge. <br />
              <strong>Expected Impact:</strong> Reduce HIGH-RISK tier readmission from 35% to 18% (47% reduction).
              <br />
              <strong>Cost:</strong> $22,800/year (pharmacist labor) | <strong>Priority:</strong> P1
            </li>
            <li>
              <strong>Action:</strong> Assign Community Health Worker (CHW) for HIGH-RISK "Lives Alone" patients to
              coordinate home support + schedule follow-ups. <br />
              <strong>Expected Impact:</strong> Close the 10pp "lives alone" gap. <br />
              <strong>Cost:</strong> $18,000/year (CHW salary, 0.4 FTE) | <strong>Priority:</strong> P1
            </li>
          </ul>

          <p><strong>Medium-Term (P2 — Month 2–3):</strong></p>
          <ul>
            <li>
              <strong>Action:</strong> Validate findings with a Stratified RCT for MEDIUM-RISK patients to test whether
              pharmacist intervention reduces their readmission. <br />
              <strong>Why?</strong> HIGH-RISK interventions are obvious (sickest patients). MEDIUM-RISK (40% of cohort)
              might also benefit, extending impact.
              <br />
              <strong>Design:</strong> Randomize 150 MEDIUM-RISK patients into control (standard discharge) vs.
              treatment (15-min pharmacist consult). Measure 30-day readmission. <br />
              <strong>Duration:</strong> 4 weeks (full readmission cycle) | <strong>Cost:</strong> $0 (leverage existing
              pharmacist capacity)
            </li>
          </ul>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Stratified RCT Design (Addressing Causality):</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              The challenge: We see that pharmacist consults correlate with worse outcomes observationally, but this is
              confounding by indication (sicker patients get consults). To separate causation from selection bias, we
              run a stratified trial within the HIGH-RISK tier only.
            </p>
            <ul>
              <li>
                <strong>Population:</strong> HIGH-RISK patients (57 discharges/year) identified by risk engine
              </li>
              <li>
                <strong>Randomization:</strong> 50/50 split → Treatment: Pharmacist reconciliation; Control: Standard
                discharge
              </li>
              <li>
                <strong>Stratification:</strong> Block by "Lives Alone" status to ensure balance between arms
              </li>
              <li>
                <strong>Primary Metric:</strong> 30-day readmission rate (binary)
              </li>
              <li>
                <strong>Secondary Metrics:</strong> ED visits, medication errors, patient satisfaction
              </li>
              <li>
                <strong>Duration:</strong> 90 days (collect 30-day readmit data on first 3 cohorts = ~3 weeks)
              </li>
              <li>
                <strong>Decision Rule:</strong> If Treatment readmit rate ≤ Control by ≥5pp (p&lt;0.10), expand
                pharmacist program to MEDIUM-RISK tier
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. Business Decision-Making</h2>
        <div className="content">
          <p>Based on this analysis, the CMO and CFO jointly decide to:</p>
          <ol>
            <li>
              <strong>Reallocate Staffing:</strong> Move 0.5 FTE of existing discharge coordinator time and hire 0.5
              FTE dedicated pharmacist for medication reconciliation. Total cost: ~$55K/year (salary + benefits). Net
              benefit of $114K after intervention costs = $59K/year savings.
            </li>
            <li>
              <strong>Implement RRE into EHR:</strong> Embed the readmission risk score as a "Red Flag Alert" in the
              discharge planning workflow. When a patient's risk score is HIGH, the discharge nurse sees a mandatory
              alert: "HIGH RISK: Request pharmacist consult." (One-time IT cost: $12K; ongoing maintenance: $2K/year)
            </li>
            <li>
              <strong>Monitor Weekly KPIs:</strong> Track High-Risk patient readmission rate weekly. If readmit rate
              drops below 20% (after 8 weeks), SCALE to Medium-Risk tier.
            </li>
          </ol>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Stakeholder Tensions &amp; Resolutions:</strong>
            <ul>
              <li>
                <strong>CMO vs. CFO:</strong> CMO says "We should optimize for patient outcomes." CFO says "We can't
                afford to implement complex interventions." <br />
                <strong>Resolution:</strong> The RRE focuses interventions on HIGH-RISK only (15% of patients). By
                concentrating effort where it matters most, we get 47% readmission reduction with only $22.8K/year cost.
                Data shows this is a FINANCIAL winner, not a charity case.
              </li>
              <li>
                <strong>CNO vs. CFO:</strong> CNO says "Nursing is overworked; we can't add tasks." CFO says "We need
                to reduce readmissions or face penalties." <br />
                <strong>Resolution:</strong> Pharmacist (not nurse) does the reconciliation. The nurse's role is
                scheduling appointments (existing task, just time-shifted). CNO's workload is neutral or reduced.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 10 ── */}
      <section>
        <h2>10. Monitoring &amp; Evolution</h2>
        <div className="content">
          <p><strong>Weekly Dashboard — First 12 Weeks:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Baseline</th>
                <th>Target (Week 12)</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HIGH-RISK 30-Day Readmit Rate</td>
                <td>35%</td>
                <td>24%</td>
                <td>Weekly (rolling cohort)</td>
              </tr>
              <tr>
                <td>PCP Appointment Scheduled (%)</td>
                <td>50%</td>
                <td>90%</td>
                <td>Weekly</td>
              </tr>
              <tr>
                <td>Pharmacist Consult (HIGH-RISK %)</td>
                <td>0%</td>
                <td>95%</td>
                <td>Weekly</td>
              </tr>
              <tr>
                <td>30-Day Overall Readmit Rate (All HF)</td>
                <td>18%</td>
                <td>16%</td>
                <td>Monthly</td>
              </tr>
              <tr>
                <td>CMS Penalty Status</td>
                <td>2.3pp above benchmark</td>
                <td>0.2pp above benchmark</td>
                <td>Quarterly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 11 ── */}
      <section>
        <h2>11. Professional Analyst Mindset (Healthcare)</h2>
        <div className="content">
          <p>
            <strong>The Senior Perspective in Healthcare:</strong> Beginners see readmission as a clinical problem
            ("better doctor decisions"). Seniors see it as a SYSTEM problem ("better handoff design"). Data shows
            polypharmacy, not disease severity, drives readmission. This means the bottleneck isn't diagnosis — it's
            DISCHARGE COORDINATION.
          </p>
          <div className="highlight-box">
            <strong>Key Lesson:</strong> In healthcare analytics, <strong>"Confounding by Indication" is the
            enemy</strong>. Observational data will lie to you. Sicker patients get better care AND readmit more.
            Without a rigorous comparison (RCT or causal inference), you'll recommend the opposite of what works. Always
            ask: "Who is SELECTED for this treatment, and why?"
          </div>
          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Why This Case is Different from Subscription Cases:</strong>
            <ul>
              <li>
                You have <strong>regulatory constraints</strong> (HRRP penalties). This makes ROI calculation
                different — a $20K intervention that prevents a $2.4M penalty is INFINITE ROI (literally pays for
                itself 1000x over).
              </li>
              <li>
                You cannot easily A/B test <strong>bad outcomes</strong>. You can't randomize some patients to
                "high-quality discharge" vs. "low-quality discharge" when both affect patient health. Instead, you use
                "quasi-experiments" (stratified analysis, instrumental variables) to separate causation.
              </li>
              <li>
                The stakeholders have <strong>aligned incentives</strong> (unlike subscription, where CGO vs. Supply
                Chain fight). Here, everyone wants readmit rate down. The tension is MECHANISM, not GOAL.
              </li>
            </ul>
          </div>
          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Interview-Ready Insight:</strong> If asked "How would you reduce readmissions for a hospital?" in
            a healthcare consulting interview, the winning answer is: <em>"First, I'd map WHEN readmissions occur
            (temporal), not just WHO and WHY. Then I'd segment by actionable risk tiers. Finally, I'd test whether the
            leading indicators I found (medication count, appointment status) are CAUSAL or just correlated. Use
            stratified comparisons or RCTs to separate causation from confounding by indication. The goal isn't to find
            sicker patients and try harder — it's to find FIXABLE problems and intervene early."</em>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Case07;
