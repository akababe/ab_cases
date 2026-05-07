const Case12 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 12</span>
        <h1>The Liquidity Mirage</h1>
        <div className="case-meta">Industry: Two-Sided Marketplace / Gig Economy &bull; Level: Advanced</div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>TaskFlow</strong> is a local home-services marketplace connecting homeowners with independent contractors (plumbers, electricians, cleaners). They monetize via a <strong>15% take-rate</strong> on all completed jobs. They operate in 50 major cities with over 2 million registered users.
          </p>
          <p>
            In any two-sided marketplace, the golden metric is <strong>Liquidity</strong> (the probability that a buyer finds a seller, and vice versa). TaskFlow's overall app downloads and Monthly Active Users (MAU) are growing at 15% month-over-month. However, total Gross Merchandise Value (GMV) and revenue have flatlined. <em>The growth engine is spinning, but the car isn't moving.</em>
          </p>
          <div className="highlight-box">
            <strong>Stakeholders:</strong> VP of Marketplace, Head of Growth, CFO.<br />
            <strong>Context:</strong> Consumer marketing is crushing targets. Cost Per Acquisition (CPA) for homeowners is at an all-time low. But revenue is stagnant. 
            <br />
            <strong>The Hidden Crisis:</strong> The marketplace is structurally unbalanced. Homeowners are flooding in, but there aren't enough active contractors to fulfill the jobs. Demand is cannibalizing itself.
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Invisible Problem: Why Traditional Metrics Lie</h2>
        <div className="content">
          <p>
            This case requires balancing two distinct user groups. The problem is <strong>invisible to aggregate top-line dashboards</strong> because vanity metrics mask user frustration.
          </p>
          <div className="highlight-box">
            <strong>Marketing View:</strong> "App downloads are up 20%. We're acquiring homeowners for $15!"
            <br />
            <strong>Finance View:</strong> "Total users are growing, but GMV per user is dropping 18%."
            <br />
            <strong>Product View:</strong> "Search volume is through the roof. High engagement."
            <br />
            <strong>Reality:</strong> 40% of homeowner searches result in "Zero Quotes." The liquidity has evaporated.
          </div>
          <p>
            The Liquidity Mirage breaks traditional acquisition metrics because a new user on a broken marketplace actually hurts the ecosystem. The churn timeline looks like this:
          </p>
          <ul>
            <li>
              <strong>Day 1:</strong> Homeowner downloads app, posts a request for a plumber. (Marketing celebrates an acquisition).
            </li>
            <li>
              <strong>Day 1-3:</strong> Request sits pending. The 3 plumbers in the area are fully booked. Request expires.
            </li>
            <li>
              <strong>Day 4:</strong> Homeowner deletes the app. The marketing spend is entirely wasted, and brand trust is destroyed forever.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. Business Problem: The "Unfulfilled Cascade"</h2>
        <div className="content">
          <p>
            TaskFlow's stagnant revenue isn't an engagement problem; it is a <strong>Supply-Side Constraint</strong> following a deadly cascade pattern.
          </p>
          <ul>
            <li>
              <strong>Phase 1 — The Empty Storefront (Search):</strong> Homeowners search for niche categories (e.g., HVAC repair) in specific zip codes and see zero available contractors.
            </li>
            <li>
              <strong>Phase 2 — The Ghosted Request (Match):</strong> Homeowners submit jobs, but contractors ignore them. <em>Why?</em> Contractors are overwhelmed with leads and cherry-pick only the most lucrative jobs.
            </li>
            <li>
              <strong>Phase 3 — The Trust Collapse (Churn):</strong> If a homeowner's very first job request is unfulfilled, they have an 85% probability of never opening the app again.
            </li>
            <li>
              <strong>Phase 4 — The Marketing Furnace:</strong> Because the system automatically targets lookalike audiences, the ad engine keeps pouring new homeowners into these "broken" zip codes, literally burning money.
            </li>
          </ul>
          <div className="highlight-box">
            <strong>Business Impact:</strong>
            <ul>
              <li>
                Current Search-to-Fill Rate: 42% (Meaning 58% of all requested jobs go unmonetized).
              </li>
              <li>Marketing Waste: $2.5M/month spent acquiring homeowners in areas with no contractor supply.</li>
              <li>
                LTV Destruction: A homeowner who completes 1 job has an LTV of $300. A homeowner who gets zero quotes has an LTV of $0, but still cost $15 to acquire.
              </li>
              <li>
                Contractor Churn: 15% of top contractors are leaving for competitors because the app sends them too many "low-value" leads they don't want to sift through.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Analytics Objective</h2>
        <div className="content">
          <p>
            Build a <strong>Geospatial Liquidity Dashboard</strong> that dynamically shifts marketing spend and product incentives based on real-time supply/demand ratios.
          </p>
          <div className="highlight-box">
            <strong>Key Questions:</strong>
            <ol>
              <li>
                What is the "Search-to-Fill" rate down to the zip-code and service-category level? 
              </li>
              <li>
                What is the "Speed to Lead" threshold? How fast must a contractor reply to secure the booking?
              </li>
              <li>
                Are contractors churning because of lack of demand, or because of poor demand quality?
              </li>
              <li>
                What is the true comparative Lifetime Value (LTV) of acquiring one new Contractor versus one new Homeowner?
              </li>
              <li>
                How can we adjust pricing (surge/bonuses) to temporarily fix liquidity deserts?
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. Data Perspective: The "Signal Stack"</h2>
        <div className="content">
          <p>
            Marketplace analytics cannot rely on global averages. We must combine four layers of granular data to diagnose the mirage.
          </p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Layer</th>
                <th>Data Source</th>
                <th>Key Variables</th>
                <th>What It Reveals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Layer 1<br />Search Intent</strong>
                </td>
                <td>App Search Logs</td>
                <td>
                  Search Queries, Zip Code, Time of Day, "Zero Result" count
                </td>
                <td>True localized consumer demand</td>
              </tr>
              <tr>
                <td>
                  <strong>Layer 2<br />Match Velocity</strong>
                </td>
                <td>Job Request Events</td>
                <td>
                  Time from Request to Quote, Quotes per Job, Acceptance Rate
                </td>
                <td>Marketplace friction and responsiveness</td>
              </tr>
              <tr>
                <td>
                  <strong>Layer 3<br />Supply Utilization</strong>
                </td>
                <td>Contractor Activity</td>
                <td>
                  Hours online, Jobs completed per week, Ignore rate on requests
                </td>
                <td>Are contractors maxed out or just inactive?</td>
              </tr>
              <tr>
                <td>
                  <strong>Layer 4<br />Unit Economics</strong>
                </td>
                <td>Stripe / Billing</td>
                <td>
                  Take-rate revenue per geo, CAC by user type, LTV by cohort
                </td>
                <td>Financial impact of the imbalance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Step-by-Step: 7-Step Diagnostic Sequence</h2>
        <div className="content">
          <p>
            To fix a marketplace, you don't build one model; you map the supply-and-demand physics of the platform through sequential validation.
          </p>

          <ol>
            <li>
              <strong>Step 1 — Expose the "Zero-Results" Churn Threshold:</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                We measure exactly what happens when demand goes unfulfilled to calculate the cost of bad liquidity.
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Finding:
Users who get ≥3 quotes on their first request: 65% 12-month retention
Users who get 1-2 quotes: 38% 12-month retention
Users who get 0 quotes: 3% 12-month retention
⟹ Insight: First-time zero-quote experiences are a fatal event. Unfulfilled demand is toxic.`}
              </div>
            </li>

            <li>
              <strong>Step 2 — Calculate Geofenced "Search-to-Fill" Rates:</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                City-level averages (e.g., "Chicago is healthy") mask neighborhood-level failures. We drill down to Zip + Category.
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Liquidity Variance in "Chicago":
• Zip 60614 (Lincoln Park) - Cleaners: 85% Fill Rate (Oversupplied)
• Zip 60614 (Lincoln Park) - Plumbers: 12% Fill Rate (Severe Desert)
• Zip 60622 (Wicker Park) - Plumbers: 78% Fill Rate (Healthy)
⟹ Insight: Overall city MAU looks great, but specific neighborhood/trade combos are failing completely.`}
              </div>
            </li>

            <li>
              <strong>Step 3 — Measure Supply Utilization vs. Engagement:</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                Are jobs going unfulfilled because we lack plumbers, or because existing plumbers are ignoring notifications?
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Contractor Behavior Tiers:
• "Maxed Out": 25% of supply is doing 80% of jobs. They ignore new requests because they are full.
• "The Ghost Supply": 40% of registered contractors haven't logged in for 30+ days.
• "Cherry Pickers": 35% review jobs but only accept high-ticket items (>$500).
⟹ Conclusion: We don't just need more supply; we need to penalize cherry-picking and wake up ghost supply.`}
              </div>
            </li>

            <li>
              <strong>Step 4 — Determine the "Speed to Lead" Decay Curve:</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                How fast does a contractor need to reply to a request to win the job?
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Conversion by Response Time:
Quote received in < 15 mins: 78% job booking rate
Quote received in 15-60 mins: 42% job booking rate
Quote received in 1-4 hours: 15% job booking rate
Quote received after 4 hours: 2% job booking rate
⟹ Insight: Liquidity isn't just spatial; it's temporal. Slow supply is functionally equivalent to zero supply.`}
              </div>
            </li>

            <li>
              <strong>Step 5 — Segment the Marketplace Zones:</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                Group every Zip+Category into 4 actionable macro-segments for marketing.
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Zone 1 — Balanced (30% of market): Fill Rate > 60%. (Maintain spend)
Zone 2 — Demand Heavy/Supply Starved (45% of market): Fill Rate < 30%. (The core problem)
Zone 3 — Supply Heavy/Demand Starved (15% of market): Fill Rate > 85%, but contractors idle.
Zone 4 — Dead Zones (10% of market): 0 Demand, 0 Supply. (Ignore for now)`}
              </div>
            </li>

            <li>
              <strong>Step 6 — Holdout Test (The Budget Flip):</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                In Zone 2 (Supply Starved) areas, we pause all homeowner acquisition and redirect budget to contractor acquisition bonuses.
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Holdout Test Results (4-week window in Atlanta):
Control Group (Standard 80% Demand / 20% Supply budget):
  → Search-to-Fill: 28% | Net Revenue: $45K
  
