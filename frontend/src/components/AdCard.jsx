import '../styles/AdCard.css'

function AdCard({ ad }) {
  return (
    <div className="ad-card" style={{ borderColor: ad.color }}>
      <div className="card-header" style={{ backgroundColor: ad.color }}>
        <span className="card-id">광고 #{ad.id}</span>
      </div>
      
      <div className="card-content">
        <div className="copy-section">
          <h3>📝 광고 카피</h3>
          <p className="copy-text">{ad.copy}</p>
        </div>

        <div className="details-grid">
          <div className="detail-item">
            <span className="label">포맷</span>
            <span className="value">{ad.format}</span>
          </div>
          
          <div className="detail-item">
            <span className="label">CTA</span>
            <span className="value">{ad.cta}</span>
          </div>
          
          <div className="detail-item">
            <span className="label">톤</span>
            <span className="value">{ad.tone}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdCard
