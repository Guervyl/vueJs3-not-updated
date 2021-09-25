<template>
  <HelloWorld v-if="theObject" :the-object="theObject"/>
  <p>{{ otherObject }}</p>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import {Watch} from "vue-property-decorator";

@Options({
  components: {
    HelloWorld,
  }
})
export default class App extends Vue {
  theObject: any = null;
  otherObject: any = null;

  @Watch('otherObject')
  watchOtherObject() {
    this.theObject = window.theOutsideObject;
    console.log('changed', window.theOutsideObject)
  }
}
</script>
