import pluginRss from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  // Copia gli asset statici così come sono
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/files");

  // Filtri e helper per il feed RSS/Atom
  eleventyConfig.addPlugin(pluginRss);

  // Data leggibile in italiano, es. "12 marzo 2025"
  eleventyConfig.addFilter("dataLeggibile", (date) =>
    new Intl.DateTimeFormat("it-IT", { dateStyle: "long" }).format(date)
  );

  // Data in formato macchina per <time datetime="...">, es. "2025-03-12"
  eleventyConfig.addFilter("dataIso", (date) =>
    new Date(date).toISOString().slice(0, 10)
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    // Usa Nunjucks anche dentro i file Markdown e HTML
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
