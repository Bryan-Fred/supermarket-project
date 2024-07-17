import React, { useState, useEffect } from 'react';

const BreakfastPage = ({ addToCart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 20;

    // Sample product data for breakfast items (20 products)
    const products = [
        { id: 1, name: "Cereal", price: 3.99, image: "https://media.istockphoto.com/id/1030319626/photo/3d-rendering-of-corn-flakes-paper-packaging-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NXnFYsWMKXznwtfO-uIXZwblZ1eEjN8gYTMFghWKQH8=" },
        { id: 3, name: "Pancake Mix", price: 5.99, image: "https://alamarra.com/wp-content/uploads/2023/09/Chocolate-123.png" },
        { id: 4, name: "Maple Syrup", price: 6.99, image: "https://media.istockphoto.com/id/488472638/vector/bottle-of-maple-syrup.jpg?s=612x612&w=0&k=20&c=MbmzTEJEZUa3peKUyfExLGsIyYL7OAhlAaLRQf48B04=" },
        { id: 5, name: "Eggs", price: 2.49, image: "https://www.mompshop.com/cdn/shop/products/eggs_562bdcfe81_84b0507687_1.png?v=1662294332" },
        { id: 6, name: "Bacon", price: 4.99, image: "https://static.onecms.io/wp-content/uploads/sites/44/2022/09/27/Bacon-HERO-220f0b5aaf6b4d06a9bba94f00e5b3be.jpg" },
        { id: 7, name: "Bagels", price: 3.99, image: "https://www.acouplecooks.com/wp-content/uploads/2020/06/Bagel-Recipe-002.jpg" },
        { id: 8, name: "Bread", price: 2.99, image: "https://www.thespruceeats.com/thmb/8y5ekJ-Mfw29hK9urKDs4ag5RQ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-bread-in-a-bread-machine-995848-hero-01-86e320fcdde1430d9f86cfcdd7d5b179.jpg" },
        { id: 9, name: "Butter", price: 3.49, image: "https://www.seriouseats.com/thmb/x8hEUNUQy_NH5DxxnnPQCBg5mWQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20201105-butter-vicky-wasik-17-f9e98214f0194f23bd5e4397075a33e4.jpg" },
        { id: 10, name: "Jam", price: 4.99, image: "https://images-na.ssl-images-amazon.com/images/I/61rf5oo6xpL._SL1000_.jpg" },
        { id: 11, name: "Honey", price: 6.99, image: "https://images-na.ssl-images-amazon.com/images/I/61wN2+Rz5hL._SL1000_.jpg" },
        { id: 12, name: "Granola", price: 4.99, image: "https://images-na.ssl-images-amazon.com/images/I/61Vx2yOAlPL._SL1000_.jpg" },
        { id: 13, name: "Milk", price: 2.49, image: "https://www.dairygoodness.ca/media/article/file/AQ5_Milk_Feb2022-1080x720.jpg" },
        { id: 14, name: "Yogurt", price: 3.99, image: "https://www.thespruceeats.com/thmb/pB_wlg6eJjlfhwQ_Hmx7BDHsDJ8=/2121x1414/filters:fill(auto,1)/easiest-homemade-yogurt-recipe-1388586-hero-01-cd60ed2f11a5464d897b5b9b18f80527.jpg" },
        { id: 15, name: "Fruit Juice", price: 3.49, image: "https://images.squarespace-cdn.com/content/v1/5e7e12c7fcfab013a2e1f3b5/1614093946167-HYMGD0SOWVUV6YXYG0W6/Website+Photography-45.jpg" },
        { id: 16, name: "Smoothie Mix", price: 5.99, image: "https://cdn.shopify.com/s/files/1/0303/5170/8788/products/Naked-Food-Smoothie-Mix-front.png?v=1623246433" },
        { id: 17, name: "Protein Bars", price: 6.99, image: "https://images-na.ssl-images-amazon.com/images/I/81EsgX0gsrL._SL1500_.jpg" },
        { id: 18, name: "Coffee", price: 8.99, image: "https://www.nespresso.com/ncp/res/img/2023/summer/pg-coffee-routine.jpg" },
        { id: 19, name: "Tea", price: 4.99, image: "https://www.thespruceeats.com/thmb/xwhOjZ7Hyk0cu1-cbAIFlheUbAg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/types-of-tea-766933-hero-01-9b6e9c379d524a02bcdb9bbab4377a8f.jpg" },
        { id: 20, name: "Muffins", price: 5.49, image: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/2022-07/gluten-free-blueberry-muffins.jpg?itok=XT1xF77l" },
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

    return (
        <div className="toiletries-page">
            <div className="toiletries-page-unique">
                <h2>Breakfast</h2>
                <div className="products-unique">
                    {currentProducts.map(product => (
                        <div key={product.id} className="product-unique">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>${product.price.toFixed(2)}</p>
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
                <div className="pagination-unique">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={index + 1 === currentPage ? 'active' : ''}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BreakfastPage;
