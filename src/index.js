import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import { unified } from "unified";

export async function renderData(data) {
  try {
    unified()
      .use(remarkParse)
      .use(remarkMath)
      .use(remarkRehype)
      .use(rehypeKatex)
      .use(rehypeStringify)
      .use(remarkGfm)
      .process(data)
      .then((file) => {
        console.log(file);
        document.getElementById("content").innerHTML = String(file);
      });
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

window.renderData = renderData;
