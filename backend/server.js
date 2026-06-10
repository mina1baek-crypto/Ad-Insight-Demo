import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Anthropic from '@anthropic-ai/sdk';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 미들웨어
app.use(cors());
app.use(express.json());

// Anthropic 클라이언트 초기화
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// 광고 카피 템플릿 (브랜드 유형별)
const adTemplates = {
  tech: {
    copies: [
      `{brand}의 새로운 기능으로 업무 효율을 2배로 높이세요`,
      `{brand}이 당신의 일상을 어떻게 바꾸는지 직접 경험해보세요`,
      `지금 시작하면 무료 프리미엄 기능까지! {brand}의 놀라운 성능을 느껴보세요`,
      `{brand} 사용자들이 보고한 생산성 증가율 87% 🚀`,
      `동료들은 이미 {brand}로 전환했습니다. 당신은?`,
    ],
    ctas: ['지금 무료로 시작', '앱 다운로드', '체험판 신청', '더 알아보기', '지금 가입'],
  },
  fashion: {
    copies: [
      `이번 시즌 신상 컬렉션 런칭! {brand}의 최신 트렌드 확인하고 15% 할인받기`,
      `셀럽들이 선택한 {brand}의 시즈널 룩이 지금 한정 판매 중`,
      `{brand} VIP 멤버 되면 선구매 + 추가 할인까지! 지금 가입하세요`,
      `당신의 스타일을 찾았어요. {brand}의 맞춤형 추천 스타일 보러가기`,
      `패션 피플이 사랑하는 {brand}, 오늘 주문하면 내일 배송!`,
    ],
    ctas: ['지금 쇼핑하기', '컬렉션 보기', '할인받기', 'VIP 가입', '신상 확인'],
  },
  food: {
    copies: [
      `{brand}의 신메뉴가 출시되었어요! 첫 주문 시 50% 할인 쿠폰 받기`,
      `매일 신선한 재료로 만드는 {brand}의 맛을 집에서 즐기세요`,
      `{brand}의 시그니처 메뉴가 당신의 입맛을 저격할 거예요 😋`,
      `배고플 때는 {brand}! 지금 주문하면 30분 이내 배송`,
      `{brand} 구독 서비스 시작! 매주 신선한 식재료 받고 15% 절약하기`,
    ],
    ctas: ['지금 주문', '메뉴 보기', '구독하기', '쿠폰 받기', '첫 주문 할인'],
  },
  health: {
    copies: [
      `{brand}로 시작하는 건강한 생활, 지금 바로 시작해보세요`,
      `1만 명 이상이 인증한 {brand}의 효과! 당신도 경험해보세요`,
      `건강 검진 결과 개선율 92%! {brand}가 당신의 건강을 책임집니다`,
      `전문가가 추천하는 {brand}, 특별 구독 이벤트 진행 중!`,
      `{brand}와 함께 30일 챌린지 시작! 무료 코칭 + 커뮤니티 참여`,
    ],
    ctas: ['지금 시작', '무료 체험', '구독하기', '더 알아보기', '커뮤니티 참여'],
  },
  general: {
    copies: [
      `{brand}의 새로운 경험을 지금 바로 만나보세요!`,
      `{brand}가 당신의 선택이 된 이유를 알려드릴게요`,
      `지금 {brand}에 가입하면 특별한 혜택이 기다리고 있어요`,
      `{brand}와 함께 변화를 시작하세요`,
      `{brand} 고객들의 만족도 98%! 당신도 지금 참여하세요`,
    ],
    ctas: ['지금 가입', '더 알아보기', '시작하기', '무료 시험', '자세히 보기'],
  },
};

// 브랜드 카테고리 감지
function detectBrandCategory(brand) {
  const lowerBrand = brand.toLowerCase();
  
  if (['apple', 'google', 'microsoft', 'meta', 'samsung', 'notion', 'figma', 'slack'].includes(lowerBrand)) {
    return 'tech';
  } else if (['nike', 'adidas', 'zara', 'h&m', 'uniqlo', 'gucci', 'louis vuitton', 'prada'].includes(lowerBrand)) {
    return 'fashion';
  } else if (['mcd', 'starbucks', 'kfc', '배달의민족', '쿠팡이츠', 'uber eats', '요기요'].includes(lowerBrand) ||
             brand.includes('카페') || brand.includes('음식') || brand.includes('식당')) {
    return 'food';
  } else if (['헬스', '피트니스', '요가', '비타민', '영양', '의료'].some(keyword => lowerBrand.includes(keyword))) {
    return 'health';
  }
  return 'general';
}

