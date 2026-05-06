const Case07 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 07</span>
        <h1>The 30-Day Revolving Door</h1>
        <div className="case-meta">Industry: Healthcare / Value-Based Care &bull; Level: Advanced</div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>St. Jude's Medical Center</strong> is a 400-bed urban hospital system serving a
            diverse metropolitan area. Under the shift to <strong>Value-Based Care</strong>, particularly
            the government's <strong>Hospital Readmissions Reduction Program (HRRP)</strong>, hospitals are
            no longer reimbursed for preventable readmissions within 30 days of discharge.
          </p>
          <p>
            Rather than "volume-based" payment (pay per service), hospitals now face <strong>penalty-based</strong> payment:
            readmission rates above the national benchmark trigger financial penalties that are deducted
            directly from hospital reimbursements. For a system like St. Jude's, this represents a massive
            shift in financial incentives — from "treat more patients" to "keep patients from returning."
          </p>
          <div className="highlight-box">
            <strong>Stakeholders:</strong> Chief Medical Officer (CMO, clinical quality), Chief Financial
            Officer (CFO, cost control), Director of Patient Care (operations), VP of Population Health
            (strategy).<br />
            <strong>Context:</strong> St. Jude's operates in a competitive healthcare market where hospital
            reputation is built on readmission rates. High readmissions damage brand perception and trigger
            CMS penalties. The CFO has mandated a 5 percentage point reduction in 30-day readmissions within
            12 months or face budget cuts to cardiology (the highest-readmission department).<br />
            <strong>Stakeholder Tension:</strong> The CMO wants to invest in clinical interventions (more
            nurse time, pharmacist involvement). The CFO wants ROI proof before allocating budget. The VP
            of Population Health suspects that social factors (poverty, transportation, housing instability)
            matter as much as clinical factors — but addressing these requires partnerships outside the
            hospital, which dilutes direct cost control.
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem</h2>
        <div className="content">
          <p>
            St. Jude's is experiencing the <strong>"30-Day Revolving Door"</strong> — a crisis of
            preventable readmissions:
          </p>
          <ul>
            <li>
              <strong>Symptom (Quantified):</strong> Heart failure patients: 18% readmit within 30 days
              (national average: 12%). Pneumonia patients: 16% readmit (national average: 13%). This 3-6
              percentage point gap translates to <strong>~150 excess readmissions annually</strong>.
            </li>
            <li>
              <strong>Financial Impact:</strong> Each preventable readmission costs the hospital an average
              of $15,000 in unreimbursed expenses (lost revenue + incremental care cost). Additionally, CMS
              penalties are <strong>0.3% of total Medicare reimbursements</strong> (~$2.4M/year). This is a
              combined <strong>$4.65M annual financial burden</strong> (unreimbursed readmissions + penalties).
            </li>
            <li>
              <strong>Root Cause Hypotheses:</strong>
              <ul>
                <li>
                  <em>H1 (Clinical):</em> Patients discharged without medication reconciliation or without
                  understanding their new medication regimen. Average patient leaves with 8-12 medications
                  but recalls only 3-4.
                </li>
                <li>
                  <em>H2 (Operational):</em> Poor "Transition of Care" — no scheduled follow-up with
                  primary care, leaving patients to navigate the system alone. 40% of patients have no PCP
                  appointment scheduled before discharge.
                </li>
                <li>
                  <em>H3 (Social):</em> Social determinants prevent compliance: patients in food-insecure
                  zip codes cannot afford heart-healthy diets; patients without transportation miss
                  follow-ups; patients living alone lack support for medication adherence.
                </li>
              </ul>
            </li>
            <li>
              <strong>Current "Solution" Failing:</strong> St. Jude's currently calls every discharge patient
              with a generic discharge summary. However, nurses can spend only 2 minutes per call (call volume
              = 8,000+/year). This "spray and pray" approach has <strong>zero targeting</strong>. High-risk
              patients receive the same 2-minute call as low-risk patients, making the intervention uniformly
              ineffective.
            </li>
            <li>
              <strong>Risk if Ignored:</strong> CMS is accelerating penalties for high-readmission hospitals.
              If St. Jude's doesn't improve, CMS may recommend the hospital for reduced Medicare referrals
              (de facto blacklist for a hospital that serves 60% Medicare patients). This existential threat
              requires action within 12 months.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <p>
            Rather than treat all readmission risk equally, the goal is to build a{" "}
            <strong>Readmission Risk Engine (RRE)</strong> that identifies high-risk patients{" "}
            <strong>24 hours before discharge</strong>, enabling targeted, cost-effective interventions.
          </p>
          <div className="highlight-box">
            <strong>Key Questions:</strong>
            <ol>
              <li>
                <strong>Where do we lose patients?</strong> Which discharge cohorts have the highest
                readmission concentration? (Is it all conditions equally, or do certain diagnoses dominate?)
              </li>
              <li>
                <strong>Who readmits?</strong> Among discharged heart failure patients, which subgroups
                readmit most? (Clinical severity? Social determinants? Medication confusion?)
              </li>
              <li>
                <strong>Why readmit?</strong> Which behavioral/clinical signals 24 hours pre-discharge
                predict readmission? (Leading indicators we can act on vs. lagging indicators we can't.)
              </li>
              <li>
                <strong>What's the intervention ROI?</strong> If we segment by risk tier (Low/Medium/High)
                and deploy tiered interventions, what's the cost per readmission prevented?
              </li>
              <li>
                <strong>Can we prove causation?</strong> Observational data shows high-risk patients have
                bad outcomes — but is it the discharge process causing it, or pre-existing illness severity?
              </li>
            </ol>
            <strong>Expected Business Outcome:</strong> Reduce 30-day readmissions by 5 percentage points
            (from 18% to 13% for heart failure), saving ~$3.2M annually (avoided readmit costs + reduced
            CMS penalties). Enable reallocation of nursing time from generic calls to targeted interventions
            for high-risk patients.
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Data Perspective</h2>
        <div className="content">
          <p>
            We are merging three data streams: <strong>Clinical (EHR)</strong>, <strong>Administrative
            (billing/claims)</strong>, and <strong>Social (Determinants of Health)</strong>. This is complex
            because each stream has different quality, completeness, and latency.
          </p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Data Source</th>
                <th>Key Variables</th>
                <th>Quality Issue</th>
                <th>Predictive Signal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Clinical (EHR)</strong></td>
                <td>Diagnosis (ICD-10), Length of stay, Comorbidities, Recent lab values (Sodium, BNP)</td>
                <td>Notes are unstructured; labs may be missing at discharge</td>
                <td>Disease severity &amp; acuity (proxy for fragility)</td>
              </tr>
              <tr>
                <td><strong>Pharmacy</strong></td>
                <td>Number of distinct medications (polypharmacy), High-risk drug interactions, New medications added at discharge</td>
                <td>Discharge medications may not be filled by patient (cost barrier)</td>
                <td>Medication complexity (confusion risk)</td>
              </tr>
              <tr>
                <td><strong>Administrative</strong></td>
                <td>Prior admissions (12-month history), ED visits, Day of week discharged, Time of discharge</td>
                <td>Claims are delayed; urgent readmits not yet coded</td>
                <td>Prior utilization (chronicity marker)</td>
              </tr>
              <tr>
                <td><strong>Social (SDoH)</strong></td>
                <td>Zip code (poverty %, SNAP participation), Transportation access (car ownership proxy), Lives alone, Primary language</td>
                <td>Missing for ~15% of patients; only available from billing address</td>
                <td>Environmental barriers to compliance (external risk factor)</td>
              </tr>
              <tr>
                <td><strong>Follow-up Status</strong></td>
                <td>PCP appointment scheduled within 7 days? Cardiology/specialty follow-up scheduled?</td>
                <td>Status captured at discharge but not linked to readmission outcomes</td>
                <td>Transition of care quality (strongest operational signal)</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: "20px" }}><strong>Sample Data (12 Heart Failure Patients):</strong></p>
          <p style={{ fontSize: "13px", color: "#555", marginBottom: "8px" }}>
            This table illustrates <em>recognizable signal combinations</em> to build pattern intuition.
            For example: Low meds + scheduled follow-up + not alone = retained (no readmit). High meds +
            no follow-up + lives alone = readmitted. The aggregate statistics in Section 5 (e.g., "patients
            with &gt;10 meds = 35% readmit") are derived from the full 2,000-discharge cohort, not these 12 rows.
          </p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Age</th>
                <th>Prior Admits (12mo)</th>
                <th>Meds Count</th>
                <th>Discharged Day</th>
                <th>PCP Appt?</th>
                <th>Lives Alone?</th>
                <th>Zip (SDoH Tier)</th>
                <th>Readmitted 30d?</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>P001</td><td>62</td><td>2</td><td>6</td><td>Wednesday</td><td>Yes (7d)</td><td>No</td><td>High SES</td><td><strong>No</strong></td></tr>
              <tr><td>P002</td><td>78</td><td>4</td><td>12</td><td>Friday</td><td>No</td><td>Yes</td><td>Low SES</td><td><strong>Yes</strong></td></tr>
              <tr><td>P003</td><td>55</td><td>1</td><td>7</td><td>Monday</td><td>Yes (3d)</td><td>No</td><td>Mid SES</td><td>No</td></tr>
              <tr><td>P004</td><td>81</td><td>3</td><td>11</td><td>Friday</td><td>No</td><td>Yes</td><td>Low SES</td><td><strong>Yes</strong></td></tr>
              <tr><td>P005</td><td>68</td><td>0</td><td>5</td><td>Tuesday</td><td>Yes (5d)</td><td>No</td><td>High SES</td><td>No</td></tr>
              <tr><td>P006</td><td>74</td><td>5</td><td>13</td><td>Friday</td><td>No</td><td>Yes</td><td>Low SES</td><td><strong>Yes</strong></td></tr>
              <tr><td>P007</td><td>60</td><td>1</td><td>8</td><td>Wednesday</td><td>Yes (7d)</td><td>No</td><td>Mid SES</td><td>No</td></tr>
              <tr><td>P008</td><td>76</td><td>2</td><td>9</td><td>Monday</td><td>Yes (4d)</td><td>Yes</td><td>Mid SES</td><td>No</td></tr>
              <tr><td>P009</td><td>83</td><td>6</td><td>14</td><td>Friday</td><td>No</td><td>Yes</td><td>Low SES</td><td><strong>Yes</strong></td></tr>
              <tr><td>P010</td><td>70</td><td>2</td><td>10</td><td>Thursday</td><td>Yes (6d)</td><td>No</td><td>High SES</td><td>No</td></tr>
              <tr><td>P011</td><td>65</td><td>1</td><td>7</td><td>Tuesday</td><td>Yes (3d)</td><td>Yes</td><td>Mid SES</td><td>No</td></tr>
              <tr><td>P012</td><td>72</td><td>4</td><td>11</td><td>Friday</td><td>No</td><td>Yes</td><td>Low SES</td><td><strong>Yes</strong></td></tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Data Limitations & Mitigation:</strong>
            <ul>
              <li>
                <strong>Missing Lab Values:</strong> ~20% of discharge summaries lack current sodium/BNP
                levels (most critical for heart failure risk). <em>Mitigation:</em> Use last available value
                from hospital stay; flag "lab-missing" as its own risk signal (may indicate rushed discharge).
              </li>
              <li>
                <strong>Social Data Gaps:</strong> SDoH data is from billing address (15% missing/invalid).
                This systematically excludes homeless patients — paradoxically, those at highest risk.
                <em>Mitigation:</em> Create a "social data missing" indicator as a risk factor itself.
              </li>
              <li>
                <strong>Readmission Ascertainment:</strong> We only capture readmits to St. Jude's. If a
                patient readmits to a competitor hospital, we don't see it (introduces false negative bias).
                <em>Mitigation:</em> Our analysis is conservative — true 30-day readmit rates are likely
                higher than reported.
              </li>
              <li>
                <strong>Confounding by Indication:</strong> Sicker patients naturally get more follow-up
                appointments scheduled (physician judgment) AND naturally readmit more (disease severity).
                We can't tell if the scheduled appointment prevents readmission or if it's just a marker of
                being sicker. <em>Mitigation:</em> Design an RCT (Section 8) to randomly assign appointment
                scheduling for at-risk patients and measure causation.
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
            A senior healthcare analyst does <strong>not</strong> start by building a predictive model. We
            start by understanding the system, segmenting the problem, and validating our assumptions.
          </p>
          <ol>
            <li>
              <strong>Step 1 — Map the Readmission Funnel by Diagnosis:</strong> Before we target individuals,
              we need to know which conditions drive readmission volume.
              <div className="calculation" style={{ margin: "15px 0" }}>
{`Annual Discharge Cohort (St. Jude's):
Total Discharges: 8,000
  → Heart Failure: 2,000 (25% of volume) | 18% readmit = 360 readmits
  → Pneumonia: 1,500 (19% of volume) | 16% readmit = 240 readmits
  → COPD: 1,200 (15% of volume) | 15% readmit = 180 readmits
  → Joint Replacement: 800 (10% of volume) | 2% readmit = 16 readmits
  → Other: 2,500 (31% of volume) | 8% readmit = 200 readmits

Readmission Concentration:
Total Readmits: 996 (12.5% system-wide readmit rate)
High-Acuity Diagnoses (HF + Pneumonia + COPD) = 780 of 996 = 78% of readmits
Low-Acuity Diagnoses (Joint Replacement + Other) = 216 of 996 = 22% of readmits

Key Insight: Heart Failure alone is 36% of all readmits (360 of 996).
Strategic Focus: Reducing heart failure readmits by just 30% (from 18% to 12.6%)
would save 108 readmits/year = $1.62M in avoided costs.`}
              </div>
            </li>
            <li>
              <strong>Step 2 — Cohort Analysis: When Do Patients Readmit?</strong> Not all readmissions happen
              on day 15. The distribution matters for intervention timing.
              <div className="calculation" style={{ margin: "15px 0" }}>
{`Heart Failure 30-Day Readmission Curve (n=2,000 discharges):
Days 1-7: 28% of readmits (100 patients) ← "Acute Decompensation" (clinical signal strong)
Days 8-14: 35% of readmits (126 patients) ← "Post-Acute Phase" (compliance signal key)
Days 15-21: 22% of readmits (79 patients) ← "Delayed Complication" (social signal?)
Days 22-30: 15% of readmits (55 patients) ← "Late Effect" (rare, unpredictable)

Key Insight: 63% of readmits occur in days 8-21 (post-acute phase).
This is precisely when intervention timing matters — too early (patient still stable),
too late (habit formed).`}
              </div>
            </li>
            <li>
              <strong>Step 3 — Hypothesis Testing with Pivot Tables: Which Factors Predict Readmission?</strong>
              Before modeling, we test our three hypotheses with simple cross-tabulation.
              <div className="calculation" style={{ margin: "15px 0" }}>
{`HYPOTHESIS TESTING: Heart Failure Readmission Rates by Segment
(Full cohort n=2,000 HF discharges; sample sizes listed)

┌─────────────────────────────┬──────────────┬─────────────┬──────────┐
│ Segment                     │ Readmit Rate │ Sample Size │ Signal?  │
├─────────────────────────────┼──────────────┼─────────────┼──────────┤
│ CLINICAL HYPOTHESIS (H1)    │              │             │          │
│ Medications ≤8              │ 8%           │ 800         │ ✓ STRONG │
│ Medications 9-11            │ 18%          │ 900         │          │
│ Medications ≥12 ("Poly")    │ 35%          │ 300         │ ✓ STRONG │
│                             │              │             │          │
��� OPERATIONAL HYPOTHESIS (H2) │              │             │          │
│ PCP Appt within 7d: YES     │ 10%          │ 1,200       │ ✓ STRONG │
│ PCP Appt within 7d: NO      │ 28%          │ 800         │          │
│ Discharged Friday           │ 22%          │ 400         │ ✓ MEDIUM │
│ Discharged Mon-Thu          │ 16%          │ 1,600       │          │
│                             │              │             │          │
│ SOCIAL HYPOTHESIS (H3)      │              │             │          │
│ Lives Alone: YES            │ 24%          │ 600         │ ✓ MEDIUM │
│ Lives Alone: NO             │ 14%          │ 1,400       │          │
│ Low SES Zip (SDoH tier 1)   │ 26%          │ 900         │ ✓ MEDIUM │
│ High SES Zip (SDoH tier 3)  │ 10%          │ 500         │          │
│ Prior Admits ≥3 (12mo)      │ 28%          │ 600         │ ✓ STRONG │
│ Prior Admits <3 (12mo)      │ 12%          │ 1,400       │          │
└─────────────────────────────┴──────────────┴─────────────┴──────────┘

Signal Strength Interpretation:
✓ STRONG = Clear dose-response, large N, clinically actionable
✓ MEDIUM = Observable but smaller effect size, may be confounded
✗ WEAK = Noise, probably confounded with other factors

Key Surprises:
1. Prior admission history (28% vs. 12%) is STRONGER than age (not shown, 19% vs. 14%)
   → Readmit risk is about chronicity, not just current illness severity
2. Medication count (35% for ≥12 meds) is STRONGER than lab values (not shown, but similar)
   → Medication confusion is a bigger driver than clinical markers
3. PCP appointment is STRONG (28% vs. 10%) but may be confounded:
   Do scheduled appointments prevent readmit, or do sicker patients get more appointments?`}
              </div>
            </li>
            <li>
              <strong>Step 4 — Interaction Analysis: Does "Friday Discharge" Matter for Everyone?</strong>
              We need to ask: Friday effect is strong (22% vs. 16%), but is it independent or mediated?
              <div className="calculation" style={{ margin: "15px 0" }}>
{`FRIDAY DISCHARGE EFFECT — CONTROLLED ANALYSIS
(Does Friday effect disappear after controlling for PCP appointment?)

Discharged Friday:
  → Has PCP appt: 12% readmit (n=200)
  → No PCP appt: 38% readmit (n=200)

Discharged Mon-Thu:
  → Has PCP appt: 9% readmit (n=1,000)
  → No PCP appt: 25% readmit (n=600)

Key Insight: Friday discharge is NOT an independent risk factor.
It's a PROXY for "missed follow-up scheduling" (offices close over weekend).
Real signal: Patients discharged Friday are less likely to have PCP appt scheduled
before Monday office opens.

Strategic Implication: Don't just "avoid Friday discharge" — ensure weekend
discharge patients have appointment scheduled (e.g., arrange Monday call from clinic).`}
              </div>
            </li>
            <li>
              <strong>Step 5 — Leading vs. Lagging Indicator Analysis (Clinical Edition):</strong> Which
              signals can we act on pre-discharge vs. post-discharge?
              <ul>
                <li>
                  <strong>Leading Indicators (Pre-discharge, actionable):</strong> Medication count,
                  follow-up appointment status, social support presence (can intervene before patient leaves
                  bed).
                </li>
                <li>
                  <strong>Lagging Indicators (Post-discharge, too late):</strong> Patient missed appointment
                  (means they already failed to comply), ED visit, symptom complaint call (means acute
                  decompensation already started).
                </li>
                <li>
                  <em>Lesson:</em> Build your pre-discharge risk score on leading indicators only. Don't
                  include post-discharge behavior in the model (defeats the purpose of early intervention).
                </li>
              </ul>
            </li>
            <li>
              <strong>Step 6 — Risk Stratification: Build Three Tiers, Not a Continuous Score:</strong> In
              healthcare, interventions are discrete, not continuous. A patient doesn't get a "6.3-point
              treatment" — they get SMS, a call, or a home visit.
              <div className="calculation" style={{ margin: "15px 0" }}>
{`RISK TIER DEFINITION (based on pre-discharge signals):

LOW RISK (predicted readmit rate ≤8%):
  Criteria: Meds ≤8 AND PCP appt scheduled AND not alone OR high SES
  Population: 800 of 2,000 HF patients (40%)
  Expected readmits: 64
  Intervention: Automated SMS + phone line
  Cost/patient: $5

MEDIUM RISK (predicted readmit rate 12-20%):
  Criteria: Meds 9-11 AND/OR no PCP appt OR lives alone AND mid-SES
  Population: 900 of 2,000 HF patients (45%)
  Expected readmits: 162
  Intervention: 15-min nurse call + appointment confirmation
  Cost/patient: $50

HIGH RISK (predicted readmit rate ≥25%):
  Criteria: Meds ≥12 AND no PCP appt AND/OR prior admits ≥3 AND/OR low SES
  Population: 300 of 2,000 HF patients (15%)
  Expected readmits: 105 (35% readmit rate)
  Intervention: In-home pharmacist visit (Meds-to-Beds) + care coordinator
  Cost/patient: $200

Validation: (64 + 162 + 105) = 331 expected readmits vs. 360 actual = 92% accuracy
(This is good for targeting, even if not perfect prediction.)

Efficiency Insight:
Top 15% (300 high-risk patients) account for 32% of readmits (105 of 331).
Concentrating resources on high-risk is 2x more efficient than uniform intervention.`}
              </div>
            </li>
            <li>
              <strong>Step 7 — Addressing Confounding: The "Sicker Patients Get Better Follow-Up" Trap:</strong>
              Clinical judgment creates natural selection bias. Attending physicians discharge sicker patients
              with more follow-up appointments already scheduled. So the correlation (appointment scheduled
              → lower readmit) could be pure confounding.
              <div className="calculation" style={{ margin: "15px 0" }}>
{`CONFOUNDING SCENARIO:
Suppose readmit is 100% determined by disease severity (unmeasured), not follow-up.
Sicker patients (high severity):
  → Physicians schedule appointment (clinical judgment) → 60% get appt
  → Readmit 25% regardless

Healthier patients (low severity):
  → Physicians skip appointment (patient stable) → 40% get appt
  → Readmit 5% regardless

Observed Data:
  Has appt: 25% readmit (but sicker cohort, selection bias)
  No appt: 15% readmit (but healthier cohort, selection bias)

Conclusion: Observational data suggests "no appointment → worse outcome"
but causation is backwards. Appointments don't prevent readmit; sicker
patients both get appointments AND readmit due to disease severity.

Solution: Randomized Controlled Trial (see Section 8).`}
              </div>
            </li>
            <li>
              <strong>Step 8 — Path Analysis: Which Intervention Lever Works?</strong> Among medication
              confusion, follow-up gaps, and social barriers — which one do we pull first?
              <div className="calculation" style={{ margin: "15px 0" }}>
{`INTERVENTION HIERARCHY (by effect size and feasibility):

Rank 1 — FOLLOW-UP SCHEDULING (Highest Impact + Highest Feasibility):
  Signal: PCP appt scheduled within 7d reduces readmit from 28% to 10% (18pp difference)
  Cost: $30/patient (coordinator time)
  Feasibility: High (requires workflow change, not clinical decision)
  Estimated reach: ~40% of high-risk patients currently missing appts
  
Rank 2 — MEDICATION RECONCILIATION (High Impact, Medium Feasibility):
  Signal: Meds ≥12 associated with 35% readmit vs. 8% for ≤8 meds (27pp difference)
  Cost: $150/patient (pharmacist home visit)
  Feasibility: Medium (requires new staffing model, only for high-risk)
  Estimated reach: ~300 patients in top polypharmacy tier
  
Rank 3 — SOCIAL SUPPORT (Medium Impact, Lower Feasibility):
  Signal: Lives alone → 24% readmit vs. 14% with support (10pp difference)
  Cost: $200+/patient (care coordinator + social services connection)
  Feasibility: Low (requires external partnerships, slower ROI)
  Estimated reach: Limited (we can't "fix" living situation, can only connect to resources)`}
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
            Let's model the financial and clinical impact of a <strong>tiered intervention strategy</strong>
            across multiple scenarios.
          </p>
          <div className="calculation">
{`BASE CASE: CURRENT STATE (Status Quo)
Annual HF Discharges: 2,000
Current 30-Day Readmit Rate: 18% (360 readmissions)
Cost per Readmission: $15,000 (unreimbursed)
Annual Readmit Cost: 360 × $15,000 = $5,400,000
CMS Penalty (0.3% of Medicare rev): $2,400,000
Total Annual Cost: $7,800,000

Current Intervention (Generic Calls):
Cost: $10/patient × 2,000 = $20,000/year
Effectiveness: Negligible (similar readmit rate as baseline)
Net: $7,820,000 in total cost

────────────────────────────────────────────────────────────────────
SCENARIO 1: TIERED INTERVENTION MODEL (Conservative)
────────────────────────────────────────────────────────────────────

Intervention Stack:
  LOW RISK (800 patients, $5/patient):
    SMS reminder + phone line access = $4,000
    Expected readmit reduction: 0pp (already low risk)
    Readmits: 64 (unchanged from 8% baseline)

  MEDIUM RISK (900 patients, $50/patient):
    15-min nurse call + appointment confirmation = $45,000
    Expected readmit reduction: 4pp (from 16% to 12%)
    Readmits prevented: 36
    Readmits remaining: 126 (12% of 900 + prevented)

  HIGH RISK (300 patients, $200/patient):
    Meds-to-Beds pharmacist visit + coordinator = $60,000
    Expected readmit reduction: 7pp (from 35% to 28%)
    Readmits prevented: 21
    Readmits remaining: 63 (28% of 300)

Total Program Cost: $4,000 + $45,000 + $60,000 = $109,000/year
Total Readmits: 64 + 126 + 63 = 253 (down from 360)
Readmits Prevented: 107
Avoided Costs: 107 × $15,000 = `}<span className="math-result">$1,605,000</span>
{`

CMS Penalty Reduction:
New readmit rate: 253/2,000 = 12.65% (vs. baseline 18%)
Penalty reduction: 5.35pp → ~$1,100,000 reduction
Net Savings: $1,605,000 (avoided readmits) + $1,100,000 (reduced penalty) = `}<span className="math-result">$2,705,000</span>
{`
ROI: ($2,705,000 - $109,000) / $109,000 = `}<span className="math-result">2,380% ROI`}</span>

────────────────────────────────────────────────────────────────────
SCENARIO 2: TIERED INTERVENTION (TARGET — Optimistic)
────────────────────────────────────────────────────────────────────

(Assumes higher effectiveness from better execution + follow-up adherence)

LOW RISK: Readmit reduction 0pp → 64 readmits (unchanged)
MEDIUM RISK: Readmit reduction 6pp (from 16% to 10%) → 90 readmits, 54 prevented
HIGH RISK: Readmit reduction 10pp (from 35% to 25%) → 75 readmits, 30 prevented

Total Readmits: 64 + 90 + 75 = 229
Readmits Prevented: 131
Avoided Costs: 131 × $15,000 = `}<span className="math-result">$1,965,000</span>
{`

New readmit rate: 229/2,000 = 11.45% (vs. baseline 18%)
Penalty reduction: ~$1,400,000
Net Savings: $1,965,000 + $1,400,000 - $109,000 = `}<span className="math-result">$3,256,000</span>
{`
ROI: `}<span className="math-result">2,890% ROI</span>

