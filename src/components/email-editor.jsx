import React, { useRef } from 'react';
import { render } from 'react-dom'
import template from '/public/template.json'; // Adjust the path as needed

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
  
  
  const onReady = () => {
    // editor is ready
    console.log('onReady');
  };
  
  return (
    <div className='w-full h-screen' >
       
      <button className='text-sm font-semibold leading-6 text-gray-900'  onClick={exportHtml}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <path d="M12 17v-6" />
  <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
</svg></button> 
      <EmailEditor
        ref={emailEditorRef}
        onLoad={onLoad}
        onReady={onReady}
        minHeight="100%"

        
        options={{
          customCSS: [
            `
                .tab-pane {
                  background-color: white;
                }
                .nav-tabs {
                  background-color: #6E43E0;
                }
                .nav-link.active {
                  background-color: #AA89FF !important;
                }
                .nav-name, .nav-icon {
                  color: white;
                }
              `,
              
             
          ],
          
        }}
      />
    </div>
  );
};

export default App;