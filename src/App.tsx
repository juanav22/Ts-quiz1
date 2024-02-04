import React from 'react';
import { TsBasics, TsUserProfile, TsCounter, TsButton, TsMessage, ThemeProvider, TsList, TsReadonly, TsInput, TsTuple } from './quiz-ts-1';
import { Button, Toolbar, Typography, Chip } from '@mui/material';
import AppBar from './theme/appBar'
// import Theme from './theme/theme';
import './App.css';



function App() {
  const stringArray = ['Item 1', 'Item 2', 'Item 3'];
  const readonlyStrings = ['Apple', 'Banana', 'Cherry'];

  return (

    
    <ThemeProvider theme="dark">
      <AppBar/>
      <div className="App">
        <div className="ComponentContainer">
            <TsBasics  basics={["Juan", "Diego", "Fernando", "Felipe"]} />
        </div>
        <div className="ComponentContainer">
          <TsUserProfile
            name="Juana Rondon"
            age={21}
            hobbies={['Peliculas', 'Comer', 'Escuchar musica']}
          />
        </div>
        <div className="ComponentContainer">
          <TsCounter />
        </div>
        <div className="ComponentContainer">
          <TsButton  />
        </div>
        <div className="ComponentContainer">
          <TsMessage message="Bienvenidos" />
        </div>
        <div className="ComponentContainer">
        </div>
      </div>
      <div className="ListContainer">
        <TsList items={stringArray} renderItem={(item) => <span>{item}</span>} />
      </div>
      <div className="ReadonlyContainer">
        <TsReadonly items={readonlyStrings} />
      </div>
      <div className="InputContainer">
        <TsInput value="Celular" />
      </div>
      <div className="InputContainer">
        <TsInput value={1254932465} />
      </div>
      <div className="InputContainer">
        <TsInput value={{ name: "Juana ", age: 21 }} />
      </div>
      <div className="TupleContainer">
        <TsTuple />
      </div>
    </ThemeProvider>
  );
}

export default App;









// import React from 'react';

// import {TsBasics} from './quiz-ts-1'
// import { TsUserProfile } from './quiz-ts-1';
// import { TsCounter } from './quiz-ts-1';
// import { TsButton } from './quiz-ts-1';
// import { TsMessage } from './quiz-ts-1';
// import { ThemeConsumer, ThemeProvider } from './quiz-ts-1/themeProvider';
// import { TsList } from './quiz-ts-1';
// import { TsReadonly } from './quiz-ts-1';
// import { TsInput } from './quiz-ts-1';
// import { TsTuple } from './quiz-ts-1';

// function App() {
//   const stringArray = ['Item 1', 'Item 2', 'Item 3'];

//   const readonlyStrings: ReadonlyArray<string> = ['Apple', 'Banana', 'Cherry'];

//   return (
//     <ThemeProvider theme="dark">
//     <div className="App">
//       <TsBasics basics={["Juan", "Diego", "Fernando", "Felipe"]}/>
//       <TsUserProfile
//         name="Juana Rondon"
//         age={21}
//         hobbies={['Peliculas', 'Comer', 'Escuchar musica']}
//       />
//       <TsCounter/>
//       <TsButton/>
//       <TsMessage message="Bienvenidos" />
//       <ThemeConsumer/>
//     </div>
//     <TsList items={stringArray} renderItem={(item) => <span>{item}</span>} />
//     <TsReadonly items={readonlyStrings} />
//     <TsInput value="Celular" />
//     <TsInput value={1254932465} />
//     <TsInput value={{ name: "Juana ", age: 21 }} />
//     <TsTuple/>
//     </ThemeProvider>
//   );
// }

// export default App;