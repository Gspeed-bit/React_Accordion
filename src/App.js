import React from 'react'
import { Question } from './Question'

function App() {
  return (
    <main>
 <div className="container">
<h4>The Accordion</h4>
<p className="title_text">
  The accordion is a graphical control element comprising a vertically
  stacked list of items, such as labels or thumbnails. Each item can be
  "expanded" or "collapsed" to reveal the content associated with that
  item.
</p>
      <Question />
      </div>
    </main>
  )
}

export default App
