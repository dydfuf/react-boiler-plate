import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './RepositoryPage.scss'

function RepositoryPage() {
    return (
        <Tabs>
            <TabList>
                <Tab> Title1 </Tab>
                <Tab> Title2 </Tab>
            </TabList>
            <TabPanel>
                <h2> Any Content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2> Any Content 2</h2>
            </TabPanel>
        </Tabs>
    )
}

export default RepositoryPage
