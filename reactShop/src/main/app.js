import React, {Component} from "react"
import {Route,Link} from "react-router-dom"
import Ad from "./comp/ad"
import Nav from "./comp/nav"
import Home from './comp/home'
class App extends Component{
    constructor(){
        super();
        this.state = {};
    }
    render(){
        
        return (
            <div>
                <div className = "adcenter clearfix">
                    {/* ad ↓ */}
                    <Ad />
                    {/* ad ↑ */}
                    <div className="ad-right">
                        <div>
                            <a>
                                <h3>
                                    <div className="total">RMB：<span className="t-count">588888</span></div>
                                    <img alt="cart" src={require("./imgs/cart.png")}/>
                                </h3>
                            </a>
                            <p>
                                <a>清空购物车</a>
                            </p>
                        </div>
                    </div>
                </div>
               
                {/* head ↓ */}
                <div className = "header">
                    <div className = "container">
                        <div className = "logo">
                            <a href="/">
                                <img src = {require("./imgs/logo.png")} alt="logo" />
                            </a>
                        </div>
                    </div>
                    <div className = "head-top">
                        <div className = "container">
                            <div className = "head-top-l clearfix">
                                <ul>
                                    <li><a>登录</a></li>
                                    <li><a>注册</a></li>
                                    <li><a>订单</a></li>
                                </ul>
                            </div>
                            <div className = "head-top-r"></div>
                        </div>
                    </div>
                    <div className = "head-btm">
                        <div className = "container">
                            {/* nav ↓ */}
                            <Nav />
                            {/* nav ↑ */}
                        </div>
                    </div>
                </div>
                {/* head ↑ */}
                {/* banner ↓ */}

                {/* footer ↓ */}
                <div className = "footer"></div>
                {/* footer ↑ */}
            </div>
        )
    }
    
}
export default App;