────────────────────────────────────────────────────────────────────
SENSITIVITY ANALYSIS: What if Key Assumptions Fail?
────────────────────────────────────────────────────────────────────

Scenario A: Appointment scheduling only reaches 50% of medium-risk patients
  (Instead of 4pp reduction, only 2pp achieved)
  → Net savings: $1,850,000 (vs. $2.7M baseline scenario)
  → ROI: 1,590% (still strongly positive)

Scenario B: Polypharmacy intervention has only 3pp effect (not 7pp)
  → Net savings: $2,150,000
  → ROI: 1,870% (still positive)

Scenario C: Both A and B together (worst case)
  → Net savings: $1,200,000
  → ROI: 1,010% (barely breaks even)

Worst-Case Threshold: If combined effectiveness is <50% of estimates,
intervention ROI falls below 1,000%. Still acceptable but requires contingency.

────────────────────────────────────────────────────────────────────
BREAK-EVEN ANALYSIS:
────────────────────────────────────────────────────────────────────
Program cost: $109,000/year
Break-even readmits prevented: 109,000 / 15,000 = 7.3 readmits/year
Break-even readmit rate reduction: 7.3 / 2,000 = 0.37pp

Even if we prevent just 0.37 percentage points of readmission (from 18% to 17.63%),
the program pays for itself. Our conservative estimate is 5.35pp. This is
conservative by a factor of 14x.

