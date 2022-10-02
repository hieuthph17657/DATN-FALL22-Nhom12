import React, { useState } from "react";
import '../../styles/css-app/Sidebar.css';
import { Airplay, Menu, Grid, Search, LogOut, Aperture, } from 'react-feather';
import { Link, Route, Routes } from "react-router-dom";
import Content from "./Content";
import Test from "./test";
import AccountIndex from "../views/AccountIndex";

function Sidebar() {

    const [btnActive, setBtnActive] = useState(true);

    function handelClickBtnMenu() {
        setBtnActive(btnActive => !btnActive);
    }
    let toggleClassCheck = btnActive ? 'active' : '';

    return (
        <>
            <div className="d-flex">
                <div className={`sidebar ${toggleClassCheck}`}>
                    <div className="logo_content">
                        <div className="logo">
                            <Airplay color="red" size={30} />
                            <div className="logo_name">Logo Name</div>
                        </div>
                        <Menu id="btn" color="white" onClick={handelClickBtnMenu} size={30}></Menu>
                    </div>
                    <ul className="nav_list">
                        <li>
                            <Search className="search searchBtn" onClick={handelClickBtnMenu} color="white" size={30} />
                            <input type={"text"} placeholder={'Search...'} />
                            <span className="tooltip">Search</span>
                        </li>
                        <li className="d-flex">
                            <Link to={'/account'}>
                                <Grid className="icons" size={30} />
                                <span className="ms-2 link_name">Options</span>
                            </Link>
                            <span className="tooltip">Dashboard</span>
                        </li>
                        <li className="d-flex">
                            <Link to={'/about'}>
                                <Aperture className="icons" size={30} />
                                <span className="ms-2 link_name">Options</span>
                            </Link>
                            <span className="tooltip">Dashboard</span>
                        </li>
                        <li className="d-flex">
                            <a href="">
                                <Grid className="icons" size={30} />
                                <span className="ms-2 link_name">Options</span>
                            </a>
                            <span className="tooltip">Dashboard</span>
                        </li>
                        <li className="d-flex">
                            <a href="">
                                <Grid className="icons" size={30} />
                                <span className="ms-2 link_name">Options</span>
                            </a>
                            <span className="tooltip">Dashboard</span>
                        </li>
                    </ul>
                    <div className="profile_content">
                        <div className="profile">
                            <div className="profile_details">
                                <img src="../../assets/images/avatar/avatar.png"></img>
                                <div className="name_job">
                                    <div className="name">Kiên ché ràng</div>
                                    <div className="job">Design</div>
                                </div>
                            </div>
                            <LogOut id="log-out" color="white" size={20} />
                        </div>
                    </div>
                </div>
                <div className="content">
                    {/* navbar */}
                    <Routes>
                        <Route path="/" element={<Content />} />
                        <Route path="/about" element={<Test />} />
                        <Route path="/account" element={<AccountIndex />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default Sidebar;