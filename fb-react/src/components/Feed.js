import { Message } from '@material-ui/icons'
import React from 'react'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'

const Feed = () => {
    return (
        <div>
            <div className="feed">
                <StoryReel />
                <MessageSender />

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
