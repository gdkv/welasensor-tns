<template>
    <GridLayout columns="*, *">
        <StackLayout col="0" class="welasensor">
                <StackLayout class="plug"></StackLayout>
                <AbsoluteLayout class="corpus">
                    <StackLayout class="indicator"></StackLayout>
                </AbsoluteLayout>
        </StackLayout>
        <StackLayout col="1" class="welasensor-info">
            <Label class="welasensor-info-mac" :text="mac"></Label>
            <Label class="welasensor-info-name" :text="name"></Label>
            <Label class="welasensor-info-time" :text="time"></Label>
        </StackLayout>
    </GridLayout>
</template>

<script lang="ts">
    import Vue from 'nativescript-vue';

    export default Vue.extend({
        props: {
            mac: String,
            name: String,
            time: String,
        },
    })
</script>

<style scoped lang="scss">
    .welasensor {
        width:166;
        height:164;

        .corpus {
            // background:75 0/auto 50 no-repeat url("~/assets/images/LOGO_on_welasensor.png") #fdfdfd;
            background-image: url("~/assets/images/LOGO_on_welasensor.png");
            background-color: #fdfdfd;
            background-size: 100% 50%;
            background-position: 60 0;
            background-repeat: no-repeat;
            width:166;
            height:130.94;
            border-radius:30
        }

        .plug {
            position:absolute;
            width:72;
            height:33;
            left:calc(50% - 36);
            background:linear-gradient(180deg,#ccc,#bbb);
            border-radius:5 5 0 0
        }
        .indicator {
            width:10;
            height:10;
            left:20;
            top:100;
            position:absolute;
            background-color:#c4c4c4;
            border-radius:50%
        }

        &-info {
            margin-left: 20;
            text-align: left;

            &-mac {
                font-weight: 300;
                font-size: 14;
                line-height: 16;
                color: #888;
                text-transform: uppercase;
            }

            &-name {
                font-weight: 300;
                font-size: 16.5;
                line-height: 19;
                color: #fdfdfd;
                margin: 4 0;
            }

            &-time {
                font-weight: 300;
                font-size: 11.5;
                line-height: 13;
                color: #888;
            }
        }
    }
</style>