export default function parser(string) {
  try {
    data = string.split("// ==/UserScript==", 1)[0].split("\n");
    // check that every line is a comment
    if (!data.every(e => e.startsWith("// "))) throw new Error("Line is not comment");
    // remove comments, header line and convert to object
    data = data
      .map(e => e.substring(3))
      .slice(1)
      .reduce((s, e) => {
        const [name, value] = e
          .split(" ")
          .filter(e => e !== "")
          .reduce((d, v, i) => i === 0 ? [v, d[1]] : [d[0], `${d[1]} ${v}`], ["", ""]);

        if (!s[name.slice(1)]) s[name.slice(1)] = [];
        s[name.slice(1)].push(value);
        return s;
      }, {})

    return { result: data, error: null };
  } catch (error) {
    return { result: null, error };
  }
}