import { grid, gridItem, vstack } from '@cerberus/styled-system/patterns'
import RootHeadline from './components/RootHeadline'
import { css } from '@cerberus/styled-system/css'
import Link from 'next/link'
import Image from 'next/image'
import { button } from '@cerberus/styled-system/recipes'

export default async function Home() {
  return (
    <div
      className={css({
        pxi: '4',
        pt: '10',
        pb: '20',
      })}
    >
      <main
        className={grid({
          gap: '4',
          columns: 12,
          justifyContent: 'center',
        })}
      >
        <div
          className={gridItem({
            gridColumnStart: 1,
            gridColumnEnd: 13,
            md: {
              gridColumnStart: 7,
              h: '66dvh',
            },
          })}
        >
          <div
            className={vstack({
              gap: '0',
              justify: 'center',
              p: '12',
              h: '15rem',
              w: 'full',
              md: {
                h: 'full',
                maxW: '40rem',
              },
            })}
          >
            <Image
              alt="Cerberus Design System logo"
              className={css({
                md: {
                  w: 'full',
                },
              })}
              priority
              src={`/logo.svg`}
              height="300"
              width="300"
            />
          </div>
        </div>

        <div
          className={gridItem({
            gridColumnStart: 1,
            gridColumnEnd: 13,
            md: {
              alignSelf: 'center',
              gridColumnStart: 1,
              gridColumnEnd: 6,
              gridRowStart: 1,
              paddingInlineStart: '6',
            },
          })}
        >
          <RootHeadline />
          <div
            className={css({
              mt: '4',
            })}
          >
            <Link className={button()} href="/preset/">
              Get Started
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
