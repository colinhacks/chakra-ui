import {
  AccordionItem as AtlasAccordionItem,
  AccordionItemProps as AtlasAccordionItemprops,
} from "@atlas/react"
import { cx } from "@chakra-ui/shared-utils"
import { chakra, forwardRef, SystemStyleObject } from "@chakra-ui/system"
import { useAccordionStyles } from "./accordion-context"

export interface AccordionItemProps extends AtlasAccordionItemprops {}

const ChakraAccordionItem = chakra(AtlasAccordionItem)

/**
 * AccordionItem is a single accordion that provides the open-close
 * behavior when the accordion button is clicked.
 *
 * It also provides context for the accordion button and panel.
 */
export const AccordionItem = forwardRef<AccordionItemProps, "div">(
  function AccordionItem(props, ref) {
    const styles = useAccordionStyles()
    const containerStyles: SystemStyleObject = {
      ...styles.container,
      overflowAnchor: "none",
    }

    return (
      <ChakraAccordionItem
        ref={ref}
        {...props}
        className={cx("chakra-accordion__item", props.className)}
        __css={containerStyles}
      />
    )
  },
)
