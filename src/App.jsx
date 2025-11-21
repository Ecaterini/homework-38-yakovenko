import './App.css';
import Button from './components/Button.jsx';

function App() {
  const handleButtonClick = () => {
    console.log('Кнопку натиснуто');
    alert('Ви натиснули кнопку!');
  };

  return (
    <div className="app">
      <h1>Мій перший React-проєкт з компонентом Button</h1>

      <h2>Компонент кнопки:</h2>
      <Button
        text="Натисни мене"
        type="button"
        onClick={handleButtonClick}
      />
    </div>
  );
}

export default App;