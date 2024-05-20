import React, { useRef } from 'react';
import template from '/public/template.json';
import EmailEditor from 'react-email-editor';

const App = (props) => {
  const emailEditorRef = useRef(null);

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

  const onLoad = () => {
    const json = template
    console.log(json);
    emailEditorRef.current.editor.loadDesign(json)
  }


  const Save = () => {
    emailEditorRef.current.editor.saveDesign((data) => {
      const { design } = data;
      const today = new Date().toISOString().slice(0, 10);
      const filename = `plantilla-${today}.json`;
      const element = document.createElement("a");
      const file = new Blob([JSON.stringify(data)], { type: 'json/plain' });

      element.href = URL.createObjectURL(file);
      element.download = filename;
      element.click();



    })
  }



  const onReady = () => {
    // editor is ready
    console.log('onReady');
  };

  return (
    <div className='w-full h-screen' >
      <div className='h-10 w-full flex justify-end pr-10'>
        <div className='relative flex flex-col w-full p-2 mx-auto lg:px-16 md:flex-row md:items-center md:justify-between md:px-6'>
          <div className='flex justify-center items-center gap-2'>
            <a href="/">
              <img src="./logo.png" alt="" className='h-5'/>
              </a>
              <a class=" text-sm font-medium text-black hover:text-black/50 mt-1" href="/">Inicio</a>
          </div>
          <div>
            <button class=" text-gray-800 font-bold rounded inline-flex items-center" onClick={exportHtml}>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M12 17v-6" />
                <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
              </svg>
              <span>Exportar HTML</span>
            </button>
          </div>
        </div>
      </div>
      <EmailEditor
        editorId='editor-container'

        ref={emailEditorRef}
        onLoad={onLoad}
        onReady={onReady}
        minHeight="99%"
      />
    </div>
  );
};

export default App;