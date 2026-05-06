const Case10 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 10</span>
        <h1>The Hidden Links in the Basket</h1>
        <div className="case-meta">Industry: Retail / Supermarkets &bull; Level: Intermediate</div>
      </header>
      <section>
        <h2>1. Business Background</h2>
        <div className="content">
          <p><strong>MarketMingle</strong> is a national supermarket chain with over 400 locations. In the grocery world, the "Basket" is the unit of measure. Every time a customer walks through the door, the goal is to increase their <strong>Average Basket Size</strong> and <strong>Average Basket Value</strong>.</p>
          <p>Supermarkets operate on high volume and low margins. A small increase in the number of items per transaction can lead to millions in incremental profit across the network.</p>
          <div className="highlight-box">
            <strong>Stakeholders:</strong> Merchandising Director, Store Layout Designer, Marketing Manager.<br />
            <strong>Context:</strong> MarketMingle's current store layout is "Category-Centric" (all pasta together, all sauces together). While logical, it doesn't necessarily reflect how people *actually* shop for meals.
          </div>
        </div>
      </section>
      <section>
        <h2>2. Business Problem</h2>
        <div className="content">
          <p>MarketMingle is suffering from <strong>"Transactional Isolation."</strong></p>
          <ul>
            <li><strong>The Missed Cross-Sell:</strong> Customers come in for a specific item (e.g., charcoal) but forget the secondary item (e.g., lighter fluid or fire starters) because they are in different aisles.</li>
            <li><strong>Generic Promotions:</strong> The marketing team sends "20% off Cereal" coupons to everyone, even if they never buy cereal, wasting margin on items the customer was going to buy anyway.</li>
            <li><strong>Inefficient Layout:</strong> High-affinity items are often placed so far apart that customers get "Store Fatigue" and leave before completing their potential meal list.</li>
            <li><strong>Business Impact:</strong> Stagnant "Items Per Basket" (IPB) metric at 6.2, while industry leaders are at 7.5.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>3. Analytics Objective</h2>
        <div className="content">
          <p>The goal is to perform <strong>Market Basket Analysis (MBA)</strong> using the <strong>Apriori Algorithm</strong> to find "Association Rules" between products.</p>
          <div className="highlight-box">
            <strong>Key Questions:</strong>
            <ol>
              <li>Which products are "Anchors" (items that pull people into the store)?</li>
              <li>What is the "Lift" of placing wine near the premium cheese section?</li>
              <li>Can we identify "Meal Clusters" to create bundled "Grab-and-Go" displays?</li>
            </ol>
          </div>
        </div>
      </section>
      <section>
        <h2>4. Data Perspective</h2>
        <div className="content">
          <p>We are analyzing millions of anonymized Point-of-Sale (POS) transaction logs:</p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Variable</th>
                <th>Description</th>
                <th>Role in Analysis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>Transaction_ID</code></td>
                <td>Unique identifier for every receipt.</td>
                <td>Grouping items into "Baskets."</td>
              </tr>
              <tr>
                <td><code>SKU / Item_Name</code></td>
                <td>The specific product purchased.</td>
                <td>Identifying item pairs and sets.</td>
              </tr>
              <tr>
                <td><code>Quantity</code></td>
                <td>Number of units per item.</td>
                <td>Volume weightings.</td>
              </tr>
              <tr>
                <td><code>Timestamp</code></td>
                <td>Date and time of the transaction.</td>
                <td>Seasonal and time-of-day affinity.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2>5. Step-by-Step Analytical Thinking</h2>
        <div className="content">
          <p>We use three core metrics to evaluate associations:</p>
          <ol>
            <li><strong>Support:</strong> How popular is an itemset? (e.g., what % of all baskets contain both Beer and Diapers?)</li>
            <li><strong>Confidence:</strong> If a customer buys Item A, how likely are they to buy Item B? (Probability of B given A).</li>
            <li><strong>Lift:</strong> How much *more* likely is Item B to be bought when Item A is present, compared to when it's not?
              <ul>
                <li><strong>Lift &gt; 1:</strong> Strong positive association (they are "linked").</li>
                <li><strong>Lift = 1:</strong> No association (they are independent).</li>
                <li><strong>Lift &lt; 1:</strong> Negative association (they are "substitutes").</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>
      <section>
        <h2>6. Calculation & Simulation</h2>
        <div className="content">
          <p>Let's calculate the association between <strong>Pasta</strong> and <strong>Premium Wine</strong>.</p>
          <div className="calculation">
{`Total Transactions: 100,000
Transactions with Pasta: 10,000 (10% Support)
Transactions with Wine: 5,000 (5% Support)
Transactions with BOTH: 2,000 (2% Support)
Confidence (Pasta -> Wine):
P(Wine | Pasta) = (Both) / (Pasta) = 2,000 / 10,000 = `}<span className="math-result">20%</span>
{`Lift (Pasta -> Wine):
Lift = Confidence / P(Wine) = 0.20 / 0.05 = `}<span className="math-result">4.0</span>
{`Interpretation: A customer buying pasta is 4 times MORE likely to buy wine than a random customer. 
This is a very strong "Meal-based" association.`}
          </div>
        </div>
      </section>
      <section>
        <h2>7. Findings & Insights</h2>
        <div className="content">
          <div className="highlight-box">
            <ul>
              <li><strong>The "New Parent" Cluster:</strong> Strong affinity between Diapers, Baby Wipes, and... <strong>Energy Drinks</strong>. (Lift: 3.2). <em>Action:</em> Place energy drinks near the baby section for "exhausted parent" impulse buys.</li>
              <li><strong>The "Taco Tuesday" Syndrome:</strong> Ground beef, taco shells, and avocados have a 70% confidence level on Tuesday afternoons but only 15% on Saturdays.</li>
              <li><strong>Hidden Substitute:</strong> When "Premium Brand A Milk" is out of stock, customers buy "Store Brand B" 90% of the time. However, if "Fresh Organic Berries" are out, they buy <strong>nothing</strong> in the produce section 40% of the time.</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>8. Recommendations</h2>
        <div className="content">
          <p><strong>Short-Term:</strong></p>
          <ul>
            <li><strong>"Adjacent Merchandising":</strong> Place high-lift pairs together (e.g., expensive crackers next to the specialty cheese fridge).</li>
            <li><strong>Bundled Deals:</strong> Create a "Family Taco Kit" (Beef + Shells + Salsa) at a 5% discount to ensure the customer completes the "Meal Basket" at your store.</li>
          </ul>
          <p><strong>Long-Term:</strong></p>
          <ul>
            <li><strong>Dynamic Couponing:</strong> If a customer scans Pasta at the self-checkout, trigger a 10% off coupon for Premium Wine on the receipt (or app).</li>
            <li><strong>Store Re-layout:</strong> Place "Anchor" items (Milk, Bread) at the back of the store and place "High-Lift" impulse items (Gourmet snacks) along the path to those anchors.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>9. Business Decision-Making</h2>
        <div className="content">
          <p>The Merchandising Director decided to:</p>
          <ol>
            <li><strong>Abandon Category-Only Layouts:</strong> Introduce "Thematic End-caps" (e.g., a "Movie Night" end-cap with popcorn, soda, and candy) that changes weekly.</li>
            <li><strong>Vendor Negotiations:</strong> Charge suppliers more for "Strategic Placement" near high-affinity anchor items, creating a new "Retail Media" revenue stream.</li>
          </ol>
        </div>
      </section>
      <section>
        <h2>10. Professional Analyst Mindset</h2>
        <div className="content">
          <p><strong>Senior Perspective:</strong> Beginners look for "The Rules." Seniors look for <strong>"The Story."</strong> Why are people buying these things together? Is it a habit, a meal, or a specific life stage? Understanding the <strong>Intent</strong> behind the basket is more powerful than the math alone.</p>
          <div className="highlight-box">
            <strong>Key Lesson:</strong> Association is not just about sales; it's about <strong>Convenience</strong>. If you make it easy for the customer to find what they didn't know they needed, you win their loyalty.
          </div>
        </div>
      </section>
    </div>
  );
};
export default Case10;
