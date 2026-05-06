const Case03 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 03</span>
        <h1>The Empty Shelf Syndrome</h1>
        <div className="case-meta">Industry: Retail / Supply Chain &bull; Level: Intermediate</div>
      </header>
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p><strong>FreshMart</strong> is a regional grocery chain with 50 locations and $420M in annual revenue. They pride themselves on "Farm-to-Table" freshness, particularly in organic produce and premium dairy. In the grocery industry, margins are razor-thin (1–3%), and profitability depends entirely on <strong>Inventory Turnover</strong> — how quickly items sell before spoiling or tying up working capital.</p>
          <p>FreshMart currently uses a <strong>Fixed Reorder Point (FRP)</strong> system: "Order more milk when stock hits 10 units." This static approach was designed in 2009 and has never been updated to account for demand volatility, local events, or perishability profiles.</p>
          <div className="highlight-box">
            <strong>Stakeholders:</strong> Inventory Manager, Category Buyers (Produce, Dairy, Dry Goods), Store Managers, CFO.<br />
            <strong>Context:</strong> FreshMart is fighting a "double-edged sword": high waste (shrinkage) in some stores and constant stockouts in others — simultaneously. Both are symptoms of the same root cause: demand forecasting that ignores variability.<br />
            <strong>Stakeholder Tension:</strong> Category Buyers are measured on Gross Margin — they resist safety stock increases because holding extra inventory reduces margin. The CFO wants waste reduced. Store Managers want full shelves. These incentives are misaligned, and analytics must resolve them by showing the true cost of each failure mode.
          </div>
        </div>
      </section>
      <section>
        <h2>2. Business Problem</h2>
        <div className="content">
          <p>The core issue is <strong>Demand Volatility</strong> that the Fixed Reorder Point system cannot handle:</p>
          <ul>
            <li><strong>Symptom A — Shrinkage:</strong> Annual waste (expired/unsold) is $1.2M. 40% of all produce waste occurs on Monday mornings — a direct result of over-ordering for the weekend that didn't sell through.</li>
            <li><strong>Symptom B — Stockouts:</strong> Estimated annual lost sales due to empty shelves: $2.5M. A neighborhood festival near Store #12 caused a 300% spike in "Grab-and-Go" salads — the central system missed it entirely.</li>
            <li><strong>Root Cause:</strong> The FRP system uses a single fixed demand estimate per SKU chain-wide. It doesn't distinguish between Store #3 (urban, high footfall) and Store #47 (suburban, weekend-heavy). It doesn't account for weather, local events, or day-of-week patterns.</li>
            <li><strong>Business Impact Quantified:</strong> $1.2M shrinkage + $2.5M lost sales = <strong>$3.7M annual drag</strong> on a business with $12.6M net profit — representing 29% of total profit destroyed by poor inventory management.</li>
            <li><strong>Risk if Ignored:</strong> FreshMart's largest competitor launched a "Never Out of Stock" guarantee last quarter. If FreshMart cannot match shelf availability, customer switching accelerates. A 1% loss in basket-level customers = ~$4.2M annual revenue loss.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <p>Transition from "Reactive Reordering" to <strong>Probabilistic Demand Forecasting</strong> — predicting demand per SKU, per store, per day, and setting dynamic safety stock accordingly.</p>
          <div className="highlight-box">
            <strong>Key Questions:</strong>
            <ol>
              <li>What is the optimal safety stock level per SKU class, accounting for both demand AND lead time variability?</li>
              <li>How much does a 1% improvement in On-Shelf Availability (OSA) contribute to total basket value (Halo Effect)?</li>
              <li>Can weather data predict demand spikes for specific categories (BBQ meat on sunny days, soup on rainy days)?</li>
              <li>What is the optimal markdown trigger for perishable items approaching expiry, to recover margin without training customers to wait for discounts?</li>
            </ol>
            <strong>Target Outcome:</strong> Reduce shrinkage by 30% ($360K saved) and reduce lost sales by 25% ($625K recovered) within 2 quarters — a combined $985K annual improvement.
          </div>
        </div>
      </section>
      <section>
        <h2>4. Data Perspective</h2>
        <div className="content">
          <p>Four data sources are integrated for this analysis:</p>
          <table className="data-table">
            <thead>
              <tr><th>Source</th><th>Key Variables</th><th>Analytics Use</th><th>Granularity</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>POS System</strong></td><td>SKU, Qty, Timestamp, Store ID, Price</td><td>Historical demand patterns</td><td>Transaction-level</td></tr>
              <tr><td><strong>ERP / WMS</strong></td><td>Lead Time (days), Order Qty, Expiry Date, Unit Cost</td><td>Supply constraints, waste tracking</td><td>Order-level</td></tr>
              <tr><td><strong>External APIs</strong></td><td>Temperature, Precipitation, Public Holidays, Local Events</td><td>Demand drivers (externalities)</td><td>Daily / Location</td></tr>
              <tr><td><strong>Loyalty Program</strong></td><td>Customer ID, Basket Composition, Visit Frequency</td><td>Halo Effect — basket abandonment on stockouts</td><td>Transaction-level</td></tr>
            </tbody>
          </table>
          <p style={{marginTop: '20px'}}><strong>Sample POS Data — Organic Avocado (Store #12, Last 10 Days):</strong></p>
          <table className="data-table">
            <thead>
              <tr><th>Date</th><th>Day</th><th>Units Sold</th><th>Temp (°F)</th><th>Stock Start</th><th>Stock End</th><th>Waste Units</th></tr>
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
            <strong>What the Data Reveals Immediately:</strong> Friday and Saturday demand (45–62 units) is 2–4x higher than Monday (15–18 units). Yet the order placed Friday for Monday delivery over-stocks by ~65 units, causing 12–20 units of waste every Monday. This is the "Monday Waste Peak" in raw data form.
          </div>
          <div className="highlight-box" style={{marginTop: '15px'}}>
            <strong>Data Limitations:</strong>
            <ul>
              <li><strong>Missing:</strong> "Regrets" data — we can see what sold, not how many customers walked away when the shelf was empty (critical for true demand estimation).</li>
              <li><strong>Missing:</strong> Supplier lead time variance — the ERP records average lead time (2 days) but not the distribution (1–5 days). This causes systematic underestimation of required safety stock.</li>
              <li><strong>Hidden Variable:</strong> Store-level weather microclimate — a store 2 miles from another can have meaningfully different weather-driven demand.</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>5. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <p>The analyst's approach follows a strict priority order — <strong>classify before calculating</strong>:</p>
          <ol>
            <li><strong>Step 1 — ABC Classification (Prioritize Where to Focus):</strong> Not all SKUs deserve equal analytical attention. We classify by sales volume × margin impact:
              <div className="calculation" style={{margin: '15px 0'}}>
{`ABC Classification Framework:
─────────────────────────────────────────────────────────────────
Class │ Criteria                    │ SKU %  │ Revenue % │ OSA Target
──────┼─────────────────────────────┼────────┼───────────┼──────────
  A   │ Top 10% SKUs by volume×margin│  10%  │   65%     │  98.5%
  B   │ Next 20% SKUs               │  20%  │   25%     │  95.0%
  C   │ Bottom 70% SKUs             │  70%  │   10%     │  85.0%
─────────────────────────────────────────────────────────────────
Examples:
Class A: Whole Milk 1L, Organic Eggs 12pk, Sourdough Bread
Class B: Greek Yogurt 500g, Cheddar Block 400g
Class C: Specialty Tahini, Organic Turmeric Powder
Priority Rule: We only build probabilistic safety stock models
for Class A SKUs first. Class C can use simple FRP — the 
analytical ROI doesn't justify the complexity.`}
              </div>
            </li>
            <li><strong>Step 2 — Decompose Demand into Components:</strong> Before forecasting, understand what drives demand:
              <ul>
                <li><strong>Baseline Demand:</strong> Average daily sales (Monday through Sunday separately — NOT a weekly average)</li>
                <li><strong>Trend:</strong> Is this SKU growing or declining YoY? (Organic avocado: +18% YoY growth)</li>
                <li><strong>Seasonality:</strong> Weekend premium (Fri/Sat = 2.8x weekday for fresh produce)</li>
                <li><strong>External Shock:</strong> Temperature &gt;75°F → +35% BBQ/produce demand. Public holiday → +60% overall, -40% day after.</li>
              </ul>
            </li>
            <li><strong>Step 3 — Model Lead Time as a Distribution, Not a Fixed Number:</strong> The FRP assumes lead time = 2 days (constant). Real lead time data shows:
              <div className="calculation" style={{margin: '15px 0'}}>
{`Lead Time Distribution (Avocado supplier, last 90 orders):
1 day:  12% of orders
2 days: 55% of orders  ← current FRP assumption
3 days: 25% of orders
4 days:  6% of orders
5 days:  2% of orders
Avg Lead Time (μLT) = 2.21 days
StdDev Lead Time (σLT) = 0.82 days
Ignoring this variance is why the simple formula
gives us 12 units of safety stock when we actually need 35.`}
              </div>
            </li>
            <li><strong>Step 4 — Calculate True Safety Stock (Extended Formula):</strong> The FRP uses the basic formula. The correct formula accounts for BOTH demand AND lead time variability.</li>
            <li><strong>Step 5 — Halo Effect Analysis (Basket-Level Impact):</strong> Using loyalty data, quantify the true cost of a stockout:
              <ul>
                <li>When "Organic Avocados" are out of stock, 15% of customers abandon their <strong>entire basket</strong> (avg basket value: $85)</li>
                <li>The true stockout cost is the <em>basket value</em>, not the item price</li>
                <li>This changes the safety stock decision significantly: holding 10 extra avocados ($18) is worth preventing even 1 basket abandonment ($85)</li>
              </ul>
            </li>
            <li><strong>Step 6 — Design Dynamic Markdown Triggers:</strong> For Class A perishables approaching expiry, design an automated markdown schedule to recover margin rather than waste:
              <ul>
                <li>48 hours to expiry + &gt;30% stock remaining → 20% discount (app/loyalty members only)</li>
                <li>24 hours to expiry + &gt;20% stock remaining → 35% discount (in-store signage)</li>
                <li>12 hours to expiry + any remaining → 50% discount or donate to food bank (ESG credit)</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>
      <section>
        <h2>6. Calculation &amp; Simulation</h2>
        <div className="content">
          <p>Safety Stock calculation: <strong>Extended Formula vs. Simple Formula</strong></p>
          <div className="calculation">
{`Item: Organic Ribeye Steak (Class A SKU)
Avg Daily Demand (μD): 20 units
StdDev of Demand (σD): 5 units
Avg Lead Time (μLT): 2 days
StdDev of Lead Time (σLT): 0.82 days
Service Level Target: 95% → Z-score = 1.645
SIMPLE FORMULA (what FreshMart currently uses):
SS_simple = Z × σD × √μLT
SS_simple = 1.645 × 5 × √2 = 1.645 × 5 × 1.414 = `}<span className="math-result">11.6 → 12 units</span>
{`
EXTENDED FORMULA (accounting for lead time variability):
SS_extended = Z × √((σD² × μLT) + (μD² × σLT²))
SS_extended = 1.645 × √((25 × 2) + (400 × 0.672))
           = 1.645 × √(50 + 268.8)
           = 1.645 × √318.8
           = 1.645 × 17.86 = `}<span className="math-result">29.4 → 30 units</span>
{`
Gap: 30 - 12 = 18 units understated safety stock!
At $12/unit cost: holding cost increase = $216/SKU/cycle
vs. stockout cost ($85 basket × 15% abandonment × avg 3 stockout events/month) = `}<span className="math-result">$38.25/event</span>
{`
Verdict: The extra safety stock EASILY pays for itself.
─────────────────────────────────────────────────────────────────
HALO EFFECT CALCULATION — True Stockout Cost
─────────────────────────────────────────────────────────────────
Item: Organic Ribeye Steak
Item Price: $25
Avg Basket Value when buying steak: $120
Stockout Frequency: ~1.5 days/month (5% of days)
Units lost per stockout day: 20 units
Loss without Halo Effect (direct):
20 units × $25 × 1.5 days = $750/month
Loss WITH Halo Effect (15% basket abandonment):
$750 + (15% × 20 × $120 × 1.5) = $750 + $540 = `}<span className="math-result">$1,290/month</span>
{`
The hidden basket abandonment cost ($540) is nearly
as large as the direct lost sales ($750).
This completely changes the safety stock business case.
─────────────────────────────────────────────────────────────────
SENSITIVITY: What if abandonment rate is only 8% (conservative)?
─────────────────────────────────────────────────────────────────
$750 + (8% × 20 × $120 × 1.5) = $750 + $288 = `}<span className="math-result">$1,038/month</span>
{`Still 38% higher than the no-halo estimate.
The business case for higher safety stock holds in all scenarios.`}
          </div>
        </div>
      </section>
      <section>
        <h2>7. Findings &amp; Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>What We Expected vs. What We Found:</strong>
            <table className="data-table" style={{marginTop: '15px'}}>
              <thead>
                <tr><th>Assumption</th><th>Expected</th><th>Actual Finding</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Main waste driver</td>
                  <td>Random overordering</td>
                  <td><strong>Systematic Monday over-order (40% of all waste on Mondays)</strong></td>
                </tr>
                <tr>
                  <td>Stockout cost</td>
                  <td>Lost item margin only</td>
                  <td><strong>True cost is 1.7x higher due to basket abandonment</strong></td>
                </tr>
                <tr>
                  <td>Premium milk stockout</td>
                  <td>Lost sale</td>
                  <td><strong>80% switch to store brand — no basket abandonment</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul style={{marginTop: '20px'}}>
            <li><strong>Weather Correlation:</strong> A temperature increase of 5°F above seasonal average correlates with a 25% spike in soft drink and charcoal sales. This is statistically significant (p &lt; 0.01) and can be incorporated into dynamic reorder triggers via Weather API.</li>
            <li><strong>The Monday Waste Peak:</strong> 40% of all produce waste occurs Monday morning. Root cause: weekend orders are placed Thursday with a Friday delivery window, systematically over-estimating weekend demand by 15%. Fix: split the weekend order into Friday delivery (for Fri/Sat) and Sunday delivery (for Mon/Tue).</li>
            <li><strong>Cannibalization Finding:</strong> When "Premium Brand A Milk" is out of stock, 80% of customers switch to "Store Brand B" — no basket abandonment. <em>Action:</em> We can accept higher stockout probability for Brand A and use the freed safety stock capital for higher-abandonment items like fresh organic berries.</li>
            <li><strong>Counter-Intuitive Insight:</strong> Holding 5% more safety stock for Class A perishables actually <em>reduces</em> total waste cost — because preventing a single basket abandonment ($85) recovers the carrying cost of 10 extra units many times over.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>8. Recommendations</h2>
        <div className="content">
          <p><strong>Short-Term (Weeks 1–6):</strong></p>
          <ul>
            <li><strong>Implement Day-of-Week Dynamic Reorder Points</strong> for all Class A SKUs. Replace a single weekly reorder point with 7 daily values based on historical day-of-week demand. <br /><strong>Expected Impact:</strong> Reduce Monday waste by 25% (~$300K annualized). <strong>Cost:</strong> 3 weeks engineering. <strong>No new data required.</strong></li>
            <li><strong>Automate Markdown Triggers</strong> for perishables with &lt;48 hours shelf life and &gt;20% stock remaining: push a 30% loyalty-app-only discount. <br /><strong>Expected Impact:</strong> Recover 40% of would-be waste as discounted revenue ($180K/year). <strong>Risk:</strong> Train customers to wait for markdowns — mitigate by limiting to loyalty members and randomizing discount timing.</li>
          </ul>
          <p><strong>Long-Term (Months 2–4):</strong></p>
          <ul>
            <li><strong>Integrate Weather API</strong> into the replenishment engine for BBQ, produce, and beverage categories. <br /><strong>Expected Impact:</strong> Reduce weather-driven stockouts by 40%, recovering ~$250K in lost sales annually.</li>
            <li><strong>Deploy Extended Safety Stock Formula</strong> chain-wide for all Class A SKUs (replacing simple formula). <br /><strong>Expected Impact:</strong> Reduce stockout frequency by 35%, saving ~$375K in basket-level lost sales. <br /><strong>Risk:</strong> Higher holding costs (~$180K/year increase) — net benefit still ~$195K/year.</li>
          </ul>
          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Priority Matrix:</strong>
            <table className="data-table">
              <thead>
                <tr><th>Action</th><th>Annual Benefit</th><th>Cost</th><th>Priority</th></tr>
              </thead>
              <tbody>
                <tr><td>Day-of-Week Reorder Points</td><td>$300K</td><td>Low</td><td>🔴 Do First</td></tr>
                <tr><td>Automated Markdown Triggers</td><td>$180K</td><td>Low</td><td>🔴 Do First</td></tr>
                <tr><td>Weather API Integration</td><td>$250K</td><td>Medium</td><td>🟡 Month 2</td></tr>
                <tr><td>Extended Safety Stock Formula</td><td>$195K net</td><td>Low</td><td>🟡 Month 2</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <h2>9. Business Decision-Making</h2>
        <div className="content">
          <p>The Category Managers and CFO align on a phased approach after seeing the full cost picture:</p>
          <ol>
            <li><strong>Re-segment the Catalog by Criticality:</strong> Group SKUs by "Halo Effect Score" (basket abandonment rate on stockout) rather than just margin. Organic Avocado gets Class A treatment even though its item margin is only $1.20 — because its stockout triggers $85 basket losses.</li>
            <li><strong>Shift to Vendor-Managed Inventory (VMI) for Top 5 Suppliers:</strong> For high-velocity Class A SKUs, give supplier visibility into real-time POS data so they can trigger replenishment proactively. <em>Reduces lead time variability from σLT=0.82 to an estimated 0.35 days.</em></li>
            <li><strong>Alternative Strategy Rejected:</strong> The Inventory Manager proposed increasing all safety stock by a flat 20%. CFO rejected this — it would increase working capital by $1.4M with no targeting logic. The analytics-driven approach achieves better results at one-quarter the cost.</li>
          </ol>
          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Monitoring Dashboard — Weekly KPIs:</strong>
            <table className="data-table">
              <thead>
                <tr><th>KPI</th><th>Current</th><th>Target (Q2)</th><th>Alert Threshold</th></tr>
              </thead>
              <tbody>
                <tr><td>On-Shelf Availability (Class A)</td><td>91%</td><td>98.5%</td><td>&lt;96% = buyer review</td></tr>
                <tr><td>Monday Waste Index</td><td>2.8x avg</td><td>1.3x avg</td><td>&gt;2.0x = flag order plan</td></tr>
                <tr><td>Shrinkage Rate (% of COGS)</td><td>1.8%</td><td>1.2%</td><td>&gt;1.6% = category review</td></tr>
                <tr><td>Basket Abandonment Rate</td><td>~15%</td><td>&lt;8%</td><td>&gt;12% = stockout investigation</td></tr>
                <tr><td>Markdown Recovery Rate</td><td>N/A (new)</td><td>&gt;60% of expiring stock</td><td>&lt;40% = trigger review</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <h2>10. Professional Analyst Mindset</h2>
        <div className="content">
          <p><strong>Senior Perspective:</strong> Beginners try to minimize waste. Seniors try to maximize <strong>Total Profitability</strong>. Sometimes, the most profitable decision is to hold extra inventory and accept a slightly higher carrying cost — because the alternative (stockout + basket abandonment) costs 5x more. The key is to never optimize one metric in isolation.</p>
          <div className="highlight-box">
            <strong>Key Lesson:</strong> Data in a silo is dangerous. If you only look at "Inventory Data," you see waste. If you merge it with "Loyalty Data," you see the <strong>Customer Relationship</strong>. The Halo Effect turns a $25 item stockout into an $85 basket loss — a finding invisible without cross-data analysis.
          </div>
          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Common Beginner Mistake:</strong> Most beginners use the Simple Safety Stock formula (Z × σD × √LT) and call it done. This formula assumes lead time is <em>constant</em> — which is almost never true in practice, especially for fresh produce where supplier delays are common. The Extended Formula, which adds σLT² to the calculation, typically produces safety stock estimates 2–3x higher. Always ask: "What assumptions does this formula make, and are those assumptions true in this context?"
          </div>
          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Interview-Ready Insight:</strong> If asked "How would you reduce grocery store waste?" in a case interview, avoid the trap of immediately saying "order less." The correct framing: <em>"First, I'd classify SKUs by criticality (ABC analysis). Then I'd understand the cost of BOTH over-ordering (waste) AND under-ordering (stockout + basket abandonment). Then I'd model demand variability at the day-of-week and weather level. The goal is not zero waste — it's optimal waste given the stockout cost tradeoff."</em>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Case03;
