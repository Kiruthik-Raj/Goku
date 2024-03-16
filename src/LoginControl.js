import {useState} from 'react'

function LoginControl(props)
{
    const [status, setStatus] = useState(false);

    const handleLoginClick = () => {
        setStatus(true);
    }

    const handleLogoutClick = () => {
        setStatus(false);
    }

    let button;

    if(status)
    {
        button = <LogoutButton onClick = {handleLogoutClick}/>
    }
    else {
        button = <LoginButton onClick = {handleLoginClick}/>
    }   

    return (
        <div>
            {button}
        </div>
    )

    function LoginButton(props)
    {
        return  (
            <button onClick = {props.onClick}>Log In</button>
        )
    }

    function LogoutButton(props)
    {
        return (
            <button onClick = {props.onClick}>Log Out</button>
        )
    }

}

export default LoginControl;