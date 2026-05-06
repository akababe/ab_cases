// const Case03 = () => {
//   return (
//     <div className="case-study">
//       <header className="case-header">
//         <span className="case-number">Use Case 03</span>
//         <h1>The Empty Shelf Syndrome</h1>
//         <div className="case-meta">Industry: Retail / Supply Chain &bull; Level: Intermediate</div>
//       </header>
//       <section>
//         <h2>1. Business Background</h2>
//         <div className="content">
//           <p><strong>FreshMart</strong> is a regional grocery chain with 50 locations and $420M in annual revenue. They pride themselves on "Farm-to-Table" freshness, particularly in organic produce and premium dairy. In the grocery industry, margins are razor-thin (1–3%), and profitability depends entirely on <strong>Inventory Turnover</strong> — how quickly items sell before spoiling or tying up working capital.</p>
//           <p>FreshMart currently uses a <strong>Fixed Reorder Point (FRP)</strong> system: "Order more milk when stock hits 10 units." This static approach was designed in 2009 and has never been updated to account for demand volatility, local events, or perishability profiles.</p>
//           <div className="highlight-box">
//             <strong>Stakeholders:</strong> Inventory Manager, Category Buyers (Produce, Dairy, Dry Goods), Store Managers, CFO.<br />
//             <strong>Context:</strong> FreshMart is fighting a "double-edged sword": high waste (shrinkage) in some stores and constant stockouts in others — simultaneously. Both are symptoms of the same root cause: demand forecasting that ignores variability.<br />
//             <strong>Stakeholder Tension:</strong> Category Buyers are measured on Gross Margin — they resist safety stock increases because holding extra inventory reduces margin. The CFO wants waste reduced. Store Managers want full shelves. These incentives are misaligned, and analytics must resolve them by showing the true cost of each failure mode.
//           </div>
//         </div>
//       </section>
//       <section>
//         <h2>2. Business Problem</h2>
//         <div className="content">
//           <p>The core issue is <strong>Demand Volatility</strong> that the Fixed Reorder Point system cannot handle:</p>
//           <ul>
//             <li><strong>Symptom A — Shrinkage:</strong> Annual waste (expired/unsold) is $1.2M. 40% of all produce waste occurs on Monday mornings — a direct result of over-ordering for the weekend that didn't sell through.</li>
//             <li><strong>Symptom B — Stockouts:</strong> Estimated annual lost sales due to empty shelves: $2.5M. A neighborhood festival near Store #12 caused a 300% spike in "Grab-and-Go" salads — the central system missed it entirely.</li>
//             <li><strong>Root Cause:</strong> The FRP system uses a single fixed demand estimate per SKU chain-wide. It doesn't distinguish between Store #3 (urban, high footfall) and Store #47 (suburban, weekend-heavy). It doesn't account for weather, local events, or day-of-week patterns.</li>
//             <li><strong>Business Impact Quantified:</strong> $1.2M shrinkage + $2.5M lost sales = <strong>$3.7M annual drag</strong> on a business with $12.6M net profit — representing 29% of total profit destroyed by poor inventory management.</li>
//             <li><strong>Risk if Ignored:</strong> FreshMart's largest competitor launched a "Never Out of Stock" guarantee last quarter. If FreshMart cannot match shelf availability, customer switching accelerates. A 1% loss in basket-level customers = ~$4.2M annual revenue loss.</li>
//           </ul>
//         </div>
//       </section>
//       <section>
//         <h2>3. Analytics Objective</h2>
//         <div className="content">
//           <p>Transition from "Reactive Reordering" to <strong>Probabilistic Demand Forecasting</strong> — predicting demand per SKU, per store, per day, and setting dynamic safety stock accordingly.</p>
//           <div className="highlight-box">
//             <strong>Key Questions:</strong>
//             <ol>
//               <li>What is the optimal safety stock level per SKU class, accounting for both demand AND lead time variability?</li>
//               <li>How much does a 1% improvement in On-Shelf Availability (OSA) contribute to total basket value (Halo Effect)?</li>
//               <li>Can weather data predict demand spikes for specific categories (BBQ meat on sunny days, soup on rainy days)?</li>
//               <li>What is the optimal markdown trigger for perishable items approaching expiry, to recover margin without training customers to wait for discounts?</li>
//             </ol>
//             <strong>Target Outcome:</strong> Reduce shrinkage by 30% ($360K saved) and reduce lost sales by 25% ($625K recovered) within 2 quarters — a combined $985K annual improvement.
//           </div>
//         </div>
//       </section>
//       <section>
//         <h2>4. Data Perspective</h2>
//         <div className="content">
//           <p>Four data sources are integrated for this analysis:</p>
//           <table className="data-table">
//             <thead>
//               <tr><th>Source</th><th>Key Variables</th><th>Analytics Use</th><th>Granularity</th></tr>
//             </thead>
//             <tbody>
//               <tr><td><strong>POS System</strong></td><td>SKU, Qty, Timestamp, Store ID, Price</td><td>Historical demand patterns</td><td>Transaction-level</td></tr>
//               <tr><td><strong>ERP / WMS</strong></td><td>Lead Time (days), Order Qty, Expiry Date, Unit Cost</td><td>Supply constraints, waste tracking</td><td>Order-level</td></tr>
//               <tr><td><strong>External APIs</strong></td><td>Temperature, Precipitation, Public Holidays, Local Events</td><td>Demand drivers (externalities)</td><td>Daily / Location</td></tr>
//               <tr><td><strong>Loyalty Program</strong></td><td>Customer ID, Basket Composition, Visit Frequency</td><td>Halo Effect — basket abandonment on stockouts</td><td>Transaction-level</td></tr>
//             </tbody>
//           </table>
//           <p style={{marginTop: '20px'}}><strong>Sample POS Data — Organic Avocado (Store #12, Last 10 Days):</strong></p>
//           <table className="data-table">
//             <thead>
//               <tr><th>Date</th><th>Day</th><th>Units Sold</th><th>Temp (°F)</th><th>Stock Start</th><th>Stock End</th><th>Waste Units</th></tr>
//             </thead>
//             <tbody>
//               <tr><td>Mon 5/1</td><td>Mon</td><td>18</td><td>62</td><td>95</td><td>77</td><td>0</td></tr>
//               <tr><td>Tue 5/2</td><td>Tue</td><td>22</td><td>65</td><td>77</td><td>55</td><td>0</td></tr>
//               <tr><td>Wed 5/3</td><td>Wed</td><td>25</td><td>68</td><td>55</td><td>30</td><td>0</td></tr>
//               <tr><td>Thu 5/4</td><td>Thu</td><td>28</td><td>72</td><td>80</td><td>52</td><td>0</td></tr>
//               <tr><td>Fri 5/5</td><td>Fri</td><td>45</td><td>78</td><td>52</td><td>7</td><td>0</td></tr>
//               <tr><td>Sat 5/6</td><td>Sat</td><td>62</td><td>82</td><td>120</td><td>58</td><td>0</td></tr>
//               <tr><td>Sun 5/7</td><td>Sun</td><td>48</td><td>79</td><td>58</td><td>10</td><td>0</td></tr>
//               <tr><td>Mon 5/8</td><td>Mon</td><td>15</td><td>61</td><td>80</td><td>65</td><td>12</td></tr>
//               <tr><td>Tue 5/9</td><td>Tue</td><td>20</td><td>64</td><td>65</td><td>45</td><td>8</td></tr>
//               <tr><td>Wed 5/10</td><td>Wed</td><td>23</td><td>67</td><td>45</td><td>22</td><td>0</td></tr>
//             </tbody>
//           </table>
//           <div className="highlight-box" style={{marginTop: '15px'}}>
//             <strong>What the Data Reveals Immediately:</strong> Friday and Saturday demand (45–62 units) is 2–4x higher than Monday (15–18 units). Yet the order placed Friday for Monday delivery over-stocks by ~65 units, causing 12–20 units of waste every Monday. This is the "Monday Waste Peak" in raw data form.
//           </div>
//           <div className="highlight-box" style={{marginTop: '15px'}}>
//             <strong>Data Limitations:</strong>
//             <ul>
//               <li><strong>Missing:</strong> "Regrets" data — we can see what sold, not how many customers walked away when the shelf was empty (critical for true demand estimation).</li>
//               <li><strong>Missing:</strong> Supplier lead time variance — the ERP records average lead time (2 days) but not the distribution (1–5 days). This causes systematic underestimation of required safety stock.</li>
//               <li><strong>Hidden Variable:</strong> Store-level weather microclimate — a store 2 miles from another can have meaningfully different weather-driven demand.</li>
//             </ul>
//           </div>
//         </div>
//       </section>
//       <section>
//         <h2>5. Step-by-Step Analytical Thinking</h2>
//         <div className="content">
//           <p>The analyst's approach follows a strict priority order — <strong>classify before calculating</strong>:</p>
//           <ol>
//             <li><strong>Step 1 — ABC Classification (Prioritize Where to Focus):</strong> Not all SKUs deserve equal analytical attention. We classify by sales volume × margin impact:
//               <div className="calculation" style={{margin: '15px 0'}}>
// {`ABC Classification Framework:
// ─────────────────────────────────────────────────────────────────
// Class │ Criteria                    │ SKU %  │ Revenue % │ OSA Target
// ──────┼─────────────────────────────┼────────┼───────────┼──────────
//   A   │ Top 10% SKUs by volume×margin│  10%  │   65%     │  98.5%
//   B   │ Next 20% SKUs               │  20%  │   25%     │  95.0%
//   C   │ Bottom 70% SKUs             │  70%  │   10%     │  85.0%
// ─────────────────────────────────────────────────────────────────
// Examples:
// Class A: Whole Milk 1L, Organic Eggs 12pk, Sourdough Bread
// Class B: Greek Yogurt 500g, Cheddar Block 400g
// Class C: Specialty Tahini, Organic Turmeric Powder
// Priority Rule: We only build probabilistic safety stock models
// for Class A SKUs first. Class C can use simple FRP — the 
// analytical ROI doesn't justify the complexity.`}
//               </div>
//             </li>
//             <li><strong>Step 2 — Decompose Demand into Components:</strong> Before forecasting, understand what drives demand:
//               <ul>
//                 <li><strong>Baseline Demand:</strong> Average daily sales (Monday through Sunday separately — NOT a weekly average)</li>
//                 <li><strong>Trend:</strong> Is this SKU growing or declining YoY? (Organic avocado: +18% YoY growth)</li>
//                 <li><strong>Seasonality:</strong> Weekend premium (Fri/Sat = 2.8x weekday for fresh produce)</li>
//                 <li><strong>External Shock:</strong> Temperature &gt;75°F → +35% BBQ/produce demand. Public holiday → +60% overall, -40% day after.</li>
//               </ul>
//             </li>
//             <li><strong>Step 3 — Model Lead Time as a Distribution, Not a Fixed Number:</strong> The FRP assumes lead time = 2 days (constant). Real lead time data shows:
//               <div className="calculation" style={{margin: '15px 0'}}>
// {`Lead Time Distribution (Avocado supplier, last 90 orders):
// 1 day:  12% of orders
// 2 days: 55% of orders  ← current FRP assumption
// 3 days: 25% of orders
// 4 days:  6% of orders
// 5 days:  2% of orders
// Avg Lead Time (μLT) = 2.21 days
// StdDev Lead Time (σLT) = 0.82 days
// Ignoring this variance is why the simple formula
// gives us 12 units of safety stock when we actually need 35.`}
//               </div>
//             </li>
//             <li><strong>Step 4 — Calculate True Safety Stock (Extended Formula):</strong> The FRP uses the basic formula. The correct formula accounts for BOTH demand AND lead time variability.</li>
//             <li><strong>Step 5 — Halo Effect Analysis (Basket-Level Impact):</strong> Using loyalty data, quantify the true cost of a stockout:
//               <ul>
//                 <li>When "Organic Avocados" are out of stock, 15% of customers abandon their <strong>entire basket</strong> (avg basket value: $85)</li>
//                 <li>The true stockout cost is the <em>basket value</em>, not the item price</li>
//                 <li>This changes the safety stock decision significantly: holding 10 extra avocados ($18) is worth preventing even 1 basket abandonment ($85)</li>
//               </ul>
//             </li>
//             <li><strong>Step 6 — Design Dynamic Markdown Triggers:</strong> For Class A perishables approaching expiry, design an automated markdown schedule to recover margin rather than waste:
//               <ul>
//                 <li>48 hours to expiry + &gt;30% stock remaining → 20% discount (app/loyalty members only)</li>
//                 <li>24 hours to expiry + &gt;20% stock remaining → 35% discount (in-store signage)</li>
//                 <li>12 hours to expiry + any remaining → 50% discount or donate to food bank (ESG credit)</li>
//               </ul>
//             </li>
//           </ol>
//         </div>
//       </section>
//       <section>
//         <h2>6. Calculation &amp; Simulation</h2>
//         <div className="content">
//           <p>Safety Stock calculation: <strong>Extended Formula vs. Simple Formula</strong></p>
//           <div className="calculation">
// {`Item: Organic Ribeye Steak (Class A SKU)
// Avg Daily Demand (μD): 20 units
// StdDev of Demand (σD): 5 units
// Avg Lead Time (μLT): 2 days
// StdDev of Lead Time (σLT): 0.82 days
// Service Level Target: 95% → Z-score = 1.645
// SIMPLE FORMULA (what FreshMart currently uses):
// SS_simple = Z × σD × √μLT
// SS_simple = 1.645 × 5 × √2 = 1.645 × 5 × 1.414 = `}<span className="math-result">11.6 → 12 units</span>
// {`
// EXTENDED FORMULA (accounting for lead time variability):
// SS_extended = Z × √((σD² × μLT) + (μD² × σLT²))
// SS_extended = 1.645 × √((25 × 2) + (400 × 0.672))
//            = 1.645 × √(50 + 268.8)
//            = 1.645 × √318.8
//            = 1.645 × 17.86 = `}<span className="math-result">29.4 → 30 units</span>
// {`
// Gap: 30 - 12 = 18 units understated safety stock!
// At $12/unit cost: holding cost increase = $216/SKU/cycle
// vs. stockout cost ($85 basket × 15% abandonment × avg 3 stockout events/month) = `}<span className="math-result">$38.25/event</span>
// {`
// Verdict: The extra safety stock EASILY pays for itself.
// ─────────────────────────────────────────────────────────────────
// HALO EFFECT CALCULATION — True Stockout Cost
// ─────────────────────────────────────────────────────────────────
// Item: Organic Ribeye Steak
// Item Price: $25
// Avg Basket Value when buying steak: $120
// Stockout Frequency: ~1.5 days/month (5% of days)
// Units lost per stockout day: 20 units
// Loss without Halo Effect (direct):
// 20 units × $25 × 1.5 days = $750/month
// Loss WITH Halo Effect (15% basket abandonment):
// $750 + (15% × 20 × $120 × 1.5) = $750 + $540 = `}<span className="math-result">$1,290/month</span>
// {`
// The hidden basket abandonment cost ($540) is nearly
// as large as the direct lost sales ($750).
// This completely changes the safety stock business case.
// ─────────────────────────────────────────────────────────────────
// SENSITIVITY: What if abandonment rate is only 8% (conservative)?
// ─────────────────────────────────────────────────────────────────
// $750 + (8% × 20 × $120 × 1.5) = $750 + $288 = `}<span className="math-result">$1,038/month</span>
// {`Still 38% higher than the no-halo estimate.
// The business case for higher safety stock holds in all scenarios.`}
//           </div>
//         </div>
//       </section>
//       <section>
//         <h2>7. Findings &amp; Insights</h2>
//         <div className="content">
//           <div className="highlight-box">
//             <strong>What We Expected vs. What We Found:</strong>
//             <table className="data-table" style={{marginTop: '15px'}}>
//               <thead>
//                 <tr><th>Assumption</th><th>Expected</th><th>Actual Finding</th></tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Main waste driver</td>
//                   <td>Random overordering</td>
//                   <td><strong>Systematic Monday over-order (40% of all waste on Mondays)</strong></td>
//                 </tr>
//                 <tr>
//                   <td>Stockout cost</td>
//                   <td>Lost item margin only</td>
//                   <td><strong>True cost is 1.7x higher due to basket abandonment</strong></td>
//                 </tr>
//                 <tr>
//                   <td>Premium milk stockout</td>
//                   <td>Lost sale</td>
//                   <td><strong>80% switch to store brand — no basket abandonment</strong></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <ul style={{marginTop: '20px'}}>
//             <li><strong>Weather Correlation:</strong> A temperature increase of 5°F above seasonal average correlates with a 25% spike in soft drink and charcoal sales. This is statistically significant (p &lt; 0.01) and can be incorporated into dynamic reorder triggers via Weather API.</li>
//             <li><strong>The Monday Waste Peak:</strong> 40% of all produce waste occurs Monday morning. Root cause: weekend orders are placed Thursday with a Friday delivery window, systematically over-estimating weekend demand by 15%. Fix: split the weekend order into Friday delivery (for Fri/Sat) and Sunday delivery (for Mon/Tue).</li>
//             <li><strong>Cannibalization Finding:</strong> When "Premium Brand A Milk" is out of stock, 80% of customers switch to "Store Brand B" — no basket abandonment. <em>Action:</em> We can accept higher stockout probability for Brand A and use the freed safety stock capital for higher-abandonment items like fresh organic berries.</li>
//             <li><strong>Counter-Intuitive Insight:</strong> Holding 5% more safety stock for Class A perishables actually <em>reduces</em> total waste cost — because preventing a single basket abandonment ($85) recovers the carrying cost of 10 extra units many times over.</li>
//           </ul>
//         </div>
//       </section>
//       <section>
//         <h2>8. Recommendations</h2>
//         <div className="content">
//           <p><strong>Short-Term (Weeks 1–6):</strong></p>
//           <ul>
//             <li><strong>Implement Day-of-Week Dynamic Reorder Points</strong> for all Class A SKUs. Replace a single weekly reorder point with 7 daily values based on historical day-of-week demand. <br /><strong>Expected Impact:</strong> Reduce Monday waste by 25% (~$300K annualized). <strong>Cost:</strong> 3 weeks engineering. <strong>No new data required.</strong></li>
//             <li><strong>Automate Markdown Triggers</strong> for perishables with &lt;48 hours shelf life and &gt;20% stock remaining: push a 30% loyalty-app-only discount. <br /><strong>Expected Impact:</strong> Recover 40% of would-be waste as discounted revenue ($180K/year). <strong>Risk:</strong> Train customers to wait for markdowns — mitigate by limiting to loyalty members and randomizing discount timing.</li>
//           </ul>
//           <p><strong>Long-Term (Months 2–4):</strong></p>
//           <ul>
//             <li><strong>Integrate Weather API</strong> into the replenishment engine for BBQ, produce, and beverage categories. <br /><strong>Expected Impact:</strong> Reduce weather-driven stockouts by 40%, recovering ~$250K in lost sales annually.</li>
//             <li><strong>Deploy Extended Safety Stock Formula</strong> chain-wide for all Class A SKUs (replacing simple formula). <br /><strong>Expected Impact:</strong> Reduce stockout frequency by 35%, saving ~$375K in basket-level lost sales. <br /><strong>Risk:</strong> Higher holding costs (~$180K/year increase) — net benefit still ~$195K/year.</li>
//           </ul>
//           <div className="highlight-box" style={{marginTop: '20px'}}>
//             <strong>Priority Matrix:</strong>
//             <table className="data-table">
//               <thead>
//                 <tr><th>Action</th><th>Annual Benefit</th><th>Cost</th><th>Priority</th></tr>
//               </thead>
//               <tbody>
//                 <tr><td>Day-of-Week Reorder Points</td><td>$300K</td><td>Low</td><td>🔴 Do First</td></tr>
//                 <tr><td>Automated Markdown Triggers</td><td>$180K</td><td>Low</td><td>🔴 Do First</td></tr>
//                 <tr><td>Weather API Integration</td><td>$250K</td><td>Medium</td><td>🟡 Month 2</td></tr>
//                 <tr><td>Extended Safety Stock Formula</td><td>$195K net</td><td>Low</td><td>🟡 Month 2</td></tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>
//       <section>
//         <h2>9. Business Decision-Making</h2>
//         <div className="content">
//           <p>The Category Managers and CFO align on a phased approach after seeing the full cost picture:</p>
//           <ol>
//             <li><strong>Re-segment the Catalog by Criticality:</strong> Group SKUs by "Halo Effect Score" (basket abandonment rate on stockout) rather than just margin. Organic Avocado gets Class A treatment even though its item margin is only $1.20 — because its stockout triggers $85 basket losses.</li>
//             <li><strong>Shift to Vendor-Managed Inventory (VMI) for Top 5 Suppliers:</strong> For high-velocity Class A SKUs, give supplier visibility into real-time POS data so they can trigger replenishment proactively. <em>Reduces lead time variability from σLT=0.82 to an estimated 0.35 days.</em></li>
//             <li><strong>Alternative Strategy Rejected:</strong> The Inventory Manager proposed increasing all safety stock by a flat 20%. CFO rejected this — it would increase working capital by $1.4M with no targeting logic. The analytics-driven approach achieves better results at one-quarter the cost.</li>
//           </ol>
//           <div className="highlight-box" style={{marginTop: '20px'}}>
//             <strong>Monitoring Dashboard — Weekly KPIs:</strong>
//             <table className="data-table">
//               <thead>
//                 <tr><th>KPI</th><th>Current</th><th>Target (Q2)</th><th>Alert Threshold</th></tr>
//               </thead>
//               <tbody>
//                 <tr><td>On-Shelf Availability (Class A)</td><td>91%</td><td>98.5%</td><td>&lt;96% = buyer review</td></tr>
//                 <tr><td>Monday Waste Index</td><td>2.8x avg</td><td>1.3x avg</td><td>&gt;2.0x = flag order plan</td></tr>
//                 <tr><td>Shrinkage Rate (% of COGS)</td><td>1.8%</td><td>1.2%</td><td>&gt;1.6% = category review</td></tr>
//                 <tr><td>Basket Abandonment Rate</td><td>~15%</td><td>&lt;8%</td><td>&gt;12% = stockout investigation</td></tr>
//                 <tr><td>Markdown Recovery Rate</td><td>N/A (new)</td><td>&gt;60% of expiring stock</td><td>&lt;40% = trigger review</td></tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>
//       <section>
//         <h2>10. Professional Analyst Mindset</h2>
//         <div className="content">
//           <p><strong>Senior Perspective:</strong> Beginners try to minimize waste. Seniors try to maximize <strong>Total Profitability</strong>. Sometimes, the most profitable decision is to hold extra inventory and accept a slightly higher carrying cost — because the alternative (stockout + basket abandonment) costs 5x more. The key is to never optimize one metric in isolation.</p>
//           <div className="highlight-box">
//             <strong>Key Lesson:</strong> Data in a silo is dangerous. If you only look at "Inventory Data," you see waste. If you merge it with "Loyalty Data," you see the <strong>Customer Relationship</strong>. The Halo Effect turns a $25 item stockout into an $85 basket loss — a finding invisible without cross-data analysis.
//           </div>
//           <div className="highlight-box" style={{marginTop: '20px'}}>
//             <strong>Common Beginner Mistake:</strong> Most beginners use the Simple Safety Stock formula (Z × σD × √LT) and call it done. This formula assumes lead time is <em>constant</em> — which is almost never true in practice, especially for fresh produce where supplier delays are common. The Extended Formula, which adds σLT² to the calculation, typically produces safety stock estimates 2–3x higher. Always ask: "What assumptions does this formula make, and are those assumptions true in this context?"
//           </div>
//           <div className="highlight-box" style={{marginTop: '20px'}}>
//             <strong>Interview-Ready Insight:</strong> If asked "How would you reduce grocery store waste?" in a case interview, avoid the trap of immediately saying "order less." The correct framing: <em>"First, I'd classify SKUs by criticality (ABC analysis). Then I'd understand the cost of BOTH over-ordering (waste) AND under-ordering (stockout + basket abandonment). Then I'd model demand variability at the day-of-week and weather level. The goal is not zero waste — it's optimal waste given the stockout cost tradeoff."</em>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default Case03;


