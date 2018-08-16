import { h, Component } from 'preact';
import style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Home extends Component {
	state = {
		time: Date.now(),
		count: 10
	};

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		this.setState({ count: this.state.count+1 });
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count }) {
		return (
			<div class={style.home}>
				<div class="full-bg">
					<div class="grid-container">
							<div class="grid-x grid-padding-x form-section1">
								<div class="larg-12 cell">
									<form action="" method="post" style="width:100%">
											<div class="grid-x grid-padding-x">
												<div class="large-12 medium-12 small-12 cell hide-for-large">
													<p class="para-form">Lorem ipsum dolor sit <span>80%</span>consectetur adipiscing elit.</p>
												</div>
												<div class="small-6 medium-4 large-4 cell">
													<label>Field 1</label>
													<select class="form-control">
														<option>Lorem ipsum dolor</option>
														<option>Lorem ipsum dolor</option>
														<option>Lorem ipsum dolor</option>
													</select>
												</div>
												<div class="small-6 medium-4 large-2 cell">
												<label>Field 2</label>
												<select class="form-control">
														<option>Lorem ipsum dolor</option>
														<option>Lorem ipsum dolor</option>
														<option>Lorem ipsum dolor</option>
												</select>
												</div>
												<div class="small-6 medium-4 large-3 cell">

													<button type="submit" class="button theme-btn1"><FontAwesomeIcon icon="search" />Search</button>
									
												</div>
												<div class=" small-12 large-3 medium-3 cell show-for-large">
													<p class="para-form">Lorem ipsum dolor sit <span>80%</span>consectetur adipiscing elit.</p>
												</div>
											</div>
									</form>
								</div> 	  
							</div>
							<div class="grid-x grid-padding-x gallery-section">
								<div class="small-6 medium-3 large-3 cell">
									<div class="box">
										<div class="box-content">
												<h4 class="text-center">Lorem</h4>
										</div>
									</div>
								</div>
								<div class="small-6 medium-3 large-3 cell">
									<div class="box">
										<div class="box-content">
												<h4 class="text-center">Lorem</h4>
										</div>
									</div>
								</div>
								<div class="small-6 medium-3 large-3 cell">
									<div class="box">
										<div class="box-content">
												<h4 class="text-center">Lorem</h4>
										</div>
									</div>
								</div>
								<div class="small-6 medium-3 large-3 cell">
									<div class="box active">
										<div class="box-content">
												<h4 class="text-center">Lorem</h4>
										</div>
									</div>
								</div>
							</div>
							<div class="grid-x grid-padding-x blog-section">
									<div class="small-12  medium-4 large-4  cell">
										<div class="box">
											<div class="box-img">
												<img src="http://via.placeholder.com/570x360" /> 
											</div>
											<div class="box-content">
												<h5>Lorem ipsum</h5>
												<p class="blog-date">26 Jun,2018</p>
												<p class="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec arcu dolor. Morbi eget risus varius quam egestas commodo. Praesent sed bibendum velit.</p>
											</div>
											<div class="read-more">
												<a class="button theme-btn1">Read more</a>
											</div>
										</div>
									</div>
								<div class="small-12  medium-4 large-4  cell">
										<div class="box">
											<div class="box-img">
												<img src="http://via.placeholder.com/570x360" /> 
											</div>
											<div class="box-content">
												<h5>Lorem ipsum</h5>
												<p class="blog-date">26 Jun,2018</p>
												<p class="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec arcu dolor. Morbi eget risus varius quam egestas commodo. Praesent sed bibendum velit.</p>
											</div>
											<div class="read-more">
												<a class="button theme-btn1">Read more</a>
											</div>
										</div>
									</div>
									<div class="small-12  medium-4 large-4  cell">
										<div class="box">
											<div class="box-img">
												<img src="http://via.placeholder.com/570x360" /> 
											</div>
											<div class="box-content">
												<h5>Lorem ipsum</h5>
												<p class="blog-date">26 Jun,2018</p>
												<p class="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec arcu dolor. Morbi eget risus varius quam egestas commodo. Praesent sed bibendum velit.</p>
											</div>
											<div class="read-more">
												<a class="button theme-btn1">Read more</a>
											</div>
										</div>
									</div>
									<div class="small-12 medium-12 large-12 cell">
										<div class="next-page"><p>next > </p></div>
										<div class="clearfix"></div>
									</div>
								</div>
						</div>
					</div>       
					<div class="search-section">
						<div class="grid-container">
							<div class="grid-x grid-padding-x">
								<div class="small-12 medium-12 large-12 cell">
									<h5>Lorem ipsum dolor sit amet, consectetur adipiscing.</h5>
								</div>
								<div class="small-12 medium-12 large-12 cell search-form">
									<form action="" method="post">
										<div class="grid-x grid-padding-x">
											<div class="small-12 medium-3 large-3 cell">
													<input type="text" placeholder="field1" class="large-12 form-input" />
											</div>
											<div class="small-12 medium-3 large-3 cell">
													<input type="text" placeholder="field1" class="large-12 form-input" />
											</div>
											<div class="small-12 medium-3 large-3 cell">
													<input type="text" placeholder="field1" class="large-12 form-input" />
											</div>
											<div class="small-12 medium-3 large-3 cell">
												<input type="submit" class="button search-button theme-btn1" value="Submit"/>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>     
					</div>
			</div>
		);
	}
}
