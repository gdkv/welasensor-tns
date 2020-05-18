<template>
    <Page>
        <GridLayout columns="*" rows="*">
            <!-- <Label class="message" :text="msg" col="0" row="0"/> -->
            <Button class="message" @tap="onTap" :text="msg"></Button>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
  import Vue from 'nativescript-vue';
  import {fetchData} from './helpers';
  export default {
    data() {
      return {
        msg: 'WELASENSOR'
      }
    },
    methods: {
      onTap() {
        // console.log(1);

        fetchData();
      }
    }
  }
</script>

<style lang="scss" scoped>
    ActionBar {
        background-color: #000000;
        color: #ffffff;
        font-family: "Gilroy", "Gilroy-ExtraBold";
        font-size: 800;
    }
    .message {
        vertical-align: center;
        text-align: center;
        font-size: 24;
    }
</style>
