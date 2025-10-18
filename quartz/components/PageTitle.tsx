import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{title}</a>
      <select id="dropdownLocalisation" name="dropdownLocalisation">
        <option value="default">Ohne Lokalisierung</option>
        <option value="cbf">CBF</option>
        <option value="zbb">ZBB</option>
      </select>
    </h2>
  )
}

PageTitle.afterDOMLoaded = `
  console.log('Text Switcher Should Work');

  const dropdown = document.getElementById('dropdownLocalisation');
  if (!dropdown) {
    console.log('Dropdown element not found');
  } else {
    // Bind change event
    dropdown.addEventListener('change', function () {
      const selected = this.value;
      document.querySelectorAll('.localBlock').forEach(block => {
        block.style.display = (block.dataset.option === selected) ? '' : 'none';
      });
    });
    console.log('Event listener attached');
  }
`;


PageTitle.css = `
  .page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
  }

  /* Style the dropdown to match Quartz root title font and size */
  #dropdownLocalisation{
    font-family: var(--font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif);
    font-weight: 600;              /* semi-bold like root title */
    font-size: 1.5rem;             /* about 24px if root is ~24px */
    line-height: 1.2;
    padding: 0.2em 0.6em;
    border: 1px solid var(--interactive-neutral, #555);
    border-radius: 4px;
    background-color: var(--background-primary, #fff);
    color: var(--text-normal, #222);
    min-width: 200px;              /* or adjust to your content */
    cursor: pointer;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  /* Hover and focus to mimic Quartz interactive style */
  #dropdownLocalisation:hover,
  #dropdownLocalisation:focus {
    border-color: var(--accent, #7aa2f7);
    box-shadow: 0 0 3px var(--accent, #7aa2f7);
    outline: none;
  }
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
