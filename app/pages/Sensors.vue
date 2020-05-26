<template>
    <Page actionBarHidden="true">
        <ScrollView orientation="vertical" class="wrapper">
            <StackLayout>
                <Sensor v-for="sensor in sensors" class="sensor"
                    :key="sensor.id"
                    :mac="sensor.mac"
                    :name="sensor.name"
                    :time="sensor.created_at" /> 

            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script lang="ts">
    import Vue from 'nativescript-vue';
    import Sensor from '../components/Sensor.vue';
    import { ScrollView } from "tns-core-modules/ui/scroll-view";

    export default Vue.extend({
        components: { Sensor },
        data() {
            return {
                sensors: [
                    {
                        id: 18,
                        name: "Hall",
                        mac: "11-22-23-33-44-55",
                        zone_id: null,
                        created_at: "2020-05-18T20:53:47.000000Z",
                        updated_at: "2020-05-18T20:53:47.000000Z",
                        user_id: 8
                    },
                    {
                        id: 19,
                        name: "SECRET SENSOR",
                        mac: "23-42-34-23-41-23",
                        zone_id: null,
                        created_at: "2020-05-18T20:54:02.000000Z",
                        updated_at: "2020-05-18T20:54:02.000000Z",
                        user_id: 8
                    },
                    {
                        id: 17,
                        name: "Living room",
                        mac: "23-42-34-23-41-23",
                        zone_id: null,
                        created_at: "2020-05-18T20:54:02.000000Z",
                        updated_at: "2020-05-18T20:54:02.000000Z",
                        user_id: 8
                    },
                    {
                        id: 20,
                        name: "AAAAAA",
                        mac: "99-21-00-12-3A-AA",
                        zone_id: null,
                        created_at: "2020-05-18T20:54:48.000000Z",
                        updated_at: "2020-05-18T20:54:48.000000Z",
                        user_id: 8
                    }
                ]
            }
        },
        created() {

        },
        methods: {
            refresh(){
                // проверяем юзера и получаем его сенсоры
            }
        }
    })
</script>

<style scoped lang="scss">
    Page {
        background: #2a2a2a;
        
        .wrapper {
            margin: 20 0 0;

            .sensor {
                margin: 0 0 40;
            }
        }
    }
</style>