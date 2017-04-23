//import HomeCtrl from './home-controller';

const HomeComponent = {
	template: `
	<div class="app">
			<div class="header">
				<a href="http://marvel.com/">MARVEL</a>
			</div>
			<div class="content">
				<ul class="sidemenu">
					<li><a ui-sref="home.welcome" ui-sref-active="active">Welcome</a></li>
					<li><a ui-sref="home.creators" ui-sref-active="active">Creators</a></li>
					<li><a ui-sref="home.comics" ui-sref-active="active">Comics</a></li>
				</ul>
				<div class="main">
					<ui-view name="home-content"></ui-view>
				</div>
			</div>
		</div>
	`,
	//controller: HomeCtrl,
};

export default HomeComponent;
