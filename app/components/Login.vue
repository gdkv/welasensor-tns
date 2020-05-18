<template>
    <Page>
        <GridLayout rows="*, *, *">
            <Image row="0" src="~/assets/images/LOGO.png" />
            <Label row="1" text="Login your account"></Label>
            <Label row="2" textWrap="true" class="small-text">Sensor not found yet, check the lights, maybe you are not change senor in Settings mode</Label>
        </GridLayout>
    </Page>
</template>
<script lang="ts">
  import Vue from 'nativescript-vue';
  export default {
    data() {
      
    },
    methods: {
      
    }
  }
</script>
<style lang="scss" scoped>
    Image {
        width: 107;
        height: 39;
    }
    Label {
        font-size: 25;
        // font-weight: 800;
        text-align: center;
    }
    .small-text {
        font-size: 16;
    }
</style>