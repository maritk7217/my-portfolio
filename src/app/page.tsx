"use client";

// ★修正1：{ motion } の隣に , Variants を追加します
import { motion, Variants } from "framer-motion"; 
import { useState } from "react";
import Image from "next/image";

// ★修正2：変数名の後ろに : Variants を追加します
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// ★修正3：変数名の後ろに : Variants を追加します
const staggerItem: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
};

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xzdkaqqk", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert("送信に失敗しました。時間をおいて再度お試しください。");
      }
    } catch (error) {
      alert("エラーが発生しました。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-primary-dark text-white font-sans overflow-x-hidden">
      
      {/* =======================
          1. Hero セクション
      ======================= */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8 text-center relative">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold text-accent-gold mb-6 tracking-wide"
        >
          Niina & Noa System.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl text-gray-300 leading-relaxed mb-12"
        >
          「言われたものを作る」のではなく、「120%」の成果物を提供する。<br />
          表面的な課題を解決するだけでなく、ユーザーの隠れたニーズを掘り起こし、＋αの<br />アイデアを掛け合わせたプロダクトを提案します。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          {/* ★追加：ボタンにホバー（浮き上がり）とタップ（沈み込み）の動きを追加 */}
          <motion.a 
            href="#works" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-accent-gold text-primary-dark font-bold text-lg rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
          >
            作品を見る
          </motion.a>
        </motion.div>
      </section>

      {/* =======================
          2. Works セクション
      ======================= */}
      <section id="works" className="py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent-gold mb-4 border-l-4 border-accent-gold pl-4">
            Featured Project
          </h2>
          <p className="text-gray-400 text-lg">課題解決アプローチを具現化した代表作</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
              GrachanScore
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              幹事の業務負担とプレイヤーの「こんな機能が欲しい」を同時に叶える、フルスタックのプロ仕様ゴルフスコア管理アプリ。
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "LINEログインAPIを活用したパスワードレス認証",
                "Wペリア計算エンジン搭載 (男女別ハンディ上限完全対応)",
                "誤タップ防止・画面幅に応じたこだわりのUI/UX設計",
                "QRコードを利用した同伴者スコアの先行読み込み"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent-gold mr-3 mt-1">✔</span>
                  <span className="text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "Node.js (Express)", "MongoDB", "Tailwind CSS"].map((tech) => (
                <span key={tech} className="bg-primary/50 border border-primary-light text-sm px-4 py-1.5 rounded-full text-gray-200 hover:bg-primary transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ★追加：スマホを「左→中央→右」と順番に出現させ、マウスホバーで少し浮き上がるように変更 */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-1/2 flex justify-center items-center gap-4 md:gap-6 relative"
          >
            {/* スマホ 1 (左) */}
            <motion.div variants={staggerItem} whileHover={{ y: -10 }} className="w-1/3 max-w-[180px] aspect-[9/16] bg-primary rounded-[2rem] border-[6px] border-gray-800 shadow-2xl translate-y-8 flex flex-col overflow-hidden relative cursor-pointer">
              <div className="absolute top-2 w-1/3 h-4 bg-gray-800 rounded-b-xl left-1/2 -translate-x-1/2 z-10"></div>
              <Image src="/grachan1.png" alt="GrachanScore UI" fill className="object-cover z-10" />
            </motion.div>

            {/* スマホ 2 (中央・メイン) */}
            <motion.div variants={staggerItem} whileHover={{ y: -10, scale: 1.02 }} className="w-1/3 max-w-[180px] aspect-[9/16] bg-primary rounded-[2rem] border-[6px] border-gray-800 shadow-2xl z-10 -translate-y-4 flex flex-col overflow-hidden relative shadow-[0_0_30px_rgba(212,175,55,0.2)] cursor-pointer">
              <div className="absolute top-2 w-1/3 h-4 bg-gray-800 rounded-b-xl left-1/2 -translate-x-1/2 z-10"></div>
              <Image src="/grachan2.png" alt="GrachanScore Main" fill className="object-cover z-10" />
            </motion.div>

            {/* スマホ 3 (右) */}
            <motion.div variants={staggerItem} whileHover={{ y: -10 }} className="w-1/3 max-w-[180px] aspect-[9/16] bg-primary rounded-[2rem] border-[6px] border-gray-800 shadow-2xl translate-y-8 flex flex-col overflow-hidden relative cursor-pointer">
              <div className="absolute top-2 w-1/3 h-4 bg-gray-800 rounded-b-xl left-1/2 -translate-x-1/2 z-10"></div>
              <Image src="/grachan3.png" alt="GrachanScore QR" fill className="object-cover z-10" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =======================
          3. About セクション
      ======================= */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent-gold mb-4 inline-block border-b-4 border-accent-gold pb-2">
            About Me
          </h2>
          <p className="text-gray-400 text-lg mt-4">現場の困り事を、コードで解決するエンジニア</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-5/12 flex justify-center"
          >
            {/* ★追加：プロフィール画像にホバーした時、わずかに拡大するアニメーション */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-accent-gold/50 bg-primary shadow-[0_0_30px_rgba(212,175,55,0.2)] flex items-center justify-center overflow-hidden relative group cursor-pointer"
            >
               <Image src="/profile.jpg" alt="Profile" fill className="object-cover z-10 transition-transform duration-700 group-hover:scale-110" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-7/12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white leading-tight">
              「現場」を知っているからこそ、<br className="hidden md:block"/>
              痒い所に手が届くプロダクトが作れる。
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              フルスタックのスコア管理アプリ「GrachanScore」をゼロから完成させた経験から、私は「技術力」と同じくらい「現場のドメイン知識」が重要であると確信しています。
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              幹事がWペリアの計算でどれほど苦労しているのか、プレイヤーがプレイ中にどうスマホを操作するのか。そうした「現場のリアルな解像度」を持っているからこそ、単に仕様通り動くものではなく、真にユーザーの課題を解決する＋αのWeb体験を設計できます。
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-accent-light font-semibold mb-3 tracking-wider text-sm">FRONTEND</h4>
                <div className="flex flex-wrap gap-2">
                  {/* ★追加：スキルバッジにホバーエフェクト（spanをmotion.spanに変更） */}
                  {["HTML/CSS", "React", "Next.js", "Tailwind CSS", "Framer Motion"].map(skill => (
                    <motion.span 
                      key={skill} 
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(212,175,55,0.2)", borderColor: "#D4AF37" }}
                      className="px-3 py-1 bg-primary-light/50 border border-primary-light text-sm rounded text-white cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-accent-light font-semibold mb-3 tracking-wider text-sm">BACKEND & DB</h4>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "MongoDB", "REST API", "LINE Login API"].map(skill => (
                    <motion.span 
                      key={skill} 
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(212,175,55,0.2)", borderColor: "#D4AF37" }}
                      className="px-3 py-1 bg-primary-light/50 border border-primary-light text-sm rounded text-white cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =======================
          4. Contact セクション
      ======================= */}
      <section id="contact" className="py-24 px-6 md:px-12 max-w-4xl mx-auto flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent-gold mb-4 inline-block border-b-4 border-accent-gold pb-2">
            Contact
          </h2>
          <p className="text-gray-400 text-lg mt-4">プロジェクトのご相談やお問い合わせはこちらから</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-primary/30 p-8 md:p-12 rounded-3xl border border-primary-light backdrop-blur-sm"
        >
          {isSubmitted ? (
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }} 
               animate={{ opacity: 1, scale: 1 }} 
               className="text-center py-12"
             >
               <h3 className="text-2xl font-bold text-accent-gold mb-4">送信完了しました！</h3>
               <p className="text-gray-300">お問い合わせありがとうございます。<br/>内容を確認次第、ご連絡させていただきます。</p>
             </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm text-gray-300 mb-2 ml-1">お名前</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    className="bg-primary-dark/50 border border-primary-light rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all"
                    placeholder="山田 太郎"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm text-gray-300 mb-2 ml-1">メールアドレス</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="bg-primary-dark/50 border border-primary-light rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm text-gray-300 mb-2 ml-1">メッセージ</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={5}
                  className="bg-primary-dark/50 border border-primary-light rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all resize-none"
                  placeholder="お問い合わせ内容をご記入ください。"
                ></textarea>
              </div>
              <div className="pt-4 text-center">
                {/* ★追加：送信ボタンにもホバーとタップのアニメーション */}
                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto px-12 py-4 bg-accent-gold text-primary-dark font-bold text-lg rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "送信中..." : "送信する"}
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </section>

      {/* =======================
          Footer
      ======================= */}
      <footer className="border-t border-primary-light mt-12 py-8 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} My Portfolio. Built with Next.js & Tailwind CSS.
        </p>
      </footer>

    </div>
  );
}