Financial Risk: LOW. Even massive misses on effectiveness still justify program.`}
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
                  <th>Expected</th>
                  <th>Actual Finding</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Readmission is driven by disease severity</td>
                  <td>Age, labs, comorbidities strongest signals</td>
                  <td><strong>Medication count & follow-up scheduling are stronger than age/labs</strong></td>
                </tr>
                <tr>
                  <td>Friday discharge is random variation</td>
                  <td>No meaningful effect</td>
                  <td><strong>Friday effect is real (22% vs. 16%) but mediated by follow-up scheduling</strong></td>
                </tr>
                <tr>
                  <td>Social factors are weak predictors</td>
                  <td>Clinical factors dominate</td>
                  <td><strong>Living alone (10pp effect) and SES (16pp effect) are material risk factors</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul style={{ marginTop: "20px" }}>
            <li>
              <strong>Medication Confusion Over Disease Severity:</strong> Among discharged heart failure
              patients, polypharmacy (≥12 medications) is a stronger readmission predictor (35% vs. 8% for
              ≤8 meds) than clinical markers like recent BNP levels. <em>Interpretation:</em> Patients
              aren't readmitting because their heart failure is worse — they're readmitting because they
              don't understand their regimen.
              <div className="calculation" style={{ margin: "12px 0" }}>
{`Why Polypharmacy Drives Readmission:
HF Patient Discharge Regimen:
  1. Furosemide (diuretic) — take at first sign of weight gain
  2. ACE inhibitor — take daily, may cause dizziness
  3. Beta-blocker — take daily, don't stop abruptly
  4. Statin — take daily
  5. Aspirin — take daily
  6–12. Other medications for comorbidities (diabetes, hypertension, etc.)

