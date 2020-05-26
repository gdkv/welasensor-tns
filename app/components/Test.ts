import { EventData } from 'tns-core-modules/ui/frame/frame';
import { Label } from 'tns-core-modules/ui/label';
import { fetchData } from './helpers';

export default {
    template: `
        <StackLayout>
            <Label class="message" :text="message" @tap="onTap" />
            <Label ref="lbChange" class="message" text="change me please" />
        </StackLayout>
    `,
    props: {
        message: String,
    },
    mounted() {
        const lbChangeEl = this.$refs.lbChange.nativeView as Label;
        lbChangeEl.text = "MOUNTED";
    },
    methods: {
        onTap(event: EventData){
            // const lb = event.object as Label;
            // this.$emit('childTap', {param: lb.text});
            // console.log('AAAA');
            fetchData('/test')
                .then(response => response.json())
                .then(data => console.log(data));
            const lbChangeEl = this.$refs.lbChange.nativeView as Label;
            lbChangeEl.text = "NA NAH";
        }
    }
};