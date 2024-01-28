import { Link } from '@remix-run/react';
import ProductForm from '../Product/ProductForm';
import discountsvg from '../../img/discountsvg.png'
export const meta = () => {
  return [
    { title: 'BuildMyBody | Featured Products' },
    {
      name: 'description',
      content: 'Explore the latest featured products on BuildMyBody. Find top-quality fitness products and supplements. Read reviews and testimonials from customers in New Delhi, Bangalore, Noida, and more.',
    },
    { name: 'keywords', content: 'BuildMyBody, Featured Products, Fitness Supplements, Reviews, Testimonials, Whey Protein, Bodybuilding' },
  ];
};

const TopSelling = ({ collection }) => {
  function calculateDiscountPercentage(mrp, discountedPrice) {
    const discount = ((mrp - discountedPrice) / mrp) * 100;
    return discount.toFixed(2);
  }

  return (
    <>
      <section id="featured-section">
        <div id="carouselExampleControls1" className="carousel slide" data-ride="carousel">
          <div className="d-flex justify-content-center mb-5" style={{ flexDirection: 'column', alignItems: 'center' }}>
            <h1 className="font-weight-bold custom-heading3">
              <em>Featured Products </em>
            </h1>
            <hr className="h1-hr" />
          </div>
          <div className="carousel-inner" id="featured-carousel">
            {collection.products.nodes.map((product, index) => (
              <div key={index} className={index === 0 ? 'carousel-item active' : 'carousel-item'}>
                <div className="row">
                  <Link
                    to={`/product/${product.handle}`}
                    className="col-md-5 col-lg-6 d-flex justify-content-center top-scale"
                    style={{ position: 'relative' }}
                  >
                    <div className='card-container'>
                      <img
                        className="featured-img"
                        src={product.variants.nodes[0]?.image?.url || ''}
                        alt={product.variants.nodes[0]?.image?.altText || ''}
                      />
                      <div className='featured-discount' >
                        <img src={discountsvg} className='w-100' alt="" />

                      </div>
                      <div className='disc' style={{ position: 'absolute', top: '47px', right: '-20px' }} >
                        <p className='text-light' style={{ fontWeight: '700', fontSize: '14px' }}>
                          {' '}
                          {Math.floor(calculateDiscountPercentage(
                            product.variants.nodes[0]?.compareAtPrice?.amount || 0,
                            product.variants.nodes[0]?.price?.amount || 0,
                          ))}
                          %
                        </p>
                      </div>
                    </div>

                  </Link>
                  <div className="col featured-details ">
                    <Link to={`/product/${product.handle}`}>
                      <h2 className="w-lg-75">{product.title}</h2>
                      {product.variants.nodes[0]?.compareAtPrice &&
                        product.variants.nodes[0]?.price && (
                          <>
                            <h4>
                              <del className="discount-text">
                                ₹
                                {product.variants.nodes[0]?.compareAtPrice
                                  ?.amount || ''}
                              </del>{' '}
                              ₹{product.variants.nodes[0]?.price?.amount || ''}
                            </h4>
                          </>
                        )}
                    </Link>
                    <div className="featured-btn">
                      <ProductForm
                        variantId={product.variants.nodes[0]?.id || ''}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls1"
            id="carousel-controls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls1"
            id="carousel-controls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default TopSelling;
