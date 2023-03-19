import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Product() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Add isLoading state

    useEffect(() => {
        setIsLoading(true);
        axios.get('/items?_='+Math.random())
            .then(res => {
                setItems(res.data);
                setTimeout(() => setIsLoading(false), 800); // add a delay of 500ms
            })
            .catch(err => console.log(err));
    }, []);


    return (
        <div>
            <div className="card">
                <div className="cardTwo">
                    {isLoading ? (
                        <div className="loading-container">
                            <div className="loading"></div>
                        </div>
                    ) : (
                        items.map((item, index) => (
                            <div className={`cardProdOne cardProdOne-${index}`} key={item._id}>
                                <div className={`bgProductImageOne bgProductImageOne-${index}`}>
                                    <img src={`/${item.imageProduct}`} alt="chaise" style={{ width: '80%', height: 'auto' }} />
                                </div>
                                <div className="infoProd">
                                    <h1>{item.titleProduct}</h1>
                                </div>
                                <div className="info-desc-prod">
                                    <div className="item-info">
                                        <span className="label">Material:</span>
                                        <span className="value">{item.material}</span>
                                    </div>
                                    <div className="item-info">
                                        <span className="label">Item dimensions:</span>
                                        <span className="value">{item.dimensions}</span>
                                    </div>
                                    <div className="item-info">
                                        <span className="label">Fourniture finish:</span>
                                        <span className="value">{item.FournitureFinish}</span>
                                    </div>
                                    <div className="item-info">
                                        <span className="label">Item weight:</span>
                                        <span className="value">{item.weight} kilograms</span>
                                    </div>
                                </div>
                                <div id="color-picker">
                                    <div className="color" style={{ backgroundColor: 'white' }}></div>
                                    <div className="color" style={{ backgroundColor: '#d35c6ede' }}> </div>
                                    <div className="color" style={{ backgroundColor: 'green' }}> </div>
                                    <div className="color" style={{ backgroundColor: '#2467aace' }}></div>
                                    <div className="color selected" style={{ backgroundColor: 'black' }} ></div>
                                </div>
                                <div className="price">
                                    <span className="original-price">{item.oldPrice}DH</span>
                                    <span className="promo-price">{item.NewPrice}DH</span>
                                </div>
                                <button className="btn-buy" id={`buy-now-${index}`}>Buy Now</button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>

    );
}

export default Product;
