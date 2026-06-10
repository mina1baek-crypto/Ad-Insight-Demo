import '../styles/InsightSection.css'

function InsightSection({ brand, insights }) {
  return (
    <section className="insight-section">
      <h3>🤖 AI 인사이트</h3>
      
      {!insights.success && insights.isAnalyzed === false && (
        <div className="api-notice">
          💡 Mock 데이터 분석 (API 미설정)
        </div>
      )}

      <div className="insights-grid">
        {/* 톤 분포 */}
        <div className="insight-card tone-distribution">
          <h4>📊 톤 분포</h4>
          <div className="tone-bars">
            {Object.entries(insights.tone_distribution || {}).map(([tone, percentage]) => (
              <div key={tone} className="tone-bar-item">
                <span className="tone-label">{tone}</span>
                <div className="bar-container">
                  <div 
                    className="bar-fill" 
                    style={{ width: `${percentage}%` }}
                  />
                  <span className="bar-value">{percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA 패턴 */}
        <div className="insight-card cta-patterns">
          <h4>🎯 자주 쓰이는 CTA 패턴</h4>
          <ul className="pattern-list">
            {(insights.cta_patterns || []).map((pattern, idx) => (
              <li key={idx}>
                <span className="pattern-number">{idx + 1}</span>
                <span className="pattern-text">{pattern}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 차별화 방향 */}
        <div className="insight-card differentiation">
          <h4>✨ {brand}의 차별화 전략</h4>
          <ul className="strategy-list">
            {(insights.differentiation_tips || []).map((tip, idx) => (
              <li key={idx}>
                <span className="strategy-icon">💡</span>
                <span className="strategy-text">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default InsightSection
