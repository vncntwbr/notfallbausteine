import type { Plugin } from "quartz";

const textswitcher =(): Plugin => ({
  name: "textswitcher",
  transform: (page) => {
      let md = page.content;

  // Regex to find marked blocks
  const blockRegex = /<!-- start:(\w+) -->([\s\S]*?)<!-- end:\1 -->/g;
  const blocks: Record<string, string> = {};
  let match;
  while ((match = blockRegex.exec(md)) !== null) {
    blocks[match[1]] = match[2].trim();
  }

  if (Object.keys(blocks).length === 0) return page;

  // Remove original blocks
  md = md.replace(blockRegex, "");

  // Compose HTML blocks (not Markdown)
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

  // Script for instant client-side switching
  const script = `
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        var dropdown = document.getElementById('text-switcher-select');
        dropdown.addEventListener('change', function() {
          var selected = this.value;
          document.querySelectorAll('.switcher-block').forEach(function(block) {
            block.style.display = block.dataset.option === selected ? '' : 'none';
          });
        });
      });
    </script>
  `;

  // Combine all actual HTML
  const finalHtml = `${dropdownHtml}\n${htmlBlocks}\n${script}`;

  // Return as .content property (for HTML injection)
  return { ...page, content: finalHtml };
  },
});

export default textswitcher;