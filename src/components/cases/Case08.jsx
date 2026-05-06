const Case08 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 08</span>
        <h1>The Attribution Blind Spot</h1>
        <div className="case-meta">Industry: Media / CPG / Advertising &bull; Level: Advanced</div>
      </header>
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p><strong>SparkBev</strong> is a leading global beverage company. Last year, they spent <strong>$120 Million</strong> on marketing across various channels: TV, YouTube, Facebook, Google Search, and In-store displays.</p>
          <p>In the advertising world, the "Holy Grail" is knowing exactly which dollar spent led to which dollar earned. This is the domain of <strong>Marketing Mix Modeling (MMM)</strong>.</p>
          <div className="highlight-box">
            <strong>Stakeholders:</strong> Chief Marketing Officer (CMO), Finance Director, Brand Managers.<br />
            <strong>Context:</strong> Digital channels (Facebook/Google) report high "Last-Click" ROAS, but total company sales are stagnant. The CMO suspects that digital platforms are taking credit for sales that would have happened anyway.
          </div>
        </div>
      </section>
      <section>
        <h2>2. Business Problem</h2>
        <div className="content">
          <p>SparkBev is suffering from <strong>"Attribution Fragmentation."</strong></p>
          <ul>
            <li><strong>The Last-Click Fallacy:</strong> If a customer sees a TV ad, then a Billboard, then finally clicks a Google Search ad to buy, Google takes 100% of the credit.</li>
            <li><strong>Diminishing Returns:</strong> The marketing team keeps increasing the Facebook budget, but the incremental sales per dollar are dropping. They've hit the "Saturation Point."</li>
            <li><strong>The Adstock Effect:</strong> A TV ad seen on Monday might influence a purchase on Saturday. Most digital models ignore this "Carryover Effect."</li>
            <li><strong>Business Impact:</strong> Marketing efficiency is down 15%, and the Finance team is threatening to cut the budget by $20M unless ROI can be proven.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <p>The goal is to build a <strong>Top-Down Marketing Mix Model</strong> to determine the "True Contribution" of each channel and optimize the budget for the next fiscal year.</p>
          <div className="highlight-box">
            <strong>Key Questions:</strong>
            <ol>
              <li>What is the base level of sales we would get with <strong>zero</strong> marketing?</li>
              <li>What is the "Saturation Curve" (Hill Function) for each channel?</li>
              <li>How should we reallocate $20M from low-performing to high-performing channels to maximize total revenue?</li>
            </ol>
          </div>
        </div>
      </section>
      <section>
        <h2>4. Data Perspective</h2>
        <div className="content">
          <p>We are using 3 years of weekly time-series data:</p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Variable Type</th>
                <th>Examples</th>
                <th>Role in Model</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Target (DV)</strong></td>
                <td>Weekly Revenue, Unit Sales.</td>
                <td>The outcome we want to explain.</td>
              </tr>
              <tr>
                <td><strong>Media Spend (IV)</strong></td>
                <td>TV GRPs, Digital Impressions, Search Clicks.</td>
                <td>The levers we control.</td>
              </tr>
              <tr>
                <td><strong>Control (Exog)</strong></td>
                <td>Price changes, Competitor spend, Seasonality (Holidays).</td>
                <td>Accounting for "Noise."</td>
              </tr>
              <tr>
                <td><strong>External</strong></td>
                <td>Weather (Temperature for beverages), Economic Index.</td>
                <td>Baseline drivers.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2>5. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <ol>
            <li><strong>Decomposition:</strong> We first separate "Base Sales" (driven by brand equity, price, and distribution) from "Incremental Sales" (driven by marketing).</li>
            <li><strong>Adstock Transformation:</strong> We don't use raw spend. We transform TV spend into "Adstock" using a decay factor (e.g., 0.7). This reflects the fact that TV has a long memory in the consumer's mind.</li>
            <li><strong>Saturation Modeling:</strong> We apply a non-linear "S-curve" to the spend. This accounts for the fact that the first $1M spent is more effective than the 50th $1M spent.</li>
            <li><strong>Contribution Analysis:</strong> We find that while Search has the highest "reported" ROI, TV is actually the biggest driver of the Search traffic itself.</li>
          </ol>
        </div>
      </section>
      <section>
        <h2>6. Calculation & Simulation</h2>
        <div className="content">
          <p>Let's calculate the <strong>Marginal Return on Ad Spend (mROAS)</strong> to guide budget reallocation.</p>
          <div className="calculation">
{`Current State:
Channel: Facebook
Current Spend: $10M
Total Sales Driven: $40M
ROAS: 4.0x
The Hill Function (Saturation) Analysis reveals:
If we spend $1M more ($11M total), Sales increase to $40.5M.
mROAS = ($40.5M - $40M) / $1M = `}<span className="math-result">0.5x</span>
{`Channel: YouTube (Under-saturated)
Current Spend: $5M
Total Sales Driven: $15M
ROAS: 3.0x
If we spend $1M more ($6M total), Sales increase to $18.5M.
mROAS = ($18.5M - $15M) / $1M = `}<span className="math-result">3.5x</span>
{`Conclusion: Even though Facebook's total ROAS is higher (4.0 vs 3.0), we should move money to YouTube because its MARGINAL return is much higher (3.5 vs 0.5).`}
          </div>
        </div>
      </section>
      <section>
        <h2>7. Findings & Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <ul>
              <li><strong>The Synergy Effect:</strong> When TV ads are running, the click-through rate (CTR) on Search ads increases by 25%. TV "primes" the audience.</li>
              <li><strong>Saturation Point:</strong> Facebook spend becomes inefficient after $8M per month. Any spend above this is "burning money."</li>
              <li><strong>The Weather Factor:</strong> For SparkBev, a 1°C increase in average temperature is worth $2M in "Base Sales," regardless of marketing.</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>8. Recommendations</h2>
        <div className="content">
          <p><strong>Short-Term:</strong></p>
          <ul>
            <li><strong>Reallocate $15M:</strong> Shift budget from over-saturated Facebook campaigns to YouTube and Search "Brand terms."</li>
            <li>Implement <strong>Geo-Testing</strong>: Turn off all marketing in one specific city for 2 weeks to measure the "True Incrementality" (The "Hold-out" test).</li>
          </ul>
          <p><strong>Long-Term:</strong></p>
          <ul>
            <li>Move to a <strong>Unified Measurement</strong> approach: Combine MMM (Strategic/Long-term) with Attribution (Tactical/Short-term) to get a 360-degree view.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>9. Business Decision-Making</h2>
        <div className="content">
          <p>The CMO decides to:</p>
          <ol>
            <li><strong>Change KPIs:</strong> Stop using "Last-Click ROAS" as the primary metric for the digital team. Replace it with "Incremental ROAS" derived from the MMM.</li>
            <li><strong>Budget Flexibility:</strong> Move to a "Fluid Budget" model where money can be shifted between channels monthly based on the Marginal ROI curves.</li>
          </ol>
        </div>
      </section>
      <section>
        <h2>10. Professional Analyst Mindset</h2>
        <div className="content">
          <p><strong>Senior Perspective:</strong> Digital platforms are incentivized to show you high ROI. A senior analyst is naturally skeptical. They know that <strong>"Correlation is not Incremental."</strong> Just because someone clicked an ad and bought doesn't mean the ad *caused* the purchase.</p>
          <div className="highlight-box">
            <strong>Key Lesson:</strong> Marketing is a complex system. You cannot optimize one channel in a vacuum. **MMM is the "Truth Filter" that keeps the marketing department honest and the CFO happy.**
          </div>
        </div>
      </section>
    </div>
  );
};
export default Case08;