Treatment Group (0% Demand / 100% Supply budget + $500 Signup Bonus):
  → Search-to-Fill: 62% | Net Revenue: $115K
  
Statistical Significance: p < 0.001 ✓
⟹ Conclusion: Throttling demand actually INCREASES revenue if it solves the supply bottleneck.`}
              </div>
            </li>

            <li>
              <strong>Step 7 — Calculate True Value: Contractor vs. Homeowner:</strong>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                Finance needs to know why we are paying $300 to acquire a plumber when homeowners cost $15.
              </p>
              <div className="calculation" style={{ margin: "12px 0", fontSize: "13px" }}>
{`Average Take-Rate Revenue per completed job: $40

1 New Homeowner LTV: Completes avg 1.5 jobs/year = $60 revenue. CAC = $15. ROI = 4x.
1 New Contractor LTV: Completes avg 40 jobs/year = $1,600 revenue. CAC = $300. ROI = 5.3x.

Systemic Value: 
Adding 1 Contractor allows the system to absorb 25 more Homeowners who would have otherwise churned.
True Value of Contractor = Contractor LTV ($1,600) + Saved Demand LTV (25 × $60 = $1,500) = $3,100.
⟹ The math dictates acquiring 1 Contractor is worth 20x more than acquiring 1 Homeowner.`}
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Findings & Insights</h2>
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
                  <td>Homeowner Churn Driver</td>
                  <td>Price is too high</td>
                  <td>
                    <strong>"Zero Quotes" (Speed/Availability)</strong>
                  </td>
                </tr>
                <tr>
                  <td>Marketing Strategy</td>
                  <td>Max out Homeowner MAU</td>
                  <td>
                    <strong>Acquiring Demand in Zone 2 burns money and brand equity</strong>
                  </td>
                </tr>
                <tr>
                  <td>Contractor Growth</td>
                  <td>More leads = Happier contractors</td>
                  <td>
                    <strong>Too many low-value leads causes "Alert Fatigue" and cherry-picking</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul style={{ marginTop: "20px" }}>
            <li>
              <strong>The 20x Supply Multiplier:</strong> Because of the unfulfilled cascade, adding demand to a supply-constrained network generates $0 in revenue. Adding supply instantly monetizes the backlog. Supply is 20x more valuable right now.
            </li>
            <li>
              <strong>The "Alert Fatigue" Discovery:</strong> Top contractors are ignoring the app because they get 50 pings a day for $80 handyman jobs when they want $2,000 remodel jobs. <em>Strategic Implication:</em> We need an algorithm that routes job types to the right tier of contractor, protecting the time of our top earners.
            </li>
            <li>
              <strong>The 15-Minute Rule:</strong> If a homeowner doesn't get a notification saying "Contractor is reviewing your job" within 15 minutes, they Google a local business instead. Speed is our primary product, not just matchmaking.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Recommendations</h2>
        <div className="content">
          <p><strong>Short-Term (Weeks 1-4):</strong></p>
          <ul>
            <li>
              <strong>Deploy "Dynamic Spend Allocation":</strong> Immediately pause Google/Facebook ad spend for Homeowner acquisition in all Zone 2 (Supply Starved) zip codes. Shift 100% of those localized budgets to Contractor sign-up bonuses.
            </li>
            <li>
              <strong>Implement "Speed Matching":</strong> If a requested job isn't claimed in 15 minutes, automatically blast it to a wider radius of contractors with a temporary 5% take-rate reduction (bonus to them) to save the job.
            </li>
          </ul>

          <p><strong>Mid-Term (Months 2-4):</strong></p>
          <ul>
            <li>
              <strong>Surge Pricing & Subsidies:</strong> Introduce dynamic pricing. When a zip code is supply-starved, boost homeowner prices by 15% and pass 100% of the surge directly to contractors to incentivize them to cross zip codes.
            </li>
            <li>
              <strong>Contractor Tiering System:</strong> Redesign the contractor UI. Give "Gold" contractors (high completion rates) the ability to filter out low-ticket jobs entirely, eliminating alert fatigue.
            </li>
          </ul>

          <p><strong>Long-Term (Months 5+):</strong></p>
          <ul>
            <li>
              <strong>"Auto-Book" Feature for Low-Ticket Jobs:</strong> Standardize pricing for basic tasks (e.g., TV mounting = $99). Allow homeowners to bypass the "quote" phase entirely, and let new/junior contractors auto-accept these jobs directly into their calendars.
            </li>
            <li>
              <strong>Change the Company North Star Metric:</strong> Transition the whole company off "MAU" and onto "Search-to-Fill Rate".
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. Business Decision-Making</h2>
        <div className="content">
          <p>Based on this analysis, the VP of Marketplace and Head of Growth jointly decide:</p>

          <ol>
            <li>
              <strong>Marketing Budget Overhaul:</strong> Shift the overall company marketing budget from an 80/20 (Demand/Supply) split to a 30/70 split. 
            </li>
            <li>
              <strong>Halt Zone 2 Expansion:</strong> Stop expanding into new cities until the existing 50 cities maintain a baseline 60% Search-to-Fill rate.
            </li>
            <li>
              <strong>Launch "Supply Reactivation" Squad:</strong> CS team is repurposed to call the 40% of "Ghost Supply" contractors to manually onboard them and offer their first 3 jobs commission-free.
            </li>
          </ol>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>30-Day KPI Monitoring:</strong>
            <table className="data-table">
              <thead>
                <tr>
                  <th>KPI</th>
                  <th>Current</th>
                  <th>Target (Q3)</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Search-to-Fill Rate</td>
                  <td>42%</td>
                  <td>65%</td>
                  <td>Marketplace Ops</td>
                </tr>
                <tr>
                  <td>% of Quotes under 15 Mins</td>
                  <td>25%</td>
                  <td>50%</td>
                  <td>Product</td>
                </tr>
                <tr>
                  <td>Homeowner CPA (Zone 1 only)</td>
                  <td>$15</td>
                  <td>$22 (Acceptable increase)</td>
                  <td>Marketing</td>
                </tr>
                <tr>
                  <td>Contractor Activation Rate</td>
                  <td>22%</td>
                  <td>40%</td>
                  <td>Customer Success</td>
                </tr>
                <tr>
                  <td>Overall GMV (Platform Value)</td>
                  <td>Flat YoY</td>
                  <td>+15% QoQ</td>
                  <td>CFO</td>
                </tr>
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
            <strong>Senior Perspective:</strong> In a two-sided marketplace, <strong>growth can be toxic</strong>. Acquiring demand before you have supply doesn't just waste marketing dollars—it permanently destroys brand reputation and churns future users before they even start.
          </p>

          <p style={{ marginTop: "15px" }}>
            This case teaches a critical skill: <strong>Diagnosing Unbalanced Ecosystems.</strong> The Liquidity Mirage tricks companies into celebrating top-of-funnel wins while the bottom-of-funnel is bleeding out. To fix it, you need to:
          </p>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>1. Track the "Failing Action"</strong>
            <p style={{ margin: "8px 0", fontSize: "14px" }}>
              Don't just measure what happens (a completed job). Measure what *fails* to happen. "Zero Results" and "Ignored Requests" are the truest signals of marketplace health.
            </p>
          </div>

          <div className="highlight-box">
            <strong>2. Stop Using Global Averages</strong>
            <p style={{ margin: "8px 0", fontSize: "14px" }}>
              Saying "Our app has a 60% match rate" is useless if plumbers match at 10% and cleaners at 90%. Marketplace liquidity is hyper-local and category-specific.
            </p>
          </div>

          <div className="highlight-box">
            <strong>3. Calculate the "Systemic Value" of Users</strong>
            <p style={{ margin: "8px 0", fontSize: "14px" }}>
              A contractor isn't just worth their own take-rate. They are worth the LTV of the 25 homeowners they save from churning. You must adjust CAC targets based on this systemic multiplier.
            </p>
          </div>

          <div className="highlight-box">
            <strong>4. Be Willing to Strangle Demand</strong>
            <p style={{ margin: "8px 0", fontSize: "14px" }}>
              It feels wrong to tell Marketing to turn off consumer ads when they are hitting their targets. A senior analyst has the conviction to stop bad growth to save the ecosystem.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Key Lesson:</strong> In a gig-economy model, Supply is the product. Without it, the demand side is just staring at an empty shelf. You must relentlessly balance the scales.
            <br />
            <br />
            <strong>Interview Insight:</strong> If asked "How would you grow a marketplace app?" the junior answer is "Optimize the ad funnels to lower CPA." The senior answer is "First, I'd map the Search-to-Fill rate by zip code and category. I wouldn't spend a dollar on consumer marketing in areas where we don't have enough supply to guarantee a 15-minute response time."
          </div>
        </div>
      </section>
    </div>
  );
};

export default Case12;