'use client'

import { VStack } from '@/styled-system/jsx'
import { FileStatus, processStatus } from '@cerberus-design/react'
import { useState } from 'react'

export function StatusCustomDemo() {
  const [log, setLog] = useState('No action yet')

  return (
    <VStack maxW="36rem" w="3/4">
      <FileStatus
        id="rapport"
        file="rapport.pdf"
        now={62}
        status={processStatus.PROCESSING}
        onClick={(action) => setLog(`Action: ${action}`)}
      >
        {/* Replace the status text, patch the progress label and action */}
        <FileStatus.StatusText>62 % envoyé</FileStatus.StatusText>
        <FileStatus.Progress label="Progression de l'envoi" />
        <FileStatus.Action ariaLabel="Annuler l'envoi" />
      </FileStatus>

      <small aria-live="polite">{log}</small>
    </VStack>
  )
}
