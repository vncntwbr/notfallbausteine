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
      <select id="dropdownLocalisation" name="dropdownLocalisation"><h2 class={classNames(displayClass, "page-title")}>
        <option value="default">Unlokalisiert</option>
        <option value="cbf">CBF</option>
        <option value="zbb">ZBB</option>
      </h2>
      </select>
    </h2>
  )
}

PageTitle.afterDOMLoaded = `
  function setupDropdown() {
    const dropdown = document.getElementById('dropdownLocalisation');
    if (!dropdown) return;

    // Restore selection from localStorage
    const saved = localStorage.getItem('selectedOption');
    if (saved) dropdown.value = saved;

    function updateBlocks() {
      const selected = dropdown.value;
      document.querySelectorAll('.localBlock').forEach(block => {
        block.style.display = (block.dataset.option === selected) ? 'block' : 'none';
      });
    }

    // Remove any existing event listeners to avoid duplicates
    dropdown.removeEventListener('change', onChangeHandler);

    function onChangeHandler() {
      localStorage.setItem('selectedOption', dropdown.value);
      updateBlocks();
    }

    dropdown.addEventListener('change', onChangeHandler);

    updateBlocks();
  }

  // Run on initial DOM load
  setupDropdown();

  // Listen for navigation events (SPA routing) to reapply logic on page changes
  document.addEventListener('nav', () => {
    setupDropdown();
  });
`;





PageTitle.css = `
  .page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
  }

  /* Style the dropdown to match Quartz root title font and size */
  #dropdownLocalisation{
    font-family: var(--titleFont);
    font-size: 1.75rem;
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(--dark);
    font-weight: revert;
    margin-bottom: 0;
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
