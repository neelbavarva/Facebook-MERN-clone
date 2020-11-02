import { Avatar, Input } from '@material-ui/core'
import {SettingsInputAntenna} from '@material-ui/icons'
import VideocamIcon from '@material-ui/icons/Videocam'
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import React, { useState } from 'react'
import './MessageSender.css'

const MessageSender = () => {
    const {input, setInput} = useState('');
    const {image, setImage} = useState(null);

    const handleChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    const handleSubmit = () => {
        console.log("Submitting");
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src="https://scontent.famd5-1.fna.fbcdn.net/v/t1.0-9/107872854_286568922631119_1360683905889620757_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=cPCnIKInXSgAX-GR5ls&_nc_ht=scontent.famd5-1.fna&oh=9bc2d804ecf463f8edd58faa3409c40b&oe=5FBB3991" />
                <form>
                  <input type="text" className="messageSender__input" placeholder="What's in your mind?" value={input} onChange={(e) => SettingsInputAntenna(e.target.value)} />
                  <Input type="file" className="messageSender__fileSelector" onChange={handleChange} />
                  <button onClick={handleSubmit} typr='submit' >Hidden Submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: 'red'}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: 'green'}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmotionIcon style={{color: 'orange'}} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>

        </div>
    )
}

export default MessageSender
