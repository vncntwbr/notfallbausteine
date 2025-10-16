import type { Plugin } from "quartz";

const textswitcher =(): Plugin => ({
  name: "textswitcher",
  transform: (page) => {
    let md = page.content;

    // Regex to find text blocks marked with custom delimiters in markdown
    // For example: <!-- start:option1 -->...<!-- end:option1 -->
    const blockRegex = /<!-- start:(\w+) -->([\s\S]*?)<!-- end:\1 -->/g;

    const blocks: Record<string, string> = {};
    let match;
    while ((match = blockRegex.exec(md)) !== null) {
      blocks[match[1]] = match[2].trim();
    }

    if (Object.keys(blocks).length === 0) return page;

    // Generate HTML for all blocks, only one visible initially
    const options = Object.keys(blocks);
    const htmlBlocks = options
      .map(
        (opt, i) => `<div class="switcher-block" data-option="${opt}" style="${
          i === 0 ? "" : "display:none"
        }">${blocks[opt]}</div>`
      )
      .join("\n");

    // Dropdown HTML
    const dropdownHtml = `
      <select id="text-switcher-select" aria-label="Switch text version">
        ${options
          .map((opt) => `<option value="${opt}">${opt}</option>`)
          .join("\n")}
      </select>
    `;

    // Inject dropdown and blocks at the start or end of the content (e.g. replace original blocks)
    md = md.replace(blockRegex, ""); // Remove original blocks from md
    md = `${dropdownHtml}\n${htmlBlocks}\n${md}`;

    // Inject client-side JS for live switching
    const script = `
      <script>
        document.getElementById('text-switcher-select').addEventListener('change', function() {
          const selected = this.value;
          document.querySelectorAll('.switcher-block').forEach(block => {
            block.style.display = block.dataset.option === selected ? '' : 'none';
          });
        });
      </script>
    `;

    // Append script before </body> or at end
    if (page.content.includes("</body>")) {
      md = md.replace("</body>", `${script}\n</body>`);
    } else {
      md += script;
    }

    return { ...page, content: md };
  },
});

export default textswitcher;