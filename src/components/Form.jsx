

import React, {useState} from 'react'

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    // const createUser = (e) => {
    //     e.preventDefault()
    //     const newUser = { firstName, lastName, email, password, confirmPassword }
    //     setFirstName("")
    //     setLastName("")
    //     setEmail("")
    //     setPassword("")
    //     setConfirmPassword("")
    // }

    return(
        <div id="wrapper">
            <h1>$ell Your Info!</h1>
            <form>
                <div className="forms">
                    <label>First Name: </label>
                    <input type="text" value = {firstName} onChange = { (e) => setFirstName(e.target.value)}/>
                    {firstName.length < 2 && firstName.length > 0 ? (<p>* FIRST NAME MUST BE AT LEAST 2 CHARACTERS</p>) : null}
                </div>
                <div className="forms">
                    <label>Last Name: </label>
                    <input type="text" value = {lastName} onChange = { (e) => setLastName(e.target.value)}/>
                    {lastName.length < 2 && lastName.length > 0 ? (<p>* LAST NAME MUST BE AT LEAST 2 CHARACTERS</p>) : null}
                </div>
                <div className="forms"> 
                    <label>Email: </label>
                    <input type="text" value = {email} onChange = { (e) => setEmail(e.target.value)}/>
                    {email.length < 5 && email.length > 0 ? (<p>* EMAIL MUST BE AT LEAST 5 CHARACTERS</p>) : null}
                </div>
                <div className="forms">
                    <label>Password: </label>
                    <input type="password"  value = {password} onChange = { (e) => setPassword(e.target.value)}/>
                    {password.length < 8 && password.length > 0 ? (<p>* PASSWORDS MUST BE AT LEAST 8 CHARACTERS</p>) : null}
                </div>
                <div className="forms">
                    <label>Confirm Password: </label>
                    <input type="password" value = {confirmPassword} onChange = { (e) => setConfirmPassword(e.target.value)}/>
                    {password !== confirmPassword ? (<p>* PASSWORDS MUST MATCH</p>) : null}
                </div>
            </form>
            {/* <h2>Your Form Data</h2>
            <table>
                <tr>
                    <td>First Name</td>
                    <td>{firstName}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{lastName}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>{password}</td>
                </tr>
                <tr>
                    <td>Confirm Password</td>
                    <td>{confirmPassword}</td>
                </tr>
            </table> */}
        </div>
    )
}

export default UserForm