/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Camera, 
  Mic, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Smartphone, 
  Clock, 
  Layout, 
  TrendingUp,
  MessageSquare,
  Zap
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-deep-navy/90 backdrop-blur-md border-b border-white/10 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-accent-gold p-1.5 rounded-lg">
              <Zap className="w-6 h-6 text-deep-navy fill-current" />
            </div>
            <span className="text-white font-black text-xl tracking-tighter">AI現場監督</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-deep-navy">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-accent-gold rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
              現場から、そのまま直帰。<br />
              <span className="text-accent-gold">始めませんか？</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-medium">
              事務所に戻ってパソコンを叩く「あの時間」を、ゼロにする。<br className="hidden md:block" />
              喋るだけでプロ仕様の日報が完成。AI現場監督。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://lin.ee/a3SQYsJ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-gold hover:bg-white text-deep-navy text-lg font-black py-5 px-10 rounded-xl transition-all flex items-center justify-center gap-2 shadow-2xl shadow-accent-gold/20"
              >
                LINEで友達追加する <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating elements for dynamic feel */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block absolute top-1/4 right-10 bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-white text-sm font-bold">AI解析中...</span>
          </div>
          <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              animate={{ x: [-200, 200] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-1/2 h-full bg-accent-gold"
            />
          </div>
        </motion.div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">親方、こんな毎日を過ごしていませんか？</h2>
            <div className="w-20 h-1.5 bg-accent-gold mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Clock className="w-10 h-10 text-red-500" />,
                title: "事務所への戻り",
                desc: "現場が終わった後の「日報作り」のために事務所へ戻る。"
              },
              {
                icon: <Smartphone className="w-10 h-10 text-red-500" />,
                title: "写真の転送",
                desc: "スマホで撮った写真をパソコンに移すのが、とにかく面倒。"
              },
              {
                icon: <FileText className="w-10 h-10 text-red-500" />,
                title: "読みにくい日報",
                desc: "疲れ果てて書いた日報が、読みにくいと言われる。"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:scale-105 transition-transform"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-black mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            {...fadeIn}
            className="mt-16 bg-deep-navy text-white p-8 md:p-12 rounded-[2rem] text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black mb-4">
                「AI現場監督」なら、現場を離れる瞬間に、すべてが終わります。
              </h3>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6">使い方は、いつものLINEを送るだけ。</h2>
            <p className="text-slate-500 text-lg font-bold">驚くほど簡単な3つのステップ</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
            
            {[
              {
                step: "Step 1",
                icon: <Camera className="w-8 h-8" />,
                title: "写真を送る",
                desc: "現場の状況をポイポイとLINEに送信。"
              },
              {
                step: "Step 2",
                icon: <Mic className="w-8 h-8" />,
                title: "ボイスを送る",
                desc: "現場の状況をパッと喋るだけ。事務所に戻る必要はありません。"
              },
              {
                step: "Step 3",
                icon: <FileText className="w-8 h-8" />,
                title: "PDFを受け取る",
                desc: "AIがあなたの声を解析。1分後に、プロ仕様のPDF日報が届きます。"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 bg-white border-2 border-slate-50 p-8 rounded-3xl text-center shadow-lg"
              >
                <div className="inline-block bg-accent-gold text-deep-navy font-black px-4 py-1 rounded-full text-sm mb-6">
                  {item.step}
                </div>
                <div className="w-20 h-20 bg-deep-navy text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-deep-navy/20">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-slate-600 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Voice Guide Section */}
          <motion.div 
            {...fadeIn}
            className="mt-20 bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-200 shadow-inner"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-black mb-8 flex items-center gap-3">
                  <Mic className="text-accent-gold w-8 h-8" />
                  AIが唸る！日報を爆速で作る<br />「5つの重要ポイント」
                </h3>
                <ul className="space-y-6">
                  {[
                    { num: "1", title: "現場名", example: "どこの仕事か（例：〇〇邸、米子駅前ビル）" },
                    { num: "2", title: "作業詳細", example: "何をしたか（例：クロス貼り、基礎打ち）" },
                    { num: "3", title: "進捗状況", example: "あとどのくらいか（例：8割完了、今日で終わり）" },
                    { num: "4", title: "従事者", example: "誰といたか（例：自分と佐藤の2名）" },
                    { num: "5", title: "特記事項", example: "明日への引継ぎや資材のこと（例：明日は雨、資材搬入あり）" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-deep-navy text-white rounded-full flex items-center justify-center font-black">
                        {item.num}
                      </div>
                      <div>
                        <h4 className="font-black text-lg">{item.title}</h4>
                        <p className="text-slate-500 text-sm font-bold">{item.example}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                  <h4 className="text-accent-gold font-black text-sm uppercase tracking-widest mb-4">お手本ボイス</h4>
                  <p className="text-lg font-bold leading-relaxed text-slate-700 italic">
                    「〇〇邸の改修工事です。今日は床の張り替えと壁のクロス貼りをしました。全体で80%くらい終わりました。作業は私と佐藤の2名です。明日は雨予報なので、外の資材にシートを被せました。以上です。」
                  </p>
                </div>

                <div className="bg-deep-navy text-white p-8 rounded-3xl shadow-xl">
                  <h4 className="text-accent-gold font-black text-sm uppercase tracking-widest mb-4">吹き込み用テンプレート</h4>
                  <div className="font-mono text-sm space-y-2 opacity-90">
                    <p>「（現場名）です。」</p>
                    <p>「今日は（作業内容）をしました。」</p>
                    <p>「進捗は（状況）です。」</p>
                    <p>「メンバーは（自分と誰か）です。」</p>
                    <p>「（明日の予定や注意点）です。以上！」</p>
                  </div>
                  <p className="mt-6 text-accent-gold font-black text-sm">
                    ※これだけで、事務所に戻る必要はなくなります。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-deep-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8">
                「これ、お前が作ったのか？」と<br />驚かれるクオリティ。
              </h2>
              <ul className="space-y-8">
                {[
                  {
                    icon: <Layout className="text-accent-gold" />,
                    title: "プロのデザイン",
                    desc: "信頼のディープネイビーを基調としたビジネス仕様。"
                  },
                  {
                    icon: <Camera className="text-accent-gold" />,
                    title: "証拠写真も一括挿入",
                    desc: "面倒な写真の貼り付けも、AIが自動レイアウト。"
                  },
                  {
                    icon: <TrendingUp className="text-accent-gold" />,
                    title: "経営提言付き",
                    desc: "AIが現場の状況を分析し、一歩先の改善案を提案します。"
                  }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-black mb-1">{item.title}</h4>
                      <p className="text-slate-400 font-medium">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Mockup of PDF */}
                <div className="aspect-[1/1.414] bg-slate-50 rounded border border-slate-200 p-8 text-slate-900 overflow-hidden">
                  <div className="flex justify-between items-start mb-8 border-b-4 border-deep-navy pb-4">
                    <div>
                      <h3 className="text-2xl font-black text-deep-navy">業務日報</h3>
                      <p className="text-xs font-bold text-slate-500">DAILY REPORT</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold">2026年3月17日</p>
                      <p className="text-xs text-slate-500">作成：AI現場監督</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-deep-navy/5 p-3 rounded">
                      <p className="text-[10px] font-bold text-deep-navy mb-1 uppercase">現場名</p>
                      <p className="text-sm font-black">米子市 〇〇邸 改修工事</p>
                    </div>
                    <div className="bg-deep-navy/5 p-3 rounded">
                      <p className="text-[10px] font-bold text-deep-navy mb-1 uppercase">担当者</p>
                      <p className="text-sm font-black">佐藤 健一</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-[10px] font-bold text-deep-navy mb-2 uppercase">本日の作業内容</p>
                    <p className="text-sm leading-relaxed">
                      床下清掃および断熱材の確認。佐藤と2名で作業。
                      予定通り午前中に清掃を完了し、午後から断熱材の敷設を開始。
                      湿気対策として防湿シートの追加を推奨。
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    <div className="aspect-video bg-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-400">施工前写真</div>
                    <div className="aspect-video bg-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-400">施工後写真</div>
                  </div>

                  <div className="bg-accent-gold/10 border-l-4 border-accent-gold p-4">
                    <p className="text-[10px] font-black text-accent-gold mb-1 uppercase">AI経営アドバイス</p>
                    <p className="text-[11px] leading-relaxed italic">
                      「現在の進捗は予定より15%早いです。明日の雨天予報を考慮し、室内作業の資材搬入を本日中に完了させることで、工期短縮が可能です。」
                    </p>
                  </div>
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -left-6 bg-accent-gold text-deep-navy p-6 rounded-full font-black text-center shadow-xl transform -rotate-12">
                最高傑作の<br />PDF日報
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">コーヒー数杯分で、毎月の「残業20時間」を削減。</h2>
            <p className="text-slate-500 text-lg font-bold">シンプルで誠実な料金プラン</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border-4 border-accent-gold relative"
          >
            <div className="bg-accent-gold py-4 text-center">
              <span className="text-deep-navy font-black text-sm uppercase tracking-widest">一番人気</span>
            </div>
            <div className="p-12">
              <h3 className="text-2xl font-black text-center mb-2">始めよう、プロプラン</h3>
              <div className="text-center mb-8">
                <span className="text-5xl font-black">3,000</span>
                <span className="text-xl font-bold text-slate-500 ml-2">円（税込）/ 月</span>
              </div>
              
              <ul className="space-y-6">
                {[
                  "日報作成：無制限",
                  "写真保存：無制限",
                  "専用フォルダ自動作成",
                  "まずは無料でお試し（3回まで無料）"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-gold" />
                    <span className="font-bold text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-center text-sm text-slate-400 font-medium">
                登録はLINE連携のみで即開始。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Message Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 mb-8 text-deep-navy">
              <Zap className="w-8 h-8 fill-current" />
              <span className="text-2xl font-black tracking-tighter">AI現場監督</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
              米子のIT技術が、日本の現場を支える力になる。
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-12">
              私たちは、現場で汗を流す人が一番「損をしない」世界を目指しています。<br />
              事務作業はAIに任せて、親方は「最高のものづくり」に集中してください。
            </p>
            <div className="flex flex-col items-center gap-4">
              <a 
                href="https://lin.ee/a3SQYsJ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-gold hover:bg-deep-navy hover:text-white text-deep-navy text-xl font-black py-6 px-12 rounded-2xl transition-all shadow-2xl"
              >
                LINEで今すぐ体験する
              </a>
              <p className="text-slate-400 text-sm font-bold">© 2026 AI現場監督 - Made in Yonago</p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
