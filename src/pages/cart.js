import React from "react";
import '../styles/cart.css';

function cart() {
    return (
        <div class="container">
            <div class="mt-3">
                <body>
                    <div id="w">
                        <header id="title">
                            <h1>Giỏ hàng</h1>
                        </header>
                        <div id="page">
                            <div class="d-md-flex justify-content-md-center">
                                <table id="cart">
                                    <thead>
                                        <tr class="text-center">
                                            <th class="first">Ảnh</th>
                                            <th class="second">Số lượng</th>
                                            <th class="third">Sản phẩm</th>
                                            <th class="fourth">Tổng tiền</th>
                                            <th class="fifth">&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="productitm">
                                            <td><img src="https://i.imgur.com/8goC6r6.png" class="thumb" /></td>
                                            <td><input type="number" value="1" min="0" max="99" class="qtyinput" /></td>
                                            <td>Design Bundle Package</td>
                                            <td>$79.00</td>
                                            <td><span class="remove"><img src="https://i.imgur.com/h1ldGRr.png" alt="X" /></span></td>
                                        </tr>
                                        <tr class="productitm">
                                            <td><img src="https://i.imgur.com/RkzoXzZ.png" class="thumb" /></td>
                                            <td><input type="number" value="1" min="0" max="99" class="qtyinput" /></td>
                                            <td>Stuff on my Cat: The Book</td>
                                            <td>$8.95</td>
                                            <td><span class="remove"><img src="https://i.imgur.com/h1ldGRr.png" alt="X" /></span></td>
                                        </tr>
                                        <tr class="productitm">
                                            <td><img src="https://i.imgur.com/vZ26Uwy.png" class="thumb" /></td>
                                            <td><input type="number" value="1" min="0" max="99" class="qtyinput" /></td>
                                            <td>SpongeBob's First 100 Episodes</td>
                                            <td>$75.00</td>
                                            <td><span class="remove"><img src="https://i.imgur.com/h1ldGRr.png" alt="X" /></span></td>
                                        </tr>
                                        <tr class="productitm">
                                            <td><img src="https://i.imgur.com/tEdRnz4.png" class="thumb" /></td>
                                            <td><input type="number" value="1" min="0" max="99" class="qtyinput" /></td>
                                            <td>JavaScript &amp; jQuery: The Missing Manual</td>
                                            <td>$27.50</td>
                                            <td><span class="remove"><img src="https://i.imgur.com/h1ldGRr.png" alt="X" /></span></td>
                                        </tr>

                                        <tr class="extracosts">
                                            <td class="light">Phí vận chuyển :</td>
                                            <td colspan="2" class="light"></td>
                                            <td>$35.00</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr class="totalprice">
                                            <td class="light">Tổng :</td>
                                            <td colspan="2">&nbsp;</td>
                                            <td colspan="2"><span class="thick">$225.45</span></td>
                                        </tr>

                                        <tr class="checkoutrow">
                                            <td colspan="5" class="checkout"><button id="submitbtn">Đặt hàng ngay!</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        </div>
    )
}

export default cart