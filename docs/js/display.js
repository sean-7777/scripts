import e from "./elementFactory.js";

export function displayError(error) {
  e.div([
    e.h1("Error!"),
    e.h3("Code:"),
    e.p(error)
  ], {}, document.body);
}

export function display({
  name: [name],
  description: [description],
  author: [author],
  version: [version],
  copyright: [copyright],
  namespace: [namespace],
  grant,
  require,
  resource,
  include,
  match,
  exclude,
  connect,
  ...other
}, url, rawText) {
  e.div([
    e.h1(
      e.a(`${name[0]}`, {
        href: other.homepage || other.homepageURL || other.website || other.source || window.location.href
      })
    ),
    e.h2(`by ${author || "Unknown"}, v${version[0] || "1.0.0"}`),
    e.h2([
      "Applies to: ",
      e.code(include.concat(match).join(", "))
    ]),
    e.button(
      e.strong("View Code"), {
        events: {
          click: () => document.querySelector(".code-modal").showModal()
        }
      }
    ),
    e.dialog([
      e.header("Install UserScript"),
      e.h2(
        e.a("UserScript Source Link", {
          href: url,
          events: {
            click: () => document.querySelector(".code-modal").close()
          }
        })
      ),
      e.h3("Preview"),
      e.pre(
        e.code(rawText.substring(0, 250))
      ),
    ], {
      classes: ["code-modal"]
    }),
    e.hr(),
    e.details([
      e.summary("Dev Info"),
      e.table(
        e.tbody([
          e.tr([
            e.th("Namespace"),
            e.td(
              e.code(namespace || "None")
            )
          ]),
          e.tr([
            e.th("Grants"),
            e.td(
              e.code(grant?.join(", ") || "None")
            )
          ]),
          e.tr([
            e.th("Namespace"),
            e.td(
              e.code(namespace || "global")
            )
          ]),
          e.tr([
            e.th("Requires"),
            e.td(
              e.code(require || "None")
            )
          ]),
          e.tr([
            e.th("Preloads"),
            e.td(
              e.code(resource || "None")
            )
          ]),
          e.tr([
            e.th("Runs At"),
            e.td(
              e.code(other["run-at"] || "document-idle")
            )
          ]),
          e.tr([
            e.th("Connectable Domains"),
            e.td(
              e.code(connect || "None")
            )
          ]),
        ])
      ),
    ]),
    e.p(description || "No description"),
    e.hr(),
    e.h3("Applies to:"),
    e.ul(include.concat(match).map(v =>
      e.li(
        e.code(v)
      ))),
    e.h3("Excluding:"),
    e.ul(exclude?.map(v =>
      e.li(
        e.code(v)
      )) || "None"),
    e.footer([
      `© ${copyright || `${new Date().getFullYear()} by ${author || "Unknown"}`}`,
      e.a("Back to top ⬆", {
        href: "#"
      })
    ])
  ], {}, document.body);
}