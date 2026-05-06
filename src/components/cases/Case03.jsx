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


const Case03 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Studi Kasus 03</span>
        <h1>Sindrom Rak Kosong</h1>
        <div className="case-meta">Industri: Ritel / Rantai Pasok &bull; Level: Menengah</div>
      </header>
      <section>
        <h2>1. Latar Belakang Bisnis</h2>
        <div className="content">
          <p><strong>FreshMart</strong> adalah jaringan toko kelontong regional dengan 50 lokasi dan pendapatan tahunan $420 juta. Mereka bangga dengan kesegaran "Farm-to-Table" (dari kebun ke meja), khususnya pada produk organik dan produk susu premium. Dalam industri bahan makanan, margin sangat tipis (1–3%), dan profitabilitas sangat bergantung pada <strong>Perputaran Inventaris (Inventory Turnover)</strong> — seberapa cepat barang terjual sebelum rusak atau mengikat modal kerja.</p>
          <p>FreshMart saat ini menggunakan sistem <strong>Fixed Reorder Point (FRP)</strong>: "Pesan lebih banyak susu saat stok mencapai 10 unit." Pendekatan statis ini dirancang pada tahun 2009 dan belum pernah diperbarui untuk memperhitungkan volatilitas permintaan, acara lokal, atau profil daya tahan barang.</p>
          <div className="highlight-box">
            <strong>Pemangku Kepentingan:</strong> Manajer Inventaris, Pembeli Kategori (Produk Segar, Susu, Barang Kering), Manajer Toko, CFO.<br />
            <strong>Konteks:</strong> FreshMart sedang melawan "pedang bermata dua": limbah (penyusutan) yang tinggi di beberapa toko dan kehabisan stok (stockout) yang konstan di toko lainnya — secara bersamaan. Keduanya adalah gejala dari akar penyebab yang sama: prakiraan permintaan yang mengabaikan variabilitas.<br />
            <strong>Ketegangan Pemangku Kepentingan:</strong> Pembeli Kategori diukur berdasarkan Margin Kotor — mereka menolak peningkatan stok pengaman karena menahan inventaris tambahan akan mengurangi margin. CFO ingin limbah dikurangi. Manajer Toko ingin rak penuh. Insentif ini tidak selaras, dan analitik harus menyelesaikannya dengan menunjukkan biaya sebenarnya dari setiap mode kegagalan.
          </div>
        </div>
      </section>
      <section>
        <h2>2. Masalah Bisnis</h2>
        <div className="content">
          <p>Masalah intinya adalah <strong>Volatilitas Permintaan</strong> yang tidak dapat ditangani oleh sistem Fixed Reorder Point:</p>
          <ul>
            <li><strong>Gejala A — Penyusutan (Shrinkage):</strong> Limbah tahunan (kedaluwarsa/tidak terjual) adalah $1,2 juta. 40% dari semua limbah produk segar terjadi pada Senin pagi — hasil langsung dari pemesanan berlebih untuk akhir pekan yang tidak terjual habis.</li>
            <li><strong>Gejala B — Kehabisan Stok (Stockouts):</strong> Estimasi penjualan yang hilang setiap tahun karena rak kosong: $2,5 juta. Festival lingkungan di dekat Toko #12 menyebabkan lonjakan 300% pada salad "Grab-and-Go" — sistem pusat melewatkannya sepenuhnya.</li>
            <li><strong>Akar Penyebab:</strong> Sistem FRP menggunakan satu estimasi permintaan tetap per SKU di seluruh jaringan. Sistem ini tidak membedakan antara Toko #3 (perkotaan, lalu lintas pejalan kaki tinggi) dan Toko #47 (pinggiran kota, ramai di akhir pekan). Sistem ini tidak memperhitungkan cuaca, acara lokal, atau pola hari dalam seminggu.</li>
            <li><strong>Dampak Bisnis Terkuantifikasi:</strong> $1,2 juta penyusutan + $2,5 juta penjualan hilang = <strong>$3,7 juta hambatan tahunan</strong> pada bisnis dengan laba bersih $12,6 juta — mewakili 29% dari total laba yang hilang karena manajemen inventaris yang buruk.</li>
            <li><strong>Risiko jika Diabaikan:</strong> Pesaing terbesar FreshMart meluncurkan jaminan "Tidak Pernah Kehabisan Stok" kuartal lalu. Jika FreshMart tidak dapat menyamai ketersediaan di rak, peralihan pelanggan akan meningkat. Kehilangan 1% pelanggan di tingkat keranjang = ~$4,2 juta kerugian pendapatan tahunan.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>3. Tujuan Analitik</h2>
        <div className="content">
          <p>Beralih dari "Pemesanan Ulang Reaktif" ke <strong>Prakiraan Permintaan Probabilistik (Probabilistic Demand Forecasting)</strong> — memprediksi permintaan per SKU, per toko, per hari, dan menetapkan stok pengaman dinamis yang sesuai.</p>
          <div className="highlight-box">
            <strong>Pertanyaan Kunci:</strong>
            <ol>
              <li>Berapa tingkat stok pengaman yang optimal per kelas SKU, dengan memperhitungkan variabilitas permintaan DAN waktu tunggu (lead time)?</li>
              <li>Seberapa besar kontribusi peningkatan 1% dalam Ketersediaan di Rak (OSA) terhadap total nilai keranjang (Efek Halo)?</li>
              <li>Dapatkah data cuaca memprediksi lonjakan permintaan untuk kategori tertentu (daging BBQ pada hari cerah, sup pada hari hujan)?</li>
              <li>Apa pemicu penurunan harga (markdown) yang optimal untuk barang tahan lama yang mendekati masa kedaluwarsa, untuk memulihkan margin tanpa melatih pelanggan untuk menunggu diskon?</li>
            </ol>
            <strong>Target Hasil:</strong> Mengurangi penyusutan sebesar 30% ($360.000 dihemat) dan mengurangi penjualan yang hilang sebesar 25% ($625.000 dipulihkan) dalam waktu 2 kuartal — total peningkatan tahunan sebesar $985.000.
          </div>
        </div>
      </section>
      <section>
        <h2>4. Perspektif Data</h2>
        <div className="content">
          <p>Empat sumber data diintegrasikan untuk analisis ini:</p>
          <table className="data-table">
            <thead>
              <tr><th>Sumber</th><th>Variabel Kunci</th><th>Penggunaan Analitik</th><th>Granularitas</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Sistem POS</strong></td><td>SKU, Jml, Stempel Waktu, ID Toko, Harga</td><td>Pola permintaan historis</td><td>Tingkat transaksi</td></tr>
              <tr><td><strong>ERP / WMS</strong></td><td>Waktu Tunggu (hari), Jml Pesanan, Tgl Kedaluwarsa, Biaya Unit</td><td>Kendala pasokan, pelacakan limbah</td><td>Tingkat pesanan</td></tr>
              <tr><td><strong>API Eksternal</strong></td><td>Suhu, Curah Hujan, Hari Libur, Acara Lokal</td><td>Pendorong permintaan (eksternalitas)</td><td>Harian / Lokasi</td></tr>
              <tr><td><strong>Program Loyalitas</strong></td><td>ID Pelanggan, Komposisi Keranjang, Frekuensi Kunjungan</td><td>Efek Halo — pengabaian keranjang saat kehabisan stok</td><td>Tingkat transaksi</td></tr>
            </tbody>
          </table>
          <p style={{marginTop: '20px'}}><strong>Sampel Data POS — Alpukat Organik (Toko #12, 10 Hari Terakhir):</strong></p>
          <table className="data-table">
            <thead>
              <tr><th>Tanggal</th><th>Hari</th><th>Unit Terjual</th><th>Suhu (°F)</th><th>Stok Awal</th><th>Stok Akhir</th><th>Unit Limbah</th></tr>
            </thead>
            <tbody>
              <tr><td>Sen 5/1</td><td>Sen</td><td>18</td><td>62</td><td>95</td><td>77</td><td>0</td></tr>
              <tr><td>Sel 5/2</td><td>Sel</td><td>22</td><td>65</td><td>77</td><td>55</td><td>0</td></tr>
              <tr><td>Rab 5/3</td><td>Rab</td><td>25</td><td>68</td><td>55</td><td>30</td><td>0</td></tr>
              <tr><td>Kam 5/4</td><td>Kam</td><td>28</td><td>72</td><td>80</td><td>52</td><td>0</td></tr>
              <tr><td>Jum 5/5</td><td>Jum</td><td>45</td><td>78</td><td>52</td><td>7</td><td>0</td></tr>
              <tr><td>Sab 5/6</td><td>Sab</td><td>62</td><td>82</td><td>120</td><td>58</td><td>0</td></tr>
              <tr><td>Min 5/7</td><td>Min</td><td>48</td><td>79</td><td>58</td><td>10</td><td>0</td></tr>
              <tr><td>Sen 5/8</td><td>Sen</td><td>15</td><td>61</td><td>80</td><td>65</td><td>12</td></tr>
              <tr><td>Sel 5/9</td><td>Sel</td><td>20</td><td>64</td><td>65</td><td>45</td><td>8</td></tr>
              <tr><td>Rab 5/10</td><td>Rab</td><td>23</td><td>67</td><td>45</td><td>22</td><td>0</td></tr>
            </tbody>
          </table>
          <div className="highlight-box" style={{marginTop: '15px'}}>
            <strong>Apa yang Segera Diungkapkan Data:</strong> Permintaan hari Jumat dan Sabtu (45–62 unit) adalah 2–4x lebih tinggi daripada hari Senin (15–18 unit). Namun pesanan yang dibuat hari Jumat untuk pengiriman hari Senin kelebihan stok ~65 unit, menyebabkan 12–20 unit limbah setiap hari Senin. Ini adalah "Puncak Limbah Hari Senin" dalam bentuk data mentah.
          </div>
          <div className="highlight-box" style={{marginTop: '15px'}}>
            <strong>Batasan Data:</strong>
            <ul>
              <li><strong>Hilang:</strong> Data "Penyesalan" — kita bisa melihat apa yang terjual, bukan berapa banyak pelanggan yang pergi ketika rak kosong (kritis untuk estimasi permintaan yang sebenarnya).</li>
              <li><strong>Hilang:</strong> Varians waktu tunggu pemasok — ERP mencatat waktu tunggu rata-rata (2 hari) tetapi bukan distribusinya (1–5 hari). Ini menyebabkan perkiraan rendah yang sistematis pada stok pengaman yang diperlukan.</li>
              <li><strong>Variabel Tersembunyi:</strong> Iklim mikro cuaca tingkat toko — toko yang berjarak 2 mil dari yang lain bisa memiliki permintaan yang digerakkan oleh cuaca yang sangat berbeda.</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>5. Langkah demi Langkah Berpikir Analitik</h2>
        <div className="content">
          <p>Pendekatan analis mengikuti urutan prioritas yang ketat — <strong>klasifikasikan sebelum menghitung</strong>:</p>
          <ol>
            <li><strong>Langkah 1 — Klasifikasi ABC (Prioritaskan Tempat Fokus):</strong> Tidak semua SKU layak mendapatkan perhatian analitik yang sama. Kami mengklasifikasikan berdasarkan volume penjualan × dampak margin:
              <div className="calculation" style={{margin: '15px 0'}}>
{`Kerangka Kerja Klasifikasi ABC:
─────────────────────────────────────────────────────────────────
Kelas │ Kriteria                    │ % SKU  │ % Pendapatan │ Target OSA
──────┼─────────────────────────────┼────────┼──────────────┼──────────
  A   │ 10% SKU Teratas (Vol×Margin)│  10%  │   65%        │  98,5%
  B   │ 20% SKU Berikutnya          │  20%  │   25%        │  95,0%
  C   │ 70% SKU Terbawah            │  70%  │   10%        │  85,0%
─────────────────────────────────────────────────────────────────
Contoh:
Kelas A: Susu Full Cream 1L, Telur Organik 12btr, Roti Sourdough
Kelas B: Yogurt Yunani 500g, Keju Blok 400g
Kelas C: Tahini Spesial, Bubuk Kunyit Organik
Aturan Prioritas: Kami hanya membangun model stok pengaman 
probabilistik untuk SKU Kelas A terlebih dahulu. Kelas C dapat 
menggunakan FRP sederhana — ROI analitik tidak membenarkan kompleksitas.`}
              </div>
            </li>
            <li><strong>Langkah 2 — Dekomposisi Permintaan ke dalam Komponen:</strong> Sebelum meramal, pahami apa yang mendorong permintaan:
              <ul>
                <li><strong>Permintaan Dasar:</strong> Penjualan harian rata-rata (Senin sampai Minggu secara terpisah — BUKAN rata-rata mingguan)</li>
                <li><strong>Tren:</strong> Apakah SKU ini tumbuh atau menurun dari tahun ke tahun (YoY)? (Alpukat organik: +18% pertumbuhan YoY)</li>
                <li><strong>Musiman:</strong> Premium akhir pekan (Jum/Sab = 2,8x hari kerja untuk produk segar)</li>
                <li><strong>Kejutan Eksternal:</strong> Suhu >75°F → +35% permintaan BBQ/produk segar. Hari libur umum → +60% keseluruhan, -40% hari setelahnya.</li>
              </ul>
            </li>
            <li><strong>Langkah 3 — Modelkan Waktu Tunggu sebagai Distribusi, Bukan Angka Tetap:</strong> FRP mengasumsikan waktu tunggu = 2 hari (konstan). Data waktu tunggu nyata menunjukkan:
              <div className="calculation" style={{margin: '15px 0'}}>
{`Distribusi Waktu Tunggu (Pemasok alpukat, 90 pesanan terakhir):
1 hari:  12% pesanan
2 hari:  55% pesanan  ← asumsi FRP saat ini
3 hari:  25% pesanan
4 hari:  6% pesanan
5 hari:  2% pesanan
Rata-rata Waktu Tunggu (μLT) = 2,21 hari
StdDev Waktu Tunggu (σLT) = 0,82 hari
Mengabaikan varians ini adalah alasan mengapa rumus
sederhana memberi kita 12 unit stok pengaman ketika
kita sebenarnya butuh 35.`}
              </div>
            </li>
            <li><strong>Langkah 4 — Hitung Stok Pengaman Sebenarnya (Rumus Diperluas):</strong> FRP menggunakan rumus dasar. Rumus yang benar memperhitungkan variabilitas permintaan DAN waktu tunggu.</li>
            <li><strong>Langkah 5 — Analisis Efek Halo (Dampak Tingkat Keranjang):</strong> Menggunakan data loyalitas, kuantifikasi biaya sebenarnya dari kehabisan stok:
              <ul>
                <li>Ketika "Alpukat Organik" kehabisan stok, 15% pelanggan meninggalkan <strong>seluruh keranjang</strong> mereka (rata-rata nilai keranjang: $85)</li>
                <li>Biaya kehabisan stok yang sebenarnya adalah <em>nilai keranjang</em>, bukan harga barang</li>
                <li>Ini mengubah keputusan stok pengaman secara signifikan: menahan 10 alpukat ekstra ($18) sepadan untuk mencegah bahkan 1 pengabaian keranjang ($85)</li>
              </ul>
            </li>
            <li><strong>Langkah 6 — Rancang Pemicu Penurunan Harga Dinamis:</strong> Untuk produk segar Kelas A yang mendekati kedaluwarsa, rancang jadwal penurunan harga otomatis untuk memulihkan margin daripada membuang:
              <ul>
                <li>48 jam menuju kedaluwarsa + >30% stok tersisa → diskon 20% (hanya anggota aplikasi/loyalitas)</li>
                <li>24 jam menuju kedaluwarsa + >20% stok tersisa → diskon 35% (tanda di dalam toko)</li>
                <li>12 jam menuju kedaluwarsa + sisa apa pun → diskon 50% atau donasikan ke bank makanan (kredit ESG)</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>
      <section>
        <h2>6. Perhitungan &amp; Simulasi</h2>
        <div className="content">
          <p>Perhitungan Stok Pengaman: <strong>Rumus Diperluas vs. Rumus Sederhana</strong></p>
          <div className="calculation">
{`Item: Daging Ribeye Organik (SKU Kelas A)
Rata-rata Permintaan Harian (μD): 20 unit
StdDev Permintaan (σD): 5 unit
Rata-rata Waktu Tunggu (μLT): 2 hari
StdDev Waktu Tunggu (σLT): 0,82 hari
Target Tingkat Layanan: 95% → Skor-Z = 1,645
RUMUS SEDERHANA (apa yang FreshMart gunakan saat ini):
SS_sederhana = Z × σD × √μLT
SS_sederhana = 1,645 × 5 × √2 = 1,645 × 5 × 1,414 = `}<span className="math-result">11,6 → 12 unit</span>
{`
RUMUS DIPERLUAS (memperhitungkan variabilitas waktu tunggu):
SS_diperluas = Z × √((σD² × μLT) + (μD² × σLT²))
SS_diperluas = 1,645 × √((25 × 2) + (400 × 0,672))
            = 1,645 × √(50 + 268,8)
            = 1,645 × √318,8
            = 1,645 × 17,86 = `}<span className="math-result">29,4 → 30 unit</span>
{`
Kesenjangan: 30 - 12 = 18 unit stok pengaman yang kurang diperhitungkan!
Dengan biaya $12/unit: peningkatan biaya penyimpanan = $216/SKU/siklus
vs. biaya kehabisan stok ($85 keranjang × 15% pengabaian × rata-rata 3 kejadian kehabisan stok/bulan) = `}<span className="math-result">$38,25/kejadian</span>
{`
Keputusan: Stok pengaman ekstra MEMBAYAR dirinya sendiri dengan mudah.
─────────────────────────────────────────────────────────────────
PERHITUNGAN EFEK HALO — Biaya Kehabisan Stok Sebenarnya
─────────────────────────────────────────────────────────────────
Item: Daging Ribeye Organik
Harga Item: $25
Rata-rata Nilai Keranjang saat membeli daging: $120
Frekuensi Kehabisan Stok: ~1,5 hari/bulan (5% hari)
Unit hilang per hari kehabisan stok: 20 unit
Kerugian tanpa Efek Halo (langsung):
20 unit × $25 × 1,5 hari = $750/bulan
Kerugian DENGAN Efek Halo (15% pengabaian keranjang):
$750 + (15% × 20 × $120 × 1,5) = $750 + $540 = `}<span className="math-result">$1.290/bulan</span>
{`
Biaya pengabaian keranjang tersembunyi ($540) hampir
sebesar penjualan langsung yang hilang ($750).
Ini benar-benar mengubah kasus bisnis stok pengaman.
─────────────────────────────────────────────────────────────────
SENSITIVITAS: Bagaimana jika tingkat pengabaian hanya 8% (konservatif)?
─────────────────────────────────────────────────────────────────
$750 + (8% × 20 × $120 × 1,5) = $750 + $288 = `}<span className="math-result">$1.038/bulan</span>
{`Masih 38% lebih tinggi dari estimasi tanpa-halo.
Kasus bisnis untuk stok pengaman yang lebih tinggi berlaku dalam semua skenario.`}
          </div>
        </div>
      </section>
      <section>
        <h2>7. Temuan &amp; Wawasan</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Apa yang Kami Harapkan vs. Apa yang Kami Temukan:</strong>
            <table className="data-table" style={{marginTop: '15px'}}>
              <thead>
                <tr><th>Asumsi</th><th>Diharapkan</th><th>Temuan Sebenarnya</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pendorong utama limbah</td>
                  <td>Pemesanan berlebih acak</td>
                  <td><strong>Pemesanan berlebih sistematis hari Senin (40% dari semua limbah di hari Senin)</strong></td>
                </tr>
                <tr>
                  <td>Biaya kehabisan stok</td>
                  <td>Margin item yang hilang saja</td>
                  <td><strong>Biaya sebenarnya 1,7x lebih tinggi karena pengabaian keranjang</strong></td>
                </tr>
                <tr>
                  <td>Kehabisan stok susu premium</td>
                  <td>Penjualan hilang</td>
                  <td><strong>80% beralih ke merek toko — tidak ada pengabaian keranjang</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul style={{marginTop: '20px'}}>
            <li><strong>Korelasi Cuaca:</strong> Kenaikan suhu 5°F di atas rata-rata musiman berkorelasi dengan lonjakan 25% dalam penjualan minuman ringan dan arang. Ini signifikan secara statistik (p < 0,01) dan dapat dimasukkan ke dalam pemicu pemesanan ulang dinamis melalui API Cuaca.</li>
            <li><strong>Puncak Limbah Hari Senin:</strong> 40% dari semua limbah produk segar terjadi Senin pagi. Akar penyebab: pesanan akhir pekan dilakukan hari Kamis dengan jendela pengiriman Jumat, secara sistematis melebih-lebihkan permintaan akhir pekan sebesar 15%. Perbaikan: pecah pesanan akhir pekan menjadi pengiriman Jumat (untuk Jum/Sab) dan pengiriman Minggu (untuk Sen/Sel).</li>
            <li><strong>Temuan Kanibalisasi:</strong> Ketika "Susu Merek Premium A" kehabisan stok, 80% pelanggan beralih ke "Merek Toko B" — tidak ada pengabaian keranjang. <em>Tindakan:</em> Kita bisa menerima probabilitas kehabisan stok yang lebih tinggi untuk Merek A dan menggunakan modal stok pengaman yang dibebaskan untuk item dengan tingkat pengabaian lebih tinggi seperti buah beri organik segar.</li>
            <li><strong>Wawasan Kontra-Intuitif:</strong> Menahan 5% lebih banyak stok pengaman untuk produk segar Kelas A justru <em>mengurangi</em> total biaya limbah — karena mencegah satu pengabaian keranjang ($85) memulihkan biaya membawa 10 unit ekstra berkali-kali lipat.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>8. Rekomendasi</h2>
        <div className="content">
          <p><strong>Jangka Pendek (Minggu 1–6):</strong></p>
          <ul>
            <li><strong>Implementasikan Titik Pemesanan Ulang Dinamis Hari-dalam-Seminggu</strong> untuk semua SKU Kelas A. Ganti satu titik pemesanan ulang mingguan dengan 7 nilai harian berdasarkan permintaan historis hari-dalam-seminggu. <br /><strong>Dampak yang Diharapkan:</strong> Mengurangi limbah hari Senin sebesar 25% (~$300.000 tahunan). <strong>Biaya:</strong> 3 minggu rekayasa. <strong>Tidak diperlukan data baru.</strong></li>
            <li><strong>Otomatiskan Pemicu Penurunan Harga</strong> untuk produk segar dengan masa simpan <48 jam dan stok >20% tersisa: dorong diskon 30% khusus aplikasi loyalitas. <br /><strong>Dampak yang Diharapkan:</strong> Memulihkan 40% dari limbah yang seharusnya terjadi sebagai pendapatan diskon ($180.000/tahun). <strong>Risiko:</strong> Melatih pelanggan untuk menunggu penurunan harga — mitigasi dengan membatasi pada anggota loyalitas dan mengacak waktu diskon.</li>
          </ul>
          <p><strong>Jangka Panjang (Bulan 2–4):</strong></p>
          <ul>
            <li><strong>Integrasikan API Cuaca</strong> ke dalam mesin pengisian ulang untuk kategori BBQ, produk segar, dan minuman. <br /><strong>Dampak yang Diharapkan:</strong> Mengurangi kehabisan stok yang didorong oleh cuaca sebesar 40%, memulihkan ~$250.000 dalam penjualan yang hilang setiap tahun.</li>
          </ul>
          <ul>
            <li><strong>Terapkan Rumus Stok Pengaman Diperluas</strong> di seluruh rantai untuk semua SKU Kelas A (menggantikan rumus sederhana). <br /><strong>Dampak yang Diharapkan:</strong> Mengurangi frekuensi kehabisan stok sebesar 35%, menghemat ~$375.000 dalam penjualan yang hilang di tingkat keranjang. <br /><strong>Risiko:</strong> Biaya penyimpanan yang lebih tinggi (peningkatan ~$180.000/tahun) — manfaat bersih tetap ~$195.000/tahun.</li>
          </ul>
          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Matriks Prioritas:</strong>
            <table className="data-table">
              <thead>
                <tr><th>Tindakan</th><th>Manfaat Tahunan</th><th>Biaya</th><th>Prioritas</th></tr>
              </thead>
              <tbody>
                <tr><td>Titik Pemesanan Ulang Harian</td><td>$300K</td><td>Rendah</td><td>🔴 Lakukan Dulu</td></tr>
                <tr><td>Pemicu Penurunan Harga Otomatis</td><td>$180K</td><td>Rendah</td><td>🔴 Lakukan Dulu</td></tr>
                <tr><td>Integrasi API Cuaca</td><td>$250K</td><td>Sedang</td><td>🟡 Bulan 2</td></tr>
                <tr><td>Rumus Stok Pengaman Diperluas</td><td>$195K bersih</td><td>Rendah</td><td>🟡 Bulan 2</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <h2>9. Pengambilan Keputusan Bisnis</h2>
        <div className="content">
          <p>Manajer Kategori dan CFO menyelaraskan pada pendekatan bertahap setelah melihat gambaran biaya penuh:</p>
          <ol>
            <li><strong>Segmentasi Ulang Katalog berdasarkan Kekritisan:</strong> Kelompokkan SKU berdasarkan "Skor Efek Halo" (tingkat pengabaian keranjang saat kehabisan stok) daripada sekadar margin. Alpukat Organik mendapatkan perlakuan Kelas A meskipun margin itemnya hanya $1,20 — karena kehabisan stoknya memicu kerugian keranjang $85.</li>
            <li><strong>Beralih ke Inventaris yang Dikelola Vendor (VMI) untuk 5 Pemasok Teratas:</strong> Untuk SKU Kelas A dengan kecepatan tinggi, berikan pemasok visibilitas ke data POS waktu nyata sehingga mereka dapat memicu pengisian ulang secara proaktif. <em>Mengurangi variabilitas waktu tunggu dari σLT=0,82 menjadi estimasi 0,35 hari.</em></li>
            <li><strong>Strategi Alternatif Ditolak:</strong> Manajer Inventaris mengusulkan untuk meningkatkan semua stok pengaman sebesar 20% datar. CFO menolak ini — itu akan meningkatkan modal kerja sebesar $1,4 juta tanpa logika penargetan. Pendekatan yang didorong analitik mencapai hasil yang lebih baik dengan seperempat biaya.</li>
          </ol>
          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Dasbor Pemantauan — KPI Mingguan:</strong>
            <table className="data-table">
              <thead>
                <tr><th>KPI</th><th>Saat Ini</th><th>Target (Q2)</th><th>Ambang Batas Peringatan</th></tr>
              </thead>
              <tbody>
                <tr><td>Ketersediaan di Rak (Kelas A)</td><td>91%</td><td>98,5%</td><td><96% = tinjauan pembeli</td></tr>
                <tr><td>Indeks Limbah Hari Senin</td><td>2,8x rata-rata</td><td>1,3x rata-rata</td><td>>2,0x = tandai rencana pesanan</td></tr>
                <tr><td>Tingkat Penyusutan (% dari COGS)</td><td>1,8%</td><td>1,2%</td><td>>1,6% = tinjauan kategori</td></tr>
                <tr><td>Tingkat Pengabaian Keranjang</td><td>~15%</td><td><8%</td><td>>12% = investigasi kehabisan stok</td></tr>
                <tr><td>Tingkat Pemulihan Penurunan Harga</td><td>N/A (baru)</td><td>>60% stok kedaluwarsa</td><td><40% = tinjauan pemicu</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <h2>10. Pola Pikir Analis Profesional</h2>
        <div className="content">
          <p><strong>Perspektif Senior:</strong> Pemula mencoba meminimalkan limbah. Senior mencoba memaksimalkan <strong>Profitabilitas Total</strong>. Terkadang, keputusan yang paling menguntungkan adalah menahan inventaris tambahan dan menerima biaya penyimpanan yang sedikit lebih tinggi — karena alternatifnya (kehabisan stok + pengabaian keranjang) biayanya 5x lebih besar. Kuncinya adalah tidak pernah mengoptimalkan satu metrik secara terisolasi.</p>
          <div className="highlight-box">
            <strong>Pelajaran Kunci:</strong> Data dalam silo itu berbahaya. Jika Anda hanya melihat "Data Inventaris," Anda melihat limbah. Jika Anda menggabungkannya dengan "Data Loyalitas," Anda melihat <strong>Hubungan Pelanggan</strong>. Efek Halo mengubah kehabisan stok item $25 menjadi kerugian keranjang $85 — temuan yang tidak terlihat tanpa analisis lintas data.
          </div>
          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Kesalahan Pemula yang Umum:</strong> Kebanyakan pemula menggunakan rumus Stok Pengaman Sederhana (Z × σD × √LT) dan menganggapnya selesai. Rumus ini mengasumsikan waktu tunggu <em>konstan</em> — yang hampir tidak pernah benar dalam praktiknya, terutama untuk produk segar di mana keterlambatan pemasok sering terjadi. Rumus Diperluas, yang menambahkan σLT² ke dalam perhitungan, biasanya menghasilkan estimasi stok pengaman 2–3x lebih tinggi. Selalu tanyakan: "Asumsi apa yang dibuat rumus ini, dan apakah asumsi tersebut benar dalam konteks ini?"
          </div>
          <div className="highlight-box" style={{marginTop: '20px'}}>
            <strong>Wawasan Siap Wawancara:</strong> Jika ditanya "Bagaimana Anda mengurangi limbah toko kelontong?" dalam wawancara kasus, hindari jebakan untuk langsung mengatakan "pesan lebih sedikit." Pembingkaian yang benar: <em>"Pertama, saya akan mengklasifikasikan SKU berdasarkan kekritisan (analisis ABC). Kemudian saya akan memahami biaya KEDUA-DUANYA, yaitu pemesanan berlebih (limbah) DAN pemesanan kurang (kehabisan stok + pengabaian keranjang). Kemudian saya akan memodelkan variabilitas permintaan pada tingkat hari-dalam-seminggu dan cuaca. Tujuannya bukan nol limbah — melainkan limbah optimal mengingat pertukaran biaya kehabisan stok."</em>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Case03;