Patient Understanding Post-Discharge (typically):
  "I have a lot of pills. The doctor said take them. Doesn't matter when."

30-Day Cycle:
  Day 1–7: Patient experiments with timing, might forget doses
  Day 8–14: Patient fills prescriptions (if affordable); confusion peaks
  Day 15–21: Either patient stabilizes on routine, OR stops taking meds
  Day 22–30: If no routine formed, acute decompensation → readmission

Cost of Pharmacist Intervention ($150/patient):
  Review meds 1:1 with patient (eliminate unnecessary ones)
  Create written schedule (colored pill organizer if high-risk)
  Arrange home delivery of first-fill prescription (remove access barrier)
  This targeting reduces readmit risk by ~7pp for high-poly patients.`}
              </div>
            </li>
            <li>
              <strong>The "Golden 7-Day Window":</strong> The most critical intervention window is Days
              1–7 post-discharge. 28% of readmits occur in this window (acute decompensation), and many of
              these are unavoidable (clinical deterioration too rapid to intercept). However, Days 8–21
              account for 57% of readmits — this is where preventive interventions work.
              <div className="calculation" style={{ margin: "12px 0" }}>
{`Intervention Timing Optimization:

Pre-Discharge (Day 0):
  → Schedule PCP follow-up appointment
  → Conduct medication reconciliation
  → Screen for social barriers (transportation, support)
  → Cost: $0 (part of discharge process)
  → Timing: <2 hours before discharge
  
