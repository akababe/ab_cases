const Case16 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 16</span>
        <h1>The Margin Collapse at NovaCPG</h1>
        <div className="case-meta">
          Industry: FMCG / Consumer Packaged Goods &bull; Level: Advanced / Strategic — Brand Portfolio & Pricing Strategy
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>NovaCPG</strong> is a mid-sized Indonesian consumer packaged goods company with <strong>IDR 18.4 trillion (~$1.2B USD) in annual revenue</strong>, operating across four categories: personal care, home cleaning, packaged food, and infant nutrition. The company holds the #2 or #3 market position in each of its categories, with <strong>distribution across 420,000 retail outlets</strong> spanning modern trade (hypermarkets, minimarkets) and traditional trade (warungs, kiosks) across Java, Sumatra, and Kalimantan.
          </p>
          <p>
            NovaCPG was built over 30 years as a family-owned challenger brand. Four years ago, a <strong>Singapore-based private equity firm</strong> acquired a 60% controlling stake with a mandate to professionalize operations, expand margins, and position the company for either a strategic sale to a global FMCG multinational or an IDX IPO within six years. The PE firm has brought in a professional CEO and CFO, but the founding family retains two board seats and significant operational influence through the Chief Commercial Officer, who is the founder's son.
          </p>
          <p>
            NovaCPG's EBITDA margin has fallen from <strong>19.2% three years ago to 13.8% today</strong> — a 540 basis point erosion that has put the PE firm's exit thesis at serious risk. A margin recovery to 17–18% is needed to justify a strategic sale at the target multiple. At current trajectory, the business is moving in the wrong direction at 180 bps per year.
          </p>
          <div className="highlight-box">
            <strong>What Triggered This Engagement:</strong> The PE firm's investment committee reviewed the Q2 management accounts and found gross margin had declined from 41.3% to 37.1% in 18 months while SG&amp;A had held flat at 23.4% of revenue. The net result: EBITDA margin compressed from 17.9% to 13.8% in six quarters. Simultaneously, the CFO flagged that <em>working capital days had increased from 47 to 68</em> — cash is being absorbed at a rate that will require a bridge facility by Q1 next year if uncorrected. The PE firm retained a consulting team with a clear brief: diagnose the gross margin collapse, identify which parts of the portfolio are causing it, and produce a recovery plan the board can approve within eight weeks.
            <br /><br />
            <strong>Stakeholder Map:</strong>
            <ul>
              <li><strong>PE Firm (60% owner):</strong> Needs margin recovery to IDR 17%+ within 18 months to protect exit optionality. Privately suspects the product portfolio has become too bloated and promotional spend is out of control.</li>
              <li><strong>CEO (PE-appointed):</strong> Has been in role 14 months. Cautious about moving too fast on SKU rationalization — the family shareholders pushed back hard on her first attempt. Needs analytical cover to make the difficult calls.</li>
              <li><strong>CFO:</strong> Laser-focused on cash flow. Working capital deterioration is keeping him up at night. Supportive of the engagement — he wants numbers, not narratives.</li>
              <li><strong>Chief Commercial Officer (founder's son):</strong> Believes margin erosion is a raw material cost story and the solution is supplier renegotiation. Resistant to any analysis that points to promotional inefficiency or SKU proliferation as the cause — both would implicate his commercial strategy.</li>
              <li><strong>Category Managers (4 heads):</strong> Each protecting their own P&amp;L, incentivized on revenue growth, not margin. The incentive structure is misaligned with the margin recovery objective.</li>
            </ul>
          </div>
          <p>
            This is a politically sensitive engagement. The CCO controls the commercial team and has the founder's backing. If the analysis concludes that his strategy caused the margin collapse, the findings must be bulletproof — and the communication strategy must be as carefully designed as the analytics.
          </p>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Business Problem: One Number, Three Causes</h2>
        <div className="content">
          <p>
            A 540 bps gross margin collapse sounds like one problem. It is not. When decomposed properly, NovaCPG's margin erosion has <strong>three structurally distinct drivers</strong> — each with a different owner, a different fix, and a different timeline to impact. Treating them as one problem produces the wrong solution.
          </p>
          <div className="highlight-box">
            <strong>Driver 1 — Raw Material Cost Inflation (Partial — 35% of the Erosion)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Palm oil (key input for personal care and home cleaning), packaging resin, and fragrance compounds have all inflated 18–24% over the past 20 months due to global commodity cycles and IDR depreciation against USD. NovaCPG's procurement team was not hedged. This is real, it is significant, and the CCO is right that it is a factor — but it explains approximately 35% of the gross margin erosion, not all of it. The raw material story is the politically safe explanation. The analysis must quantify exactly how much of the margin decline it accounts for, so the remaining 65% cannot hide behind it.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Driver 2 — SKU Proliferation and Negative Margin Mix Shift (45% of the Erosion)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Over the past three years, NovaCPG's SKU count has grown from 187 to 312 — a 67% increase driven by category managers launching line extensions to hit revenue targets. The problem: the new SKUs are predominantly low-unit-price, small-pack formats aimed at the traditional trade channel, where gross margins run 12–15% versus 28–32% in modern trade. Revenue grew, but the channel and format mix shifted heavily toward lower-margin products. Meanwhile, 40% of the SKU portfolio (approximately 125 SKUs) generates less than 2% of total revenue. These long-tail SKUs carry full overhead allocation and are diluting the portfolio margin without contributing meaningful volume.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Driver 3 — Promotional Spend Inefficiency (20% of the Erosion)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Trade promotion spending has grown from 8.2% of gross revenue to 11.4% — an increase of IDR 580 billion per year. The critical finding: post-promotion sales uplift analysis (where it has been conducted) shows that 60% of promotional events generate less than 0.8× return on promotional investment, meaning the promotion costs more than the margin it generates. The personal care category is the worst offender — 7 of its last 9 major promotions were ROI-negative. The commercial team's defence is that promotions are necessary to defend shelf space. This may be true for some SKUs in some channels — but it has never been rigorously tested.
            </p>
          </div>
          <p>
            <strong>The compounding effect:</strong> Each of these three drivers is damaging in isolation. Together, they compound. A small-pack SKU with a 13% gross margin being sold through a promotion that gives a 20% discount off the retail price generates a <em>negative</em> net margin after trade spend and overhead allocation. NovaCPG has an unknown — but analytically estimable — number of SKUs where this is the current reality. The engagement's job is to find them, quantify them, and build the business case for exiting them.
          </p>
          <p>
            <strong>The working capital connection:</strong> SKU proliferation is also the root cause of the working capital deterioration. 312 SKUs require 67% more raw material variants, more finished goods inventory buffers, and more safety stock than 187 SKUs. The 21-day increase in working capital days is not a finance problem — it is a commercial strategy problem with a balance sheet manifestation.
          </p>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>North Star:</strong> Which combination of SKU rationalization, pricing actions, and promotional reform recovers NovaCPG's gross margin to 40%+ (restoring 290 bps from current 37.1%) within 18 months — and what is the revenue trade-off the board must be willing to accept to achieve it?
          </div>
          <p><strong>Three Key Questions the Board Needs Answered:</strong></p>
          <ol>
            <li>
              <strong>Which SKUs are structurally margin-negative after full cost allocation and trade spend</strong> — and what is the revenue and margin impact of exiting each tier of underperformers?
            </li>
            <li>
              <strong>What is the actual ROI of each promotional mechanic by category and channel</strong> — and which promotions should be restructured, reduced, or eliminated entirely?
            </li>
            <li>
              <strong>What pricing actions are feasible across which SKUs and channels</strong> given competitive dynamics — and what is the elasticity-adjusted net margin impact of each?
            </li>
          </ol>
          <p>
            <strong>What success looks like:</strong> The CEO walks into the board meeting with a prioritized action plan — a tiered list of SKUs to exit, promotions to cut or reform, and price increases to implement — each with a quantified P&amp;L impact, a working capital release estimate, and an implementation timeline. The board approves a recovery roadmap, the CCO is given a commercially credible framing, and the PE firm's exit timeline is preserved.
          </p>
          <p>
            <strong>Analytical approach:</strong> This engagement runs all four analytics modes in sequence. Descriptive analytics establishes the margin waterfall and SKU-level profitability baseline. Diagnostic analytics decomposes the drivers and segments the SKU portfolio by margin contribution and strategic role. Predictive analytics models demand response to pricing and promotional changes. Prescriptive analytics produces the ranked action list with quantified outcomes.
          </p>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Framework Selection & Rationale</h2>
        <div className="content">
          <p>
            A margin recovery engagement in FMCG requires a layered framework approach. The temptation is to reach for a single tool. The reality is that three frameworks in sequence — each answering a different dimension of the problem — produce a recommendation that is both analytically rigorous and commercially actionable.
          </p>
          <div className="highlight-box">
            <strong>Primary: Gross-to-Net Margin Waterfall (Profit Tree / Value Driver Tree)</strong>
            <p style={{ marginTop: '10px', marginBottom: '8px', fontSize: '14px' }}>
              Before selecting strategic frameworks, the team must build a gross-to-net waterfall at the SKU and category level. This means decomposing: Gross Revenue → less Trade Promotions → Net Revenue → less Cost of Goods Sold → Gross Margin → less Allocated Overhead → Contribution Margin. Until every SKU has a contribution margin number, no strategic decision should be made. This is not a framework — it is a prerequisite.
            </p>
            <p style={{ fontSize: '14px' }}>
              <strong>Why this fits:</strong> The CCO and category managers are managing on gross revenue. The CFO is managing on EBITDA. Neither is managing on SKU-level net contribution margin after trade spend. Building this waterfall creates a shared fact base that neutralizes opinion-based disagreements.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Secondary: BCG Growth-Share Matrix — Portfolio Classification</strong>
            <p style={{ marginTop: '10px', marginBottom: '8px', fontSize: '14px' }}>
              Once contribution margins are established, BCG classifies the SKU portfolio into four quadrants using market growth rate (category growth) and relative revenue share (SKU revenue as % of category revenue). This separates the strategic conversation — which SKUs to invest behind, which to harvest, which to exit — from the purely financial one.
            </p>
            <ul style={{ fontSize: '14px' }}>
              <li><strong>Stars:</strong> High-share SKUs in growing categories. These carry the brand. Protect margin here at all costs; do not sacrifice these to fund promotional wars elsewhere.</li>
              <li><strong>Cash Cows:</strong> High-share SKUs in mature categories. These fund everything. Raise prices where elasticity allows. Reduce promotional depth.</li>
              <li><strong>Question Marks:</strong> Low-share SKUs in growing categories. Selective investment where there is a credible path to scale. Otherwise, structured exit.</li>
              <li><strong>Dogs:</strong> Low-share SKUs in slow-growth categories. The first exit candidates. Exit rationale: they consume procurement complexity, inventory, and overhead allocation without contributing meaningful margin.</li>
            </ul>
          </div>
          <div className="highlight-box">
            <strong>Tertiary: Price Elasticity Modeling — Quantify the Revenue Trade-Off</strong>
            <p style={{ marginTop: '10px', fontSize: '14px' }}>
              The board's fear about SKU exits and price increases is always the same: "we will lose revenue." Price elasticity modeling turns that fear into a number. For each category, we estimate the price elasticity of demand — how much volume declines for each 1% price increase — and calculate the net margin impact. In most FMCG categories, a 5–8% price increase on core SKUs is margin-positive even with a 3–5% volume decline, because the margin improvement on retained volume exceeds the margin lost on reduced volume.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Why this fits:</strong> Without elasticity modeling, the CCO can always veto a pricing recommendation by asserting volume risk. With elasticity data — ideally from NovaCPG's own historical price change events — the conversation shifts from "will we lose volume?" to "here is the exact break-even volume decline, and here is the evidence that actual decline will be lower."
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
                <td>Useful for understanding competitive constraints on pricing power, but produces no SKU-level or margin-recovery output. Used to calibrate elasticity assumptions, not as a standalone framework.</td>
              </tr>
              <tr>
                <td><strong>Ansoff Matrix</strong></td>
                <td>Rejected for this phase</td>
                <td>This is a margin recovery engagement, not a growth strategy engagement. Ansoff is the right tool after margin is restored and capital is available for reinvestment.</td>
              </tr>
              <tr>
                <td><strong>Customer Lifetime Value (CLV)</strong></td>
                <td>Deferred</td>
                <td>Relevant for the modern trade channel strategy (which retail accounts to prioritize), but adds complexity without changing the core SKU rationalization conclusion. Flagged for Phase 2.</td>
              </tr>
              <tr>
                <td><strong>McKinsey 7S</strong></td>
                <td>Rejected</td>
                <td>The margin problem is commercial and operational, not organizational. 7S becomes relevant if the root cause analysis surfaces structural issues in how the commercial team is organized and incentivized — possible, but not the starting hypothesis.</td>
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
            This engagement requires data from five distinct layers. The most analytically critical data — SKU-level gross-to-net margin — is almost certainly not available in clean form on Day 1. Building it is the first and most important data task.
          </p>
          <p><strong>SKU-Level Portfolio & Margin Data:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>SKU Count</th>
                <th>Revenue (IDR B)</th>
                <th>Gross Margin %</th>
                <th>Trade Promo % of Gross Rev</th>
                <th>Net Margin % (est.)</th>
                <th>BCG Classification (preliminary)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Personal Care</strong></td>
                <td>98</td>
                <td>6,440</td>
                <td>42.1%</td>
                <td>13.8%</td>
                <td>28.3%</td>
                <td>Mix: Cash Cows + Dogs (line extensions)</td>
              </tr>
              <tr>
                <td><strong>Home Cleaning</strong></td>
                <td>74</td>
                <td>4,232</td>
                <td>38.4%</td>
                <td>10.2%</td>
                <td>28.2%</td>
                <td>Mix: Cash Cows + Question Marks</td>
              </tr>
              <tr>
                <td><strong>Packaged Food</strong></td>
                <td>97</td>
                <td>5,520</td>
                <td>31.2%</td>
                <td>11.6%</td>
                <td>19.6%</td>
                <td>Mix: Stars (noodles) + Dogs (snack extensions)</td>
              </tr>
              <tr>
                <td><strong>Infant Nutrition</strong></td>
                <td>43</td>
                <td>2,208</td>
                <td>44.8%</td>
                <td>7.1%</td>
                <td>37.7%</td>
                <td>Stars — do not touch</td>
              </tr>
              <tr>
                <td><strong>Total / Blended</strong></td>
                <td>312</td>
                <td>18,400</td>
                <td>37.1%</td>
                <td>11.4%</td>
                <td>25.7%</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Promotional ROI Diagnostic Data:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Promo Events (Last 12M)</th>
                <th>Avg Discount Depth</th>
                <th>Avg Volume Uplift</th>
                <th>ROI Positive Events</th>
                <th>ROI Negative Events</th>
                <th>Estimated IDR Loss (Negative Events)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Personal Care</strong></td>
                <td>9</td>
                <td>22%</td>
                <td>+31%</td>
                <td>2 of 9 (22%)</td>
                <td>7 of 9 (78%)</td>
                <td>IDR 184B</td>
              </tr>
              <tr>
                <td><strong>Home Cleaning</strong></td>
                <td>7</td>
                <td>17%</td>
                <td>+28%</td>
                <td>4 of 7 (57%)</td>
                <td>3 of 7 (43%)</td>
                <td>IDR 62B</td>
              </tr>
              <tr>
                <td><strong>Packaged Food</strong></td>
                <td>11</td>
                <td>19%</td>
                <td>+41%</td>
                <td>5 of 11 (45%)</td>
                <td>6 of 11 (55%)</td>
                <td>IDR 97B</td>
              </tr>
              <tr>
                <td><strong>Infant Nutrition</strong></td>
                <td>3</td>
                <td>8%</td>
                <td>+12%</td>
                <td>3 of 3 (100%)</td>
                <td>0 of 3</td>
                <td>IDR 0</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: '15px' }}>
            <strong>Data Gaps & Working Assumptions:</strong> (1) SKU-level cost allocation is currently done at category level — we will need 3 weeks to rebuild it at SKU level with the finance team. (2) Price elasticity is estimated from 6 historical price change events over 3 years — low sample, so elasticity estimates carry ±30% uncertainty and will be presented as ranges. (3) Traditional trade channel sell-through data is 6 weeks lagged and only 65% complete — distributor data is the limiting constraint on channel-level margin analysis.
          </p>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <p>
            This problem is solved in five analytical acts. Each act builds on the previous one — you cannot run the pricing model without knowing which SKUs to keep, and you cannot know which SKUs to keep without the full gross-to-net margin picture. Sequence discipline is non-negotiable.
          </p>
          <ol>
            <li>
              <strong>Act 1 — Build the Gross-to-Net Margin Waterfall at SKU Level</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Before any framework, before any segmentation, the team reconstructs the full P&amp;L for every SKU: Gross Revenue → Trade Promotions → Net Revenue → COGS (direct materials + conversion) → Gross Margin → Allocated Overhead → Contribution Margin. This requires pulling data from at least four systems: the ERP (for COGS), the trade promotion management system (for promo spend by SKU), the distribution management system (for channel revenue splits), and the cost accounting system (for overhead allocation). Expect this to take 10–14 working days. It is unglamorous, contested work — category managers will challenge cost allocations — but without it, every subsequent analysis is built on sand.
              </p>
            </li>
            <li>
              <strong>Act 2 — SKU Segmentation: Classify Every SKU Into a Strategic Role</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Using contribution margins from Act 1 and market share/growth data from external sources, every SKU is classified into one of four roles: <em>Invest</em> (Stars and top Cash Cows — protect and price for value), <em>Maintain</em> (solid Cash Cows — hold position, reduce promotional depth), <em>Harvest</em> (low-margin SKUs with some channel relevance — raise prices, reduce support, let volume decline naturally), or <em>Exit</em> (negative or near-zero contribution margin, minimal strategic role — discontinue on a timeline that manages retail relationship risk). This classification is the heart of the engagement. The hypothesis going in: approximately 80–100 SKUs (25–32% of the portfolio) are candidates for harvest or exit.
              </p>
            </li>
            <li>
              <strong>Act 3 — Promotional ROI Analysis: Separate Efficient from Wasteful Spend</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                For each promotional event in the last 18 months, calculate Return on Promotional Investment (ROPI): [(Incremental Volume × Net Unit Margin) − Promotional Cost] ÷ Promotional Cost. A ROPI above 1.0 means the promotion is self-funding. Below 1.0 means the company is paying to sell its own product at a loss. The analysis then segments promotions by type (multi-buy, price-off, free gift) and channel (hypermarket, minimarket, traditional trade) to identify which mechanics and which channels are systematically ROI-negative. The goal is not to eliminate promotions — it is to eliminate the ROI-negative ones and restructure the ROI-borderline ones.
              </p>
            </li>
            <li>
              <strong>Act 4 — Price Elasticity Modeling: Quantify the Volume Risk of Price Recovery</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                Using historical price change events as the data source, the team estimates price elasticity of demand (PED) for each category and channel: PED = % Change in Volume ÷ % Change in Price. A PED of −0.8 means a 5% price increase results in a 4% volume decline — which in most margin structures is net positive. The model then calculates, for each SKU earmarked for a price increase, the break-even volume decline: the volume loss at which the margin gain from the price increase is exactly offset. SKUs where the break-even volume decline exceeds the historical elasticity estimate are flagged as safe pricing actions.
              </p>
            </li>
            <li>
              <strong>Act 5 — Recovery Scenario Modeling: Build the Roadmap with Quantified Outcomes</strong>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>
                The output of Acts 1–4 feeds a scenario model with three levers: (A) SKU exits and harvest actions, (B) promotional spend reform, (C) price increases on selected SKUs. Each lever is modeled in isolation first, then in combination. For each scenario, the model outputs: gross margin impact (bps), revenue impact (IDR billion), working capital release (from reduced SKU count), and net EBITDA impact. Three scenarios are presented — conservative (minimal exits, modest promo reform), base case (75 SKU exits, full promo reform, selective pricing), and aggressive (100+ SKU exits, deep promo cuts, broad pricing) — to give the board a range and a clear tradeoff surface.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Calculations & Financial Modeling</h2>
        <div className="content">

          <p><strong>Calculation 1 — Gross Margin Waterfall: Decomposing the 540 bps Erosion</strong></p>
          <div className="calculation">
{`Gross Margin 3 Years Ago:              41.3%   (IDR 18.4T × 41.3% = IDR 7,599B)
Gross Margin Today:                    37.1%   (IDR 18.4T × 37.1% = IDR 6,826B)
Total Erosion:                          4.2pp   (IDR 773B in absolute margin lost)

Decomposition of the 420 bps gross margin erosion:

  Driver 1 — Raw Material Cost Inflation:
    Palm oil price increase (20M kg consumed):  +18% × IDR 14,000/kg = +IDR 50.4B
    Packaging resin increase (8,200 MT):        +22% × IDR 28,000/kg = +IDR 50.5B
    Fragrance compounds (1,400 MT):             +24% × IDR 120,000/kg = +IDR 40.3B
    IDR/USD depreciation impact on imports:                             +IDR 80.0B
    ────────────────────────────────────────────────────────────
    Total raw material inflation impact:                                IDR 221.2B
    As % of gross revenue:                      221.2 ÷ 18,400 =        1.2pp of margin
    Share of total erosion:                     221.2 ÷ 773 =            28.6%

  Driver 2 — Mix Shift to Low-Margin SKUs & Channels:
    Revenue mix shift: traditional trade share up from 34% to 47%
      Modern trade gross margin:    31.2pp higher than traditional trade on avg
      Revenue shifted:              IDR 2,394B (13pp × IDR 18,400B)
      Margin impact of mix shift:   IDR 2,394B × (31.2% − 15.3%) =   IDR 380.6B
    New SKU launches (125 new SKUs, avg 13.8% GM vs 41.3% portfolio avg):
      Revenue from new SKUs:        IDR 1,840B (10% of total)
      Margin dilution:              IDR 1,840B × (41.3% − 13.8%) =   IDR 506.0B
      (offset by existing SKU revenue base — net dilution impact):    IDR 156.0B
    ────────────────────────────────────────────────────────────
    Total mix shift impact:                                           IDR 536.6B
    As % of gross revenue:                      536.6 ÷ 18,400 =        2.9pp of margin
    Share of total erosion:                     536.6 ÷ 773 =            69.4%

  Reconciliation:
    Driver 1 (raw material):     IDR 221.2B    1.2pp    28.6%
    Driver 2 (mix shift):        IDR 536.6B    2.9pp    69.4%  ← Dominant driver
    Rounding / other:            IDR  15.2B    0.1pp     2.0%
    ────────────────────────────────────────────────────────────
    Total gross margin erosion:  IDR 773.0B    4.2pp   100.0%

  ⟹ The CCO's raw material narrative explains 28.6% of the erosion.
     The other 69.4% — which is the mix shift from SKU proliferation and
     channel drift — is the story the analytics team must tell clearly,
     carefully, and with airtight data.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 2 — SKU Contribution Margin Analysis: Finding the Exit Candidates</strong></p>
          <div className="calculation">
{`Methodology: Contribution Margin = Net Revenue − Direct COGS − Allocated Overhead − Trade Promotion Cost

SKU Portfolio Segmentation by Contribution Margin Band:

  Band A — CM > 25%:   "Invest / Protect"
    SKU count:         87  (27.9% of portfolio)
    Revenue:           IDR 11,040B  (60.0% of total revenue)
    Contribution:      IDR 3,698B   (82.1% of total contribution)
    Action:            Price for value; reduce promotional depth

  Band B — CM 10–25%:  "Maintain / Harvest"
    SKU count:         100  (32.1% of portfolio)
    Revenue:           IDR 5,520B   (30.0% of total revenue)
    Contribution:      IDR 798B     (17.7% of total contribution)
    Action:            Selective pricing; restructure promotions; manage for cash

  Band C — CM 0–10%:   "Harvest aggressively"
    SKU count:         68  (21.8% of portfolio)
    Revenue:           IDR 1,288B   (7.0% of total revenue)
    Contribution:      IDR 46B      (1.0% of total contribution)
    Action:            Raise prices immediately; exit within 12 months if CM stays below 10%

  Band D — CM < 0%:    "Exit immediately"
    SKU count:         57  (18.3% of portfolio)
    Revenue:           IDR 552B     (3.0% of total revenue)
    Contribution:      −IDR 134B    (−3.0% — actively destroying value)
    Action:            Structured exit within 6 months; manage retail relationship impact

  Summary:
    Bands C + D combined:  125 SKUs (40.1% of portfolio)
    Revenue from Bands C+D: IDR 1,840B (10.0% of total revenue)
    Margin destroyed by C+D: −IDR 88B net (Band C contribution minus Band D losses)

  ⟹ Exiting Bands C and D entirely loses IDR 1,840B in revenue (10%)
     but recovers IDR 134B in active margin destruction (Band D)
     plus frees IDR 88B in allocated overhead currently serving these SKUs.
     Net gross margin impact of full exit: +IDR 222B = +1.2pp on gross margin.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 3 — Promotional ROI: Quantifying the Wasteful Spend</strong></p>
          <div className="calculation">
{`ROPI Formula: [(Incremental Units × Net Unit Margin) − Promo Cost] ÷ Promo Cost

Personal Care — Largest Promotional Offender:

  Example Event: Shampoo 200ml "Buy 2 Get 1 Free" — Indomaret, Q1
    Regular unit price:         IDR 22,000
    Net unit margin at regular: IDR 22,000 × 42% = IDR 9,240
    Promotion mechanic:         Buy 2, get 1 free = effective 33% discount
    Net price per paid unit:    IDR 22,000 × (2/3) = IDR 14,667 (implicit)
    Net unit margin at promo:   IDR 14,667 × 42% − promo cost share = IDR 5,820
    Volume uplift (scanner data): +34% vs. 4-week pre-promo baseline
    Baseline units (4-week):    48,000 units
    Incremental units:          48,000 × 34% = 16,320 units
    Trade promotion direct cost (display fee + vol rebate): IDR 180M

  ROPI = [(16,320 units × IDR 5,820) − IDR 180,000,000] ÷ IDR 180,000,000
       = [IDR 94,982,400 − IDR 180,000,000] ÷ IDR 180,000,000
       = −IDR 85,017,600 ÷ IDR 180,000,000
       = −0.47  ← ROPI negative: every IDR 1 of promo spend loses IDR 0.47

  This pattern replicated across 7 of 9 personal care promo events.

Total Estimated Loss from ROI-Negative Promotions (All Categories):
  Personal Care (7 events):    IDR 184B
  Home Cleaning (3 events):    IDR  62B
  Packaged Food (6 events):    IDR  97B
  Infant Nutrition:            IDR   0B
  ────────────────────────────────────
  Total promotional waste:     IDR 343B  per year
  As % of gross revenue:       343 ÷ 18,400 = 1.86pp

  ⟹ If 75% of ROI-negative promotions are restructured (conservative):
     Recoverable margin:   IDR 343B × 75% = IDR 257B = 1.4pp gross margin`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 4 — Price Elasticity: Testing the Revenue Risk of a Price Increase</strong></p>
          <div className="calculation">
{`Price Elasticity of Demand (PED) by Category (estimated from 6 historical events):

  Personal Care:     PED = −0.72  (inelastic — loyalty-driven category)
  Home Cleaning:     PED = −0.91  (near unit-elastic)
  Packaged Food:     PED = −1.14  (elastic — price-competitive commodity staples)
  Infant Nutrition:  PED = −0.38  (highly inelastic — safety/quality driven)

Break-Even Volume Decline for a 6% Price Increase:
  If we raise price by 6%: margin gain per unit = 6% × current price
  Break-even: volume decline where margin gain = margin lost on lower volume

  Personal Care (42% gross margin, 6% price increase):
    Price increase per unit:    IDR 22,000 × 6% = IDR 1,320
    Margin on unit at new price: (22,000 + 1,320) × 42% = IDR 9,794
    Current margin per unit:    IDR 22,000 × 42% = IDR 9,240
    Break-even volume decline = 1 − (9,240 ÷ 9,794) = 5.7%
    PED-predicted volume decline: 6% price × 0.72 elasticity = 4.3% decline
    4.3% < 5.7% break-even → price increase is NET POSITIVE ✓

  Packaged Food (31% gross margin, 6% price increase):
    Break-even volume decline = [6% × 31%] ÷ [31% + (6% × (1 − 31%))] = 5.5%
    PED-predicted volume decline: 6% × 1.14 = 6.8% decline
    6.8% > 5.5% break-even → price increase would be NET NEGATIVE ✗
    Maximum safe price increase in Packaged Food (non-noodle SKUs): 3.2%

  Pricing Action Summary:
    Category            Safe Increase  Revenue Δ (IDR B)  Margin Recovery (pp)
    Personal Care            6%            −IDR 276B          +0.84pp
    Home Cleaning            4%            −IDR 169B          +0.51pp
    Packaged Food            3%            −IDR 166B          +0.21pp
    Infant Nutrition         8%            +IDR  88B          +0.72pp  ← inelastic
    ─────────────────────────────────────────────────────────────────────────
    Net pricing impact:                    −IDR 523B          +2.28pp gross margin`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 5 — Recovery Scenario: Combining All Three Levers</strong></p>
          <div className="calculation">
{`Base Case Recovery Scenario (recommended):

  Lever A — SKU Rationalization (75 exit, 50 harvest):
    Revenue reduction:       −IDR 1,104B (6.0% of revenue)
    Gross margin recovery:   +0.84pp
    Working capital release: IDR 380B (from lower inventory and complexity)

  Lever B — Promotional Reform (restructure 75% of ROI-negative events):
    Revenue reduction:       −IDR 82B (volume loss from fewer promotions)
    Gross margin recovery:   +1.40pp
    Trade promo spend saved: IDR 257B

  Lever C — Selective Price Increases (as per elasticity model above):
    Revenue reduction:       −IDR 523B (volume loss offset by price)
    Gross margin recovery:   +2.28pp

  Combined Base Case Impact:
    Total Revenue:   IDR 18,400B − 1,104B − 82B − 523B = IDR 16,691B (−9.3%)
    Gross Margin %:  37.1% + 0.84 + 1.40 + 2.28 = 41.62%
    Gross Margin IDR: IDR 16,691B × 41.62% = IDR 6,946B
    vs. Current:      IDR 18,400B × 37.1% = IDR 6,826B
    Absolute margin gain:                    IDR +120B  (+1.8%)

  EBITDA Impact:
    Gross margin recovery:    +IDR 120B
    SG&A savings (complexity reduction from SKU exits): +IDR 92B
    Net EBITDA improvement:   +IDR 212B
    Current EBITDA (13.8%):   IDR 2,539B
    New EBITDA (est.):        IDR 2,751B
    New EBITDA margin:        2,751 ÷ 16,691 = 16.5%
    ⟹ Recovers from 13.8% to 16.5% — within range of 17% target with execution upside

  Scenario Comparison:
    Scenario         Revenue Δ   Gross Margin  EBITDA Margin  WC Release
    Conservative     −4.1%        39.5%          15.1%         IDR 160B
    Base Case        −9.3%        41.6%          16.5%         IDR 380B  ← Recommended
    Aggressive      −14.8%        43.1%          17.8%         IDR 620B

  ⟹ Base Case reaches 16.5% EBITDA margin — within striking distance of the 17%+
     target. Aggressive scenario reaches 17.8% but carries higher execution risk
     (larger SKU exits risk retailer retaliation). Base case is the credible path.`}
          </div>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Findings & Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Finding 1 — The Margin Problem Is 69% Mix, Not 29% Raw Materials (Decisive)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The decomposition is unambiguous: raw material inflation explains 28.6% of the gross margin erosion. The remaining 69.4% is driven by mix shift — specifically, the channel drift toward traditional trade (where margins run 16pp lower) and the SKU proliferation toward small-pack, low-price formats. This finding directly contradicts the CCO's framing. The data must be presented at the waterfall level, with every line traceable to a data source, before this finding is tabled. The CCO will challenge it. The answer to every challenge is the waterfall, not the conclusion.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 2 — 18.3% of SKUs Are Actively Destroying IDR 134B in Margin Per Year</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              57 SKUs in Band D carry negative contribution margins — they cost more to produce, distribute, and promote than they generate in net revenue. These SKUs collectively generate IDR 552B in gross revenue (3% of total) while destroying IDR 134B in contribution margin. They persist because category managers hit revenue targets, and nobody is measured on SKU-level contribution margin. This is a management information problem as much as a commercial strategy problem — the solution requires both exiting the SKUs and changing what the category managers are measured on.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 3 — Personal Care Promotions Are 78% ROI-Negative (Counterintuitive)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The personal care category — NovaCPG's highest-margin category at 42.1% gross margin — is also the category where promotions are most systematically destroying value. 7 of 9 major promotions in the last 12 months generated negative ROPI, collectively losing IDR 184B. This is counterintuitive because personal care is the category the commercial team is most proud of, and the one where promotional activity is considered most strategic. The ROPI analysis suggests the opposite: personal care is where a shift from "promotional volume" to "premium pricing with reduced promo depth" would generate the most margin recovery.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 4 — Infant Nutrition Is the Margin Engine That Should Not Be Touched</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Infant nutrition is 12% of revenue and 44.8% gross margin — the only category where promotions are consistently ROI-positive and where price elasticity is highly inelastic (PED −0.38). This category is where NovaCPG has genuine brand authority and consumer trust. The recommendation is counter-intuitive from a portfolio perspective: do not rationalize this category, do not reduce prices to drive penetration, and do not use it to fund promotional wars elsewhere. Raise prices 8% and let the margin accrue. This category is the financial foundation of the recovery.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 5 — SKU Exits Will Release IDR 380B in Working Capital (Underappreciated)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The CFO's working capital problem is a symptom of SKU proliferation. 312 SKUs require raw material buffers, work-in-progress inventory, and finished goods safety stock for 312 distinct SKUs. Modeling the inventory reduction from a 75-SKU exit across the supply chain — using NovaCPG's own inventory turn data by SKU — produces an estimated IDR 380B of working capital release over 12 months. This solves the bridge facility problem without a financing event, and it is an argument for SKU rationalization that the CFO will champion without needing to be convinced.
            </p>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Recovery Lever</th>
                <th>Gross Margin Recovery</th>
                <th>Revenue Impact</th>
                <th>WC Release</th>
                <th>Verdict</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SKU exit — Band D (57 SKUs)</td>
                <td>+0.73pp</td>
                <td>−IDR 552B (−3.0%)</td>
                <td>IDR 220B</td>
                <td>Pursue immediately — no strategic loss</td>
              </tr>
              <tr>
                <td>SKU harvest — Band C (68 SKUs, price up 8–15%)</td>
                <td>+0.11pp</td>
                <td>−IDR 552B (−3.0%)</td>
                <td>IDR 160B</td>
                <td>Pursue — over 9 months</td>
              </tr>
              <tr>
                <td>Promotional reform — restructure 75% of ROI-negative events</td>
                <td>+1.40pp</td>
                <td>−IDR 82B (−0.4%)</td>
                <td>—</td>
                <td>Pursue — highest ROI lever</td>
              </tr>
              <tr>
                <td>Price increases — Band A/B, elasticity-justified</td>
                <td>+2.28pp</td>
                <td>−IDR 523B (−2.8%)</td>
                <td>—</td>
                <td>Pursue — net positive after elasticity</td>
              </tr>
              <tr>
                <td>Raw material hedging (forward contracts)</td>
                <td>+0.60pp (est.)</td>
                <td>—</td>
                <td>—</td>
                <td>Pursue in parallel — CFO-led workstream</td>
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
            <strong>1A. Halt All New SKU Launches Pending Contribution Margin Gate</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Implement an immediate freeze on new SKU launches. No new SKU enters commercialization without a signed-off contribution margin projection showing CM above 20% within 12 months of launch.
              <br /><strong>Why:</strong> The current pipeline contains 18 planned SKU launches, 11 of which are small-pack traditional trade formats. Based on category margin benchmarks, at least 7 of these would land in Band C or D upon launch. Stopping them costs nothing and prevents the portfolio from getting worse while the recovery plan is implemented.
              <br /><strong>Owner:</strong> CEO + Category Management Heads
              <br /><strong>Expected impact:</strong> Prevents an estimated IDR 45–70B of future margin erosion from the pipeline.
            </p>
          </div>
          <div className="highlight-box">
            <strong>1B. Suspend the 12 Confirmed ROI-Negative Promotions in Q3 Pipeline</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Pull or restructure 12 already-planned promotional events in Q3 where the ROPI model — using confirmed retailer terms and historical uplift data — projects negative returns.
              <br /><strong>Why:</strong> These events are already contracted with retailers but the promotional mechanics can be modified. Changing from "Buy 2 Get 1 Free" (33% effective discount) to "IDR 3,000 off second unit" (13.6% effective discount) typically preserves 60–70% of the volume uplift at 40% of the promotional cost.
              <br /><strong>Owner:</strong> CCO + Trade Marketing team
              <br /><strong>Expected impact:</strong> IDR 68B in Q3 margin protection.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>Tier 2 — Medium-Term Initiatives (1–6 Months)</h3>
          <div className="highlight-box">
            <strong>2A. Exit 57 Band D SKUs on a Structured Retailer-Safe Timeline</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Discontinue all 57 Band D SKUs over a 6-month exit program. Sequence exits by channel sensitivity: modern trade exits require 90-day notice to maintain relationships; traditional trade exits can be executed in 30–45 days via distributor instruction.
              <br /><strong>Why:</strong> These SKUs collectively destroy IDR 134B per year and hold IDR 220B of working capital. Exiting them is the single highest-return action in the recovery plan. The revenue loss (IDR 552B, 3% of total) is real but is fully offset by margin and cash improvement.
              <br /><strong>Owner:</strong> Category Managers (with CCO sign-off) + Supply Chain
              <br /><strong>Risk:</strong> 3 of the 57 SKUs are listed as minimum range requirements by Alfamart and Indomaret. Legal and commercial teams to review contract obligations before exit.
            </p>
          </div>
          <div className="highlight-box">
            <strong>2B. Implement Tiered Price Increases Across Band A and Select Band B SKUs</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Execute price increases of 6–8% on Personal Care and Infant Nutrition (inelastic categories); 3–4% on Home Cleaning; defer packaged food (elastic, competitive sensitivity).
              <br /><strong>Why:</strong> Elasticity modeling shows these increases are net-margin-positive even under bear-case volume decline assumptions. Infant Nutrition in particular can absorb 8% with less than 3% volume decline — a straightforward margin enhancement with no competitive risk.
              <br /><strong>Owner:</strong> CCO + Revenue Management
              <br /><strong>Expected impact:</strong> +2.28pp gross margin recovery, net of volume impact.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>Tier 3 — Strategic Moves (6+ Months)</h3>
          <div className="highlight-box">
            <strong>3A. Redesign Commercial Incentives: Revenue + Margin, Not Revenue Alone</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Restructure all four Category Manager KPIs from revenue-only to a balanced scorecard: 40% Net Revenue growth, 40% Category Contribution Margin %, 20% Promotional ROI target.
              <br /><strong>Why:</strong> The SKU proliferation and promotional waste are rational responses to a measurement system that rewards revenue growth with no margin accountability. Until the incentive system changes, the recovery will revert. This is the structural fix without which everything else is temporary.
              <br /><strong>Expected impact:</strong> Sustained margin improvement; prevents recurrence of Band D SKU accumulation.
            </p>
          </div>
          <div className="highlight-box">
            <strong>3B. Implement Forward Contract Hedging for Palm Oil and Packaging Resin</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Hedge 60% of palm oil and resin requirements 6 months forward on a rolling basis. Commission a treasury policy update to make this standard practice.
              <br /><strong>Why:</strong> Raw material inflation was not the dominant driver of margin erosion — but it is a real and recurring risk. Hedging does not recover past losses but prevents a future commodity spike from undoing the recovery. Estimated margin stabilization value: 0.4–0.6pp per year in a volatile commodity environment.
              <br /><strong>Owner:</strong> CFO + Procurement
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 10 ── */}
      <section>
        <h2>10. Business Decision-Making: What Will Actually Happen</h2>
        <div className="content">
          <p>
            The analytics are only half the job. The other half is navigating the organizational dynamics that will determine whether these recommendations are implemented at full strength, partially implemented, or quietly shelved after the board presentation.
          </p>
          <div className="highlight-box">
            <strong>What Will Be Approved — and What Will Face Resistance</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>The SKU launch freeze will be approved immediately.</strong> It costs nothing, requires no organizational disruption, and the CEO has wanted to do it for months. The analytical backing gives her the cover she needs.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>The Band D SKU exits will be contested by the CCO.</strong> He will argue that traditional trade distributors require a "full portfolio" and that exits will trigger retaliation. The counter is specific: pull the three genuinely range-locked SKUs from the exit list, show him the 54 remaining exits have no contractual obstacle, and offer to pilot 10 exits in one region before full rollout. Give him the pilot. It works, and the data from the pilot becomes the argument for the rest.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>The price increases will be the most contentious recommendation.</strong> The commercial team's instinct is that any price increase in a competitive market is suicidal. The elasticity data is the answer — but it must be presented as ranges and scenarios, not point estimates. "We recommend a 6% price increase in personal care" will be rejected. "Our elasticity modeling shows a 5–7% price increase generates positive net margin at any volume decline below 5.7%, and our historical data shows actual declines have averaged 4.1% across comparable events" will get a hearing.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>The incentive redesign is the recommendation most likely to be watered down.</strong> It requires the CEO to override the CCO's compensation structure. The PE firm needs to drive this from the board level — it cannot be a CEO-to-CCO conversation, because that conversation will not go well. Frame it as "aligning commercial incentives with the PE investment thesis" and put it on the board agenda, not the management agenda. The CCO cannot veto a board-level incentive decision.
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
                  <td>Gross Margin %</td>
                  <td>≥ 40.5% by Month 12</td>
                  <td>&lt; 38.5% at Month 6 = escalation to board</td>
                </tr>
                <tr>
                  <td>Active SKU Count</td>
                  <td>≤ 240 by Month 9</td>
                  <td>&gt; 270 at Month 9 = exit program off track</td>
                </tr>
                <tr>
                  <td>Promotional Spend as % of Gross Revenue</td>
                  <td>≤ 8.5% by Month 12</td>
                  <td>&gt; 10.5% at Month 6 = reform not being implemented</td>
                </tr>
                <tr>
                  <td>Working Capital Days</td>
                  <td>≤ 52 days by Month 12</td>
                  <td>&gt; 62 days at Month 6 = SKU exits are lagging</td>
                </tr>
                <tr>
                  <td>EBITDA Margin</td>
                  <td>≥ 16.0% by Month 12</td>
                  <td>&lt; 14.5% at Month 6 = recovery plan needs replan</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>If the board approves only one action:</strong> Restructure the ROI-negative promotions. It requires no capital, no SKU exits, no pricing changes — only a change in how trade marketing is planned and executed. It recovers 1.4pp of gross margin, costs IDR 82B in volume (0.4% of revenue), and saves IDR 257B in promotional spend that is currently generating negative returns. It is the highest-return, lowest-resistance action in the portfolio. Do it first. Use the results to build the political capital for everything else.
          </p>
        </div>
      </section>

      {/* ── SECTION 11 ── */}
      <section>
        <h2>11. Senior Practitioner's War Room Notes</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>The Pattern Across a Dozen FMCG Margin Engagements</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Every FMCG company that grows through geographic or category expansion eventually faces the same version of this problem. The commercial engine adds SKUs to hit revenue targets. Distribution expands into lower-margin channels to hit volume targets. Trade promotion spend escalates to defend shelf space. Each decision makes sense locally and in isolation. Together, they hollow out the margin from the inside over 3–5 years. By the time the P&amp;L shows the damage, the organizational habits that caused it are deeply embedded. The fix is almost always the same: get SKU-level contribution margin visible to everyone, change what the commercial team is measured on, and cut the promotional spend that is ROI-negative before you touch anything structural. The companies that recover fastest are the ones that make the contribution margin waterfall the standard management report — not a consulting deliverable, but the document that opens every commercial review meeting.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Most Common Mistake in This Type of Engagement</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Starting the analysis at the category level and never going to SKU level. Category-level data always looks manageable. "Personal care is at 42% gross margin" sounds fine until you disaggregate it and discover that 22 SKUs within personal care are below 15% gross margin and 8 are negative. The category average conceals the problem. Gross margin analysis that does not go to SKU level is category analysis, not portfolio analysis. In FMCG margin recovery engagements, the answer is always in the long tail of the portfolio. Go there first.
            </p>
          </div>
          <div className="highlight-box">
            <strong>What Junior Analysts Always Miss in This Scenario</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The working capital dimension. Junior analysts build the gross margin waterfall, identify the SKU exits, model the promotional reform, and present a 2.5pp margin recovery. They miss that the same SKU rationalization also releases IDR 380B of working capital — which solves the CFO's bridge facility problem, which removes the most urgent organizational anxiety, which makes the CFO the most enthusiastic champion of the recommendation. Never present SKU rationalization as only a margin story. It is a margin story and a cash story and a complexity story. Three independent arguments are harder to dismiss than one.
            </p>
          </div>
          <div className="highlight-box">
            <strong>What a Great Analyst Does Differently Here</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              They pre-brief the CCO privately before the board presentation — not to soften the findings, but to give him the opportunity to understand them without performing defensiveness in front of the board. The finding that his commercial strategy caused 69% of the margin erosion is devastating if he learns it from a slide. It is manageable if he learns it in a 90-minute working session where he has the chance to challenge every assumption, understand the methodology, and — ideally — begin to internalize it as a shared diagnosis rather than an attack. The goal of that session is not to convince him. It is to ensure that by the time the board meeting happens, he is not in a position where his only options are capitulation or public opposition. Give him a third option: framing the recovery as his plan, built on the analytics. Most executives take it.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Hard-Won Lesson No Textbook Teaches</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              In family-influenced businesses, the analytics are necessary but never sufficient. The PE firm hired the consulting team. The CEO is PE-appointed. But the CCO is the founder's son. In a room where the analytical recommendation conflicts with what the CCO has built over three years, the best-modeled analysis in the world can lose to family loyalty and institutional inertia. The protection is not a better model. It is a communication sequence: CFO first (he wants numbers; give them to him cleanly and early), CEO second (give her the analytical cover she needs to make the difficult calls), CCO third (private session before the board, framed as "here is what the data shows — help me understand if I'm missing anything"), and board last (by which point the CEO and CFO are already aligned and the CCO has had the chance to adjust his position privately). When you walk into a board meeting where three of the five key stakeholders are already aligned with the data, the fourth one rarely wins the argument alone.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Case16;
