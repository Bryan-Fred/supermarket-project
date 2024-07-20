import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToiletriesPage = ({ addToCart, cartCount }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  // Sample product data for toiletries (20 products)
  const products = [
    { id: 1, name: "Shampoo", price: 5.99, image: "https://theskinstory.in/cdn/shop/files/1_101b2734-5b84-4ccd-97c3-ea15e483f1f0.jpg?v=1704451340" },
    { id: 2, name: "Soap", price: 2.99, image: "https://springs.com.pk/cdn/shop/products/8901030005176.jpg?v=1650026762" },
    { id: 3, name: "Toothpaste", price: 3.99, image: "https://target.scene7.com/is/image/Target/GUEST_8c740ce1-71b7-41b4-93ad-ae50581232e6?wid=488&hei=488&fmt=pjpeg" },
    { id: 4, name: "Conditioner", price: 6.99, image: "https://i5.walmartimages.com/seo/Tresemme-Rich-Moisture-Rich-Moisture-Shampoo-and-Conditioner-28-oz-2-Count_52a93c3b-a4a8-4264-97e8-096a9d81ef6f.2c69d6cb75ed84211fee8e8bcc1550e0.jpeg" },
    { id: 5, name: "Lotion", price: 4.99, image: "https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//j/o/johnson-s-baby-lotion-500ml_2.jpg" },
    { id: 6, name: "Body Wash", price: 7.99, image: "https://i5.walmartimages.com/seo/Dove-Pampering-Long-Lasting-Gentle-Women-s-Body-Wash-All-Skin-Type-Shea-Butter-Vanilla-30-fl-oz_6e045b7a-5489-4a22-be56-05202865c5d7.7573a922808968a4836e0aa0a24def57.jpeg" },
    { id: 7, name: "Hand Sanitizer", price: 2.99, image: "https://m.media-amazon.com/images/I/71-Hc6cJRmL._SL1500_.jpg" },
    { id: 8, name: "Face Wash", price: 6.99, image: "https://kaizenseven.com/cdn/shop/files/kaizen-face-wash-product.webp?v=1683307651" },
    { id: 9, name: "Deodorant", price: 4.99, image: "https://cdn0.woolworths.media/content/wowproductimages/large/231529.jpg" },
    { id: 10, name: "Shaving Cream", price: 3.99, image: "https://www.fendrihan.ca/cdn/shop/products/ES-26004-01_320x.jpg?v=1556301433" },
    { id: 11, name: "Toothbrush", price: 1.99, image: "https://www.rios.pk/cdn/shop/files/Oral-B-Pro-3---3000-Sensitive-Clean-Electric-Toothbrush.gif?v=1698925078" },
    { id: 12, name: "Mouthwash", price: 5.99, image: "https://www.mon-pharmacien-conseil.com/14315-large_default/listerine-mouthwash-tooth-and-gum-protection-250-ml.jpg" },
    { id: 13, name: "Hand Soap", price: 3.49, image: "https://fetchnbuy.in/cdn/shop/products/111_2_3_grande.jpg?v=1637738977" },
    { id: 14, name: "Cotton Balls", price: 1.99, image: "https://www.pngitem.com/pimgs/m/68-683912_cotton-ball-png-free-image-download-food-transparent.png" },
    { id: 15, name: "Q-tips", price: 2.49, image: "https://i5.walmartimages.com/seo/Q-tips-Cotton-Swabs-375-ct-Pack-of-12_b024323c-4b57-4f2e-967e-4ae332bfe7f9.caf5ddb794a045d1f1eca0467bbc2063.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" },
    { id: 16, name: "Body Lotion", price: 5.49, image: "https://www.kindpng.com/picc/m/651-6519817_nivea-body-lotion-intensive-moisture-nivea-moisturizer-body.png" },
    { id: 17, name: "Lip Balm", price: 1.49, image: "https://png.pngtree.com/png-vector/20230424/ourmid/pngtree-lipstick-lip-balm-beautiful-png-image_6727299.png" },
    { id: 18, name: "Sunscreen", price: 8.99, image: "https://i.ebayimg.com/images/g/MRYAAOSw-7dkkFLG/s-l400.jpg" },
    { id: 19, name: "Hair Gel", price: 3.49, image: "https://www.neora.com/-/media/Shared/Products/Product-Images/Proluxe-Hair-Care-System---7198/PDP-ProLuxeHairCareSystem-Primary.png" },
    { id: 20, name: "Shower Gel", price: 6.49, image: "https://atlas-content-cdn.pixelsquid.com/assets_v2/260/2602360635886933400/previews/G03-200x200.jpg" },
  ];

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    // Scroll to top when the component mounts or the currentPage changes
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="main-products-pages">
      <div className="products-pages-unique">
        <h2>Toiletries</h2>
        <div className="products-unique">
          {currentProducts.map(product => (
            <div key={product.id} className="product-unique">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="pagination-unique">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
      {/*<ToastContainer className="custom-toast-container" />*/}
    </div>
  );
};

export default ToiletriesPage;
