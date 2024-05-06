import React, { useRef } from 'react';
import { render } from 'react-dom'
import template from '/public/template.json'; // Adjust the path as needed

import EmailEditor from 'react-email-editor';

const App = (props) => {
  const emailEditorRef = useRef(null);
 
  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
  
      // Get today's date and format it (YYYY-MM-DD)
      const today = new Date().toISOString().slice(0, 10);
  
      // Construct the desired filename
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
      <button className='text-sm font-semibold leading-6 text-gray-900'  onClick={exportHtml}>Export HTML</button> 
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