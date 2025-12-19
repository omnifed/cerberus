import { GetLocalVariablesResponse, LocalVariable } from '@figma/rest-api-spec'
import { rgbToHex } from './color'
import { Token, TokensFile } from './figma.types'
import { formatFileName } from './utils'

function tokenTypeFromVariable(variable: LocalVariable) {
  switch (variable.resolvedType) {
    case 'BOOLEAN':
      return 'boolean'
    case 'COLOR':
      return 'color'
    case 'FLOAT':
      return 'number'
    case 'STRING':
      return 'string'
  }
}

function tokenValueFromVariable(
  variable: LocalVariable,
  modeId: string,
  localVariables: { [id: string]: LocalVariable },
) {
  const value = variable.valuesByMode[modeId]

  if (typeof value === 'object') {
    if ('type' in value && value.type === 'VARIABLE_ALIAS') {
      const aliasedVariable = localVariables[value.id]
      if (aliasedVariable === undefined) {
        console.error(`Alias refers to a non-existent variable: ${value.id}`)
        return ''
      }
      return aliasedVariable.name.replace(/\//g, '.')
    } else if ('r' in value) {
      return rgbToHex(value)
    }

    throw new Error(`Format of variable value is invalid: ${value}`)
  } else {
    return value
  }
}

export function tokenFilesFromLocalVariables(
  localVariablesResponse: GetLocalVariablesResponse,
) {
  const tokenFiles: { [fileName: string]: TokensFile } = {}
  const localVariableCollections =
    localVariablesResponse.meta.variableCollections
  const localVariables = localVariablesResponse.meta.variables

  Object.values(localVariables).forEach((variable) => {
    // Skip remote variables because we only want to generate tokens for local variables
    if (variable.remote) {
      return
    }

    const collection = localVariableCollections[variable.variableCollectionId]

    collection.modes.forEach((mode) => {
      const fileName = `${formatFileName(collection.name)}.${formatFileName(mode.name)}.json`

      if (!tokenFiles[fileName]) {
        tokenFiles[fileName] = {}
      }

      let obj = tokenFiles[fileName]

      variable.name.split('/').forEach((groupName) => {
        obj[groupName] = obj[groupName] || {}
        obj = obj[groupName] as TokensFile
      })

      const token: Token = {
        $type: tokenTypeFromVariable(variable),
        $value: tokenValueFromVariable(variable, mode.modeId, localVariables),
        $description: variable.description,
        $extensions: {
          'com.figma': {
            hiddenFromPublishing: variable.hiddenFromPublishing,
            scopes: variable.scopes,
            codeSyntax: variable.codeSyntax,
          },
        },
      }

      Object.assign(obj, token)
    })
  })

  return tokenFiles
}
