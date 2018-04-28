<template>
  <div id="myContainer">
    <div class="my-3">
      <!-- our triggering (target) element -->
      <b-btn id="exPopoverReactive1"
             :disabled="popoverShow"
             variant="primary"
             ref="button">
        Reactive Content Using Slots
      </b-btn>
    </div>

    <b-popover target="exPopoverReactive1"
               triggers="hover"
               :show.sync = "popoverShow"
               placement="auto"
               container="myContainer"
               ref="popover"
    >
      <div>
        <b-btn @click="onClose" size="sm" variant="danger">Cancel</b-btn>
        <b-btn @click="onOk" size="sm" variant="primary">Ok</b-btn>
      </div>
    </b-popover>
  </div>
</template>

<script>
export default {
  data () {
    return {
      popoverShow: true
    }
  },
  methods: {
    onClose () {
      this.popoverShow = false;
    },
    focusRef (ref) {
      /* Some references may be a component, functional component, or plain element */
      /* This handles that check before focusing, assuming a focus() method exists */
      /* We do this in a double nextTick to ensure components have updated & popover positioned first */
      this.$nextTick(() => {
        this.$nextTick(() => { (ref.$el || ref).focus() });
      });
    }
  }
}
</script>