Post-Discharge Day 3 (Acute Phase):
  → Brief phone call from discharge nurse (check medication confusion)
  → Goal: Catch early if patient stopped medications or is confused
  → Cost: $20/patient
  → Timing: Sweet spot — patient still coherent, meds not yet refilled
  
Post-Discharge Day 7–10 (Stabilization Phase):
  → Follow-up appointment with PCP or cardiology
  → Goal: Assess compliance, adjust regimen if needed
  → Cost: Embedded in PCP practice (included in scheduled appointment)
  
Post-Discharge Day 14 (Check-In):
  → Second phone call or patient-initiated check-in via SMS
  → Goal: Reinforce routine, catch any emerging issues
  → Cost: $10/patient
  
CRITICAL INSIGHT: Most interventions happen AFTER discharge (post-hoc),
but the most cost-effective intervention is PRE-discharge (ensuring
appointment is scheduled before patient leaves bed).`}
              </div>
            </li>
            <li>
              <strong>Social Determinants Are Not Soft Factors:</strong> Living alone increases readmit risk
              by 10 percentage points (24% vs. 14%), and low-SES zip codes add another 10-16pp risk.
              <em>This is not correlation with unmeasured health status — it's measurable, material risk.</em>
              Patients without caregivers have no one to remind them to take medications, no one to help
              with transportation to follow-up, no one to notice early warning signs.
              <div className="calculation" style={{ margin: "12px 0" }}>
{`Social Risk Stratification (Heart Failure):

