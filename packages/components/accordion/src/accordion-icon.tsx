import { useAccordionItemContext } from "@atlas/react"
import { Icon, IconProps } from "@chakra-ui/icon"
import { cx } from "@chakra-ui/shared-utils"
import { SystemStyleObject } from "@chakra-ui/system"
import { useAccordionStyles } from "./accordion-context"

/**
 * AccordionIcon that gives a visual cue of the open/close state of the accordion item.
 * It rotates `180deg` based on the open/close state.
 */

export function AccordionIcon(props: IconProps) {
  const { isOpen, isDisabled } = useAccordionItemContext()
  // const { reduceMotion } = useAccordionContext()

  const _className = cx("chakra-accordion__icon", props.className)
  const styles = useAccordionStyles()

  const iconStyles: SystemStyleObject = {
    opacity: isDisabled ? 0.4 : 1,
    transform: isOpen ? "rotate(-180deg)" : undefined,
    // TODO fix me
    // transition: reduceMotion ? undefined : "transform 0.2s",
    transition: "transform 0.2s",
    transformOrigin: "center",
    ...styles.icon,
  }

  return (
    <Icon
      viewBox="0 0 24 24"
      aria-hidden
      className={_className}
      __css={iconStyles}
      {...props}
    >
      <path
        fill="currentColor"
        d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
      />
    </Icon>
  )
}
