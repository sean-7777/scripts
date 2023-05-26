export function factory(tag, children, attrs, attachTo) {
  const element = document.createElement(tag);

  if (attrs.events) {
    for (let [event, callback] of Object.entries(attrs.events)) {
      element.addEventListener(event, callback);
    }
  }

  if (attrs.styles) {
    for (let [style, value] of Object.entries(attrs.styles)) {
      element.style[style] = value;
    }
  }

  if (attrs.classes) {
    for (let classVal of attrs.classes) {
      element.classList.add(classVal);
    }
  }

  for (let [attr, value] of Object.entries((({ events, styles, classes, ...o }) => o)(attrs))) {
    element.setAttribute(attr, value);
  }

  if (children) {
    const add = child => child instanceof HTMLElement ? element.appendChild(child) : element.appendChild(document.createTextNode(child.toString()))
    if (Array.isArray(children)) {
      for (let child of children) add(child);
    } else {
      add(children);
    }
  }

  if (attachTo instanceof HTMLElement) attachTo.appendChild(element);
  else return element;
};

const alias = {
  a: factory.apply(window, "a"),
  abbr: factory.apply(window, "abbr"),
  address: factory.apply(window, "address"),
  area: factory.apply(window, "area"),
  article: factory.apply(window, "article"),
  aside: factory.apply(window, "aside"),
  audio: factory.apply(window, "audio"),
  b: factory.apply(window, "b"),
  bdi: factory.apply(window, "bdi"),
  bdo: factory.apply(window, "bdo"),
  blockquote: factory.apply(window, "blockquote"),
  body: factory.apply(window, "body"),
  br: factory.apply(window, "br"),
  button: factory.apply(window, "button"),
  canvas: factory.apply(window, "canvas"),
  caption: factory.apply(window, "caption"),
  cite: factory.apply(window, "cite"),
  code: factory.apply(window, "code"),
  col: factory.apply(window, "col"),
  colgroup: factory.apply(window, "colgroup"),
  command: factory.apply(window, "command"),
  datalist: factory.apply(window, "datalist"),
  dd: factory.apply(window, "dd"),
  del: factory.apply(window, "del"),
  details: factory.apply(window, "details"),
  dfn: factory.apply(window, "dfn"),
  div: factory.apply(window, "div"),
  dl: factory.apply(window, "dl"),
  dt: factory.apply(window, "dt"),
  em: factory.apply(window, "em"),
  embed: factory.apply(window, "embed"),
  fieldset: factory.apply(window, "fieldset"),
  figcaption: factory.apply(window, "figcaption"),
  figure: factory.apply(window, "figure"),
  footer: factory.apply(window, "footer"),
  form: factory.apply(window, "form"),
  h1: factory.apply(window, "h1"),
  h2: factory.apply(window, "h2"),
  h3: factory.apply(window, "h3"),
  h4: factory.apply(window, "h4"),
  h5: factory.apply(window, "h5"),
  h6: factory.apply(window, "h6"),
  header: factory.apply(window, "header"),
  hr: factory.apply(window, "hr"),
  html: factory.apply(window, "html"),
  i: factory.apply(window, "i"),
  iframe: factory.apply(window, "iframe"),
  img: factory.apply(window, "img"),
  input: factory.apply(window, "input"),
  ins: factory.apply(window, "ins"),
  kbd: factory.apply(window, "kbd"),
  keygen: factory.apply(window, "keygen"),
  label: factory.apply(window, "label"),
  legend: factory.apply(window, "legend"),
  li: factory.apply(window, "li"),
  main: factory.apply(window, "main"),
  map: factory.apply(window, "map"),
  mark: factory.apply(window, "mark"),
  menu: factory.apply(window, "menu"),
  meter: factory.apply(window, "meter"),
  nav: factory.apply(window, "nav"),
  object: factory.apply(window, "object"),
  ol: factory.apply(window, "ol"),
  optgroup: factory.apply(window, "optgroup"),
  option: factory.apply(window, "option"),
  output: factory.apply(window, "output"),
  p: factory.apply(window, "p"),
  param: factory.apply(window, "param"),
  pre: factory.apply(window, "pre"),
  progress: factory.apply(window, "progress"),
  q: factory.apply(window, "q"),
  rp: factory.apply(window, "rp"),
  rt: factory.apply(window, "rt"),
  ruby: factory.apply(window, "ruby"),
  s: factory.apply(window, "s"),
  samp: factory.apply(window, "samp"),
  section: factory.apply(window, "section"),
  select: factory.apply(window, "select"),
  small: factory.apply(window, "small"),
  source: factory.apply(window, "source"),
  span: factory.apply(window, "span"),
  strong: factory.apply(window, "strong"),
  sub: factory.apply(window, "sub"),
  summary: factory.apply(window, "summary"),
  sup: factory.apply(window, "sup"),
  table: factory.apply(window, "table"),
  tbody: factory.apply(window, "tbody"),
  td: factory.apply(window, "td"),
  textarea: factory.apply(window, "textarea"),
  tfoot: factory.apply(window, "tfoot"),
  th: factory.apply(window, "th"),
  thead: factory.apply(window, "thead"),
  time: factory.apply(window, "time"),
  tr: factory.apply(window, "tr"),
  track: factory.apply(window, "track"),
  u: factory.apply(window, "u"),
  ul: factory.apply(window, "ul"),
  var: factory.apply(window, "var"),
  video: factory.apply(window, "video"),
  wbr: factory.apply(window, "wbr")
}
export default alias;