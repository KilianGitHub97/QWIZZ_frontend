import React from 'react';
import { Link} from "react-router-dom";

const error404 = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>GO back to <Link to="/" className="list link">Home</Link></p>
    </div>
  )
}

export default error404