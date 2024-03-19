    <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Don't use this in production: -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    </head>  
      <script type="text/babel">
        import { useState } from 'react';
       function Header({title}) {
          return (
          <div>
          <h1>{title ? title : 'Default title'}</h1>;
          )
          </div>
        };
        function HomePage() {
          const names= ['Ada Lovelace','Grace Hopper','Margaret Hamilton'];
          const [likes,setLikes]=useState(0);
          function handleClick(){
            setLikes(likes+1);
           }
          return (
            <div>
            <Header title="Develop. Preview.Ship." />
           <ul>
            {names.map((name)=> (
              <li key={name}>{name}</li>
              ))}
            </ul>
            <button onClick={handleClick}>Like({likes})</button>
           </div>
          );
        };
         root.render(<HomePage/>);
      </script>
    