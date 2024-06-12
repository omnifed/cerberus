import { Tabs, TabList, Tab, TabPanel } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'

const overrideStyles = css({
  w: '1/2',
})

export function BasicTabsPreview() {
  return (
    <div className={overrideStyles}>
      <Tabs active="overview">
        <TabList>
          <Tab id="overview" controls="panel:overview" value="overview">
            Overview
          </Tab>
          <Tab id="features" controls="panel:features" value="features">
            Features
          </Tab>
          <Tab id="pricing" controls="panel:pricing" value="pricing">
            Pricing
          </Tab>
        </TabList>
        <TabPanel id="panel:overview" tab="overview">
          Overview content
        </TabPanel>
        <TabPanel id="panel:features" tab="features">
          Features content
        </TabPanel>
        <TabPanel id="panel:pricing" tab="pricing">
          Pricing content
        </TabPanel>
      </Tabs>
    </div>
  )
}

// export function CustomTabsPreview() {
//   return (
//     <Tabs active="overview">
//       <TabList>
//         <Tab controls="overview" value="overview">
//           Overview
//         </Tab>
//         <Tab controls="features" value="features">
//           Features
//         </Tab>
//         <Tab controls="pricing" value="pricing">
//           Pricing
//         </Tab>
//       </TabList>
//       <TabPanel tab="overview">Overview content</TabPanel>
//       <TabPanel tab="features">Features content</TabPanel>
//       <TabPanel tab="pricing">Pricing content</TabPanel>
//     </Tabs>
//   )
// }
