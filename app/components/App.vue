<template>
    <Page>
        <GridLayout columns="*" rows="*, *">
            <!-- <Label class="message" :text="msg" col="0" row="0"/> -->
            <Button row="0" class="message" @tap="onTap" :text="msg"></Button>
            <Test :message="text" row="1" @childTap="alertChild" />
        </GridLayout>
    </Page>
</template>

<script lang="ts">
  import Vue from 'nativescript-vue';
  import {fetchData} from './helpers';
  import { Sensor } from '../core/models/sensor.model';
  // import Test from './Test';

  export default {
    // components: {Test },
    data() {
      return {
        msg: 'WELASENSOR',
        text: 'TEST WELASENSOR MOBILE APP',
      }
    },
    methods: {
      onTap() {
        alert(1);
        fetchData('/sensors')
          .then(response => response.json())
          .then((data: Sensor) => console.log(data));
      },
      alertChild(param) {
        console.log("child was tapped!", param.param);
      }
    }
  }
</script>

<style lang="scss" scoped>
    .message {
        vertical-align: center;
        text-align: center;
        font-size: 24;
    }
</style>
