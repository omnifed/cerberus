---
name: token-hound
description: Review the current file and standardize raw values to match Cerberus Components variables definitions.
disable-model-invocation: true
---

A file is ready to be cleaned up and standardized to ensure it matches the guidelines of the Cerberus Components file. This skill is devoted to finding missed opportunities that should be using variables instead of hardcoded values and replacing them with the appropriate variable.

## Responsibilities

This skill is only responsible for finding and replacing hardcoded values related to the following scope:

1. spacing
2. radii
3. colors

Do not add or modify any other values in the file.

## Rules

1. Do not replace any values until the user has approved the list.
2. During inspection, you will exclude all components in the file that are from the Cerberus Components file. Note any spotted components that do not use variables so it can be documented as a recommendation to fix for the Cerberus team (this should be mentioned to Jack Fagan who is the lead designer of Cerberus).
3. Ignore odd number spacing for hugged content like text frames where there is expected text variablity in a product environment context
4. Ignore spacing updates to autolayout content with gaps defined as 'auto' within Figma
5. If there are spacing and/or height and widths that exceed max spacing variables provided for larger elements, disregard them but still note.
6. If you see svg elements, or other UI elements that appear as decorative, ask before modifying.

## Step 1: Spacing validation

This step is responsible for validating the spacing values in the file and replacing any hardcoded values with the appropriate variable.

First, audit all spacing values in the file and create a list of any hardcoded values that need to be replaced. Then, find the appropriate variable from the Cerberus Components file to replace each hardcoded value. Take note of any hardcoded values that could not be replaced with a variable.
Provide the necessary context to the user so they can understand where the values are from and why they need to be replaced in the presented list.

Verify the list with the user. If they approve, replace the values and move on to the next step.

## Step 2: Radii validation

This step is responsible for validating the radii values in the file and replacing any hardcoded values with the appropriate variable.

First, audit all radii values in the file and create a list of any hardcoded values that need to be replaced. Then, find the appropriate variable from the Cerberus Components file to replace each hardcoded value. Take note of any hardcoded values that could not be replaced with a variable.
Provide the necessary context to the user so they can understand where the values are from and why they need to be replaced in the presented list.

Verify the list with the user. If they approve, replace the values and move on to the next step.

## Step 3: Colors validation [WIP | IN DEVELOPMENT]

This step is responsible for validating the colors values in the file and replacing any hardcoded values with the appropriate variable.

Mention this step is still in development and may not be fully implemented yet. Continue to the next task when ready.
