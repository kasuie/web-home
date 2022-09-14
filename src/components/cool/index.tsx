import store from "@/store";
import { defineComponent, reactive, ref, watch, onMounted, toRefs, computed  } from "vue";
import { useRouter } from "vue-router";
import './index.less';

const url = require("../../assets/bg_main.webp");

export default defineComponent({

    props: ['link'],

    setup(props){

        const width = ref(0)
        const height = ref(0)
        const mouseX = ref(0)
        const mouseY = ref(0)
        const mouseLeaveDelay = ref()
        const router = useRouter();
        const $card = ref<any>(null)

        const state = reactive({
            data: [],
            mousePX: computed(() => {
                return mouseX.value / width.value;
            }),
            mousePY: computed(() => {
                return mouseY.value / height.value;
            }),
            cardStyle: computed(() => {
                const rX: any = state.mousePX * 5;
                const rY: any = state.mousePY * -5;
                return {
                  transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
                };
            }),
            cardBgTransform: computed(() => {
                const tX: any = state.mousePX * -3;
                const tY: any =state.mousePY * -3;
                return {
                  transform: `translateX(${tX}px) translateY(${tY}px) scale(1.05)`
                }
            }),

        })

        const handleMouseMove = (e: any) => {
            mouseX.value = e.pageX - $card.value.offsetLeft - width.value/2;
            mouseY.value = e.pageY - $card.value.offsetTop - height.value/2;
        }

        const handleMouseEnter = () => {
            clearTimeout(mouseLeaveDelay.value);
        }
        
        const handleMouseLeave = () => {      
            mouseLeaveDelay.value = setTimeout(()=>{
                mouseX.value = 0;
                mouseY.value = 0;
            }, 1000);
        }

        const goto = (link: any) => {
            window.open(link);
        }

        onMounted(async () => {
            width.value = $card.value.offsetWidth;
            height.value = $card.value.offsetHeight;
        })

        return () => {
            // const link: any = props.link;
            return <div class="link-wrap" 
                    onMousemove={handleMouseMove}
                    onMouseenter={handleMouseEnter}
                    onMouseleave={handleMouseLeave}
                    // onClick={() => {}}s
                    ref={$card}>
                        <div class="link-card" style={state.cardStyle}>
                        <span class="link-card-avatar">
                            <img src="" />
                            <span><i class="fa fa-angle-double-right"></i>点击进入</span>
                        </span>
                        <div class="link-card-bg" style={[state.cardBgTransform, {backgroundImage: `url(${url})`}]}></div>
                        <div class="link-card-info">
                            {/* <h1>{ link.name }</h1> */}
                            {/* <p>{ link.detail }</p> */}
                        </div>
                        </div>
            </div>
        }
    },
})