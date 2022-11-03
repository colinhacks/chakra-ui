import { cx } from "@chakra-ui/shared-utils"
import {
  chakra,
  forwardRef,
  omitThemingProps,
  ThemingProps,
  useMultiStyleConfig,
} from "@chakra-ui/system"
import { AccordionStylesProvider } from "./accordion-context"

import {
  Accordion as AtlasAccordion,
  AccordionProps as AtlasAccordionProps,
} from "@atlas/react"

export interface AccordionProps
  extends AtlasAccordionProps,
    ThemingProps<"Accordion"> {
  /**
   * If `true`, height animation and transitions will be disabled.
   */
  reduceMotion?: boolean
}

const ChakraAccordion = chakra(AtlasAccordion)

/**
 * The wrapper that provides context and focus management
 * for all accordion items.
 *
 * It wraps all accordion items in a `div` for better grouping.
 * @see Docs https://chakra-ui.com/accordion
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
 */
export const Accordion = forwardRef<AccordionProps, "div">(function Accordion(
  props,
  ref,
) {
  const styles = useMultiStyleConfig("Accordion", props)
  const ownProps = omitThemingProps(props)

  // const ctx = useMemo(
  //   () => ({ ...context, reduceMotion: !!reduceMotion }),
  //   [context, reduceMotion],
  // )

  return (
    <AccordionStylesProvider value={styles}>
      <ChakraAccordion
        ref={ref}
        {...ownProps}
        className={cx("chakra-accordion", props.className)}
        __css={styles.root}
      />
    </AccordionStylesProvider>
  )
})
