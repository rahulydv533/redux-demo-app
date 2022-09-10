import React from 'react'

function Home(props) {
    console.warn("HomeProps",props)
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="data:image/jpeg;base64,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" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;
