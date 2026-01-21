'use client'

import { UseFileUploadContext } from '@ark-ui/react'
import { useCerberusContext } from '../../context/cerberus'
import { IconButton } from '../icon-button/index'
import { FileUploadParts } from './parts'

export function ImgPreview() {
  const { icons } = useCerberusContext()
  const { close: Icon } = icons

  return (
    <FileUploadParts.ItemGroup>
      <FileUploadParts.Context>
        {(ctx: UseFileUploadContext) =>
          ctx.acceptedFiles.map((file) => (
            <FileUploadParts.Item
              key={file.name}
              file={file}
              className="file-item"
            >
              <FileUploadParts.ItemPreview type="image/*">
                <FileUploadParts.ItemPreviewImage />
              </FileUploadParts.ItemPreview>

              <FileUploadParts.ItemName />
              <FileUploadParts.ItemSizeText />

              <FileUploadParts.ItemDeleteTrigger asChild>
                <IconButton clipboard size="sm" usage="ghost">
                  <Icon />
                </IconButton>
              </FileUploadParts.ItemDeleteTrigger>
            </FileUploadParts.Item>
          ))
        }
      </FileUploadParts.Context>
    </FileUploadParts.ItemGroup>
  )
}
