import { withoutSpace } from '../helpers.mjs'

const conditionsStr =
  '_cerberusTheme,_lightMode,_darkMode,_systemMode,_open,_closed,_modalOpen,_pinned,_leftPinned,_rightPinned,_isOver,_isDropped,_isComplete,_placeholderShown,_screenReaderOnly,_checked,_indeterminate,_dataReadOnly,_userInvalid,_groupInvalid,_groupChecked,_notDisabled,_highEmphasis,_lowEmphasis,_today,_pastDay,_inRange,_startRange,_endRange,_positionBottom,_positionTop,_positionLeft,_positionRight,_startIndicator,_endIndicator,_horizontal,_vertical,_xsSize,_smSize,_mdSize,_lgSize,_xlSize,_notify,_startIcon,_tooltip,_admin,_student,_user,_highlight,_spellingError,_grammarError,_pagePalette,_actionPalette,_secondaryActionPalette,_infoPalette,_successPalette,_warningPalette,_dangerPalette,_page,_action,_secondaryAction,_info,_success,_warning,_danger,_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupExpanded,_required,_valid,_invalid,_autofill,_outOfRange,_placeholder,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_icon,_starting,_noscript,_invertedColors,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,_themeCerberus,base'
const conditions = new Set(conditionsStr.split(','))

const conditionRegex = /^@|&|&$/

export function isCondition(value) {
  return conditions.has(value) || conditionRegex.test(value)
}

const underscoreRegex = /^_/
const conditionsSelectorRegex = /&|@/

export function finalizeConditions(paths) {
  return paths.map((path) => {
    if (conditions.has(path)) {
      return path.replace(underscoreRegex, '')
    }

    if (conditionsSelectorRegex.test(path)) {
      return `[${withoutSpace(path.trim())}]`
    }

    return path
  })
}

export function sortConditions(paths) {
  return paths.sort((a, b) => {
    const aa = isCondition(a)
    const bb = isCondition(b)
    if (aa && !bb) return 1
    if (!aa && bb) return -1
    return 0
  })
}
