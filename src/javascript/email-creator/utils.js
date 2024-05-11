const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
  
      const today = new Date().toISOString().slice(0, 10);
      const filename = `plantilla-${today}.html`;
      const element = document.createElement("a");
      const file = new Blob([html], { type: 'text/html' }); // Use text/html for HTML content
  
      element.href = URL.createObjectURL(file);
      element.download = filename;
      element.click();
    });
  };


  export default exportHtml;