import { getRenderer } from '/Users/c60708a/chrisvo.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/Users/c60708a/chrisvo.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/Users/c60708a/chrisvo.github.io/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/Users/c60708a/chrisvo.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/Users/c60708a/chrisvo.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/Users/c60708a/chrisvo.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/Users/c60708a/chrisvo.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/Users/c60708a/chrisvo.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/Users/c60708a/chrisvo.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/Users/c60708a/chrisvo.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/Users/c60708a/chrisvo.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/Users/c60708a/chrisvo.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/Users/c60708a/chrisvo.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/Users/c60708a/chrisvo.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { ToCPrevNext } from '/Users/c60708a/chrisvo.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { ToCToggle } from '/Users/c60708a/chrisvo.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/Users/c60708a/chrisvo.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/Users/c60708a/chrisvo.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { TabSelector } from '/Users/c60708a/chrisvo.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/tabs/selector.js';
import { CollapseControl } from '/Users/c60708a/chrisvo.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';

const components = {
  '7PLQ5GxStd6wx2PkbtTnWg==': ToCPrevNext,
  'yOznCekekMTUJJDXOhI8kA==': ToCToggle,
  'KYyB90lIUFpf3ZJeepXp4Q==': DarkModeSwitch,
  'IlTsh3JkaOHqWMYaySUHZg==': ConfigTransport,
  'ExvX78NL06016IrdOf1CDQ==': TabSelector,
  'aARoHWWDtExSKilOUPhMvw==': CollapseControl
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
