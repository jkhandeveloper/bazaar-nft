export default function PopularCollection() {
  return (
    <section className="py-5 px-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold mb-0">Popular Collection</h5>
        <div>
          <button className="btn btn-light rounded-circle me-2 shadow-sm">
            <i className="bi bi-arrow-left"></i>
          </button>
          <button className="btn btn-light rounded-circle shadow-sm">
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="row gy-4">
        {[1, 2, 3].map((card, index) => (
          <div className="col-md-4" key={index}>
            <div className="card border-0 shadow-sm rounded-4">
              <div className="row g-0">
                <div className="col-7">
                  <img
                    src={`/images/popular${index + 1}-main.jpg`}
                    className="img-fluid rounded-start-4 h-100 object-fit-cover"
                    alt="Main NFT"
                  />
                </div>
                <div className="col-5 d-flex flex-column gap-2 p-2">
                  {[1, 2].map((img, i) => (
                    <img
                      key={i}
                      src={`/images/popular${index + 1}-side${i + 1}.jpg`}
                      className="img-fluid rounded-3"
                      style={{ height: "50%" }}
                      alt={`NFT ${i}`}
                    />
                  ))}
                </div>
              </div>
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-0 fw-semibold">
                    {index === 0
                      ? "Trading Cards"
                      : index === 1
                      ? "Azuki"
                      : "Prime Ape Planet"}
                  </h6>
                  <small className="text-muted">538 Items</small>
                </div>
                <div className="text-muted d-flex align-items-center">
                  <i className="bi bi-heart me-1"></i>
                  <small>82</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
