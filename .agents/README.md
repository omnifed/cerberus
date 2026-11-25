# Agent Resources

Task playbooks for AI agents working in Cerberus. Start with the root
[`AGENTS.md`](../AGENTS.md): it has the rules, commands and v2 conventions every
task needs. Then load the playbook for your task.

## Playbooks

| File                                                             | Use it to                                      |
| ---------------------------------------------------------------- | ---------------------------------------------- |
| [`create-react-component.md`](./create-react-component.md)       | Add a component with the generator, end to end |
| [`create-preset-recipe.md`](./create-preset-recipe.md)           | Write or register a Panda recipe               |
| [`create-doc-component-page.md`](./create-doc-component-page.md) | Finish a component's docs page and demos       |
| [`docs.md`](./docs.md)                                           | Understand the docs site                       |
| [`style-guide.md`](./style-guide.md)                             | Follow the code conventions                    |

Reference files: [`ark-ui.txt`](./ark-ui.txt) (Ark UI docs) and
[`next.txt`](./next.txt) (Next.js docs).

## Skills

[`skills/`](./skills) holds agent skills. Agents that support skills load them
automatically when a task matches.

| Skill                             | Use it for                                |
| --------------------------------- | ----------------------------------------- |
| `panda-css`                       | Writing styles with Panda CSS v2          |
| `panda-css-theming`               | Tokens, themes and recipe architecture    |
| `panda-css-migrate`               | Panda v1 → v2 issues                      |
| `cerberus-form-component-styling` | Styling custom form components            |
| `cerberus-realtime-data-grid`     | Real-time Data Grid tables with Signals   |
| `token-hound`                     | Replacing raw values with Cerberus tokens |
| `charons-ferry`                   | Standardizing a Figma file to Cerberus    |

## Example prompts

### New component

```text
Using .agents/create-react-component.md, add a HoverCard component.
```

The generator creates the recipe, tests, docs page and demo, so one prompt
covers the whole component. **Review the result against the Figma design before
shipping.**

### Recipe styles

```text
Using .agents/create-preset-recipe.md, style the hoverCard recipe to match this Figma frame: <link>
```

### Docs page

```text
Using .agents/create-doc-component-page.md, finish the HoverCard docs page with examples for each variant.
```
