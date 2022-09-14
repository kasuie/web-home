import { defineComponent, onMounted, reactive, ref } from "vue";
import KStar from "@/components/star-night";
import KDetail from "@/components/detail";
import './index.less';

const avatar = require("../assets/kasuie.webp");
const down = require("../assets/down.png");

const links = [
    { title: "Github", icon: "fa-github", url: "https://github.com/kasuie" },
    { title: "QQ群", icon: "fa-qq", url: "https://jq.qq.com/?_wv=1027&k=MwqW6vkw" },
    { title: "Email", icon: "fa-envelope", url: "mailto:gmail@kauie@gmail.com" },
    { title: "Telegram", icon: "fa-telegram", url: "https://t.me/+VeKzdn4snpOIqAPO" },
    { title: "Steam", icon: "fa-steam", url: "https://github.com/kasuie" }
]

export default defineComponent({

    components: {
        'k-star': KStar,
        'k-detail': KDetail
    },

    setup() {

        const state = reactive({
            words: [],
            flag: true,
        })

        const dom = ref();

        const tips = ref();

        const write = (first?: boolean) => {
            const sentence: any = state.words;
            const index = first ? 0 : Math.floor(Math.random()*(sentence.length));
            writing(0, sentence[index].split(''),"")
        }

        const writing = (index: any,words: string,text: string) => {
            if((index < words.length) && state.flag) {
                text = text + words[index];
                dom.value.value = text;
                setTimeout(() => writing(++index,words,text), 200);
            }else {
                if(index == words.length) {
                    state.flag = false;
                    setTimeout(() => writing(--index,words,text), 7000);
                }else if(index == 0) {
                    state.flag = true;
                    dom.value.value = "";
                    setTimeout(() => write(), 3000)
                }else {
                    dom.value.value = dom.value.value.slice(0, -1)
                    setTimeout(() => writing(--index,words,text), 50)
                }
            }
        }

        const dispath = (url: any) => {
            window.open(url);
        }

        // onMounted(async () => {
        //     await api.others.words()
        //     .then((res: any) => {
        //         state.words = res.data;
        //         dom.value = document.getElementById('words');
        //         write(true);
        //     })
        // })

        return () => {
            return <div class="kasuie-home">
                <div class="kasuie-content">
                    <div class="kasuie-me">
                        <div class="kasuie-me-top">
                            <img src={avatar} alt="avatar" />
                            <div class="me-title">
                                <span>kasuie</span>
                                <span>の次元</span>
                            </div>
                        </div>
                        <div class="kasuie-me-word">
                            <div class="word-main">
                                <i class="fa fa-quote-left"></i>
                                <div>愿你我的生活中，总有精彩的故事与恰到好处的咖啡</div>
                                <i class="fa fa-quote-right"></i>
                            </div>
                        </div>
                        <div class="kasuie-me-link">
                            <ul class="link-main">
                                {
                                    links.map((v: any) => {
                                        return <li 
                                        onClick={() => {
                                            dispath(v.url);
                                        }}
                                        onMouseover={() => {
                                            tips.value = v.title;
                                        }}
                                        onMouseout={() => {
                                            tips.value = "";
                                        }}>
                                            <i class={`fa ${v.icon}`}></i>
                                        </li>
                                    })
                                }
                                <li class={tips.value ? 'tips-show' : ''}>{ tips.value }</li>
                            </ul>
                        </div>
                    </div>
                    <k-detail></k-detail>
                </div>
                {/* <div class="home-me-name"><span>KASUIE</span></div> */}
          </div>
        }
    },
})