import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FrozenFoodsPage = ({ addToCart, cartCount }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  // Sample product data for frozen foods (20 products)
  const products = [
    { id: 1, name: "Frozen Pizza", price: 6.99, image: "https://img.freepik.com/premium-photo/pizza-with-ham-smoked-meat-olives-slices-tomato-mushrooms-mozzarella-piece-is-cut-off-from-pizza-white-background-isolated-close-up_323569-287.jpg" },
    { id: 2, name: "Frozen Vegetables", price: 3.99, image: "https://thumbs.dreamstime.com/b/frozen-vegetables-package-isolated-white-transparent-background-300901197.jpg" },
    { id: 3, name: "Ice Cream", price: 4.99, image: "https://img.freepik.com/premium-photo/ice-cream-package-isolated-white-transparent-background_771335-65736.jpg" },
    { id: 4, name: "Frozen Fish", price: 7.99, image: "https://res.cloudinary.com/freshketimage001/image/upload/v1668769955/wlbkaydirjvpbryqfyr6.png" },
    { id: 5, name: "Frozen Chicken", price: 8.99, image: "https://img3.exportersindia.com/product_images/bc-small/2023/9/11755537/frozen-chicken-meat-1684924488-6908305.jpeg" },
    { id: 6, name: "Frozen Berries", price: 5.99, image: "https://media.istockphoto.com/id/1342815590/photo/frozen-fresh-strawberries-in-a-vacuum-bag.jpg?s=612x612&w=0&k=20&c=g5l3VFjLQBUGTOJMiwbcN_la6-3HyepwQvq0NMdto0I=https://example.com/frozen-berries.jpg" },
    { id: 7, name: "Frozen Bread", price: 2.99, image: "https://media.istockphoto.com/id/1332515258/photo/sliced-white-bread-in-plastic-bag-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=GD68fUwxM12_jdU1N1GY0T5dJgTIJFTV1s4PratY3Mk=https://example.com/frozen-bread.jpg" },
    { id: 8, name: "Frozen Meals", price: 6.49, image: "https://static.vecteezy.com/system/resources/thumbnails/042/841/583/small_2x/fried-chicken-with-french-fries-on-a-wooden-board-top-view-on-transparent-background-png.png" },
    { id: 9, name: "Frozen Dumplings", price: 4.99, image: "https://adl.jfconline.com.au/cdn/shop/products/57708.png?v=1635933881&width=900" },
    { id: 10, name: "Frozen Waffles", price: 3.49, image: "https://i5.walmartimages.com/seo/Eggo-Strawberry-Waffles-Frozen-Breakfast-10-Count-Regular_10a911e8-e43f-4e6f-a283-9e7055506037.78fd9de467e14c56be1ec24982dd9036.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" },
    { id: 11, name: "Frozen Yogurt", price: 5.49, image: "https://t3.ftcdn.net/jpg/02/34/17/14/360_F_234171420_rNqVlnEmgUAmMdZRcpQlRi3cvYQXLlI3.webp" },
    { id: 12, name: "Frozen Shrimp", price: 9.99, image: "https://i.pinimg.com/474x/e8/95/b6/e895b608f89aba078b9704c2c9862f67.jpgss" },
    { id: 13, name: "Frozen Sausages", price: 6.99, image: "https://vendor.shaqexpress.com/storage/19283/conversions/OOQg155Lb10XmOvd7pnwtSwGDTp6HI-metac2F1c2FnZS1zYWRpYS0wLXJlbW92ZWJnLXByZXZpZXcudjEgKDEpLnBuZw==--large.png" },
    { id: 14, name: "Frozen Beef", price: 11.99, image: "https://example.com/frozen-beef.jpg" },
    { id: 15, name: "Frozen Tofu", price: 3.99, image: "https://example.com/frozen-tofu.jpg" },
    { id: 16, name: "Frozen Corn", price: 2.49, image: "https://example.com/frozen-corn.jpg" },
    { id: 17, name: "Frozen Peas", price: 2.99, image: "https://example.com/frozen-peas.jpg" },
    { id: 18, name: "Frozen Pancakes", price: 4.49, image: "https://example.com/frozen-pancakes.jpg" },
    { id: 19, name: "Frozen Burritos", price: 3.99, image: "https://example.com/frozen-burritos.jpg" },
    { id: 20, name: "Frozen Spinach", price: 3.49, image: "https://example.com/frozen-spinach.jpg" },
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
        <h2>Frozen Foods</h2>
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
      <ToastContainer className="custom-toast-container" />
    </div>
  );
};

export default FrozenFoodsPage;
