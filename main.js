const views = {
  '채널 분석': {
    subtitle: '채널 성장 현황과 핵심 지표를 한눈에 확인하세요',
    content: `
      <div class="channel-input-area">
        <h3>채널 URL 입력</h3>
        <p>분석할 유튜브 채널 URL을 입력하면 AI가 자동으로 분석합니다</p>
        <div class="input-row">
          <input class="url-input" type="text" placeholder="https://www.youtube.com/@채널명" id="channelUrl" />
          <button class="btn btn-primary" onclick="analyze()">🔍 분석 시작</button>
        </div>
      </div>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-label"><span class="dot dot-red"></span>구독자 수</div>
          <div class="stat-value" style="color: #ff6b6b;">24.7K</div>
          <div class="stat-change up">▲ 1,230 지난달 대비</div>
        </div>
        <div class="stat-card">
          <div class="stat-label"><span class="dot dot-green"></span>평균 조회수</div>
          <div class="stat-value" style="color: var(--accent3);">8.2K</div>
          <div class="stat-change up">▲ 12.4% 상승</div>
        </div>
        <div class="stat-card">
          <div class="stat-label"><span class="dot dot-orange"></span>평균 시청 지속률</div>
          <div class="stat-value" style="color: var(--accent2);">43%</div>
          <div class="stat-change down">▼ 2.1% 소폭 하락</div>
        </div>
        <div class="stat-card">
          <div class="stat-label"><span class="dot dot-red"></span>이번 달 업로드</div>
          <div class="stat-value" style="color: #a78bfa;">12</div>
          <div class="stat-change up">▲ 목표 달성 120%</div>
        </div>
      </div>
      <div class="bottom-grid">
        <div class="panel">
          <div class="panel-header"><span class="panel-title">🏆 인기 영상 TOP 5</span><span class="tag">이번 달</span></div>
          <div class="panel-body">
            <div class="video-item"><div class="video-thumb">🎮</div><div class="video-info"><div class="video-title">AI로 유튜브 자동화하는 법 (완전 공개)</div><div class="video-meta"><span>3일 전</span><span>좋아요 428</span></div></div><div class="video-views">47.2K</div></div>
            <div class="video-item"><div class="video-thumb">💡</div><div class="video-info"><div class="video-title">조회수 폭발하는 썸네일 만드는 공식</div><div class="video-meta"><span>1주 전</span><span>좋아요 312</span></div></div><div class="video-views">31.8K</div></div>
            <div class="video-item"><div class="video-thumb">📱</div><div class="video-info"><div class="video-title">숏츠 알고리즘 완전 분석 2025년 최신</div><div class="video-meta"><span>2주 전</span><span>좋아요 289</span></div></div><div class="video-views">28.4K</div></div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-header"><span class="panel-title">🔑 인기 키워드 분석</span><span class="tag">AI 추천</span></div>
          <div class="panel-body">
            <div class="keyword-item"><div class="kw-rank">#1</div><div class="kw-word">유튜브 AI</div><div class="kw-bar-wrap"><div class="kw-bar" style="width:92%"></div></div><div class="kw-score">92</div></div>
            <div class="keyword-item"><div class="kw-rank">#2</div><div class="kw-word">썸네일 공식</div><div class="kw-bar-wrap"><div class="kw-bar" style="width:78%"></div></div><div class="kw-score">78</div></div>
            <div class="keyword-item"><div class="kw-rank">#3</div><div class="kw-word">알고리즘</div><div class="kw-bar-wrap"><div class="kw-bar" style="width:71%"></div></div><div class="kw-score">71</div></div>
          </div>
        </div>
      </div>
    `
  },
  '키워드 분석': {
    subtitle: '현재 트렌드와 검색량이 높은 황금 키워드를 발굴하세요',
    content: `
      <div class="channel-input-area">
        <h3>키워드 검색</h3>
        <p>분석하고 싶은 주제나 단어를 입력하세요</p>
        <div class="input-row">
          <input class="url-input" type="text" placeholder="예: 아이폰 16 리뷰, 브이로그, 재테크" id="kwInput" />
          <button class="btn btn-primary">🔍 트렌드 분석</button>
        </div>
      </div>
      <div class="bottom-grid">
        <div class="panel">
          <div class="panel-header"><span class="panel-title">📈 실시간 급상승 키워드</span></div>
          <div class="panel-body">
            <div class="keyword-item"><div class="kw-rank">1</div><div class="kw-word">AI 자동화</div><div class="kw-score" style="color:var(--accent3)">+152%</div></div>
            <div class="keyword-item"><div class="kw-rank">2</div><div class="kw-word">챗GPT 활용법</div><div class="kw-score" style="color:var(--accent3)">+84%</div></div>
            <div class="keyword-item"><div class="kw-rank">3</div><div class="kw-word">유튜브 롱폼</div><div class="kw-score" style="color:var(--accent3)">+42%</div></div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-header"><span class="panel-title">💡 연관 추천 키워드</span></div>
          <div class="panel-body">
            <div style="display:flex; flex-wrap:wrap; gap:8px;">
              <span class="tag">#유튜브수익화</span><span class="tag">#영상편집독학</span><span class="tag">#프리미어프로</span><span class="tag">#AI그림</span><span class="tag">#부업추천</span>
            </div>
          </div>
        </div>
      </div>
    `
  },
  '떡상 영상 분석': {
    subtitle: '알고리즘의 선택을 받은 영상들의 공통점을 분석합니다',
    content: `
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-label">평균 떡상 확률</div>
          <div class="stat-value" style="color: var(--accent2);">78%</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">주요 유입 경로</div>
          <div class="stat-value" style="color: var(--accent3);">탐색</div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-header"><span class="panel-title">🚀 알고리즘 분석 결과</span></div>
        <div class="panel-body">
          <p style="font-size:14px; color:var(--text-mid); line-height:1.6;">최근 떡상하는 영상들은 <b>'첫 10초의 강렬한 후킹'</b>과 <b>'시청자와의 공감대 형성'</b>이 핵심입니다. 제목에 [충격], [드디어]와 같은 단어를 포함했을 때 클릭률이 평균 15% 상승하는 경향을 보입니다.</p>
        </div>
      </div>
    `
  },
  '댓글 민심 분석': {
    subtitle: '시청자들의 반응을 긍정/부정/질문으로 자동 분류합니다',
    content: `
      <div class="channel-input-area">
        <h3>영상 URL 입력</h3>
        <div class="input-row">
          <input class="url-input" type="text" placeholder="https://www.youtube.com/watch?v=..." />
          <button class="btn btn-primary">💬 민심 파악</button>
        </div>
      </div>
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-label">긍정 반응</div><div class="stat-value" style="color:var(--accent3)">85%</div></div>
        <div class="stat-card"><div class="stat-label">중립/부정</div><div class="stat-value" style="color:var(--text-dim)">12%</div></div>
        <div class="stat-card"><div class="stat-label">질문 비율</div><div class="stat-value" style="color:var(--accent2)">3%</div></div>
      </div>
    `
  },
  '스크립트 생성': {
    subtitle: '주제만 입력하세요, AI가 10분 만에 대본을 완성해 드립니다',
    content: `
      <div class="panel">
        <div class="panel-body">
          <div style="margin-bottom:20px;">
            <label style="display:block; font-size:13px; margin-bottom:8px;">영상 주제</label>
            <input class="url-input" style="width:100%" placeholder="예: 2025년 테크 트렌드 톱 5" />
          </div>
          <div style="margin-bottom:20px;">
            <label style="display:block; font-size:13px; margin-bottom:8px;">톤앤매너</label>
            <select class="url-input" style="width:100%">
              <option>재치 있고 빠른 템포</option>
              <option>진지하고 정보 중심</option>
              <option>나긋나긋한 브이로그 감성</option>
            </select>
          </div>
          <button class="btn btn-primary" style="width:100%">✍️ AI 대본 생성하기</button>
        </div>
      </div>
    `
  },
  '썸네일 아이디어': {
    subtitle: '클릭을 부르는 고효율 썸네일 구성을 제안합니다',
    content: `
      <div class="bottom-grid">
        <div class="panel">
          <div class="panel-header"><span class="panel-title">🎨 추천 구성안 A</span></div>
          <div class="panel-body">
            <p style="font-size:13px; color:var(--text-mid);">배경: 어두운 배경에 강렬한 네온 텍스트<br>중앙: 놀라는 표정의 인물 클로즈업<br>텍스트: "당신만 몰랐던..."</p>
          </div>
        </div>
        <div class="panel">
          <div class="panel-header"><span class="panel-title">📸 추천 구성안 B</span></div>
          <div class="panel-body">
            <p style="font-size:13px; color:var(--text-mid);">배경: Before/After 비교 이미지<br>중앙: 결과물 대비 강조<br>텍스트: "0원에서 100만원까지"</p>
          </div>
        </div>
      </div>
    `
  },
  '제목 최적화': {
    subtitle: '클릭률(CTR)을 극대화하는 매력적인 제목 리스트',
    content: `
      <div class="panel">
        <div class="panel-body">
          <input class="url-input" style="width:100%; margin-bottom:12px;" placeholder="기존 제목을 입력하세요" />
          <button class="btn btn-primary" style="width:100%">🚀 제목 최적화 제안</button>
          <div style="margin-top:20px;">
            <div class="video-item"><div class="video-title">1. 아무도 알려주지 않는 유튜브의 비밀 (충격)</div></div>
            <div class="video-item"><div class="video-title">2. '이것' 하나로 조회수 10배 올렸습니다</div></div>
            <div class="video-item"><div class="video-title">3. 2025년 유튜버가 꼭 봐야 할 영상</div></div>
          </div>
        </div>
      </div>
    `
  },
  '해시태그 추천': {
    subtitle: '노출 빈도를 높이는 연관 해시태그와 태그 세트',
    content: `
      <div class="panel">
        <div class="panel-body">
          <input class="url-input" style="width:100%; margin-bottom:12px;" placeholder="영상 주제 또는 키워드 입력" />
          <button class="btn btn-primary" style="width:100%">🔖 해시태그 추출</button>
          <div style="margin-top:20px; display:flex; flex-wrap:wrap; gap:8px;">
            <span class="tag">#유튜브</span><span class="tag">#크리에이터</span><span class="tag">#AI</span><span class="tag">#성장노하우</span><span class="tag">#알고리즘</span><span class="tag">#조회수</span>
          </div>
        </div>
      </div>
    `
  }
};

