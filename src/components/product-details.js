const ProductDetails = ({ product , addToCart}) => {
  return (
    <div className="container my-5">
      <div className="row d-flex flex-row">
        <div className="col-md-5 ">
          <img className="img-fluid  " src={product.image} alt={product.name} />
        </div>
        <div className="col-md-2 product-small d-flex flex-md-column justify-content-start order-md-first ">
          <img className="img-thumbnail" src={product.images[0]} alt="" />
          <img className="img-thumbnail" src={product.images[1]} alt="" />
          <img className="img-thumbnail" src={product.images[2]} alt="" />
        </div>

        <div className="col-md-5">
          <h6 className="text-uppercase text-secondary">{product.category}</h6>
          <h2 className="fs-3">{product.name}</h2>
          <h5 className="text-secondary fs-6 fw-bold">${product.price}</h5>
          <div className="text-secondary text-small">Color :</div>
          <div className="my-2">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autocomplete="off"
                checked={product.color=="red"}
              />
              <label className="btn btn-success color-label" for="btnradio1">
                <i className="bi bi-check2"></i>
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autocomplete="off"
                checked={product.color=="purple"}
              />
              <label className="btn btn-primary color-label" for="btnradio2">
                <i className="bi bi-check2"></i>
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio3"
                autocomplete="off"
                
                checked={product.color=="black"}
              />
              <label className="btn btn-dark color-label" for="btnradio3">
                <i className="bi bi-check2"></i>
              </label>
            </div>
          </div>

          <div className="text-secondary text-small">Size : </div>
          <div className="my-2">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="size"
                id="btnradio4"
                autocomplete="off"
                checked={product.size=="S"}
              />
              <label className="btn btn-outline-dark" for="btnradio4">
                S
              </label>

              <input
                type="radio"
                className="btn-check"
                name="size"
                id="btnradio5"
                autocomplete="off"
                checked={product.size=="L"}
              />
              <label className="btn btn-outline-dark" for="btnradio5">
                M
              </label>

              <input
                type="radio"
                className="btn-check"
                name="size"
                id="btnradio6"
                autocomplete="off"
                checked={product.size=="M"}
              />
              <label className="btn btn-outline-dark" for="btnradio6">
                L
              </label>
            </div>
          </div>

          <button className="btn btn-dark w-100 my-4" onClick={()=>addToCart(product)}>
            <i className="bi bi-cart-plus-fill"></i>ADD TO CART
          </button>

          <div>
            <span className="text-secondary text-small"> Details :</span>

            <div className="accordion accordion-flush" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>
                      This is the first item's accordion body. Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Accusamus
                      voluptatem mollitia quis recusandae dolores aliquam est
                      maiores magnam assumenda pariatur explicabo fuga amet, ea
                    </strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>
                      This is the second item's accordion body. Lorem ipsum
                      dolor sit amet consectetur, adipisicing elit. Amet
                      perspiciatis facere quibusdam tempore officia facilis id
                    </strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>
                      This is the third item's accordion body. Lorem ipsum
                      dolor, sit amet consectetur adipisicing elit.
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
