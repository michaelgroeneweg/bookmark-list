import React, {useState} from 'react'
import Button from "../../components/ui/Button";
import PropTypes from 'prop-types';
import axios from 'axios';

const [email, setEmail] = useState<string>();
const [password, setPassword] = useState<string>();

const submitHandler = async (event: any) => {
    event.preventDefault()

    const formData = {
        identifier: email,
        password: password
    }


}


const Login = () => {
    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <h1>Please Log In</h1>
                    <div className="flex flex-col mb-6">
                        <label className="font-medium mb-2">E-mail:</label>
                        <input type="text" onChange={e => setEmail(e.target.value)} className="p-2 rounded dark:bg-[#575757] border dark:border-gray-600  focus:ring-2 focus:ring-bleed-blue outline-0" />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="font-medium mb-2">Password</label>
                        <input type="password" onChange={e => setPassword(e.target.value)} className="p-2 rounded dark:bg-[#575757] border dark:border-gray-600  focus:ring-2 focus:ring-bleed-blue outline-0" />
                    </div>
                    <Button variant="primary" full>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default Login


Login.propTypes = {
    setToken: PropTypes.func.isRequired
}