import React from 'react'
import Sidebar from './Sidebar'
import { Row, Col} from 'react-bootstrap'

export default function Layout ({ children, feedsStore}){
return (
<>
<Sidebar feedsStore={feedsStore}/>
<div className='content'>
    {children}
</div>
    </>)
}