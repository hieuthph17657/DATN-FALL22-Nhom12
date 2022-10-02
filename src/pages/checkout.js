import React from "react";
import '../styles/checkout.css';
import product1 from '../assets/images/product01.png'


function checkout() {
    return (
        <div>
            <div id="breadcrumb" class="section">
                <div class="container">
                    <div class="row">
                        <div class="a col-md-12">
                            <h3 class="breadcrumb-header">Checkout</h3>
                            <ul class="breadcrumb-tree">
                                <li><a href="#">Home</a></li>
                                <li class="active">Checkout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ckout">
                <div class="section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7">
                                <div class="billing-details">
                                    <div class="section-title">
                                        <h4><b>1. Thông tin đặt hàng</b></h4>
                                    </div>
                                    <div class="form info">
                                        <div class="form-group">
                                            <label>Họ và tên: </label>
                                            <input class="input" type="text" name="fullname" placeholder="Nhập họ và tên" />
                                        </div>
                                        <div class="form-group">
                                            <label>Số điện thoại: </label>
                                            <input class="input" type="tel" name="tel" placeholder="Nhập số điện thoại" />
                                        </div>
                                        <div class="form-group">
                                            <label>Email: </label>
                                            <input class="input" type="email" name="email" placeholder="Nhập email" />
                                        </div>
                                        <div class="form-group">
                                            <label>Tỉnh/ thành phố: </label>
                                            <input class="input" type="text" name="city" placeholder="Nhập tỉnh/thành phố" />
                                        </div>
                                        <div class="form-group">
                                            <label>Quận/ huyện: </label>
                                            <input class="input" type="text" name="district" placeholder="Nhập quận/huyện" />
                                        </div>
                                        <div class="form-group">
                                            <label>Phường/ xã</label>
                                            <input class="input" type="text" name="wards" placeholder="Nhập phường/xã" />
                                        </div>
                                        <div class="form-group">
                                            <label>Địa chỉ: </label>
                                            <input class="input" type="text" name="address" placeholder="Nhập địa chỉ cụ thể" />
                                        </div>
                                    </div>
                                </div>

                                <div class="shiping-details">
                                    <div class="section-title">
                                        <h4><b>2. Hình thức giao hàng</b></h4>
                                    </div>
                                    <div class="form info">
                                        <div class="rdo_giao_hang">
                                            <input type="radio" name="htgiaohang" id="giaohang1" checked />
                                            <span for="giaohang1">Nhận hàng tại nhà</span>
                                            <input type="radio" name="htgiaohang" id="giaohang2" />
                                            <span for="giaohang1">Nhận hàng tại cửa hàng</span>
                                        </div>
                                        <div>
                                            <table class="table">
                                                <tr>
                                                    <td><img src={product1} alt="" /></td>
                                                    <td>Laptop G3 3500 core i7 win10 home</td>
                                                    <td>$1250.00</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="y col-md-5 order-details">
                                <div class="order-summary">
                                    <div class="ord-pr">
                                        <h5><strong>Đơn hàng</strong></h5>
                                        <button class="btn km up">Sửa</button>
                                    </div>

                                    <div class="form-group1">
                                        <input class="input1" type="text" name="ma_km" placeholder="Mã giảm giá" />
                                        <button class="btn km check">Áp dụng</button>
                                    </div>
                                    <div class="order-products">
                                        <div class="order-col">
                                            <h6>2 sản phẩm</h6>
                                        </div>
                                        <div class="order-col">
                                            <div>2 x Laptop G3 3500</div>
                                            <div>$ 1250.00</div>
                                        </div>
                                        <hr></hr>
                                        <div class="order-col">
                                            <div><strong>Thành tiền:</strong></div>
                                            <div><strong class="order-total">$ 2500.00</strong></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="payment-method">
                                    <div class="pay-mtd">
                                        <h5><strong>Chọn hình thức thanh toán:</strong></h5>
                                        <div class="input-radio">
                                            <input type="radio" name="payment" id="payment-1" checked />
                                            <label for="payment-1">
                                                <span>Thanh toán khi nhận hàng</span>
                                            </label>
                                        </div>
                                        <div class="input-radio">
                                            <input type="radio" name="payment" id="payment-2" />
                                            <label for="payment-2">
                                                <span>Thanh toán qua chuyển khoản, tài khoản ngân hàng</span>
                                            </label>
                                        </div>
                                        <div class="input-radio">
                                            <input type="radio" name="payment" id="payment-3" />
                                            <label for="payment-3">
                                                <span>Thanh toán trực tiếp bằng VN Pay</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="bt-submit">
                                    <a href="#" class="primary-btn order-submit">Đặt hàng</a>
                                    <a href="#" class="btn btn-primary sub me-5">Chọn sản phẩm</a>
                                    <a href="#" class="btn btn-success sub">Tải file excel</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default checkout