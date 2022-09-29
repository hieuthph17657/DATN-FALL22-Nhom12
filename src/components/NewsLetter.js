import React from "react";
import '../styles/layout.css';
import {Facebook, Twitter, Instagram, Mail} from 'react-feather';
import { Link, Route, Routes } from "react-router-dom";

class NewsLetter extends React.Component {
    render() {
        return (
            <div id="newsletter" class="section">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="newsletter">
							<p>Sign Up for the <strong>NEWSLETTER</strong></p>
							<form>
								<input class="input" type="email" placeholder="Enter Your Email"/>
								<button class="newsletter-btn"><Mail size={20}></Mail> Subscribe</button>
							</form>
							<ul class="newsletter-follow">
								<li>
									<a href="#"><Facebook></Facebook></a>
								</li>
								<li>
									<a href="#"><Twitter></Twitter></a>
								</li>
								<li>
									<a href="#"><Instagram></Instagram></a>
								</li>
								<li>
									<a href="#"><Facebook></Facebook></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
        );
    }
}

export default NewsLetter;