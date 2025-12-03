import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/SectionTitle";
import { ArrowLeft, ArrowRight, Share2, Calendar } from "lucide-react";
import { Link, useRoute } from "wouter";
import { useEffect } from "react";

export default function StoryDetail() {
  const [, params] = useRoute("/story/:id");
  const id = params?.id || "1";

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <Layout>
      {/* Story Header */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img 
          src="/images/story_thumb_1.png" 
          alt="Story Header" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container max-w-4xl mx-auto">
            <Link href="/story">
              <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 mb-6 -ml-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Archive
              </Button>
            </Link>
            
            <div className="flex items-center gap-3 text-white/80 text-sm font-medium mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-white">Episode {id}</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Year 1 / Summer</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg font-sans">
              Harmony in Discord
            </h1>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <article className="container max-w-3xl mx-auto py-16 px-6 md:px-0">
        <div className="prose prose-lg prose-slate md:prose-xl font-serif leading-loose text-foreground/90">
          <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
            スタジオの空気は、張り詰めた糸のように冷たく、鋭かった。
          </p>
          
          <p>
            鏡張りの壁に反射する照明が、3人の表情を容赦なく照らし出す。Sakuraは膝に手をついて荒い息を整え、Aoiは腕を組んで鏡の中の自分を睨みつけている。そしてLunaは、少し離れた場所で困ったように二人を交互に見つめていた。
          </p>

          <p>
            「だから、そこのタイミングが違うって言ってるでしょ」
          </p>

          <p>
            沈黙を破ったのはAoiだった。彼女の声には、焦りと苛立ちが滲んでいる。
          </p>

          <p>
            「でも、AIプロデューサーの指示だと、ここはもっと感情を込めてフリーテンポ気味にって...」
          </p>

          <p>
            「それはソロパートの話！ ユニゾンでズレたら意味ないじゃない！」
          </p>

          <div className="my-12 p-8 bg-muted/30 rounded-2xl border-l-4 border-primary italic text-muted-foreground">
            <p className="mb-0">
              "完璧な同期（シンクロ）だけが正解ではない。時には不協和音（ディスコード）が、新たな調和を生むこともある。"
            </p>
            <div className="mt-4 text-sm font-sans font-bold text-primary">— AI Producer Log #1042</div>
          </div>

          <p>
            Sakuraは唇を噛んだ。Aoiの言うことは正しい。ダンスリーダーとしての彼女の指摘はいつだって的確だ。でも、何かが違う気がする。私たちが目指しているのは、ただ揃っただけのパフォーマンスなのだろうか？
          </p>

          <p>
            「...ねえ、一回休憩しない？」
          </p>

          <p>
            Lunaが恐る恐る提案する。その手には、いつの間にかスポーツドリンクのボトルが3本握られていた。
          </p>
          
          <p>
            窓の外では、夏の夕暮れが空を茜色に染め始めていた。プリズムのように複雑に屈折する光が、スタジオの床に長い影を落としている。
          </p>
          
          <p>
            私たちはまだ、本当の意味で「グループ」になれていないのかもしれない。
          </p>
        </div>

        {/* Story Footer */}
        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              <Share2 className="mr-2 h-4 w-4" /> Share
            </Button>
          </div>
          <div className="flex gap-4">
            <Link href={`/story/${Number(id) - 1}`}>
              <Button variant="ghost" disabled={id === "1"}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
            </Link>
            <Link href={`/story/${Number(id) + 1}`}>
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                Next Episode <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </article>

      {/* Related SNS */}
      <section className="bg-muted/30 py-16">
        <div className="container max-w-4xl mx-auto">
          <SectionTitle title="Related SNS Logs" subtitle="このエピソードの裏側で。" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
                  <img src="/images/member_2.png" alt="Aoi" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm">Aoi</div>
                  <div className="text-xs text-muted-foreground">Year 1 / Summer</div>
                </div>
              </div>
              <p className="text-sm mb-4">
                言い過ぎちゃったかな...。でも、妥協したくない。私たちならもっと上に行けるはずだから。 #PrismBeat #Rehearsal
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
                  <img src="/images/member_1.png" alt="Sakura" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm">Sakura</div>
                  <div className="text-xs text-muted-foreground">Year 1 / Summer</div>
                </div>
              </div>
              <p className="text-sm mb-4">
                Lunaちゃんがくれたドリンク、すごく美味しかった！🥤 明日も頑張ろう。雨降って地固まる、だよね！🌈
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/sns">
              <Button variant="outline" className="rounded-full">View All SNS Logs</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
