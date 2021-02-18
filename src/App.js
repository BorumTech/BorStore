import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "animate.css/animate.min.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { SocialIcon } from "react-social-icons";
import Product from "./Product";

/**
 * Set key of each Product component in context of productList array
 * Set respectives properties of element in array to Product element
 * Display all Products in a Bootstrap row
 */
function ProductList(props) {
	const listItems = props.productList.map(el => {
		return (
			<Product
				key={el.id}
				id={el.id}
				link={el.link}
				img={el.img}
				name={el.name}
			/>
		);
	});

	return (
		<div className="row" id="products">
			{listItems}
		</div>
	);
}

function Mission() {
	return (
		<ScrollAnimation animateIn="fadeIn">
			<div id="mission">
				<h1>Our Mission</h1>
				<h2>
					Provide free internet privacy through innovation that fights
					Big Tech
				</h2>
			</div>
		</ScrollAnimation>
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
				id: "q-a",
				link: "forum",
				img: "logo512.png",
				name: "Borum Q&A",
				released: true,
			},
			{
				link: "farms",
				img: "farms.jpg",
				name: "Farm Attack",
				released: false,
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
				id: "chatfish",
				link: "chat",
				img: "chatfish.png",
				name: "Chatfish",
				released: false,
			},
			{
				id: "jottings",
				img: "jot.png",
				link: "jot",
				name: "Borum Jot",
				released: true,
			},
			{
				link: "feasts",
				img: "pizza.jpg",
				name: "Borum Feasts",
				released: true,
			},
			{
				link: "svjournal",
				img: "SVJIcon.jpg",
				name: "The Silicon Valley Journal",
				released: true,
			},
			{
				link: "restaurants",
				img: "restaurants.ico",
				name: "Borum Restaraunts",
				released: true,
			},
			{
				link: "classroom",
				img: "classroom.png",
				name: "Borum Classroom",
				released: false,
			},
			{
				link: "developer",
				img: "favicon.ico",
				name: "Borum Developer",
				released: true,
			},
			{
				link: "archives",
				img: "archives.png",
				name: "Borum Archives",
				released: true
			},
			{
				link: "accounts",
				img: "sphere.svg",
				name: "Borum Sphere",
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
					<Navbar fixed="top" bg="light" expand="md">
						<Navbar.Brand href="/">Borum Technologies</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link href="#products">Products</Nav.Link>
								<Nav.Link href="#mission">Mission</Nav.Link>
								<Nav.Link href="mailto:support@bforborum.com">
									Support
								</Nav.Link>
								{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
							</Nav>
							<Form inline>
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
							</Form>
						</Navbar.Collapse>
					</Navbar>
				</header>
				<h1>Current Products</h1>
				<ProductList productList={this.state.launchedProductList} />
				<h1>Coming Soon</h1>
				<ProductList productList={this.state.futureProductList} />
				<Mission />
				<footer>
					<div className="social-icons">
						<SocialIcon url="https://www.youtube.com/channel/UCDDyVIflz8dUhHIb2YmA9hQ" />
					</div>
					<p className="copyright">&copy; 2020 Borum Inc.</p>
				</footer>
			</div>
		);
	}
}

export default App;
