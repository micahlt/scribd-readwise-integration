document.querySelector(`a[data-tooltip="More actions"]`).click();
const options = document.querySelector(".button_menu.bottom.left");
setTimeout(() => {
  options.querySelectorAll("a.list_item")[2].click();
  setTimeout(() => {
    let annotations = document.querySelector(".annotations"),
      notes = { highlights: [] };
    Array.from(annotations.childNodes).forEach((a, i) => {
      console.log(i);
      const type = a.querySelector(".annotation_type").innerText.toLowerCase();
      console.log(type);
      if (type == "highlight") {
        const excerpt = a.querySelector(".excerpt").innerText;
        if (!excerpt) return;
        notes.highlights.push({
          text: excerpt,
          title: window.Scribd.current_doc.title,
          author: window.Scribd.current_doc.author_name,
          image_url: window.Scribd.current_doc.thumbnail_url,
          source: window.Scribd.current_doc.url,
        });
      }
    });
    window.postMessage(
      {
        direction: "from-page-script",
        message: notes,
      },
      "*"
    );
  }, 500);
}, 100);
