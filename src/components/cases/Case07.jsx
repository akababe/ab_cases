const Case07 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 07</span>
        <h1>The 30-Day Revolving Door</h1>
        <div className="case-meta">Industry: Healthcare / Insurance &bull; Level: Advanced</div>
      </header>
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p><strong>St. Jude’s Medical Center</strong> is a large urban hospital system. In the modern healthcare landscape, particularly under "Value-Based Care" models, hospitals are no longer just paid for the volume of services they provide.</p>
          <p>Under the <strong>Hospital Readmissions Reduction Program (HRRP)</strong>, the government penalizes hospitals if their 30-day readmission rates for specific conditions (like heart failure or pneumonia) are higher than the national average.</p>
          <div className="highlight-box">
            <strong>Stakeholders:</strong> Chief Medical Officer (CMO), Director of Patient Care, Financial Controller.<br />
            <strong>Context:</strong> Readmissions are not only a sign of poor patient outcomes but also a massive financial liability. Every avoidable readmission costs the hospital an average of $15,000 in unreimbursed expenses.
          </div>
        </div>
      </section>
      <section>
        <h2>2. Business Problem</h2>
        <div className="content">
          <p>St. Jude’s is facing a <strong>"Readmission Penalty Crisis."</strong></p>
          <ul>
            <li><strong>Symptom:</strong> 18% of discharged heart failure patients return to the hospital within 30 days.</li>
            <li><strong>Root Cause:</strong> Poor "Transition of Care." Patients often leave the hospital without fully understanding their medication or without a scheduled follow-up appointment.</li>
            <li><strong>The "One-Size-Fits-All" Problem:</strong> The hospital currently calls every patient after discharge. However, the nurse team is overwhelmed and can only spend 2 minutes per call, making them ineffective.</li>
            <li><strong>Business Impact:</strong> St. Jude’s faced a $2.4M penalty last year due to high readmission rates.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <p>The goal is to build a <strong>Readmission Risk Engine (RRE)</strong> to identify high-risk patients 24 hours *before* they are discharged.</p>
          <div className="highlight-box">
            <strong>Key Questions:</strong>
            <ol>
              <li>Which clinical and social factors (Social Determinants of Health) most strongly predict readmission?</li>
              <li>How can we segment patients into High, Medium, and Low risk tiers to prioritize nursing interventions?</li>
              <li>What is the ROI of an intensive "In-Home Care" program for the top 5% highest-risk patients?</li>
            </ol>
          </div>
        </div>
      </section>
      <section>
        <h2>4. Data Perspective</h2>
        <div className="content">
          <p>We are merging Electronic Health Records (EHR) with social data:</p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Data Source</th>
                <th>Variables</th>
                <th>Predictive Insight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Clinical (EHR)</strong></td>
                <td>Diagnosis codes (ICD-10), Length of stay, Number of prior admissions in 12 months.</td>
                <td>Disease severity & chronicity.</td>
              </tr>
              <tr>
                <td><strong>Lab Results</strong></td>
                <td>Hemoglobin, Sodium levels, Albumin.</td>
                <td>Acute physiological stability.</td>
              </tr>
              <tr>
                <td><strong>Pharmacy</strong></td>
                <td>Number of distinct medications (Polypharmacy).</td>
                <td>Complexity of self-care.</td>
              </tr>
              <tr>
                <td><strong>SDoH (Social)</strong></td>
                <td>Zip code (poverty level), Transportation access, Lives alone.</td>
                <td>External barriers to recovery.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2>5. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <ol>
            <li><strong>Feature Engineering:</strong> We create a "Comorbidity Index." A patient with both Diabetes and Heart Failure is 3x more likely to return than a patient with just one.</li>
            <li><strong>The "LACE" Audit:</strong> We start with the standard LACE index (Length of stay, Acuity, Comorbidities, ER visits) and find it's only 60% accurate. We need to add "Social Factors."</li>
            <li><strong>SDoH Integration:</strong> We discover that patients living in "Food Deserts" (areas with low access to healthy food) have a 25% higher readmission rate for heart failure due to high-sodium diets.</li>
            <li><strong>Intervention Mapping:</strong>
              <ul>
                <li><strong>Low Risk:</strong> Automated SMS reminders.</li>
                <li><strong>Medium Risk:</strong> 15-minute nurse phone call.</li>
                <li><strong>High Risk:</strong> Home visit + Medication reconciliation by a pharmacist.</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>
      <section>
        <h2>6. Calculation & Simulation</h2>
        <div className="content">
          <p>Let's simulate the cost-benefit of the High-Risk Intervention Program.</p>
          <div className="calculation">
{`Annual Discharges (Heart Failure): 2,000 patients
Current Readmission Rate: 18% (360 patients)
Cost per Readmission: $15,000
Total Annual Cost: 360 * $15,000 = $5,400,000
Proposed Intervention (Top 10% - 200 High-Risk Patients):
Intervention Cost: $1,500 per patient (Home visit + Pharmacy consult)
Total Program Cost: 200 * $1,500 = $300,000
Expected Outcome:
The 200 high-risk patients normally account for 50% of readmissions (180 readmissions).
Program reduces their readmissions by 30% (54 readmissions avoided).
Savings Calculation:
Avoided Costs: 54 * $15,000 = `}<span className="math-result">$810,000</span>
{`Net Savings: $810,000 - $300,000 = `}<span className="math-result">$510,000</span>
{`ROI: `}<span className="math-result">170%</span>
          </div>
          <p><em>Interpretation:</em> By spending $300k on the most vulnerable patients, the hospital saves over $800k in penalties and unreimbursed costs, while significantly improving patient quality of life.</p>
        </div>
      </section>
      <section>
        <h2>7. Findings & Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <ul>
              <li><strong>The "Friday Discharge" Trap:</strong> Patients discharged on Fridays have a 12% higher readmission rate because primary care offices are closed over the weekend.</li>
              <li><strong>Polypharmacy:</strong> Patients taking more than 10 medications are the "tipping point" for readmission risk. <em>Insight:</em> Medication confusion is a bigger driver than the disease itself.</li>
              <li><strong>The "Lives Alone" Factor:</strong> Having a caregiver at home reduces the risk of readmission by 40%, regardless of the patient's age or clinical severity.</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>8. Recommendations</h2>
        <div className="content">
          <p><strong>Short-Term:</strong></p>
          <ul>
            <li>Implement a <strong>"Meds-to-Beds"</strong> program: Deliver all discharge medications to the patient's bedside *before* they leave, ensuring they have the first dose.</li>
            <li>Schedule the 7-day follow-up appointment *before* discharge (The "Golden Appointment").</li>
          </ul>
          <p><strong>Long-Term:</strong></p>
          <ul>
            <li>Deploy a <strong>Remote Patient Monitoring (RPM)</strong> pilot for high-risk heart failure patients (using smart scales to track sudden weight gain—a sign of fluid retention).</li>
            <li>Partner with local non-profits to address "Transportation Deserts" for patients who cannot drive to follow-up appointments.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>9. Business Decision-Making</h2>
        <div className="content">
          <p>The CMO decides to:</p>
          <ol>
            <li><strong>Reallocate Nursing Staff:</strong> Move 3 nurses from general discharge duty to a specialized "Transition of Care" team focusing exclusively on high-risk patients.</li>
            <li><strong>IT Integration:</strong> Embed the Risk Score directly into the physician's workflow in the EHR, so a "High Risk" alert pops up during the discharge planning meeting.</li>
          </ol>
        </div>
      </section>
      <section>
        <h2>10. Professional Analyst Mindset</h2>
        <div className="content">
          <p><strong>Senior Perspective:</strong> In healthcare, <strong>"The Data is Dirty."</strong> Clinical notes are messy, and labs are sometimes missing. A senior analyst doesn't wait for perfect data; they use what's available (like Length of Stay) and focus on <strong>Actionable Risk</strong>. If you can't intervene, the score is useless.</p>
          <div className="highlight-box">
            <strong>Key Lesson:</strong> Analytics in healthcare is a team sport. A model can find the risk, but only a nurse or pharmacist can fix it. **The goal is to augment human clinical judgment, not replace it.**
          </div>
        </div>
      </section>
    </div>
  );
};
export default Case07;
