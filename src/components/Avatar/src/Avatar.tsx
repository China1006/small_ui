import { defineComponent, PropType } from "vue";
import { Size } from "./interface";
export const avatarProps = {
  size: [String, Number] as PropType<Size>,
  src: String
} as const
export default defineComponent({
    name: 'Avatar',
    props:{
        size: [String, Number] as PropType<Size>,
        src: String
    },
    setup(props,content){
        return () => {
            return <>
                {
                    props.size === 'small' ? <img src={props.src} class="w-28px h-28px"></img> : 
                    props.size === 'medium' ? <img src={props.src} class="w-34px h-34px"></img> : 
                    props.size === 'large' ? <img src={props.src} class="w-40px h-40px"></img> :
                    typeof props.size === 'number' ? <img src={props.src} style={`width: ${props.size}px;height: ${props.size}px`}></img> : ''
                }
            </>
        }
    },
})