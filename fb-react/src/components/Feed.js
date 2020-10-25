import { Message } from '@material-ui/icons'
import React from 'react'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

const Feed = () => {
    return (
        <div>
            <div className="feed">
                <StoryReel />
                <MessageSender />

                <Post 
                    profilePic="https://scontent.famd5-1.fna.fbcdn.net/v/t1.0-9/107872854_286568922631119_1360683905889620757_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=cPCnIKInXSgAX-GR5ls&_nc_ht=scontent.famd5-1.fna&oh=9bc2d804ecf463f8edd58faa3409c40b&oe=5FBB3991"
                    message="This is a message"
                    timestamp="time"
                    imgName="imgName"
                    username="Frankie"
                />

                {/* {
                    postsData.map(entry => {
                        <Post 
                            profilePic={entry.avatar}
                            message={entry.text}
                            timestamp={entry.timestamp}
                            imgName={entry.imgName}
                            username={entry.user}
                        />
                    })
                } */}

            </div>
        </div>
    )
}

export default Feed