// 현실적인 광고 데이터 생성
function generateRealisticAds(brand) {
  const category = detectBrandCategory(brand);
  const templates = adTemplates[category] || adTemplates.general;
  
  const tones = ['정보형', '감성형', '증거형', '긴급형', 'UGC형'];
  const formats = ['Instagram Reels', 'Facebook Feed', 'TikTok', 'YouTube Shorts', 'Google Search', 'Naver Feed', 'Kakao Banner'];
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F38181', '#AA96DA'];
  
  // 더 다양한 랜덤 조합
  const ads = [];
  for (let i = 0; i < 5; i++) {
    const copy = templates.copies[i % templates.copies.length].replace('{brand}', brand);
    const cta = templates.ctas[i % templates.ctas.length];
    const tone = tones[i % tones.length];
    const format = formats[i % formats.length];
    
    ads.push({
      id: i + 1,
      copy,
      format,
      cta,
      tone,
      color: colors[i % colors.length],
    });
  }
  
  return ads;
}

// Claude API를 사용한 광고 분석
async function analyzeAdsWithClaude(brand, ads) {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.warn('⚠️ ANTHROPIC_API_KEY not set - returning mock insights');
    return generateMockInsights(brand, ads);
  }

  try {
    const adSummary = ads
      .map(ad => `- [${ad.tone}] ${ad.format}: "${ad.copy}" (CTA: ${ad.cta})`)
      .join('\n');

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: `당신은 광고 전략 컨설턴트입니다. 다음 "${brand}"의 광고 카피 5개를 분석해주세요:

${adSummary}

다음 항목을 JSON 형식으로 분석해주세요:
1. "tone_distribution": 톤별 분포를 백분율로 (예: {"정보형": 40, "감성형": 30, ...})
2. "cta_patterns": 자주 쓰이는 CTA 패턴 3개와 그 이유
3. "differentiation_tips": ${brand}이 경쟁사와 차별화하기 위해 시도해볼 만한 3가지 방향 (톤, 메시지, 포맷 관점)

응답은 반드시 유효한 JSON 형식이어야 합니다.`,
        },
      ],
    });

    const responseText = message.content[0].type === 'text' ? message.content[0].text : '';
    
    // JSON 추출
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const analysis = JSON.parse(jsonMatch[0]);
      return {
        success: true,
        ...analysis,
      };
    }
    
    return generateMockInsights(brand, ads);
  } catch (error) {
    console.error('Claude API error:', error.message);
    return generateMockInsights(brand, ads);
  }
}

// Mock 인사이트 생성 (API 실패 시)
function generateMockInsights(brand, ads) {
  const tones = ads.map(ad => ad.tone);
  const toneCounts = {};
  tones.forEach(tone => {
    toneCounts[tone] = (toneCounts[tone] || 0) + 1;
  });

  const total = ads.length;
  const tone_distribution = {};
  Object.keys(toneCounts).forEach(tone => {
    tone_distribution[tone] = Math.round((toneCounts[tone] / total) * 100);
  });

  return {
    success: false,
    tone_distribution,
    cta_patterns: ['할인 중심의 CTA', '서비스 경험 유도', '긴급성 강조'],
    differentiation_tips: [
      `${brand}만의 고유한 가치 스토리를 중심으로 감성형 톤 강화`,
      '사용자 후기와 증거 중심의 신뢰성 마케팅 확대',
      '짧은 비디오 포맷(TikTok, Reels)에서 스토리텔링 강조',
    ],
    isAnalyzed: false,
  };
}

// 광고 분석 API
app.post('/api/analyze', async (req, res) => {
  const { brand } = req.body;

  if (!brand || brand.trim() === '') {
    return res.status(400).json({ error: '브랜드명을 입력해주세요.' });
  }

  try {
    const ads = generateRealisticAds(brand);
    const insights = await analyzeAdsWithClaude(brand, ads);

    res.json({
      brand,
      timestamp: new Date().toISOString(),
      ads,
      insights,
    });
  } catch (error) {
    console.error('Error in analyze endpoint:', error);
    res.status(500).json({ error: '분석 중 오류가 발생했습니다.' });
  }
});

// 헬스체크
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    anthropicConfigured: !!process.env.ANTHROPIC_API_KEY,
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  if (process.env.ANTHROPIC_API_KEY) {
    console.log('✅ Anthropic API configured');
  } else {
    console.log('⚠️  Anthropic API not configured - using mock insights');
  }
});