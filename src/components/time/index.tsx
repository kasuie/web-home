import { defineComponent, onMounted, reactive, ref } from "vue";
import './index.less';

// const avatar = require("../assets/kasuie.webp");
// const down = require("../assets/down.png");
// require("../assets/down.png");

export default defineComponent({

    setup() {

        const t: any = ref(null);

        const html: any = ref(null);

        const time = () => {
            clearTimeout(t);
            const dt: any = new Date();
            const y = dt.getYear() + 1900;
            const mm = dt.getMonth() + 1;
            const d = dt.getDate();
            const weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
            const day = dt.getDay();
            let h = dt.getHours();
            let m = dt.getMinutes();
            let s = dt.getSeconds();
            if (h < 10) {
                h = "0" + h;
            }
            if (m < 10) {
                m = "0" + m;
            }
            if (s < 10) {
                s = "0" + s;
            }
            html.value =  y + "&nbsp;年&nbsp;" + mm + "&nbsp;月&nbsp;" + d + "&nbsp;日&nbsp;" + "<span class='weekday'>" + weekday[day] + "</span><br>" + "<span class='time-text'>" + h + ":" + m + ":" + s + "</span>";
            t.value = setTimeout(time, 1000);
        }

        onMounted(async () => {
            t.value = setTimeout(time, 1000);
        })

        return () => {
            return  <div class="timeshow" id="time" innerHTML={html.value}>
                    2000&nbsp;年&nbsp;0&nbsp;月&nbsp;00&nbsp;日&nbsp;
                    <span class="weekday">星期一</span><br />
                <span class="time-text">00:00:00</span>
            </div>
        }
    },
})