const Case08 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Studi Kasus 08</span>
        <h1>Titik Buta Atribusi</h1>
        <div className="case-meta">Industri: Media / CPG / Periklanan &bull; Level: Lanjutan</div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Latar Belakang Bisnis</h2>
        <div className="content">
          <p>
            <strong>SparkBev</strong> adalah perusahaan minuman global terkemuka. Tahun lalu, mereka menghabiskan{" "}
            <strong>$120 Juta</strong> untuk pemasaran di berbagai saluran: TV, YouTube, Facebook, Google
            Search, dan pajangan di dalam toko (In-store displays).
          </p>
          <p>
            Dalam dunia periklanan, "Cawan Suci" (Holy Grail) adalah mengetahui dengan pasti dolar mana yang dihabiskan berujung pada dolar mana yang dihasilkan. Ini adalah domain dari <strong>Pemodelan Bauran Pemasaran (Marketing Mix Modeling - MMM)</strong>.
          </p>
          <div className="highlight-box">
            <strong>Pemangku Kepentingan:</strong> Chief Marketing Officer (CMO), Direktur Keuangan, Manajer Merek.
            <br />
            <strong>Konteks:</strong> Saluran digital (Facebook/Google) melaporkan ROAS "Klik-Terakhir" yang tinggi, tetapi total penjualan perusahaan stagnan. CMO mencurigai bahwa platform digital mengambil kredit atas penjualan yang seharusnya tetap terjadi. Direktur Keuangan mengancam akan memotong anggaran pemasaran sebesar $20 juta kecuali ROI dapat dibuktikan secara ilmiah.
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. Krisis Atribusi: Mengupas Lapisan-Lapisan</h2>
        <div className="content">
          <p>
            SparkBev menderita karena <strong>"Atribusi yang Terfragmentasi."</strong> Namun, ini sebenarnya menutupi empat masalah yang berbeda. Seorang analis senior tidak memperlakukan mereka sebagai satu masalah — mereka mendiagnosis setiap lapisan secara terpisah.
          </p>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>LAPISAN 1 — Kejenuhan (Imbal Hasil yang Berkurang)</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "14px" }}>
              Tim pemasaran terus meningkatkan anggaran Facebook, tetapi penjualan inkremental per dolar terus turun. Mereka telah mencapai "Titik Kejenuhan." $5 juta pertama dari pengeluaran Facebook sangat efisien. $5 juta berikutnya kurang efisien. Pada pengeluaran $10 juta ke atas, mereka membuang-buang uang. <em>Sinyal:</em> Pengeluaran meningkat tetapi pendapatan mendatar.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>LAPISAN 2 — Bias Atribusi (Kesesatan Klik-Terakhir)</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "14px" }}>
              Jika pelanggan melihat iklan TV, lalu Papan Reklame, lalu akhirnya mengeklik iklan Google Search untuk membeli, Google mengambil 100% kreditnya. Platform digital diberi insentif untuk menunjukkan ROI tinggi. Sementara itu, TV (yang sebenarnya memicu perjalanan pembelian) menjadi benar-benar tidak terlihat. <em>Sinyal:</em> ROAS digital terlihat mencurigakan tinggi (4.0-5.0x) sementara TV terlihat lemah (1.5-2.0x). Ini terbalik.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>LAPISAN 3 — Adstock/Efek Memori (Efek Bawaan)</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "14px" }}>
              Iklan TV yang dilihat pada hari Senin mungkin memengaruhi pembelian pada hari Sabtu. Sebagian besar model digital mengabaikan "Efek Bawaan" ini. Jika Anda tidak memperhitungkannya, Anda membandingkan apel (pengeluaran TV) dengan jeruk (klik segera). <em>Sinyal:</em> Pendapatan tampak tertinggal dari pengeluaran selama 1-2 minggu, terutama untuk TV.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>LAPISAN 4 — Sinergi/Efek Halo (Lintas Saluran)</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "14px" }}>
              Ketika iklan TV ditayangkan, rasio klik-tayang (CTR) pada iklan Search meningkat sebesar 25%. TV "mempersiapkan" (priming) audiens, membuat mereka lebih responsif terhadap Search. Ini berarti mengoptimalkan saluran secara terisolasi itu berbahaya — Anda menghancurkan sinergi tersebut. <em>Sinyal:</em> Performa Search tidak konsisten; ia berkorelasi dengan pengeluaran TV, bukan hanya pengeluaran Search.
            </p>
          </div>

          <p style={{ marginTop: "20px" }}>
            <strong>Masalah Sebenarnya:</strong> CMO, Direktur Keuangan, dan tim Search semuanya memiliki teori yang berbeda tentang apa yang salah karena <strong>mereka masing-masing hanya melihat satu lapisan.</strong> Seorang analis senior memisahkan lapisan-lapisan tersebut, mengukur masing-masing secara independen, kemudian memprioritaskan lapisan mana yang menjadi hambatan terbesar.
          </p>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. Framework Diagnostik: Uji Sebelum Membangun</h2>
        <div className="content">
          <p>
            Instingnya adalah membangun model MMM yang besar secara langsung. <strong>Jangan.</strong> Sebaliknya, jalankan pengujian diagnostik yang ditargetkan untuk mengidentifikasi lapisan mana yang sebenarnya menjadi masalah.
          </p>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Uji 1: Analisis Jeda (Menguji Lapisan 3 — Adstock)</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              Apakah pendapatan mengikuti pengeluaran segera, atau dengan jeda 1-2 minggu? <br />
              Metode: Korelasi silang pengeluaran vs. pendapatan dari waktu ke waktu. <br />
              Hasil: Pengeluaran TV memiliki jeda 1 minggu (korelasi 0,8 pada jeda=7 hari). Facebook tidak memiliki jeda (korelasi segera). <br />
              <em>Implikasi:</em> TV dinilai terlalu rendah karena kita membandingkan pengeluaran minggu N dengan pendapatan minggu N. Kita seharusnya membandingkan pengeluaran TV minggu N dengan pendapatan minggu N+1.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Uji 2: Pemetaan Kurva Kejenuhan (Menguji Lapisan 1 — Imbal Hasil yang Berkurang)</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              Plot pengeluaran vs. pendapatan untuk setiap saluran. Apakah hubungannya terlihat linier atau berbentuk S? <br />
              Metode: Scatter plot + regresi non-linier (fungsi Hill). <br />
              Hasil: Facebook jelas berbentuk kurva S (mendatar pada $8 juta+). YouTube masih linier. <br />
              <em>Implikasi:</em> Facebook jenuh; YouTube belum. Alokasi ulang anggaran akan membantu.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Uji 3: Cek Bias Platform (Menguji Lapisan 2 — Bias Atribusi)</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              Bandingkan ROAS "yang dilaporkan" platform (dari Facebook Ads Manager) vs. korelasi "yang diamati" dalam data Anda. <br />
              Metode: Penjualan yang dilaporkan platform / pengeluaran yang dilaporkan platform vs. (pendapatan Anda * pangsa platform) / pengeluaran aktual. <br />
              Hasil: Facebook melaporkan ROAS 4.2x, tetapi data Anda hanya mendukung korelasi 2.5x. Kesenjangan 1.7x adalah bias atribusi. <br />
              <em>Implikasi:</em> Laporan platform digelembungkan. Gunakan data Anda sendiri, bukan data mereka.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Uji 4: Cek Sinergi/Halo (Menguji Lapisan 4 — Lintas Saluran)</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              Apakah performa Search lebih kuat berkorelasi dengan pengeluaran Search, atau dengan pengeluaran TV? <br />
              Metode: Regresi pendapatan Search pada pengeluaran Search + pengeluaran TV. Bandingkan koefisiennya. <br />
              Hasil: Koefisien pengeluaran TV adalah +0,35; koefisien pengeluaran Search adalah +0,28. TV "memungkinkan" Search. <br />
              <em>Implikasi:</em> Memotong TV akan lebih merugikan Search daripada yang Anda perkirakan. Jangan mengoptimalkan saluran secara terisolasi.
            </p>
          </div>

          <p style={{ marginTop: "20px" }}>
            <strong>Wawasan Utama:</strong> Keempat tes ini memakan waktu 1-2 minggu. Model MMM penuh memakan waktu 2-3 bulan. Tes-tes ini memberi tahu Anda lapisan mana yang paling penting, sehingga Anda dapat <strong>memfokuskan upaya pemodelan Anda pada masalah yang tepat.</strong>
          </p>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. Perspektif Data: Apa yang Kita Butuhkan (Dan Apa yang Sebenarnya Kita Dapatkan)</h2>
        <div className="content">
          <p>Kami menggunakan data deret waktu mingguan selama 3 tahun. Namun, data dunia nyata itu berantakan. Berikut adalah apa yang kita butuhkan vs. apa yang akan kita dapatkan:</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Tipe Variabel</th>
                <th>Yang Kita Butuhkan</th>
                <th>Yang Sebenarnya Kita Dapatkan</th>
                <th>Cara Kita Menanganinya</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Target</strong></td>
                <td>Pendapatan mingguan (definisi konsisten)</td>
                <td>Pendapatan = (Penjualan - Retur) + (Grosir - Chargeback) [berantakan]</td>
                <td>Gunakan definisi pendapatan yang konsisten; uji sensitivitas terhadap definisi yang berbeda</td>
              </tr>
              <tr>
                <td><strong>Pengeluaran TV</strong></td>
                <td>Dolar pasti yang dihabiskan setiap minggu</td>
                <td>GRP (Gross Rating Points) — bukan dolar. Konversi memerlukan asumsi tentang CPM.</td>
                <td>Gunakan GRP secara langsung; lebih stabil. Normalisasi di seluruh pasar.</td>
              </tr>
              <tr>
                <td><strong>Pengeluaran Digital</strong></td>
                <td>Data pengeluaran yang Anda kontrol</td>
                <td>Pengeluaran yang dilaporkan platform memiliki jendela lookback, jendela atribusi, penundaan rekonsiliasi</td>
                <td>Gunakan pengeluaran aktual dari laporan bank Anda, bukan laporan platform</td>
              </tr>
              <tr>
                <td><strong>Kontrol</strong></td>
                <td>Harga, pengeluaran pesaing, musiman</td>
                <td>Perubahan harga di tengah minggu; pengeluaran pesaing diestimasi; musiman memiliki pencilan (liburan, guncangan pasokan)</td>
                <td>Dummy-code hari libur; gunakan pengeluaran pesaing dari Nielsen; jeda harga untuk mencerminkan dampak konsumen</td>
              </tr>
              <tr>
                <td><strong>Eksternal</strong></td>
                <td>Cuaca, indeks ekonomi</td>
                <td>Cuaca bersifat lokal, bukan nasional. Indeks ekonomi tertinggal 2-3 minggu. Keduanya berisik (noisy).</td>
                <td>Gunakan rata-rata tertimbang suhu di 10 pasar teratas; gunakan indeks ekonomi yang tertinggal</td>
              </tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Masalah Kualitas Data (Transparan):</strong>
            <ul>
              <li>
                <strong>Jeda rekonsiliasi:</strong> Pengeluaran Facebook baru terekonsiliasi 2 minggu setelah kampanye berjalan.
                Kami menggunakan data awal dan menyesuaikannya nanti.
              </li>
              <li>
                <strong>Ketidakcocokan jendela atribusi:</strong> Facebook menggunakan jendela 28 hari; Google menggunakan 30 hari.
                Kami menormalisasi ke jendela 30 hari.
              </li>
              <li>
                <strong>Kanibalisasi:</strong> Kami tidak memiliki data tingkat rumah tangga untuk mengetahui apakah pelanggan Facebook dan Search adalah orang yang sama. Kami mengasumsikan adanya tumpang tindih (~20% berdasarkan tolok ukur industri) dan menguji sensitivitasnya.
              </li>
              <li>
                <strong>Faktor di luar model:</strong> Acara PR, peluncuran produk, kampanye influencer tidak ada dalam dataset kami. Kami akan melihat varians yang tidak dapat dijelaskan, yang akan kami tandai.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. Pendekatan Analitik: Mengapa Tidak Membangun MMM Saja?</h2>
        <div className="content">
          <p>
            Ini adalah pertanyaan kritis yang akan diajukan CFO: <em>"Mengapa kita butuh beberapa tes? Mengapa tidak membangun modelnya saja?"</em>
          </p>

          <p style={{ marginTop: "15px" }}>
            <strong>Masalah dengan "Satu Model Besar":</strong> Jika Anda memasukkan semua lapisan ke dalam satu MMM, Anda membuat asumsi tentang keempatnya secara bersamaan:
          </p>

          <ul style={{ marginTop: "15px" }}>
            <li>
              "Hubungannya berbentuk kurva S" (mengasumsikan kejenuhan itu nyata)
            </li>
            <li>
              "Pengeluaran memiliki jeda 1 minggu" (mengasumsikan adstock)
            </li>
            <li>
              "Saluran berinteraksi secara multiplikatif" (mengasumsikan sinergi)
            </li>
            <li>
              "Data platform tidak bias" (mengasumsikan tidak ada bias atribusi)
            </li>
          </ul>

          <p style={{ marginTop: "15px" }}>
            Jika SALAH SATU dari asumsi ini salah, seluruh model Anda salah. Anda tidak akan tahu yang mana yang rusak.
          </p>

          <p style={{ marginTop: "15px" }}>
            <strong>Pendekatan Bertahap:</strong>
          </p>

          <div className="calculation" style={{ margin: "15px 0" }}>
{`TAHAP 1 — Diagnostik (Minggu 1-2):
Jalankan keempat tes secara independen.
Tanya: "Lapisan mana yang merupakan masalah NYATA?"
Output: Laporan diagnostik (lapisan mana yang penting)

TAHAP 2 — Inferensi Kausal (Minggu 3-4):
Bangun model Deret Waktu Struktural Bayesian (BSTS).
Mengapa BSTS? Ia secara eksplisit mengukur: "Bagaimana jika kita menghabiskan $0 pada saluran ini?"
Ini mengisolasi dampak SEBAB-AKIBAT, bukan sekadar korelasi.
Output: ROAS inkremental sejati per saluran (bukan ROAS yang dilaporkan platform)

TAHAP 3 — Optimasi (Minggu 5-6):
Mengingat ROAS sejati dan kurva kejenuhan, optimalkan alokasi anggaran.
Jalankan analisis sensitivitas: "Bagaimana jika estimasi kejenuhan kita meleset 20%?"
Output: Rekomendasi alokasi anggaran + interval kepercayaan`}
          </div>

          <p style={{ marginTop: "15px" }}>
            <strong>Mengapa Ini Penting:</strong> Jika Tahap 1 menunjukkan bahwa Lapisan 3 (adstock) dan Lapisan 4 (sinergi) tidak signifikan, kita tidak perlu membangun model kompleks untuk mereka. Kita sederhanakan. Jika Tahap 1 menunjukkan Lapisan 1 (kejenuhan) adalah masalah dominan, kita fokus di sana. Ini efisien.
          </p>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. Hasil Diagnostik Tahap 1</h2>
        <div className="content">
          <p>
            Kami menjalankan empat tes diagnostik. Inilah yang kami temukan dan apa artinya bagi bisnis.
          </p>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Hasil Uji 1: Analisis Jeda</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "14px" }}>
              <strong>Temuan:</strong> TV memiliki jeda 1 minggu. Facebook dan YouTube tidak memiliki jeda.
            </p>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              <strong>Implikasi:</strong> Kita perlu memperhitungkan adstock. Namun, itu tidak serumit yang diasumsikan beberapa model MMM. Peluruhan 1 minggu yang sederhana sudah cukup.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Hasil Uji 2: Kurva Kejenuhan</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "14px" }}>
              <strong>Temuan:</strong> Facebook menunjukkan kejenuhan kurva S yang jelas di atas $8 juta/bulan. YouTube masih linier. TV sedikit berbentuk kurva S tetapi dengan titik kejenuhan yang lebih tinggi ($15 juta).
            </p>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              <strong>Implikasi:</strong> Ini adalah masalah dominan. Kita tidak bisa hanya mengalokasikan anggaran secara proporsional. Kita perlu menghormati kurva kejenuhan. Uang Facebook lebih baik dihabiskan untuk YouTube.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Hasil Uji 3: Cek Bias Platform</strong>
            <div style={{ margin: "10px 0" }}>
              <p style={{ fontSize: "13px", marginBottom: "8px" }}>
                <strong>ROAS yang Dilaporkan Platform (Facebook Ads Manager):</strong>
              </p>
              <div style={{ marginLeft: "15px", fontSize: "13px", marginBottom: "10px" }}>
                Facebook melaporkan:
                {` $40 juta penjualan / $10 juta pengeluaran = `}<span className="math-result">ROAS 4.0x</span>
              </div>
              <p style={{ fontSize: "13px", marginBottom: "8px" }}>
                <strong>ROAS yang Diamati (Dari Data Pendapatan Anda):</strong>
              </p>
              <div style={{ marginLeft: "15px", fontSize: "13px", marginBottom: "10px" }}>
                Data Anda menunjukkan: ($25 juta yang dapat diatribusikan ke FB) / $10 juta pengeluaran =
                {` `}<span className="math-result">ROAS 2.5x</span>
              </div>
              <p style={{ fontSize: "13px" }}>
                <strong>Kesenjangan:</strong> 4.0x - 2.5x = 1.5x kredit yang digelembungkan. Ini adalah bias atribusi murni.
              </p>
            </div>
            <p style={{ marginTop: "12px", marginBottom: "8px", fontSize: "14px" }}>
              <strong>Implikasi:</strong> Platform digital melebih-lebihkan kontribusi mereka sendiri. Dampak Facebook yang sebenarnya adalah ~60% dari apa yang mereka laporkan. Gunakan data Anda sendiri, bukan data mereka.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Hasil Uji 4: Cek Sinergi/Halo</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "14px" }}>
              <strong>Temuan:</strong> Pendapatan Search meningkat saat TV ditayangkan. Secara spesifik:
            </p>
            <div style={{ marginLeft: "15px", fontSize: "13px", margin: "10px 0" }}>
              Pendapatan Search = (0,28 × pengeluaran Search) + (0,35 × pengeluaran TV)
              <br />
              TV memiliki koefisien yang lebih kuat daripada pengeluaran Search itu sendiri.
            </div>
            <p style={{ marginTop: "12px", marginBottom: "8px", fontSize: "14px" }}>
              <strong>Implikasi:</strong> TV "mempersiapkan" audiens. Jika kita memotong TV, Search akan berkinerja buruk. Saluran tidak independen. Optimalkan secara bersamaan.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. Tahap 2: Inferensi Kausal (ROAS Inkremental Sejati)</h2>
        <div className="content">
          <p>
            Sekarang kita tahu <strong>Lapisan 1 (Kejenuhan) dan Lapisan 2 (Bias Atribusi) adalah masalah yang sebenarnya</strong>, kita membangun model kausal yang ditargetkan. Bukan MMM membengkak yang mencoba mengestimasi segalanya. Model BSTS (Deret Waktu Struktural Bayesian).
          </p>

          <p style={{ marginTop: "15px" }}>
            <strong>Apa yang Dilakukan BSTS:</strong> Ia menjawab pertanyaan: <em>"Bagaimana pendapatan seandainya kita menghabiskan $0 pada Facebook selama 3 tahun terakhir?"</em> Ini adalah kontrafaktual. Perbedaan antara pendapatan aktual dan pendapatan kontrafaktual adalah dampak kausal.
          </p>

          <div className="calculation" style={{ margin: "15px 0" }}>
{`Hasil Model BSTS (ROAS Kausal Sejati):

Saluran: Facebook
ROAS yang Dilaporkan (Platform):    4.0x
ROAS Korelasi yang Diamati:         2.5x
ROAS Kausal (BSTS):                 2.0x
↑ Ini adalah angka yang SEBENARNYA

Saluran: YouTube
ROAS yang Dilaporkan (Platform):    3.0x
ROAS Korelasi yang Diamati:         3.0x
ROAS Kausal (BSTS):                 3.2x
↑ YouTube sebenarnya LEBIH BAIK daripada yang dilaporkan

Saluran: TV
ROAS yang Dilaporkan (Bench industri): 1.8x (sering diabaikan)
ROAS Korelasi yang Diamati:         3.5x
ROAS Kausal (BSTS):                 5.8x
↑ TV adalah pemain TERBAIK, tetapi tidak terlihat oleh atribusi digital

Saluran: Search
ROAS yang Dilaporkan (Platform):    5.0x
ROAS Korelasi yang Diamati:         4.2x
ROAS Kausal (BSTS):                 2.8x
↑ Korelasi tinggi, tetapi banyak didorong oleh priming TV
`}
          </div>

          <p style={{ marginTop: "15px" }}>
            <strong>Wawasan Utama:</strong> ROAS kausal sejati membalikkan kebijaksanaan konvensional:
          </p>

          <table className="data-table" style={{ marginTop: "15px" }}>
            <thead>
              <tr>
                <th>Saluran</th>
                <th>Kata Platform</th>
                <th>Kita Ukur</th>
                <th>Realita (BSTS)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Facebook</td>
                <td>Pahlawan (4.0x)</td>
                <td>Bagus (2.5x)</td>
                <td><strong>Jenuh (2.0x)</strong></td>
              </tr>
              <tr>
                <td>YouTube</td>
                <td>Bagus (3.0x)</td>
                <td>Bagus (3.0x)</td>
                <td><strong>Digital terbaik (3.2x)</strong></td>
              </tr>
              <tr>
                <td>TV</td>
                <td>Lemah (1.8x)</td>
                <td>Kuat (3.5x)</td>
                <td><strong>Terbaik secara keseluruhan (5.8x)</strong></td>
              </tr>
              <tr>
                <td>Search</td>
                <td>Pahlawan (5.0x)</td>
                <td>Kuat (4.2x)</td>
                <td><strong>Dibantu, bukan pendorong (2.8x)</strong></td>
              </tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Temuan Mengejutkan:</strong> TV 2,9x lebih efisien daripada Facebook, tetapi karena TV tidak menghasilkan "klik terakhir," TV secara sistematis kurang didanai. Sementara itu, Facebook mengambil kredit atas penjualan yang dimungkinkan oleh TV.
          </div>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. Tahap 3: Optimasi Anggaran (Imbal Hasil Marginal Mendorong Alokasi)</h2>
        <div className="content">
          <p>
            Sekarang kita tahu ROAS sejati per saluran. Tapi <strong>alokasi bukan hanya tentang ROAS rata-rata — ini tentang ROAS MARGINAL.</strong> Di sinilah sebagian besar analisis gagal.
          </p>

          <div className="highlight-box" style={{ marginTop: "15px" }}>
            <strong>Kebingungan Marginal vs. Rata-rata:</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              <strong>ROAS Rata-rata:</strong> "Facebook menghasilkan $2 untuk setiap $1 yang dihabiskan" (di seluruh $10 juta)
              <br />
              <strong>ROAS Marginal:</strong> "$1 berikutnya yang saya habiskan di Facebook menghasilkan $0.50" (karena sudah jenuh)
              <br />
              <br />
              <strong>Aturan keputusan yang benar:</strong> Alokasikan dolar inkremental ke saluran dengan imbal hasil marginal tertinggi, bukan imbal hasil rata-rata.
            </p>
          </div>

          <div className="calculation" style={{ margin: "15px 0" }}>
{`Alokasi Anggaran Saat Ini:
Facebook:  $10M | ROAS Rata-rata: 2.0x | ROAS Marginal: 0.5x
YouTube:   $5M  | ROAS Rata-rata: 3.2x | ROAS Marginal: 3.0x
TV:        $15M | ROAS Rata-rata: 5.8x | ROAS Marginal: 5.0x
Search:    $8M  | ROAS Rata-rata: 2.8x | ROAS Marginal: 2.0x

Total Pengeluaran Saat Ini: $38M
Total Pendapatan yang Dihasilkan Saat Ini: $156M

SKENARIO 1 — Alokasi Ulang Konservatif (-$3M dari Facebook, +$3M ke YouTube):
Alokasi Baru: Facebook $7M, YouTube $8M, TV $15M, Search $8M
Hilang dari Facebook: $3M × 0.5 mROAS = $1.5M
Keuntungan di YouTube: $3M × 3.0 mROAS = $9M
Dampak Bersih: +$7.5M pendapatan

SKENARIO 2 — Alokasi Ulang Target (-$5M dari Facebook, +$3M YouTube, +$2M TV):
Alokasi Baru: Facebook $5M, YouTube $8M, TV $17M, Search $8M
Hilang dari Facebook: $5M × 0.5 mROAS = $2.5M
Keuntungan di YouTube: $3M × 3.0 mROAS = $9M
Keuntungan di TV: $2M × 5.0 mROAS = $10M
Dampak Bersih: +$16.5M pendapatan

SKENARIO 3 — Alokasi Ulang Agresif (-$8M dari Facebook, +$4M YouTube, +$4M TV):
Alokasi Baru: Facebook $2M, YouTube $9M, TV $19M, Search $8M
Hilang dari Facebook: $8M × 0.5 mROAS = $4M
Keuntungan di YouTube: $4M × 3.0 mROAS = $12M
Keuntungan di TV: $4M × 5.0 mROAS = $20M
Dampak Bersih: +$28M pendapatan
(Namun risiko: menghilangkan kehadiran merek sepenuhnya dari Facebook)
`}
          </div>

          <p style={{ marginTop: "15px" }}>
            <strong>Rekomendasi: Skenario Target</strong>
          </p>
          <p>
            Alokasikan ulang $5 juta dari Facebook yang terlalu jenuh ke YouTube ($3 juta) dan TV ($2 juta) yang belum jenuh.
          </p>
          <p style={{ marginTop: "15px", marginBottom: "15px" }}>
            <strong>Hasil yang Diharapkan:</strong>
          </p>
          <div style={{ marginLeft: "15px" }}>
            <div style={{ marginBottom: "10px" }}>
              Pendapatan Total Saat Ini: $156 juta
            </div>
            <div>
              Pendapatan Total Baru: $156M + $16.5M ={" "}
              <span className="math-result">$172.5 juta</span> (+10,6% peningkatan dengan total pengeluaran yang sama)
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. Temuan & Wawasan</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Apa yang Kami Harapkan vs. Apa yang Kami Temukan:</strong>
            <table className="data-table" style={{ marginTop: "15px" }}>
              <thead>
                <tr>
                  <th>Asumsi</th>
                  <th>Diharapkan</th>
                  <th>Temuan Sebenarnya</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Saluran digital paling efisien</td>
                  <td>ROAS Digital: 3.5-5.0x</td>
                  <td><strong>TV 5.8x; digital 2.0-3.2x</strong></td>
                </tr>
                <tr>
                  <td>Search adalah pemain terbaik</td>
                  <td>Search mendorong pendapatan terbanyak</td>
                  <td><strong>Search "dibantu" oleh TV; ROAS mandiri hanya 2.8x</strong></td>
                </tr>
                <tr>
                  <td>Lebih banyak pengeluaran Facebook itu bagus</td>
                  <td>Anggaran harus ditingkatkan</td>
                  <td><strong>Facebook jenuh di atas $8M; imbal hasil marginal hanya 0.5x</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul style={{ marginTop: "20px" }}>
            <li>
              <strong>Penemuan Bias Atribusi:</strong> Platform digital secara sistematis melebih-lebihkan kontribusi mereka sendiri sebesar 60%. Ini bukan niat jahat — ini keterbatasan inheren dari atribusi klik-terakhir. Platform hanya bisa melihat klik terakhir. Mereka tidak bisa melihat iklan TV yang mempersiapkan pelanggan.
            </li>
            <li>
              <strong>Temuan Sinergi:</strong> TV dan Search adalah mitra, bukan pesaing. Saat TV ditayangkan, Search terkonversi 25% lebih baik. Ini berarti tim pemasaran (TV) dan tim digital (Search) sebenarnya berada di pihak yang sama. Insentif mereka harus diselaraskan.
            </li>
            <li>
              <strong>Wawasan Kejenuhan:</strong> Imbal hasil yang berkurang bukan bug dalam data — melainkan fitur periklanan. Dolar pertama yang dihabiskan menjangkau audiens yang paling responsif. Dolar berikutnya menjangkau audiens yang kurang responsif. Ini dapat diprediksi dan harus dimasukkan ke dalam alokasi anggaran.
            </li>
            <li>
              <strong>Implikasi Keuangan:</strong> Ancaman pemotongan anggaran $20 juta didasarkan pada pengukuran yang cacat. Dengan atribusi kausal sejati, kita dapat menunjukkan kepada Keuangan bahwa pemasaran sebenarnya berkinerja baik — terutama TV. Alokasi ulang (bukan pemotongan) akan meningkatkan pendapatan sebesar $16.5 juta.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 10 ── */}
      <section>
        <h2>10. Rekomendasi & Pengambilan Keputusan Bisnis</h2>
        <div className="content">
          <p><strong>Tindakan Segera (Minggu 1-4):</strong></p>
          <ul>
            <li>
              <strong>Berhenti menggunakan "ROAS Klik-Terakhir" sebagai KPI.</strong> Gantilah dengan "ROAS Inkremental" yang diturunkan dari model BSTS. Ini menyelaraskan insentif. Tim digital tidak lagi termotivasi untuk mengakali metrik klik-terakhir.
            </li>
            <li>
              <strong>Alokasikan ulang $5 juta dari Facebook ke YouTube + TV.</strong> Ini adalah pergeseran anggaran, bukan pemotongan. Total pengeluaran sama, pendapatan total lebih tinggi.
            </li>
            <li>
              <strong>Implementasikan Tes Holdout.</strong> Matikan semua pemasaran di satu kota selama 2-4 minggu. Ini memberi Anda "kontrafaktual" untuk memvalidasi hasil BSTS. Jika kota holdout kehilangan $2 juta pendapatan dari pengeluaran $500 ribu, estimasi mROAS Anda benar.
            </li>
          </ul>

          <p style={{ marginTop: "20px" }}>
            <strong>Jangka Menengah (Bulan 2-6):</strong>
          </p>
          <ul>
            <li>
              <strong>Pindah ke model "Anggaran Cair".</strong> Alih-alih anggaran tahunan tetap, alokasikan setiap bulan berdasarkan kurva ROI marginal. Saat kejenuhan berubah, anggaran bergeser secara otomatis. Ini adalah optimasi dinamis.
            </li>
            <li>
              <strong>Implementasikan "Pengukuran Terpadu".</strong> Gabungkan BSTS (strategis, jangka panjang) dengan atribusi berbasis kohort (taktis, jangka pendek). Gunakan MMM kausal untuk alokasi anggaran; gunakan analisis kohort untuk diagnostik tingkat kampanye.
            </li>
          </ul>

          <p style={{ marginTop: "20px" }}>
            <strong>Jangka Panjang (6+ Bulan):</strong>
          </p>
          <ul>
            <li>
              <strong>Bangun proses "Rekonsiliasi Atribusi".</strong> Bulanan: bandingkan ROAS yang dilaporkan platform dengan estimasi BSTS Anda. Lacak kesenjangannya. Jika melebar, selidiki alasannya. Ini menjaga platform tetap jujur.
            </li>
            <li>
              <strong>Perluas model ke KPI lain.</strong> Kami mengoptimalkan pendapatan. Bagaimana dengan margin? Bagaimana dengan nilai seumur hidup pelanggan (lifetime value)? Pendapatan TV $1 mungkin mendorong pembelian ulang dengan margin lebih tinggi daripada pendapatan Search $1.
            </li>
          </ul>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Keputusan CMO:</strong>
            <ol>
              <li>
                <strong>Persetujuan:</strong> Lanjutkan dengan alokasi ulang $5 juta dari Facebook ke YouTube + TV. Peningkatan yang diharapkan: pendapatan $16.5 juta dengan pengeluaran yang sama.
              </li>
              <li>
                <strong>Uji Coba Holdout:</strong> Jalankan tes holdout di pasar Boston selama 3 minggu. Jika hasil cocok dengan prediksi BSTS (dalam 10%), luncurkan model ke semua keputusan anggaran di masa mendatang.
              </li>
              <li>
                <strong>Penyelarasan Pemangku Kepentingan:</strong> Presentasikan temuan kepada Keuangan. Pesannya: "Pemasaran itu kuat (ROI 5.8x pada TV). Pengukurannya yang salah. Alokasi ulang akan membuktikannya."
              </li>
              <li>
                <strong>Insentif Tim:</strong> Ubah KPI tim digital dari "ROAS Klik-Terakhir" menjadi "ROAS Inkremental." Ini menghilangkan insentif untuk mengakali sistem dan menyelaraskan mereka dengan Keuangan.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ── SECTION 11 ── */}
      <section>
        <h2>11. Pola Pikir Analis Profesional: Mengapa Pendekatan Ini Berhasil</h2>
        <div className="content">
          <p>
            <strong>Perspektif Senior:</strong> Platform digital diberi insentif untuk menunjukkan ROI tinggi kepada Anda. Analis senior bersikap skeptis secara alami. Mereka tahu bahwa <strong>"Korelasi bukan Inkremental."</strong> Hanya karena seseorang mengeklik iklan dan membeli, bukan berarti iklan tersebut <em>menyebabkan</em> pembelian.
          </p>

          <div className="highlight-box">
            <strong>Mengapa Diagnostik Berlapis Mengalahkan Satu Model Besar:</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              Pemula membangun satu model MMM dan memercayainya. Senior membangun tes diagnostik terlebih dahulu. Mengapa? Karena jika modelnya salah, Anda perlu tahu lapisan mana yang rusak. Diagnostik memberi tahu Anda:
            </p>
            <ul style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              <li>Apakah kejenuhan itu nyata? (Lapisan 1)</li>
              <li>Apakah atribusi bias? (Lapisan 2)</li>
              <li>Apakah ada efek memori? (Lapisan 3)</li>
              <li>Apakah ada sinergi? (Lapisan 4)</li>
            </ul>
            <p style={{ marginTop: "8px", fontSize: "13px" }}>
              Setelah Anda tahu lapisan mana yang penting, model Anda secara otomatis menjadi lebih baik karena Anda hanya memodelkan apa yang nyata.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Wawasan Imbal Hasil Marginal:</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              Kebanyakan pemasar mengoptimalkan ROAS rata-rata. Ekonom mengoptimalkan ROAS marginal. Perbedaannya adalah perbedaan antara "baik" dan "benar." Jika ROAS rata-rata Facebook adalah 2.0x tetapi ROAS marginalnya 0.5x, dolar berikutnya harus masuk ke saluran yang berbeda. Ini adalah optimasi dasar. Anehnya, sebagian besar perusahaan tidak melakukannya.
            </p>
          </div>

          <div className="highlight-box" style={{ marginTop: "20px" }}>
            <strong>Wawasan Siap Wawancara:</strong>
            <p style={{ marginTop: "8px", marginBottom: "8px", fontSize: "13px" }}>
              Jika ditanya "Bagaimana Anda mengoptimalkan anggaran pemasaran?" dalam wawancara, jawaban pemenangnya adalah:
            </p>
            <p style={{ marginTop: "8px", fontSize: "13px", fontStyle: "italic" }}>
              "Pertama, saya akan mendiagnosis lapisan masalahnya: kejenuhan, bias atribusi, efek memori, dan sinergi. Saya akan menguji masing-masing secara independen. Kemudian, saya akan menggunakan inferensi kausal (BSTS, bukan korelasi) untuk mengukur dampak sejati. Akhirnya, saya akan mengalokasikan secara inkremental untuk memaksimalkan imbal hasil marginal, bukan imbal hasil rata-rata. Ini adalah pemikiran sistem, bukan sekadar analitik."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Case08;