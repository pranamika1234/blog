export default function Products() {
  return (
    <section className="section container">
      <h2 className="gold-text text-center mb-5">
        Recommended Luxury Products
      </h2>

      <div className="row g-4 justify-content-center">
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card p-4 h-100">
            <h5>Gold Infused Serum</h5>
            <p>Boosts glow and reduces aging signs.</p>
            <a href="#" className="gold-btn">Buy Now(currently unavailable)</a>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card p-4 h-100">
            <h5>Luxury Night Cream</h5>
            <p>Deep nourishment for flawless skin.</p>
            <a href="#" className="gold-btn">Buy Now (currently unavailable)</a>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <h3 className="gold-text text-center mt-5 mb-3"> Gold Skin Gallery</h3>
      <div className="row g-3 justify-content-center gallery-row">
        {[1,2,3,4,5].map(num => {
          const imgSrc = num === 1 ? '/goldskin.jfif' : `/goldskin${num}.jfif`;
          return (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 gallery-item" key={num}>
              <div className="card p-2 bg-black border-gold h-100 d-flex align-items-center justify-content-center">
                <img
                  src={imgSrc}
                  alt={`Luxury Product ${num}`}
                  className="img-fluid rounded"
                  style={{objectFit: 'cover', width: '100%', maxHeight: '140px'}}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
