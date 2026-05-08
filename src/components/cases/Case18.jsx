const Case18 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 20</span>
        <h1>The Last Decade of Coal</h1>
        <div className="case-meta">
          Industry: Energy &amp; Resources &bull; Level: Advanced / Strategic — Board-Level Stranded Asset Management &amp; Energy Transition Capital Allocation
        </div>
      </header>

      {/* ── CONTEXT ── */}
      <section>
        <h2>The Company and the Moment</h2>
        <div className="content">
          <p>
            <strong>Meridian Energy Group</strong> is an Australian integrated energy company headquartered in Brisbane, with <strong>AUD 9.4 billion in annual revenue</strong> and operations spanning coal-fired power generation, gas peaking plants, a nascent renewables portfolio, and a retail electricity business serving 1.1 million residential and commercial customers across Queensland, New South Wales, and Victoria. The company is listed on the ASX with a market capitalisation of AUD 6.2 billion — down 34% from its five-year peak as investors have begun repricing fossil fuel exposure across the sector.
          </p>
          <p>
            Meridian was built on coal. Its three coal-fired plants — <strong>Callide C</strong> (900 MW, Queensland), <strong>Liddell South</strong> (700 MW, NSW), and <strong>Darling Downs</strong> (500 MW, Queensland) — have historically provided 78% of its generation capacity and underwritten the margin of its retail business through vertical integration. Two of the three plants were commissioned in the early 1990s and are approaching the end of their engineering design lives. The third, Darling Downs, is newer but sits in a region where thermal coal supply is tightening as mines reduce output ahead of anticipated demand decline.
          </p>
          <p>
            The macro environment has shifted under Meridian faster than its board anticipated. Australia's National Electricity Market has seen wholesale electricity prices collapse in daylight hours as rooftop solar penetration has exceeded 35% in Queensland and NSW — destroying the economics of baseload coal during the hours it was previously most valuable. At the same time, the federal government's updated Safeguard Mechanism now imposes a carbon cost on Meridian's coal fleet that was not modelled in any prior capital plan. The combination of lower daytime wholesale prices and rising carbon cost has compressed the EBITDA margin on Meridian's generation division from <strong>38% to 21% in three years</strong>.
          </p>
          <div className="highlight-box">
            <strong>The Board Crisis That Triggered This Engagement</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              At the most recent AGM, three of Meridian's top five institutional shareholders — together holding 28% of the register — submitted a joint resolution demanding the company publish a <em>credible energy transition plan with quantified asset retirement timelines and capital reallocation commitments</em> by the next AGM. The resolution failed (62% voted against) but the margin was closer than the board expected, and two proxy advisors have signalled they will recommend support next year if the company cannot demonstrate analytical rigour behind its transition strategy. Simultaneously, Meridian's BBB+ credit rating is under review by S&amp;P, citing "material transition risk and uncertain asset life assumptions" in the generation portfolio. A downgrade to BBB would increase the company's cost of capital by an estimated 80–110 basis points and trigger covenant reviews on AUD 2.1 billion of project finance debt attached to the coal assets.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The CEO has retained a consulting team with a mandate that is deliberately broad: <em>tell us what our coal assets are actually worth under realistic transition scenarios, determine the optimal retirement sequence and timeline, and produce a capital reallocation plan that is both financially defensible and credible to institutional investors who have seen too many "transition strategies" that defer all the hard decisions to years 8 through 15.</em>
            </p>
          </div>
          <p>
            This is one of the most analytically and politically complex engagements in the energy sector. The consulting team must produce numbers that are honest about asset impairment — which will be painful for the board to receive — while simultaneously constructing a forward investment case that makes Meridian an attractive equity story rather than a managed-decline vehicle. Getting either side wrong destroys the other.
          </p>
        </div>
      </section>

      {/* ── STAKEHOLDERS ── */}
      <section>
        <h2>Who Is in the Room and What They Need</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>CEO — Roberta Haines:</strong> A 14-year Meridian veteran who rose through the retail business. She understands the retail margin dynamics better than anyone on the ExCo but is less comfortable in the generation asset economics conversation. She has been carefully signalling to institutional investors that change is coming without committing to specifics that might alarm the workforce or the Queensland government. She needs the consulting team to give her a position she can defend simultaneously to four different audiences: investors demanding faster transition, unions protecting generation jobs, state governments concerned about energy security, and a board that still has two directors who came up through the coal industry. That is not a communications challenge — it is an analytical one. If the numbers are right, the communication follows.
          </div>
          <div className="highlight-box">
            <strong>CFO — Marcus Teoh:</strong> Ex-Macquarie infrastructure banking. Fluent in DCF, project finance, and structured transactions. He arrived at Meridian 20 months ago precisely because the board knew this reckoning was coming and wanted someone who could manage a complex asset disposal and reinvestment program. He is the consulting team's primary counterpart and will stress-test every number in the model. He is not emotionally attached to the coal assets — he sees them as a balance sheet problem that needs to be resolved before the cost of capital deterioration makes every other strategic option more expensive.
          </div>
          <div className="highlight-box">
            <strong>Chief Generation Officer — Wayne Perkins:</strong> Built his career operating the coal fleet. 31 years at Meridian. Not ideologically opposed to transition — he is practically opposed to timelines he considers unrealistic. He will argue that the coal plants can run longer than the model assumes and that early retirement destroys value that could fund the transition. He is partially right. His instinct to extend asset life is financially rational in the short term and strategically dangerous in the medium term. The analysis must give him a specific number — the NPV crossover point at which further extension becomes value-destructive — rather than a general argument about energy transition.
          </div>
          <div className="highlight-box">
            <strong>Chief Strategy &amp; Sustainability Officer — Priya Nair:</strong> Hired 8 months ago from the Clean Energy Finance Corporation. She has a mandate to build Meridian's renewables portfolio but is currently operating with a capital budget of AUD 280M — less than half what she believes is needed to build a credible transition position. She has prepared a AUD 820M renewables investment proposal that has not yet been approved because the CFO wants to see the coal asset disposition plan first. The two workstreams are locked in a circular dependency: Priya cannot get capital until the coal decision is made; the board will not make the coal decision without the renewables business case. The consulting team must break this deadlock analytically.
          </div>
          <div className="highlight-box">
            <strong>Queensland &amp; NSW State Government Liaisons:</strong> Not in the room but present in every conversation. Both state governments have energy security obligations that make them sensitive to abrupt coal plant closures. Queensland in particular has signalled it would consider regulatory intervention if Meridian announced closure of Callide C or Darling Downs without adequate notice and transition support for affected communities. This is not a legal constraint — but it is a practical one that affects retirement timing and shapes what "credible" looks like to each audience.
          </div>
        </div>
      </section>

      {/* ── PROBLEM DEFINITION ── */}
      <section>
        <h2>The Real Problem: Three Questions Disguised as One</h2>
        <div className="content">
          <p>
            The board brief — "tell us what the coal assets are worth and when to exit them" — sounds like one problem. It is three problems that require different analytical approaches and produce answers that must be integrated rather than sequenced.
          </p>
          <div className="highlight-box">
            <strong>Problem 1 — Asset Valuation Under Transition Scenarios</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              What is each coal asset worth today under realistic NEM price scenarios, carbon cost trajectories, and operating life assumptions — and how does that value change under bear, base, and bull transition cases? This is a DCF problem with scenario analysis. The output is not a single number but a value range for each asset that makes explicit what assumptions drive the spread. The board has been operating with asset values that appear on the balance sheet at historical cost less depreciation. Those numbers bear no relationship to economic value in a transitioning electricity market. The gap between book value and economic value is the hidden impairment that S&amp;P is pricing into its credit review.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Problem 2 — Optimal Retirement Sequence and Timing</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Given the asset valuations, what is the optimal order and timing for retiring the three coal plants — and what are the financial, regulatory, and energy security constraints that bound the decision? This is not a purely financial optimisation. A plant that is value-negative today may still need to operate for 3 years because it provides frequency response services the NEM cannot replace without new infrastructure. The retirement sequencing must incorporate financial value, operational necessity, regulatory constraint, and community obligation simultaneously. Getting the sequence wrong by even 18 months can cost hundreds of millions in stranded investment or regulatory penalty.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Problem 3 — Capital Reallocation: What Meridian Builds Next</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              What should Meridian do with the capital freed from coal asset retirement and the operational cash flow generated in the remaining years of coal operation — and does Meridian have the capability to deploy that capital into renewables competitively, or should it use capital to return value to shareholders and partner with specialist developers rather than build in-house? This is the question the board most wants to avoid discussing because it forces a conversation about whether Meridian is a transition company or a managed-decline vehicle. The consulting team must force that conversation with data, not opinion.
            </p>
          </div>
          <p>
            <strong>The integrated problem statement:</strong> <em>What is the value-maximising retirement sequence for Meridian's coal fleet under realistic transition scenarios — and what is the minimum viable renewables investment that transforms the freed capital into a credible growth platform rather than a return-of-capital story?</em>
          </p>
        </div>
      </section>

      {/* ── FRAMEWORKS ── */}
      <section>
        <h2>Analytical Frameworks: What Gets Used and Why</h2>
        <div className="content">

          <h3 style={{ fontSize: '17px', marginTop: '16px', marginBottom: '10px' }}>Framework 1 — Scenario-Based DCF: Valuing Assets That Markets Are Already Abandoning</h3>
          <p>
            Standard DCF applied to coal generation assets in 2025 is an exercise in assumption selection. The model is not complicated — the assumptions are everything. The team builds three electricity market scenarios (Accelerated Transition, Base Case, Delayed Transition) and three carbon cost trajectories (High, Central, Low) producing nine scenario combinations for each asset. The DCF for each scenario uses: projected NEM wholesale price by time-of-day and season (coal plants are no longer baseload in the traditional sense — they are cycling assets whose dispatch economics vary hour by hour), carbon cost per tonne on a forward curve, variable and fixed operating costs including maintenance capex to sustain operation, and a terminal value assumption that in most scenarios is zero or negative (decommissioning cost).
          </p>
          <p>
            The critical discipline: the model must be transparent about what each scenario assumes for rooftop solar penetration, battery storage deployment, and gas peaking capacity additions — because these NEM structural variables drive the wholesale price assumptions that dominate the asset value calculation. Opaque scenarios that produce convenient numbers will not survive the CFO's review or the institutional investor scrutiny that follows.
          </p>

          <h3 style={{ fontSize: '17px', marginTop: '20px', marginBottom: '10px' }}>Framework 2 — Portfolio Optimisation with Operational Constraints</h3>
          <p>
            Asset retirement sequencing is an optimisation problem with hard constraints. The objective function is net present value of the generation portfolio over the planning horizon. The constraints are: (1) minimum generation capacity required to maintain NEM market obligations and retail hedge book coverage, (2) regulatory notice periods for plant closure (minimum 3 years under current AEMO rules), (3) state government energy security thresholds that effectively prevent simultaneous closure of two major assets in the same state, and (4) debt covenant compliance — specifically that the coal asset project finance cannot be accelerated without triggering cross-default provisions on the corporate revolver.
          </p>
          <p>
            Within these constraints, the model evaluates all feasible retirement sequences and calculates the NPV of each. The output is a ranked list of sequences with the binding constraints identified for each — telling the board not just what the optimal sequence is but exactly which constraints are preventing a better outcome and what it would cost to remove them.
          </p>

          <h3 style={{ fontSize: '17px', marginTop: '20px', marginBottom: '10px' }}>Framework 3 — Renewables Investment Screening: Build, Buy, Partner</h3>
          <p>
            For each renewables investment option in Priya's AUD 820M proposal — utility-scale solar (two projects), onshore wind (one project), grid-scale battery storage (one project), and a pumped hydro option that is early-stage — the team applies a standardised investment screen: levelised cost of energy vs. contracted offtake price, IRR at project finance leverage, strategic fit with existing retail book (does this generation asset hedge Meridian's retail exposure or create new unhedged exposure?), and time-to-revenue relative to the coal retirement timeline. The screen produces a priority ranking that tells Priya which projects to pursue immediately, which to develop but not yet build, and which to abandon or sell to a specialist developer.
          </p>

          <table className="data-table" style={{ marginTop: '20px' }}>
            <thead>
              <tr>
                <th>Framework</th>
                <th>Applied To</th>
                <th>Key Output</th>
                <th>Who It Convinces</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Scenario DCF</strong></td>
                <td>Each coal asset independently</td>
                <td>Value range per asset across 9 scenarios; implied impairment vs. book value</td>
                <td>CFO, S&amp;P credit analysts, institutional investors</td>
              </tr>
              <tr>
                <td><strong>Portfolio optimisation</strong></td>
                <td>Three-asset retirement sequencing</td>
                <td>Optimal retirement order and dates; binding constraints identified</td>
                <td>CEO, board, state governments, AEMO</td>
              </tr>
              <tr>
                <td><strong>Renewables investment screen</strong></td>
                <td>Each project in Priya's pipeline</td>
                <td>Prioritised capital deployment plan with IRR and strategic rationale</td>
                <td>Priya, institutional investors seeking transition credibility</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── DATA ── */}
      <section>
        <h2>The Asset Base and Market Data</h2>
        <div className="content">

          <p><strong>Coal Generation Asset Summary:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Asset</th>
                <th>Capacity (MW)</th>
                <th>Commissioned</th>
                <th>Design Life End</th>
                <th>Book Value (AUD M)</th>
                <th>2024 EBITDA (AUD M)</th>
                <th>Carbon Intensity (tCO₂/MWh)</th>
                <th>Decommission Cost Est. (AUD M)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Callide C (QLD)</strong></td>
                <td>900</td>
                <td>2001</td>
                <td>2031</td>
                <td>AUD 1,240</td>
                <td>AUD 188</td>
                <td>0.94</td>
                <td>AUD 180–220</td>
              </tr>
              <tr>
                <td><strong>Liddell South (NSW)</strong></td>
                <td>700</td>
                <td>1993</td>
                <td>2027</td>
                <td>AUD 620</td>
                <td>AUD 94</td>
                <td>1.02</td>
                <td>AUD 140–175</td>
              </tr>
              <tr>
                <td><strong>Darling Downs (QLD)</strong></td>
                <td>500</td>
                <td>2010</td>
                <td>2038</td>
                <td>AUD 880</td>
                <td>AUD 142</td>
                <td>0.87</td>
                <td>AUD 110–140</td>
              </tr>
              <tr>
                <td><strong>Total Coal Fleet</strong></td>
                <td>2,100</td>
                <td>—</td>
                <td>—</td>
                <td>AUD 2,740</td>
                <td>AUD 424</td>
                <td>0.94 avg</td>
                <td>AUD 430–535</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>NEM Wholesale Price Assumptions by Scenario (AUD/MWh, real 2025):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Scenario</th>
                <th>2025–2027</th>
                <th>2028–2031</th>
                <th>2032–2035</th>
                <th>Key Assumption Driver</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Accelerated Transition</strong></td>
                <td>AUD 68</td>
                <td>AUD 52</td>
                <td>AUD 38</td>
                <td>Battery storage reaches cost parity by 2028; 70% renewable penetration by 2032</td>
              </tr>
              <tr>
                <td><strong>Base Case</strong></td>
                <td>AUD 74</td>
                <td>AUD 65</td>
                <td>AUD 54</td>
                <td>Renewable buildout on current trajectory; battery 2031 cost parity</td>
              </tr>
              <tr>
                <td><strong>Delayed Transition</strong></td>
                <td>AUD 82</td>
                <td>AUD 78</td>
                <td>AUD 71</td>
                <td>Policy delays, grid connection backlogs slow renewable deployment</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Carbon Cost Trajectory — Safeguard Mechanism (AUD/tonne CO₂):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Trajectory</th>
                <th>2025</th>
                <th>2027</th>
                <th>2030</th>
                <th>2033</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>High Carbon Cost</strong></td>
                <td>AUD 38</td>
                <td>AUD 52</td>
                <td>AUD 75</td>
                <td>AUD 110</td>
              </tr>
              <tr>
                <td><strong>Central</strong></td>
                <td>AUD 32</td>
                <td>AUD 42</td>
                <td>AUD 58</td>
                <td>AUD 80</td>
              </tr>
              <tr>
                <td><strong>Low Carbon Cost</strong></td>
                <td>AUD 28</td>
                <td>AUD 34</td>
                <td>AUD 44</td>
                <td>AUD 58</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Renewables Pipeline — Priya's AUD 820M Proposal:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Type</th>
                <th>Capacity</th>
                <th>Meridian Equity (AUD M)</th>
                <th>Expected COD</th>
                <th>Contracted Offtake</th>
                <th>Unlevered IRR (est.)</th>
                <th>Hedges Retail Book?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Darling Downs Solar Farm</strong></td>
                <td>Utility solar</td>
                <td>400 MW</td>
                <td>AUD 210M</td>
                <td>2027 Q2</td>
                <td>65% — 12yr PPA with BHP</td>
                <td>9.8%</td>
                <td>Yes — QLD retail</td>
              </tr>
              <tr>
                <td><strong>New England Wind</strong></td>
                <td>Onshore wind</td>
                <td>320 MW</td>
                <td>AUD 180M</td>
                <td>2028 Q1</td>
                <td>40% — merchant</td>
                <td>8.4%</td>
                <td>Partial — NSW retail</td>
              </tr>
              <tr>
                <td><strong>Hunter Valley Battery</strong></td>
                <td>Grid-scale BESS</td>
                <td>200 MW / 400 MWh</td>
                <td>AUD 140M</td>
                <td>2026 Q4</td>
                <td>FCAS + merchant</td>
                <td>11.2%</td>
                <td>No — arbitrage play</td>
              </tr>
              <tr>
                <td><strong>Kidston Solar 2</strong></td>
                <td>Utility solar</td>
                <td>250 MW</td>
                <td>AUD 155M</td>
                <td>2028 Q3</td>
                <td>50% — 10yr PPA with Qld Gov</td>
                <td>8.9%</td>
                <td>Yes — QLD retail</td>
              </tr>
              <tr>
                <td><strong>Snowy-Adjacent Pumped Hydro</strong></td>
                <td>Pumped hydro</td>
                <td>500 MW / 5,000 MWh</td>
                <td>AUD 135M (development only)</td>
                <td>2033+ (uncertain)</td>
                <td>None yet</td>
                <td>TBD</td>
                <td>Yes — strategic baseload</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: '14px', fontSize: '14px' }}>
            <strong>Key data limitations:</strong> (1) NEM wholesale price scenarios are built from AEMO's Integrated System Plan modelling with consulting team overlays — not proprietary forecasts, and the CFO is aware the spread between scenarios is wide. (2) Carbon cost trajectories reflect the legislated Safeguard Mechanism escalator plus a policy risk premium in the high case — they do not model a carbon tax that does not currently exist. (3) Decommissioning cost estimates are based on comparable Australian thermal plant closures (Hazelwood, Liddell) and carry ±20% uncertainty. (4) Renewables IRR estimates are pre-tax, unlevered, and based on current EPC cost benchmarks — they will move with steel, copper, and labour markets.
          </p>
        </div>
      </section>

      {/* ── CALCULATIONS ── */}
      <section>
        <h2>The Numbers: Asset Values, Retirement Timing, and Capital Deployment</h2>
        <div className="content">

          <p><strong>Calculation 1 — Liddell South DCF: The Case for Early Retirement</strong></p>
          <div className="calculation">
{`Liddell South (700 MW, NSW) — DCF across three scenarios, WACC = 9.4%

Asset operating assumptions:
  Capacity factor:          52% (cycling asset, declining with renewable penetration)
  Annual generation:        700 MW × 52% × 8,760 hrs = 3,187,440 MWh
  Variable O&M:             AUD 8.20/MWh
  Fixed O&M:                AUD 48M/yr
  Maintenance capex (life extension post-2027): AUD 85M one-time + AUD 12M/yr incremental
  Fuel (coal) cost:         AUD 4.80/MWh (contracted through 2026, then spot + 15%)

BASE CASE scenario, Central carbon cost:
  Revenue (NEM dispatch):
    2025: 3,187,440 MWh × AUD 74/MWh =                  AUD 235.9M
    2026: 3,187,440 × AUD 71 (capacity factor decline)   AUD 226.3M
    2027: 3,050,000 × AUD 65 =                           AUD 198.3M (capacity factor 47%)
    2028–2031: ~AUD 162M/yr average (declining price + capacity)
  Carbon cost:
    2025: 3,187,440 × 1.02 tCO₂/MWh × AUD 32/t =       AUD 103.9M
    2027: AUD 42/t = AUD 130.9M
    2030: AUD 58/t = AUD 181.4M  ← carbon cost approaches revenue

  EBITDA trajectory (Base / Central):
    2025:  AUD 235.9M − 103.9M − 26.1M (var O&M) − 48M (fixed) = AUD 57.9M
    2027:  AUD 198.3M − 130.9M − 25.0M − 48M =                   AUD −5.6M  ← turns negative
    2029:  Projected EBITDA:                                       AUD −38.4M

  Life Extension Decision (extend 2027 design life to 2031):
    One-time capex:   AUD 85M (2026)
    Incremental O&M:  AUD 12M/yr × 4 years = AUD 48M
    EBITDA (2028–2031) in base/central: already negative by 2027
    NPV of extension: −AUD 85M − AUD 48M + AUD (−38.4M × 4yr discounted) = −AUD 281M
    Extension destroys AUD 281M in value in the base case.

  DCF Summary — Liddell South remaining value (AUD M):
    Scenario                    2025–2027 EBITDA   Extension NPV   Total Asset NPV
    Accelerated / High Carbon       AUD 82M          −AUD 340M        AUD −142M
    Base / Central                  AUD 122M         −AUD 281M        AUD  −87M
    Delayed / Low Carbon            AUD 168M         −AUD 195M        AUD   +34M

  Book value:  AUD 620M
  Economic value range:  AUD −142M to +AUD 34M
  Implied impairment:    AUD 586M to AUD 762M  ← The number S&P is looking for.

  ⟹ In every scenario except Delayed Transition with Low Carbon Cost, Liddell South
     has negative economic value beyond 2027. The life extension option destroys
     value in 8 of 9 scenario combinations. Retirement at design life (2027) is
     the value-maximising decision regardless of transition speed.
     This is the most analytically unambiguous finding in the engagement.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 2 — Callide C and Darling Downs: Where the Decision Is Harder</strong></p>
          <div className="calculation">
{`Callide C (900 MW, QLD) — Base Case / Central Carbon:

  2025 EBITDA:  900MW × 55% CF × 8,760hrs × AUD 74/MWh
                − carbon: × 0.94 tCO₂/MWh × AUD 32/t
                − var O&M: AUD 8.20/MWh − fixed: AUD 58M
              = AUD 328.0M − AUD 109.2M − AUD 36.1M − AUD 58M = AUD 124.7M

  2028 EBITDA (base/central, capacity factor declining to 48%):
                = AUD 262.0M − AUD 142.8M − AUD 31.5M − AUD 58M = AUD 29.7M

  2030 EBITDA (base/central):
    Carbon cost AUD 58/t → carbon bill = AUD 248.9M on 3.8M tCO₂/yr
    Revenue at AUD 60/MWh dispatch × 45% CF = AUD 212.5M
    Carbon cost EXCEEDS revenue. EBITDA deeply negative.  = AUD −88.2M

  Callide C NPV by retirement date (Base/Central):
    Retire 2028:  PV of 2025–2028 EBITDA − decom cost
                  = AUD (124.7 + 91.4 + 58.2 + 29.7)M discounted − AUD 200M decom
                  = AUD 262M − AUD 200M = AUD +62M

    Retire 2031 (design life):  PV of 2025–2031 EBITDA
                  = AUD 262M + PV(2029–2031 EBITDA: −88M/yr) − AUD 200M decom
                  = AUD 262M − AUD 189M − AUD 200M = AUD −127M

  ⟹ Retiring Callide C at 2028 generates AUD 62M NPV.
     Running to design life (2031) generates AUD −127M NPV.
     The NPV crossover — the point at which continued operation destroys value —
     occurs in mid-2028 under Base/Central assumptions.

Darling Downs (500 MW, QLD) — Newer Asset, Harder Decision:
  Newer plant (2010), lower carbon intensity (0.87), longer design life (2038).
  EBITDA remains positive through 2030 in base/central scenario.

  2025 EBITDA:  AUD 82M
  2028 EBITDA:  AUD 54M  (still positive)
  2031 EBITDA:  AUD 18M  (marginal)
  2033 EBITDA:  AUD −22M (negative — carbon cost dominates)

  Darling Downs NPV by retirement date (Base/Central):
    Retire 2030:  PV(2025–2030) − decom = AUD 298M − AUD 125M = AUD +173M
    Retire 2033:  PV(2025–2033) − decom = AUD 312M − AUD 125M = AUD +187M
    Retire 2038 (design life): PV(2025–2038) − decom = AUD 298M − AUD 125M = AUD +173M
    Note: 2033–2038 EBITDA is negative, exactly offsetting the earlier surplus.

  ⟹ For Darling Downs, retirement in 2033 is the NPV-maximising date.
     Running to design life (2038) generates the same NPV — the negative EBITDA
     years (2033–2038) exactly erode the value built up before 2033.
     Early retirement to 2030 costs AUD 14M NPV versus 2033 — a rounding error.
     The practical recommendation: target 2033, but 2030 is defensible if
     state government energy security requirements demand it.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 3 — Optimal Retirement Sequence: Portfolio NPV with Constraints</strong></p>
          <div className="calculation">
{`Feasible retirement sequences evaluated (constrained by AEMO 3-year notice rule,
state government obligations, and debt covenant compliance):

Sequence A — Liddell 2027 → Callide C 2028 → Darling Downs 2033:
  Liddell NPV:        AUD −87M  (book impairment AUD 707M)
  Callide C NPV:      AUD +62M  (book impairment AUD 1,178M)
  Darling Downs NPV:  AUD +187M (book impairment AUD 693M)
  Total portfolio NPV: AUD +162M
  Total book impairment to recognise: AUD 2,578M
  Constraint check:
    ✓ Liddell/Callide not simultaneous (different states)
    ✓ 3-year AEMO notice: Liddell notice 2024 (late — needs immediate filing)
    ✓ No two QLD plants retired within 18 months of each other
    ✓ Debt covenant: coal project finance matures 2028 — Callide C retirement
      timing allows natural debt expiry before asset closure ✓

Sequence B — Liddell 2027 → Darling Downs 2030 → Callide C 2033:
  Liddell NPV:        AUD −87M
  Darling Downs NPV:  AUD +173M (3yr earlier than optimal, AUD −14M vs Seq A)
  Callide C NPV:      AUD −62M  (running 5 more years into negative EBITDA territory)
  Total portfolio NPV: AUD +24M  ← AUD 138M worse than Sequence A
  This is the sequence the state government would prefer. The cost of that
  preference is AUD 138M in NPV terms — a number the CEO can take to government.

Sequence C — Liddell 2027 → Callide C 2031 (design life) → Darling Downs 2033:
  Liddell NPV:        AUD −87M
  Callide C NPV:      AUD −127M (three additional years of negative EBITDA)
  Darling Downs NPV:  AUD +187M
  Total portfolio NPV: AUD −27M  ← Negative. Wayne Perkins' preferred sequence.
  This is what "run to design life" actually costs.

RECOMMENDED SEQUENCE — Sequence A:
  Portfolio NPV:        AUD +162M
  Total capital freed from coal retirement (EBITDA 2025–2033 cumulative): AUD 1,840M
  Decommissioning costs:                                                  −AUD 482M (mid)
  Net capital available for reallocation:                                  AUD 1,358M

  Against S&P review:
    Impairment of AUD 2,578M triggers a write-down but REMOVES the uncertainty
    that is currently causing the credit review. S&P's concern is not the impairment
    itself — it is the lack of a credible timeline. A board-approved retirement plan
    with quantified NPV is more credit-positive than ambiguity with a higher book value.
    Expected outcome: BBB+ maintained (confirmed in consultation with S&P methodology).`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 4 — Renewables Capital Deployment: Screening Priya's Pipeline</strong></p>
          <div className="calculation">
{`Investment Screen: IRR vs. Hurdle Rate (9.4% WACC), Strategic Fit, Risk Profile

Project 1 — Hunter Valley Battery (AUD 140M, 200MW/400MWh BESS):
  Revenue streams: FCAS (frequency control ancillary services) + energy arbitrage
  FCAS revenue (contracted, 5yr): AUD 18.4M/yr
  Arbitrage revenue (merchant, variable): AUD 9.2M/yr (modelled at P50)
  O&M: AUD 4.1M/yr  Depreciation life: 15 years
  Unlevered IRR: 11.2%  → ABOVE hurdle ✓
  Time to COD: 18 months (2026 Q4) — fastest to revenue of all projects
  Strategic fit: Provides FCAS services that will be increasingly valuable as
    coal exits the market. No retail hedge value but strong standalone economics.
  Verdict: FUND IMMEDIATELY. Highest IRR, fastest to market, grid services
    that increase in value as coal fleet retires. First AUD 140M deployed.

Project 2 — Darling Downs Solar Farm (AUD 210M, 400MW):
  Revenue: 65% contracted (BHP PPA, AUD 58/MWh, 12yr) + 35% merchant
  PPA revenue: 400MW × 65% × 8,760hrs × 32% CF × AUD 58 = AUD 42.2M/yr
  Merchant revenue (P50): AUD 18.8M/yr
  Total revenue: AUD 61.0M/yr  O&M: AUD 8.4M/yr
  Unlevered IRR: 9.8% → above hurdle ✓
  Strategic fit: Located in QLD, hedges retail book in same region as Callide C
    retirement. Replaces 400MW of clean generation to replace retiring coal capacity.
  Construction timing: 2027 Q2 — aligns with Callide C AEMO notice period beginning.
  Verdict: FUND — second priority. Strategically essential hedge for QLD retail book.

Project 3 — Kidston Solar 2 (AUD 155M, 250MW):
  Revenue: 50% Qld Gov PPA (AUD 62/MWh, 10yr) + 50% merchant
  Total revenue: AUD 44.8M/yr  O&M: AUD 5.8M/yr
  Unlevered IRR: 8.9% → below hurdle by 50bps, but strategic rationale compensates
  Strategic fit: Second QLD solar asset; diversifies generation within state.
  Verdict: CONDITIONAL FUND — approve development, defer final investment decision
    to 2026 when merchant price outlook is clearer. If P50 merchant price
    improves 5%, IRR clears hurdle comfortably.

Project 4 — New England Wind (AUD 180M, 320MW):
  Revenue: 40% contracted + 60% merchant  IRR: 8.4% → below hurdle
  40% contract coverage is insufficient for a AUD 180M commitment at this risk level.
  Merchant exposure in NSW peaks during periods when Meridian's retail book is
    already long (summer evening peaks) — adds exposure rather than hedging it.
  Verdict: DO NOT FUND as structured. Re-tender offtake — if contract coverage
    reaches 60%, IRR clears 9.4%. Alternatively, sell development rights to a
    specialist developer and retain a 15–20% equity stake.

Project 5 — Snowy-Adjacent Pumped Hydro (AUD 135M development, AUD 1.8B construction):
  Development spend: AUD 135M over 3 years to reach FID.
  Construction: AUD 1.8B (Meridian share ~AUD 600M assuming consortium structure).
  COD: 2033+ — highly uncertain.
  Strategic rationale: Pumped hydro is the long-duration storage that the NEM needs.
    A Meridian-owned pumped hydro asset in 2033 would be extraordinarily valuable.
  Verdict: FUND DEVELOPMENT ONLY (AUD 135M). Do not commit construction capital
    until: (a) FID-ready feasibility complete, (b) consortium partners confirmed,
    (c) coal retirement cash flows visible to fund equity contribution.

Capital Deployment Summary:
  Project                          Equity (AUD M)  Verdict
  Hunter Valley Battery                140         Fund immediately
  Darling Downs Solar Farm             210         Fund — 2nd priority
  Kidston Solar 2                      155         Conditional — defer FID to 2026
  New England Wind                     180         Do not fund — restructure first
  Pumped Hydro (development only)      135         Fund development only
  ──────────────────────────────────────────────────
  Immediate commitments:               350         (Battery + DD Solar)
  Conditional / deferred:              290         (Kidston + Pumped Hydro dev)
  Restructure or exit:                 180         (New England Wind)
  Total capital committed now:         640         vs Priya's AUD 820M ask

  AUD 180M saved vs. Priya's proposal by restructuring New England Wind.
  That AUD 180M is the seed capital for the pumped hydro construction phase in 2029.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 5 — The Integrated Capital Flow: Does Transition Fund Itself?</strong></p>
          <div className="calculation">
{`Cash Flow Architecture — Can Coal Fund the Transition? (AUD M, nominal)

Sources of capital (2025–2033):
  Coal EBITDA (cumulative, Sequence A):
    Liddell South (2025–2027):       AUD  170M
    Callide C (2025–2028):           AUD  351M
    Darling Downs (2025–2033):       AUD  548M
    Total coal EBITDA:               AUD 1,069M

  Liddell South impairment write-down (non-cash, no capital impact)
  Callide C decommissioning:        −AUD  200M (2028–2030)
  Liddell South decommissioning:    −AUD  157M (2027–2029)
  Darling Downs decommissioning:    −AUD  125M (2033–2035)
  Total decommissioning cash:       −AUD  482M

  Net coal cash flow (2025–2033):    AUD  587M

  Existing dividend / buyback program (committed):
                                    −AUD  240M (AUD 40M/yr × 6 years)

  Capital available for reinvestment: AUD  347M

Renewables capital requirement (2025–2033):
  Hunter Valley Battery:            −AUD  140M (2025)
  Darling Downs Solar Farm:         −AUD  210M (2026–2027)
  Kidston Solar 2 (conditional):    −AUD  155M (2027–2028)
  Pumped Hydro development:         −AUD  135M (2026–2029)
  Total renewables capex:           −AUD  640M

  Funding gap:                       AUD  640M − AUD 347M = AUD −293M

Gap solutions:
  Option A — Project finance leverage on Battery + Solar (60:40 debt:equity):
    Debt raised:  (AUD 140M + AUD 210M) × 60% = AUD 210M
    Equity required:  AUD 140M

    Revised gap:  AUD 640M − AUD 347M − AUD 210M debt + AUD 140M equity adj
                = AUD 293M − AUD 210M = AUD 83M remaining gap

  Option B — Sell New England Wind development rights (AUD 35M est.):
    Reduces gap to AUD 48M

  Option C — Defer Kidston Solar 2 FID to 2026 (conditional anyway):
    AUD 155M deferred → gap eliminated within planning horizon

  CONCLUSION: The transition funds itself within the planning horizon
  without a capital raise, if:
  (1) Project finance is used on Battery and Darling Downs Solar (standard practice)
  (2) New England Wind is sold or restructured
  (3) Kidston Solar 2 FID is staged appropriately
  The CFO's instinct that "we cannot afford the transition" is wrong.
  The more precise statement: we cannot afford all five projects at once,
  in the sequence Priya proposed, without project finance.
  With standard project finance, the math works.`}
          </div>
        </div>
      </section>

      {/* ── FINDINGS ── */}
      <section>
        <h2>What the Analysis Actually Shows</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Finding 1 — Liddell South Has Negative Economic Value in Every Realistic Scenario</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Across all nine scenario combinations, Liddell South generates negative economic value beyond its 2027 design life. In eight of nine scenarios it generates negative economic value even before design life if the life extension capex is included. The book value of AUD 620M requires an impairment of AUD 586–762M depending on the scenario. This impairment is not optional — it is a financial reporting obligation once the retirement decision is made and the asset's recoverable amount can be quantified. The CFO has been aware this was coming. The model gives him the number he needs to brief the audit committee before it appears in the accounts.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 2 — Running Coal Assets to Design Life Destroys AUD 189M in NPV</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Wayne Perkins' preferred sequence — run all assets to their design life — generates a total portfolio NPV of negative AUD 27 million, compared to AUD 162 million for the recommended Sequence A. The difference is AUD 189 million — the cost of Callide C's negative EBITDA years from 2028 to 2031. This is the NPV crossover calculation Wayne needs to see. It does not tell him his instinct about operational capability is wrong. It tells him exactly what "running it longer" actually costs, expressed in the language the CFO and board will use to make the decision. When he has that number, the conversation changes from "can we run it?" to "should we?"
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 3 — The Transition Funds Itself, But Not the Way Priya Proposed</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The coal fleet generates AUD 587 million in net cash after decommissioning costs across the planning horizon — enough to fund AUD 347 million of renewables equity after the dividend commitment, with project finance covering the balance. The transition is self-funding. But not all five projects in Priya's pipeline should be built. New England Wind does not meet the hurdle rate at current contract coverage and adds retail book exposure rather than reducing it. The AUD 180 million saved by restructuring New England Wind is the seed capital for the pumped hydro construction phase — the asset with the greatest long-term strategic value. Priya gets fewer projects and a better portfolio.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 4 — Recognising the Impairment Is Credit-Positive, Not Credit-Negative</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              This is counterintuitive and will require careful communication. The AUD 2,578 million impairment looks damaging. S&amp;P's credit concern, however, is not the size of the impairment — it is the absence of a credible transition plan. A board-approved retirement sequence with quantified NPV and a funded renewables pipeline removes the uncertainty that is currently driving the credit review. In consultation with S&amp;P's methodology team, the conclusion is that a plan of this specificity supports maintenance of the BBB+ rating. The ambiguity of the current position — high book values, no retirement timeline, no transition capital plan — is more credit-negative than an honest write-down paired with a credible forward strategy.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 5 — The Government Preference Costs AUD 138M and Should Be Costed Explicitly</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Sequence B — the retirement order that the state government prefers, retiring Darling Downs early to maintain Callide C longer — generates AUD 138 million less NPV than the recommended Sequence A. This is not an argument against engaging with government preferences. It is a quantification of what those preferences cost, which Meridian needs to know before entering any negotiation. If the Queensland government wants Meridian to follow Sequence B, the discussion should be about what support — royalty relief, transition funding, community investment co-contribution — compensates for the AUD 138 million value transfer. The consultation starts with a number, not a position.
            </p>
          </div>
        </div>
      </section>

      {/* ── RECOMMENDATIONS ── */}
      <section>
        <h2>The Board Decision: A Phased Action Plan</h2>
        <div className="content">

          <h3 style={{ fontSize: '17px', marginBottom: '12px' }}>Decisions Required at This Board Meeting</h3>
          <div className="highlight-box">
            <strong>D1. Approve Retirement Sequence A and Authorise AEMO Notices</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Board formally resolves to retire Liddell South in 2027, Callide C in 2028, and Darling Downs in 2033. Authorise management to file the required AEMO 3-year decommissioning notices for Liddell South immediately (this notice is already late — the 2024 filing should have occurred and must happen within 30 days of board resolution).
              <br /><strong>Financial impact:</strong> Triggers recognition of AUD 2,578M impairment in FY25 accounts. Non-cash. Removes the balance sheet uncertainty driving S&amp;P's credit review.
              <br /><strong>Owner:</strong> CFO (impairment accounting) + CGO (AEMO notice filing)
            </p>
          </div>
          <div className="highlight-box">
            <strong>D2. Approve AUD 350M Immediate Renewables Commitment (Battery + Darling Downs Solar)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Approve final investment decision on Hunter Valley Battery (AUD 140M) and Darling Downs Solar Farm (AUD 210M). Authorise CFO to arrange project finance on both assets at 60:40 leverage, limiting Meridian equity contribution to AUD 140M combined.
              <br /><strong>Why now:</strong> Hunter Valley Battery reaches COD in 2026 — before Liddell South retires — and immediately contributes FCAS revenue that partially offsets the lost coal generation margin. Darling Downs Solar is timed to provide replacement QLD generation as Callide C retires. Both projects are shovel-ready.
              <br /><strong>Owner:</strong> CSSO (project execution) + CFO (financing)
            </p>
          </div>
          <div className="highlight-box">
            <strong>D3. Authorise Government Engagement Framework</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Authorise CEO to open formal engagement with Queensland and NSW state governments on retirement timelines, using the AUD 138M NPV cost of Sequence B as the basis for discussing government support for community transition. Frame the engagement not as seeking approval but as offering partnership — Meridian will contribute community transition funding proportional to the retirement timeline it adopts.
              <br /><strong>Why:</strong> Engaging governments after the announcement is reactive and costly. Engaging before, with specific numbers and a collaborative framing, gives Meridian control of the narrative and reduces regulatory intervention risk.
              <br /><strong>Owner:</strong> CEO + Government Affairs
            </p>
          </div>

          <h3 style={{ fontSize: '17px', marginBottom: '12px', marginTop: '24px' }}>Decisions Deferred to 2026 Board Cycle</h3>
          <div className="highlight-box">
            <strong>D4. Kidston Solar 2 Final Investment Decision — Q1 2026</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Conditional on merchant NEM price outlook improving sufficiently to bring unlevered IRR above 9.4%. If merchant outlook deteriorates, restructure as a contracted-only asset with government offtake extension or sell development rights.
            </p>
          </div>
          <div className="highlight-box">
            <strong>D5. New England Wind — Restructure or Divest by Q2 2026</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Mandate the strategy team to either (a) secure additional offtake agreements bringing contracted coverage to 60%+ before committing equity, or (b) sell the development rights to a specialist wind developer and retain a 15–20% equity stake. Decision deadline: Q2 2026 to avoid further development cost escalation on an uneconomic project as structured.
            </p>
          </div>

          <p style={{ marginTop: '20px' }}><strong>24-Month Monitoring Dashboard:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Current</th>
                <th>Target (Month 24)</th>
                <th>Red Line Trigger</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S&amp;P Credit Rating</td>
                <td>BBB+ (under review)</td>
                <td>BBB+ (stable outlook)</td>
                <td>Any downgrade to BBB triggers immediate CFO-led response plan</td>
              </tr>
              <tr>
                <td>Generation EBITDA Margin</td>
                <td>21%</td>
                <td>≥ 24% (battery + solar online)</td>
                <td>&lt; 18% = carbon cost accelerating faster than modelled</td>
              </tr>
              <tr>
                <td>Hunter Valley Battery COD</td>
                <td>In development</td>
                <td>Q4 2026</td>
                <td>Delay beyond Q2 2027 = FCAS revenue gap during Liddell retirement</td>
              </tr>
              <tr>
                <td>Renewables % of Generation Capacity</td>
                <td>8%</td>
                <td>≥ 28% by Month 24</td>
                <td>&lt; 18% at Month 18 = transition pace insufficient for investor narrative</td>
              </tr>
              <tr>
                <td>Institutional Investor ESG Score (MSCI)</td>
                <td>B (laggard)</td>
                <td>BB (average)</td>
                <td>Remaining at B through next AGM = second shareholder resolution</td>
              </tr>
              <tr>
                <td>Coal Asset Impairment Recognition</td>
                <td>AUD 0M recognised</td>
                <td>AUD 2,578M in FY25 accounts</td>
                <td>Any audit qualification of impairment calculation = board crisis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── PRACTITIONER NOTES ── */}
      <section>
        <h2>Notes from the Field</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Why Energy Transition Engagements Fail — and How This One Should Not</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The most common failure mode in energy transition strategy engagements is not analytical error. It is timeline deferral. The board approves a transition plan in which all the difficult decisions — asset impairment, coal retirement, large-scale renewables commitment — occur in years 6 through 10 of the plan. Years 1 through 5 contain only studies, working groups, and "pilot projects." Institutional investors have seen this pattern enough times that they no longer give credit for plans with backend-loaded action. The reason Meridian's board must approve AEMO notices and renewables FIDs at this meeting — not next year — is that credibility requires irreversible action in the near term, not commitments that can be revisited at the next planning cycle. File the AEMO notice before the board meeting ends. That single act is worth more to S&amp;P and to institutional investors than any number of strategy slides.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Impairment Conversation Nobody Wants to Have</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              AUD 2,578M is a number that will dominate the FY25 earnings headlines and the subsequent media coverage. The CEO, CFO, and investor relations team must be aligned on the communication before the accounts are released — not after. The frame that works: "Meridian has written down the value of assets whose economic future is now clearly defined, removing uncertainty from our balance sheet and replacing it with a funded, time-bound transition plan." The frame that doesn't work: "we've taken a significant write-down reflecting challenging market conditions." The first frame is a strategic decision. The second is an excuse. Every word of the investor communication should be drafted before the board votes, not after.
            </p>
          </div>
          <div className="highlight-box">
            <strong>What Wayne Perkins Needs to Hear — and What He Does Not</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Wayne Perkins has kept the coal fleet running safely and reliably for 31 years. That is genuinely valuable and should be acknowledged explicitly. What he does not need to hear is that his career has been spent on the wrong side of history — that framing produces defensiveness and organisational resistance. What he does need to hear is that his operational expertise is the reason Meridian can execute a responsible, safe retirement sequence rather than a chaotic one, and that the transition plan only works if the coal assets deliver their projected EBITDA in the years they are still operating. Give him ownership of the "responsible operations through to planned closure" mandate. He will execute it better than anyone. The people who are most dangerous in transition engagements are not the ones who oppose change — they are the ones who feel like change is being done to them rather than by them.
            </p>
          </div>
          <div className="highlight-box">
            <strong>On Scenario Analysis in Engagements Where the Client Has a Preferred Answer</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Roberta Haines wants the analysis to support transition. Wayne Perkins wants it to support extension. Priya Nair wants it to support a large renewables budget. Marcus Teoh wants it to support credit rating maintenance. Every stakeholder in this engagement has a preferred conclusion. The consulting team's only protection against being captured by any one of them is the scenario framework itself: nine scenario combinations produce a range of outcomes, and the recommendation is the strategy that performs best across the most scenarios, not the one that looks best under the most favourable assumptions. When Wayne Perkins challenges the carbon cost trajectory, the answer is not "you're wrong" — it is "in your preferred low-carbon-cost scenario, Sequence A still outperforms running to design life by AUD 162M. The scenarios where running to design life wins are the scenarios where carbon policy is reversed and renewable deployment stalls — and you can assess the probability of that yourself." Let the scenario table do the work.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Question the Board Will Not Ask But Should</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              No board member in this engagement will ask: "Should Meridian exit the generation business entirely and become a pure retail energy company?" It is a legitimate question. A pure retail play — buying power on the NEM rather than generating it, running the 1.1 million customer relationships, and letting specialist renewables developers own the generation assets — has a different and in some scenarios superior risk-return profile to the integrated model. The consulting team should prepare a one-page framing of this option for the CEO's eyes only, not as a recommendation for this board meeting but as a strategic option that needs to stay on the table if the transition plan underperforms in years 3 through 5. The worst outcome for Meridian is not making a wrong decision at this board meeting. The worst outcome is making a right decision and then failing to monitor whether it is working — because by the time the next strategic review arrives, the option set will have narrowed considerably.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Case18;
