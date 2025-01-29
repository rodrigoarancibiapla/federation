import './App.css'
import DivWithButton from './components/DivWithButton'; // Importa el componente DivWithButton
import ButtonTS from './components/ButtonTS';
function App() {
  
  return (
    <>
      <div>
      <DivWithButton />
      <ButtonTS onClick={() => alert('Botón Typescript!')}>
                    Clic here
        </ButtonTS>
      </div>
    </>
  )
}


export default App
