export default function Routine() {
  return (
    <section className="section container">
      <h2 className="gold-text text-center mb-5">Daily Skin Care Routine</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card p-4">
            <h5>Morning Routine</h5>
            <p>Protection & Hydration. |  Cleanser , Toner, Serum, Moisturizer, Sunscreen.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4">
            <h5>Evening Routine</h5>
            <p>Cleansing & Scrubbing | Deep cleansing, retinol, hydration therapy.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4">
            <h5>Night Care</h5>
            <p>Repair and regeneration | Double Cleansing, Serum, Eye Cream, Sleeping Mask.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
