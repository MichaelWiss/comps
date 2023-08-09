import Accordion from './components/Accordion';

function App() {
 const items = [
  {
      label: 'Can I use React on a project',
      content: 'You can use React on any project you want You can use React on any project you want You can use React on any project you want'
  },
  {
      label: 'You can use React on any project you want You can use React on any project you want You can use React on any project you want',
      content: ''
  },
  {
      label: 'You can use React on any project you want You can use React on any project you want You can use React on any project you want',
      content: ''
  }
 ];

  return <Accordion items={items} />
}

export default App;
