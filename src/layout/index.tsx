import { defineComponent } from "vue";
import { RouterView, useRouter } from "vue-router";

export default defineComponent({
    setup(){
        const components = [
            {path: '/components/avatar',title: '头像'}
        ]
        const router = useRouter()
        const navTo = (url: string) =>{
            router.push(url)
        }
        return () => (
            <div>
                <header>
                    {components.map(item => (
                        <span onClick={() => navTo(item.path)}>{item.title}</span>)
                    )}
                </header>
                <div style="display: flex">
                    <aside style="width: 200px">
                        左边
                    </aside>
                    <main style="width: calc(100% - 200px)">
                        <RouterView/>
                    </main>
                </div>
                
            </div>
        )
    }
})