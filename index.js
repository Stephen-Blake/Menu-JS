<?php
  $args = array(
    'theme_location'    => 'header-menu',
    'depth'             => 2,
    'container'         => false,
    'menu_class'        => 'nav navbar-nav',
    'fallback_cb'       => '',
    'items_wrap'        => '<ul itemscope="itemscope" itemtype="http://www.schema.org/SiteNavigationElement" id="%1$s"   class="%2$s">%3$s</ul>',
    'walker'            => new Bootstrap_Collapse_Nav_Walker()
 );
?>

<nav class="xs-menu-wrap">
  <div id="xs-menu-inner-wrap">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <?php wp_nav_menu( $args ); ?>
        </div>
      </div>
    </div>
  </div>
</nav>

<script>

class mobileMenu {

  'use strict';

  state = {
    'animation': 'slide', // default slide
    'active': false,
    'beforeOpen': () => {},
    'afterOpen': () => {},
    'beforeClose': () => {},
    'afterClose': () => {}
  };

  constructor() {

    if (mobileMenu._instance) {
      return;
    }

    mobileMenu._instance = this;

    this.state.setHeight = window.innerHeight;

    document.querySelector('#header-bars-wrap').addEventListener(
      'click',
      this.#click.bind(this)
    );

  }

  #open = () => {

    this.state.afterOpen()

  }

  #close = () => {

    this.state.afterClose();

  }

  #changeActive = () => {

    this.state.active == false ? this.state.active = true : this.state.active = false;

  }

  #toggleEvents = () => {

    this.state.active ? this.state.beforeOpen() : this.state.beforeClose();

  }

  #menuIconsChange = () => {

    document.querySelector('#header-bars-wrap').childNodes.forEach(
      child => {
        child.classList ? child.classList.toggle('change') : null;
      }
    );

  }

  #makeRequest = async( callback ) => {

    const transitionPromise = new Promise( (resolve, reject) => {
      document.querySelector('.xs-menu-wrap').addEventListener('transitionend', (e) => {
         resolve(true);
      });
    });

    await transitionPromise.then( callback );

  }

  #click = () => {

    this.#changeActive();
    this.#toggleEvents();
    this.#menuIconsChange();

    document.querySelector('.xs-menu-wrap').classList.toggle("open");
    document.body.classList.toggle("no-scroll");

    if(this.state.animation)
      document.querySelector('.xs-menu-wrap').classList.add( this.state.animation );

    this.#makeRequest( this.state.active ? this.#open : this.#close );

  }

}


jQuery(window).on('load', function(){

  new mobileMenu();
	
});

</script>

<style>

@media (max-width: 767px) {

	.xs-menu-wrap {
		position: absolute;
		z-index: 99;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		width: 0px;
		height: 100%;
		background: #F29200;
		opacity: 0;
    overflow: hidden;
	}

	#xs-menu-inner-wrap {
		display: flex;
		padding: 0px;
		margin: 0px;
		align-items: center;
		align-content: center;
		flex-wrap: nowrap;
		flex-direction: row;
		justify-content: center;
		height: 100%;
	}

	.navbar-nav>li>a {
		padding-top: 10px;
		padding-bottom: 10px;
		color: #fff;
		font-size: 27px;
		font-weight: 800;
		width: 100%;
		float: left;
		text-align: center;
	}

	.nav>li {
		position: relative;
		display: block;
		z-index: 9;
		width: 100%;
		float: left;
		text-align: center;
	}

  .nav>li.active>a,
	.nav>li>a:focus,
	.nav>li>a:hover {
		text-decoration: none;
		background-color: none;
		color: #2E3185;
	}

	.xs-menu-wrap.open {
		width: 100%;
		opacity: 1;
	}

	.xs-menu-wrap.fade {
		-webkit-transition: opacity 0.3s ease-in-out;
		-moz-transition: opacity 0.3s ease-in-out;
		-ms-transition: opacity 0.3s ease-in-out;
		-o-transition: opacity 0.3s ease-in-out;
		transition: opacity 0.3s ease-in-out;
		width: 100%;
	}

	.xs-menu-wrap.slide {
		-webkit-transition: width 0.3s ease-in-out;
		-moz-transition: width 0.3s ease-in-out;
		-ms-transition: width 0.3s ease-in-out;
		-o-transition: width 0.3s ease-in-out;
		transition: width 0.3s ease-in-out;
		opacity: 1;
	}

	.bar1,
	.bar2,
	.bar3 {
		width: 35px;
		height: 3.1px;
		background-color: #2E3185;
		margin: 6px auto;
		transition: 0.4s;
	}

	.bar1.change {
		-webkit-transform: rotate(-45deg) translate(-5px, 5px);
		transform: rotate(-45deg) translate(-5px, 5px);
		background: #fff;
	}

	.bar2.change {
		opacity: 0;
	}

	.bar3.change {
		-webkit-transform: rotate(45deg) translate(-8px, -8px);
		transform: rotate(45deg) translate(-8px, -8px);
		background: #fff;
	}

	#header-bars-wrap {
		cursor: pointer;
	}

	.no-scroll {
		overflow: hidden;
	}

	.fa-xs-phone {
		margin: 0 5px;
	}

	.menu-row {
		display: flex;
		flex-wrap: wrap;
	}

	.menu-col {
		align-items: center;
		display: flex;
	}

	.menu-col-end {
		justify-content: flex-end;
	}

	.header-xs-icons .fa {
		font-size: 26px;
	}

	.header-xs-icons a {
		color: #2E3185;
	}

	header#header {
		position: relative;
	}

	#header-bars-wrap {
		cursor: pointer;
		position: relative;
    z-index: 999;
	}

}


</style>
