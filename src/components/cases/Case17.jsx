const Case17 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 17</span>
        <h1>The Profitable Customer Exodus</h1>
        <div className="case-meta">
          Industry: Financial Services / Retail Banking &bull; Level: Advanced / Strategic — C-Suite Customer Portfolio Restructuring
        </div>
      </header>

      {/* ── OPENING BRIEF ── */}
      <section>
        <h2>The Situation in 90 Seconds</h2>
        <div className="content">
          <p>
            <strong>MerataBank</strong> is a full-service Thai commercial bank with <strong>THB 2.1 trillion (~$58B USD) in total assets</strong>, 4.2 million retail customers, and a nationwide branch network of 680 outlets. It holds the #3 position in retail banking by assets, behind two state-linked giants. For most of its 40-year history, its competitive position was built on branch density in the provinces and strong SME relationships in manufacturing corridors.
          </p>
          <p>
            That position is eroding — quietly, and in the worst possible way. MerataBank is not losing customers. It is losing <strong>the right customers</strong>. Over the past three years, three Thai neobanks — led by KBTG's digital arm, SCB's Easy app, and a standalone venture called PocketBank — have systematically stripped MerataBank's most profitable retail segments: digitally active, high-income urban professionals aged 28–45 who hold investment products, mortgage accounts, and transact frequently enough to generate interchange revenue. These customers are not closing accounts; they are <em>decamping their primary banking relationship</em> while leaving dormant savings accounts behind. From MerataBank's core systems, they look like retained customers. From the revenue line, they look like slow bleed.
          </p>
          <div className="highlight-box">
            <strong>Why the Board Is Convening Now:</strong> The Trigger Event
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              At the most recent quarterly earnings review, the CFO presented a number that stopped the room: <em>net interest income per active retail customer had declined 19% over 36 months</em> — from THB 4,820 to THB 3,904 per customer per year — while the total customer count had grown 6%. The bank is serving more people and making less money per person. Simultaneously, the cost-to-serve per retail customer has increased from THB 1,240 to THB 1,890 as branch overhead has remained fixed while digital transactions have migrated to channels MerataBank does not own. The math is simple and brutal: at current trajectory, the retail banking division crosses into negative economic profit within 11 months.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The Bank of Thailand's upcoming open banking regulation — requiring MerataBank to expose customer data APIs to licensed third parties by Q3 next year — will accelerate the dynamic. Once neobanks can see MerataBank's customer transaction histories, their targeting precision will improve dramatically. The window to act is now, not after the regulation takes effect.
            </p>
          </div>
          <p>
            The Group CEO has assembled a working group with four mandates: (1) understand exactly who is leaving and who is being left behind, (2) quantify the economic value being lost versus the economic value still captive, (3) determine whether MerataBank should fight for digital-native customers or strategically concede them, and (4) produce a capital allocation recommendation for the next three-year technology and distribution investment cycle. The consulting team has eight weeks.
          </p>
        </div>
      </section>

      {/* ── STAKEHOLDER SECTION ── */}
      <section>
        <h2>The Room the Consultant Walks Into</h2>
        <div className="content">
          <p>
            Before touching the data, a senior consultant maps the political terrain. The analytics will be contested — not because the numbers are wrong, but because the implications threaten different parts of the organization differently. Understanding who loses from each possible conclusion is as important as understanding what the data shows.
          </p>
          <div className="highlight-box">
            <strong>Group CEO — Wanchai Srithanarat:</strong> Ex-McKinsey, appointed 18 months ago by a board frustrated with a decade of incremental strategy. He came in with a mandate to modernize. He privately believes the branch network is 40% oversized for the revenue it generates but has not yet found the analytical basis to move the board. This engagement is, in part, his vehicle for building that case. He will support whatever the data says — as long as the data is bulletproof enough to survive the board debate.
          </div>
          <div className="highlight-box">
            <strong>CFO — Pimolwan Charoenchai:</strong> A 22-year MerataBank veteran who built her career in credit risk. She is the most analytically rigorous person on the ExCo and will be the consulting team's most valuable internal ally — but only after she has stress-tested every assumption in the model personally. She is not a skeptic by disposition; she is a skeptic by professional training. Win her early with the cost-to-serve decomposition (she has been asking for this number for two years and never got it) and she becomes the engine of internal advocacy.
          </div>
          <div className="highlight-box">
            <strong>Head of Retail Banking — Kriangkrai Boonma:</strong> Built the branch network over 15 years. Carries deep institutional knowledge of the provincial customer base and the SME relationships that underpin deposit funding. He is not wrong that the branches generate real value in Tier 2 and Tier 3 cities — but he will use that truth to defend the network beyond the point where the economics justify it. His instinct will be to present the neobank threat as a Bangkok-only phenomenon that does not affect "real" Thailand. The data will tell a more nuanced story. Handle him carefully: he controls the frontline relationship data without which the customer segmentation is impossible to build.
          </div>
          <div className="highlight-box">
            <strong>Chief Digital Officer — Thanaporn Visuthipat:</strong> Hired 11 months ago from Grab Financial. Sees this engagement as her platform. She wants a large digital investment mandate and will advocate aggressively for a full digital bank build — her number is THB 8 billion over three years. She is not wrong that digital investment is needed; she is probably wrong about the scale and timeline. Her recommendations will be directionally correct and financially aggressive. The consultant's job is to give the CEO a calibrated version of her vision that survives the CFO's model.
          </div>
          <div className="highlight-box">
            <strong>Head of Strategy — Nattapon Lertsuwankij:</strong> Owns the official three-year plan. Has been working on a "digital-first" strategy document for 14 months that has never been approved. Anxious about being bypassed by the consulting team. Treat him as a collaborator — co-present findings where possible, give him co-authorship of the recommendation where it aligns with his existing work. His buy-in converts him from a political obstacle into an implementation champion.
          </div>
        </div>
      </section>

      {/* ── PROBLEM DEFINITION ── */}
      <section>
        <h2>Defining the Actual Problem</h2>
        <div className="content">
          <p>
            MerataBank's leadership has framed the problem as: <em>"How do we compete with neobanks?"</em> This framing is seductive and wrong. It implies the answer is a digital product — a better app, faster onboarding, lower fees. It leads to a technology roadmap, not a strategic decision. The consulting team's first job is to reframe.
          </p>
          <p>
            The precise problem is this: <strong>MerataBank does not know which of its 4.2 million customers are economically worth retaining at the cost required to retain them, and it is currently spending money to serve all of them as if they were equally valuable.</strong> The neobank threat is the catalyst, not the cause. The cause is a customer economics model that has never been built — and a cost-to-serve structure that has never been disaggregated below the divisional P&amp;L level.
          </p>
          <p>
            The correct problem statement: <em>"Which customer segments generate economic profit sufficient to justify the cost of digital retention investment — and what is the minimum viable investment required to protect those segments from neobank capture in the next 24 months?"</em>
          </p>
          <div className="highlight-box">
            <strong>The Three Questions That Drive the Entire Engagement</strong>
            <ul>
              <li>
                <strong>Q1 — Who is actually leaving, and what is the economic value of what is walking out the door?</strong> The bank's CRM shows 96% customer retention. The revenue data shows 19% NII per customer decline. These two numbers cannot both be right without a structural explanation. Finding that explanation — the "primary banking relationship migration" versus "account retention" distinction — is the foundation of the entire analysis.
              </li>
              <li>
                <strong>Q2 — What does it cost MerataBank to serve each customer segment, and at what cost-to-serve does a segment become economically negative?</strong> The bank has never built cost-to-serve at the customer cohort level. Building it will surface a number of segments that are being served at a loss — and will almost certainly reveal that the branch network is the primary driver of uneconomic service costs in low-value segments.
              </li>
              <li>
                <strong>Q3 — What is the minimum capital commitment that protects economic-profit-positive customers from neobank attrition — and does MerataBank build, buy, or partner to deliver it?</strong> This is the board-level decision. Everything else in the engagement is in service of answering this question with enough precision that the board can act.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── ANALYTICAL FRAMEWORK ── */}
      <section>
        <h2>The Analytical Framework</h2>
        <div className="content">
          <p>
            Three frameworks in sequence. Each answers one of the three key questions. The sequence is non-negotiable — you cannot answer Q3 without Q2, and you cannot answer Q2 without Q1.
          </p>

          <h3 style={{ fontSize: '17px', marginTop: '20px', marginBottom: '10px' }}>Framework 1 — Customer Lifetime Value with Primary Relationship Weighting</h3>
          <p>
            Standard CLV models in banking use product holdings and transaction volumes. This is insufficient for MerataBank's problem because a customer with a dormant savings account and a PocketBank primary relationship looks identical to a genuinely engaged customer in the CRM. The team must build a <strong>Primary Relationship Score (PRS)</strong> — a composite metric that identifies whether MerataBank or a competitor is the customer's primary financial institution. Inputs: salary credit frequency, active debit transactions per month, investment product activity, mortgage utilization, and inbound transfer origin. A customer who credits their salary to MerataBank monthly is a primary customer. A customer whose salary goes to PocketBank and who maintains a THB 5,000 minimum balance at MerataBank for free ATM access is an economic liability.
          </p>
          <p>
            Once PRS is computed, CLV is recalculated on the primary-customer subset only. This produces two critical numbers: the CLV of customers MerataBank is genuinely retaining, and the CLV of customers it is nominally retaining but economically losing. The gap between these two numbers is the size of the real problem.
          </p>

          <h3 style={{ fontSize: '17px', marginTop: '20px', marginBottom: '10px' }}>Framework 2 — Cost-to-Serve by Customer Cohort</h3>
          <p>
            MerataBank's P&amp;L shows total retail banking costs. It does not show what it costs to serve a Tier 1 provincial customer who visits a branch twice a month versus a Bangkok urban professional who has not entered a branch in 14 months. Building cost-to-serve at cohort level requires activity-based costing: assigning branch costs, call center costs, digital infrastructure costs, credit risk costs, and relationship management costs to the customer segments that actually consume them.
          </p>
          <p>
            The hypothesis — which the data will either confirm or disprove — is that the branch network's fixed costs are being allocated across all customers proportionally, masking the fact that digital-native high-income customers are being cross-subsidized by the same infrastructure as branch-dependent low-income customers, while generating dramatically more revenue per unit of service cost. If this is true, it has profound implications: MerataBank may already be uneconomic for low-value branch-dependent customers, and the right response is not to build a digital bank — it is to rationalize the branch network while protecting the digital acquisition channel.
          </p>

          <h3 style={{ fontSize: '17px', marginTop: '20px', marginBottom: '10px' }}>Framework 3 — Build / Buy / Partner Decision Framework</h3>
          <p>
            Only after Frameworks 1 and 2 establish which customers are worth retaining and at what cost does the team evaluate the investment options. The CDO's THB 8 billion digital bank build, a potential acquisition of PocketBank (which has 1.1 million users and is reportedly seeking a Series C), a banking-as-a-service partnership with a regional technology provider, and a targeted product enhancement program are all evaluated on the same axes: time-to-customer-impact, cost per economically retained customer, and NPV at three-year horizon.
          </p>

          <table className="data-table" style={{ marginTop: '20px' }}>
            <thead>
              <tr>
                <th>Framework</th>
                <th>Question It Answers</th>
                <th>Primary Data Required</th>
                <th>Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>CLV + Primary Relationship Score</strong></td>
                <td>Who is actually leaving and what is it worth?</td>
                <td>Transaction data, salary credits, product holdings, transfer origins</td>
                <td>Segmented CLV map with primary vs. nominal retention split</td>
              </tr>
              <tr>
                <td><strong>Cost-to-Serve (Activity-Based)</strong></td>
                <td>What does it cost to serve each segment?</td>
                <td>Branch transaction logs, call center volumes, digital activity data, HR allocation</td>
                <td>Economic profit / loss by customer cohort</td>
              </tr>
              <tr>
                <td><strong>Build / Buy / Partner NPV</strong></td>
                <td>What is the minimum viable investment to protect value?</td>
                <td>Competitor benchmarks, acquisition valuations, vendor proposals, internal capex estimates</td>
                <td>Ranked investment options with NPV and time-to-impact</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── DATA SECTION ── */}
      <section>
        <h2>The Data: What We Have, What We Build, What We Assume</h2>
        <div className="content">

          <p><strong>Customer Segmentation Baseline — Before PRS Adjustment:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Segment</th>
                <th>Customers</th>
                <th>% of Base</th>
                <th>Avg Annual NII per Customer</th>
                <th>Products Held (avg)</th>
                <th>Branch Visit Frequency</th>
                <th>CRM Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Affluent Urban (BKK)</strong></td>
                <td>210,000</td>
                <td>5.0%</td>
                <td>THB 18,400</td>
                <td>3.8</td>
                <td>0.4×/month</td>
                <td>"Retained"</td>
              </tr>
              <tr>
                <td><strong>Mass Affluent Urban</strong></td>
                <td>580,000</td>
                <td>13.8%</td>
                <td>THB 7,200</td>
                <td>2.4</td>
                <td>0.9×/month</td>
                <td>"Retained"</td>
              </tr>
              <tr>
                <td><strong>Digital Active Mass</strong></td>
                <td>940,000</td>
                <td>22.4%</td>
                <td>THB 3,100</td>
                <td>1.6</td>
                <td>0.3×/month</td>
                <td>"Retained"</td>
              </tr>
              <tr>
                <td><strong>Branch-Dependent Provincial</strong></td>
                <td>1,620,000</td>
                <td>38.6%</td>
                <td>THB 2,200</td>
                <td>1.2</td>
                <td>2.4×/month</td>
                <td>"Retained"</td>
              </tr>
              <tr>
                <td><strong>Dormant / Minimum Balance</strong></td>
                <td>850,000</td>
                <td>20.2%</td>
                <td>THB 380</td>
                <td>1.0</td>
                <td>0.1×/month</td>
                <td>"Retained"</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Primary Relationship Score — After Transaction Reclassification:</strong></p>
          <p style={{ fontSize: '14px', marginBottom: '12px' }}>
            PRS is computed from 36 months of transaction data. A customer scores "Primary" if MerataBank is the destination of salary credits in ≥ 10 of the last 12 months AND active debit/credit card transactions exceed 8 per month. "Nominal" means the account is active but salary and primary spend have migrated. "Dormant" means fewer than 2 transactions per month for 6+ months.
          </p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Segment</th>
                <th>CRM "Retained"</th>
                <th>PRS: Primary</th>
                <th>PRS: Nominal (migrating)</th>
                <th>PRS: Dormant</th>
                <th>CLV (Primary)</th>
                <th>CLV (Nominal)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Affluent Urban</strong></td>
                <td>210,000</td>
                <td>88,000 (42%)</td>
                <td>96,000 (46%)</td>
                <td>26,000 (12%)</td>
                <td>THB 142,000</td>
                <td>THB 18,000</td>
              </tr>
              <tr>
                <td><strong>Mass Affluent Urban</strong></td>
                <td>580,000</td>
                <td>298,000 (51%)</td>
                <td>224,000 (39%)</td>
                <td>58,000 (10%)</td>
                <td>THB 68,400</td>
                <td>THB 9,200</td>
              </tr>
              <tr>
                <td><strong>Digital Active Mass</strong></td>
                <td>940,000</td>
                <td>376,000 (40%)</td>
                <td>470,000 (50%)</td>
                <td>94,000 (10%)</td>
                <td>THB 21,600</td>
                <td>THB 3,400</td>
              </tr>
              <tr>
                <td><strong>Branch-Dependent Provincial</strong></td>
                <td>1,620,000</td>
                <td>1,393,200 (86%)</td>
                <td>162,000 (10%)</td>
                <td>64,800 (4%)</td>
                <td>THB 14,800</td>
                <td>THB 4,100</td>
              </tr>
              <tr>
                <td><strong>Dormant / Min Balance</strong></td>
                <td>850,000</td>
                <td>34,000 (4%)</td>
                <td>127,500 (15%)</td>
                <td>688,500 (81%)</td>
                <td>THB 4,200</td>
                <td>THB 480</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Cost-to-Serve by Cohort (Activity-Based Costing, Annual per Customer):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Cohort</th>
                <th>Branch Cost Allocation</th>
                <th>Digital Infra Cost</th>
                <th>Call Center Cost</th>
                <th>Credit Risk Cost</th>
                <th>RM / Relationship Cost</th>
                <th>Total Cost-to-Serve</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Affluent Urban (Primary)</strong></td>
                <td>THB 280</td>
                <td>THB 640</td>
                <td>THB 180</td>
                <td>THB 420</td>
                <td>THB 2,800</td>
                <td><strong>THB 4,320</strong></td>
              </tr>
              <tr>
                <td><strong>Mass Affluent (Primary)</strong></td>
                <td>THB 490</td>
                <td>THB 520</td>
                <td>THB 210</td>
                <td>THB 380</td>
                <td>THB 680</td>
                <td><strong>THB 2,280</strong></td>
              </tr>
              <tr>
                <td><strong>Digital Active Mass (Primary)</strong></td>
                <td>THB 180</td>
                <td>THB 480</td>
                <td>THB 290</td>
                <td>THB 520</td>
                <td>THB 60</td>
                <td><strong>THB 1,530</strong></td>
              </tr>
              <tr>
                <td><strong>Branch-Dependent Provincial</strong></td>
                <td>THB 2,140</td>
                <td>THB 80</td>
                <td>THB 340</td>
                <td>THB 680</td>
                <td>THB 120</td>
                <td><strong>THB 3,360</strong></td>
              </tr>
              <tr>
                <td><strong>Dormant / Min Balance</strong></td>
                <td>THB 820</td>
                <td>THB 40</td>
                <td>THB 180</td>
                <td>THB 140</td>
                <td>THB 0</td>
                <td><strong>THB 1,180</strong></td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: '15px', fontSize: '14px' }}>
            <strong>Key data gaps acknowledged:</strong> (1) PRS computation required a joint 3-week data engineering workstream with MerataBank's IT team — salary credit tagging was not a standard field in the transaction database and required custom logic. (2) Cost-to-serve for branch costs is modeled on transaction frequency × average branch unit cost; actual branch fixed cost allocation involves a 40% judgment component that the CFO has reviewed and approved as directionally accurate. (3) PocketBank acquisition valuation is based on the last funding round (Series B at THB 4.2B pre-money) — actual M&amp;A pricing would require due diligence not within scope.
          </p>
        </div>
      </section>

      {/* ── CALCULATIONS ── */}
      <section>
        <h2>The Numbers: Building the Economic Profit Picture</h2>
        <div className="content">

          <p><strong>Calculation 1 — The True Size of the Exodus: CLV Destruction from Primary Relationship Migration</strong></p>
          <div className="calculation">
{`Affluent Urban Segment — Migration Impact:
  Total "retained" by CRM:                    210,000 customers
  Classified as Nominal (migrating) by PRS:    96,000 customers (46%)

  CLV lost per migrating customer:
    CLV at Primary status:   THB 142,000
    CLV at Nominal status:   THB  18,000
    CLV destruction per customer:             THB 124,000

  Total CLV destruction — Affluent Urban alone:
    96,000 × THB 124,000 =                THB 11,904,000,000
    ≈ THB 11.9 billion in lifetime value quietly leaving the balance sheet

Mass Affluent Urban Segment — Migration Impact:
  Nominal (migrating) customers:          224,000
  CLV destruction per customer:           THB 68,400 − THB 9,200 = THB 59,200
  Total CLV destruction:                  224,000 × THB 59,200 = THB 13,260,800,000
  ≈ THB 13.3 billion

Digital Active Mass — Migration Impact:
  Nominal (migrating) customers:          470,000
  CLV destruction per customer:           THB 21,600 − THB 3,400 = THB 18,200
  Total CLV destruction:                  470,000 × THB 18,200 = THB 8,554,000,000
  ≈ THB 8.6 billion

Portfolio-Level CLV Destruction Summary:
  Segment                  Migrating Customers  CLV Destroyed
  Affluent Urban                96,000          THB 11.9B
  Mass Affluent Urban          224,000          THB 13.3B
  Digital Active Mass          470,000          THB  8.6B
  ─────────────────────────────────────────────────────────
  Total (3 segments)           790,000          THB 33.8B

  ⟹ MerataBank's CRM shows 96% retention.
     Its customer economics show THB 33.8 billion in lifetime value
     is actively migrating. These are not the same thing.
     The 790,000 "nominal" customers are the engagement's primary target.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 2 — Economic Profit by Segment: Who Is Actually Worth Keeping</strong></p>
          <div className="calculation">
{`Economic Profit Formula:
  Annual Economic Profit = Annual NII per Customer − Cost-to-Serve − Cost of Capital on Deposits
  Cost of Capital on Deposits assumed at 2.8% (MerataBank's WACC on retail liabilities)

Affluent Urban — PRIMARY customers (88,000):
  Annual NII:            THB 18,400
  Cost-to-Serve:         THB  4,320
  Capital cost (est.):   THB  1,200  (avg deposit THB 420,000 × 2.8% × 10% weight)
  Economic Profit:       THB 18,400 − 4,320 − 1,200 = THB 12,880 per customer
  Segment total:         88,000 × THB 12,880 =        THB 1,133B per year  ✓ STRONGLY POSITIVE

Affluent Urban — NOMINAL customers (96,000):
  Annual NII:            THB 3,800  (degraded — no salary, few transactions)
  Cost-to-Serve:         THB 2,100  (lower activity but RM still assigned)
  Capital cost:          THB   280
  Economic Profit:       THB 3,800 − 2,100 − 280 = THB 1,420 per customer
  Segment total:         96,000 × THB 1,420 =       THB 136B per year  (marginally positive — for now)
  Trajectory: declining. Without intervention, crosses negative within 18 months.

Branch-Dependent Provincial — PRIMARY (1,393,200):
  Annual NII:            THB 2,200
  Cost-to-Serve:         THB 3,360  ← EXCEEDS NII
  Capital cost:          THB   180
  Economic Profit:       THB 2,200 − 3,360 − 180 = −THB 1,340 per customer
  Segment total:         1,393,200 × −THB 1,340 =  −THB 1,867B per year  ✗ DEEPLY NEGATIVE

Dormant / Min Balance (850,000 total):
  Annual NII:            THB 380
  Cost-to-Serve:         THB 1,180
  Economic Profit:       −THB 800 per customer
  Segment total:         850,000 × −THB 800 =       −THB 680B per year   ✗ NEGATIVE

Full Portfolio Economic Profit Summary:
  Segment                         Customers    Econ Profit/Customer  Total Econ Profit
  Affluent Urban (Primary)           88,000         +THB 12,880          +THB 1,133B
  Affluent Urban (Nominal)           96,000         +THB 1,420           +THB  136B
  Mass Affluent (Primary)           298,000         +THB 9,840           +THB 2,932B
  Mass Affluent (Nominal)           224,000         +THB 1,180           +THB  264B
  Digital Active Mass (Primary)     376,000         +THB 4,820           +THB 1,813B
  Digital Active Mass (Nominal)     470,000         +THB 480             +THB  226B
  Branch-Dependent Provincial     1,620,000         −THB 1,340           −THB 2,171B
  Dormant / Min Balance             850,000         −THB 800             −THB  680B
  ───────────────────────────────────────────────────────────────────────────────────
  NET PORTFOLIO ECONOMIC PROFIT                                          +THB 3,653B

  The headline: MerataBank earns +THB 3,653B in economic profit — but only because
  the top three primary segments generate +THB 5,878B that cross-subsidizes
  −THB 2,851B of losses from branch-dependent and dormant customers.

  The risk: if 25% more Affluent and Mass Affluent primary customers migrate to
  nominal status over the next 24 months (the current trend rate), the cross-subsidy
  collapses and total economic profit turns negative. The margin is not comfortable.
  It is 16 months at current migration velocity.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 3 — Build vs. Buy vs. Partner: NPV of Each Investment Option</strong></p>
          <div className="calculation">
{`Investment options evaluated over 5-year horizon, WACC = 11.2%, THB billions

OPTION A — Full Digital Bank Build (CDO's Proposal):
  Capex (Year 0–2):          THB 8.0B
  Operating cost (Year 1–5): THB 1.2B/yr
  Revenue uplift (starts Y3): THB 2.8B/yr (modeled: 40% retention of nominal customers
                              + new digital acquisition 120,000 customers/yr)
  Time to meaningful impact:  30–36 months

  NPV Calculation:
  Year 0:  −THB 4.0B (first capex tranche)
  Year 1:  −THB 4.0B (second capex) − THB 1.2B opex = −THB 5.2B ÷ 1.112 = −THB 4.68B
  Year 2:  −THB 1.2B opex ÷ (1.112)² =                                    −THB 0.97B
  Year 3:  (THB 2.8B − 1.2B) ÷ (1.112)³ =                                 +THB 1.16B
  Year 4:  THB 1.6B ÷ (1.112)⁴ =                                          +THB 1.05B
  Year 5:  THB 1.6B ÷ (1.112)⁵ =                                          +THB 0.94B
  Terminal value (THB 1.6B ÷ 11.2%, disc.):                               +THB 8.11B
  ──────────────────────────────────────────────────────────────────
  NPV Option A:  −THB 4.0 − 4.68 − 0.97 + 1.16 + 1.05 + 0.94 + 8.11 = +THB 1.61B
  Execution risk: HIGH. 36-month build in a market moving fast. Bear case NPV: −THB 2.1B

OPTION B — Acquire PocketBank (1.1M users, Series B):
  Acquisition price (est.):  THB 6.8B (market comp: 1.6× revenue + user premium)
  Integration cost (Y1):     THB 0.8B
  Revenue synergy (Y2+):     THB 3.4B/yr (PocketBank users cross-sold MerataBank
                             products + MerataBank nominal customers migrated to
                             PocketBank infrastructure)
  Time to meaningful impact:  12–18 months

  NPV Calculation:
  Year 0:  −THB 6.8B acquisition
  Year 1:  −THB 0.8B integration ÷ 1.112 =                               −THB 0.72B
  Year 2:  THB 3.4B ÷ (1.112)² =                                         +THB 2.75B
  Year 3:  THB 3.4B ÷ (1.112)³ =                                         +THB 2.47B
  Year 4:  THB 3.4B ÷ (1.112)⁴ =                                         +THB 2.22B
  Year 5:  THB 3.4B ÷ (1.112)⁵ =                                         +THB 2.00B
  Terminal value (THB 3.4B ÷ 11.2%, disc.):                              +THB 17.22B
  ──────────────────────────────────────────────────────────────────
  NPV Option B:  −6.8 − 0.72 + 2.75 + 2.47 + 2.22 + 2.00 + 17.22 =    +THB 19.14B
  BUT: regulatory approval risk (Bank of Thailand) = 18-month process, uncertain outcome
  Adjusted NPV (60% approval probability):  THB 19.14B × 0.60 =          +THB 11.48B

OPTION C — Partnership + Targeted Product Build (Recommended):
  Partnership with regional BaaS provider (Synpulse/Thought Machine):
  Licensing + implementation:  THB 1.4B (Year 0–1)
  Targeted digital product enhancement (mobile app rebuild, instant account, 
  investment API):             THB 1.1B (Year 1)
  Total Investment:            THB 2.5B
  Revenue uplift (Y2+):        THB 1.9B/yr (35% nominal customer retention,
                               new digital acquisition 60,000/yr at lower burn)
  Time to meaningful impact:   12–15 months

  NPV Calculation:
  Year 0:  −THB 1.4B
  Year 1:  −THB 1.1B ÷ 1.112 =                                           −THB 0.99B
  Year 2:  THB 1.9B ÷ (1.112)² =                                         +THB 1.54B
  Year 3:  THB 1.9B ÷ (1.112)³ =                                         +THB 1.38B
  Year 4:  THB 1.9B ÷ (1.112)⁴ =                                         +THB 1.24B
  Year 5:  THB 1.9B ÷ (1.112)⁵ =                                         +THB 1.12B
  Terminal value (THB 1.9B ÷ 11.2%, disc.):                              +THB 9.62B
  ──────────────────────────────────────────────────────────────────
  NPV Option C:  −1.4 − 0.99 + 1.54 + 1.38 + 1.24 + 1.12 + 9.62 =     +THB 13.51B
  Execution risk: MODERATE. Proven platform, faster to market, preserves M&A optionality.

Comparison:
  Option                         NPV (Base)   NPV (Bear)  Time-to-Impact  Capital at Risk
  A — Full Digital Build         +THB 1.61B  −THB 2.10B    30–36 months    THB 8.0B
  B — Acquire PocketBank         +THB 11.48B  +THB 3.20B   12–18 months    THB 7.6B
  C — Partner + Targeted Build   +THB 13.51B  +THB 5.80B   12–15 months    THB 2.5B  ✓

  ⟹ Option C dominates on risk-adjusted NPV and preserves Option B (acquisition)
     as a follow-on move once regulatory pathway is clearer and integration
     risk is lower. Option A generates the lowest return on the highest capital at risk.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 4 — Branch Rationalization: The Number Nobody Wants to Say Out Loud</strong></p>
          <div className="calculation">
{`Branch Network Economics:
  Total branches:             680
  Annual branch network cost: THB 8.4B (fixed: staff, rent, maintenance, security)
  Cost per branch per year:   THB 12.4M

  Branch economic contribution analysis:
  Branches with net positive economic contribution (revenue − all allocated costs):
    Bangkok metro (92 branches):      THB +3.2B contribution  ← Protect
    Chiang Mai / Phuket urban (28):   THB +0.6B contribution  ← Protect
    Tier 2 city centers (140):        THB +0.4B contribution  ← Review
    Tier 2 suburban (180):            THB −0.8B contribution  ← Rationalize candidate
    Tier 3 provincial (240):          THB −2.9B contribution  ← Rationalize candidate
    ──────────────────────────────────────────────────────────
    Network net contribution:         THB 0.5B  (barely positive overall)

  Rationalization scenario — close 180 Tier 2 suburban + 120 Tier 3 provincial (300 total):
    Annual cost saving:               300 × THB 12.4M = THB 3.72B
    Revenue at risk (branch-dependent provincial NII from closed branches):
      Branch-dependent customers in affected branches: ~420,000
      Estimated 35% migrate to surviving branches or digital:  147,000 retained
      Estimated 65% attrite (low CLV anyway):                  273,000 lost
      Revenue lost from attrition: 273,000 × THB 2,200 NII = THB 600M
    Net economic benefit of rationalization:
      THB 3,720M saved − THB 600M revenue lost = THB 3,120M/yr improvement
      But: one-time restructuring cost (severance, lease termination) = THB 1,800M
      Payback period: THB 1,800M ÷ THB 3,120M = 0.58 years — less than 7 months

  ⟹ Branch rationalization of 300 branches generates THB 3.1B/yr in economic value —
     more than the entire NPV of Option A (full digital build).
     The branch network is not a strategic asset in Tier 2 suburban and Tier 3.
     It is the largest single source of value destruction in the retail bank.`}
          </div>
        </div>
      </section>

      {/* ── FINDINGS ── */}
      <section>
        <h2>What the Data Actually Says</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Finding 1 — MerataBank Has a Measurement Problem Before It Has a Neobank Problem</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The bank's CRM has been telling leadership a story about 96% customer retention that is structurally misleading. Of the 4.2 million "retained" customers, 790,000 have already migrated their primary banking relationship to a competitor. They hold a MerataBank account the way someone holds a gym membership they stopped using — the contract is intact, the value is gone. Building any strategy on CRM retention data without PRS adjustment is building on sand. The first deliverable of this engagement is not a recommendation — it is a new management information report. The CEO needs to see PRS-adjusted retention as a standing metric before the next board meeting.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 2 — THB 33.8 Billion in Lifetime Value Is Actively Migrating Right Now</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The 790,000 nominal customers in Affluent Urban, Mass Affluent, and Digital Active Mass segments represent THB 33.8 billion in CLV destruction relative to their potential as primary customers. This is not a forecast — it is a current-state measurement of value already degraded. Every month of inaction accelerates the migration: the open banking regulation in Q3 next year will give neobanks direct targeting capability against these exact customers. The window to intervene with a compelling counter-offer is 9–12 months, not 24.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 3 — The Branch Network Is Destroying THB 3.7 Billion Per Year in Value</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              This is the finding the Head of Retail Banking will contest most vigorously — and it is the most important finding in the engagement. The 300 Tier 2 suburban and Tier 3 provincial branches are running at a net economic loss of THB 3.7 billion per year after all costs are allocated. The customers they serve (branch-dependent provincial) are MerataBank's most loyal in attitudinal surveys and its most uneconomic in P&amp;L reality — costing THB 3,360 to serve against THB 2,200 in NII. Rationalizing 300 branches generates a payback in under 7 months and frees capital that can fund the digital investment without a net increase in total capex.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 4 — The Right Answer Is Not a Digital Bank. It Is a Digital Product.</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The CDO's THB 8 billion full digital bank build has the lowest risk-adjusted NPV of the three options modeled (+THB 1.6B base, −THB 2.1B bear case). The Partnership + Targeted Product Build generates +THB 13.5B NPV at one-third of the capital commitment and in half the time. The instinct to build a separate digital bank entity is strategically understandable — it creates organizational focus and a clean slate. The math does not support it at MerataBank's current scale. The right answer is faster, cheaper, and less glamorous: rebuild the mobile app, launch instant account opening, add an investment API, and partner with a proven BaaS platform to deliver them in 12 months rather than 36.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 5 — PocketBank Acquisition Should Be Kept Live as a Year 2 Option</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              At risk-adjusted NPV of +THB 11.5B, PocketBank is the highest-value strategic option — but regulatory approval uncertainty (estimated 60% probability of BOT approval within 24 months) and integration risk make it the wrong first move. The recommended sequencing: execute Option C (partnership + product build) immediately to slow the primary relationship migration, then revisit the PocketBank acquisition in 18 months when (a) the regulatory pathway is clearer, (b) MerataBank has a functioning digital infrastructure that makes integration more straightforward, and (c) PocketBank's Series C valuation is known. Do not foreclose the option by underinvesting now.
            </p>
          </div>
        </div>
      </section>

      {/* ── RECOMMENDATIONS ── */}
      <section>
        <h2>Recommendations: The 24-Month Playbook</h2>
        <div className="content">

          <h3 style={{ fontSize: '17px', marginBottom: '12px' }}>Immediate — Weeks 1 to 8: Stop the Bleeding</h3>
          <div className="highlight-box">
            <strong>R1. Deploy PRS as a Standing Management Report Before the Next Board Meeting</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Implement Primary Relationship Score as a live dashboard metric, updated monthly, visible to ExCo. Replace "customer retention %" with "primary relationship retention %" in all management reporting.
              <br /><strong>Why:</strong> The board cannot manage a problem it cannot see. Every month that leadership reviews a 96% retention number without understanding the PRS reality is a month in which no defensive action is taken. This is the lowest-cost, highest-urgency action in the engagement.
              <br /><strong>Owner:</strong> CFO + IT / Data Engineering
              <br /><strong>Timeline:</strong> 6 weeks from engagement close
            </p>
          </div>
          <div className="highlight-box">
            <strong>R2. Launch an Emergency Retention Program for 96,000 Nominal Affluent Urban Customers</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Identify the 96,000 Affluent Urban nominal customers by name, assign a RM or digital touchpoint to each, and deliver a personalized retention offer within 60 days. Offer options: fee waiver on wealth management products, priority access to a new investment product, or a rate improvement on existing deposits. Cost: THB 280M (estimated acquisition/retention cost per customer × 96,000). Value at stake: THB 11.9B in CLV.
              <br /><strong>Why:</strong> These 96,000 customers are the highest-CLV at-risk cohort in the bank. Each one costs less than THB 3,000 to attempt to retain and is worth THB 124,000 in CLV differential if successfully reactivated. The ROI on this program is 40:1 at even a 50% success rate.
              <br /><strong>Owner:</strong> Head of Retail Banking + Wealth Management
              <br /><strong>Expected impact:</strong> Recover 40–55% of nominal Affluent Urban customers to primary status within 12 months.
            </p>
          </div>

          <h3 style={{ fontSize: '17px', marginBottom: '12px', marginTop: '24px' }}>Months 3 to 15: The Core Investment Program</h3>
          <div className="highlight-box">
            <strong>R3. Execute Option C — THB 2.5B Partnership + Product Build</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Execute a BaaS partnership (recommended: Thought Machine Vault core banking platform) and deliver four specific product outcomes: (1) sub-3-minute digital account opening, (2) real-time mobile salary crediting with cashback incentive, (3) investment API enabling unit trust and equity access in-app, (4) instant inter-bank transfer at zero fee for primary customers.
              <br /><strong>Why:</strong> These four features represent the specific competitive gaps neobanks are exploiting. MerataBank does not need to out-feature PocketBank across 40 dimensions. It needs to close 4 specific gaps that are driving the primary relationship migration in the Affluent and Mass Affluent segments.
              <br /><strong>Owner:</strong> CDO (execution) + CEO (sponsorship)
              <br /><strong>Timeline:</strong> Contract signed Month 3; products live Month 12–15
              <br /><strong>Expected NPV:</strong> +THB 13.5B over 5 years
            </p>
          </div>
          <div className="highlight-box">
            <strong>R4. Begin Branch Rationalization — 120 Tier 3 Provincial Branches in Phase 1</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Close 120 Tier 3 provincial branches over 18 months. Phase this by converting 40 to agency banking models (lower cost, preserved access) before closing the remaining 80 outright. Conduct community impact assessments in line with BOT guidelines.
              <br /><strong>Why:</strong> These 120 branches destroy THB 1.49B per year in economic value. The one-time restructuring cost is THB 720M — a 5.8-month payback. Phase 1 funds approximately 60% of the Option C investment without any new capital raise.
              <br /><strong>Owner:</strong> Head of Retail Banking (mandated by CEO) + HR + Legal
              <br /><strong>Risk:</strong> Reputational risk in provincial communities. Mitigate through agency banking transition and proactive community communication. Do not frame as "closures" — frame as "network modernization."
            </p>
          </div>

          <h3 style={{ fontSize: '17px', marginBottom: '12px', marginTop: '24px' }}>Months 18 to 36: The Strategic Options Layer</h3>
          <div className="highlight-box">
            <strong>R5. Evaluate PocketBank Acquisition at Month 18 Checkpoint</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Commission a formal M&amp;A assessment of PocketBank at Month 18, contingent on: (a) BOT open banking regulation implementation confirming regulatory appetite for digital bank consolidation, (b) MerataBank's own digital product build being operationally stable, and (c) PocketBank's Series C pricing being known.
              <br /><strong>Why:</strong> The risk-adjusted NPV of the acquisition (+THB 11.5B) is significant. Acquiring PocketBank's 1.1 million users and digital infrastructure — once MerataBank has the integration capability to absorb it — is the highest-value strategic move available. But it must be the second move, not the first.
              <br /><strong>Owner:</strong> CEO + CFO + Head of Strategy
            </p>
          </div>
          <div className="highlight-box">
            <strong>R6. Phase 2 Branch Rationalization — 180 Tier 2 Suburban Branches</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Following Phase 1 and with digital product infrastructure live, close or convert 180 Tier 2 suburban branches. The sequencing matters: Phase 2 can only be executed credibly after MerataBank can demonstrate a viable digital alternative for migrating customers.
              <br /><strong>Why:</strong> Full rationalization of 300 branches generates THB 3.1B/yr in annual economic improvement — enough to fund the digital investment, improve the cost-to-income ratio from 64% to 48%, and make the bank investable for the next strategic phase.
              <br /><strong>Owner:</strong> Head of Retail Banking + CFO
            </p>
          </div>

          <p style={{ marginTop: '20px' }}><strong>Summary Scorecard — Base Case at 24 Months:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Current</th>
                <th>Target (Month 24)</th>
                <th>Red Line</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Primary Relationship Retention (Affluent Urban)</td>
                <td>42%</td>
                <td>≥ 68%</td>
                <td>&lt; 55% at Month 12 = program failing</td>
              </tr>
              <tr>
                <td>Economic Profit per Customer (portfolio avg)</td>
                <td>THB 870</td>
                <td>≥ THB 1,640</td>
                <td>&lt; THB 700 at Month 12 = cross-subsidy collapsing</td>
              </tr>
              <tr>
                <td>Cost-to-Income Ratio (retail banking)</td>
                <td>64%</td>
                <td>≤ 52%</td>
                <td>&gt; 66% at Month 12 = branch costs not reducing</td>
              </tr>
              <tr>
                <td>Digital Product NPS (MerataBank app)</td>
                <td>+12</td>
                <td>≥ +42</td>
                <td>&lt; +28 at Month 15 = product build underdelivering</td>
              </tr>
              <tr>
                <td>Branch Count</td>
                <td>680</td>
                <td>≤ 560 by Month 18</td>
                <td>&gt; 620 at Month 12 = rationalization stalled</td>
              </tr>
              <tr>
                <td>NII per Active Customer</td>
                <td>THB 3,904</td>
                <td>≥ THB 4,800</td>
                <td>&lt; THB 3,600 at Month 12 = migration accelerating</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── WHAT ACTUALLY HAPPENS ── */}
      <section>
        <h2>The Board Room: What Will Pass, What Will Be Fought, and How</h2>
        <div className="content">
          <p>
            The analytics produce a clear recommendation. The organization produces resistance. Here is an honest account of how this recommendation will be received and what the consulting team must do about it.
          </p>
          <div className="highlight-box">
            <strong>The CDO Will Feel Like She Lost</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              She proposed THB 8 billion. The recommendation is THB 2.5 billion. She will read this as a defeat and may attempt to position the partnership model as "half-measures that will fail." The counter is not analytical — it is strategic framing. Present Option C not as a smaller version of her vision but as <em>Phase 1 of a digital transformation that preserves the full acquisition optionality she wants</em>. The THB 2.5B build gets digital products to market 18 months faster than her build plan. The PocketBank acquisition, if it happens at Month 18, gives her everything she originally wanted — plus a live digital infrastructure to integrate into. Sequence it this way in the presentation. Give her co-ownership of the 12-month product roadmap. She will come around if she feels she is driving Phase 1, not being overruled by it.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Kriangkrai Will Come to the Meeting with a Counter-Study</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The Head of Retail Banking will arrive with branch-level customer survey data showing 84% satisfaction in Tier 3 branches and a competitor analysis claiming that branch density is positively correlated with provincial deposit market share. Both points are true. Neither is relevant to the economic profit question. The answer: "We agree the branches serve customers who value them. The question is whether MerataBank can afford to serve them at THB 1,340 per customer per year in economic loss. The branch rationalization in our recommendation affects branches where that loss is certain and growing. The remaining 380 branches — including the provincial network that underlies your SME deposit base — are protected in this plan." Separate the branches he is proud of from the ones that are destroying value. Do not let him defend them all as one.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The CFO Will Be the Strongest Internal Advocate — If You Win Her First</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Two weeks before the board presentation, give Pimolwan Charoenchai the full model — every assumption, every sensitivity, every data source. Walk through the cost-to-serve methodology with her for two hours. She will find two or three things to push back on. Fix them, or explain clearly why the direction does not change even if she is right. By the end of that session, if the work is solid, she will have internalized it as her own analysis. When Kriangkrai challenges the branch economics in the board meeting, the CFO's response will be more powerful than any consultant's. She has 22 years of institutional credibility in that room. The consulting team does not.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Regulatory Dimension Is the Wild Card</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The Bank of Thailand's open banking regulation timeline is not certain. If it is delayed beyond Q3 next year — which is plausible given the central bank's implementation history — the urgency of the recommendation diminishes and the CEO may face pressure to defer the investment. Build the case so it does not depend on the regulatory catalyst: the primary relationship migration data is real regardless of when the API regulation takes effect. The neobanks are already doing this with the data they have. The regulation makes it faster; it does not make it start. Do not let the board's hope for a regulatory delay become a reason to wait.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRACTITIONER NOTES ── */}
      <section>
        <h2>From Someone Who Has Done This Before</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>The Pattern in Banking Disintermediation Engagements</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Every incumbent bank that has faced a neobank threat has gone through the same sequence of denial. First: "their customers are different from ours." Then: "their unit economics don't work." Then: "we'll build something better in-house." By the time they arrive at "we should have moved faster two years ago," the primary relationship has already shifted for the customers that matter. The banks that survive this cycle are the ones that accept early — usually before the P&amp;L fully reflects the damage — that the threat is real, that it is targeting their best customers specifically, and that the right response is fast, focused, and cheap rather than slow, comprehensive, and expensive. MerataBank is at the "their customers are different" stage. The PRS data is the tool to move them past it.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Why the Primary Relationship Score Is the Most Important Deliverable in This Engagement</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Every analytical finding in this case — the CLV destruction, the economic profit by segment, the investment option NPVs — depends on PRS as its foundation. But PRS is also the deliverable that will outlast the engagement. If MerataBank embeds PRS as a standing management metric, it will never again mistake account retention for relationship retention. That measurement discipline is worth more than any single strategic recommendation. The consulting team should push hard to have PRS institutionalized in the management reporting framework before the engagement ends — not as a nice-to-have, but as a non-negotiable output. Recommendations get challenged. Measurement systems, once embedded, shape behavior for years.
            </p>
          </div>
          <div className="highlight-box">
            <strong>What Junior Analysts Consistently Miss in Customer Economics Engagements</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              They model the cost-to-serve at the product or channel level but forget that individual customers consume multiple channels simultaneously — a Mass Affluent customer may primarily transact digitally but calls the call center twice a year and visits a branch annually. Allocating cost-to-serve at the segment level requires tracking actual multi-channel consumption patterns, not assumed ones. The analysts who build cost-to-serve from the service log upward — "here is every interaction this customer cohort had in the last 12 months, here is the unit cost of each interaction type" — produce numbers that can withstand challenge. The analysts who estimate cost-to-serve from industry benchmarks downward produce numbers that get destroyed in the CFO's review session.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Conversation You Must Have That No Slide Deck Covers</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              At some point in this engagement — usually around Week 5 — the CEO will ask the consulting team privately: "Should we just sell the retail bank?" It is a reasonable question. If the branch rationalization is full and the digital investment underperforms, MerataBank's retail banking division has a credible strategic rationale for carve-out. The honest answer: not yet, but the option needs to be kept live. If PRS-adjusted primary retention does not improve within 18 months of the digital product launch, and if the branch economics do not recover as modeled, the retail bank becomes a strategic liability rather than a platform. The CEO needs to know this privately. The board does not need to hear it in the recommendation presentation — it would paralyze the investment decision. Keep it in the CEO's strategic file, with the metric triggers that would bring it to the board if needed. That is the difference between giving advice and just delivering a report.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Case17;
