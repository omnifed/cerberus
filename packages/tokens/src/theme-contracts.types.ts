import type { Prominence, SemanticToken } from './semantic-tokens.types'

// Page

export type PageProminence = Exclude<Prominence, 'static'>
export type TextProminence = Exclude<PageProminence, 400>

export interface ContractPageTokens {
  readonly page: {
    readonly backdrop: {
      readonly initial: object
    }
    readonly bg: {
      readonly initial: object
      readonly 100: object
      readonly 200: object
      readonly 300: object
    }
    readonly border: {
      readonly initial: object
      readonly 100: object
      readonly 200: object
    }
    readonly surface: {
      readonly [P in PageProminence]: object
    }
    readonly text: {
      readonly [P in TextProminence]: object
    }
  }
}

export interface PageTokens {
  readonly page: {
    readonly backdrop: {
      readonly initial: SemanticToken
    }
    readonly bg: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
      readonly 300: SemanticToken
    }
    readonly border: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
    }
    readonly surface: {
      readonly [P in PageProminence]: SemanticToken
    }
    readonly text: {
      readonly [P in Exclude<PageProminence, 400>]: SemanticToken
    }
  }
}

// Action

export type ActionProminences = {
  readonly initial: SemanticToken
  readonly hover: SemanticToken
  readonly active: SemanticToken
}

export type ActionNavProminences = {
  readonly initial: SemanticToken
  readonly hover: SemanticToken
  readonly visited: SemanticToken
}

export interface ContractActionTokens {
  readonly action: {
    readonly bg: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly border: {
      readonly initial: object
      readonly 100: object
      readonly focus: object
    }
    readonly ghost: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly navigation: {
      readonly initial: object
      readonly hover: object
      readonly visited: object
    }
    readonly text: {
      readonly initial: object
      readonly 100: object
      readonly 200: object
      readonly inverse: object
      readonly static: object
    }
  }
}

export interface ActionTokens {
  readonly action: {
    readonly bg: ActionProminences
    readonly border: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly focus: SemanticToken
    }
    readonly ghost: ActionProminences
    readonly navigation: ActionNavProminences
    readonly text: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
      readonly inverse: SemanticToken
      readonly static: SemanticToken
    }
  }
}

// Secondary Action

export type SecondaryActionProminences = {
  readonly initial: SemanticToken
  readonly hover: SemanticToken
  readonly active: SemanticToken
}
export type SecondaryActionNavProminences = {
  readonly initial: SemanticToken
  readonly hover: SemanticToken
  readonly visited: SemanticToken
}

export interface ContractSecondaryActionTokens {
  readonly secondaryAction: {
    readonly bg: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly border: {
      readonly initial: object
      readonly 100: object
    }
    readonly ghost: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly navigation: {
      readonly initial: object
      readonly hover: object
      readonly visited: object
    }
    readonly text: {
      readonly initial: object
      readonly 100: object
      readonly 200: object
      readonly static: object
    }
  }
}

export interface SecondaryActionTokens {
  readonly secondaryAction: {
    readonly bg: SecondaryActionProminences
    readonly border: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
    }
    readonly ghost: SecondaryActionProminences
    readonly navigation: SecondaryActionNavProminences
    readonly text: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
      readonly static: SemanticToken
    }
  }
}

// Info

type InfoTextProminences = Exclude<Prominence, 'inverse' | 300 | 400>

export interface ContractInfoTokens {
  readonly info: {
    readonly border: {
      readonly initial: object
      readonly 100: object
    }
    readonly bg: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly ghost: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly surface: {
      readonly initial: object
      readonly 100: object
      readonly 200: object
    }
    readonly text: {
      readonly [P in InfoTextProminences]: object
    }
  }
}

export interface InfoTokens {
  readonly info: {
    readonly border: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
    }
    readonly bg: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly ghost: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly surface: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
    }
    readonly text: {
      readonly [P in InfoTextProminences]: SemanticToken
    }
  }
}

// Success

type SuccessTextProminences = Exclude<Prominence, 300 | 400>

export interface ContractSuccessTokens {
  readonly success: {
    readonly border: {
      readonly initial: object
    }
    readonly bg: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly ghost: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly surface: {
      readonly initial: object
      readonly 100: object
      readonly 200: object
    }
    readonly text: {
      readonly [P in SuccessTextProminences]: object
    }
  }
}

