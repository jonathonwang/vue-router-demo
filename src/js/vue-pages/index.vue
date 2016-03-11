<style lang="sass">

</style>

<template>
  <div class="row">
    <div class="col-xs-12">

      <h2>HomePage</h2>
      <ul>
        <li v-for="item in items">{{ item }} <a href="#" class="btn btn-default" @click.prevent="remove(item)"><span class="fa fa-trash-o"></span></a></li>
      </ul>

    </div>
  </div>
</template>

<script type="text/javascript">
  module.exports = {
    
    data: function(){
      return {
        items:['item1','item2','item3','item4','item5'],
      }
    }, // Data

    props: {

    }, // Props

    ready: function(){
      console.log('homepage');
    }, // Ready

    methods: {
      remove: function(item){
        this.items.$remove(item);
      },
    }, // Methods

  }
</script>
