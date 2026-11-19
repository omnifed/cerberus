'use client'

import { Save, Download } from '@carbon/icons-react'
import { Menu, SplitButton } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <SplitButton actionText="Copy">
      <Menu.Item value="save">
        <Save size={16} />
        Save
      </Menu.Item>
      <Menu.Item value="save_as">
        <Save size={16} />
        Save As
      </Menu.Item>
      <Menu.Item value="export">
        <Download size={16} />
        Export
      </Menu.Item>
    </SplitButton>
  )
}
