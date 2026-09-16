import { BasicDemo } from './basic.demo'
import { CustomDemo } from './custom.demo'
import { DataDemo } from './data.demo'
import { ErrorDemo } from './error.demo'
import { ExpandDemo } from './expand.demo'
import { ExpressionDemo } from './expressions.demo'
import { JSDemo } from './js.demo'
import { MapDemo } from './map.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  data: { preview: <DataDemo /> },
  js: { preview: <JSDemo /> },
  expressions: { preview: <ExpressionDemo /> },
  error: { preview: <ErrorDemo /> },
  map: { preview: <MapDemo /> },
  expand: { preview: <ExpandDemo /> },
  custom: { preview: <CustomDemo /> },
}
