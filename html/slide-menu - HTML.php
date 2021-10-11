<div class="hidden-sm hidden-md hidden-lg">
  <?php get_template_part('templates-parts/slide-menu'); ?>
</div>

<div class="middle-wrap hidden-sm hidden-md hidden-lg">
   <div class="container middle">
      <div class="row menu-row">
         <div class="col-xs-6 menu-col">
            <?php echo do_shortcode('[mo_get_logo]'); ?>
         </div>
         <div class="col-xs-6 menu-col menu-col-end">
           <div class="header-xs-icons">
              <a href="/contact">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </a>
              <a href="tel:<?php echo mo_get_option('phone_number'); ?>">
                <i class="fa fa-xs-phone fa-phone" aria-hidden="true"></i>
              </a>
           </div>
           <div id="header-bars-wrap">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
           </div>
         </div>
      </div>
   </div>
</div>
