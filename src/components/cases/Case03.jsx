const Case03 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 03</span>
        <h1>The Empty Shelf Syndrome</h1>
        <div className="case-meta">Industry: Retail / Supply Chain &bull; Level: Intermediate</div>
      </header>

      {/* ─── SECTION 1: BUSINESS BACKGROUND ─── */}
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p>
            <strong>FreshMart</strong> is a regional grocery chain with 50 locations and $420M in
            annual revenue. They compete in the most margin-hostile segment of retail: fresh grocery,
            where net margins run 1–3% and profitability depends entirely on{' '}
            <strong>Inventory Turnover</strong> — how quickly items sell before spoiling or tying up
            working capital.
          </p>
          <p>
            FreshMart's competitive positioning is built on "Farm-to-Table" freshness in organic
            produce and premium dairy. That positioning only holds if shelves are full. But
            FreshMart currently uses a <strong>Fixed Reorder Point (FRP)</strong> system designed
            in 2009: "Order more milk when stock hits 10 units." This static system was built for
            a world where demand was predictable and stable. That world no longer exists.
          </p>
          <div className="highlight-box">
            <strong>Stakeholders and What They Actually Care About:</strong>
            <table className="data-table" style={{marginTop: '12px'}}>
              <thead>
                <tr><th>Stakeholder</th><th>Primary Goal</th><th>Conflict Point</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>CFO</strong></td>
                  <td>Reduce $1.2M annual waste (shrinkage)</td>
                  <td>Waste reduction through safety stock cuts increases stockouts</td>
                </tr>
                <tr>
                  <td><strong>Category Buyers (Produce, Dairy)</strong></td>
                  <td>Maximize Gross Margin % on their category</td>
                  <td>Holding extra safety stock reduces margin — their bonuses depend on it</td>
                </tr>
                <tr>
                  <td><strong>Store Managers</strong></td>
                  <td>Full shelves, happy customers, no complaints</td>
                  <td>Get blamed for stockouts they can't control (ordering is centralized)</td>
                </tr>
                <tr>
                  <td><strong>Inventory Manager</strong></td>
                  <td>Reduce operational complexity</td>
                  <td>A dynamic system is harder to manage than a fixed one</td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '12px'}}>
              <strong>Competitive Trigger:</strong> FreshMart's largest regional competitor — a
              national chain with 200+ locations expanding into FreshMart's markets — launched a
              "Never Out of Stock" guarantee last quarter, backed by a $40M supply chain
              technology investment. FreshMart cannot match that capital outlay, but can compete
              analytically. A 1% loss in basket-level customers to the competitor equals{' '}
              <strong>~$4.2M annual revenue loss</strong> at current basket economics.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: BUSINESS PROBLEM ─── */}
      <section>
        <h2>2. Business Problem</h2>
        <div className="content">
          <p>
            FreshMart is simultaneously over-stocked and under-stocked — different items, different
            stores, same broken root cause:
          </p>
          <ul>
            <li>
              <strong>Symptom A — Shrinkage (Over-Supply):</strong> Annual waste from
              expired/unsold inventory: $1.2M. 40% of all produce waste occurs on Monday mornings
              — a direct result of over-ordering for the weekend that didn't fully sell through.
              The FRP system ordered the same quantity every Friday regardless of weekend weather
              or local event context.
            </li>
            <li>
              <strong>Symptom B — Stockouts (Under-Supply):</strong> Estimated annual lost sales
              from empty shelves: $2.5M. A neighborhood festival near Store #12 caused a 300%
              spike in "Grab-and-Go" salads — the central system missed it entirely. The FRP had
              no mechanism to incorporate external demand signals.
            </li>
            <li>
              <strong>Root Cause:</strong> The FRP uses a single fixed demand estimate per SKU
              chain-wide. It doesn't distinguish between Store #3 (urban, high footfall, weekday
              density) and Store #47 (suburban, weekend-heavy, event-sensitive). It doesn't
              account for weather, local events, or day-of-week patterns. Critically, it models
              lead time as a constant (2 days) when the true distribution spans 1–5 days.
            </li>
            <li>
              <strong>Business Impact:</strong> $1.2M shrinkage + $2.5M lost sales ={' '}
              <strong>$3.7M annual drag</strong> on a business with $12.6M net profit.{' '}
              <strong>29% of total profit is being destroyed by a forecasting system 15 years old.</strong>
            </li>
          </ul>
          <div className="highlight-box">
            <strong>What the Business Thinks vs. What the Data Shows:</strong>
            <table className="data-table" style={{marginTop: '12px'}}>
              <thead>
                <tr><th>Level</th><th>Stated Problem</th><th>Actual Root Cause</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Surface</td>
                  <td>"We waste too much on Mondays"</td>
                  <td>Weekend orders are placed Thursday with a Friday delivery window, systemically over-estimating weekend demand by 15%</td>
                </tr>
                <tr>
                  <td>Layer 1</td>
                  <td>"We need to order less"</td>
                  <td>Ordering less without fixing the forecasting model moves the problem from waste to stockouts</td>
                </tr>
                <tr>
                  <td>Layer 2</td>
                  <td>"Safety stock is too high"</td>
                  <td>Safety stock is calculated with the wrong formula — ignoring lead time variance causes 18-unit systematic underestimation</td>
                </tr>
                <tr>
                  <td>Root</td>
                  <td>"This is an ordering problem"</td>
                  <td>This is a demand forecasting problem — the ordering system is only as good as the forecast it receives</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: ANALYTICS OBJECTIVE ─── */}
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <p>
            Transition from "Reactive Reordering" to{' '}
            <strong>Probabilistic Demand Forecasting with Dynamic Safety Stock</strong> — predicting
            demand per SKU, per store, per day, and setting reorder points accordingly. The
            analytical approach spans all three types: descriptive (ABC classification,
            demand decomposition), predictive (safety stock modeling, weather correlation),
            and prescriptive (markdown trigger design, VMI configuration).
          </p>
          <div className="highlight-box">
            <strong>Key Questions Management Needs Answered:</strong>
            <ol>
              <li>
                What is the optimal safety stock level per SKU class, accounting for BOTH demand
                variance AND lead time variance — not just one?
              </li>
              <li>
                How much does a 1% improvement in On-Shelf Availability (OSA) contribute to total
                basket value through the Halo Effect — and how does this change the safety stock
                ROI calculation?
              </li>
              <li>
                Can weather and local events reliably predict demand spikes for specific categories
                with enough lead time to act on them?
              </li>
              <li>
                What is the optimal markdown trigger schedule for perishable items approaching
                expiry — recovering margin without training customers to wait for discounts?
              </li>
            </ol>
          </div>
          <p style={{marginTop: '16px'}}>
            <strong>Definition of Success:</strong> Reduce shrinkage by 30% ($360K saved) and
            reduce lost sales by 25% ($625K recovered) within 2 quarters — a combined{' '}
            $985K annual improvement. Full chain rollout of dynamic reorder points within 6 months.
          </p>
        </div>
      </section>

      {/* ─── SECTION 4: FRAMEWORK SELECTION (NEW) ─── */}
      <section>
        <h2>4. Framework Selection &amp; Rationale</h2>
        <div className="content">
          <p>
            Inventory optimization has a rich set of frameworks. Picking the wrong one — or
            applying a framework without understanding its assumptions — produces answers that
            are mathematically correct and operationally useless.
          </p>

          <div className="highlight-box">
            <strong>Frameworks Selected and Why:</strong>
            <table className="data-table" style={{marginTop: '12px'}}>
              <thead>
                <tr><th>Framework</th><th>Applied Where</th><th>Why This One Fits</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ABC × XYZ Classification</strong></td>
                  <td>SKU prioritization</td>
                  <td>
                    ABC ranks by revenue impact (volume × margin). XYZ ranks by demand variability
                    (X = stable, Y = moderate, Z = highly variable). An A-Z SKU (high value, highly
                    variable demand — e.g., organic avocado) needs a completely different safety
                    stock strategy than a C-X SKU (low value, stable demand — e.g., table salt).
                    Revenue-only ranking misses this dimension entirely.
                  </td>
                </tr>
                <tr>
                  <td><strong>Extended Safety Stock Formula</strong></td>
                  <td>Inventory level setting</td>
                  <td>
                    Accounts for both demand variance (σD) and lead time variance (σLT).
                    The simple formula assumes lead time is constant — almost never true for
                    fresh produce. The extended formula is the standard for continuous replenishment
                    decisions where orders repeat multiple times per week.
                  </td>
                </tr>
                <tr>
                  <td><strong>Time-Series Decomposition</strong></td>
                  <td>Demand forecasting</td>
                  <td>
                    Separates demand into baseline, trend, day-of-week seasonality, and external
                    shock components. Explains 85%+ of variance for grocery SKUs with interpretable
                    outputs — Category Buyers can understand and validate the forecast. A critical
                    requirement when the people acting on the model need to trust it.
                  </td>
                </tr>
                <tr>
                  <td><strong>Halo Effect (Basket Abandonment) Model</strong></td>
                  <td>True stockout cost calculation</td>
                  <td>
                    Replaces item-level stockout cost with basket-level cost using loyalty card
                    transaction data. Changes the safety stock ROI calculation fundamentally —
                    an $18 cost to hold 10 extra avocados is justified by preventing even one $85
                    basket abandonment.
                  </td>
                </tr>
                <tr>
                  <td><strong>Rule-Based Markdown Triggers</strong></td>
                  <td>Perishable clearance pricing</td>
                  <td>
                    Three-stage markdown rules (48h, 24h, 12h to expiry) are faster to deploy than
                    a full price optimization model, transparent to store managers, and avoid the
                    customer training problem that fully automated clearance optimization can create.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Frameworks Considered and Rejected:</strong>
            <table className="data-table" style={{marginTop: '12px'}}>
              <thead>
                <tr><th>Framework</th><th>Why Rejected</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Newsvendor Model</strong></td>
                  <td>
                    Mathematically optimal for single-period, single-order decisions (e.g., order
                    a finite batch of seasonal merchandise once). FreshMart orders avocados three
                    times per week with rolling shelf life — a continuous replenishment problem.
                    The newsvendor model assumes each order cycle is independent, which breaks
                    when you have rolling expiry constraints.
                  </td>
                </tr>
                <tr>
                  <td><strong>ML Demand Forecasting (Prophet, LSTM)</strong></td>
                  <td>
                    Would produce marginally better forecasts for high-variance SKUs but requires
                    significantly more historical data per store-SKU combination, is harder to
                    explain to Category Buyers ("the model says 47 units" is not actionable), and
                    creates a model risk management burden for a mid-size regional chain. Time-series
                    decomposition already explains 85%+ of variance — the ROI on the ML upgrade
                    doesn't justify the operational complexity.
                  </td>
                </tr>
                <tr>
                  <td><strong>Flat Safety Stock Increase (Inventory Manager's Proposal)</strong></td>
                  <td>
                    Proposed: increase all safety stock by 20% across the board. Cost: $1.4M
                    additional working capital with no targeting logic. Rejected by CFO. The
                    analytics-driven ABC × XYZ approach achieves better stockout reduction at
                    one-quarter the working capital cost by concentrating safety stock exactly where
                    Halo Effect justifies it.
                  </td>
                </tr>
                <tr>
                  <td><strong>Revenue-Only ABC Ranking</strong></td>
                  <td>
                    Pure revenue ranking misses high-abandonment items that have moderate revenue
                    but high basket drag on stockout. Organic Avocado ($3.50 margin, Class B by
                    revenue alone) generates Class A Halo Effect — 15% basket abandonment at $85
                    basket. Revenue-only ranking would give it Class B treatment and underinvest
                    in its safety stock.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{marginTop: '16px'}}>
            <strong>The Principle:</strong> In grocery analytics, the frameworks you choose must
            be explainable to Category Buyers who will act on the outputs. A slightly more
            accurate model that buyers don't trust will be overridden at the store level. A
            transparent model they understand and believe will be followed. Interpretability
            is an operational requirement, not just a design preference.
          </p>
        </div>
      </section>

      {/* ─── SECTION 5: DATA PERSPECTIVE ─── */}
      <section>
        <h2>5. Data Perspective</h2>
        <div className="content">
          <p>
            Four data sources are integrated using SKU + Store ID + Date as the composite join
            key. All four sources must resolve to this granularity before analysis:
          </p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Key Variables</th>
                <th>Indicator Type</th>
                <th>Analytics Use</th>
                <th>Granularity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>POS System</strong></td>
                <td>SKU, Qty Sold, Timestamp, Store ID, Price</td>
                <td>Lagging (records what sold, not what was demanded)</td>
                <td>Historical demand patterns, baseline modeling</td>
                <td>Transaction-level</td>
              </tr>
              <tr>
                <td><strong>ERP / WMS</strong></td>
                <td>Lead Time (days), Order Qty, Expiry Date, Unit Cost, Supplier ID</td>
                <td>Lagging</td>
                <td>Supply constraints, lead time variance modeling, waste tracking</td>
                <td>Order-level</td>
              </tr>
              <tr>
                <td><strong>External APIs</strong></td>
                <td>Temperature, Precipitation, Public Holidays, Local Events, Day of Week</td>
                <td>Leading (available in advance for forecasting)</td>
                <td>Demand shock variables — the only truly forward-looking signal</td>
                <td>Daily / Location</td>
              </tr>
              <tr>
                <td><strong>Loyalty Program</strong></td>
                <td>Customer ID, Basket Composition, Visit Frequency, Abandonment Events</td>
                <td>Lagging (records completed transactions)</td>
                <td>Halo Effect measurement — basket abandonment rate by stockout SKU</td>
                <td>Transaction-level</td>
              </tr>
            </tbody>
          </table>

          <p style={{marginTop: '20px'}}><strong>Sample POS Data — Organic Avocado (Store #12, Last 10 Days):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th><th>Day</th><th>Units Sold</th><th>Temp (°F)</th>
                <th>Stock Start</th><th>Stock End</th><th>Waste Units</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Mon 5/1</td><td>Mon</td><td>18</td><td>62</td><td>95</td><td>77</td><td>0</td></tr>
              <tr><td>Tue 5/2</td><td>Tue</td><td>22</td><td>65</td><td>77</td><td>55</td><td>0</td></tr>
              <tr><td>Wed 5/3</td><td>Wed</td><td>25</td><td>68</td><td>55</td><td>30</td><td>0</td></tr>
              <tr><td>Thu 5/4</td><td>Thu</td><td>28</td><td>72</td><td>80</td><td>52</td><td>0</td></tr>
              <tr><td>Fri 5/5</td><td>Fri</td><td>45</td><td>78</td><td>52</td><td>7</td><td>0</td></tr>
              <tr><td>Sat 5/6</td><td>Sat</td><td>62</td><td>82</td><td>120</td><td>58</td><td>0</td></tr>
              <tr><td>Sun 5/7</td><td>Sun</td><td>48</td><td>79</td><td>58</td><td>10</td><td>0</td></tr>
              <tr><td>Mon 5/8</td><td>Mon</td><td>15</td><td>61</td><td>80</td><td>65</td><td>12</td></tr>
              <tr><td>Tue 5/9</td><td>Tue</td><td>20</td><td>64</td><td>65</td><td>45</td><td>8</td></tr>
              <tr><td>Wed 5/10</td><td>Wed</td><td>23</td><td>67</td><td>45</td><td>22</td><td>0</td></tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{marginTop: '15px'}}>
            <strong>What the Raw Data Reveals Immediately:</strong> Friday and Saturday demand
            (45–62 units) is 2–4x higher than Monday (15–18 units). Yet the Friday order placed
            for Monday delivery over-stocks by ~65 units, causing 12–20 units of waste every
            Monday morning. Temperature also correlates visibly — all high-demand days (Fri–Sun)
            coincide with warmer temperatures (78–82°F). This is the Monday Waste Peak and the
            weather signal, readable directly from 10 rows of data before any model is built.
          </div>

          <div className="highlight-box" style={{marginTop: '15px'}}>
            <strong>Data Limitations &amp; Hidden Variables:</strong>
            <ul>
              <li>
                <strong>Missing — "Regrets" Data:</strong> POS records what sold, not how many
                customers wanted an item and found it empty. True demand on stockout days is
                invisible — we can see that Friday showed 45 units sold with 7 units remaining,
                but we cannot see how many customers arrived after the last 7 sold. Workaround:
                use loyalty card "visited but didn't purchase in category" events as a proxy.
              </li>
              <li>
                <strong>Missing — Lead Time Variance Distribution:</strong> ERP records average
                lead time (2 days) but not the distribution. The distribution matters enormously
                for safety stock — a 2-day average with a 1-day standard deviation requires
                nearly 3x more safety stock than a 2-day average with no variance. This is the
                single most common cause of safety stock underestimation.
              </li>
              <li>
                <strong>Hidden Variable — Store Microclimate:</strong> Weather API data is
                typically measured at a metropolitan level. Store #12 (near a river) and Store
                #47 (inland, 2 miles away) can have meaningfully different weather-driven demand.
                Use store-specific temperature sensors where possible.
              </li>
              <li>
                <strong>Structural Bias — Cannibalization:</strong> When a premium SKU is out of
                stock, customers may substitute to a store-brand equivalent. POS shows the
                store-brand sale, not the premium stockout. This understates stockout frequency
                for premium items and overstates store-brand demand — both distort the model.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: STEP-BY-STEP ANALYTICAL THINKING ─── */}
      <section>
        <h2>6. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <p>
            <strong>Classify before calculating.</strong> Building a sophisticated safety stock
            model for 15,000 SKUs is a waste of time. 70% of SKUs represent 10% of revenue. We
            apply analytical complexity exactly where the ROI justifies it.
          </p>
          <ol>
            <li>
              <strong>Step 1 — ABC × XYZ Classification (Prioritize Where to Focus):</strong>
              <div className="calculation" style={{margin: '15px 0'}}>
{`ABC × XYZ Matrix:
────────────────────────────────────────────────────────────────────
         │ X (Stable Demand) │ Y (Moderate Var.) │ Z (High Var.)
─────────┼───────────────────┼───────────────────┼───────────────────
Class A  │ Whole Milk 1L     │ Organic Eggs 12pk │ Organic Avocado
(High    │ Simple FRP works  │ Extended SS Formula│ Extended SS +
 Value)  │ OSA target: 98.5% │ OSA target: 98.5% │ Weather Trigger
─────────┼───────────────────┼───────────────────┼───────────────────
Class B  │ Cheddar Block 400g│ Greek Yogurt 500g │ Seasonal Berries
(Mid     │ Simple FRP works  │ Day-of-week adjust│ Extended SS +
 Value)  │ OSA target: 95%   │ OSA target: 95%   │ Manual review
─────────┼───────────────────┼───────────────────┼───────────────────
Class C  │ Table Salt 1kg    │ Specialty Tahini  │ Organic Turmeric
(Low     │ FRP as-is         │ FRP as-is         │ Accept higher OOS
 Value)  │ OSA target: 85%   │ OSA target: 85%   │ OSA target: 80%

Priority Rule: Build probabilistic safety stock models for A-Z and
A-Y SKUs first. Class C can use simple FRP — the analytical ROI
doesn't justify the model complexity.`}
              </div>
            </li>

            <li>
              <strong>Step 2 — Decompose Demand into Components:</strong> Before forecasting,
              understand what is driving demand at each level:
              <ul>
                <li>
                  <strong>Baseline:</strong> Average daily sales by day-of-week separately
                  (NOT a weekly average — Monday and Saturday are completely different products
                  from a demand perspective)
                </li>
                <li>
                  <strong>Trend:</strong> Is this SKU growing or declining YoY? (Organic
                  avocado: +18% YoY growth — baseline must be adjusted upward)
                </li>
                <li>
                  <strong>Seasonality:</strong> Friday/Saturday premium (2.8x weekday for
                  fresh produce); summer premium (+35% for BBQ/produce in warm months)
                </li>
                <li>
                  <strong>External Shock:</strong> Temperature above seasonal avg +5°F →
                  +25% soft drink / charcoal demand. Public holiday → +60% overall, -40% day
                  after. Local events → category-specific spikes (festivals → grab-and-go,
                  sports events → snacks/beer)
                </li>
              </ul>
              <div className="calculation" style={{margin: '15px 0'}}>
{`TIME-SERIES DECOMPOSITION — Worked Example: Organic Avocado, Store #12
Formula: Forecast(day) = Baseline × Trend_adj × Seasonality_factor × Shock_multiplier
──────────────────────────────────────────────────────────────────────────────────────
Step 1 — Baseline (avg weekday demand, store-specific from 12-month POS history):
  Mon–Thu average: 23 units/day

Step 2 — Trend Adjustment (YoY growth rate):
  Organic avocado growth: +18%/year → daily multiplier: 1.18
  Trend-adjusted baseline: 23 × 1.18 = 27.1 units/day

Step 3 — Day-of-Week Seasonality Factor (derived from POS, store-specific):
  Monday:   0.67x  |  Tuesday:  0.81x  |  Wednesday: 0.92x
  Thursday: 1.03x  |  Friday:   1.66x  |  Saturday:  2.29x  |  Sunday: 1.77x

Step 4 — External Shock Multiplier:
  This Saturday: 82°F (14°F above seasonal baseline of 68°F)
  Weather coefficient for fresh produce: +2.5% per degree above baseline
  Shock multiplier: 1 + (14 × 0.025) = 1.35x

Final Forecast — Saturday at 82°F:
  27.1 × 2.29 × 1.35 = `}<span className="math-result">83.7 → Order 84 units base demand</span>
{`
FRP system (static, no decomposition): orders 80 units → `}<span className="math-result">STOCKOUT by mid-afternoon</span>
{`Time-series model: orders 84 + 30 safety stock = 114 units → `}<span className="math-result">FULL COVERAGE</span>
{`
Why decomposition matters for Category Buyer trust:
"We ordered 114 units because Saturday demand is 2.3x weekday,
this weekend is 14°F warmer than normal (+35%), and we carry
30 units of safety stock for a Class A-Z SKU."
A buyer can validate or challenge each component — unlike a
black-box ML prediction that says "order 114" with no explanation.`}
              </div>
            </li>

            <li>
              <strong>Step 3 — Model Lead Time as a Distribution, Not a Constant:</strong> The
              FRP assumes lead time = 2 days (always). The actual distribution for the avocado
              supplier looks like this:
              <div className="calculation" style={{margin: '15px 0'}}>
{`Lead Time Distribution (Avocado supplier, last 90 orders):
────────────────────────────────────────────────────────
1 day:  12% of orders
2 days: 55% of orders  ← what FRP assumes is always true
3 days: 25% of orders
4 days:  6% of orders
5 days:  2% of orders
────────────────────────────────────────────────────────
Mean Lead Time (μLT):   2.21 days
StdDev Lead Time (σLT): 0.82 days

WHY THIS MATTERS:
The simple safety stock formula ignores σLT entirely.
This is why it gives 12 units when you actually need 30.
A 4-day delivery on a Friday order means shelves are empty
all weekend — the highest-demand period. The consequence of
ignoring lead time variance is not random — it's systematic.`}
              </div>
            </li>

            <li>
              <strong>Step 4 — Calculate True Safety Stock (Extended Formula):</strong> The
              Extended Formula adds lead time variance to the calculation. Here is the
              mathematical reasoning: demand uncertainty compounds over the lead time period,
              AND lead time uncertainty scales with demand level. The formula{' '}
              <em>μD² × σLT²</em> captures this second interaction term that the simple formula
              misses entirely. See Section 7 for full worked calculation.
            </li>

            <li>
              <strong>Step 5 — Halo Effect Analysis (True Cost of a Stockout):</strong> Using
              loyalty data, we identify whether stockouts cause customers to (a) substitute within
              the store, (b) reduce basket size, or (c) abandon the basket entirely. The answer
              varies by SKU and changes the safety stock decision:
              <ul>
                <li>
                  <strong>High Abandonment (A-Z SKUs):</strong> Organic Avocado — 15% of customers
                  abandon the full basket ($85 avg). Safety stock carrying cost is justified at
                  almost any reasonable holding cost.
                </li>
                <li>
                  <strong>Low Abandonment (Substitutable SKUs):</strong> Premium Brand A Milk —
                  80% of customers switch to Store Brand B. No basket abandonment. We can accept
                  higher stockout probability and redeploy that safety stock budget elsewhere.
                </li>
              </ul>
            </li>

            <li>
              <strong>Step 6 — Design Dynamic Markdown Triggers for Perishables:</strong> For
              Class A perishables approaching expiry, automate a three-stage markdown to recover
              margin rather than write off waste:
              <ul>
                <li>
                  <strong>Stage 1 — 48 hours to expiry, &gt;30% stock remaining:</strong> 20%
                  discount pushed to loyalty app (members only, not visible in-store). Creates
                  urgency without training the general public to wait.
                </li>
                <li>
                  <strong>Stage 2 — 24 hours to expiry, &gt;20% stock remaining:</strong> 35%
                  discount with in-store shelf tag. Visible to all customers.
                </li>
                <li>
                  <strong>Stage 3 — 12 hours to expiry, any remaining:</strong> 50% discount
                  or donate to local food bank (ESG credit + tax benefit). Never bin product
                  that can be donated.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      {/* ─── SECTION 7: CALCULATION & SIMULATION ─── */}
      <section>
        <h2>7. Calculation &amp; Simulation</h2>
        <div className="content">
          <p><strong>Calculation 1: Extended vs. Simple Safety Stock Formula</strong></p>
          <div className="calculation">
{`Item: Organic Ribeye Steak (Class A-Y SKU)
─────────────────────────────────────────────────────────────────────
Input Variables:
Avg Daily Demand (μD):   20 units
StdDev of Demand (σD):    5 units
Avg Lead Time (μLT):      2 days
StdDev of Lead Time (σLT): 0.82 days
Service Level Target: 95% → Z-score = 1.645
─────────────────────────────────────────────────────────────────────
SIMPLE FORMULA (current FreshMart system):
SS_simple = Z × σD × √μLT
SS_simple = 1.645 × 5 × √2
          = 1.645 × 5 × 1.414 = `}<span className="math-result">11.6 → 12 units</span>
{`
─────────────────────────────────────────────────────────────────────
EXTENDED FORMULA (accounting for both variances):
SS_extended = Z × √((σD² × μLT) + (μD² × σLT²))

Breaking down the terms:
  Term 1: σD² × μLT = 25 × 2 = 50  ← demand uncertainty
  Term 2: μD² × σLT² = 400 × 0.672 = 268.8  ← lead time uncertainty
  Combined: √(50 + 268.8) = √318.8 = 17.86

SS_extended = 1.645 × 17.86 = `}<span className="math-result">29.4 → 30 units</span>
{`
─────────────────────────────────────────────────────────────────────
WHAT THE GAP MEANS IN BUSINESS TERMS:
18-unit gap × $12/unit cost = $216 extra holding cost per cycle
vs. stockout cost (3 events/month × basket abandonment):
  $85 basket × 15% abandonment × 20 customers × 3 events = `}<span className="math-result">$765/month in prevented losses</span>
{`
ROI of the additional 18 units: `}<span className="math-result">3.5x per cycle</span>
          </div>

          <p style={{marginTop: '20px'}}><strong>Calculation 2: Halo Effect — True Stockout Cost</strong></p>
          <div className="calculation">
{`Item: Organic Avocado (Class A-Z SKU)
─────────────────────────────────────────────────────────────────────
Item Margin: $1.20 | Avg Basket Value when avocado is in cart: $85
Stockout Frequency: ~1.5 days/month (5% of days, concentrated weekends)
Units unmet per stockout day: 20 units
Basket Abandonment Rate (loyalty data): 15%

DIRECT LOST SALES ONLY:
20 units × $1.20 margin × 1.5 days = `}<span className="math-result">$36/month</span>
{`
FULL HALO EFFECT COST:
$36 + (15% × 20 customers × $85 basket × 1.5 days) = $36 + $382.50 = `}<span className="math-result">$418.50/month</span>
{`
Halo multiplier: `}<span className="math-result">11.6x the direct margin loss</span>
{`
SENSITIVITY — If abandonment rate is only 8% (conservative):
$36 + (8% × 20 × $85 × 1.5) = $36 + $204 = `}<span className="math-result">$240/month — still 6.7x direct cost</span>
{`
This changes the inventory decision completely.
The safety stock ROI holds across all reasonable abandonment assumptions.
─────────────────────────────────────────────────────────────────────
CONTRAST: Premium Brand A Milk (80% substitution, no abandonment)
Direct loss: 15 units × $0.40 margin × 1.5 days = $9/month
Halo Effect: near-zero (customers switch to store brand)
True stockout cost: `}<span className="math-result">~$9/month → LOW safety stock priority</span>
          </div>

          <p style={{marginTop: '20px'}}><strong>Calculation 3: Weather-Adjusted Demand and the Cost of Ignoring It</strong></p>
          <div className="calculation">
{`Item: Organic Avocado — Saturday at 82°F (14°F above seasonal avg of 68°F)
─────────────────────────────────────────────────────────────────────
Baseline Saturday demand (68°F): 46 units
Weather coefficient (fresh produce): +2.5% demand per degree above baseline
Weather-adjusted demand: 46 × (1 + 14 × 0.025) = 46 × 1.35 = `}<span className="math-result">62 units</span>
{`
Standard FRP order (no weather adjustment): 80 units → sufficient
But add safety stock (12 units simple formula): order 68 units → STOCKOUT by 3PM
Extended formula safety stock (30 units): order 76 units → barely sufficient

WITH WEATHER INTEGRATION:
Forecast: 62 + safety stock (30) = `}<span className="math-result">Order 92 units → Full coverage</span>
{`
Cost of weather blindness on this single Saturday:
Direct missed sales: 16 units × $1.20 = $19.20
Basket abandonment: 16 customers × 15% × $85 = $204
Total cost of one weather-blind Saturday: `}<span className="math-result">$223.20</span>
{`Annualized for 20 warm Saturdays/year: `}<span className="math-result">$4,464 for this single SKU at this single store</span>
{`Chain-wide (50 stores × top 30 weather-sensitive SKUs): `}<span className="math-result">~$250K/year recoverable</span>
          </div>

          <p style={{marginTop: '20px'}}><strong>Calculation 4: Markdown Recovery Rate</strong></p>
          <div className="calculation">
{`Monthly perishable waste before markdown program: $100,000 in COGS
Units that expire vs. sell through with discount:
  Without markdowns: 100% waste cost absorbed
  Stage 1 (48h, 20% off): recovers 45% of units at 80% margin → 36% recovery
  Stage 2 (24h, 35% off): recovers 30% of units at 65% margin → 19.5% recovery
  Stage 3 (12h, 50% off / donate): recovers 15% at 50% margin → 7.5% recovery
  Remaining waste: 10% → 100% loss

Total margin recovered via markdowns vs. 100% write-off:
(36% + 19.5% + 7.5%) × $100,000 = `}<span className="math-result">$63,000 recovered per month</span>
{`vs. $0 without the program
Annual markdown recovery value: `}<span className="math-result">~$756,000 in prevented waste</span>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: FINDINGS & INSIGHTS ─── */}
      <section>
        <h2>8. Findings &amp; Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>What We Expected vs. What We Found:</strong>
            <table className="data-table" style={{marginTop: '15px'}}>
              <thead>
                <tr>
                  <th>Assumption Going In</th>
                  <th>Expected</th>
                  <th>Actual Finding</th>
                  <th>Confidence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Main waste driver</td>
                  <td>Random over-ordering across categories</td>
                  <td><strong>Systematic Monday waste peak — 40% of all produce waste on Mondays, from a single structural ordering pattern</strong></td>
                  <td>High — confirmed across 12 months of data</td>
                </tr>
                <tr>
                  <td>True stockout cost</td>
                  <td>Lost item margin only</td>
                  <td><strong>True cost is 11.6x higher for A-Z SKUs due to basket abandonment (Halo Effect)</strong></td>
                  <td>High — validated from loyalty card data</td>
                </tr>
                <tr>
                  <td>Premium milk stockout behavior</td>
                  <td>Basket abandonment, same as avocado</td>
                  <td><strong>80% substitute to store brand — no basket abandonment. Safety stock budget should be reallocated away from milk toward high-Halo items</strong></td>
                  <td>High — loyalty substitution data, consistent across 6 months</td>
                </tr>
                <tr>
                  <td>Weather signal usefulness</td>
                  <td>Weak — too noisy to be actionable</td>
                  <td><strong>Temperature correlation is statistically significant (p &lt; 0.01) and 3-day forecasts give enough lead time to act</strong></td>
                  <td>High — 18-month regression, multiple categories</td>
                </tr>
                <tr>
                  <td>Markdown program customer training risk</td>
                  <td>Customers will learn to wait for discounts</td>
                  <td><strong>Directionally, loyalty-only Stage 1 discounts show no detectable shift in full-price purchase timing — but needs 6 more months to confirm</strong></td>
                  <td>Medium — early data only, monitor closely</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul style={{marginTop: '20px'}}>
            <li>
              <strong>The Monday Waste Peak:</strong> 40% of all produce waste occurs Monday
              morning. Root cause: weekend orders are placed Thursday with a Friday delivery
              window, systematically over-estimating weekend demand by 15%. Fix is simple and
              free — split the single weekend order into a Friday delivery (for Fri/Sat demand)
              and a Sunday delivery (sized for Mon/Tue). No new technology required.
            </li>
            <li>
              <strong>The Safety Stock Formula Gap:</strong> The simple formula understates
              required safety stock by 18 units for Organic Ribeye Steak alone. Across all
              Class A-Z SKUs (estimated 40 items), the chain is systematically under-stocked
              by the equivalent of $86K in safety stock — but the stockout cost this generates
              is estimated at $375K annually. The additional holding cost of $180K net produces
              a $195K net annual benefit.
            </li>
            <li>
              <strong>Counter-Intuitive — Safety Stock and Waste Move Together:</strong> Holding
              5% more safety stock for Class A perishables actually reduces total waste cost.
              The mechanism: more safety stock → fewer stockouts → fewer basket abandonments →
              more customers complete their full shop → higher basket attachment → fewer partial
              orders that lead to irregular residual stock. The carrying cost increase is more
              than offset by the waste reduction from more predictable sell-through.
            </li>
            <li>
              <strong>The Cannibalization Realignment:</strong> When Premium Brand A Milk is out
              of stock, 80% of customers switch to Store Brand B with no basket impact. This
              means the safety stock capital allocated to Premium Brand A Milk is overcapitalized.
              Redeploying it to Organic Berries (high abandonment, high Halo) produces a better
              total return on the same working capital.
            </li>
          </ul>
        </div>
      </section>

      {/* ─── SECTION 9: RECOMMENDATIONS (THREE TIERS) ─── */}
      <section>
        <h2>9. Recommendations</h2>
        <div className="content">

          <p><strong>Tier 1 — Immediate Actions (Weeks 1–6): Zero New Technology Required</strong></p>
          <ul>
            <li>
              <strong>Action:</strong> Split weekend orders into Friday delivery (Fri/Sat demand)
              and Sunday delivery (Mon/Tue demand).<br />
              <strong>Why:</strong> Directly addresses the Monday Waste Peak — the single most
              concentrated waste source in the portfolio.<br />
              <strong>Owner:</strong> Inventory Manager + Category Buyers<br />
              <strong>Expected Impact:</strong> Reduce Monday produce waste by 25–35%.
              Annualized: ~$300K. Cost: zero (scheduling change only).<br />
              <strong>Key Risk:</strong> Suppliers may not support Sunday delivery windows for
              all products. Verify top 10 Class A supplier delivery schedules before committing.
            </li>
            <li>
              <strong>Action:</strong> Deploy day-of-week dynamic reorder points for all Class
              A SKUs — replace one weekly reorder point with 7 daily values from historical
              day-of-week demand.<br />
              <strong>Owner:</strong> Inventory Manager + IT (ERP configuration)<br />
              <strong>Expected Impact:</strong> Reduce OSA gap on Fridays/Saturdays, recovering
              ~$150K in weekend lost sales. Cost: 3 weeks engineering.<br />
              <strong>Key Risk:</strong> Category Buyers will resist because it changes their
              ordering workflow. Show them the Monday Waste cost data first — buy-in precedes
              system change.
            </li>
            <li>
              <strong>Action:</strong> Launch Automated Markdown Triggers for Class A perishables
              approaching expiry (48h, 24h, 12h protocol).<br />
              <strong>Owner:</strong> Category Buyers + Loyalty App Team<br />
              <strong>Expected Impact:</strong> Recover ~$756K/year in markdown revenue vs.
              write-off. Reduces visible waste, supports Farm-to-Table brand positioning.<br />
              <strong>Key Risk:</strong> Customer training — limit Stage 1 to loyalty members
              only and randomize timing window (±2 hours) to prevent predictable discount
              hunting.
            </li>
          </ul>

          <p><strong>Tier 2 — Medium-Term Initiatives (Months 2–4): Require Technology Investment</strong></p>
          <ul>
            <li>
              <strong>Action:</strong> Integrate Weather API into the replenishment engine for
              BBQ, fresh produce, and beverage categories.<br />
              <strong>Owner:</strong> Data Science + Inventory Manager<br />
              <strong>Expected Impact:</strong> Recover ~$250K in weather-driven stockout losses.
              Model is built on 18 months of historical correlation — deploy as a daily
              adjustment multiplier on the base forecast.<br />
              <strong>Key Risk:</strong> Store managers may override weather-driven orders if
              the forecast feels too aggressive. Build in an override log — track every
              human override and score them against actual demand 7 days later to demonstrate
              model accuracy.
            </li>
            <li>
              <strong>Action:</strong> Deploy Extended Safety Stock Formula chain-wide for all
              Class A-Z and A-Y SKUs (replacing simple formula).<br />
              <strong>Owner:</strong> Data Science + Inventory Manager<br />
              <strong>Expected Impact:</strong> Reduce stockout frequency by 35%, saving ~$375K
              in basket-level lost sales. Additional holding cost: ~$180K/year. Net benefit:
              ~$195K/year.<br />
              <strong>Key Risk:</strong> CFO will see working capital increase ($180K) before
              seeing the stockout reduction (lagging by 1–2 months). Brief CFO on timing gap
              before deployment.
            </li>
            <li>
              <strong>Action:</strong> Reallocate safety stock budget from low-Halo items (Premium
              Brand A Milk) to high-Halo items (Organic Berries, Grab-and-Go). Total working
              capital is unchanged — the mix shifts.<br />
              <strong>Owner:</strong> Category Buyers + CFO sign-off<br />
              <strong>Expected Impact:</strong> Higher basket retention without increasing total
              inventory investment. Estimated $120K reduction in basket abandonment losses.<br />
              <strong>Key Risk:</strong> Category Buyers are measured by category margin. A milk
              buyer has no incentive to reduce milk safety stock that benefits the produce
              category. Requires a cross-category KPI (basket retention rate) to align incentives.
            </li>
          </ul>

          <p><strong>Tier 3 — Strategic Moves (Months 6–18): Transformational</strong></p>
          <ul>
            <li>
              <strong>Action:</strong> Launch Vendor-Managed Inventory (VMI) with the top 5
              suppliers by Class A volume (representing ~60% of high-velocity SKU revenue).<br />
              <strong>Owner:</strong> Inventory Manager + Procurement + Supplier Account Teams<br />
              <strong>Expected Impact:</strong> Give suppliers real-time POS visibility so they
              trigger replenishment proactively. Reduces lead time variance from σLT = 0.82 to
              an estimated 0.35 days, reducing required safety stock by ~35% while maintaining
              the same service level. Estimated working capital release: $490K.<br />
              <strong>Key Risk:</strong> Suppliers gain visibility into your sell-through velocity
              — competitive intelligence risk. Mitigate by sharing only category-level and
              SKU-level data, never basket-level customer data.
            </li>
            <li>
              <strong>Action:</strong> Build a Demand Sensing Engine — a store-level ML model
              that incorporates local event calendars, social media signals (local events
              promoted on neighborhood apps), and competitive pricing signals.<br />
              <strong>Owner:</strong> Data Science + Product<br />
              <strong>Expected Impact:</strong> Estimated 15% further reduction in
              stockout-related lost sales (~$375K incremental). Requires 12 months of data
              from the time-series decomposition model to train on.<br />
              <strong>Key Risk:</strong> High implementation complexity. Only viable after
              Tier 1 and Tier 2 improvements are live and generating clean labeled outcome data.
              Build the simpler model first. Always.
            </li>
          </ul>

          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Priority Matrix (Impact × Effort):</strong>
            <table className="data-table">
              <thead>
                <tr><th>Action</th><th>Annual Benefit</th><th>Effort</th><th>Owner</th><th>Priority</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Split Weekend Delivery Window</td>
                  <td>$300K</td><td>None</td>
                  <td>Inventory Manager</td>
                  <td>🔴 This Week</td>
                </tr>
                <tr>
                  <td>Day-of-Week Reorder Points</td>
                  <td>$150K</td><td>Low (3 wks eng)</td>
                  <td>IT + Inventory</td>
                  <td>🔴 Do First</td>
                </tr>
                <tr>
                  <td>Automated Markdown Triggers</td>
                  <td>$756K</td><td>Low–Medium</td>
                  <td>Category + Loyalty App</td>
                  <td>🔴 Do First</td>
                </tr>
                <tr>
                  <td>Weather API Integration</td>
                  <td>$250K</td><td>Medium</td>
                  <td>Data Science</td>
                  <td>🟡 Month 2</td>
                </tr>
                <tr>
                  <td>Extended Safety Stock Formula</td>
                  <td>$195K net</td><td>Low</td>
                  <td>Data Science</td>
                  <td>🟡 Month 2</td>
                </tr>
                <tr>
                  <td>Safety Stock Budget Reallocation</td>
                  <td>$120K</td><td>Low (policy change)</td>
                  <td>CFO + Category Buyers</td>
                  <td>🟡 Month 3</td>
                </tr>
                <tr>
                  <td>Vendor-Managed Inventory (VMI)</td>
                  <td>$490K capital release</td><td>High</td>
                  <td>Procurement</td>
                  <td>🟢 Month 9+</td>
                </tr>
                <tr>
                  <td>Demand Sensing Engine (ML)</td>
                  <td>$375K incremental</td><td>Very High</td>
                  <td>Data Science</td>
                  <td>🟢 Month 15+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: BUSINESS DECISION-MAKING ─── */}
      <section>
        <h2>10. Business Decision-Making</h2>
        <div className="content">
          <p>
            The CFO and Category Buyers reach alignment only after seeing the full cost picture —
            specifically, the Halo Effect calculation that shows a $25 steak stockout is actually
            an $120 basket event. The framing shifts from "inventory cost" to "customer retention cost."
          </p>
          <ol>
            <li>
              <strong>Re-segment the Catalog by Halo Effect Score:</strong> Group SKUs by basket
              abandonment rate on stockout, not just item margin. Organic Avocado gets Class A
              treatment despite its $1.20 item margin because its stockout triggers $85 basket
              losses. This is the central insight that unlocks the Category Buyer buy-in —
              the buyer who resisted safety stock increases now understands that stockouts in
              their category cost the store more than their category's own margin.
            </li>
            <li>
              <strong>Align Category Buyer Incentives:</strong> The current system measures
              Category Buyers on Gross Margin % for their category. This creates a structural
              incentive against safety stock. Add a secondary KPI: Basket Retention Rate on
              stockout events (measured via loyalty data). Buyers who minimize stockout-related
              basket abandonment get a higher performance weighting, even if their category
              margin is slightly lower due to extra holding costs.
            </li>
            <li>
              <strong>Alternative Strategy Rejected:</strong> The Inventory Manager proposed
              a flat 20% safety stock increase across all SKUs. The CFO rejected this — it
              would increase working capital by $1.4M with no targeting logic. The analytics-driven
              approach (ABC × XYZ + Halo Effect prioritization) achieves better stockout reduction
              at one-quarter the working capital by focusing exactly where basket economics justify it.
            </li>
          </ol>

          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Monitoring Dashboard — Weekly KPIs:</strong>
            <table className="data-table">
              <thead>
                <tr><th>KPI</th><th>Current</th><th>Target (Q2)</th><th>Alert Threshold</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>On-Shelf Availability (Class A)</td>
                  <td>91%</td><td>98.5%</td>
                  <td>&lt;96% → buyer review within 48h</td>
                </tr>
                <tr>
                  <td>Monday Waste Index</td>
                  <td>2.8x avg day</td><td>1.3x avg day</td>
                  <td>&gt;2.0x → flag weekend order plan</td>
                </tr>
                <tr>
                  <td>Shrinkage Rate (% of COGS)</td>
                  <td>1.8%</td><td>1.2%</td>
                  <td>&gt;1.6% → category-level investigation</td>
                </tr>
                <tr>
                  <td>Basket Abandonment Rate (loyalty)</td>
                  <td>~15%</td><td>&lt;8%</td>
                  <td>&gt;12% → stockout investigation by SKU</td>
                </tr>
                <tr>
                  <td>Markdown Recovery Rate</td>
                  <td>N/A (new)</td><td>&gt;60% of expiring stock recovered</td>
                  <td>&lt;40% → review trigger timing and discount depth</td>
                </tr>
                <tr>
                  <td>Weather Override Accuracy</td>
                  <td>N/A (new)</td><td>Model beats human override 70%+ of the time</td>
                  <td>&lt;60% → retrain weather coefficients</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── SECTION 11: WAR ROOM NOTES ─── */}
      <section>
        <h2>11. Senior Practitioner's War Room Notes</h2>
        <div className="content">

          <div className="highlight-box">
            <strong>The Pattern I've Seen Kill This Type of Project:</strong>
            <p style={{marginTop: '8px'}}>
              Every grocery analytics engagement I've worked starts with the same brief: "Help
              us reduce waste." The waste is visible — it's sitting in a dumpster every Monday
              morning. The stockout problem is invisible — you cannot see what you didn't sell.
              So the first wave of analysis reduces waste, holding costs drop, the CFO is happy,
              and six months later a new competitor has captured 3% of your basket customers
              because your shelves were empty every Friday afternoon. The correct brief is not
              "reduce waste" — it's "optimize the total cost of inventory decisions, including
              the cost you cannot see on a P&L."
            </p>
          </div>

          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>What Junior Analysts Always Miss:</strong>
            <p style={{marginTop: '8px'}}>
              The safety stock formula assumptions. Every analyst learns the formula (Z × σD ×
              √LT) and applies it. Almost no one checks whether the formula's core assumption —
              that lead time is a constant — is true in their context. In fresh grocery, where
              supplier delays are weather-dependent and delivery trucks are shared across routes,
              lead time variance is a 3x multiplier on required safety stock. Ask "what does this
              formula assume?" for every formula you use. If the assumption doesn't hold, the
              formula doesn't hold — and neither does your recommendation.
            </p>
          </div>

          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>The Most Common Mistake Companies Make:</strong>
            <p style={{marginTop: '8px'}}>
              Optimizing safety stock per SKU in isolation. The right approach is portfolio
              safety stock — a fixed working capital budget allocated to where it generates the
              highest return. Milk and avocados compete for the same working capital. The Halo
              Effect analysis shows you which one deserves more of it. Without the cross-SKU
              view, you end up with every Category Buyer lobbying for more safety stock for
              their own items, and no one optimizing the portfolio. The CFO sets the budget;
              analytics allocates it.
            </p>
          </div>

          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>What a Great Analyst Does Differently:</strong>
            <p style={{marginTop: '8px'}}>
              They measure what the business cannot see. Stockout cost is invisible on a P&L —
              you can see waste (it's a line item), but lost sales appear nowhere. The great
              analyst builds a "demand shadow" — an estimate of what would have sold if the
              shelf had been full, derived from loyalty card behavior on stockout days. The
              shadow demand estimate turns the invisible cost into a number the CFO can act on.
              Without it, you will never win the argument against waste reduction at the expense
              of stockout increase.
            </p>
          </div>

          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>On Vendor-Managed Inventory — The Resistance You Will Face:</strong>
            <p style={{marginTop: '8px'}}>
              When I recommend VMI, procurement teams push back: "We can't give suppliers our
              sell-through data — that's competitive intelligence." Here is the reality: your
              top 5 suppliers already buy syndicated retail data from Nielsen and IRI. They
              know your sell-through within a 2-week lag. You are protecting information that
              isn't actually secret. What you get in return — reduced lead time variance, fewer
              emergency orders, and a supplier who manages their own logistics to keep your
              shelves full — is worth far more than the illusion of data secrecy. I have not
              seen a VMI implementation in fresh grocery that was not ROI-positive within 12 months.
            </p>
          </div>

          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Interview-Ready Insight:</strong>
            <p style={{marginTop: '8px'}}>
              If asked "How would you reduce grocery store waste?" avoid the trap of saying
              "order less." The correct framing:{' '}
              <em>"First, I'd classify SKUs by both revenue impact and demand variability (ABC × XYZ)
              to prioritize where analytical complexity is justified. Second, I'd measure the true
              cost of BOTH failure modes — over-stock waste and under-stock basket abandonment —
              because optimizing one without the other moves the problem, it doesn't solve it.
              Third, I'd replace the simple safety stock formula with the extended formula that
              accounts for lead time variance — the most common source of systematic
              underestimation. Fourth, I'd integrate weather data as the only truly leading signal
              available. And fifth, I'd re-align Category Buyer incentives from gross margin %
              to basket retention rate — because the people making daily ordering decisions need
              a KPI that rewards full shelves, not just low holding costs."</em>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Case03;
