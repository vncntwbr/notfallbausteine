import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year} von <a href="https://bsky.app/profile/vncntwbr.bsky.social">Vincent</a> im Spirit von < a href="https://dasfoam.de">#FOAMed</a> •
          &nbsp;<a href="https://facharztnotfallmedizin.de">#FacharztNotfallmedizin</a> •
          &nbsp;<a href="https://notfallbausteine.de/How-To">How To Contribute</a> •
          &nbsp;Lizenziert unter <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC-BY-NC</a>: Nicht-kommerzielle Zwecke unter Quellenangabe
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