function setActive(el, title) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  el.classList.add('active');
  
  const view = views[title];
  if (view) {
    document.getElementById('pageTitle').textContent = (title === '채널 분석' ? '📊 ' : '') + title;
    document.querySelector('.page-subtitle').textContent = view.subtitle;
    document.querySelector('.content').innerHTML = view.content;
  }
}

function analyze() {
  const url = document.getElementById('channelUrl')?.value.trim();
  if (!url) {
    alert('채널 URL을 입력해주세요!');
    return;
  }
  const btn = event.target;
  const originalText = btn.textContent;
  btn.textContent = '⏳ 분석 중...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '✅ 분석 완료!';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 2000);
  }, 2000);
}

let chatOpen = false;
function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('aiPanel').classList.toggle('open', chatOpen);
  document.getElementById('aiFab').style.display = chatOpen ? 'none' : 'flex';
}

const aiReplies = [
  '조회수를 높이려면 제목에 검색 키워드를 포함하고, 썸네일 클릭률(CTR)을 높이는 것이 중요합니다!',
  '알고리즘은 시청 지속률과 클릭률을 가장 중요하게 봅니다. 첫 30초가 핵심이에요.',
  '업로드 주기를 일정하게 유지하는 것이 구독자 유지에 매우 중요합니다.',
  '댓글과 좋아요 등 반응률이 높을수록 추천 알고리즘에 유리합니다.',
  '키워드 분석 탭에서 현재 트렌드 키워드를 확인해 제목에 활용해보세요!',
];
let replyIdx = 0;

function sendMsg() {
  const input = document.getElementById('aiInput');
  const msg = input.value.trim();
  if (!msg) return;

  const msgs = document.getElementById('aiMessages');
  msgs.innerHTML += `<div class="msg msg-user">${msg}</div>`;
  input.value = '';
  msgs.scrollTop = msgs.scrollHeight;

  setTimeout(() => {
    msgs.innerHTML += `<div class="msg msg-ai">${aiReplies[replyIdx % aiReplies.length]}</div>`;
    replyIdx++;
    msgs.scrollTop = msgs.scrollHeight;
  }, 800);
}
