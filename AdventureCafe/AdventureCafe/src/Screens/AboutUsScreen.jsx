import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function AboutUsScreen() {
return (
    <div>
        <div className="bg-banner container-flex">
        <div className="container-flex">
                <div className="text-center">
                    <h1 className="heading-text">Adventure Café</h1>
                    <Button as={Link} to="/menu" variant="secondary" className="px-5 content-text">Trips</Button>
                </div>
                <div className='container aboutus'>
                <div className='text-center'>
                    <p1 className="content-text">
                    Adventure Café opened its doors in 2003, as an innovative and unique Adventure Travel Agency and funky travel enthusiasts Coffee Shop. Initially we offered a wide range of Adventure Holidays, and Adventure Experiences, as well as the finest coffee and paninis for many a mile around. However, the story really started when we started offering not only trips from the big adventure tour operators, but our own, more personal trips.
                    </p1>    
                </div>
                <div className='text-center'>
                    <p1 className="content-text">
                    Our trips soon became characterised by the need to explore the outdoors, on foot, by bike, climbing, or in simple watercraft. Our very first trek actually had 3 leaders, and just 2 trekkers. That was back in 2003, when we took our first commercial UK based trek. We wanted to make sure that those two participants had the best time, and so we made sure of it.
                    </p1>
                    </div>
                </div>
                
                </div>
                
            </div>
    </div>
  )
}

export default AboutUsScreen