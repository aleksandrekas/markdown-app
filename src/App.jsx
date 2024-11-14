import { marked } from 'marked'
import './App.css'
import { useState } from 'react'


const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`javascript
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine === '&lt;code&gt;' &amp;&amp; lastLine === '&lt;/code&gt;') {
    return "multiLineCode";
  }
}
\`\`\`

You can also make text **bold**... whoa!  
Or _italic_.  
Or... wait for it... **_both!_**  
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and  
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;


function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [isClicked,setClicked] = useState({
    editorbt: false,
    previewbt:false
  })

  let editorClass='' 
  let previewClass=''

  function editorbtn(){
    setClicked((prev)=>({
      ...prev,
      editorbt:!prev.editorbt
    }))
  }
  function previewbtn(){
    setClicked((prev)=>({
      ...prev,
      previewbt:!prev.previewbt
    }))
  }






  function handleChange(e){
    setMarkdown(e.target.value)
  }

  if(isClicked.editorbt){
    editorClass ="fullsize";
    previewClass = "nodisplay"
  }else if(isClicked.previewbt){
    editorClass="nodisplay"
    previewClass="fullsize"
  }



  return (
    <div className='app'>
       <div className={`editor-container ${editorClass}`}>
        <h1 className='title'>Editor <div onClick={editorbtn}><ion-icon name="expand-outline"></ion-icon></div></h1>
        <textarea onChange={handleChange} value={markdown} id="editor"/>
       </div>
       <div className={`prev-container ${previewClass}`}>
        <h1 className='title'>Preview <div onClick={previewbtn}><ion-icon name="expand-outline"></ion-icon></div></h1>
        <div id="preview"  dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}></div>
       </div>
    </div>
  )
}

export default App
