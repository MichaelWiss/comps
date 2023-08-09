import Accordion from './components/Accordion';

function App() {
 const items = [
  {
      id: 'daf8f7da8',
      label: 'Can I use React on a project',
      content: 'You can use React on any project you want You can use React on any project you want You can use React on any project you want'
  },
  { 
      id: '08houb',
      label: 'Can I use React on a project',
      content: 'You can use React on any project you want You can use React on any project you want You can use React on any project you want',
  },
  { 
      id: '0dnjnkih',
      label: 'Can I use React on a project',
      content: 'You can use React on any project you want You can use React on any project you want You can use React on any project you want',
      
  }
 ];

  return <Accordion items={items} />
}

export default App;
