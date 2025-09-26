'use client'

import { MenuItem, SplitButton } from '@cerberus-design/react'
import { Download, Save } from '@carbon/icons-react'

export function StaticPreview() {
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

export function BasicDemo() {
  return (
    <SplitButton actionText="Main Action" disabled>
      <MenuItem value="save">
        <Save size={16} />
        Save
      </MenuItem>
      <MenuItem value="save_as">
        <Save size={16} />
        Save As...
      </MenuItem>
      <MenuItem value="export">
        <Download size={16} />
        Export
      </MenuItem>
    </SplitButton>
  )
}
