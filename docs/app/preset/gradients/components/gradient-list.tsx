import { cq, hstack, vstack } from '@cerberus/styled-system/patterns'
import { gradientValues } from '@cerberus-design/panda-preset'
import { css } from '@cerberus/styled-system/css'
import { LogoFigma } from '@cerberus-design/icons'
import { Code } from '@/app/components/Code'
import { PAGE_TEXT_INITIAL } from '@/app/utils/const'

export default function GradientList() {
  return (
    <div
      className={cq({
        mt: 6,
      })}
    >
      <ul
        className={hstack({
          gap: 4,
          flexWrap: 'wrap',
        })}
      >
        {gradientValues.map((gradient, index) => (
          <li
            className={css({
              flexShrink: 0,
              w: {
                '@/sm': 'full',
                '@/xl': 'calc(50% - 1rem)',
                '@/4xl': 'calc(33.3333% - 1rem)',
              },
            })}
            key={index}
          >
            <div
              className={css({
                bgColor: 'page.surface.100',
                border: '2px solid',
                borderColor: 'page.border.initial',
                p: 2,
                rounded: 'xl',
              })}
            >
              <section
                data-gradient={gradient}
                className={css({
                  h: '15rem',
                  rounded: 'lg',
                  '&:is([data-gradient=dark-purple])': {
                    cerbGradient: 'dark-purple',
                  },
                  '&:is([data-gradient=light-purple])': {
                    cerbGradient: 'light-purple',
                  },
                  '&:is([data-gradient=green])': {
                    cerbGradient: 'green',
                  },
                  '&:is([data-gradient=light-blue])': {
                    cerbGradient: 'light-blue',
                  },
                  '&:is([data-gradient=red])': {
                    cerbGradient: 'red',
                  },
                  '&:is([data-gradient=neutral])': {
                    cerbGradient: 'neutral',
                  },
                  '&:is([data-gradient=yellow])': {
                    cerbGradient: 'yellow',
                  },
                  '&:is([data-gradient=light-teal])': {
                    cerbGradient: 'light-teal',
                  },
                  '&:is([data-gradient=teal])': {
                    cerbGradient: 'teal',
                  },
                  '&:is([data-gradient=charon-light])': {
                    gradient: 'charon-light',
                  },
                  '&:is([data-gradient=charon-dark])': {
                    gradient: 'charon-dark',
                  },
                })}
              />
              <footer
                className={vstack({
                  alignItems: 'flex-start',
                  pb: 4,
                  pxi: '5',
                  pt: 3,
                })}
              >
                <h2
                  className={css({
                    color: PAGE_TEXT_INITIAL,
                    textStyle: 'h3',
                    textTransform: 'capitalize',
                  })}
                >
                  {gradient.replace(/-/g, ' ')}
                </h2>
                <p
                  className={hstack({
                    color: PAGE_TEXT_INITIAL,
                    gap: 1,
                  })}
                >
                  <span
                    className={css({
                      color: 'page.text.100',
                    })}
                  >
                    <LogoFigma />
                  </span>
                  Gradient Fills/{gradient}
                </p>
                <span
                  className={css({
                    color: PAGE_TEXT_INITIAL,
                    mt: 3,
                  })}
                >
                  <Code>{gradient}</Code>
                </span>
              </footer>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
