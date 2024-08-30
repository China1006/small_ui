import { defineComponent } from "vue";
import Avatar from "../components/Avatar";

export default defineComponent({
    setup(){
        return () => {
            return <>
                <Avatar size={60} src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"></Avatar>
            </>
        }
    }
})