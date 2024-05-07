import './App.css'
import {ProductOverviewTwo} from "./Components/Card.jsx"

function App() {
  const shoesName = "Runner Shoes"
  const secondImg = "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
  const firstImg = "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"

  return (
   <>
   <h1 className='bg-black text-white p-4 rounded'>hello</h1>
   <ProductOverviewTwo brand= "Adidas" shoesName = {"jordan"} shoeImg={firstImg} />
   <ProductOverviewTwo brand="Puma" shoesName={shoesName} shoeImg={secondImg} />

   </>
  )
}

export default App
