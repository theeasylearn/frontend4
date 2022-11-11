import React, { Component } from 'react';
import PageHeading from './PageHeading';
class Category extends Component {
    constructor(props) {
        super(props);
    }
    Item(props) {
        return(
            <div className='col-lg-3 col-md-6'>
                <div className="product h-100">
                <div className="product-image">
                    <a href="/products">
                        <img className="img-fluid" src={props.photo}  />
                    </a>
                </div>
                <div className="py-4 px-3 text-center">
                <h3 className="h5 text-uppercase mb-3"><a className="reset-link" href="/products">{props.title}</a></h3>
                </div>
                </div>
            </div>
        )
    }
    render() { 
        return (
            <div>
            <PageHeading title='Shop' />
            <section className="py-5">
                <div className="container py-4">
                    <div className="row gy-5 align-items-stretch">
                        <this.Item title='Girls' photo='/img/product1.jpg' />
                        <this.Item title='Boys' photo='/img/product2.jpg' />
                        <this.Item title='Kids' photo='/img/product3.jpg' />
                    </div>
                </div>
            </section>
            </div>
         );
    }
}

export default Category;