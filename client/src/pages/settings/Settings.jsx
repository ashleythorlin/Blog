import React from 'react'
import"./settings.css"
import Sidebar from "../../components/sidebar/Sidebar.jsx"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPFP">
                    <img 
                        className=""
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/31939567-eaf6-4139-a201-9be9abac7cd1/demyt3m-83220af5-b198-450b-b995-e97108b819eb.png/v1/fill/w_1280,h_1352,q_80,strp/genshin_impact_raiden_shogun_baal_fanart_by_kiwerrry_demyt3m-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM1MiIsInBhdGgiOiJcL2ZcLzMxOTM5NTY3LWVhZjYtNDEzOS1hMjAxLTliZTlhYmFjN2NkMVwvZGVteXQzbS04MzIyMGFmNS1iMTk4LTQ1MGItYjk5NS1lOTcxMDhiODE5ZWIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nIiM-TXsXox8m9Er-dqltwILtSd3tiJ2EhCnokOg1L4" 
                        alt="" 
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPFPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeHolder="username" />
                <label>Email</label>
                <input type="email" placeHolder="email@email.com" />
                <label>Password</label>
                <input type="password" placeHolder="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
