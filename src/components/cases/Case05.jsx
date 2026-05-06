const Case05 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 05</span>
        <h1>The Yield Management Race</h1>
        <div className="case-meta">Industry: Hospitality / Travel &bull; Level: Advanced</div>
      </header>
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p><strong>Azure Sands</strong> is a collection of 4 boutique luxury resorts (400 total rooms) generating $28M annual revenue. In hospitality, the product is <strong>perishable</strong> — an unsold room tonight is revenue lost forever. This makes pricing decisions irreversible in a way no other industry matches.</p>
          <p>The primary KPI is <strong>RevPAR</strong> (Revenue Per Available Room = Occupancy % × ADR). Azure Sands currently uses "Seasonal Pricing" — three fixed price bands (High/Mid/Low season) set once per quarter. This approach was standard practice in 2010. In an era of real-time OTA platforms and AI-driven competitor pricing, it is a strategic liability.</p>
          <div className="highlight-box">
            <strong>Stakeholders:</strong> Revenue Manager, Director of Sales, General Manager, Channel Manager.<br />
            <strong>Context:</strong> Azure Sands is losing revenue in two directions simultaneously — underselling during high-demand micro-events (concerts, marathons) and leaving rooms empty during unexpected low-demand periods.<br />
            <strong>Stakeholder Tension:</strong> The General Manager fears dynamic pricing will confuse and anger loyal guests ("I paid $550 last week, now it's $180?"). The Revenue Manager argues that price variability is now industry-standard and guests expect it. The Director of Sales worries that shutting off OTA channels at 80% occupancy will damage distribution relationships. Analytics must quantify each risk.
          </div>
        </div>
      </section>
      <section>
        <h2>2. Business Problem</h2>
        <div className="content">
          <p>The <strong>"Fixed Price Fallacy"</strong> creates two simultaneous revenue leakages:</p>
          <ul>
            <li><strong>Underpricing on Peak Days:</strong> During a city marathon weekend, Azure Sands sells out 6 months in advance at the standard $200 rate — missing a $350–$550 pricing opportunity. Lost revenue per event: ~$35,000.</li>
            <li><strong>Overpricing on Slow Days:</strong> During a rainy mid-season week, price stays at $180 while competitors drop to $120 — resulting in 35% occupancy vs. competitor 85%. Lost revenue: ~$18,000/week.</li>
            <li><strong>Channel Mix Inefficiency:</strong> 55% of bookings come through Booking.com and Expedia at 18–22% commission. At 80% occupancy, every additional Expedia booking generates only $147 net on a $180 room. A direct booking at $165 earns more.</li>
            <li><strong>Total Annual Revenue Leakage:</strong> Estimated 15–20% of potential revenue = <strong>$4.2M–$5.6M per year</strong> left on the table due to static pricing.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <p>Build a <strong>Dynamic Pricing Engine</strong> that sets room rates daily — and adjusts intraday — based on real-time demand signals, competitor rates, and booking pace.</p>
          <div className="highlight-box">
            <strong>Key Questions:</strong>
            <ol>
              <li>What is the price elasticity of demand for each customer segment (Business vs. Leisure)?</li>
              <li>At what occupancy trigger should we raise prices, and by how much?</li>
              <li>When demand is low, what is the optimal discount — and through which channel — to fill rooms without diluting brand perception?</li>
              <li>What is the Net-RevPAR (after OTA commissions) vs. Gross-RevPAR, and how does channel mix affect the decision to raise prices?</li>
            </ol>
            <strong>Target Outcome:</strong> Improve RevPAR from $140 to $190 (+35%) within 2 quarters, and increase direct booking share from 45% to 60%.
          </div>
        </div>
      </section>
      <section>
        <h2>4. Data Perspective</h2>
        <div className="content">
          <p>Four data streams are integrated into the pricing engine:</p>
          <table className="data-table">
            <thead>
              <tr><th>Source</th><th>Key Variables</th><th>Use in Engine</th><th>Update Frequency</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>PMS (Internal)</strong></td><td>Lead time, length of stay, cancellation rate, room type, channel</td><td>Booking pace, commitment signals</td><td>Real-time</td></tr>
              <tr><td><strong>Rate Shoppers</strong></td><td>Competitor prices for same dates, star rating, TripAdvisor score</td><td>Market position index</td><td>Every 4 hours</td></tr>
              <tr><td><strong>External Events</strong></td><td>Flight arrivals, event calendars, weather forecasts</td><td>Unconstrained demand estimation</td><td>Daily</td></tr>
              <tr><td><strong>Channel Data</strong></td><td>OTA commission rates, direct booking conversion, loyalty rate requests</td><td>Net-RevPAR optimization</td><td>Monthly</td></tr>
            </tbody>
          </table>
          <p style={{marginTop: '20px'}}><strong>Sample Booking Pace Data — Next 30 Days (Snapshot as of Day 0):</strong></p>
          <table className="data-table">
            <thead>
              <tr><th>Check-in Date</th><th>Day Type</th><th>Rooms Booked</th><th>Occupancy %</th><th>Current Rate</th><th>Comp Set Rate</th><th>Signal</th></tr>
            </thead>
            <tbody>
              <tr><td>Fri May 9</td><td>Marathon Weekend</td><td>88/100</td><td>88%</td><td>$200</td><td>$380</td><td>🔴 Underpriced</td></tr>
              <tr><td>Sat May 10</td><td>Marathon Weekend</td><td>95/100</td><td>95%</td><td>$200</td><td>$420</td><td>🔴 Severely underpriced</td></tr>
              <tr><td>Sun May 11</td><td>Post-event checkout</td><td>42/100</td><td>42%</td><td>$200</td><td>$145</td><td>🟡 Overpriced</td></tr>
              <tr><td>Mon May 12</td><td>Weekday (slow)</td><td>28/100</td><td>28%</td><td>$180</td><td>$120</td><td>🔴 Overpriced, drop</td></tr>
              <tr><td>Fri May 16</td><td>Normal weekend</td><td>61/100</td><td>61%</td><td>$200</td><td>$195</td><td>🟢 Well-positioned</td></tr>
              <tr><td>Sat May 17</td><td>Local festival</td><td>74/100</td><td>74%</td><td>$200</td><td>$260</td><td>🟡 Mild upside</td></tr>
            </tbody>
          </table>
          <div className="highlight-box" style={{marginTop: '15px'}}>
            <strong>Data Limitations:</strong>
            <ul>
              <li><strong>Missing — "Regrets" Data:</strong> We see rooms sold, not demand that was turned away. A sold-out night at $200 might have had 3x the demand at $350 — we can't observe this directly. Proxy: search abandonment rate on booking page when price is shown.</li>
              <li><strong>Missing — Guest Segmentation in Booking:</strong> At time of booking, we don't know if the guest is price-sensitive leisure or price-inelastic business. Lead time is the best proxy (3–7 days = business; 45+ days = leisure).</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>5. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <p>Revenue management requires thinking in <strong>probabilities and opportunity costs</strong>, not single-point estimates:</p>
          <ol>
            <li><strong>Step 1 — Establish the Booking Curve (Baseline):</strong> Before any pricing decision, understand the typical booking pace for each day type:
              <div className="calculation" style={{margin: '12px 0'}}>
{`Booking Curve — Normal Weekend (100 rooms):
Days Before Arrival │ Typical Rooms Booked │ Cumulative Occupancy
────────────────────┼──────────────────────┼─────────────────────
  90+ days          │        8             │       8%
  60–89 days        │       12             │      20%
  30–59 days        │       18             │      38%
  14–29 days        │       22             │      60%
   7–13 days        │       19             │      79%
    3–6 days        │       12             │      91%
    0–2 days        │        6             │      97%
If by Day 30, occupancy is already at 60% (vs. typical 38%),
we are running 22 rooms AHEAD of pace → raise prices immediately.`}
              </div>
            </li>
            <li><strong>Step 2 — Measure Price Elasticity by Segment:</strong> Not all guests respond equally to price changes. Business travelers are price-inelastic; leisure travelers are highly elastic:
              <div className="calculation" style={{margin: '12px 0'}}>
{`Price Elasticity (Ed) = % Change in Demand / % Change in Price
LEISURE SEGMENT (book 45+ days out):
Price: $200 → $180 (-10%)  |  Occupancy: 62% → 72% (+16%)
Ed = 16% / 10% = -1.6 (Elastic — price drop pays off)
Revenue check: 72 × $180 = $12,960 vs 62 × $200 = $12,400 ✓
BUSINESS SEGMENT (book 3–7 days out):
Price: $200 → $180 (-10%)  |  Occupancy: 85% → 87% (+2.4%)
Ed = 2.4% / 10% = -0.24 (Inelastic — price drop does NOT pay off)
Revenue check: 87 × $180 = $15,660 vs 85 × $200 = $17,000 ✗
Conclusion: Never discount to capture business travelers.
Only use discounts for leisure demand when Ed > 1.0.`}
              </div>
            </li>
            <li><strong>Step 3 — Define Occupancy Trigger Pricing Rules:</strong> Set automatic price floors that rise as rooms fill:
              <div className="calculation" style={{margin: '12px 0'}}>
{`Occupancy Trigger  │  Price Action          │  Rationale
───────────────────┼────────────────────────┼──────────────────────────
0–40%              │  Drop to $140 (leisure)│  Fill base, accept lower rate
41–60%             │  Hold at $180 (standard)│ Normal yield range
61–80%             │  Raise to $220          │  Demand accelerating
81–95%             │  Raise to $320          │  Scarcity premium
96–100%            │  Raise to $450+         │  True market price
Close OTA at 80%   │  Direct bookings only   │  No 18% commission on last rooms`}
              </div>
            </li>
            <li><strong>Step 4 — Unconstrained Demand Estimation:</strong> A sold-out hotel at $200 doesn't mean $200 was the right price — it means $200 cleared the market. True unconstrained demand is estimated via:
              <ul>
                <li>Website search abandonment rate after price is displayed (proxy for "regrets")</li>
                <li>Competitor booking pace: if all 5 comp set hotels are also sold out, demand was well above supply</li>
                <li>Post-event surveys: "What would you have paid?" — typically 40% higher than the rate charged on sold-out nights</li>
              </ul>
            </li>
            <li><strong>Step 5 — Net-RevPAR vs. Gross-RevPAR Analysis:</strong> The channel mix matters as much as the rate:
              <div className="calculation" style={{margin: '12px 0'}}>
{`Room at $200 — Channel Comparison:
Channel      │ Commission │ Net Revenue │ Net-RevPAR Contribution
─────────────┼────────────┼─────────────┼────────────────────────
Direct       │   0%       │   $200      │  $200
Booking.com  │  18%       │   $164      │  $164
Expedia      │  22%       │   $156      │  $156
At 80% occupancy: Closing Expedia and selling direct at $185
earns MORE net revenue than selling via Expedia at $200.
→ Strategy: Close OTA channels at 80% occupancy trigger.`}
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section>
        <h2>6. Calculation &amp; Simulation</h2>
        <div className="content">
          <p>Three scenarios: Static pricing vs. Dynamic on High-Demand vs. Dynamic on Low-Demand days.</p>
          <div className="calculation">
{`Property: 100 Rooms
SCENARIO A — STATIC PRICING (Current):
All days at $200. Avg occupancy: 70%.
Daily Revenue: 70 × $200 = $14,000
RevPAR: `}<span className="math-result">$140</span>
{`
SCENARIO B — DYNAMIC PRICING (High-Demand: Marathon Weekend):
Tier 1: First 50 rooms at $200 (early birds, 90+ days out)
Tier 2: Next 30 rooms at $350 (mid-window, 14–30 days out)
Tier 3: Final 15 rooms at $550 (last-minute business, 3–7 days)
5 rooms held as strategic buffer (cancellation protection)
Total Revenue: (50×$200) + (30×$350) + (15×$550)
             = $10,000 + $10,500 + $8,250 = $28,750
RevPAR: `}<span className="math-result">$287.50 (+105% vs. static)</span>
{`
SCENARIO C — DYNAMIC PRICING (Low-Demand: Rainy Monday):
Observation at 72hrs out: Only 28 rooms booked (28% occupancy)
Competitor rates: $115–$130. Our rate: $180 → Overpriced.
Action: Drop to $125 for direct bookings, push $130 via OTAs.
Result: Occupancy lifts from 28% to 65% (target).
Revenue: 65 × $125 = $8,125 (vs. static 28 × $180 = $5,040)
RevPAR: `}<span className="math-result">$81.25 vs. static $50.40 (+61%)</span>
{`
Key Lesson: Dynamic pricing wins in BOTH directions.
Not just on peak days — also on slow days.
ANNUAL IMPACT SIMULATION:
Assume 120 high-demand days, 90 low-demand days, 155 normal days.
High-demand uplift: 120 × ($287.50 - $140) = `}<span className="math-result">+$17,700/day × 120 = $2.12M</span>
{`Low-demand recovery: 90 × ($81.25 - $50.40) = `}<span className="math-result">+$30.85/day × 90 = $2.78M</span>
{`Total annual RevPAR uplift across 400 rooms: `}<span className="math-result">~$4.9M additional revenue</span>
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
                  <td>Sold-out = optimal pricing</td>
                  <td>100% occupancy = success</td>
                  <td><strong>Sold out 3 months early = priced $150+ too low</strong></td>
                </tr>
                <tr>
                  <td>Business travelers respond to price</td>
                  <td>Ed ≈ -1.0 (elastic)</td>
                  <td><strong>Ed = -0.24 (inelastic) — discounts waste margin on business guests</strong></td>
                </tr>
                <tr>
                  <td>Sunday discounts fill rooms</td>
                  <td>50% off Sunday works</td>
                  <td><strong>"Stay Fri–Sun Pay 2 nights" earns 22% more than Sunday-only discount</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul style={{marginTop: '16px'}}>
            <li><strong>The "Sunday Night Slump":</strong> Occupancy drops to 40% on Sundays. A "Stay 3, Pay 2" offer starting Friday is 22% more profitable than a 50% Sunday-only discount — because it anchors a 3-night stay and fills Friday/Saturday at full rate.</li>
            <li><strong>Cancellation Paradox:</strong> High-priced last-minute bookings have a 25% higher cancellation rate. Strategic overbooking by 5% on peak dates is required to achieve true 100% realized occupancy. Risk: the occasional walk — manage with pre-arranged comp at a nearby partner hotel.</li>
            <li><strong>The Weather Lever:</strong> A forecast of "Heavy Rain" in NYC (primary feeder city) increases last-minute resort bookings by 15% — guests spontaneously decide to escape the city. This signal can be integrated into the pricing engine as a same-week upward trigger.</li>
            <li><strong>Counter-Intuitive — Net-RevPAR Beats Gross-RevPAR:</strong> A room sold at $165 direct earns more net revenue than the same room sold at $200 on Expedia (after 22% commission = $156). Closing OTA channels at 80% occupancy and converting to direct is a pricing strategy, not just a distribution strategy.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>8. Recommendations</h2>
        <div className="content">
          <p><strong>Short-Term (Weeks 1–4):</strong></p>
          <ul>
            <li><strong>Implement 5-tier Occupancy Trigger Pricing</strong> immediately using current PMS data — no new technology needed, just pricing rules. <br /><strong>Expected Impact:</strong> +$2.12M on high-demand nights. <strong>Cost:</strong> Revenue Manager time only.</li>
            <li><strong>Close Expedia/Booking.com at 80% occupancy trigger.</strong> Redirect to direct booking page. <br /><strong>Expected Impact:</strong> Save 18–22% commission on the last 20 rooms = ~$560K/year net. <strong>Risk:</strong> OTA ranking penalty — mitigate by maintaining parity on low-demand dates.</li>
          </ul>
          <p><strong>Long-Term (Months 2–6):</strong></p>
          <ul>
            <li><strong>Deploy AI-driven RMS</strong> (Revenue Management System) updating prices every 4 hours based on competitor movements. <br /><strong>Expected Impact:</strong> Additional 8–12% RevPAR uplift on top of manual rules. <strong>Cost:</strong> $2,500/month SaaS RMS license.</li>
            <li><strong>Launch Loyalty Direct Rate</strong> — offer repeat guests a "Loyalty Rate" that is 8% lower than OTA but yields 14% more net margin (no commission). <br /><strong>Expected Impact:</strong> Shift 15% of OTA bookings to direct over 12 months = ~$840K in recovered commission.</li>
          </ul>
          <div className="highlight-box" style={{marginTop: '16px'}}>
            <strong>Priority Matrix:</strong>
            <table className="data-table">
              <thead>
                <tr><th>Action</th><th>Annual Benefit</th><th>Cost</th><th>Priority</th></tr>
              </thead>
              <tbody>
                <tr><td>Occupancy trigger pricing rules</td><td>$2.12M</td><td>~$0</td><td>🔴 Immediate</td></tr>
                <tr><td>Close OTA at 80% occupancy</td><td>$560K commission saved</td><td>~$0</td><td>🔴 Immediate</td></tr>
                <tr><td>AI-driven RMS deployment</td><td>+8–12% RevPAR</td><td>$30K/yr</td><td>🟡 Month 2</td></tr>
                <tr><td>Loyalty direct rate program</td><td>$840K recovered</td><td>Medium</td><td>🟡 Month 3</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <h2>9. Business Decision-Making</h2>
        <div className="content">
          <p>The General Manager approves the phased dynamic pricing rollout after seeing the annual impact model:</p>
          <ol>
            <li><strong>Pilot on 1 Property First:</strong> Run dynamic pricing on the highest-demand Azure Sands location for 90 days. Measure RevPAR vs. the 3 static-priced properties as the control group. Decision rule: if pilot RevPAR exceeds control by ≥20%, roll out chain-wide.</li>
            <li><strong>Staff Re-training on RevPAR Mindset:</strong> Front desk incentives currently reward "filling rooms." Shift to Net-RevPAR targets so staff understand that a direct booking at $185 is better than an OTA booking at $200.</li>
            <li><strong>Alternative Strategy Rejected:</strong> The Director of Sales proposed a "Rate Freeze Guarantee" — promise guests that if they book direct, the rate won't go lower. Rejected because it eliminates the ability to use last-minute discounts on slow nights, directly costing the Scenario C recovery of +$30.85/room/day.</li>
          </ol>
          <div className="highlight-box" style={{marginTop: '16px'}}>
            <strong>Monitoring Dashboard — Weekly KPIs:</strong>
            <table className="data-table">
              <thead>
                <tr><th>KPI</th><th>Current</th><th>Target (Q2)</th><th>Alert Threshold</th></tr>
              </thead>
              <tbody>
                <tr><td>RevPAR</td><td>$140</td><td>$190</td><td>&lt;$155 = pricing review</td></tr>
                <tr><td>Net-RevPAR (after commission)</td><td>~$112</td><td>$162</td><td>&lt;$130 = channel review</td></tr>
                <tr><td>Direct Booking Share</td><td>45%</td><td>60%</td><td>&lt;50% = OTA dependency risk</td></tr>
                <tr><td>Booking Pace Index (vs. prior year)</td><td>Baseline</td><td>+15%</td><td>&lt;-10% = demand concern</td></tr>
                <tr><td>Cancellation Rate (last-minute)</td><td>25%</td><td>&lt;18%</td><td>&gt;30% = overbooking policy review</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <h2>10. Professional Analyst Mindset</h2>
        <div className="content">
          <p><strong>Senior Perspective:</strong> Dynamic pricing is as much about <strong>Psychology</strong> as it is about Math. You must manage "Price Integrity" — if guests feel gouged, you lose long-term brand equity. Senior analysts use "Value-Added" (free breakfast, spa credit, early check-in) instead of "Price Drops" to protect the luxury image while still moving inventory on slow days. The economic outcome is equivalent; the brand perception is very different.</p>
          <div className="highlight-box">
            <strong>Key Lesson:</strong> A sold-out hotel is not always a success. If you sold out 3 months in advance at $200, you may have sold 95 rooms that the market would have paid $380 for. The goal is to sell your <strong>last room</strong> at the <strong>highest possible price</strong> just before check-in — not to sell all rooms as early as possible at the lowest price the market will accept.
          </div>
          <div className="highlight-box" style={{marginTop: '16px'}}>
            <strong>Common Beginner Mistake:</strong> Beginners optimize for <strong>Occupancy Rate</strong>. A 95% occupied hotel feels like a success. Seniors optimize for <strong>Net-RevPAR</strong> — revenue per available room after OTA commissions. A hotel at 80% occupancy with 60% direct bookings can easily out-earn a 95% occupied hotel where 80% came through Expedia. Always follow the net dollar, not the headline metric.
          </div>
          <div className="highlight-box" style={{marginTop: '16px'}}>
            <strong>Interview-Ready Insight:</strong> If asked "How would you price hotel rooms dynamically?" the winning structure: <em>"First, I'd measure price elasticity separately for each customer segment — business travelers are inelastic, leisure travelers are elastic. Then I'd build a booking curve baseline so I know when pace is ahead or behind normal. Then I'd set occupancy-triggered pricing rules. Finally, I'd always optimize Net-RevPAR, not gross — because the channel you sell through can flip a profitable room into a near-breakeven transaction."</em>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Case05;
