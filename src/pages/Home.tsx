import {Button, Toast} from "@douyinfe/semi-ui";



export default function About() {
    return (
        <Button onClick={()=>Toast.info({content:'Hell Semi Design'})}>欢迎</Button>
    );
}