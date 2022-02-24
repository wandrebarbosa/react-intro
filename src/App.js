import Item from "./components/item"
import Card from "./components/Card"

const App = () => {
  return (
    <>
      <h1>Minha primeira aplicação com React</h1>
      <ul>
        <Item texto="Item 01" />
        <Item texto="Item 02" />
        <Item texto="Item 03" />
        <Item texto="Item 04" />
      </ul>
      <Card />
    </>
  )
}

export default App


// também é valido dessa forma:

// export default function App () {
//   return (
//     <h1>Hello World</h1>
//   )
// }