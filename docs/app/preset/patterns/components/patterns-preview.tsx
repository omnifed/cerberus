import { scrollable } from 'styled-system/patterns'

export function ScrollablePreview() {
  return (
    <>
      <p>Scroll contents</p>
      <div
        className={scrollable({
          border: '4px solid',
          borderColor: 'page.border.100',
          direction: 'vertical',
          h: '6.25rem',
          hideScrollbar: true,
          pxi: '4',
          rounded: 'md',
          w: '12.5rem',
        })}
      >
        <p>
          Pariatur sint proident adipisicing sit deserunt officia duis dolor.
          Ipsum quis tempor est cupidatat in sunt consequat est amet
          exercitation nostrud adipisicing aliquip. Duis proident magna
          consectetur culpa reprehenderit ut magna. Pariatur cupidatat
          exercitation culpa ad. Sit deserunt aute deserunt enim dolore velit et
          voluptate ea ut. Duis do voluptate cillum commodo minim cillum aute
          minim. Magna eu tempor deserunt ut adipisicing qui irure ullamco
          consectetur ex nisi. Amet velit adipisicing irure adipisicing velit
          deserunt pariatur elit. Et sint proident minim sunt qui. Non laborum
          laborum ut cupidatat. Culpa sit dolor enim quis sit pariatur duis
          mollit. Tempor ipsum do anim sit veniam exercitation Lorem quis magna
          duis proident reprehenderit Lorem. Ullamco aliquip dolore tempor
          consequat officia laborum et in labore enim. Reprehenderit veniam sunt
          quis incididunt non reprehenderit mollit. Reprehenderit labore sint
          enim magna labore ex sint pariatur pariatur nulla cillum nisi. Eu sint
          aliqua deserunt eiusmod officia ipsum ipsum. Nostrud do dolore
          voluptate velit mollit tempor pariatur nostrud non. Sunt elit minim
          laborum in fugiat minim adipisicing magna ea aute. Proident qui eu et
          quis. Et dolore Lorem ad reprehenderit aliquip excepteur non labore
          reprehenderit pariatur excepteur consectetur. Do excepteur magna eu
          qui quis reprehenderit labore voluptate ullamco enim. Officia enim ad
          duis elit deserunt qui.
        </p>
      </div>
    </>
  )
}