export interface SuccessTokens {
  readonly success: {
    readonly border: {
      readonly initial: SemanticToken
    }
    readonly bg: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly ghost: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly surface: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
    }
    readonly text: {
      readonly [P in SuccessTextProminences]: SemanticToken
    }
  }
}

// Warning

type WarningTextProminences = Exclude<Prominence, 300 | 400>

export interface ContractWarningTokens {
  readonly warning: {
    readonly border: {
      readonly initial: object
    }
    readonly bg: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly ghost: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly surface: {
      readonly initial: object
      readonly 100: object
      readonly 200: object
    }
    readonly text: {
      readonly [P in WarningTextProminences]: object
    }
  }
}

export interface WarningTokens {
  readonly warning: {
    readonly border: {
      readonly initial: SemanticToken
    }
    readonly bg: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly ghost: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly surface: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
    }
    readonly text: {
      readonly [P in WarningTextProminences]: SemanticToken
    }
  }
}

// Danger

type DangerProminences = Exclude<Prominence, 300 | 400>
type DangerTextProminence = Exclude<DangerProminences, 400>

export interface ContractDangerTokens {
  readonly danger: {
    readonly bg: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly border: {
      readonly initial: object
    }
    readonly ghost: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly surface: {
      readonly initial: object
      readonly 100: object
      readonly 200: object
    }
    readonly text: {
      readonly [P in DangerTextProminence]: object
    }
  }
}

export interface DangerTokens {
  readonly danger: {
    readonly bg: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly border: {
      readonly initial: SemanticToken
    }
    readonly ghost: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly surface: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
    }
    readonly text: {
      readonly [P in DangerTextProminence]: SemanticToken
    }
  }
}

// Data-Viz

export type DataVisProminence =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'

export interface ContractDataVizTokens {
  readonly dataViz: {
    readonly diverging: {
      readonly [P in DataVisProminence]: object
    }
    readonly sequential: {
      readonly [P in Exclude<
        DataVisProminence,
        '50' | '700' | '800' | '900'
      >]: object
    }
    readonly qualitative: {
      readonly [P in Exclude<DataVisProminence, '50' | '800' | '900'>]: object
    }
    readonly progress: {
      readonly start: object
      readonly end: object
      readonly complete: object
    }
  }
}

export interface DataVizTokens {
  readonly dataViz: {
    readonly diverging: {
      readonly [P in DataVisProminence]: SemanticToken
    }
    readonly sequential: {
      readonly [P in Exclude<
        DataVisProminence,
        '50' | '700' | '800' | '900'
      >]: SemanticToken
    }
    readonly qualitative: {
      readonly [P in Exclude<
        DataVisProminence,
        '50' | '800' | '900'
      >]: SemanticToken
    }
    readonly progress: {
      readonly start: SemanticToken
      readonly end: SemanticToken
      readonly complete: SemanticToken
    }
  }
}

// Gradients

export type GradientValue =
  | 'charon-light'
  | 'charon-dark'
  | 'nyx-light'
  | 'nyx-dark'
  | 'amphiaraus-light'
  | 'amphiaraus-dark'
  | 'styx-light'
  | 'styx-dark'
  | 'thanatos-light'
  | 'thanatos-dark'
  | 'hades-light'
  | 'hades-dark'
  | 'asphodel-light'
  | 'asphodel-dark'

export type GradientText = {
  readonly text: {
    readonly initial: SemanticToken
  }
}

export interface ContractGradientTokens {
  readonly gradient: {
    readonly 'charon-light': GradientText
    readonly 'charon-dark': GradientText
    readonly 'nyx-light': GradientText
    readonly 'nyx-dark': GradientText
    readonly 'amphiaraus-light': GradientText
    readonly 'amphiaraus-dark': GradientText
    readonly 'styx-light': GradientText
    readonly 'styx-dark': GradientText
    readonly 'thanatos-light': GradientText
    readonly 'thanatos-dark': GradientText
    readonly 'hades-light': GradientText
    readonly 'hades-dark': GradientText
    readonly 'asphodel-light': GradientText
    readonly 'asphodel-dark': GradientText
  }
}
