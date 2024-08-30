import { defineComponent } from "vue";
import {SAvatar} from "../components/Avatar";

export default defineComponent({
    setup(){
        return () => {
            return <>
                <SAvatar size={60} src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"></SAvatar>
            </>
        }
    }
})