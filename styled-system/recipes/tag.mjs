import { memo, splitProps } from '../helpers.mjs'
import { createRecipe, mergeRecipes } from './create-recipe.mjs'

const tagFn = /* @__PURE__ */ createRecipe(
  'tag',
  {
    palette: 'page',
    shape: 'pill',
    usage: 'filled',
  },
  [
    {
      gradient: 'charon-light',
      usage: 'outlined',
      css: {
        borderColor: 'transparent',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        bgColor: 'page.surface.initial',
        borderGradient: 'charon-light',
        color: 'page.text.initial',
      },
    },
    {
      gradient: 'charon-dark',
      usage: 'outlined',
      css: {
        borderColor: 'transparent',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        bgColor: 'page.surface.initial',
        borderGradient: 'charon-dark',
        color: 'page.text.initial',
      },
    },
    {
      gradient: 'nyx-light',
      usage: 'outlined',
      css: {
        borderColor: 'transparent',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        bgColor: 'page.surface.initial',
        borderGradient: 'nyx-light',
        color: 'page.text.initial',
      },
    },
    {
      gradient: 'nyx-dark',
      usage: 'outlined',
      css: {
        borderColor: 'transparent',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        bgColor: 'page.surface.initial',
        borderGradient: 'nyx-dark',
        color: 'page.text.initial',
      },
    },
    {
      gradient: 'amphiaraus-light',
      usage: 'outlined',
      css: {
        borderColor: 'transparent',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        bgColor: 'page.surface.initial',
        borderGradient: 'amphiaraus-light',
        color: 'page.text.initial',
      },
    },
    {
      gradient: 'amphiaraus-dark',
      usage: 'outlined',
      css: {
        borderColor: 'transparent',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        bgColor: 'page.surface.initial',
        borderGradient: 'amphiaraus-dark',
        color: 'page.text.initial',
      },
    },
    {
      gradient: 'styx-light',
      usage: 'outlined',
      css: {
        borderColor: 'transparent',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        bgColor: 'page.surface.initial',
        borderGradient: 'styx-light',
        color: 'page.text.initial',
      },
    },
    {
      gradient: 'styx-dark',
      usage: 'outlined',
      css: {
        borderColor: 'transparent',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        bgColor: 'page.surface.initial',
        borderGradient: 'styx-dark',
        color: 'page.text.initial',
      },
    },
    {
      gradient: 'thanatos-light',
      usage: 'outlined',
      css: {
        borderColor: 'transparent',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        bgColor: 'page.surface.initial',
        borderGradient: 'thanatos-light',
        color: 'page.text.initial',
      },
    },
    {
      gradient: 'thanatos-dark',
      usage: 'outlined',
      css: {
        borderColor: 'transparent',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        bgColor: 'page.surface.initial',
        borderGradient: 'thanatos-dark',
        color: 'page.text.initial',
      },
    },
    {
      gradient: 'hades-light',
      usage: 'outlined',
      css: {
        borderColor: 'transparent',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        bgColor: 'page.surface.initial',
        borderGradient: 'hades-light',
        color: 'page.text.initial',
      },
    },
    {
      gradient: 'hades-dark',
      usage: 'outlined',
      css: {
        borderColor: 'transparent',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        bgColor: 'page.surface.initial',
        borderGradient: 'hades-dark',
        color: 'page.text.initial',
      },
    },
    {
      gradient: 'asphodel-light',
      usage: 'outlined',
      css: {
        borderColor: 'transparent',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        bgColor: 'page.surface.initial',
        borderGradient: 'asphodel-light',
        color: 'page.text.initial',
      },
    },
    {
      gradient: 'asphodel-dark',
      usage: 'outlined',
      css: {
        borderColor: 'transparent',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        bgColor: 'page.surface.initial',
        borderGradient: 'asphodel-dark',
        color: 'page.text.initial',
      },
    },
  ],
)

const tagVariantMap = {
  palette: ['page', 'info', 'success', 'warning', 'danger', 'secondaryAction'],
  gradient: [
    'charon-light',
    'charon-dark',
    'nyx-light',
    'nyx-dark',
    'amphiaraus-light',
    'amphiaraus-dark',
    'styx-light',
    'styx-dark',
    'thanatos-light',
    'thanatos-dark',
    'hades-light',
    'hades-dark',
    'asphodel-light',
    'asphodel-dark',
  ],
  usage: ['filled', 'outlined'],
  shape: ['pill', 'square'],
}

const tagVariantKeys = Object.keys(tagVariantMap)

export const tag = /* @__PURE__ */ Object.assign(memo(tagFn.recipeFn), {
  __recipe__: true,
  __name__: 'tag',
  __getCompoundVariantCss__: tagFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: tagVariantKeys,
  variantMap: tagVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, tagVariantKeys)
  },
  getVariantProps: tagFn.getVariantProps,
})
