import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import "./App.css";

function Mission() {
	return (
		<section id="mission">
			<div className="container">
				<h1>Borum Suite</h1>

				<h2>Increasing knowledge, productivity, and well-being in a vast ecosystem of high-quality tools</h2>
			</div>
		</section>
	);
}

class App extends React.Component {
	constructor(props) {
		super(props);
		// Binding is necessary to make `this` work in the callback
		this.searchStore = this.searchStore.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);

		this.productList = [
			{
				id: "forum",
				link: "forum",
				img: "logo512.png",
				name: "Borum Forum",
				released: true,
			},
			{
				id: "flytrap",
				link: "audio",
				img: "flytrap.png",
				name: "Flytrap",
				released: true,
			},
			{
				link: "paint",
				img: "paint-pallete.png",
				name: "Borum Paint",
				released: true,
			},
			{
				id: "jottings",
				img: "jot.png",
				link: "jot",
				name: "Borum Jot",
				released: true,
			},
			{
				link: "thesiliconvalleyjournal",
				img: "SVJIcon.jpg",
				name: "The Silicon Valley Journal",
				released: true,
			},
			{
				link: "classroom",
				img: "classroom.png",
				name: "Greenboard",
				released: false,
			},
			{
				link: "classroom",
				img: "classroom.png",
				name: "Greenboard Tally",
				released: false
			},
			{
				link: "classroom",
				img: "classroom.png",
				name: "Greenboard Assess",
				released: false
			},
			{
				link: "classroom",
				img: "classroom.png",
				name: "Greenboard Math",
				released: false
			},
			{
				link: "developer",
				img: "favicon.ico",
				name: "Borum Developer",
				released: true,
			},
			{
				link: "calendar",
				img: "calendar.png",
				name: "Borum Calendar",
				released: false
			}
		];

		this.state = {
			launchedProductList: this.productList.filter(p => p.released),
			futureProductList: this.productList.filter(p => !p.released),
		};
	}

	handleKeyUp(e) {
		this.searchStore({ target: e.target.nextSibling });
	}

	searchStore(e) {
		const query = e.target.previousSibling.value;
		this.setState({
			launchedProductList: this.productList.filter(
				p => p.name.includes(query) && p.released
			),
			futureProductList: this.productList.filter(
				p => p.name.includes(query) && !p.released
			),
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Navbar expand="md" variant="dark" className="navbar-custom">
						<Navbar.Brand href="/"><img src="/logo512.png" alt="Letter B - Borum Logo" height="40" />Borum Technologies</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-auto">
								<NavDropdown title="Products" id="products-dropdown" renderMenuOnMount={true}>
									<NavDropdown.Item href="#action/3.1">Flytrap</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">Borum Jot</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">Borum Forum</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.4">The Silicon Valley Journal</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.5">Greenboard</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.6">HealthHive</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.7">Borum Calendar</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.8">Bhone</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown title="Resources" renderMenuOnMount={true}>
									<NavDropdown.Item href="https://developer.borumtech.com" target="_blank">Developer API</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown title="Open Source" id="open-source-dropdown" renderMenuOnMount={true}>
									<NavDropdown.Item href="/open-source/php-sleep">PHP Sleep</NavDropdown.Item>
								</NavDropdown>
							</Nav>
							{/* <Form inline>
								<FormControl
									onKeyUp={this.handleKeyUp}
									type="text"
									placeholder="Search"
									className="mr-sm-2"
								/>
								<Button
									onClick={this.searchStore}
									variant="outline-success"
								>
									Search
								</Button>
							</Form> */}
						</Navbar.Collapse>
						<div className="account-control">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://accounts.borumtech.com/signup"
							>
								{/* <img
										src="/sphere.svg"
										alt="borum sphere logo"
										height="50"
									/> */}
								Get Started
							</a>
						</div>
					</Navbar>
				</header>
				<main>
					<Mission />
					<section className="container" id="showcase">
						<div className="row">
							<div className="col-md-6">
								<h2>To-do lists and sticky notes are dead</h2>
								<p>Accelerate your producitivity with Borum Jot, an encrypted note and task management app</p>
								<a href="/products/borum-jot" className="btn btn-primary">Learn More</a>
							</div>
							<div className="col-md-6">
								<img src="/borumjotdemo.gif" alt="borum jot demo" />
							</div>
						</div>
					</section>
					<section className="container" id="newsletter">
						<img src="newsletter.webp" alt="" height="250" />
						<article>
							<h2>Love innovation</h2>
							<p>Stay up to date with Borum Technologies</p>
							<a className="btn btn-primary" href="https://borum-tech.noticeable.news/subscriptions" target="_blank" rel="noopener noreferrer">Sign Up for our Newsletter</a>
						</article>
					</section>
				</main>

				<footer>
					<p className="copyright">&copy; 2021-{new Date().getFullYear()} Borum Tech. All rights reserved.</p>
					<a href="https://status.borumtech.com">Status</a>
					<div className="social-icons">
						<SocialIcon target="_blank" rel="noreferrer noopener" url="https://www.youtube.com/channel/UCDDyVIflz8dUhHIb2YmA9hQ" />
						<SocialIcon target="_blank" rel="noreferrer noopener" url="https://twitter.com/BorumTech" />
						<SocialIcon target="_blank" rel="noreferrer noopener" url="https://github.com/BorumTech/BorStore" />
					</div>
				</footer>
			</div>
		);
	}
}

export default App;
