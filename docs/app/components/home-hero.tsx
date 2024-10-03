import { css } from '@cerberus/styled-system/css'
import Link from 'next/link'
import { button } from '@cerberus/styled-system/recipes'
import CerberusLogo from './cerberus-logo'
import { vstack } from '@cerberus-design/styled-system/patterns'
import { grid, gridItem } from '@cerberus/styled-system/patterns'

export default function HomeHero() {
  return (
    <div
      className={grid({
        columns: 1,
        gap: 4,
        mt: '8rem',
        lg: {
          columns: 2,
          gridTemplateColumns: '1fr 1fr',
          mt: '12rem',
          pxi: '8',
        },
      })}
    >
      <main
        className={gridItem({
          bgColor: 'page.surface.100',
          mxi: '2',
          pxi: '6',
          py: 8,
          rounded: '2xl',
          md: {
            pxi: '8',
            py: 14,
          },
          lg: {
            pxi: '10',
            py: 16,
          },
        })}
      >
        <div
          className={vstack({
            alignItems: 'flex-start',
            gap: 4,
          })}
        >
          <h1
            className={css({
              maxW: '44ch',
              textStyle: 'display-sm',
              textWrap: 'pretty',
              lg: {
                pb: 4,
                textStyle: 'display-lg',
              },
            })}
          >
            Protect your brand with{' '}
            <span
              className={css({
                display: 'inline-block',
                color: 'danger.text.200',
              })}
            >
              Cerberus
            </span>
          </h1>

          <p
            className={css({
              maxW: '44ch',
              textStyle: 'body-lg',
              lg: {
                lineHeight: 'relaxed',
                textStyle: 'body-xl',
              },
            })}
          >
            Create React design systems effortlessly, or use our out-of-the-box
            settings.
          </p>

          <div
            className={css({
              pt: 10,
              lg: {
                pt: 14,
              },
            })}
          >
            <Link className={button()} href="/preset/">
              Get Started
            </Link>
          </div>
        </div>
      </main>

      <div className={gridItem()}>
        <span
          className={css({
            display: 'block',
            mt: 8,
            mx: 'auto',
            w: '1/2',
          })}
        >
          <CerberusLogo />
        </span>
      </div>
    </div>
  )
}