"Isolated + Low SES" Profile:
  Lives alone + Low-SES zip + Polypharmacy
  Readmit risk: 40–45% (multiply: 24% × 1.6 SES factor × ...
  This is St. Jude's highest-risk cohort (~5% of HF population)

"Supported + High SES" Profile:
  Lives with family + High-SES zip + Few medications
  Readmit risk: 5–8%
  This is lowest-risk cohort (~15% of HF population)

Intervention Implication:
For "Isolated + Low SES" cohort, in-home intervention is not optional —
it's the minimum viable approach. Sending SMS to homeless patient or
patient without transportation is futile.

Partnership with Social Services:
  → Identify "Isolated + Low SES" patients pre-discharge
  → Connect with community health workers (CHWs) or home care programs
  → Cost per patient: $150–300 (one-time intake + ongoing coordination)
  → Alternative: Work with existing "Meals on Wheels," transportation, etc.`}
              </div>
            </li>
            <li>
              <strong>Friday Discharge Trap (Root Cause Identified):</strong> Patients discharged Friday
              have 22% readmit vs. 16% weekday. However, the root cause is not "Friday itself" — it's
              follow-up scheduling. Primary care offices are closed over weekends, so Friday discharges
              don't get PCP appointments scheduled until Monday (or later).
              <em>Solution:</em> Mandate PCP appointment scheduling BEFORE discharge for all patients,
              regardless of discharge day. Or: Arrange clinic callback for Friday discharges on Monday morning.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Recommendations</h2>
        <div className="content">
          <p><strong>Short-Term (Weeks 1–8 — Quick Wins):</strong></p>
          <ul>
            <li>
              <strong>Action 1: "Golden Appointment" Protocol.</strong> Make PCP follow-up appointment
              scheduling mandatory before discharge for ALL heart failure patients. Scheduling <em>before</em>
              patient leaves hospital (not after). Empower discharge coordinators to book directly with primary
              care (don't rely on patient to call Monday).
              <br /><strong>Expected Impact:</strong> 40% of high-risk patients currently have no appointment
              → Reduce this to &lt;10%. Estimated 4pp churn reduction = 80 readmits prevented.
              <br /><strong>Priority:</strong> P0 | <strong>Cost:</strong> $30K/year (coordinator time).
            </li>
            <li>
              <strong>Action 2: Discharge Day "Meds-to-Beds" for High-Risk.</strong> For patients discharged
              with ≥12 medications, conduct 15-minute pharmacist walkthrough (not 2-minute nurse call). Create
              visual medication schedule. Ensure first fill is delivered to home (remove pharmacy barrier).
              <br /><strong>Expected Impact:</strong> Reduce polypharmacy readmit from 35% to 28% (7pp reduction).
              300 high-risk patients × 7pp = 21 readmits prevented.
              <br /><strong>Priority:</strong> P0 | <strong>Cost:</strong> $60K/year (pharmacist + delivery).
            </li>
            <li>
              <strong>Action 3: Social Screening Tool.</strong> At discharge, identify "Isolated + Low SES"
              patients. Trigger automatic referral to community health worker network or social services for
              post-discharge support coordination (meals, transportation, medication reminders).
              <br /><strong>Expected Impact:</strong> Reduce social-mediated readmits by 3–4pp (mostly from
              medium/low-risk cohorts who might shift to compliance).
              <br /><strong>Priority:</strong> P0 | <strong>Cost:</strong> $25K/year (screening tool + partner
              coordination).
            </li>
          </ul>
          <p><strong>Medium-Term (Weeks 9–16 — Build the System):</strong></p>
          <ul>
            <li>
              <strong>Action 4: RCT for Appointment Scheduling + Medication Support.</strong> To definitively
              prove causation (not just correlation), run a randomized trial:
              <br /><strong>Design:</strong> Randomize high-risk HF patients (n=600) to:
              <ul>
                <li><strong>Control:</strong> Standard discharge (appointment if feasible, generic call)</li>
                <li><strong>Treatment A:</strong> Mandatory appointment + SMS reminder (Day 3, 7, 14)</li>
                <li><strong>Treatment B:</strong> Mandatory appointment + pharmacist home visit (within 48h) +
                SMS</li>
                <li><strong>Treatment AB (Full):</strong> Mandatory appointment + pharmacist + social screening +
                community health worker for at-risk</li>
              </ul>
              <br /><strong>Measure:</strong> 30-day readmission rate by arm
              <br /><strong>Duration:</strong> 4 months (full follow-up)
              <br /><strong>Expected Outcome:</strong> Isolate which intervention components actually drive
              readmission prevention. Kill expensive interventions that don't work.
              <br /><strong>Priority:</strong> P1 | <strong>Cost:</strong> $80K (trial setup + analysis).
            </li>
            <li>
              <strong>Action 5: Embed Risk Score in EHR Discharge Workflow.</strong> Build a "Readmission Risk
              Score" that pops up 24 hours before expected discharge. Score shows:
              <ul>
                <li>Risk tier (Low/Medium/High)</li>
                <li>Key risk drivers (e.g., "Polypharmacy [11 meds] + Lives Alone")</li>
                <li>Recommended interventions (e.g., "Pharmacist consult required")</li>
              </ul>
              <br /><strong>Expected Impact:</strong> Standardize risk screening across discharge teams (reduce
              variation from clinician judgment).
              <br /><strong>Priority:</strong> P1 | <strong>Cost:</strong> $40K one-time (EHR configuration) +
              $10K/year (maintenance).
            </li>
          </ul>
          <p><strong>Long-Term (Month 4–12 — Scale &amp; Optimize):</strong></p>
          <ul>
            <li>
              <strong>Action 6: Remote Patient Monitoring (RPM) Pilot for Ultra-High-Risk.</strong> For the top
              5% (60 patients per year) with multiple risk factors, deploy home monitoring (smart scale, BP
              cuff, pulse oximeter). Real-time alerts to care coordinator if weight gain &gt;3 lbs overnight
              (sign of fluid retention).
              <br /><strong>Expected Impact:</strong> Catch acute decompensation at home before ED visit.
              Estimated 8pp additional reduction for this ultra-high cohort.
              <br /><strong>Priority:</strong> P2 | <strong>Cost:</strong> $30K/year (devices + care coordinator
              time).
            </li>
            <li>
              <strong>Action 7: Expand to Pneumonia, COPD, Post-Surgical Cohorts.</strong> Heart failure is
              36% of readmits. Pneumonia is 24%. If similar interventions work across diagnoses, scale to all
              high-readmit conditions.
              <br /><strong>Priority:</strong> P2 | <strong>Cost:</strong> $150K/year (expanded staffing).
            </li>
          </ul>
          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Experimentation Design (Randomized Controlled Trial) — Resolving Causality:</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              This RCT is designed to answer a critical question: Does scheduling a PCP appointment actually
              <em>prevent</em> readmission, or do sicker patients (who naturally readmit more) also get more
              appointments due to clinician judgment? By randomly assigning appointment scheduling + intervention
              components, we separate causation from selection bias. This is the gold standard in healthcare
              research and eliminates the confounding that observational analysis cannot resolve.
            </p>
            <ul>
              <li><strong>Hypothesis:</strong> Tiered interventions (appointment + medication support + social
              screening) reduce 30-day readmissions by ≥5pp compared to control</li>
              <li><strong>Population:</strong> HF patients discharged from St. Jude's, age &gt;50, &gt;1 prior
              admission in 12 months (higher baseline risk)</li>
              <li><strong>Sample Size:</strong> 600 patients (150 per arm) — powered for 5pp effect at α=0.05,
              β=0.20</li>
              <li><strong>Randomization:</strong> Stratified by risk tier at discharge (ensure balanced risk
              distribution across arms)</li>
              <li><strong>Primary Outcome:</strong> 30-day readmission to any hospital (including competitors —
              use national claims data if available)</li>
              <li><strong>Secondary Outcomes:</strong> ED visits, medication adherence (pharmacy claims), PCP
              appointment attendance, patient satisfaction</li>
              <li><strong>Duration:</strong> 16 weeks (12-week enrollment + 4-week follow-up buffer)</li>
              <li><strong>Decision Rule:</strong> If Treatment AB (full intervention) is &gt;Control by ≥5pp
              (p&lt;0.05), roll out to all discharged HF patients. If Treatment A or B individually achieve
              3-4pp effect, use those for medium/low-risk tiers (cost-effective)</li>
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
              <strong>Reallocate Nursing Capacity:</strong> Move 2 FTE nurses from generic discharge call duty
              (~8,000 calls/year at 2 min each = 267 hours/year) to a specialized "Transition of Care" team.
              This team focuses exclusively on high-risk patients (300/year × 15 min = 75 hours) + medium-risk
              follow-ups (900/year × 5 min = 75 hours). Net freed capacity = 117 hours/year for other duties.
            </li>
            <li>
              <strong>Hire 1 FTE Pharmacist</strong> dedicated to discharge-day medication reconciliation for
              high-risk patients (300/year × 0.5 hour = 150 hours). This prevents $810K in avoided readmit
              costs for $80K salary investment. ROI = 1,000%.
            </li>
            <li>
              <strong>Implement Mandatory PCP Appointment Booking Before Discharge.</strong> Change discharge
              workflow: No patient leaves without appointment scheduled. This is not a clinical decision — it's
              a process change. Empower discharge coordinators with direct access to PCP scheduling system.
            </li>
            <li>
              <strong>Launch Pilot RCT with 600 Patients.</strong> Before full system rollout, validate
              causation. Start 4-week intake window (Weeks 9–12), full 30-day follow-up by Week 16. Decision
              point: Week 17.
            </li>
            <li>
              <strong>Partner with Community Health Network.</strong> Identify "Isolated + Low SES" patients at
              discharge; trigger automated referral to CHW program (using text-based intake form). This is
              low-cost (partner handles care coordination), high-impact for vulnerable cohort.
            </li>
          </ol>
          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Monitoring Dashboard — Weekly + Monthly KPIs:</strong>
            <table className="data-table">
              <thead>
                <tr>
                  <th>KPI</th>
                  <th>Current State</th>
                  <th>Target (Month 6)</th>
                  <th>Target (Month 12)</th>
                  <th>Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>30-Day Readmit Rate (HF)</td><td>18%</td><td>14%</td><td>12%</td><td>Weekly (by discharge cohort)</td></tr>
                <tr><td>PCP Appt Scheduled Pre-Discharge (%)</td><td>60%</td><td>85%</td><td>95%</td><td>Daily (real-time)</td></tr>
                <tr><td>Pharmacist Reconciliation Rate (%)</td><td>5%</td><td>60%</td><td>90%</td><td>Daily</td></tr>
                <tr><td>Medication Confusion Calls Received (%)</td><td>0%</td><td>40%</td><td>70%</td><td>Weekly</td></tr>
                <tr><td>Social Screening Completion Rate (%)</td><td>10%</td><td>70%</td><td>95%</td><td>Daily</td></tr>
                <tr><td>Avoided Readmit Cost</td><td>$0</td><td>$800K</td><td>$1.6M</td><td>Monthly</td></tr>
                <tr><td>Program Cost (YTD)</td><td>$0</td><td>$55K</td><td>$109K</td><td>Monthly</td></tr>
                <tr><td>Net ROI</td><td>0%</td><td>1,350%</td><td>1,470%</td><td>Monthly</td></tr>
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
            <strong>The Senior Healthcare Analyst Perspective:</strong> Beginners look for "The Perfect Model."
            Seniors understand that healthcare data is inherently messy, but the solution doesn't require
            perfection — it requires <strong>Targeting</strong>. If you can identify the top 15% highest-risk
            patients, you've solved 80% of the problem. You don't need 95% accuracy; you need 70% accuracy on
            the right cohort.
          </p>
          <div className="highlight-box">
            <strong>Key Lesson:</strong> In healthcare, <strong>Confounding is Everywhere.</strong> Sicker
            patients naturally receive better care (doctors practice clinical judgment), and they naturally
            have worse outcomes. This creates a correlation that looks like treatment effect but isn't.{" "}
            <em>The only way to break confounding is randomization.</em> If you're recommending spending
            $500K on an intervention, the CFO will ask, "Prove it works, don't just show me correlation." That
            requires an RCT.
          </div>
          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Common Beginner Mistake:</strong> Most junior analysts look at "PCP appointment scheduled"
            → "lower readmission" and say, "Let's mandate appointments for everyone!" A senior analyst says,
            "Wait. Sicker patients get more appointments due to physician judgment AND have worse outcomes due
            to disease severity. This is confounding. Before we invest $300K/year in scheduling infrastructure,
            let's run a 600-patient RCT to prove appointments actually prevent readmission, not just correlated
            with lower-risk patients."
          </div>
          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Interview-Ready Insight:</strong> If asked "How would you reduce readmission rates for a
            hospital?" in a consulting interview, the winning answer structure is:{" "}
            <em>
              "First, I'd map the readmission funnel to find WHERE readmissions concentrate (by diagnosis, by
              time window). Then, I'd segment patients to find WHO readmits (high-risk cohorts). Third, I'd
              analyze pre-discharge signals to understand WHY (medication confusion? follow-up gaps? social
              barriers?). Fourth, I'd design interventions with clear ROI, starting with highest leverage
              (appointment scheduling) and expanding to harder problems (social support). Finally, I'd run RCTs
              to separate causation from confounding, because in healthcare, correlation is never enough."
            </em>{" "}
            Funnel → Segment → Signal → Intervention → Randomization.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Case07;
