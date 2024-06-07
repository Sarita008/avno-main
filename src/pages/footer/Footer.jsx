const Footer = () => {
    const footerItem = [
        {
            content: 'Fashion',
            category: 'Quick Shop'
        },
        {
            content: 'Men',
            category: 'Quick Shop'
        },
        {
            content: 'Furniture',
            category: 'Quick Shop'
        },
        {
            content: 'Home Decor',
            category: 'Quick Shop'
        },
        {
            content: 'Shoes',
            category: 'Quick Shop'
        },
        {
            content: 'About us',
            category: 'Informations'
        },
        {
            content: 'Contact Us',
            category: 'Informations'
        },
        {
            content: 'Career',
            category: 'Informations'
        },
        {
            content: 'My Account',
            category: 'Informations'
        },
        {
            content: 'Orders and Returns',
            category: 'Informations'
        },
        {
            content: 'Help & FAQs',
            category: 'Customer Services'
        },
        {
            content: 'Returns Policy',
            category: 'Customer Services'
        },
        {
            content: 'Terms & Conditions',
            category: 'Customer Services'
        },
        {
            content: 'Privacy Policy',
            category: 'Customer Services'
        },
        {
            content: 'Support Center',
            category: 'Customer Services'
        }
    ]
    const quick_shop = footerItem.filter((value) => value.category === 'Quick Shop')
    const information = footerItem.filter((value) => value.category === 'Informations')
    const customer_service = footerItem.filter((value) => value.category === 'Customer Services')
    return (
        <div className="footer">
            <div className="shop-now">
                All items under $100 with free shipping. Limited time only. Shop Now <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className="footer-main-content">
                <div className="footer-content">
                    <div className="footer-items">
                        <h3>Quick Shop</h3>
                        {
                            quick_shop.map((value) => {
                                return (
                                    <div key={Math.random()}>{value.content}</div>
                                )
                            })
                        }
                    </div>
                    <div className="footer-items">
                        <h3>Informations</h3>
                        {
                            information.map((value) => {
                                return (
                                    <div key={Math.random()}>{value.content}</div>
                                )
                            })
                        }
                    </div>
                    <div className="footer-items">
                        <h3>Customer Services</h3>
                        {
                            customer_service.map((value) => {
                                return (
                                    <div key={Math.random()}>{value.content}</div>
                                )
                            })
                        }
                    </div>
                    <div className="footer-items">
                        <h3>Newsletter</h3>
                        <div>Enter your email to receive daily news and get 20% <br /> off coupon for all items. NO spam, we promise</div>
                        <div>
                            <input type="mail" placeholder="Email address" required/>
                        </div>
                        <button>SUBSCRIBE</button>
                    </div>

                </div>
                <div className="footer-rights">
                    <div>© 2024 Avone. All Rights Reserved</div>
                    <div>
                        <i className="fa-solid fa-arrow-up"></i>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;