import React from 'react'

export const ShimmerComponent = () => {
  return (
     <div className="shimmer-container">
        {Array(12).fill("").map((_, index) => (
            <div key={index} className="shimmer-card">
                    <div className="shimmer-image shimmer"></div>
            </div>
        ))} 
  
    </div>
  )
}
