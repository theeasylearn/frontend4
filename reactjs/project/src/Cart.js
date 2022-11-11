import React, { Component } from 'react';
import PageHeading from './PageHeading';
class Cart extends Component {
    constructor(props) {
        super(props);
    }
    Item(props) {
        return (
            <tr className="text-sm">
                <td className="align-middle border-gray-300 py-3"><a href="#">
                    <img className="img-fluid flex-shrink-0"
                        src={props.photo} width="50" /></a>
                </td>

                <td className="align-middle border-gray-300 py-3"><a href="#">{props.title}</a></td>
                <td className="align-middle border-gray-300 py-3">
                {props.quantity}
                </td>
                <td className="align-middle border-gray-300 py-3">{props.price}</td>
                <td className="align-middle border-gray-300 py-3">{props.price * props.quantity}</td>
                <td className="align-middle border-gray-300 py-3">
                    <button className="btn btn-link p-0" type="button"><i className="fas fa-trash-alt"></i></button>
                </td>
            </tr>
        )
    }
    render() {
        return (
            <div>
                <PageHeading title='Cart' />
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-12'>
                            <p className="text-muted lead mb-5">You currently have 3 item(s) in your cart.</p>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-12'>
                            <form method="get" action="shop-checkout1.html">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr className="text-sm">
                                                <th className="border-gray-300 border-top py-3" colspan="2">Product</th>
                                                <th className="border-gray-300 border-top py-3">Quantity</th>
                                                <th className="border-gray-300 border-top py-3">Unit price</th>
                                               
                                                <th className="border-gray-300 border-top py-3">Total</th>
                                                <th className="border-gray-300 border-top py-3"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <this.Item title='T-shirt' price='1000' quantity='2' photo='/img/detailsquare.jpg'  />

                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th className="py-3 border-0" colspan="5"> <span className="h4 text-gray-700 mb-0">Total</span></th>
                                                <th className="py-3 border-0 text-end" colspan="2"> <span className="h4 text-gray-700 mb-0">$446.00</span></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;