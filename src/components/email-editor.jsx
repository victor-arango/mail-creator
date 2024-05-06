import React, { useRef } from 'react';
import { render } from 'react-dom'
import template from '../../public/template.json'; // Adjust the path as needed

import EmailEditor from 'react-email-editor';

const App = (props) => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  };

  const onLoad = () => {
    // const json = template
    // console.log(json);
    // this.editor.loadDesign(json)
  }
  

  const onReady = () => {
    // editor is ready
    console.log('onReady');
  };

  return (
    <div>
    
      <EmailEditor
        ref={emailEditorRef}
        onLoad={onLoad}
        onReady={onReady}
      />
    </div>
  );
};

export default App;
{/* <button onClick={exportHtml}>Export HTML</button> */}