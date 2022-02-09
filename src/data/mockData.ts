

const mockData = [
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "공공행정",
        "value": 80,
        "_score": 0.0,
        "dataSe": "O",
        "name": "국정홍보"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "공공행정",
        "value": 6084,
        "_score": 0.0,
        "dataSe": "O",
        "name": "일반행정"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "과학기술",
        "value": 380,
        "_score": 0.0,
        "dataSe": "O",
        "name": "방송통신"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "교통물류",
        "value": 223,
        "_score": 0.0,
        "dataSe": "O",
        "name": "항공·공항"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "국토관리",
        "value": 121,
        "_score": 0.0,
        "dataSe": "O",
        "name": "산업단지"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "국토관리",
        "value": 703,
        "_score": 0.0,
        "dataSe": "O",
        "name": "주택"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "사회복지",
        "value": 667,
        "_score": 0.0,
        "dataSe": "O",
        "name": "노인·청소년"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "사회복지",
        "value": 717,
        "_score": 0.0,
        "dataSe": "O",
        "name": "보육·가족및여성"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "사회복지",
        "value": 1419,
        "_score": 0.0,
        "dataSe": "O",
        "name": "사회복지일반"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "사회복지",
        "value": 296,
        "_score": 0.0,
        "dataSe": "O",
        "name": "취약계층지원"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "산업고용",
        "value": 72,
        "_score": 0.0,
        "dataSe": "O",
        "name": "통상"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "식품건강",
        "value": 1765,
        "_score": 0.0,
        "dataSe": "O",
        "name": "식품의약안전"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "재난안전",
        "value": 487,
        "_score": 0.0,
        "dataSe": "O",
        "name": "경찰"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "재난안전",
        "value": 2468,
        "_score": 0.0,
        "dataSe": "O",
        "name": "안전관리"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "재정금융",
        "value": 206,
        "_score": 0.0,
        "dataSe": "O",
        "name": "금융"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "재정금융",
        "value": 112,
        "_score": 0.0,
        "dataSe": "O",
        "name": "기획재정"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "재정금융",
        "value": 840,
        "_score": 0.0,
        "dataSe": "O",
        "name": "산업금융"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "재정금융",
        "value": 1526,
        "_score": 0.0,
        "dataSe": "O",
        "name": "재정·금융"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "통일외교안보",
        "value": 65,
        "_score": 0.0,
        "dataSe": "O",
        "name": "방위력개선"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "통일외교안보",
        "value": 169,
        "_score": 0.0,
        "dataSe": "O",
        "name": "보훈"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "통일외교안보",
        "value": 23,
        "_score": 0.0,
        "dataSe": "O",
        "name": "전력유지"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "환경기상",
        "value": 586,
        "_score": 0.0,
        "dataSe": "O",
        "name": "대기"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "환경기상",
        "value": 973,
        "_score": 0.0,
        "dataSe": "O",
        "name": "폐기물"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "공공행정",
        "value": 604,
        "_score": 0.0,
        "dataSe": "O",
        "name": "국가통계"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "공공행정",
        "value": 39,
        "_score": 0.0,
        "dataSe": "O",
        "name": "국민권익·인권"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "공공행정",
        "value": 52,
        "_score": 0.0,
        "dataSe": "O",
        "name": "국정운영"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "공공행정",
        "value": 587,
        "_score": 0.0,
        "dataSe": "O",
        "name": "지방행정·재정지원"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "과학기술",
        "value": 748,
        "_score": 0.0,
        "dataSe": "O",
        "name": "과학기술진흥"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "과학기술",
        "value": 53,
        "_score": 0.0,
        "dataSe": "O",
        "name": "우정"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "교육",
        "value": 342,
        "_score": 0.0,
        "dataSe": "O",
        "name": "고등교육"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "교통물류",
        "value": 1905,
        "_score": 0.0,
        "dataSe": "O",
        "name": "도로"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "교통물류",
        "value": 1025,
        "_score": 0.0,
        "dataSe": "O",
        "name": "물류등기타"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "교통물류",
        "value": 1301,
        "_score": 0.0,
        "dataSe": "O",
        "name": "철도"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "교통물류",
        "value": 344,
        "_score": 0.0,
        "dataSe": "O",
        "name": "해운·항만"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "농축수산",
        "value": 1525,
        "_score": 0.0,
        "dataSe": "O",
        "name": "농업·농촌"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "농축수산",
        "value": 502,
        "_score": 0.0,
        "dataSe": "O",
        "name": "해양수산·어촌"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "문화관광",
        "value": 1280,
        "_score": 0.0,
        "dataSe": "O",
        "name": "문화체육관광일반"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "사회복지",
        "value": 409,
        "_score": 0.0,
        "dataSe": "O",
        "name": "공적연금"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "사회복지",
        "value": 47,
        "_score": 0.0,
        "dataSe": "O",
        "name": "기초생활보장"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "산업고용",
        "value": 199,
        "_score": 0.0,
        "dataSe": "O",
        "name": "산업기술지원"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "산업고용",
        "value": 227,
        "_score": 0.0,
        "dataSe": "O",
        "name": "산업진흥·고도화"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "산업고용",
        "value": 2013,
        "_score": 0.0,
        "dataSe": "O",
        "name": "에너지및자원개발"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "재정금융",
        "value": 302,
        "_score": 0.0,
        "dataSe": "O",
        "name": "무역및투자유치"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "재정금융",
        "value": 1383,
        "_score": 0.0,
        "dataSe": "O",
        "name": "세제"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "통일외교안보",
        "value": 186,
        "_score": 0.0,
        "dataSe": "O",
        "name": "병무행정"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "통일외교안보",
        "value": 74,
        "_score": 0.0,
        "dataSe": "O",
        "name": "통일"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "공공행정",
        "value": 34,
        "_score": 0.0,
        "dataSe": "O",
        "name": "공정거래"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "공공행정",
        "value": 71,
        "_score": 0.0,
        "dataSe": "O",
        "name": "법제"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "공공행정",
        "value": 326,
        "_score": 0.0,
        "dataSe": "O",
        "name": "정부자원관리"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "공공행정",
        "value": 19,
        "_score": 0.0,
        "dataSe": "O",
        "name": "정부조달"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "과학기술",
        "value": 626,
        "_score": 0.0,
        "dataSe": "O",
        "name": "과학기술연구"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "교육",
        "value": 1758,
        "_score": 0.0,
        "dataSe": "O",
        "name": "교육일반"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "교육",
        "value": 414,
        "_score": 0.0,
        "dataSe": "O",
        "name": "유아및초·중등교육"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "교육",
        "value": 884,
        "_score": 0.0,
        "dataSe": "O",
        "name": "평생·직업교육"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "국토관리",
        "value": 308,
        "_score": 0.0,
        "dataSe": "O",
        "name": "수자원"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "국토관리",
        "value": 2602,
        "_score": 0.0,
        "dataSe": "O",
        "name": "지역및도시"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "농축수산",
        "value": 1641,
        "_score": 0.0,
        "dataSe": "O",
        "name": "임업·산촌"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "문화관광",
        "value": 1919,
        "_score": 0.0,
        "dataSe": "O",
        "name": "관광"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "문화관광",
        "value": 1788,
        "_score": 0.0,
        "dataSe": "O",
        "name": "문화예술"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "문화관광",
        "value": 1481,
        "_score": 0.0,
        "dataSe": "O",
        "name": "문화재"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "문화관광",
        "value": 695,
        "_score": 0.0,
        "dataSe": "O",
        "name": "체육"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "법률",
        "value": 351,
        "_score": 0.0,
        "dataSe": "O",
        "name": "법무및검찰"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "보건의료",
        "value": 182,
        "_score": 0.0,
        "dataSe": "O",
        "name": "건강보험"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "보건의료",
        "value": 2818,
        "_score": 0.0,
        "dataSe": "O",
        "name": "보건의료"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "산업고용",
        "value": 605,
        "_score": 0.0,
        "dataSe": "O",
        "name": "고용노동"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "산업고용",
        "value": 2408,
        "_score": 0.0,
        "dataSe": "O",
        "name": "산업·중소기업일반"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "산업고용",
        "value": 66,
        "_score": 0.0,
        "dataSe": "O",
        "name": "원자력기술"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "재난안전",
        "value": 90,
        "_score": 0.0,
        "dataSe": "O",
        "name": "해경"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "통일외교안보",
        "value": 52,
        "_score": 0.0,
        "dataSe": "O",
        "name": "병력운영"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "통일외교안보",
        "value": 264,
        "_score": 0.0,
        "dataSe": "O",
        "name": "외교"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "환경기상",
        "value": 793,
        "_score": 0.0,
        "dataSe": "O",
        "name": "상하수도·수질"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "환경기상",
        "value": 596,
        "_score": 0.0,
        "dataSe": "O",
        "name": "자연"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "환경기상",
        "value": 180,
        "_score": 0.0,
        "dataSe": "O",
        "name": "해양환경"
    },
    {
        "lodDt": 1642950000000,
        "childrenPropInData": "환경기상",
        "value": 1296,
        "_score": 0.0,
        "dataSe": "O",
        "name": "환경일반"
    }
];

const groupBy = function (data, key) {
    return data.reduce(function (carry, el) {
        var group = el[key];

        if (carry[group] === undefined) {
            carry[group] = []
        }

        carry[group].push(el)
        return carry
    }, {})
}

const groupByChildren = groupBy(mockData, 'childrenPropInData');

export const result = {
    'name': '전체',
    'children': Object.keys(groupByChildren).map((name)=>{
        return {
            name,
            children: groupByChildren[name]
        }
    })
}