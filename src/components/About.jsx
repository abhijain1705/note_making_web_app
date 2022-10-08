import React from 'react'

function About() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', backgroundColor: 'rgba(75, 242, 38, 0.5)' }}>
            <h2>Made with 💖 by Abhi Jain</h2>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: '1rem auto' }}>
                <li>
                    <a target={'_blank'} href='https://www.instagram.com/abhijain1705/' >instagram</a>
                </li>
                <li>
                    <a target={'_blank'} href='https://twitter.com/abhiwd' >Twitter</a>
                </li>
                <li>
                    <a target={'_blank'} href='https://github.com/abhijain2003' >Github</a>
                </li>
                <li>
                    <a target={'_blank'} href='https://www.linkedin.com/in/abhi-jain-1b42421ba/' >Linkedin</a>
                </li>
            </ul>
        </div>
    )
}

export default About;