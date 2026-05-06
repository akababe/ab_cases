const Case06 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 06</span>
        <h1>The Last-Mile Bottleneck</h1>
        <div className="case-meta">Industry: Logistics / E-commerce &bull; Level: Intermediate</div>
      </header>
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p><strong>FastTrack Logistics</strong> is a global third-party logistics (3PL) provider handling last-mile delivery for 12 major e-commerce platforms. Their fleet of 5,000 vans operates across 20 metro areas, completing ~66,000 deliveries per day. Annual revenue: $740M. The "Last-Mile" — the final journey from a local distribution center to the customer's doorstep — represents 53% of total shipping cost despite covering only 3% of total distance traveled.</p>
          <p>FastTrack's core competitive advantage is their <strong>"Next-Day Delivery" SLA</strong> — a promise that is both their biggest strength and biggest cost driver. Fuel prices rose 30% last year, and urban congestion is adding 18 minutes per route on average.</p>
          <div className="highlight-box">
            <strong>Stakeholders:</strong> Operations Director, Fleet Manager, Sustainability Officer, and crucially — <strong>e-commerce clients</strong> (Amazon, Lazada) who pay per successful delivery, not per attempt.<br />
            <strong>Context:</strong> Operating margins have shrunk from 8% to 4.5% in 18 months. The board has issued an ultimatum: restore margins to 7%+ within 2 quarters or begin renegotiating SLA contracts — which would risk losing 3 major clients.<br />
            <strong>Stakeholder Tension:</strong> The Fleet Manager wants to hire 300 more drivers to handle volume. The Operations Director wants to optimize existing capacity. The Sustainability Officer needs a 20% CO₂ reduction for ESG reporting. Analytics must show whether optimization achieves all three goals simultaneously — or requires tradeoffs.
          </div>
        </div>
      </section>
      <section>
        <h2>2. Business Problem</h2>
        <div className="content">
          <p>The <strong>"Last-Mile Efficiency Gap"</strong> has three compounding drivers:</p>
          <ul>
            <li><strong>Problem A — Delivery Failures (15% rate):</strong> 9,900 of 66,000 daily deliveries fail on first attempt. Cost per re-delivery: $8.00. Annual failure cost: <strong>$23.8M/year</strong>. Clients only pay for successful deliveries, so failed attempts are 100% cost and 0% revenue.</li>
            <li><strong>Problem B — Inefficient Routing:</strong> Drivers follow habitual routes built on memory, not optimization. Analysis shows the average route is 12% longer than the mathematical optimal. On 100 miles/van/day across 5,000 vans, this wastes 60,000 miles/day of fuel.</li>
            <li><strong>Problem C — Left-Turn Idle Time:</strong> Waiting to cross traffic for left turns accounts for 10% of engine idle time and 20% of minor accidents (inspired by real UPS operational research). At $4.50/gallon and 15 MPG fleet efficiency, idle time is pure cost.</li>
            <li><strong>Problem D — Driver Turnover (hidden cost):</strong> Annual driver voluntary turnover is 38% — partly driven by inefficient routes that cause overwork and stress. Replacement cost per driver: $4,200 (recruiting + training). Annual turnover cost: <strong>$7.98M/year</strong> — nearly invisible in the P&amp;L but analytically traceable.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <p>Implement <strong>Predictive Route Optimization</strong> to minimize total cost-per-successful-delivery — the only metric that reflects both efficiency and customer outcome simultaneously.</p>
          <div className="highlight-box">
            <strong>Key Questions:</strong>
            <ol>
              <li>What is the optimal stop sequence (minimizing left turns, deadheading, and idle time) per zone?</li>
              <li>Can we predict "Home Probability" per delivery address and re-sequence to catch customers when they're most likely to be home?</li>
              <li>How does route optimization affect driver satisfaction/turnover — and what is that dollar value?</li>
              <li>What is the ESG (CO₂) impact of a 10% mileage reduction, and can it be included in client contract renewals?</li>
            </ol>
            <strong>Target:</strong> Reduce cost-per-delivery from $5.60 to $4.80 (-14%), restore margin to 7%, and reduce CO₂ by 20% — all from the same optimization initiative.
          </div>
        </div>
      </section>
      <section>
        <h2>4. Data Perspective</h2>
        <div className="content">
          <p>Five data streams integrated into the route optimization engine:</p>
          <table className="data-table">
            <thead>
              <tr><th>Data Type</th><th>Key Variables</th><th>Purpose</th><th>Refresh Rate</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Telematics</strong></td><td>GPS, idle time, fuel rate, brake events, speed</td><td>Route audit &amp; driver behavior</td><td>Real-time</td></tr>
              <tr><td><strong>Traffic API</strong></td><td>Congestion level, road closures, turn restrictions</td><td>Dynamic re-routing</td><td>Every 5 min</td></tr>
              <tr><td><strong>Delivery Logs</strong></td><td>Success flag, timestamp, attempt count, customer note</td><td>Home Probability model</td><td>Per delivery</td></tr>
              <tr><td><strong>Address Intelligence</strong></td><td>Address type (house/apt/commercial), floor, access codes, dog/gate flags</td><td>Failure risk scoring</td><td>Static + updated on failure</td></tr>
              <tr><td><strong>HR / Driver Data</strong></td><td>Route assigned, complaints, overtime hours, tenure</td><td>Driver satisfaction linkage</td><td>Weekly</td></tr>
            </tbody>
          </table>
          <p style={{marginTop: '20px'}}><strong>Sample Delivery Log — Zone 7 (Urban Residential), One Van, One Day:</strong></p>
          <table className="data-table">
            <thead>
              <tr><th>Stop</th><th>Address Type</th><th>Time Window</th><th>Attempt</th><th>Outcome</th><th>Miles from Prior</th><th>Left Turn?</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>House</td><td>10:00 AM</td><td>1st</td><td>✅ Success</td><td>2.1 mi</td><td>No</td></tr>
              <tr><td>2</td><td>Apartment</td><td>10:30 AM</td><td>1st</td><td>❌ Failed</td><td>0.4 mi</td><td>Yes (3 min wait)</td></tr>
              <tr><td>3</td><td>House</td><td>11:00 AM</td><td>1st</td><td>✅ Success</td><td>1.8 mi</td><td>No</td></tr>
              <tr><td>4</td><td>Commercial</td><td>11:30 AM</td><td>1st</td><td>✅ Success</td><td>0.2 mi</td><td>No</td></tr>
              <tr><td>5</td><td>Apartment</td><td>12:00 PM</td><td>1st</td><td>❌ Failed</td><td>3.2 mi</td><td>Yes (4 min wait)</td></tr>
              <tr><td>6</td><td>House</td><td>6:30 PM</td><td>2nd</td><td>✅ Success</td><td>8.4 mi deadhead</td><td>No</td></tr>
            </tbody>
          </table>
          <div className="highlight-box" style={{marginTop: '15px'}}>
            <strong>What the Data Shows Immediately:</strong> Stop 5 (apartment, 12 PM) failed — predictable, because apartment residents are rarely home at noon on a weekday. Stop 6 required an 8.4-mile deadhead trip for a second attempt at 6:30 PM. Total waste: 8.4 miles + $8.00 re-delivery cost. The fix: re-sequence apartment deliveries to the 6–8 PM window on the first pass.
          </div>
          <div className="highlight-box" style={{marginTop: '12px'}}>
            <strong>Data Limitations:</strong>
            <ul>
              <li><strong>Missing — Customer Real-Time Location:</strong> We know historical success rates by address/time, but not whether today's specific customer is home. SMS/app opt-in for "I'm home" signals would dramatically improve prediction accuracy.</li>
              <li><strong>Hidden Variable — Building Access Difficulty:</strong> Apartment buildings with coded entrances have 3x higher failure rates than houses — but access difficulty is not consistently coded in the address database.</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>5. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <p>The analyst works from macro to micro — fleet-level first, route-level second, stop-level third:</p>
          <ol>
            <li><strong>Step 1 — Decompose the Cost Structure:</strong> Before optimizing, understand where cost lives:
              <div className="calculation" style={{margin: '12px 0'}}>
{`Cost-per-Delivery Breakdown ($5.60 total):
Driver labor (time):        $2.10  (37.5%) ← biggest lever
Fuel:                       $1.50  (26.8%)
Re-delivery failures:       $0.84  (15.0%) ← 100% avoidable
Vehicle depreciation:       $0.65  (11.6%)
Overhead (dispatch, tech):  $0.51   (9.1%)
Priority: Attack labor (time) and failures first.
A 10% reduction in route time AND a 20% reduction in failures
together save $0.42/delivery = 7.5% cost reduction.`}
              </div>
            </li>
            <li><strong>Step 2 — The Left-Turn Audit:</strong> Analyze GPS turn data across all 5,000 vans. Left turns across traffic lanes cause idle time, accident risk, and fuel burn. The UPS optimization insight, validated by FastTrack data:
              <ul>
                <li>Average left-turn wait: 3.2 minutes (vs. 0.3 min for right turns)</li>
                <li>Left turns per route: 18 (current) → 6 (optimized, right-turn-preference routing)</li>
                <li>Time saved per route: 12 left turns eliminated × 2.9 min saved = <strong>34.8 minutes/driver/day</strong></li>
                <li>At 5,000 vans: 2,900 hours/day of driver time recovered = 2.9 extra deliveries per van per day</li>
              </ul>
            </li>
            <li><strong>Step 3 — Home Probability Score (Propensity Model):</strong> Build a predictive model for delivery success probability. Features:
              <table className="data-table" style={{marginTop: '10px'}}>
                <thead>
                  <tr><th>Feature</th><th>Impact on Success</th><th>Odds Ratio</th></tr>
                </thead>
                <tbody>
                  <tr><td>Delivery time window (6–8 PM)</td><td>Very High</td><td>3.8x vs 10AM–2PM</td></tr>
                  <tr><td>Address type: House vs. Apartment</td><td>High</td><td>1.9x (house higher)</td></tr>
                  <tr><td>Customer SMS opt-in</td><td>High</td><td>2.4x (opted-in higher)</td></tr>
                  <tr><td>Day of week: Monday vs. Friday</td><td>Medium</td><td>1.3x (Monday higher)</td></tr>
                  <tr><td>Historical success at this address</td><td>Medium</td><td>1.7x (prior success)</td></tr>
                  <tr><td>Weather (rain = more people home)</td><td>Low–Medium</td><td>1.2x on rain days</td></tr>
                </tbody>
              </table>
            </li>
            <li><strong>Step 4 — Density-Based Zone Clustering:</strong> Replace zip-code-based zones with density clusters. Optimization rule: <strong>"Density is King"</strong> — a route with 20 stops in 2 miles generates 4x the revenue-per-mile of 5 stops across 10 miles.
              <ul>
                <li>Use DBSCAN clustering on delivery address coordinates, weighted by package volume</li>
                <li>Merge high-density apartment clusters with the evening time window (6–8 PM)</li>
                <li>Assign commercial deliveries to morning runs (businesses open 9 AM–5 PM, 98% first-attempt success)</li>
              </ul>
            </li>
            <li><strong>Step 5 — TSP Route Sequencing with Constraints:</strong> Apply the Traveling Salesperson Problem algorithm per cluster with real-world constraints:
              <ul>
                <li><strong>Why TSP is hard:</strong> Finding the mathematically optimal sequence for 80 stops has more possible combinations than atoms in the universe (80! ≈ 7×10¹¹⁸). We use heuristic solvers (Google OR-Tools) that find near-optimal solutions in under 2 seconds.</li>
                <li><strong>Constraints added:</strong> Right-turn preference, time windows per stop type, vehicle weight limits, no-park zones</li>
                <li><strong>Result:</strong> Average route length reduced from 100 miles to 87 miles (-13%)</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>
      <section>
        <h2>6. Calculation &amp; Simulation</h2>
        <div className="content">
          <p>Full financial impact across all four optimization levers:</p>
          <div className="calculation">
{`FLEET BASELINE:
5,000 vans | 100 miles/van/day | 300 operating days/year
15 MPG fuel efficiency | $4.50/gallon | 66,000 deliveries/day
─────────────────────────────────────────────────────────────
LEVER 1 — Route Mileage Reduction (13% from TSP + right turns):
Current fuel cost: (5,000×100×300)/15 × $4.50 = $45,000,000
Optimized (87 miles): (5,000×87×300)/15 × $4.50 = `}<span className="math-result">$39,150,000</span>
{`Fuel savings: `}<span className="math-result">$5,850,000/year</span>
{`CO₂ reduction: 13% fewer miles × 5,000 vans × 300 days × 0.89 lbs CO₂/mile = `}<span className="math-result">174M lbs CO₂ saved (19.6%)</span>
{`
─────────────────────────────────────────────────────────────
LEVER 2 — Delivery Failure Reduction (20% improvement):
Current failure cost: 9,900 failures/day × $8.00 × 300 days = $23,760,000
After optimization (failure rate: 12%): 7,920/day × $8.00 × 300 = $19,008,000
Failure savings: `}<span className="math-result">$4,752,000/year</span>
{`
─────────────────────────────────────────────────────────────
LEVER 3 — Driver Turnover Reduction:
Optimized routes reduce overtime and stress.
Turnover drops from 38% to 24% (piloted in Zone 7 over 90 days).
Saved replacements: 5,000 × 14% × $4,200 = `}<span className="math-result">$2,940,000/year</span>
{`
─────────────────────────────────────────────────────────────
LEVER 4 — Capacity Recovery (2.9 extra deliveries/van/day):
Revenue per delivery: $5.60 → extra capacity = 5,000 × 2.9 × $5.60 × 300 = `}<span className="math-result">$24,360,000 new revenue potential</span>
{`(Even if only 50% utilized: `}<span className="math-result">$12,180,000</span>{`)
─────────────────────────────────────────────────────────────
TOTAL SAVINGS (Levers 1–3 + 50% of Lever 4):
$5,850,000 + $4,752,000 + $2,940,000 + $12,180,000 = `}<span className="math-result">$25,722,000/year</span>
{`
PER-VAN BREAKDOWN (for driver town halls):
Total savings ÷ 5,000 vans = `}<span className="math-result">$5,144/van/year</span>
{`Per working day: $5,144 / 300 = `}<span className="math-result">$17.15/van/day</span>
{`"Your optimized route saves FastTrack $17 every single day you drive it."`}
          </div>
        </div>
      </section>
      <section>
        <h2>7. Findings &amp; Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>What We Expected vs. What We Found:</strong>
            <table className="data-table" style={{marginTop: '12px'}}>
              <thead>
                <tr><th>Assumption</th><th>Expected</th><th>Actual Finding</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Main cost driver</td>
                  <td>Fuel (long distances)</td>
                  <td><strong>Driver labor time (37.5%) and failures (15%) exceed fuel savings potential</strong></td>
                </tr>
                <tr>
                  <td>Route optimization benefit</td>
                  <td>Fuel savings only</td>
                  <td><strong>Turnover reduction ($2.9M) is the largest single hidden benefit</strong></td>
                </tr>
                <tr>
                  <td>Monday delivery volume</td>
                  <td>Highest failure rate (post-weekend)</td>
                  <td><strong>Lowest failure rate — WFH trend makes Monday the easiest delivery day</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul style={{marginTop: '16px'}}>
            <li><strong>The "90/10 Rule":</strong> 90% of turns should be right-hand turns. Eliminating 12 left turns per route saves 34.8 minutes/driver/day — equivalent to 2.9 extra deliveries. Over the full fleet, this is 14,500 additional deliveries per day without a single new van.</li>
            <li><strong>Density is King:</strong> A route with 20 stops in 2 miles is 4x more profitable per mile than 5 stops across 10 miles. The highest-cost routes in the network are not long-distance suburban runs — they are apartment-heavy urban routes attempted at 11 AM when residents are at work.</li>
            <li><strong>The Monday Effect:</strong> Delivery success rates are 12% higher on Mondays vs. Fridays. The WFH (work-from-home) trend has made Monday the easiest delivery day — but FastTrack's routing still treats all weekdays equally. Re-concentrating high-difficulty apartment deliveries on Mondays would reduce weekly failure rates by an estimated 4%.</li>
            <li><strong>ESG Finding:</strong> The 13% mileage reduction translates to 174 million lbs of CO₂ saved annually — equivalent to removing 7,900 cars from the road. This is a contractual ESG deliverable for 3 client accounts that have CO₂ reduction clauses in their 3PL agreements, representing $18M in protected contract value.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>8. Recommendations</h2>
        <div className="content">
          <p><strong>Short-Term (Weeks 1–4, Zero New Technology):</strong></p>
          <ul>
            <li><strong>Re-sequence apartment deliveries to 6–8 PM time window</strong> immediately using existing routing software. <br /><strong>Expected Impact:</strong> Reduce apartment failure rate from 28% to 14%, saving ~$2.4M/year. <strong>Cost: $0</strong> (dispatch rule change only).</li>
            <li><strong>Launch "$1 Green Window" incentive</strong> — offer customers a $1 delivery credit to choose a 2-hour window when a van is already in their neighborhood. <br /><strong>Expected Impact:</strong> Cluster 15% more deliveries per route, reducing total van-miles by 5%. <strong>Cost:</strong> $1/customer × estimated 3M opt-ins = $3M/year cost vs. $4.5M fuel savings = <strong>net +$1.5M.</strong></li>
          </ul>
          <p><strong>Long-Term (Months 2–6):</strong></p>
          <ul>
            <li><strong>Deploy OR-Tools TSP routing engine</strong> to replace manual/GPS routing for all 5,000 vans. <br /><strong>Expected Impact:</strong> 13% mileage reduction ($5.85M fuel savings). <strong>Cost:</strong> $800K implementation + $120K/year maintenance. <strong>Payback: 7 weeks.</strong></li>
            <li><strong>Pilot Smart Lockers</strong> in top 20 high-failure apartment zones. <br /><strong>Expected Impact:</strong> Eliminate 100% of re-deliveries in those zones (~$1.2M in targeted failure cost). <strong>Cost:</strong> $2,500/locker × 200 units = $500K capex.</li>
          </ul>
          <div className="highlight-box" style={{marginTop: '16px'}}>
            <strong>Priority Matrix:</strong>
            <table className="data-table">
              <thead>
                <tr><th>Action</th><th>Annual Benefit</th><th>Cost</th><th>Priority</th></tr>
              </thead>
              <tbody>
                <tr><td>Re-sequence apartments to 6–8PM</td><td>$2.4M</td><td>$0</td><td>🔴 This week</td></tr>
                <tr><td>Green Window customer incentive</td><td>$1.5M net</td><td>$3M gross</td><td>🔴 Month 1</td></tr>
                <tr><td>TSP routing engine deployment</td><td>$5.85M fuel</td><td>$800K one-time</td><td>🟡 Month 2</td></tr>
                <tr><td>Smart Lockers (top 20 zones)</td><td>$1.2M</td><td>$500K capex</td><td>🟡 Month 3</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <h2>9. Business Decision-Making</h2>
        <div className="content">
          <p>The Operations Director approves the full optimization program after the ESG finding seals the business case — three client contracts have CO₂ reduction clauses worth $18M in aggregate:</p>
          <ol>
            <li><strong>Phase 1 — Routing Rules (Week 1):</strong> Right-turn preference + apartment time window re-sequencing. No new technology. Immediate margin impact.</li>
            <li><strong>Phase 2 — Technology (Month 2):</strong> Deploy TSP routing engine with 90-day pilot on 500 vans in 2 cities. Compare cost-per-delivery vs. 4,500-van control group. Roll out if &gt;10% improvement confirmed.</li>
            <li><strong>Alternative Strategy Rejected:</strong> The Fleet Manager's proposal to hire 300 new drivers was rejected on financial grounds. At $52,000/driver/year fully loaded, 300 drivers = $15.6M additional cost — vs. the optimization program's $25.7M in savings at $1.8M total cost. Optimization generates a 14x better ROI than headcount expansion.</li>
          </ol>
          <div className="highlight-box" style={{marginTop: '16px'}}>
            <strong>Monitoring Dashboard — Weekly KPIs:</strong>
            <table className="data-table">
              <thead>
                <tr><th>KPI</th><th>Current</th><th>Target (Q2)</th><th>Alert Threshold</th></tr>
              </thead>
              <tbody>
                <tr><td>First-Attempt Success Rate</td><td>85%</td><td>92%</td><td>&lt;88% = zone review</td></tr>
                <tr><td>Cost per Successful Delivery</td><td>$5.60</td><td>$4.80</td><td>&gt;$5.30 = route audit</td></tr>
                <tr><td>Avg Route Miles per Van</td><td>100 mi</td><td>87 mi</td><td>&gt;95 mi = TSP check</td></tr>
                <tr><td>Driver Voluntary Turnover (annual)</td><td>38%</td><td>24%</td><td>&gt;32% = workload review</td></tr>
                <tr><td>CO₂ per Delivery (lbs)</td><td>Baseline</td><td>-20%</td><td>&gt;-10% = ESG risk flag</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <h2>10. Professional Analyst Mindset</h2>
        <div className="content">
          <p><strong>Senior Perspective:</strong> Logistics is where "Math meets the Pavement." You can build a perfect algorithm, but if a driver can't find parking, a dog blocks the porch, or a building requires an access code that isn't in the database, the model fails. A senior analyst always builds in <strong>human buffers</strong> — slack time per route (10–15%), driver override authority, and exception handling logic for real-world surprises.</p>
          <div className="highlight-box">
            <strong>Key Lesson:</strong> The most expensive mistake in route optimization is optimizing for the wrong metric. Shortest route ≠ Fastest route ≠ Most profitable route. Always optimize for <strong>Net Revenue per Stop</strong> — a 5-mile drive to a $500 commercial delivery beats a 0.5-mile drive to a $15 residential package on every financial metric.
          </div>
          <div className="highlight-box" style={{marginTop: '16px'}}>
            <strong>Common Beginner Mistake:</strong> Presenting route optimization savings to operations staff as "the algorithm saves $17/van/day." Drivers don't connect with abstract numbers. The winning communication: <em>"Our new routing means you'll finish your route 35 minutes earlier every day — and you'll have 3 fewer apartment re-deliveries to handle."</em> Always translate analytical results into the human experience of the people who implement them.
          </div>
          <div className="highlight-box" style={{marginTop: '16px'}}>
            <strong>Interview-Ready Insight:</strong> If asked "How would you optimize last-mile delivery?" the structured answer: <em>"First, I'd decompose cost-per-delivery by category to find the highest-leverage intervention. In most networks, failed deliveries and driver labor time are bigger levers than fuel. Second, I'd build a Home Probability model to re-sequence stops by predicted customer availability. Third, I'd apply TSP routing with right-turn preference. Fourth, I'd measure the ESG impact — because in 3PL contracts, CO₂ reduction is increasingly a contractual obligation, not just a PR initiative."</em>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Case06;
