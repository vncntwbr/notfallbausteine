import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: false,
  showComma: false,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  /*function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      if (fileData.dates) {
        segments.push(<Date date={getDate(cfg, fileData)!} locale={cfg.locale} />)
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>{displayedTime}</span>)
      }

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segments}
        </p>
      )
    } else {
      return null
    }
  }*/

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
      
      const segments: (string | JSX.Element)[] = [] 

      if (fileData.dates){
        segments.push("Zuletzt geändert: ")
        segments.push(<Date date={getDate(cfg, fileData)!} locale={cfg.locale} />)
      }
      
      const cbfValue = Array.isArray(fileData.frontmatter?.cbf)
        ? fileData.frontmatter.cbf.join("\n")
        : fileData.frontmatter?.cbf || '';

      const zbbValue = Array.isArray(fileData.frontmatter?.zbb)
        ? fileData.frontmatter.zbb.join("\n")
        : fileData.frontmatter?.zbb || '';

      const localFrontmatter: Record<string, string> = {
        cbf: cbfValue,
        zbb: zbbValue,
      };


      const localFrontmatterElements: HTMLElement[] = [];

      for (const [key, value] of Object.entries(localFrontmatter)) {
        const keyCaps = key.toUpperCase();
        localFrontmatterElements.push(<blockquote class="callout lokal localBlock" data-option={key} style="display:none" data-callout="lokal">
            <div class="callout-title">
              <div class="callout-icon"></div>
              <div class="callout-title-inner">{keyCaps}</div>
            </div>
            <div class="callout-content">
              <div class="callout-content-inner">
                <p style={{ whiteSpace: 'pre-line' }}>{value}</p>
              </div>
            </div>
          </blockquote>)
      }

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segments}
          {localFrontmatterElements}
        </p>
      )
    }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
