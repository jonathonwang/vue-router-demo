<style lang="sass">

</style>

<template>

  <nav class="navbar navbar-default" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Vue Router</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="navbar">

        <ul class="nav navbar-nav navbar-right">
          <!-- Exact prevents the homepage link from always being active -->
          <!-- Make sure the routes are correctly named in the main.js file -->
          <li v-link-active><a v-link="{ path: '/', exact:true }">Home</a></li>
          <li v-link-active><a v-link="{ path: '/page1' }">Page 1</a></li>
          <li v-link-active><a v-link="{ path: '/page2' }">Page 2</a></li>

        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container -->
  </nav>

</template>

<script type="text/javascript">
  module.exports = {
    data: function(){
      return {

      }
    }, // Data
    props: {

    }, // Props
    methods: {

    }, // Methods
  }
</script>
