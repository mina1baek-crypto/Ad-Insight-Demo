import { useState } from 'react'
import axios from 'axios'
import AdCard from './components/AdCard.jsx'
import InsightSection from './components/InsightSection.jsx'
import './styles/App.css'

function App() {
  const [brand, setBrand] = useState('')
  const [ads, setAds] = useState([])
  const [insights, setInsights] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [analyzed, setAnalyzed] = useState(false)

  const handleAnalyze = async () => {
    if (!brand.trim()) {
      setError('브랜드명을 입력해주세요.')
      return
    }

    setLoading(true)
    setError('')
    
    try {
      const response = await axios.post('http://localhost:5000/api/analyze', {
        brand: brand.trim()
      })
      
      setAds(response.data.ads)
      setInsights(response.data.insights)
      setAnalyzed(true)
    } catch (err) {
      setError('분석 중 오류가 발생했습니다. 백엔드 서버가 실행 중인지 확인해주세요.')
      console.error('API Error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAnalyze()
    }
  }

  return (
    <div className="container">
      <header className="header">
        <h1>📊 Ad Insight Demo</h1>
        <p>브랜드명을 입력하고 AI가 생성한 광고 분석을 받아보세요</p>
      </header>

      <div className="search-section">
        <div className="input-group">
          <input
            type="text"
            placeholder="브랜드명을 입력하세요 (예: Apple, Nike, Starbucks)"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            onKeyPress={handleKeyPress}
            className="input-field"
          />
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="analyze-button"
          >
            {loading ? '분석 중...' : '분석 시작'}
          </button>
        </div>
        
        {error && <div className="error-message">{error}</div>}
      </div>

      {analyzed && (
        <div className="results-section">
          <h2>📱 {brand}의 광고 캐패인</h2>
          <div className="ads-grid">
            {ads.map((ad) => (
              <AdCard key={ad.id} ad={ad} />
            ))}
          </div>

          {insights && (
            <InsightSection brand={brand} insights={insights} />
          )}
        </div>
      )}
    </div>
  )
}

export default App
