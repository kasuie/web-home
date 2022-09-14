import { defineComponent, onMounted, reactive, ref } from "vue";
import './index.js';
import './index.less';

// const avatar = require("../assets/kasuie.webp");
// const down = require("../assets/down.png");
// require("../assets/down.png");

export default defineComponent({

    setup() {

        const state = reactive({
            words: [],
            flag: true,
        })


        // onMounted(async () => {
        //     await api.others.words()
        //     .then((res: any) => {
        //         state.words = res.data;
        //         dom.value = document.getElementById('words');
        //         write(true);
        //     })
        // })

        return () => {
            return <div></div>
        }
    },
})