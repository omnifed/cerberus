import { BasicDemo } from './basic.demo'
import { CaseDemo } from './case.demo'
import { ExactMatchDemo } from './exact.demo'
import { MatchDemo } from './match.demo'
import { MultipleDemo } from './multiple.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  multiple: { preview: <MultipleDemo /> },
  case: { preview: <CaseDemo /> },
  match: { preview: <MatchDemo /> },
  exact: { preview: <ExactMatchDemo /> },
}
