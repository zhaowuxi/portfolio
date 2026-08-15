const experiences = [
  {
    year: '2014 — 2018',
    role: '行政专员',
    company: '睿璐贸易',
    desc: '4 年行政运营，经手采购订单 300+ 笔，管理各类行政档案 2000+ 份，建立电子化台账检索体系，实现零差错管理。',
  },
  {
    year: '2018 — 2019',
    role: '档案管理',
    company: '天鑫洋金业',
    desc: '负责贵金属交易档案归集与借阅管理，严格执行"三查三对"核验流程，一年内经手归档档案逾千份，全周期零错漏。',
  },
  {
    year: '2020 — 2022',
    role: '电话客服',
    company: '兴瑞通旅行社',
    desc: '日均接听来电 1000+ 通，两年累计处理各类工单 50000+ 件，客户满意度稳定在 90% 以上。多次在团队内分享话术经验与情绪疏导方法。',
  },
  {
    year: '2022 — 2023',
    role: '售后客服',
    company: '博睿时代',
    desc: '设计并运行年处理 20000+ 工单的售后体系，自主完结率超 90%。大促期间制作标准化模板，同类投诉重复率下降近 40%。',
  },
  {
    year: '2024 — 2025',
    role: '门店运营',
    company: '小米授权体验店',
    desc: '全链路门店运营，涵盖品牌陈列、库存管理、销售数据追踪及业务对接，任职期间门店月均销售额稳步提升。',
  },
]

export default function Career() {
  return (
    <section className="career section" id="career">
      <div className="container">
        <div className="section-header section-header--center reveal">
          <span className="section-num">02</span>
          <h2 className="section-title">职业经历</h2>
          <div className="gold-line" />
          <p className="section-desc">
            十一载跨越四大领域，每一步都算数
          </p>
        </div>

        <div className="career__timeline">
          {experiences.map((exp, i) => (
            <div key={exp.role} className={`career__item reveal reveal-delay-${i + 1}`}>
              <div className="career__year">{exp.year}</div>
              <div className="career__body">
                <h3 className="career__role">{exp.role}</h3>
                <p className="career__company">{exp.company}</p>
                <p className="career__desc">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
