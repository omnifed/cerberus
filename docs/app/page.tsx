import { grid, gridItem, vstack } from '@/styled-system/patterns'
import RootHeadline from './components/RootHeadline'
import { Image as ImageIcon } from '@cerberus-design/icons'
import { css } from '@/styled-system/css'
import Link from 'next/link'

export default function Home() {
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
              bgColor: 'gray',
              gap: '0',
              justify: 'center',
              h: '15rem',
              w: 'full',
              md: {
                h: 'full',
              },
            })}
          >
            <ImageIcon size={32} />
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
            <Link
              className={css({
                alignItems: 'center',
                bgColor: 'action.navigation.initial',
                color: 'neutral.text.inverse',
                display: 'inline-flex',
                h: '3.3rem',
                justifyContent: 'center',
                pxi: '4',
                w: 'full',
                rounded: 'md',
                transition: 'background-color 0.2s ease-in-out',
                _hover: {
                  bgColor: 'action.navigation.hover',
                },
                md: {
                  w: 'auto',
                },
              })}
              href="/preset/"
            >
              Get Started
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
