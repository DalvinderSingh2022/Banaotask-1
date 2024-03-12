import React from 'react'
import Post from './Post';
import LocationSection from './LocationSection';
import postImage1 from './../assets/post1.jpg';
import postImage2 from './../assets/post2.jpg';
import postImage3 from './../assets/post3.jpg';

import userImage1 from './../assets/user1.jpg';
import userImage2 from './../assets/user2.jpg';
import userImage3 from './../assets/user3.jpg';
import userImage4 from './../assets/user4.jpg';

const PostSection = () => {
    return (
        <div className='PostSection'>
            <div className="posts flex col">
                <Post
                    image={postImage1}
                    type="✍️ Article"
                    heading="What if famous brands had regular fonts? Meet RegulaBrands!"
                    userImage={userImage1}
                    userName="Sarthak Kamra"
                    views="14k"  >
                    <div className="detail">I’ve worked in UX for the better part of a decade. From now on, I plan to retrieve</div>
                </Post>
                <Post
                    image={postImage2}
                    type="🔬️ Education"
                    heading="Tax Benefits for Investment under National Pension Scheme launched by Government"
                    userImage={userImage2}
                    userName="Sarah West"
                    views="1.4k"  >
                    <div className="detail">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</div>
                </Post>
                <Post
                    image={postImage3}
                    type="🗓️ Meetup"
                    heading="Finance & Investment Elite Social Mixer @Lujiazui"
                    userImage={userImage3}
                    userName="Ronal Jones"
                    views="1.4k"  >
                    <button className="link visit">Visit Website</button>
                </Post>
                <Post
                    type="💼️ Job"
                    heading="Software Developer"
                    userImage={userImage4}
                    userName="Joseph Gray"
                    views="1.4k"  >
                    <button className="link">Apply on Timesjobs</button>
                </Post>
            </div >
            <LocationSection />
        </div >
    )
}

export default PostSection;