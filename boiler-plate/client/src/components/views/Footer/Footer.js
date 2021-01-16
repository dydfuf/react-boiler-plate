import React from 'react'
import { SmileOutlined } from '@ant-design/icons'

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize: '1rem'
        }}>
            <p>
                Yongyeol's React Boiler-plate
               <SmileOutlined type="message" style={{ fontsize: '16px', color: '#08c', paddingRight: '10px', paddingLeft: '10px' }} theme="outlined" />
                <a href="https://github.com/dydfuf">
                    github
                </a>
            </p>
        </div>
    )
}

export default Footer