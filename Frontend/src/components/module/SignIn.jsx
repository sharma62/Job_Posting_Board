import Input from "./Input";

export default function SignIn(){
    return <>
        <div>
            <div >
                <h2>Sign In</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. hddcca</p>
            </div>
            <div>
                <form action="post">
                    <Input placeholder="Username" type="text" id="username" class_icon="icon icon-user"/>
                    <Input placeholder="Password" type="password" id="password" class_icon="icon icon-lock"/>
                    
                </form>
            </div>
        </div>
    </>
}