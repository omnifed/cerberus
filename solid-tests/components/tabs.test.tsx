import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@solidjs/testing-library'
import { Tabs } from '@cerberus-design/solid'
import { Index } from 'solid-js'

const ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))
vi.stubGlobal('ResizeObserver', ResizeObserver)

describe('Tabs Family', () => {
  const tabData = [
    { id: 'tab1', label: 'Tab1', content: 'Tab1 content' },
    { id: 'tab2', label: 'Tab2', content: 'Tab2 content' },
    { id: 'tab3', label: 'Tab3', content: 'Tab3 content' },
  ]

  beforeEach(() => {
    localStorage.clear()
  })

  function TestTabs() {
    return (
      <>
        <Tabs.List>
          <Index each={tabData}>
            {(tab) => <Tabs.Tab value={tab().id}>{tab().label}</Tabs.Tab>}
          </Index>
        </Tabs.List>
        <Index each={tabData}>
          {(tab) => <Tabs.Panel value={tab().id}>{tab().content}</Tabs.Panel>}
        </Index>
      </>
    )
  }

  test('should export a Tabs component', () => {
    render(() => (
      <Tabs.Root defaultValue="tab1">
        <TestTabs />
      </Tabs.Root>
    ))
    expect(screen.getByText(/tab1 content/i)).toBeInTheDocument()
    expect(screen.queryByText(/tab2 content/i)).toHaveAttribute('data-state')
  })
})
