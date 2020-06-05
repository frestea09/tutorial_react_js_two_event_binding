import React from 'react'
import Header from './Component/Header'
import Content from './Component/Content'
class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <Header namaMahasiswa={'ilman'}/>
        <Content/>
      </div>
    )
  }
}
export default App