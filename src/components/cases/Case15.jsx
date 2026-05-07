const Case15 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 15</span>
        <h1>The $2B Portfolio Pivot</h1>
        <div className="case-meta">
          Industry: Telecommunications / Corporate Strategy &bull; Level: Advanced / Strategic — Board-Level Capital Allocation
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>Apex Telecommunications Group</strong> is a Southeast Asian telco conglomerate with <strong>$12B in annual revenue</strong>, operating mobile, fixed-line, and nascent digital service businesses across <strong>six markets</strong>: Singapore, Malaysia, Indonesia, the Philippines, Thailand, and Vietnam. The group carries 28 million mobile subscribers, a legacy copper fixed-line network, and a portfolio of early-stage digital ventures in fintech payments, B2B cloud, and video streaming.
          </p>
          <p>
            Apex was built through two decades of acquisition. The group's PE majority shareholder — a consortium led by a Singapore-based sovereign-linked fund — took control six years ago with a mandate to professionalize operations and generate a liquidity event within 8 years. With two years left on that clock, the pressure is acute. The group's EBITDA margin sits at <strong>34%</strong> — structurally below the 38–42% peer benchmark. The stock equivalent (held by the minority float) is down 22% year-to-date.
          </p>
          <p>
            A new Group CEO recruited from McKinsey arrived nine months ago. She brought a new CFO, a new Chief Strategy Officer (CSO), and a mandate to make the hard decisions her predecessor avoided. Six weeks from now, the board convenes for a capital allocation session where a <strong>$2 billion deployment decision</strong> must be made. Options on the table: (1) full 5G network buildout across all six markets, (2) selective 5G in premium markets, (3) aggressive investment in digital services, (4) divestiture of the legacy fixed-line network, and (5) acquisition of FastLink — the leading MVNO that has been systematically undercutting Apex in Indonesia and the Philippines.
          </p>
          <div className="highlight-box">
            <strong>What Triggered This Engagement:</strong> Q3 earnings showed ARPU down <em>8.3% year-over-year</em>, subscriber churn rising from 2.1% to 3.4% in its two largest volume markets, and EBITDA margin erosion of 2.1 percentage points. Moody's issued a credit watch notification: if net leverage exceeds 3.5× EBITDA by year-end, a downgrade from Baa2 to Baa3 is probable. Current net leverage: <em>3.41×</em>. The margin for error is 9 basis points.
            <br /><br />
            <strong>Stakeholder Map:</strong>
            <ul>
              <li><strong>PE Consortium (majority owner):</strong> Wants EBITDA improvement and a credible exit path. A Moody's downgrade triggers covenant breaches on $4.2B of debt.</li>
              <li><strong>Group CEO:</strong> Needs a bold pivot that differentiates from the prior regime. Privately suspects fixed-line is a value trap.</li>
              <li><strong>CFO:</strong> Laser-focused on the leverage covenant. Will block any initiative that risks crossing 3.5×.</li>
              <li><strong>Regional MDs (Indonesia, Philippines):</strong> Want the FastLink acquisition — they see it as an existential threat. Singapore and Malaysia MDs want 5G — they see it as their competitive moat.</li>
              <li><strong>CSO:</strong> Believes digital services is the future and is lobbying hard for a $400M all-market digital plan. Nine months in, she has not yet delivered a material win.</li>
            </ul>
          </div>
          <p>
            This is not a clean analytics problem. It is a political and financial pressure cooker wearing the mask of a strategy question. The analytics team's job is to cut through the politics with data, quantify the trade-offs, and give the CEO something defensible to walk into that boardroom with.
          </p>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem: Three Crises Wearing One Mask</h2>
        <div className="content">
          <p>
            The board has framed this as a single problem: "how do we grow revenue and protect margin?" That framing is wrong. What Apex actually has is <strong>three structurally distinct crises</strong> that appear as one because they all show up on the same P&L line.
          </p>
          <div className="highlight-box">
            <strong>Crisis 1 — MVNO Price War in Volume Markets (Structural)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              In Indonesia and the Philippines, FastLink and two other MVNOs have undercut Apex's prepaid pricing by 35–50%. These markets carry 16.5 million of Apex's 28 million subscribers — but at an average ARPU of only $9/month. The MVNO cost structure is dramatically lower: they lease Apex's own network capacity through mandatory wholesale agreements, carry no legacy infrastructure overhead, and run purely digital distribution. Apex cannot win a price war here without destroying its own margin. The real question is: should it even try?
            </p>
          </div>
          <div className="highlight-box">
            <strong>Crisis 2 — 5G Capex Timing Trap (Cyclical)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Apex's Singapore and Malaysia businesses are structurally healthy — premium subscribers, low churn, rapidly growing data consumption. The problem: competitors in both markets are already rolling out 5G, and without it, Apex risks premium customer defection within 18–24 months. A full 5G buildout across six markets costs $2B. A selective build (Singapore + KL metro + Manila CBD only) costs $780M. The timing trap: 5G capex burden hits the leverage ratio immediately, but monetization benefits won't materialize for 12–24 months after deployment.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Crisis 3 — Digital Services Value Destruction (Strategic)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Apex's digital services arm — three years old, operating across all six markets simultaneously — is generating $1.49B in revenue but only $159M in EBITDA (10.7% margin vs. 34% group average). The CSO's $400M plan is premised on achieving scale everywhere. The data tells a different story: 84% of digital services revenue comes from Singapore and Malaysia. Expanding to markets where digital payment penetration and regulatory frameworks are immature is burning $60M/year with no measurable path to breakeven in those markets within 5 years.
            </p>
          </div>
          <p>
            <strong>The root cause:</strong> Apex's predecessor management built a geographic empire without an economic logic. The premium markets (Singapore, Malaysia) are subsidizing the volume markets (Indonesia, Philippines) and the experimental digital ventures simultaneously. The $2B capital decision is really a question about which crisis gets addressed first — because all three cannot be solved simultaneously with available capital.
          </p>
          <p>
            <strong>The 6-month cliff:</strong> If Moody's downgrades Apex from Baa2 to Baa3, the terms on $4.2B of debt trigger an automatic covenant review. Three tranches totaling $2.1B have cross-default clauses. In a worst case, Apex faces a liquidity event forcing a fire-sale of assets rather than a strategic divestiture. The analytics team is not just optimizing a portfolio — it is helping the business avoid a credit crisis.
          </p>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>North Star:</strong> Which combination of capital deployment options maximizes long-term NPV while keeping net leverage below 3.5× EBITDA at every point in the next 24 months — and what is the quantified NPV difference between the best and worst scenarios?
          </div>
          <p><strong>Three Key Questions the Board Needs Answered:</strong></p>
          <ol>
            <li>
              <strong>Which subscriber segments and markets generate CLV high enough to justify 5G premium investment</strong> — and are those segments concentrated enough to warrant selective rather than blanket deployment?
            </li>
            <li>
              <strong>What is the net present value of each capital option</strong> (full 5G, selective 5G, digital investment, divestiture, acquisition) under bear, base, and bull assumptions — and which scenario wins under all three?
            </li>
            <li>
              <strong>Which markets can Apex profitably retain</strong> in its mobile subscriber base, and in which markets should it accept managed decline rather than fight a price war it cannot structurally win?
            </li>
          </ol>
          <p>
            <strong>What success looks like:</strong> The CEO walks into the board meeting with a scenario-modeled capital plan where every option has a quantified NPV, a leverage impact at 6/12/24 months, and a credible bear-case downside. The board approves a capital allocation that protects the credit rating while funding the strategic pivot.
          </p>
          <p>
            <strong>Analytical approach:</strong> Primarily prescriptive analytics. Diagnostic analytics (revenue decomposition, CLV segmentation, market profitability) establishes the baseline. Predictive modeling (churn trajectory, ARPU compression curves) informs scenario assumptions. Prescriptive optimization (NPV scenario modeling, leverage sensitivity) generates the decision output. All three modes in sequence.
          </p>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Framework Selection & Rationale</h2>
        <div className="content">
          <p>
            Capital allocation decisions at this complexity level require layered frameworks — each answering a different part of the question. The danger is using too many and producing a slide deck that impresses without deciding. I need exactly three frameworks, in sequence, each one informing the next.
          </p>
          <div className="highlight-box">
            <strong>Primary: BCG Growth-Share Matrix — Portfolio Classification</strong>
            <p style={{ marginTop: '10px', marginBottom: '8px', fontSize: '14px' }}>
              I use BCG to classify Apex's business units before touching the capital allocation question. You cannot decide where to deploy capital without knowing what each business unit actually is economically.
            </p>
            <ul style={{ fontSize: '14px' }}>
              <li><strong>Cash Cows:</strong> Singapore mobile, Malaysia mobile (high share, mature market, strong cash generation). These fund everything else. Protect at all costs.</li>
              <li><strong>Stars:</strong> 5G-enabled premium mobile (emerging — not yet built). This is what selective 5G investment creates.</li>
              <li><strong>Question Marks:</strong> Digital services, Thailand mobile (low share, high-growth market). Need focused capital to become Stars — or they decay into Dogs.</li>
              <li><strong>Dogs:</strong> Indonesia prepaid, Philippines prepaid, legacy copper fixed-line (low share, low growth, value-destructive). Classic harvest-and-exit candidates.</li>
            </ul>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Why this fits:</strong> BCG immediately reveals that management has been pouring capital into Dogs (defending Indonesia prepaid, maintaining copper fixed-line) while underinvesting in what should become the next Star. The framework doesn't prescribe a solution — but it clarifies that capital allocation has been backwards.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Secondary: Customer Lifetime Value (CLV) Segmentation</strong>
            <p style={{ marginTop: '10px', fontSize: '14px' }}>
              BCG works at the business-unit level. CLV works at the customer-segment level. The 5G decision is not about markets — it is about which subscriber segments within markets generate enough lifetime value to justify the premium network investment. If Indonesia has a small enterprise segment worth $9,000 CLV each, that changes the Indonesia calculus entirely, even if the prepaid base is a Dog.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Why this fits:</strong> In every telco engagement I have run, the top 20–30% of subscribers generate 65–75% of EBITDA. CLV quantifies that concentration and tells you exactly who you are building the 5G network for.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Tertiary: NPV Scenario Modeling (Bear / Base / Bull)</strong>
            <p style={{ marginTop: '10px', fontSize: '14px' }}>
              The decision framework. Once BCG classifies the portfolio and CLV identifies which segments to serve, NPV modeling translates each capital option into a financial outcome under different market assumptions. The leverage constraint makes this a constrained optimization problem — not "maximize NPV" but "maximize NPV subject to leverage ≤ 3.5× at all points in the next 24 months."
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Why this fits:</strong> Board members do not make decisions based on BCG quadrants. They make decisions based on numbers. The NPV model translates strategic logic into the language the PE consortium and CFO actually speak.
            </p>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Framework Considered</th>
                <th>Decision</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Porter's Five Forces</strong></td>
                <td>Context only</td>
                <td>Useful for understanding MVNO threat dynamics but produces no capital allocation output. Used to inform BCG assumptions, not as a standalone framework.</td>
              </tr>
              <tr>
                <td><strong>Ansoff Matrix</strong></td>
                <td>Rejected</td>
                <td>The strategic options are already defined. Ansoff helps generate options — we need to evaluate existing ones.</td>
              </tr>
              <tr>
                <td><strong>McKinsey 7S</strong></td>
                <td>Rejected</td>
                <td>This is a capital allocation question, not an organizational alignment question. 7S is the right framework after the capital decision is made.</td>
              </tr>
              <tr>
                <td><strong>Value Chain Analysis</strong></td>
                <td>Deferred</td>
                <td>Relevant for the fixed-line divestiture deep-dive but adds complexity without changing the top-line NPV conclusion. Flagged for Phase 2.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. Data Perspective</h2>
        <div className="content">
          <p>
            A capital allocation engagement of this scale requires data from four distinct layers: subscriber economics, network financials, market intelligence, and corporate finance. Each layer has different data quality and different strategic leverage.
          </p>
          <p><strong>Market-Level Subscriber & Financial Data:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Market</th>
                <th>Subscribers (M)</th>
                <th>Monthly ARPU ($)</th>
                <th>Annual Churn</th>
                <th>Mobile EBITDA Margin</th>
                <th>5G Spectrum Ready?</th>
                <th>BCG Classification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Singapore</strong></td>
                <td>2.5</td>
                <td>$65</td>
                <td>12%</td>
                <td>48%</td>
                <td>Yes — licensed</td>
                <td>Cash Cow → Star (post-5G)</td>
              </tr>
              <tr>
                <td><strong>Malaysia</strong></td>
                <td>5.5</td>
                <td>$28</td>
                <td>18%</td>
                <td>41%</td>
                <td>Yes — licensed</td>
                <td>Cash Cow</td>
              </tr>
              <tr>
                <td><strong>Indonesia</strong></td>
                <td>12.0</td>
                <td>$8</td>
                <td>44%</td>
                <td>22%</td>
                <td>Partial — pending</td>
                <td>Dog (mass prepaid)</td>
              </tr>
              <tr>
                <td><strong>Philippines</strong></td>
                <td>4.5</td>
                <td>$12</td>
                <td>38%</td>
                <td>26%</td>
                <td>No</td>
                <td>Dog (contested)</td>
              </tr>
              <tr>
                <td><strong>Thailand</strong></td>
                <td>2.5</td>
                <td>$18</td>
                <td>22%</td>
                <td>35%</td>
                <td>Partial — licensed</td>
                <td>Question Mark</td>
              </tr>
              <tr>
                <td><strong>Vietnam</strong></td>
                <td>1.5</td>
                <td>$10</td>
                <td>28%</td>
                <td>29%</td>
                <td>No</td>
                <td>Question Mark</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Customer Lifetime Value by Segment (Cross-Market):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Segment</th>
                <th>Subscribers</th>
                <th>Monthly ARPU</th>
                <th>Monthly Cost-to-Serve</th>
                <th>Annual Churn</th>
                <th>CLV</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Enterprise Premium</strong> (SG/MY corporates)</td>
                <td>280,000</td>
                <td>$85</td>
                <td>$22</td>
                <td>8%</td>
                <td><strong>$9,450</strong></td>
              </tr>
              <tr>
                <td><strong>Consumer Premium</strong> (SG/MY postpaid)</td>
                <td>3,800,000</td>
                <td>$62</td>
                <td>$19</td>
                <td>14%</td>
                <td><strong>$3,686</strong></td>
              </tr>
              <tr>
                <td><strong>Mid-Market Postpaid</strong> (TH/VN/MY)</td>
                <td>6,200,000</td>
                <td>$18</td>
                <td>$9</td>
                <td>23%</td>
                <td><strong>$470</strong></td>
              </tr>
              <tr>
                <td><strong>Mass Prepaid</strong> (ID/PH primary)</td>
                <td>17,720,000</td>
                <td>$8</td>
                <td>$5.50</td>
                <td>44%</td>
                <td><strong>$68</strong></td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Leading vs. Lagging KPIs:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>KPI</th>
                <th>Type</th>
                <th>Current Value</th>
                <th>What It Signals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ARPU compression rate</td>
                <td>Lagging</td>
                <td>−8.3% YoY</td>
                <td>Pricing power loss already happened; structural decline confirmed</td>
              </tr>
              <tr>
                <td>Churn in ID/PH markets</td>
                <td>Lagging</td>
                <td>+1.3pp increase</td>
                <td>Price war impact already in the base; acceleration is the risk</td>
              </tr>
              <tr>
                <td>Data consumption per premium user</td>
                <td>Leading</td>
                <td>+34% YoY (SG/MY)</td>
                <td>5G demand building — premium users will need it in 18 months</td>
              </tr>
              <tr>
                <td>Enterprise Net Promoter Score (SG)</td>
                <td>Leading</td>
                <td>−7 points YoY</td>
                <td>Enterprise satisfaction eroding before churn appears — early warning</td>
              </tr>
              <tr>
                <td>Net leverage ratio</td>
                <td>Lagging</td>
                <td>3.41×</td>
                <td>The hard constraint all other decisions run against</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: '15px' }}>
            <strong>Data Gaps & Working Assumptions:</strong> (1) FastLink MVNO financials estimated from public filings — actual margins may be 10–15% better or worse. (2) 5G demand elasticity in SE Asian markets modeled from Korea and Japan analogues — there is inherent uncertainty here. (3) Fixed-line asset valuation based on a 2023 independent appraisal at $1.5B — a fire-sale yields $900M–$1.1B; a structured 18-month process could achieve $1.4–1.6B.
          </p>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <p>
            A problem of this scale is solved in four analytical acts. The sequence matters: you cannot run NPV models without an established baseline, and you cannot establish baseline economics without segmenting the portfolio first. Start broad, narrow to the decision.
          </p>
          <ol>
            <li>
              <strong>Act 1 — Revenue Decomposition: Find Where the Real EBITDA Lives</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Before touching any framework, I decompose revenue and EBITDA to the market × product × segment level. The aggregate P&L hides everything that matters. This step answers: which markets generate what percentage of total EBITDA, and what does the per-subscriber economics look like? The answer almost always produces the same pattern across telcos — and Apex is no exception: a small share of subscribers generates a disproportionate share of EBITDA. Once I establish that, I can determine which assets are strategically critical (protect), which are value traps (divest), and which are optionality bets (selectively invest).
              </p>
            </li>
            <li>
              <strong>Act 2 — BCG Classification: Separate Cash Engines from Capital Drains</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Using decomposed EBITDA and market growth data, I classify each business unit on the BCG matrix. The critical hypothesis I am testing: is the fixed-line business a Dog or a Cash Cow? If it generates 20%+ of EBITDA at low growth without needing significant new capex, it may be a cash engine worth retaining. If its capex requirements are escalating to maintain the network, it is a Dog consuming capital that should go to Stars. BCG forces the conversation management has never explicitly had.
              </p>
            </li>
            <li>
              <strong>Act 3 — CLV Segmentation: Identify Who You Are Building For</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                The 5G investment decision cannot be evaluated at the market level — it must be evaluated at the subscriber segment level. The question is not "should we deploy 5G in Singapore?" It is: "does the CLV of subscribers who will pay a premium for 5G exceed the per-subscriber cost of building the network for them?" I am specifically testing whether mass-prepaid subscribers in Indonesia or the Philippines have CLV high enough to justify 5G investment in those markets — or whether the 5G case is purely a Singapore/Malaysia premium defense story. That finding determines whether the capital case for full buildout ($2B) vs. selective buildout ($780M) is even worth modeling.
              </p>
            </li>
            <li>
              <strong>Act 4 — NPV Scenario Modeling: Translate Strategy Into a Number the Board Can Act On</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Only after Acts 1–3 do I build NPV models. At this point I know which businesses to invest in vs. harvest, which subscriber segments justify the 5G capex, and what the realistic EBITDA uplift trajectory looks like. Critical discipline: I run bear, base, and bull scenarios on every option, and stress-test the leverage ratio at every 6-month interval. The question I always ask: does the recommended scenario win under the bear case, or does it only look good under optimistic assumptions? A strategy that depends on the bull case is a gamble, not a recommendation.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Calculations & Financial Modeling</h2>
        <div className="content">

          <p><strong>Calculation 1 — Revenue & EBITDA Decomposition by Market</strong></p>
          <div className="calculation">
{`Annual Mobile Revenue by Market:
  Singapore:    2.5M subs × $65 ARPU × 12 months  = $1,950M
  Malaysia:     5.5M subs × $28 ARPU × 12 months  = $1,848M
  Indonesia:   12.0M subs × $8 ARPU  × 12 months  = $1,152M
  Philippines:  4.5M subs × $12 ARPU × 12 months  =   $648M
  Thailand:     2.5M subs × $18 ARPU × 12 months  =   $540M
  Vietnam:      1.5M subs × $10 ARPU × 12 months  =   $180M
                                             Total  = $6,318M  (mobile)

  + Fixed-Line Network revenue                      = $2,480M
  + Digital Services (fintech, cloud, streaming)    = $1,202M
  ────────────────────────────────────────────────────────────
  Group Total Revenue                               ≈ $10,000M
  [Management accounts include interco charges and misc bringing total to $12B]

EBITDA by Business Line:
  Mobile blended (≈ 35.8% margin):    $6,318M × 0.358   = $2,262M
  Fixed-Line (29% margin):            $2,480M × 0.290   =   $719M
  Digital Services (10.7% margin):    $1,202M × 0.107   =   $129M
  Corporate + interco adjustments:                       =   $970M
  ────────────────────────────────────────────────────────────
  Group EBITDA (management accounts):                   = $4,080M  (34% margin) ✓

Singapore + Malaysia mobile contribution:
  Revenue:  $1,950M + $1,848M = $3,798M  (32% of group)
  EBITDA:   $1,950M × 0.48 + $1,848M × 0.41 = $936M + $758M = $1,694M

  ⟹ Singapore + Malaysia = 29% of subscribers, 41.5% of group EBITDA
     These 8M subscribers are the irreplaceable cash engine of the entire group.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 2 — Customer Lifetime Value by Segment</strong></p>
          <div className="calculation">
{`Formula:  CLV = (Monthly ARPU − Monthly Cost-to-Serve) × 12 ÷ Annual Churn Rate

Segment 1 — Enterprise Premium (280K subs):
  Monthly contribution:  $85 − $22 = $63
  CLV = $63 × 12 ÷ 0.08 = $756 ÷ 0.08 = $9,450 per subscriber
  Total segment value:   280,000 × $9,450 = $2.65B

Segment 2 — Consumer Premium (3.8M subs):
  Monthly contribution:  $62 − $19 = $43
  CLV = $43 × 12 ÷ 0.14 = $516 ÷ 0.14 = $3,686 per subscriber
  Total segment value:   3,800,000 × $3,686 = $14.01B

Segment 3 — Mid-Market Postpaid (6.2M subs):
  Monthly contribution:  $18 − $9 = $9
  CLV = $9 × 12 ÷ 0.23 = $108 ÷ 0.23 = $470 per subscriber
  Total segment value:   6,200,000 × $470 = $2.91B

Segment 4 — Mass Prepaid (17.72M subs):
  Monthly contribution:  $8.00 − $5.50 = $2.50
  CLV = $2.50 × 12 ÷ 0.44 = $30 ÷ 0.44 = $68 per subscriber
  Total segment value:   17,720,000 × $68 = $1.20B

CLV Concentration Summary:
  Segment                  Subscribers  % of Base  Total CLV  % of CLV
  Enterprise Premium           280K        1.0%      $2.65B    12.8%
  Consumer Premium            3,800K       13.6%    $14.01B    67.6%
  Mid-Market Postpaid         6,200K       22.1%     $2.91B    14.0%
  Mass Prepaid               17,720K       63.3%     $1.20B     5.6%
  ────────────────────────────────────────────────────────────────────
  TOTAL                      28,000K      100.0%    $20.77B   100.0%

  ⟹ Top 14.6% of subscribers (Enterprise + Consumer Premium) = 80.4% of total CLV
     Mass Prepaid = 63% of subscribers = 5.6% of CLV
     CLV per-subscriber ratio: Enterprise ($9,450) vs. Mass Prepaid ($68) = 139:1
     The 5G ROI case exists ONLY for the top 4.1 million subscribers.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 3 — NPV: Selective 5G vs. Full Buildout (WACC = 10%)</strong></p>
          <div className="calculation">
{`OPTION A — Full 5G Buildout (All 6 Markets):
  Capex:          $2,000M upfront (Year 0)
  Build period:   24 months → EBITDA uplift begins Year 3
  Stabilized annual EBITDA uplift: $680M/yr (Year 3 onward)

  Discounted Cash Flows:
  Year 1:  $0M
  Year 2:  $0M
  Year 3:  $680M ÷ (1.10)³  = $680M ÷ 1.3310 = $510.9M
  Year 4:  $680M ÷ (1.10)⁴  = $680M ÷ 1.4641 = $464.5M
  Year 5:  $680M ÷ (1.10)⁵  = $680M ÷ 1.6105 = $422.2M
  Year 6:  $680M ÷ (1.10)⁶  = $680M ÷ 1.7716 = $383.8M
  Year 7:  $680M ÷ (1.10)⁷  = $680M ÷ 1.9487 = $348.9M
  ──────────────────────────────────────────────────────
  Sum of discounted benefits:                  $2,130.3M
  Less: Capex outlay:                         −$2,000.0M
  NPV Option A:                                 +$130.3M

OPTION B — Selective 5G (Singapore + KL Metro + Manila CBD):
  Capex:          $780M upfront (Year 0)
  Build period:   12 months → EBITDA uplift begins Year 2
  Stabilized annual EBITDA uplift: $520M/yr (Year 2 onward)

  Discounted Cash Flows:
  Year 1:  $0M
  Year 2:  $520M ÷ (1.10)²  = $520M ÷ 1.2100 = $429.8M
  Year 3:  $520M ÷ (1.10)³  = $520M ÷ 1.3310 = $390.7M
  Year 4:  $520M ÷ (1.10)⁴  = $520M ÷ 1.4641 = $355.2M
  Year 5:  $520M ÷ (1.10)⁵  = $520M ÷ 1.6105 = $322.9M
  Year 6:  $520M ÷ (1.10)⁶  = $520M ÷ 1.7716 = $293.6M
  Year 7:  $520M ÷ (1.10)⁷  = $520M ÷ 1.9487 = $266.9M
  ──────────────────────────────────────────────────────
  Sum of discounted benefits:                  $2,059.1M
  Less: Capex outlay:                           −$780.0M
  NPV Option B:                                +$1,279.1M

  NPV advantage of Selective over Full: $1,279.1M − $130.3M = +$1,148.8M
  ⟹ Selective 5G generates $1.15B MORE NPV than full buildout.
     Drivers: $1.22B less capex, 12-month faster monetization start,
     and $160M/yr lower stabilized EBITDA foregone — a trade-off that
     pays back $1.15B in net present value terms.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 4 — Fixed-Line Divestiture: Leverage Impact Analysis</strong></p>
          <div className="calculation">
{`Current Financial Position:
  Net Debt:          $13,900M
  Group EBITDA:       $4,080M
  Net Leverage:   13,900 ÷ 4,080 = 3.41×  (Moody's watch zone)

Scenario A: Divestiture Alone (No 5G EBITDA Offset):
  Proceeds applied to debt:  $1,500M
  New Net Debt:  $13,900M − $1,500M = $12,400M
  New Group EBITDA:  $4,080M − $719M (fixed-line lost) = $3,361M
  New Leverage:  $12,400M ÷ $3,361M = 3.69×  ← WORSE. Covenant breached.

  CRITICAL: EBITDA falls proportionally more than debt declines.
  Divesting fixed-line alone makes the leverage problem worse, not better.

Scenario B: Divestiture PAIRED with Selective 5G (Year 2 Combined):
  Net Debt (Year 2):  $12,400M − $520M FCF from 5G ramp = $11,880M
  Group EBITDA (Year 2):  $3,361M + $520M (5G uplift) = $3,881M
  Leverage (Year 2):  $11,880M ÷ $3,881M = 3.06×  ← Safe. Comfortably below 3.5×.

  ⟹ The fix is NOT divestiture alone. It is divestiture PAIRED with 5G EBITDA
     uplift that replaces the divested earnings before the leverage window closes.
     Sequence: commit 5G first (Month 0), begin divestiture process (Month 6),
     close asset sale to coincide with 5G EBITDA ramp starting (Month 12–18).`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 5 — FastLink MVNO Acquisition: Build vs. Buy Economics</strong></p>
          <div className="calculation">
{`FastLink Estimated Financials (from regulatory filings + market intelligence):
  Annual Revenue:  $420M   Annual EBITDA:  $84M (20% margin)
  Subscribers:  4.8M (Indonesia + Philippines, mass prepaid)

Acquisition Price at Market Comparable (12× EBITDA):
  Price: 12 × $84M = $1,008M ≈ $1,000M

Synergy Case:
  Network cost saving (stop subsidizing competitor):  $48M/yr
  Revenue synergy (FastLink users upgrade to postpaid): $35M/yr
  Total synergy: $83M/yr (assumed 50% in Year 2, 100% from Year 3)

Acquisition NPV (10% WACC, 7-year horizon):
  Year 0:  −$1,000M (acquisition price)
  Year 1:  $84M ÷ 1.10                     =  $76.4M
  Year 2:  ($84M + $42M) ÷ (1.10)²         = $103.3M  (50% synergy)
  Year 3:  $167M ÷ (1.10)³                 = $125.5M
  Year 4:  $167M ÷ (1.10)⁴                 = $114.1M
  Year 5:  $167M ÷ (1.10)⁵                 = $103.7M
  Year 6:  $167M ÷ (1.10)⁶                 =  $94.2M
  Year 7:  $167M ÷ (1.10)⁷                 =  $85.7M
  ──────────────────────────────────────────────────
  Sum of discounted cash flows:               $702.9M
  Less acquisition price:                  −$1,000.0M
  Acquisition NPV:                           −$297.1M  ← NEGATIVE

  Payback period without synergies: $1,000M ÷ $84M  = 11.9 years
  Payback period with full synergies: $1,000M ÷ $167M =  6.0 years
  NPV break-even acquisition price: $703M ÷ 1.0 × ~6.4× EBITDA = $538M

  ⟹ FastLink destroys value at any price above $538M (6.4× EBITDA).
     The emotional case ("eliminate the competitor") does not survive the math.
     Better alternative: renegotiate wholesale rate card to erode FastLink's
     margin advantage by 8–12% — same strategic effect at zero acquisition cost.`}
          </div>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Findings & Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Finding 1 — The Concentration Paradox (Expected, But More Extreme Than Assumed)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The top 14.6% of Apex's subscribers (Enterprise + Consumer Premium, predominantly Singapore and Malaysia) hold 80% of total subscriber base CLV. The bottom 63% (mass prepaid in Indonesia and Philippines) hold just 5.6% of CLV. Management knew value was concentrated — they didn't know the per-subscriber CLV ratio between top and bottom segments was 139:1. This fundamentally changes how every capital dollar should be weighed.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 2 — Selective 5G Outperforms Full Buildout by $1.15B NPV (Counterintuitive)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The instinct is that a bigger 5G footprint creates more value. The math says the opposite. Full buildout ($2B, 24-month build) generates only $130M NPV. Selective buildout ($780M, 12-month build) generates $1,279M NPV. The $1.22B in unspent capex — redeployed to debt reduction and higher-return investments — is worth more than the additional $160M/yr of stabilized EBITDA from the extra markets. The board's instinct to "go all in" on 5G would cost $1.15B in NPV. This will be the most contested finding.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 3 — Fixed-Line Divestiture Is Necessary But Not Sufficient (Nuanced)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Divesting fixed-line alone worsens the leverage ratio from 3.41× to 3.69×, because the EBITDA loss ($719M) outweighs the leverage benefit of $1.5B debt reduction. The divestiture only works when paired with a source of EBITDA replacement — specifically, the 5G upside beginning 12 months after selective buildout. Sequencing is everything: commit to 5G first, initiate divestiture 6 months later.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 4 — FastLink Acquisition Destroys Value at Any Reasonable Price</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              At 12× EBITDA ($1B), the acquisition NPV is −$297M even with generous synergies. The break-even acquisition price is $538M (6.4× EBITDA) — roughly half of what the market would value FastLink at today. In a high-leverage environment with a credit watch overhead, committing $1B to a 6-year payback is the wrong allocation. The regional MDs arguing for this deal are managing revenue share metrics, not capital efficiency metrics.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 5 — Digital Services Should Be Concentrated, Not Spread</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              84% of digital services revenue comes from Singapore and Malaysia, but the CSO's $400M plan distributes capital across all 6 markets — $67M per market — insufficient to reach scale anywhere. The same $400M concentrated in Singapore and Malaysia fintech (where mobile payment penetration is 68% and rising) likely achieves 3× the EBITDA return. The "invest everywhere and see what works" strategy is directionally wrong. This finding is directional — we need 90 more days of work to fully quantify the fintech opportunity, but the direction is clear enough to reshape the capital plan now.
            </p>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Capital Option</th>
                <th>NPV (Base Case)</th>
                <th>Leverage at Year 2</th>
                <th>Verdict</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Full 5G Buildout ($2B)</td>
                <td>+$130M</td>
                <td>3.41× → 3.58× (breach)</td>
                <td>Reject — covenant risk</td>
              </tr>
              <tr>
                <td>Selective 5G ($780M)</td>
                <td>+$1,279M</td>
                <td>3.41× → 3.22×</td>
                <td>Pursue — core recommendation</td>
              </tr>
              <tr>
                <td>Fixed-Line Divestiture (alone)</td>
                <td>+$780M (proceeds)</td>
                <td>3.41× → 3.69× (breach)</td>
                <td>Only viable paired with 5G EBITDA uplift</td>
              </tr>
              <tr>
                <td>Selective 5G + Divestiture</td>
                <td>+$2,059M combined</td>
                <td>3.41× → 3.06×</td>
                <td>Recommended portfolio strategy</td>
              </tr>
              <tr>
                <td>FastLink MVNO Acquisition</td>
                <td>−$297M</td>
                <td>3.41× → 3.88× (severe breach)</td>
                <td>Reject — value-destructive</td>
              </tr>
              <tr>
                <td>Digital Services ($400M, all markets)</td>
                <td>~+$120M (est.)</td>
                <td>3.41× → 3.51× (breach)</td>
                <td>Redirect to SG/MY only; reduce to $180M</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. Recommendations</h2>
        <div className="content">
          <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Tier 1 — Immediate Actions (0–30 Days)</h3>
          <div className="highlight-box">
            <strong>1A. Halt Capital Deployment Into Indonesia/Philippines Mass Prepaid Defense</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Immediately freeze any planned capex or promotional spend designed to compete on price in Indonesia and Philippines mass prepaid.
              <br /><strong>Why:</strong> These markets have CLV of $68/subscriber. No business case exists for retaining them through price matching against MVNOs with structurally lower costs.
              <br /><strong>Owner:</strong> CFO + Indonesia/Philippines Regional MDs
              <br /><strong>Expected impact:</strong> Frees $85M in planned promotional capex over the next 12 months.
            </p>
          </div>
          <div className="highlight-box">
            <strong>1B. Initiate FastLink Wholesale Rate Renegotiation (Not Acquisition)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Commission a regulatory and commercial review of the wholesale rate card for MVNOs using Apex's network. Identify the maximum rate increase permissible without triggering regulatory review.
              <br /><strong>Why:</strong> Apex cannot acquire FastLink profitably, but it can erode FastLink's margin advantage 8–12% through rate recalibration — same strategic goal at zero acquisition cost.
              <br /><strong>Owner:</strong> CSO + Legal + Regulatory Affairs
              <br /><strong>Expected impact:</strong> $25–40M/yr EBITDA improvement if wholesale rates increase 10–15%.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>Tier 2 — Medium-Term Initiatives (1–6 Months)</h3>
          <div className="highlight-box">
            <strong>2A. Commit to Selective 5G ($780M) — Singapore, KL Metro, Manila CBD</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Board approves $780M selective 5G buildout with 12-month deployment target, scoped to where Enterprise Premium and Consumer Premium subscriber concentrations are highest.
              <br /><strong>Why:</strong> NPV of +$1,279M vs. +$130M for full buildout. Faster monetization by 12 months. $1.22B saved. Prevents premium churn in markets generating 41.5% of group EBITDA.
              <br /><strong>Owner:</strong> CTO + Singapore/Malaysia Country Heads
              <br /><strong>Expected impact:</strong> +$520M EBITDA/yr by Year 2; premium churn reduced from 14% to 10% (conservative).
            </p>
          </div>
          <div className="highlight-box">
            <strong>2B. Initiate Fixed-Line Divestiture Process (Target Close: 18 Months)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Retain an M&amp;A advisor and run a structured sale process for the fixed-line copper network. Target: $1.4–1.6B proceeds. Do not accept a fire-sale.
              <br /><strong>Why:</strong> Fixed-line is a Dog — declining market, $220M/yr maintenance capex, no 5G upside. The asset is more valuable sold now than in 3 years. Proceeds reduce leverage to 3.06× when combined with 5G EBITDA uplift in Year 2.
              <br /><strong>Owner:</strong> CFO + Corporate Development
              <br /><strong>Risk:</strong> Regulatory approval required in 4 of 6 markets. Begin pre-consultation immediately.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>Tier 3 — Strategic Moves (6+ Months)</h3>
          <div className="highlight-box">
            <strong>3A. Concentrate Digital Services in Singapore/Malaysia Fintech ($180M, Not $400M)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Redirect the CSO's all-markets $400M plan to a $180M concentrated bet on Singapore and Malaysia embedded fintech (payments, SME lending). Commission a 90-day market assessment before committing the full $180M.
              <br /><strong>Why:</strong> 68% mobile payment penetration and favorable regulatory frameworks in these two markets. $180M concentrated in one category reaches meaningful scale. $400M spread across 6 markets reaches inadequate scale in all of them.
              <br /><strong>Expected impact:</strong> EBITDA breakeven in fintech by Year 3; $80–120M annual EBITDA by Year 5 (requires validation).
            </p>
          </div>
          <div className="highlight-box">
            <strong>3B. Commission Thailand Deep-Dive for Next Capital Cycle</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Commission a Thailand market deep-dive to determine whether it warrants Star-category investment in the next 3-year capital cycle. Do not commit capital now — it competes with leverage management.
              <br /><strong>Why:</strong> Thailand shows 35% EBITDA margins and 22% churn — healthier than Indonesia and Philippines. As leverage approaches 3.0×, Thailand becomes the next logical growth bet. Lock in the data now so the decision is ready when the balance sheet allows it.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 10 ── */}
      <section>
        <h2>10. Business Decision-Making: What Will Actually Happen</h2>
        <div className="content">
          <p>
            Strategic analytics does not end with a recommendation. It ends with understanding what the management team will actually do with it, and what you put in place to make the decision hold under political pressure.
          </p>
          <div className="highlight-box">
            <strong>Which Recommendations Will Be Funded — and Which Will Face Resistance</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Selective 5G will be approved.</strong> The NPV case is the clearest in the analysis and the Singapore/Malaysia MDs have the strongest political weight on the board. This is the anchor of the plan.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Fixed-line divestiture will face significant internal resistance.</strong> The CTO has built his career around this network. But the CFO's leverage covenant concern will ultimately prevail — she has veto power and she knows it. Pre-brief her on the sequencing logic (5G first, then divestiture) so she goes into the board room already aligned.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>FastLink acquisition will come back to the table</strong> at the next board meeting, pushed by the Indonesia MD who will argue analytics underestimated strategic value. Anticipate this: prepare a one-page brief showing the NPV break-even price ($538M) vs. the likely ask ($900M–$1.1B), and leave it with the CFO before the board meeting.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Digital services redirect will be the most politically contested.</strong> The CSO has invested her early tenure in the 6-market vision. Frame the $180M concentrated fintech play as a "focus-to-win" strategy rather than a cut — and give her co-ownership of it with a clear success metric. This preserves her credibility and gets the analytically correct outcome.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Monitoring Metrics — What Gets Tracked at Every Board Meeting</strong>
            <table className="data-table" style={{ marginTop: '10px' }}>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Target (12 Months)</th>
                  <th>Red Line</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Net Leverage Ratio</td>
                  <td>≤ 3.25×</td>
                  <td>&gt; 3.45× triggers CFO escalation protocol</td>
                </tr>
                <tr>
                  <td>Premium Segment Churn (SG/MY)</td>
                  <td>≤ 12% annual</td>
                  <td>&gt; 15% means 5G timeline must accelerate</td>
                </tr>
                <tr>
                  <td>5G Build Progress</td>
                  <td>≥ 60% of scope by Month 9</td>
                  <td>&lt; 40% at Month 9 = timeline escalation</td>
                </tr>
                <tr>
                  <td>Fixed-Line Sale Process</td>
                  <td>LOI signed by Month 8</td>
                  <td>No LOI by Month 10 = reconsider structure</td>
                </tr>
                <tr>
                  <td>Indonesia Prepaid Net Revenue</td>
                  <td>Managed decline ≤ −5% QoQ</td>
                  <td>Decline &gt; −10% QoQ = structural break signal</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>If the board only approves one action:</strong> Selective 5G wins. NPV of $1,279M, favorable leverage impact, protects the 4.1M premium subscribers holding 80% of total CLV. Everything else is optionality built on top of this foundation.
          </p>
        </div>
      </section>

      {/* ── SECTION 11 ── */}
      <section>
        <h2>11. Senior Practitioner's War Room Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>The Pattern Across a Dozen Telco Capital Engagements</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Every telco that built its empire through acquisition eventually faces a version of this problem. They assembled a portfolio for growth optics rather than capital efficiency. The flagship markets cross-subsidize the experimental ones, and over time the experimental ones consume so much management attention and capital that the flagships begin to erode. The fix is almost always the same: concentrate, divest the non-core, and double down on the assets where your unit economics are genuinely defensible. The companies that survive this cycle do so by making the concentration decision 12–18 months earlier than feels comfortable. The ones that wait try to manage all plates simultaneously and end up dropping all of them.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Most Common Mistake in This Type of Engagement</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Accepting management's framing of the problem. In this case: "we need to grow revenue." That framing leads to the FastLink acquisition (adds $420M revenue) and the 6-market digital expansion (adds $300M revenue by Year 3). Both moves make the revenue line look better and capital returns look worse. Senior analysts reframe the problem before they start working on it. The question is never "how do we grow revenue?" — it is "which revenue is worth growing, at what cost of capital, and relative to what alternative use of that capital?" That reframe changes everything about the analysis.
            </p>
          </div>
          <div className="highlight-box">
            <strong>What Junior Analysts Always Miss in This Scenario</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The sequencing between the divestiture and the 5G deployment. A junior analyst runs the divestiture NPV in isolation, sees $1.5B in proceeds, and recommends selling the fixed-line network. What they miss: without the 5G EBITDA uplift landing before the divestiture closes, the leverage ratio worsens, not improves. The order of operations is: (1) commit to Selective 5G, (2) begin fixed-line divestiture process 6 months later, (3) time the close to coincide with 5G EBITDA starting to ramp. Missing this sequencing turns a good strategic recommendation into a credit covenant breach. The leverage constraint is not a number to report — it is a constraint that changes the order of every recommendation.
            </p>
          </div>
          <div className="highlight-box">
            <strong>What a Great Analyst Does Differently Here</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              They run all the NPV models — and then stop and ask: "Which scenario still wins under the bear case?" In this engagement, Selective 5G + Divestiture generates $2,059M NPV in the base case. Under the bear case (5G ARPU premium 30% lower than expected, divestiture proceeds 15% below appraisal), the combined strategy still generates $1,240M NPV and keeps leverage below 3.5×. The full buildout option goes negative in the bear case. A great analyst leads the board presentation with this sensitivity analysis — not the base-case upside. Boards need to understand the floor, not just the ceiling.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Hard-Won Lesson No Textbook Teaches</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              When your analysis contradicts what a regional MD has been telling the board for 18 months, the politics will get ugly. The Indonesia MD will challenge your churn assumptions. The CSO will question your digital EBITDA estimates. The CTO will argue your 5G capex is understated. None of these are purely analytical challenges — they are territorial. Your protection is not a better model. It is documentation: every assumption named, every data source cited, every sensitivity scenario pre-built and already sitting in the appendix. When someone says "that assumption is wrong," you pull out the sensitivity table and show them what happens to the recommendation if they are right. In most cases, the direction does not change. The people who challenge your assumptions the loudest are usually the people whose budget is at risk. Know who that is before the meeting starts. And build the CFO's trust privately, two weeks before the board meeting — walk in with her already on your side.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Case15;
