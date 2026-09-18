'use client'

import { Save, Download } from '@carbon/icons-react'
import { SplitButton, MenuItem } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <SplitButton actionText="Copy">
      <MenuItem value="save">
        <Save size={16} />
        Save
      </MenuItem>
      <MenuItem value="save_as">
        <Save size={16} />
        Save As
      </MenuItem>
      <MenuItem value="export">
        <Download size={16} />
        Export
      </MenuItem>
    </SplitButton>
  )
}
