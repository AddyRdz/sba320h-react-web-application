import React from 'react'

export default function ArtDisplay({art}) {
  return (
    <>
    <div>
      <div className="art-container">
        {art.data.map((item) => (
          <div key={item.id} className="art-card">
            <h2>Title: {item.title}</h2>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
}
