import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { PrismCard } from "@/components/PrismCard";
import { Button } from "@/components/ui/button";
import { Play, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";

const episodes = [
  {
    id: 3,
    title: "Harmony in Discord",
    season: 1,
    date: "Year 1 / Summer",
    duration: "15 min read",
    image: "/images/story_thumb_1.png",
    summary: "練習中の意見の食い違いから、スタジオに不穏な空気が流れる。しかし、それは互いの本音を知るための必要なプロセスだった。",
    isNew: true
  },
  {
    id: 2,
    title: "First Meeting",
    season: 1,
    date: "Year 1 / Spring",
    duration: "12 min read",
    image: "/images/hero_main.png", // Placeholder, should be different
    summary: "オーディションを勝ち抜いた3人が初めて顔を合わせる。緊張と期待が入り混じる中、プロデューサーAIからの最初の指令が下る。",
    isNew: false
  },
  {
    id: 1,
    title: "The Audition",
    season: 1,
    date: "Year 1 / Spring",
    duration: "10 min read",
    image: "/images/hero_main.png", // Placeholder
    summary: "数千人の応募者の中から選ばれた3人の少女たち。彼女たちがアイドルを目指す理由、そしてAIによる選抜の基準とは。",
    isNew: false
  }
];

export default function Story() {
  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border/50">
        <div className="container text-center">
          <h1 className="font-sans text-4xl font-bold mb-4">Story Archive</h1>
          <p className="text-muted-foreground font-serif max-w-2xl mx-auto">
            AIと共に歩む、彼女たちの軌跡。
            <br />
            喜びも葛藤も、すべてがここに記録されています。
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold font-sans flex items-center gap-2">
            <span className="w-1 h-8 bg-primary rounded-full" />
            Season 1
          </h2>
          <div className="text-sm text-muted-foreground">
            Total 3 Episodes
          </div>
        </div>

        <div className="space-y-8">
          {episodes.map((episode) => (
            <PrismCard key={episode.id} className="group overflow-hidden bg-white" hoverEffect={true}>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative aspect-video md:aspect-auto overflow-hidden">
                  <img 
                    src={episode.image} 
                    alt={episode.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  {episode.isNew && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg">
                      NEW
                    </div>
                  )}
                </div>
                
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {episode.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {episode.duration}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                    <span className="text-muted-foreground/50 mr-3">#{episode.id}</span>
                    {episode.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-serif leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                    {episode.summary}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                    <Link href={`/story/${episode.id}`}>
                      <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 group-hover:translate-x-1 transition-all">
                        Read Episode <Play className="ml-2 w-4 h-4 fill-current" />
                      </Button>
                    </Link>
                    
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-muted overflow-hidden">
                          <img src={`/images/member_${i}.png`} alt="Member" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PrismCard>
          ))}
        </div>
      </div>
    </Layout>
  );
}
