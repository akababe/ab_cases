const Case05 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 05</span>
        <h1>The Yield Management Race</h1>
        <div className="case-meta">Industry: Hospitality / Travel &bull; Level: Advanced</div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>Azure Sands</strong> is a collection of 4 boutique luxury resorts (400 total rooms)
            generating <strong>$28M in total annual revenue</strong> — comprised of approximately $20.4M
            in room revenue (RevPAR $140 × 400 rooms × 365 days) and $7.6M in food &amp; beverage, spa,
            and ancillary services. In hospitality, the core product is <strong>perishable</strong> — an
            unsold room tonight is revenue lost forever. This makes pricing decisions irreversible in a
            way no other industry matches.
          </p>
          <p>
            The primary KPI is <strong>RevPAR</strong> (Revenue Per Available Room = Occupancy % × ADR).
            Azure Sands currently uses "Seasonal Pricing" — three fixed price bands (High/Mid/Low season)
            set once per quarter. This approach was standard practice in 2010. In an era of real-time OTA
            platforms and AI-driven competitor pricing, it is a strategic liability.
          </p>
          <div className="highlight-box">
            <strong>Stakeholders:</strong> Revenue Manager, Director of Sales, General Manager, Channel Manager.
            <br />
            <strong>Context:</strong> Azure Sands is losing revenue in two directions simultaneously —
            underselling during high-demand micro-events (concerts, marathons) and leaving rooms empty
            during unexpected low-demand periods.
            <br />
            <strong>Stakeholder Tension:</strong> The General Manager fears dynamic pricing will confuse
            and anger loyal guests ("I paid $550 last week, now it's $180?"). The Revenue Manager argues
            that price variability is now industry-standard and guests expect it. The Director of Sales
            worries that shutting off OTA channels at 80% occupancy will damage distribution relationships
            and trigger ranking penalties. Analytics must quantify each risk — not just assert that it is
            manageable.
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem</h2>
        <div className="content">
          <p>The <strong>"Fixed Price Fallacy"</strong> creates two simultaneous revenue leakages:</p>
          <ul>
            <li>
              <strong>Underpricing on Peak Days:</strong> During a city marathon weekend, Azure Sands
              sells out 6 months in advance at the standard $200 rate — missing a $350–$550 pricing
              opportunity. Lost revenue per event: ~$35,000.
            </li>
            <li>
              <strong>Overpricing on Slow Days:</strong> During a rainy mid-season week, price stays at
              $180 while competitors drop to $120 — resulting in 35% occupancy vs. competitor 85%. Lost
              revenue: ~$18,000/week.
            </li>
            <li>
              <strong>Channel Mix Inefficiency:</strong> 55% of bookings come through Booking.com and
              Expedia at 18–22% commission. At 80% occupancy, every additional Expedia booking generates
              only $147 net on a $180 room. A direct booking at $165 earns more net revenue.
            </li>
            <li>
              <strong>Rate Fencing Failure:</strong> Without minimum-stay requirements and advance-purchase
              rate structures, price-sensitive leisure guests can book at the same rates and dates as
              price-inelastic business travelers — collapsing the segmentation that dynamic pricing depends
              on.
            </li>
            <li>
              <strong>Total Annual Revenue Leakage:</strong> Estimated 15–20% of potential room revenue =
              <strong> $3.1M–$4.1M per year</strong> attributable to static pricing, with an additional
              $800K–$1.2M lost to channel mix inefficiency — totalling <strong>$4.2M–$5.6M combined</strong>.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <p>
            Build a <strong>Dynamic Pricing Engine</strong> that sets room rates daily — and adjusts
            intraday — based on real-time demand signals, competitor rates, and booking pace.
          </p>
          <div className="highlight-box">
            <strong>Key Questions:</strong>
            <ol>
              <li>What is the price elasticity of demand for each customer segment (Business vs. Leisure), and how is it measured rigorously?</li>
              <li>At what occupancy trigger should we raise prices, and by how much?</li>
              <li>What rate fences prevent guests from self-selecting into the wrong pricing tier — undermining segmented pricing?</li>
              <li>When demand is low, what is the optimal discount — and through which channel — to fill rooms without diluting brand perception?</li>
              <li>What is the Net-RevPAR (after OTA commissions) vs. Gross-RevPAR, and how do OTA contractual parity obligations constrain the channel-mix strategy?</li>
            </ol>
            <strong>Target Outcome:</strong> Improve RevPAR from $140 to $185–$195 (+32–39%) within
            2 quarters through dynamic pricing, and increase direct booking share from 45% to 60% within
            12 months. The combined pricing and channel shift improvement generates an estimated $5.3M+
            annual uplift — consistent with the leakage range identified above.
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Data Perspective</h2>
        <div className="content">
          <p>Five data streams are integrated into the pricing engine:</p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Key Variables</th>
                <th>Use in Engine</th>
                <th>Update Frequency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>PMS (Internal)</strong></td>
                <td>Lead time, length of stay, cancellation rate, room type, channel, rate plan code</td>
                <td>Booking pace, segment identification, rate fence compliance</td>
                <td>Real-time</td>
              </tr>
              <tr>
                <td><strong>Rate Shoppers</strong></td>
                <td>Competitor prices for same dates, star rating, TripAdvisor score</td>
                <td>Market position index</td>
                <td>Every 4 hours</td>
              </tr>
              <tr>
                <td><strong>External Events</strong></td>
                <td>Flight arrivals, event calendars, weather forecasts</td>
                <td>Unconstrained demand estimation</td>
                <td>Daily</td>
              </tr>
              <tr>
                <td><strong>Channel Data</strong></td>
                <td>OTA commission rates, parity clause terms, direct booking conversion, loyalty rate requests</td>
                <td>Net-RevPAR optimisation, parity compliance monitoring</td>
                <td>Monthly (contracts); Real-time (rates)</td>
              </tr>
              <tr>
                <td><strong>Rate Fence Data</strong></td>
                <td>Minimum stay requirements by date, advance-purchase eligibility, cancellation policy by rate type</td>
                <td>Segment protection — prevents leisure guests booking into business-rate windows</td>
                <td>Set per pricing rule cycle</td>
              </tr>
            </tbody>
          </table>

          <p style={{marginTop: '20px'}}><strong>Sample Booking Pace Data — Next 30 Days (Snapshot as of Day 0):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Check-in Date</th>
                <th>Day Type</th>
                <th>Rooms Booked</th>
                <th>Occupancy %</th>
                <th>Current Rate</th>
                <th>Comp Set Rate</th>
                <th>Signal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fri May 9</td>
                <td>Marathon Weekend</td>
                <td>88/100</td>
                <td>88%</td>
                <td>$200</td>
                <td>$380</td>
                <td>🔴 Underpriced</td>
              </tr>
              <tr>
                <td>Sat May 10</td>
                <td>Marathon Weekend</td>
                <td>95/100</td>
                <td>95%</td>
                <td>$200</td>
                <td>$420</td>
                <td>🔴 Severely underpriced</td>
              </tr>
              <tr>
                <td>Sun May 11</td>
                <td>Post-event checkout</td>
                <td>42/100</td>
                <td>42%</td>
                <td>$200</td>
                <td>$145</td>
                <td>🟡 Overpriced</td>
              </tr>
              <tr>
                <td>Mon May 12</td>
                <td>Weekday (slow)</td>
                <td>28/100</td>
                <td>28%</td>
                <td>$180</td>
                <td>$120</td>
                <td>🔴 Overpriced, drop</td>
              </tr>
              <tr>
                <td>Fri May 16</td>
                <td>Normal weekend</td>
                <td>61/100</td>
                <td>61%</td>
                <td>$200</td>
                <td>$195</td>
                <td>🟢 Well-positioned</td>
              </tr>
              <tr>
                <td>Sat May 17</td>
                <td>Local festival</td>
                <td>74/100</td>
                <td>74%</td>
                <td>$200</td>
                <td>$260</td>
                <td>🟡 Mild upside</td>
              </tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{marginTop: '15px'}}>
            <strong>Data Limitations:</strong>
            <ul>
              <li>
                <strong>Missing — "Regrets" Data:</strong> We see rooms sold, not demand that was turned
                away. A sold-out night at $200 might have had 3× the demand at $350 — we cannot observe
                this directly. Proxy: search abandonment rate on the booking page after price is displayed,
                and competitor sell-out timing.
              </li>
              <li>
                <strong>Missing — Guest Segmentation at Booking:</strong> At time of booking, we do not
                know if the guest is price-sensitive leisure or price-inelastic business. Lead time is the
                best observable proxy (3–7 days = likely business; 45+ days = likely leisure) — but this
                requires rate fencing to enforce, not just observe.
              </li>
              <li>
                <strong>Elasticity Estimates Require Controlled Measurement:</strong> Price elasticity
                cannot be reliably estimated from a single before-and-after price change — seasonal
                effects, competitor moves, and event calendars confound the result. Valid estimates require
                A/B rate testing across comparable date pairs or multivariate regression on 18–24 months
                of booking data controlling for day-of-week, lead time, and event proximity.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <p>Revenue management requires thinking in <strong>probabilities and opportunity costs</strong>, not single-point estimates:</p>
          <ol>
            <li>
              <strong>Step 1 — Establish the Booking Curve (Baseline):</strong> Before any pricing
              decision, understand the typical booking pace for each day type:
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

            <li>
              <strong>Step 2 — Measure Price Elasticity by Segment (Rigorously):</strong> Not all
              guests respond equally to price changes. Elasticity estimates below are derived from
              A/B rate testing across matched date pairs (same day-of-week, same season, no event
              conflicts) over a 90-day controlled measurement period — not from single observations,
              which cannot isolate the price effect from seasonal or competitive noise.
              <div className="calculation" style={{margin: '12px 0'}}>
{`Price Elasticity (Ed) = % Change in Demand / % Change in Price
Measured via A/B rate testing across 40 matched date pairs, 90-day window.

LEISURE SEGMENT (book 45+ days out):
  Price: $200 → $180 (−10%)  |  Occupancy: 62% → 72% (+16%)
  Ed = 16% / 10% = −1.6  (Elastic — price drop pays off)
  Revenue check: 72 × $180 = $12,960 vs. 62 × $200 = $12,400 ✓

BUSINESS SEGMENT (book 3–7 days out):
  Price: $200 → $180 (−10%)  |  Occupancy: 85% → 87% (+2.4%)
  Ed = 2.4% / 10% = −0.24  (Inelastic — price drop does NOT pay off)
  Revenue check: 87 × $180 = $15,660 vs. 85 × $200 = $17,000 ✗

Conclusion: Never discount to capture business travelers.
Only apply discounts to leisure demand windows where Ed > 1.0.
Confidence interval on Ed estimates: ±0.3 at 90% confidence.
Re-measure every 6 months — elasticity shifts with competitive set changes.`}
              </div>
            </li>

            <li>
              <strong>Step 3 — Define Occupancy Trigger Pricing Rules:</strong> Set automatic price
              floors that rise as rooms fill:
              <div className="calculation" style={{margin: '12px 0'}}>
{`Occupancy Trigger  │  Price Action           │  Rationale
───────────────────┼─────────────────────────┼──────────────────────────
0–40%              │  Drop to $140 (leisure) │  Fill base; accept lower rate
41–60%             │  Hold at $180 (standard)│  Normal yield range
61–80%             │  Raise to $220          │  Demand accelerating
81–95%             │  Raise to $320          │  Scarcity premium
96–100%            │  Raise to $450+         │  True market price
Close OTA at 80%   │  Direct bookings only   │  Avoid 18–22% commission on last rooms`}
              </div>
            </li>

            <li>
              <strong>Step 3b — Rate Fencing: Protect Segmented Pricing from Self-Selection:</strong>
              This step is skipped by most beginners and is the reason many dynamic pricing rollouts
              underperform. If a business traveler can simply book 45 days in advance to access a
              leisure rate, the elasticity-based strategy collapses. Rate fences are the structural
              barriers that enforce segment separation.
              <div className="calculation" style={{margin: '12px 0'}}>
{`Rate Fence Type        │ Mechanism                        │ Who It Blocks
───────────────────────┼──────────────────────────────────┼──────────────────────
Advance Purchase (AP)  │ Book 21+ days out for leisure    │ Business travelers who
                       │ rate — non-refundable            │ cannot commit 3 weeks ahead
Minimum Length of Stay │ Weekend rates require Fri+Sat    │ One-night cherry-pickers
(MinLOS)               │ — no Sunday-only check-in        │ who inflate cost-to-serve
Cancellation Policy    │ Leisure rate = non-refundable;  │ Prevents business travelers
Differential           │ Flex rate = +18% premium        │ from booking leisure rates
                       │                                  │ "just in case"
Last-Room Availability │ Leisure rates close at 70% occ. │ Locks late-bookers (likely
(LRA) Close            │ Flex/BAR remain open             │ business) into higher rate

Applied example — Marathon Weekend (Fri May 9):
  Rate A: Advance Purchase $200 → available 90–31 days out, non-refundable
  Rate B: Standard Flex $320 → available 30–8 days out, 48hr cancellation
  Rate C: Last-Minute $450 → available 7–0 days out, non-refundable

Without rate fencing: a business traveler books the $200 AP rate on Day 45
  → loses $120–$250 in revenue per room on peak nights.
With rate fencing: the AP rate closes at Day 31; business traveler pays $320+.`}
              </div>
            </li>

            <li>
              <strong>Step 4 — Unconstrained Demand Estimation:</strong> A sold-out hotel at $200
              does not mean $200 was the right price — it means $200 cleared the market. True
              unconstrained demand is estimated via:
              <ul>
                <li>Website search abandonment rate after price is displayed (proxy for "regrets")</li>
                <li>Competitor booking pace: if all 5 comp-set hotels are also sold out, supply was
                constrained — demand exceeded even the observed booking volume</li>
                <li>Post-event surveys: "What would you have paid?" — typically 30–45% higher than
                the rate charged on sold-out nights, providing an upper-bound calibration</li>
              </ul>
            </li>

            <li>
              <strong>Step 5 — Net-RevPAR vs. Gross-RevPAR and OTA Channel Management:</strong>
              The channel mix matters as much as the rate — but OTA channel management has legal
              constraints that must be understood before executing:
              <div className="calculation" style={{margin: '12px 0'}}>
{`Room at $200 — Channel Comparison:
Channel        │ Commission │ Net Revenue │ Net-RevPAR Contribution
───────────────┼────────────┼─────────────┼────────────────────────
Direct         │   0%       │   $200      │  $200
Booking.com    │  18%       │   $164      │  $164
Expedia        │  22%       │   $156      │  $156

At 80% occupancy: closing Expedia and selling direct at $185
earns MORE net revenue than selling via Expedia at $200.
→ Strategy: close OTA channels at 80% occupancy trigger.

CRITICAL CONSTRAINT — OTA Rate Parity Clauses:
Most Booking.com and Expedia contracts include rate parity provisions
requiring Azure Sands to not offer lower rates on direct channels than
those displayed on the OTA. Consequences of violation:
  • Ranking suppression on OTA platform (reduces future visibility)
  • Contract penalty or termination in some markets
  • Loss of preferred partner status

Compliant OTA closure strategy:
  (a) Close availability on OTA at 80% — do not offer a lower direct rate.
      The direct rate remains at $200 or higher.
  (b) Offer non-price value (room upgrades, breakfast included) to direct
      bookers — value-adds that do not appear on OTA and therefore
      do not trigger parity violations.
  (c) Maintain OTA "Open for Sale" on low-demand dates to protect
      distribution ranking — closures should be selective, not permanent.
OTA ranking impact of selective closures: estimated 8–12% ranking reduction
on affected dates; mitigated by maintaining full parity on low-demand dates.`}
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
            Three scenarios: Static pricing vs. Dynamic on High-Demand vs. Dynamic on Low-Demand days.
            The annual simulation compares each scenario against its correct static baseline — not against
            the portfolio-average RevPAR — to avoid double-counting the improvement.
          </p>
          <div className="calculation">
{`Property: 100 Rooms (× 4 properties = 400 rooms total)

SCENARIO A — STATIC PRICING (Current State):
  Average across all day types: 70% occupancy × $200 ADR
  Daily Revenue (100 rooms): 70 × $200 = $14,000
  RevPAR: $140 (portfolio average)
  Annual room revenue (400 rooms): $140 × 400 × 365 = $20,440,000

SCENARIO B — DYNAMIC PRICING (High-Demand: Marathon Weekend):
  On high-demand nights, static pricing already achieves near-100% occupancy at $200.
  Static baseline for this day type: 100 × $200 = $20,000/night (not the $140 avg).

  Dynamic tiered pricing:
    Tier 1: First 50 rooms at $200 (advance purchase, 90+ days out)
    Tier 2: Next 30 rooms at $350 (standard flex, 14–30 days out)
    Tier 3: Final 15 rooms at $550 (last-minute business, 3–7 days)
    5 rooms held as cancellation buffer (statistical overbooking protection)
  Total Revenue: (50×$200) + (30×$350) + (15×$550)
               = $10,000 + $10,500 + $8,250 = $28,750
  RevPAR (Scenario B): $28,750 ÷ 100 rooms = $287.50

  Uplift vs. static high-demand baseline:
    $28,750 − $20,000 = $8,750 per night, per property

SCENARIO C — DYNAMIC PRICING (Low-Demand: Rainy Monday):
  On slow nights, static pricing achieves 28% occupancy at $180.
  Static baseline for this day type: 28 × $180 = $5,040/night/property.

  Observation at 72hrs out: Only 28 rooms booked (28% occupancy).
  Competitor rates: $115–$130. Our rate: $180 → overpriced.
  Action: Drop to $125 for direct bookings, $130 via OTAs.
  Result: Occupancy lifts from 28% to 65%.
  Revenue: 65 × $125 = $8,125/night/property
  RevPAR (Scenario C): $81.25

  Uplift vs. static low-demand baseline:
    $8,125 − $5,040 = $3,085 per night, per property

ANNUAL IMPACT SIMULATION (4 properties, 400 rooms total):
Day-type distribution: 120 high-demand | 90 low-demand | 155 normal days = 365

High-demand uplift (120 nights):
  $8,750/night × 4 properties × 120 nights = $4,200,000

Low-demand recovery (90 nights):
  $3,085/night × 4 properties × 90 nights = $1,110,600

Normal days — pace-adjusted pricing rules (conservative 6% RevPAR improvement):
  Uplift: $14,000 × 6% = $840/night × 4 properties × 155 nights = $520,800

Subtotal — Pricing Engine Benefit: $5,831,400

Channel Shift Benefit — OTA-to-Direct at 80% Occupancy Trigger:
  Shifting 15% of bookings from OTA (avg 20% commission) to direct:
  400 rooms × 365 days × 15% shift × $200 avg rate × 20% commission saved
  = 400 × 365 × 0.15 × $40 = $876,000

TOTAL ANNUAL REVENUE UPLIFT: $5,831,400 + $876,000 ≈ $6,707,400

Portfolio RevPAR (pricing engine only, pre-channel shift):
  New room revenue: $20,440,000 + $5,831,400 = $26,271,400
  New RevPAR: $26,271,400 ÷ (400 × 365) = $179.93 ≈ $180

  Including channel shift (net-revenue basis):
  Net-RevPAR improves to approximately $185–$192, depending on
  direct booking conversion rate achieved in the 12-month loyalty program.

Key Lesson: Dynamic pricing wins in BOTH directions.
Not just on peak days — also on slow days. And the annual gain
is calculated separately for each day type — never by subtracting
the average RevPAR from the peak-day RevPAR, which overstates the benefit.`}
          </div>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Findings &amp; Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>What We Expected vs. What We Found:</strong>
            <table className="data-table" style={{marginTop: '12px'}}>
              <thead>
                <tr>
                  <th>Assumption</th>
                  <th>Expected</th>
                  <th>Actual Finding</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sold-out = optimal pricing</td>
                  <td>100% occupancy = success</td>
                  <td><strong>Sold out 3 months early at $200 = priced $150+ too low vs. comp set at $380</strong></td>
                </tr>
                <tr>
                  <td>Business travelers respond to price</td>
                  <td>Ed ≈ −1.0 (elastic)</td>
                  <td><strong>Ed = −0.24 (inelastic) — discounting business guests destroys $1,340 revenue per 100 rooms</strong></td>
                </tr>
                <tr>
                  <td>Sunday discounts fill rooms</td>
                  <td>50% off Sunday works</td>
                  <td><strong>"Stay Fri–Sun Pay 2 nights" earns 22% more than Sunday-only discount — anchors Fri/Sat at full rate</strong></td>
                </tr>
                <tr>
                  <td>Dynamic pricing replaces rate fences</td>
                  <td>Flexible prices self-segment guests</td>
                  <td><strong>Without MinLOS and AP fence rules, leisure guests book into business-rate windows — eliminating the segmentation benefit</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul style={{marginTop: '16px'}}>
            <li>
              <strong>The "Sunday Night Slump":</strong> Occupancy drops to 40% on Sundays. A "Stay 3,
              Pay 2" offer starting Friday is 22% more profitable than a 50% Sunday-only discount —
              because it anchors a 3-night stay and fills Friday/Saturday at full rate. The unit of
              analysis is the <em>stay</em>, not the <em>night</em>.
            </li>
            <li>
              <strong>Cancellation Paradox — Luxury Edition:</strong> High-priced last-minute bookings
              cancel at 25% higher rates. The correct response for a boutique luxury resort is
              <em> not</em> blanket overbooking — walking a guest at a luxury property creates
              TripAdvisor damage and social media exposure disproportionate to the one-room revenue
              recovery. Instead: (a) use non-refundable rate fences on the last 15 rooms to reduce
              cancellation risk, (b) overbook by no more than 2–3% on dates where a confirmed
              nearby luxury partner can receive the overflow, and (c) have a pre-scripted VIP
              compensation protocol ready before the first overbooking event, not after.
            </li>
            <li>
              <strong>The Weather Lever:</strong> A "Heavy Rain" forecast in the primary feeder city
              increases last-minute resort bookings by 15% — guests spontaneously decide to escape.
              This signal is integrated into the pricing engine as a same-week upward trigger on
              occupancy-trigger rules.
            </li>
            <li>
              <strong>Counter-Intuitive — Net-RevPAR Beats Gross-RevPAR, But Parity Clauses Apply:</strong>
              A room sold at $165 direct earns more net than the same room at $200 on Expedia after
              22% commission ($156). However, most OTA contracts prohibit offering lower rates on direct
              channels. The compliant strategy is value-adds (breakfast, room upgrade, spa credit) for
              direct bookers — matching OTA rates on price, but offering superior value only on the
              direct channel.
            </li>
            <li>
              <strong>Rate Fences Are as Important as Rate Levels:</strong> Azure Sands was setting the
              right prices but attaching no structural barriers. A business traveler booking 45 days out
              could access the same leisure advance-purchase rate as a price-sensitive holiday guest —
              giving away $120–$250 per room on peak dates. MinLOS rules on weekends and non-refundable
              AP rates close this gap without requiring any technology investment.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Recommendations</h2>
        <div className="content">
          <p><strong>Short-Term (Weeks 1–4):</strong></p>
          <ul>
            <li>
              <strong>Implement 5-Tier Occupancy Trigger Pricing</strong> immediately using current
              PMS data — no new technology needed, just pricing rules applied by the Revenue Manager.
              <br /><strong>Expected Impact:</strong> +$4.2M on high-demand nights.
              <strong> Cost:</strong> Revenue Manager time only.
            </li>
            <li>
              <strong>Deploy Rate Fences on All High-Demand Dates:</strong> Set Minimum Length of Stay
              (MinLOS 2 nights) on event weekends and non-refundable Advance Purchase rates (21+ days
              out) immediately. These rules require only PMS configuration — no new software.
              <br /><strong>Expected Impact:</strong> Prevents leisure-to-business rate arbitrage,
              protecting $120–$250 per room on approximately 40 peak dates per year.
            </li>
            <li>
              <strong>Close OTA Availability at 80% Occupancy — Compliant Implementation:</strong>
              Close Expedia and Booking.com at the 80% trigger, but maintain rate parity (do not
              undercut OTA price on direct channel). Offer direct-only value-adds (breakfast, upgrade)
              to attract direct rebooking without triggering parity violations.
              <br /><strong>Expected Impact:</strong> Save 18–22% commission on last 20 rooms ≈
              $876K/year net. <strong>OTA ranking risk:</strong> 8–12% ranking reduction on closed dates;
              maintain full parity and availability on low-demand dates to protect overall ranking.
            </li>
          </ul>

          <p><strong>Long-Term (Months 2–6):</strong></p>
          <ul>
            <li>
              <strong>Deploy AI-Driven RMS</strong> (Revenue Management System) updating prices every
              4 hours based on competitor movements and booking pace index.
              <br /><strong>Expected Impact:</strong> Additional 6–10% RevPAR uplift on normal days
              ($520K+ annually). <strong>Cost:</strong> $2,500/month SaaS license + one-time integration
              and training ($8K–$15K). ROI positive within 60 days.
            </li>
            <li>
              <strong>Launch Loyalty Direct Rate — Parity-Compliant:</strong> Offer repeat guests a
              "Loyalty Rate" equal to the OTA rate but bundled with breakfast and early check-in —
              compliant with parity clauses while yielding 14% more net margin (no commission). Track
              direct share weekly.
              <br /><strong>Expected Impact:</strong> Shift 15% of OTA bookings to direct over 12 months
              = ~$876K in recovered commission.
            </li>
          </ul>

          <div className="highlight-box" style={{marginTop: '16px'}}>
            <strong>Priority Matrix:</strong>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Annual Benefit</th>
                  <th>Cost</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Occupancy trigger pricing rules</td>
                  <td>$4.2M (high-demand) + $1.1M (low-demand)</td>
                  <td>~$0</td>
                  <td>🔴 Immediate</td>
                </tr>
                <tr>
                  <td>Rate fences (MinLOS + AP non-refundable)</td>
                  <td>$400–$600K (segment protection)</td>
                  <td>~$0 (PMS config only)</td>
                  <td>🔴 Immediate</td>
                </tr>
                <tr>
                  <td>OTA closure at 80% (compliant)</td>
                  <td>$876K commission saved</td>
                  <td>~$0 (ranking risk managed)</td>
                  <td>🔴 Immediate</td>
                </tr>
                <tr>
                  <td>AI-driven RMS deployment</td>
                  <td>$520K+ on normal days</td>
                  <td>$30K/yr + integration</td>
                  <td>🟡 Month 2</td>
                </tr>
                <tr>
                  <td>Loyalty direct rate program</td>
                  <td>$876K recovered commission</td>
                  <td>Medium (marketing + tech)</td>
                  <td>🟡 Month 3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. Business Decision-Making</h2>
        <div className="content">
          <p>The General Manager approves the phased dynamic pricing rollout after seeing the annual impact model:</p>
          <ol>
            <li>
              <strong>Pilot on 1 Property First:</strong> Run dynamic pricing and rate fencing on the
              highest-demand Azure Sands location for 90 days. Measure RevPAR and Net-RevPAR vs. the
              3 static-priced properties as the control group. Decision rule: if pilot RevPAR exceeds
              control by ≥15% on comparable day types, roll out chain-wide.
            </li>
            <li>
              <strong>Staff Re-Training on Net-RevPAR Mindset:</strong> Front desk incentives currently
              reward "filling rooms." Shift KPIs to Net-RevPAR targets so staff understand that a direct
              booking with a complimentary breakfast at $200 is better than an OTA booking at $200 net
              $156 — even though the rate looks identical.
            </li>
            <li>
              <strong>Alternative Strategy Rejected — Rate Freeze Guarantee:</strong> The Director of
              Sales proposed promising guests that if they book direct, the rate won't go lower. Rejected
              because it eliminates the ability to deploy last-minute discounts on slow nights (Scenario C
              recovery of +$3,085/night/property), and conflicts with MinLOS rate fence structure.
            </li>
            <li>
              <strong>OTA Relationship Management:</strong> The Director of Sales is correct that
              selective OTA closures carry relationship risk. Mitigation: designate an OTA account manager
              to communicate proactively that closures are occupancy-driven and temporary, and maintain
              preferred partner status by keeping all low-demand dates fully available at parity rates.
            </li>
          </ol>

          <div className="highlight-box" style={{marginTop: '16px'}}>
            <strong>Monitoring Dashboard — Weekly KPIs:</strong>
            <table className="data-table">
              <thead>
                <tr>
                  <th>KPI</th>
                  <th>Current</th>
                  <th>Target (Q2)</th>
                  <th>Alert Threshold</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RevPAR</td>
                  <td>$140</td>
                  <td>$178–$185</td>
                  <td>&lt;$155 = pricing rules not executing</td>
                </tr>
                <tr>
                  <td>Net-RevPAR (after commission)</td>
                  <td>~$112</td>
                  <td>$155–$165</td>
                  <td>&lt;$130 = OTA channel strategy failing</td>
                </tr>
                <tr>
                  <td>Direct Booking Share</td>
                  <td>45%</td>
                  <td>55% (Q2) → 60% (12 months)</td>
                  <td>&lt;48% = direct conversion not converting</td>
                </tr>
                <tr>
                  <td>Booking Pace Index (vs. prior year)</td>
                  <td>Baseline</td>
                  <td>+15%</td>
                  <td>&lt;−10% = demand concern, review rate levels</td>
                </tr>
                <tr>
                  <td>Cancellation Rate (last-minute)</td>
                  <td>25%</td>
                  <td>&lt;16% (rate fence non-refundable effect)</td>
                  <td>&gt;28% = fences not applying to correct rate types</td>
                </tr>
                <tr>
                  <td>OTA Ranking Index (Booking.com)</td>
                  <td>Baseline</td>
                  <td>Within 10% of baseline</td>
                  <td>&gt;15% decline = closure frequency too aggressive</td>
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
            <strong>Senior Perspective:</strong> Dynamic pricing is as much about <strong>Psychology</strong>
            as it is about Math. You must manage "Price Integrity" — if guests feel gouged, you lose
            long-term brand equity. Senior analysts use "Value-Added" (free breakfast, spa credit, early
            check-in) instead of naked price drops to protect the luxury image while still moving inventory
            on slow days. The economic outcome is equivalent; the brand perception is very different.
          </p>
          <div className="highlight-box">
            <strong>Key Lesson — Sold Out Is Not Always a Win:</strong> A sold-out hotel is not always a
            success. If you sold out 3 months in advance at $200, you sold 95 rooms that the market would
            have paid $380 for. The goal is to sell your <strong>last room</strong> at the
            <strong> highest possible price</strong> just before check-in — not to sell all rooms as early
            as possible at the lowest price the market will accept.
          </div>
          <div className="highlight-box" style={{marginTop: '16px'}}>
            <strong>Common Beginner Mistake — Optimising Occupancy, Not Net-RevPAR:</strong> Beginners
            optimise for Occupancy Rate. A 95% occupied hotel feels like a success. Seniors optimise for
            <strong> Net-RevPAR</strong> — revenue per available room after OTA commissions. A hotel at
            80% occupancy with 60% direct bookings easily out-earns a 95% occupied hotel where 80% came
            through Expedia. Always follow the net dollar, not the headline metric.
          </div>
          <div className="highlight-box" style={{marginTop: '16px'}}>
            <strong>Second Common Mistake — Dynamic Prices Without Rate Fences:</strong> Setting the right
            price at the right time achieves nothing if guests can cross-shop between pricing tiers. A
            business traveler who books 45 days out at the leisure advance-purchase rate has arbitraged
            your segmentation entirely. Rate fences — minimum stay, non-refundable advance purchase,
            cancellation policy differentials — are the infrastructure that makes segmented pricing hold.
            Build them before you build the pricing algorithm.
          </div>
          <div className="highlight-box" style={{marginTop: '16px'}}>
            <strong>Interview-Ready Insight:</strong> If asked "How would you price hotel rooms
            dynamically?" the winning structure: <em>"First, I'd measure price elasticity separately for
            each customer segment using controlled A/B rate testing — business travelers are inelastic,
            leisure travelers are elastic. Second, I'd build a booking curve baseline so I know when pace
            is ahead or behind normal. Third, I'd set occupancy-triggered pricing rules. Fourth — and most
            practitioners skip this — I'd implement rate fences to prevent segment cross-selection.
            Finally, I'd always optimise Net-RevPAR, not gross, because the channel you sell through can
            flip a profitable room into a near-breakeven transaction — and OTA parity clauses constrain
            how you manage that channel mix."</em>
          </div>
        </div>
      </section>

    </div>
  );
};
export default Case05;
