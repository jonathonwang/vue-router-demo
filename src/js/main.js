/**
 * Importing the Components
 */

// Global Components
import navbar from './vue-pages/vue-partials/navbar.vue';

// Base Index
import index from './vue-pages/index.vue';
// Page 1
import page1 from './vue-pages/page-1/index.vue';
// Page 2
import page2 from './vue-pages/page-2/index.vue';

/**
 * End Imports
 */


(function($) {

  /**
   * Start Vue Configuration
   */
  Vue.http.options.emulateJSON = true;
  Vue.config.debug = true;

  /**
   * Initialize Vue Router
   * @param ({History:true}) [ removes hashbang (#!) from url ]
   */
  var vueRouter = new VueRouter({ hashbang: false, linkActiveClass: 'active' });
  
  /**
  * Register Routes with Components
  * Components Imported at top of page
  */
  vueRouter.map({
    '/': { component: index },
    '/page1': { component: page1 },
    '/page2': { component: page2 }
  });

  /**
   * Base Vue Instance
   */
  var vueContainer = Vue.extend({});

  /**
   * Register Global Components
   * These will occur on every page / index.html
   */
  Vue.component('navbar', navbar);



  /**
   * Start the Vue Application
   */
  vueRouter.start(vueContainer, '#vue-container');

})(jQuery);
