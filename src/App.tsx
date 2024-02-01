import React from 'react';

import {TsBasics} from './quiz-ts-1'
import { TsUserProfile } from './quiz-ts-1';
import { TsCounter } from './quiz-ts-1';
import { TsButton } from './quiz-ts-1';
import { TsMessage } from './quiz-ts-1';
import { ThemeConsumer, ThemeProvider } from './quiz-ts-1/themeProvider';
import { TsList } from './quiz-ts-1';
import { TsReadonly } from './quiz-ts-1';
import { TsInput } from './quiz-ts-1';
import { TsTuple } from './quiz-ts-1';

function App() {
  const stringArray = ['Item 1', 'Item 2', 'Item 3'];

  const readonlyStrings: ReadonlyArray<string> = ['Apple', 'Banana', 'Cherry'];

  return (
    <ThemeProvider theme="dark">
    <div className="App">
      <TsBasics basics={["Juan", "Diego", "Fernando", "Felipe"]}/>
      <TsUserProfile
      name="Juana Rondon"
      age={21}
      hobbies={['Peliculas', 'Comer', 'Escuchar musica']}
    />
    <TsCounter/>
    <TsButton/>
    <TsMessage message="Bienvenidos" />
    <ThemeConsumer/>
    </div>
    <TsList items={stringArray} renderItem={(item) => <span>{item}</span>} />
    <TsReadonly items={readonlyStrings} />
    <TsInput value="Celular" />
    <TsInput value={1254932465} />
    <TsInput value={{ name: "Juana ", age: 21 }} />
    <TsTuple/>
    </ThemeProvider>
  );
}

export default App;