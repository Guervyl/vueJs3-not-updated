<template>
  <div>
    <p>{{ theObject.hello.world.inner }}</p>

  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  props: {
    theObject: null
  }
})
export default class HelloWorld extends Vue {

}
</script>
