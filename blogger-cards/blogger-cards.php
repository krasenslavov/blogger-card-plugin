<?php
/**
  Plugin Name:  Blogger Cards 
  Plugin URI:   https://ctrls.dev/
  Description:  Create blogger cards plugin using WordPress and Web Components.
  Version:      0.0.1
  Author:       Krasen Slavov
  Author URI:   https://krasenslavov.com/
  License:      GNU General Public License, version 2
  License URI:  https://www.gnu.org/licenses/gpl-2.0.html
  Text Domain:  blogger-cards
*/
  add_action('wp_enqueue_scripts', function(){

    wp_enqueue_style('blogger-cards', plugins_url('', __FILE__) . '/assets/card.css', null, false, 'all');
    wp_enqueue_script('blogger-cards', plugins_url('', __FILE__) . '/assets/card.js', null, false, true);
  }, 10, 1);

  add_shortcode('display_users', function() {
    
    ob_start();
    include_once plugin_dir_path(__FILE__) . '/templates/card.tpl.php';
    $template = ob_get_contents();
    ob_end_clean();
    return $template;
  });
