/*
 * @Author: kasuie
 * @Date: 2022-09-13 00:00:20
 * @LastEditors: kasuie
 * @LastEditTime: 2022-11-09 16:44:01
 * @Description: 
 */
import { defineComponent, onMounted, reactive, ref } from "vue";
import KTime from "@/components/time/index";
import './index.less';

// const avatar = require("../assets/kasuie.webp");
// const down = require("../assets/down.png");
// require("../assets/down.png");

export default defineComponent({

    components: {
        'k-time': KTime
    },

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
            return <div class="k-detail"> 
                <div class="k-detail-cards">
                    <k-time></k-time>
                </div>
                <div class="k-detail-sites">
                    <div class="k-detail-sites-title"><i class="fa fa-link fa-flip-horizontal"></i>网站列表</div>
                    <ul class="k-detail-sites-content">
                        <li onClick={() => {
                            window.open("https://kasuie.cc")
                        }}><i class="fa fa-snowflake-o fa-spin"></i>博客</li>
                        <li onClick={() => {
                            window.open("https://kasuie.github.io")
                        }}><i class="fa fa-drupal"></i>Hoxe</li>
                        <li><i class="fa fa-connectdevelop"></i>导航</li>
                        <li><i class="fa fa-lightbulb-o"></i>群手册</li>
                        <li><i class="fa fa-paw"></i>壁纸</li>
                        <li><i class="fa fa-ravelry"></i>画集</li>
                    </ul>
                </div>
            </div>
        }
    },
})