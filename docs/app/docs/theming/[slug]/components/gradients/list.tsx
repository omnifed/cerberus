import { cq, hstack, vstack } from 'styled-system/patterns'
import { gradientValues } from '@cerberus-design/panda-preset'
import { css } from 'styled-system/css'
import { LogoFigma } from '@carbon/icons-react'
import { Code } from '@/app/components/code'
import { PAGE_TEXT_INITIAL } from '@/app/utils/const'
import { Circle } from 'styled-system/jsx'

export function GradientList() {
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
        {gradientValues.map((gradientName, index) => (
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
                data-gradient={gradientName}
                className={css({
                  h: '15rem',
                  position: 'relative',
                  rounded: 'lg',
                  '&:is([data-gradient=charon-light])': {
                    gradient: 'charon-light',
                  },
                  '&:is([data-gradient=charon-dark])': {
                    gradient: 'charon-dark',
                  },
                  '&:is([data-gradient=nyx-light])': {
                    gradient: 'nyx-light',
                  },
                  '&:is([data-gradient=nyx-dark])': {
                    gradient: 'nyx-dark',
                  },
                  '&:is([data-gradient=amphiaraus-light])': {
                    gradient: 'amphiaraus-light',
                  },
                  '&:is([data-gradient=amphiaraus-dark])': {
                    gradient: 'amphiaraus-dark',
                  },
                  '&:is([data-gradient=styx-light])': {
                    gradient: 'styx-light',
                  },
                  '&:is([data-gradient=styx-dark])': {
                    gradient: 'styx-dark',
                  },
                  '&:is([data-gradient=thanatos-light])': {
                    gradient: 'thanatos-light',
                  },
                  '&:is([data-gradient=thanatos-dark])': {
                    gradient: 'thanatos-dark',
                  },
                  '&:is([data-gradient=hades-light])': {
                    gradient: 'hades-light',
                  },
                  '&:is([data-gradient=hades-dark])': {
                    gradient: 'hades-dark',
                  },
                  '&:is([data-gradient=asphodel-light])': {
                    gradient: 'asphodel-light',
                  },
                  '&:is([data-gradient=asphodel-dark])': {
                    gradient: 'asphodel-dark',
                  },
                })}
              >
                <div
                  className={hstack({
                    bottom: 2,
                    color: 'inherit',
                    left: 2,
                    position: 'absolute',
                    zIndex: 'decorator',
                  })}
                >
                  <Circle
                    data-gradient={gradientName}
                    className={css({
                      '&:is([data-gradient=charon-light])': {
                        bgColor: 'gradient.charon-light.text.initial',
                      },
                      '&:is([data-gradient=charon-dark])': {
                        bgColor: 'gradient.charon-dark.text.initial',
                      },
                      '&:is([data-gradient=nyx-light])': {
                        bgColor: 'gradient.nyx-light.text.initial',
                      },
                      '&:is([data-gradient=nyx-dark])': {
                        bgColor: 'gradient.nyx-dark.text.initial',
                      },
                      '&:is([data-gradient=amphiaraus-light])': {
                        bgColor: 'gradient.amphiaraus-light.text.initial',
                      },
                      '&:is([data-gradient=amphiaraus-dark])': {
                        bgColor: 'gradient.amphiaraus-dark.text.initial',
                      },
                      '&:is([data-gradient=styx-light])': {
                        bgColor: 'gradient.styx-light.text.initial',
                      },
                      '&:is([data-gradient=styx-dark])': {
                        bgColor: 'gradient.styx-dark.text.initial',
                      },
                      '&:is([data-gradient=thanatos-light])': {
                        bgColor: 'gradient.thanatos-light.text.initial',
                      },
                      '&:is([data-gradient=thanatos-dark])': {
                        bgColor: 'gradient.thanatos-dark.text.initial',
                      },
                      '&:is([data-gradient=hades-light])': {
                        bgColor: 'gradient.hades-light.text.initial',
                      },
                      '&:is([data-gradient=hades-dark])': {
                        bgColor: 'gradient.hades-dark.text.initial',
                      },
                      '&:is([data-gradient=asphodel-light])': {
                        bgColor: 'gradient.asphodel-light.text.initial',
                      },
                      '&:is([data-gradient=asphodel-dark])': {
                        bgColor: 'gradient.asphodel-dark.text.initial',
                      },
                    })}
                    size="1.125rem"
                  />
                  <small
                    className={css({
                      color: 'inherit',
                      textStyle: 'body-sm',
                    })}
                  >
                    Text Color
                  </small>
                </div>
              </section>

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
                  {gradientName.replace(/-/g, ' ')}
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
                  Gradient Fills/{gradientName}
                </p>
                <span
                  className={css({
                    color: PAGE_TEXT_INITIAL,
                    mt: 3,
                  })}
                >
                  <Code>{gradientName}</Code>
                </span>
              </footer>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
