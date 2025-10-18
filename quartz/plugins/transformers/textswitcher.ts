import type { Plugin } from "quartz";
console.log("[Quartz] TextSwitcher plugin registered");
const textswitcher = (): Plugin => ({
  name: "textswitcher",
  transform: (page) => {
    console.log("[TextSwitcher] running on:", page.filePath);
    let md = page.content;

    // Find all custom blocks like <!-- start:option1 -->...<!-- end:option1 -->
    const blockRegex = /<!-- start:(\w+) -->([\s\S]*?)<!-- end:\1 -->/g;
    const blocks: Record<string, string> = {};
    let match;
    while ((match = blockRegex.exec(md)) !== null) {
      blocks[match[1]] = match[2].trim();
    }

    // If none found, just return original page (plugin inactive in this file)
    if (Object.keys(blocks).length === 0) return page;

    // Remove all original marked blocks from content
    md = md.replace(blockRegex, "");

    // Compose HTML for dropdown options and text blocks
    const options = Object.keys(blocks);

    const htmlBlocks = options
      .map(
        (opt, i) =>
          `<div class="switcher-block" data-option="${opt}" style="${
            i === 0 ? "" : "display:none"
          }">${blocks[opt]}</div>`
      )
      .join("\n");

    // Add a banner to confirm plugin is active
    const testBanner = `<div style="border:1px solid red; padding:5px; margin-bottom: 10px;">TextSwitcher Plugin Active</div>`;

    const dropdownHtml = `
      <label for="text-switcher-select" style="display:block; margin-bottom:6px;">Choose text version:</label>
      <select id="text-switcher-select" aria-label="Switch text version" style="margin-bottom:12px;">
        ${options.map((opt) => `<option value="${opt}">${opt}</option>`).join("\n")}
      </select>
    `;

    // Combine full HTML output
    const finalHtml = `${testBanner}\n${dropdownHtml}\n${htmlBlocks}`;

    // Return with contentHtml to inject HTML correctly
    return { ...page, contentHtml: finalHtml };
  },
  // JavaScript runs after DOM is loaded, to properly bind event handlers
  afterDOMLoaded: `
    console.log('textswitcher works technically'); 
    const dropdown = document.getElementById('text-switcher-select');
    if (dropdown) {
      dropdown.addEventListener('change', function() {
        const selected = this.value;
        document.querySelectorAll('.switcher-block').forEach(block => {
          block.style.display = (block.dataset.option === selected) ? '' : 'none';
        });
      });
    }
  `,
});

export default textswitcher;
